import {
  abort,
  appearanceRates,
  availableAmount,
  availableChoiceOptions,
  cliExecute,
  combatRateModifier,
  create,
  currentRound,
  familiarWeight,
  getCampground,
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
  setProperty,
  Skill,
  toInt,
  toLocation,
  toMonster,
  toSkill,
  toSlot,
  turnsUntilForcedNoncombat,
  use,
  useSkill,
  visitUrl,
  weightAdjustment,
  myAdventures,
  getLocationMonsters,
  equip,
  buy,
} from "kolmafia";
import {
  $coinmaster,
  $slot,
  $effect,
  $familiar,
  $item,
  $location,
  $locations,
  $monster,
  $monsters,
  $skill,
  $stat,
  get,
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

/** Monsters that give a free fight. */
export function freeMonster(monster: Monster): boolean {
  return $monsters`Black Crayon Golem, Black Crayon Beetle, Black Crayon Man, Black Crayon Goblin, Black Crayon Undead Thing, Black Crayon Slime, time cop, sausage goblin, kid who is too old to be Trick-or-Treating, suburban security civilian, vandal kid`.includes(
    monster,
  );
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
  if (!haveItem($item`The Eternity Codpiece`)) return;
  if (input === "none") {
    const page = visitUrl("inventory.php?action=docodpiece");
    if (!page.includes(" mounted in slot #")) return;
    for (let slot = 1; slot <= 5; slot++) {
      if (page.includes(` Empty slot #${slot}`)) continue;
      visitUrl(`choice.php?whichchoice=1588&option=2&which=${slot}`);
    }
  } else {
    const gems = input.split(",").map((s) => s.trim());
    const mounted: (Item | undefined)[] = gems.map((name, i) => {
      const gem = Item.get(name);
      if (haveEquipped(gem)) cliExecute(`unequip ${gem}`);
      if (itemAmount(gem) === 0) return undefined;
      print(`Inserting ${gem} into Codpiece`);
      visitUrl("inventory.php?action=docodpiece");
      visitUrl(`choice.php?whichchoice=1588&option=1&which=${i + 1}&iid=${toInt(gem)}`);
      visitUrl("main.php");
      return gem;
    });
    const page = visitUrl("inventory.php?action=docodpiece");
    mounted.forEach((gem, i) => {
      if (gem && !page.includes(`${gem} mounted in slot #${i + 1}`)) {
        abort("Codpiece slot incorrect");
      }
    });
  }
  cliExecute("refresh inv");
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

/** The mine square to dig for teflon ore. */
export function mineNum(): number {
  const page = visitUrl("mining.php?mine=3");
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
    if (!page.includes(`Open Cavern (${x},${y})`)) return 8 * y + x;
  }
  // Promising chunks away from the bad ores.
  for (const [x, y] of chunks) {
    const adjacent = adjacentCaverns(x, y);
    if (y >= 4 || adjacent.includes("velcroore") || adjacent.includes("vinylore")) continue;
    return 8 * y + x;
  }
  // The edge chunks beside a matching pair.
  for (const [x, y] of chunks) {
    if (x === 1 && y === 2 && squareImage(18) === squareImage(19)) return 8 * y + x;
    if (x === 6 && y === 2 && squareImage(21) === squareImage(20)) return 8 * y + x;
  }
  // Any chunk not too deep.
  for (const [x, y] of chunks) {
    if (y < 4) return 8 * y + x;
  }
  return abort(
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

const AUTUMNATON_UPGRADES: Record<string, string> = {
  "mid indoor": "rightleg1",
  "low underground": "leftleg1",
  "mid outdoor": "rightarm1",
  "low indoor": "leftarm1",
  "high underground": "collectionprow1",
};

export function useAutumnaton(): void {
  use($item`autumn-aton`);
  const page = visitUrl(`inv_use.php?${myHash()}&which=3&whichitem=10954`);
  const zones = [...page.matchAll(/<option\s+value="([0-9]+)">\s*([^<]+?)\s*<\/option>/g)].map(
    (m) => toLocation(Number(m[1])),
  );
  if (zones.includes($location`Anemone Mine`) && availableAmount($item`Mer-kin digpick`) === 0) {
    cliExecute("autumnaton send anemone mine");
    return;
  }
  if (zones.includes($location`Shadow Rift (The Misspelled Cemetary)`)) {
    cliExecute("autumnaton send Shadow Rift");
    return;
  }
  const upgrades = get("autumnatonUpgrades");
  for (const zone of zones) {
    const upgrade = AUTUMNATON_UPGRADES[`${zone.difficultyLevel} ${zone.environment}`];
    if (upgrade && !upgrades.includes(upgrade)) {
      cliExecute(`autumnaton send ${zone}`);
      return;
    }
  }
  cliExecute("autumnaton send noob cave");
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
  visitUrl(`inv_use.php?whichitem=${toInt($item`Time-Spinner`)}&pwd=${myHash()}`);
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

function professorLectureLimit(): number {
  const weight = familiarWeight($familiar`Pocket Professor`) + weightAdjustment();
  let n = 0;
  while (n * n + 1 <= weight) n++;
  return n;
}

export function professorReady(): boolean {
  return (
    haveFamiliar($familiar`Pocket Professor`) &&
    get("_pocketProfessorLectures") < professorLectureLimit()
  );
}

/** Whether the Professor goes out, where lecture copies are the cheapest drop source. */
export function lectureNow(): boolean {
  if (!professorReady()) return false;
  if (diverHuntActive()) return !diverForceReady();
  if (seaCowNeeded() && forcesAfterHealer() <= 0) return true;
  return !haveFamiliar($familiar`Chest Mimic`);
}

// ─── BANISHES ─────────────────────────────────────────────────────────────────

const BANISH_SOURCES: [Item, string, Skill][] = [
  [$item`spring shoes`, "Spring Kick", $skill`Spring Kick`],
  [$item`Monodent of the Sea`, "Sea *dent", $skill`Sea *dent: Throw a Lightning Bolt`],
  [$item`Heartstone`, "Heartstone", $skill`Heartstone: %banish`],
];

/** The monster a banisher (by its recorded name prefix) is holding. */
export function banished(banisher: string): Monster {
  const escaped = banisher.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = new RegExp(`([^:]+):${escaped}`).exec(get("banishedMonsters"));
  return match ? toMonster(match[1]) : $monster.none;
}

/** Whether the banisher was spent on a monster that lives where you are. */
export function banishUsedAtYourLocation(banisher: string): boolean {
  const monster = banished(banisher);
  if (monster === $monster.none) return false;
  return monster.name in getLocationMonsters(myLocation());
}

/**
 * The banish item for a zone whose last banish has lapsed. Also sets that
 * slot's maximizer override, as the original did.
 */
export function banishGear(location: Location): Item {
  for (const [item, prefix] of BANISH_SOURCES) {
    if (item === $item`Heartstone` && !get("heartstoneBanishUnlocked")) continue;
    if ((appearanceRates(location)[banished(prefix).name] ?? 0) === 0 && haveItem(item)) {
      setProperty(`${toSlot(item)}Override`, `, equip ${item}`);
      print(`${toSlot(item)}Override`);
      return item;
    }
  }
  return $item.none;
}

/** The banish skill of the first worn banish item whose target no longer shows up here. */
export function combatBan(): Skill {
  for (const [item, prefix, skill] of BANISH_SOURCES) {
    if (item === $item`Heartstone` && !get("heartstoneBanishUnlocked")) continue;
    const rate = appearanceRates(myLocation())[banished(prefix).name] ?? 0;
    if (haveEquipped(item) && rate === 0) {
      print(
        `Banish item being considered ${item} parsed banished monster is ${banished(prefix)} and the calculated appearance rate at current location is ${rate}`,
      );
      cliExecute("get banishedMonsters");
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

// ─── DARTS ────────────────────────────────────────────────────────────────────

export function darts(): void {
  while (
    get("_dartsLeft") > 0 &&
    haveEquipped($item`Everfull Dart Holster`) &&
    currentRound() > 0
  ) {
    if (get("everfullDartPerks").includes("Butt")) {
      const match = /(\d+):butt/.exec(get("_currentDartboard"));
      if (!match) break;
      useSkill(toSkill(Number(match[1])));
    } else {
      useSkill($skill`Darts: Throw at %part1`);
    }
  }
}

// ─── TRAIN SET ────────────────────────────────────────────────────────────────

export function trainset(): void {
  const position = get("trainsetPosition") % 8;
  // Next station first: meat, then the order the original used.
  const order = [8, 1, 15, 20, 3, 7, 2, 19];
  const slots: number[] = [];
  order.forEach((station, i) => (slots[(position + i) % 8] = station));
  visitUrl(
    `choice.php?forceoption=0?whichchoice=1485&option=1${slots.map((s, i) => `&slot%5B${i}%5D=${s}`).join("")}`,
  );
}

// ─── LEPRECONDO ───────────────────────────────────────────────────────────────

const LEPRECONDO_FURNITURE: Record<number, string> = {
  1: "buckets of concrete",
  2: "thrift store oil painting",
  3: "boxes of old comic books",
  4: "second-hand hot plate",
  5: "beer cooler",
  6: "free mattress",
  7: "gigantic chess set",
  8: "UltraDance karaoke machine",
  9: "cupcake treadmill",
  10: "beer pong table",
  11: "padded weight bench",
  12: "internet-connected laptop",
  13: "sous vide laboratory",
  14: "programmable blender",
  15: "sensory deprivation tank",
  16: "fruit-smashing robot",
  17: "ManCave™ sports bar set",
  18: "couch and flatscreen",
  19: "kegerator",
  20: "fine upholstered dining table set",
  21: "whiskeybed",
  22: "high-end home workout system",
  23: "complete classics library",
  24: "ultimate retro game console",
  25: "Omnipot",
  26: "fully-stocked wet bar",
  27: "four-poster bed",
};

/** Furnish with the wanted pieces in order, topped up with anything else discovered. */
export function leprecondo(input: string): void {
  if (get("_leprecondoRearrangements") >= 3) return;
  const discovered = new Set(
    get("leprecondoDiscovered")
      .split(",")
      .filter((s) => s !== "")
      .map(Number)
      .filter((n) => n in LEPRECONDO_FURNITURE),
  );
  const rooms: number[] = [];
  for (const wanted of input.split(",").map(Number)) {
    if (rooms.length < 4 && discovered.has(wanted)) {
      rooms.push(wanted);
      discovered.delete(wanted);
    }
  }
  for (const piece of discovered) {
    if (rooms.length >= 4) break;
    rooms.push(piece);
  }
  if (rooms.length < 4) {
    print(`Leprecondo skipped: only ${rooms.length} furniture pieces discovered.`, "red");
    return;
  }
  const furnish = `leprecondo furnish ${[...rooms]
    .reverse()
    .map((n) => LEPRECONDO_FURNITURE[n])
    .join(",")}`;
  if (!cliExecute(furnish)) print(`Leprecondo furnish failed: ${furnish}`, "red");
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
    if (filled < 2) abort(`Not enough open slots to fill prereqs for outcome at slot ${slot}`);
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
  if (!getCampground()[$item`Source terminal`.name]) return;
  if (get("_sourceTerminalDuplicateUses") >= 1) return;
  if (!get("sourceTerminalEducateKnown").includes("duplicate.edu")) return;
  if (
    get("sourceTerminalEducate1") === "duplicate.edu" ||
    get("sourceTerminalEducate2") === "duplicate.edu"
  ) {
    return;
  }
  cliExecute("terminal educate duplicate.edu");
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
