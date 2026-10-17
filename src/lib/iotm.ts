import {
  appearanceRates,
  availableAmount,
  availableChoiceOptions,
  cliExecute,
  combatRateModifier,
  create,
  handlingChoice,
  haveEffect,
  haveEquipped,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  lastMonster,
  Location,
  Monster,
  myBuffedstat,
  myHash,
  myLocation,
  numericModifier,
  print,
  runChoice,
  runCombat,
  Skill,
  toMonster,
  turnsUntilForcedNoncombat,
  use,
  visitUrl,
  myAdventures,
  getLocationMonsters,
  equip,
  equippedItem,
  buy,
  Slot,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $location,
  $locations,
  $monster,
  $skill,
  $slot,
  $stat,
  AutumnAton,
  EternityCodpiece,
  get,
  getBanishedMonsters,
  Leprecondo,
  Mining,
  PocketProfessor,
  SourceTerminal,
  TrainSet,
} from "libram";

import {
  cheatsheetsNeeded,
  diverForceReady,
  diverHuntActive,
  forcesAfterHealer,
  seaCowNeeded,
} from "./progress";
import { equipSwimTrunks } from "./resources";
import { haveItem, highShiny, step } from "./state";

// IOTM and game-mechanic helpers. Ported from UnderTheSeaGlobals.ash.

// ─── SMALL CHECKS ─────────────────────────────────────────────────────────────

/**
 * Monsters that give a free fight: whatever mafia's monster data tags FREE
 * (the Kramco's goblins, Black Crayon monsters, trick-or-treat kids, Witchess,
 * Eldritch Tentacles...), plus the time cop, which mafia leaves untagged.
 */
export function freeMonster(monster: Monster): boolean {
  return monster === $monster`time cop` || /(^|\s)FREE(\s|$)/.test(monster.attributes);
}

export function parkaForceAvailable(): boolean {
  return haveItem($item`Jurassic Parka`) && get("_spikolodonSpikeUses") < 5;
}

export function leftSkiAvailable(): boolean {
  return haveItem($item`McHugeLarge left ski`) && get("_mcHugeLargeAvalancheUses") < 3;
}

/** The low roll of one Saucegeyser cast. */
export function geyserLowRoll(): number {
  const flat =
    numericModifier("Spell Damage") +
    Math.max(numericModifier("Hot Spell Damage"), numericModifier("Cold Spell Damage"));
  const base = 60 + Math.floor(0.4 * myBuffedstat($stat`Mysticality`)) + flat;
  return Math.floor(base * (1 + numericModifier("Spell Damage Percent") / 100));
}

/**
 * Says what an unbounded zone loop is waiting for, every ten turns past the
 * mark. Call before the turn: it reads what is worn.
 */
export function zoneStall(
  waitingFor: string,
  gate: Item,
  zone: Location,
  spent: number,
  mark: number,
): void {
  if (spent < mark || (spent - mark) % 10 !== 0) return;
  let why: string;
  if (gate === $item.none) {
    const forced = turnsUntilForcedNoncombat(zone);
    why = `${forced < 0 ? "no forced noncombat here" : `forced noncombat in ${forced} turns`}, combat rate ${Math.round(combatRateModifier())}%`;
  } else {
    why = `${gate} x${itemAmount(gate)}, item ${Math.round(numericModifier("Item Drop"))}% against this zone's ${Math.round(numericModifier(`Loc:${zone}`, "Item Drop Penalty"))}%`;
  }
  print(`${spent} turns in ${zone} still waiting on ${waitingFor}: ${why}.`, "red");
}

/** Yellow ray ready: the parka's acid, or a spitball from the shield's globs. */
export function yellowRayPrep(): void {
  if (haveEffect($effect`Everything Looks Yellow`) > 0) return;
  if (haveItem($item`Jurassic Parka`)) {
    cliExecute("parka dilophosaur; equip jurassic parka");
  } else if (
    haveItem($item`April Shower Thoughts shield`) &&
    availableAmount($item`spitball`) === 0 &&
    itemAmount($item`glob of wet paper`) > 0
  ) {
    create($item`spitball`);
  }
}

// ─── ETERNITY CODPIECE ────────────────────────────────────────────────────────

/** Empty the codpiece ("none"), or mount a comma list of gems in slots 1 to 5. */
export function codpiece(input: string): void {
  if (!EternityCodpiece.have()) return;
  if (input === "none") {
    for (const slot of EternityCodpiece.SLOTS) equip(slot, $item.none);
    return;
  }
  const wanted = input.split(",").map((s) => Item.get(s.trim()));
  const placed = wanted.map((gem, i) => {
    const slot = EternityCodpiece.SLOTS[i];
    if (equippedItem(slot) === gem) return true;
    // A gem worn elsewhere (the Peridot as an accessory) comes off first.
    const worn = Slot.all().find(
      (s) => !EternityCodpiece.SLOTS.includes(s) && equippedItem(s) === gem,
    );
    if (worn) equip(worn, $item.none);
    if (itemAmount(gem) === 0) return false;
    print(`Inserting ${gem} into Codpiece`);
    equip(slot, gem);
    return true;
  });
  const mounted = EternityCodpiece.currentGems();
  wanted.forEach((gem, i) => {
    if (placed[i] && mounted[i] !== gem) throw new Error("Codpiece slot incorrect");
  });
}

// ─── ANEMONE MINE ─────────────────────────────────────────────────────────────

function squareImage(n: number): string {
  const match = new RegExp(`#${n}<img src="[^"]*/([^"]+)\\.gif"`).exec(get("mineLayout3"));
  return match ? match[1] : "";
}

function adjacentCaverns(x: number, y: number): string {
  return [8 * y + (x - 1), 8 * y + (x + 1), 8 * (y - 1) + x, 8 * (y + 1) + x]
    .map(squareImage)
    .join("");
}

/** The mine square (column, row) to dig for teflon ore. */
export function mineNum(): Mining.MiningCoordinate {
  const at = (x: number, y: number) => [x, y] as Mining.MiningCoordinate;
  const page = Mining.visit(Mining.Mine.ANEMONE);
  const chunks = [...page.matchAll(/Promising Chunk of Wall \((\d+),(\d+)\)/g)].map((m) => [
    Number(m[1]),
    Number(m[2]),
  ]);
  // Preferred spots first.
  for (const [x, y] of [
    [3, 6],
    [3, 5],
    [3, 4],
    [3, 3],
    [3, 2],
    [2, 2],
    [4, 2],
    [5, 2],
  ]) {
    if (!page.includes(`Open Cavern (${x},${y})`)) return at(x, y);
  }
  // Promising chunks away from the bad ores.
  for (const [x, y] of chunks) {
    const adjacent = adjacentCaverns(x, y);
    if (y >= 4 || adjacent.includes("velcroore") || adjacent.includes("vinylore")) continue;
    return at(x, y);
  }
  // The edge chunks beside a matching pair.
  for (const [x, y] of chunks) {
    if (x === 1 && y === 2 && squareImage(18) === squareImage(19)) return at(x, y);
    if (x === 6 && y === 2 && squareImage(21) === squareImage(20)) return at(x, y);
  }
  // Any chunk not too deep.
  for (const [x, y] of chunks) {
    if (y < 4) return at(x, y);
  }
  throw new Error(
    "Generic mining did not find teflon ore, mine manually. TIP: the ores show up in adjacent veins of 5.",
  );
}

// ─── SUSHI AND THE AUTUMN-ATON ────────────────────────────────────────────────

export function eatSushi(): void {
  const sushi: [Item, string][] = [
    [$item`beefy fish meat`, "beefy nigiri"],
    [$item`glistening fish meat`, "glistening nigiri"],
    [$item`slick fish meat`, "slick nigiri"],
  ];
  const found = sushi.find(([meat]) => itemAmount(meat) > 0);
  if (found) cliExecute(`make ${found[1]}`);
}

// collectionprow1 is newer than libram's Upgrade list.
const AUTUMNATON_UPGRADES: Record<string, string> = {
  "mid indoor": "rightleg1",
  "low underground": "leftleg1",
  "mid outdoor": "rightarm1",
  "low indoor": "leftarm1",
  "high underground": "collectionprow1",
};

export function useAutumnaton(): void {
  AutumnAton.sendTo((zones) => {
    if (zones.includes($location`Anemone Mine`) && availableAmount($item`Mer-kin digpick`) === 0) {
      return $location`Anemone Mine`;
    }
    const rift = $location`Shadow Rift (The Misspelled Cemetary)`;
    if (zones.includes(rift)) return rift;
    const upgrades: string[] = AutumnAton.currentUpgrades();
    const upgrading = zones.find((zone) => {
      const upgrade = AUTUMNATON_UPGRADES[`${zone.difficultyLevel} ${zone.environment}`];
      return upgrade && !upgrades.includes(upgrade);
    });
    return upgrading ?? $location`Noob Cave`;
  });
}

// ─── WANTED MONSTERS ──────────────────────────────────────────────────────────

/** The monster the Peridot, Map the Monsters and the Time-Spinner pick in each zone. */
const WANTED_MONSTER = new Map<Location, number>([
  [$location`An Octopus's Garden`, 740],
  [$location`The Wreck of the Edgar Fitzsimmons`, 745],
  [$location`The Sleazy Back Alley`, 159],
  [$location`The Haunted Pantry`, 145],
  [$location`The Overgrown Lot`, 1752],
  [$location`The Coral Corral`, 775],
  [$location`The Marinara Trench`, 762],
  [$location`Anemone Mine`, 765],
  [$location`The Dive Bar`, 768],
  [$location`Cyberzone 1`, 2458],
  [$location`Mer-kin Library`, 840],
  [$location`The Mer-Kin Outpost`, 773],
  [$location`The Caliginous Abyss`, 1373],
  [$location`Mer-kin Elementary School`, 838],
  [$location`The Outskirts of Cobb's Knob`, 152],
  [$location`Madness Bakery`, 1750],
]);

export function zoneTarget(location: Location): number {
  if (location === $location`Mer-kin Elementary School` && cheatsheetsNeeded()) return 852;
  return WANTED_MONSTER.get(location) ?? 0;
}

// ─── TIME-SPINNER ─────────────────────────────────────────────────────────────

function timeSpinnerReady(): boolean {
  return haveItem($item`Time-Spinner`) && get("_timeSpinnerMinutesUsed") <= 7 && myAdventures() > 0;
}

/** Re-fight the monster just fought, walking the Time-Spinner's choice chain by hand. */
export function timeSpinnerFight(monster: Monster): boolean {
  if (!timeSpinnerReady() || lastMonster() !== monster) return false;
  step(`Time-Spinner: refighting ${monster}`);
  visitUrl(`inv_use.php?whichitem=${$item`Time-Spinner`.id}&pwd=${myHash()}`);
  if (!handlingChoice()) {
    step("Time-Spinner choice was auto-resolved or never opened; skipping");
    return false;
  }
  const options = Object.entries(availableChoiceOptions());
  const travel = options.find(([, text]) => text.includes("Travel to a Recent Fight"));
  const backOut = options.find(([, text]) => text.includes("Maybe Later"));
  if (!travel) {
    if (backOut) runChoice(Number(backOut[0]));
    return false;
  }
  runChoice(Number(travel[0]));
  runChoice(1, `monid=${monster.id}`);
  runCombat();
  return true;
}

export function timeSpinnerRefight(location: Location): void {
  const target = zoneTarget(location);
  if (target === 0 || myLocation() !== location) return;
  timeSpinnerFight(toMonster(target));
}

// ─── SABER, CLOAKE, CHAMPAGNE, GLOVE ──────────────────────────────────────────

export function saberReady(): boolean {
  return haveItem($item`Fourth of May Cosplay Saber`) && get("_saberForceUses") < 5;
}

/** False where progress gates on turns spent rather than drops (the outpost lockkey). */
export function saberZone(location: Location): boolean {
  return location !== $location`The Mer-Kin Outpost`;
}

export function cloakeReady(): boolean {
  return haveItem($item`vampyric cloake`) && get("_vampyreCloakeFormUses") < 10;
}

/** Only the zones ground purely for a drop. */
export function cloakeZone(location: Location): boolean {
  return $locations`The Wreck of the Edgar Fitzsimmons, An Octopus's Garden, The Coral Corral, Mer-kin Library, Mer-kin Elementary School`.includes(
    location,
  );
}

export function champagneReady(): boolean {
  return haveItem($item`broken champagne bottle`) && get("garbageChampagneCharge") > 0;
}

/** Whether the bottle's ounces belong in this zone: only where a fat table is rolled. */
export function champagneZone(location: Location): boolean {
  if (!champagneReady()) return false;
  if (location === $location`The Wreck of the Edgar Fitzsimmons`) return !diverForceReady();
  return location === $location`The Coral Corral` && seaCowNeeded() && forcesAfterHealer() <= 0;
}

export function gloveReady(): boolean {
  return haveItem($item`Powerful Glove`) && get("_powerfulGloveBatteryPowerUsed") <= 90;
}

export function macroReady(): boolean {
  return haveSkill($skill`Macrometeorite`) && get("_macrometeoriteUses") < 10;
}

// ─── POCKET PROFESSOR ─────────────────────────────────────────────────────────

export function professorReady(): boolean {
  return PocketProfessor.have() && PocketProfessor.currentlyAvailableLectures() > 0;
}

/** Whether the Professor goes out, where lecture copies are the cheapest drop source. */
export function lectureNow(): boolean {
  if (!professorReady()) return false;
  if (diverHuntActive()) return !diverForceReady();
  if (seaCowNeeded() && forcesAfterHealer() <= 0) return true;
  return !haveFamiliar($familiar`Chest Mimic`);
}

// ─── BANISHES ─────────────────────────────────────────────────────────────────

const BANISH_SOURCES: [Item, Skill][] = [
  [$item`spring shoes`, $skill`Spring Kick`],
  [$item`Monodent of the Sea`, $skill`Sea *dent: Throw a Lightning Bolt`],
  [$item`Heartstone`, $skill`Heartstone: %banish`],
];

/** The monster a banish skill is holding. */
export function banished(banisher: Skill): Monster {
  return getBanishedMonsters().get(banisher) ?? $monster.none;
}

/** Whether any banish is holding the monster. */
export function isBanished(monster: Monster): boolean {
  return [...getBanishedMonsters().values()].includes(monster);
}

/** Whether the banisher was spent on a monster that lives where you are. */
export function banishUsedAtYourLocation(banisher: Skill): boolean {
  const monster = banished(banisher);
  if (monster === $monster.none) return false;
  return monster.name in getLocationMonsters(myLocation());
}

/** The banish item for a zone whose last banish has lapsed. */
export function banishGear(location: Location): Item {
  for (const [item, skill] of BANISH_SOURCES) {
    if (item === $item`Heartstone` && !get("heartstoneBanishUnlocked")) continue;
    if ((appearanceRates(location)[banished(skill).name] ?? 0) === 0 && haveItem(item)) {
      return item;
    }
  }
  return $item.none;
}

/** The banish skill of the first worn banish item whose target no longer shows up here. */
export function combatBan(): Skill {
  for (const [item, skill] of BANISH_SOURCES) {
    if (item === $item`Heartstone` && !get("heartstoneBanishUnlocked")) continue;
    const rate = appearanceRates(myLocation())[banished(skill).name] ?? 0;
    if (haveEquipped(item) && rate === 0) {
      print(
        `Banish item being considered ${item} parsed banished monster is ${banished(skill)} and the calculated appearance rate at current location is ${rate}`,
      );
      return skill;
    }
  }
  return $skill.none;
}

// ─── TRICK OR TREAT ───────────────────────────────────────────────────────────

export function candy(action: "fight" | "treat"): void {
  if (action === "fight") {
    const house = get("_trickOrTreatBlock").indexOf("D");
    visitUrl("place.php?whichplace=town&action=town_trickortreat");
    visitUrl(`choice.php?whichchoice=804&pwd=${myHash()}&option=3&whichhouse=${house}`);
    runCombat();
  } else {
    while (get("_trickOrTreatBlock").includes("L")) {
      const house = get("_trickOrTreatBlock").indexOf("L");
      visitUrl("place.php?whichplace=town&action=town_trickortreat");
      visitUrl(`choice.php?whichchoice=804&pwd=${myHash()}&option=3&whichhouse=${house}`);
    }
  }
}

/** With the backup camera on a copyable fight, spend the candy map on a trick-or-treat fight. */
export function useMapIfAvailable(): void {
  if (highShiny()) return;
  if (!haveEquipped($item`backup camera`)) return;
  if (freeMonster(get("lastCopyableMonster") ?? $monster.none)) return;
  if (!get("_mapToACandyRichBlockUsed") && itemAmount($item`map to a candy-rich block`) > 0) {
    use($item`map to a candy-rich block`);
  }
  if (get("_mapToACandyRichBlockUsed")) candy("fight");
}

// ─── TRAIN SET ────────────────────────────────────────────────────────────────

export function trainset(): void {
  const position = get("trainsetPosition") % 8;
  // The order the original used, starting at the next station.
  const order = [
    TrainSet.Station.COAL_HOPPER,
    TrainSet.Station.GAIN_MEAT,
    TrainSet.Station.GRAIN_SILO,
    TrainSet.Station.ORE_HOPPER,
    TrainSet.Station.VIEWING_PLATFORM,
    TrainSet.Station.CANDY_FACTORY,
    TrainSet.Station.TOWER_FIZZY,
    TrainSet.Station.TRACKSIDE_DINER,
  ];
  const cycle = order.map((_, i) => order[(i - position + 8) % 8]) as TrainSet.Cycle;
  TrainSet.setConfiguration(cycle);
}

// ─── LEPRECONDO ───────────────────────────────────────────────────────────────

/**
 * Furnish with the wanted pieces (Leprecondo.FURNITURE_PIECES indices, most
 * wanted first), topped up with anything else discovered.
 */
export function leprecondo(input: string): void {
  if (Leprecondo.rearrangesRemaining() <= 0) return;
  const discovered: Leprecondo.FurniturePiece[] = Leprecondo.discoveredFurniture().filter(
    (piece) => piece !== undefined && piece !== "empty",
  );
  const rooms: Leprecondo.FurniturePiece[] = [];
  for (const piece of input.split(",").map((n) => Leprecondo.FURNITURE_PIECES[Number(n)])) {
    if (rooms.length < 4 && discovered.includes(piece) && !rooms.includes(piece)) {
      rooms.push(piece);
    }
  }
  for (const piece of discovered) {
    if (rooms.length >= 4) break;
    if (!rooms.includes(piece)) rooms.push(piece);
  }
  if (rooms.length < 4) {
    print(`Leprecondo skipped: only ${rooms.length} furniture pieces discovered.`, "red");
    return;
  }
  const [a, b, c, d] = rooms;
  if (!Leprecondo.setFurniture(a, b, c, d)) print(`Leprecondo furnish failed: ${rooms}`, "red");
}

// ─── BASEBALL DIAMOND ─────────────────────────────────────────────────────────

/**
 * Set the pitching order once nine players are in: the yellow ray and free
 * kill pitchers as late as their slots allow, each with two lead-up pitches.
 */
export function baseballD(): void {
  const lineup = get("baseballTeam").split(",");
  if (lineup.length !== 9) return;
  const pitches = new Map<number, number>();
  const fillPrereqs = (slot: number, pitch: number) => {
    let filled = 0;
    for (let before = slot - 1; filled < 2 && before >= 1; before--) {
      if (!pitches.has(before)) {
        pitches.set(before, pitch);
        filled++;
      }
    }
    if (filled < 2)
      throw new Error(`Not enough open slots to fill prereqs for outcome at slot ${slot}`);
  };
  const canBanish = (p: number) => {
    if (!pitches.has(9)) return false;
    for (let x = 8; x >= 6; x--) if (pitches.has(x) || x === p) return true;
    return false;
  };

  let yellowRay = 0;
  let freeKill = 0;
  let banish = 0;
  for (let x = 9; x >= 3; x--) {
    const id = lineup[x - 1];
    if (!yellowRay && ["745", "838", "775", "773", "765", "768", "762", "763"].includes(id)) {
      yellowRay = x;
      pitches.set(x, 1);
    }
    if (!freeKill && id === "2499") {
      freeKill = x;
      pitches.set(x, 3);
    }
    // The banish pitch only works once slot 9 holds another outcome.
    if (!banish && id === "764" && canBanish(x)) {
      banish = x;
      pitches.set(x, 2);
    }
  }
  if (!yellowRay && !freeKill) {
    print("No yellow ray or free kill pitchers in lineup, skipping.", "red");
    return;
  }
  // Latest outcome first, so its lead-up pitches take the slots closest to it.
  const outcomes: [number, number][] = [
    [yellowRay, 1],
    [banish, 2],
    [freeKill, 3],
  ];
  outcomes.sort((a, b) => b[0] - a[0]);
  for (const [slot, pitch] of outcomes) if (slot > 0) fillPrereqs(slot, pitch);

  visitUrl(`inventory.php?pwd&action=pball&pwd=${myHash()}&action=pball`, false);
  for (let x = 1; x <= 9; x++) runChoice(pitches.get(x) ?? 4);
  runChoice(6);
}

// ─── SOURCE TERMINAL ──────────────────────────────────────────────────────────

/** Keep duplicate.edu slotted so the CCS can cast Duplicate. */
export function sourceEducate(): void {
  const duplicate = $skill`Duplicate`;
  if (!SourceTerminal.have() || SourceTerminal.duplicateUsesRemaining() <= 0) return;
  if (!get("sourceTerminalEducateKnown").includes("duplicate.edu")) return;
  if (SourceTerminal.getSkills().includes(duplicate)) return;
  SourceTerminal.educate(duplicate);
}

/** The grandma shop scholar outfit, bought while wearing nothing in those slots. */
export function buyScholarGear(): void {
  for (const [piece, slot] of [
    [$item`Mer-kin scholar mask`, $slot`hat`],
    [$item`Mer-kin scholar tailpiece`, $slot`pants`],
  ] as const) {
    if (availableAmount(piece) > 0 || haveEquipped(piece)) continue;
    equip(slot, $item.none);
    equipSwimTrunks();
    buy($coinmaster`Grandma Sea Monkey`, 1, piece);
  }
}
