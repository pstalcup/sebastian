import {
  abort,
  adv1,
  buy,
  canAdventure,
  cliExecute,
  council,
  drink,
  equippedItem,
  familiarWeight,
  getProperty,
  haveEffect,
  haveFamiliar,
  haveSkill,
  inebrietyLimit,
  itemAmount,
  Location,
  mallPrice,
  myAdventures,
  myAscensions,
  myFamiliar,
  myInebriety,
  numericModifier,
  print,
  retrieveItem,
  setProperty,
  Slot,
  storageAmount,
  use,
  useFamiliar,
  useSkill,
} from "kolmafia";
import { $coinmaster, $effect, $familiar, $familiars, $item, $location, $skill, get } from "libram";
import { Gear } from "../lib/gear";
import { codpiece } from "../lib/iotm";
import { mood, Mood } from "../lib/mood";
import { getLucky } from "../lib/pulls";
import { haveItem, step } from "../lib/state";

// After the prism: spend the sand pennies, then the opt-in postloop steps
// (pilsners, pearls and the eagle's banish re-aim, the codpiece). Ported from
// the end of seaMonkees() and pearlPostloop() through prepCodpiece() in
// UnderTheSea.ash.

const flag = (name: string) => getProperty(name) === "true";

// ─── PEARL FARMING / EAGLE BANISH RE-AIM ──────────────────────────────────────
// One walker serves both postloop prefs. uts_postLoopRunOutEagleBanish
// (experimental): the Patriotic Eagle farms pearl zones until the screech
// recharges, spends it on the first monster at the Smut Orc Logging Camp,
// which moves the leftover construct banish onto the orc phylum, and is done.
// uts_postLoopFarmPearls: when a pearl's mall price beats the ten turns its
// farm costs at valueOfAdventure, keep walking until every open zone's daily
// pearl is claimed.
//
// Free kills, free runs and fight-enders advance neither a zone's pearl
// progress nor screechCombats; only a combat fought to a plain win on a spent
// turn counts. _utsPearlFarm tells the combat script to fight that way.

const PEARL_ZONES: [Location, string, string][] = [
  [$location`Anemone Mine`, "spooky", "_unblemishedPearlAnemoneMine"],
  [$location`The Dive Bar`, "sleaze", "_unblemishedPearlDiveBar"],
  [$location`Madness Reef`, "stench", "_unblemishedPearlMadnessReef"],
  [$location`The Marinara Trench`, "hot", "_unblemishedPearlMarinaraTrench"],
  [$location`The Briniest Deepests`, "cold", "_unblemishedPearlTheBriniestDeepests"],
];

function pearlZone(zone: Location): [Location, string, string] {
  const found = PEARL_ZONES.find(([location]) => location === zone);
  if (!found) throw new Error(`${zone} is not a pearl zone`);
  return found;
}

const claimed = (zone: Location) => flag(pearlZone(zone)[2]);
const claimedCount = () => PEARL_ZONES.filter(([, , pref]) => flag(pref)).length;

/**
 * Pearl progress pays its full 10% a combat only at 18 of the zone's element.
 * Checked every turn: the resistance buffs run out mid-zone.
 */
function pearlResCheck(zone: Location): void {
  const element = pearlZone(zone)[1];
  mood(`${element}res` as Mood);
  mood("combat");
  const res = numericModifier(`${element} resistance`);
  if (res < 18) {
    abort(
      `Pearl farming needs 18 ${element} resistance for full speed in ${zone} and only ` +
        `${Math.floor(res)} is up; add ${element} resistance gear or buffs and rerun.`,
    );
  }
}

/**
 * Resistance to the line, then +combat with the rest: the 200 weight means no
 * combat piece outbids a needed res level, and "18 max" stops crediting res
 * past the line.
 */
function pearlZonePrep(zone: Location): void {
  const element = pearlZone(zone)[1];
  mood(`${element}res` as Mood);
  mood("combat");
  new Gear(`200 ${element} res 18 max, combat,sea`, zone).bathysphere().dress();
}

/** Empty Hagnk's once per ascension: the run is over, so everything may as well be on hand. */
function pullEverything(): void {
  if (get("lastEmptiedStorage") === myAscensions()) return;
  if (!cliExecute("pull all")) abort("pull all didn't empty storage.");
}

/**
 * uts_postLoopCloverFishy: top Fishy up with a Lucky! visit to The Brinier
 * Deepers, whose Haggling grants 20 turns. Only on a guaranteed Lucky! path.
 */
function cloverFishy(zone: Location | undefined): boolean {
  if (!flag("uts_postLoopCloverFishy")) return false;
  if (myAdventures() < 3) return false;
  const deepers = $location`The Brinier Deepers`;
  if (!canAdventure(deepers)) return false;
  const aug2Free =
    haveSkill($skill`Aug. 2nd: Find an Eleven-Leaf Clover Day`) &&
    !get("_aug2Cast") &&
    get("_augSkillsCast") < 5;
  if (
    haveEffect($effect`Lucky!`) === 0 &&
    !aug2Free &&
    itemAmount($item`11-leaf clover`) === 0 &&
    !(get("autoSatisfyWithCoinmasters") && get("_cloversPurchased") < 3)
  ) {
    return false;
  }
  getLucky();
  if (haveEffect($effect`Lucky!`) === 0) return false;
  step("postloop pearls: Lucky! trip to The Brinier Deepers for 20 turns of Fishy");
  new Gear("combat,sea", deepers).bathysphere().dress();
  adv1(deepers, -1, "");
  // A wanderer can spend the turn without the Lucky!; one more visit collects
  // The Haggling. At 0 Fishy it costs 2 turns.
  if (haveEffect($effect`Fishy`) === 0 && haveEffect($effect`Lucky!`) > 0 && myAdventures() > 1) {
    adv1(deepers, -1, "");
  }
  const fishy = haveEffect($effect`Fishy`) > 0;
  // The dive's maximize stripped the pearl gear.
  if (zone && !claimed(zone)) pearlZonePrep(zone);
  return fishy;
}

function reportRundownStalled(why: string, spent: number): void {
  print(
    `uts_postLoopRunOutEagleBanish: ${why} after ${spent} turns; the Patriotic Screech is still aimed at the construct phylum.`,
    "red",
  );
  print(
    "Crates are constructs, so garbo will abort on its crate setup. Re-aim by hand: take out the Patriotic Eagle and screech in The Smut Orc Logging Camp.",
    "red",
  );
}

/** Once the rundown is over, the Hound Dog's +combat buys fewer noncombats per pearl. */
function farmHandoff(farm: boolean, current: Location | undefined): void {
  if (!farm || !haveFamiliar($familiar`Jumpsuited Hound Dog`)) return;
  useFamiliar($familiar`Jumpsuited Hound Dog`);
  // The bathysphere is familiar equipment, so it needs maximizing back on.
  if (current && !claimed(current)) pearlZonePrep(current);
}

function pearlFarmWorthIt(): boolean {
  if (!flag("uts_postLoopFarmPearls")) return false;
  const pearlPrice = mallPrice($item`unblemished pearl`);
  let voa = get("valueOfAdventure");
  if (pearlPrice > 0 && voa <= 0) {
    // garbo's own default; an unset zero would make farming always win.
    voa = 4000;
    print(`uts_postLoopFarmPearls: valueOfAdventure isn't set, assuming ${voa}.`, "blue");
  }
  if (pearlPrice <= 0) {
    print(
      "uts_postLoopFarmPearls: couldn't get a mall price for the pearl; skipping the farm.",
      "red",
    );
    return false;
  }
  if (pearlPrice <= voa * 10) {
    print(
      `uts_postLoopFarmPearls: a pearl mall-buys at ${pearlPrice} and ten farming turns are worth ${voa * 10} -- buying beats farming today.`,
      "blue",
    );
    return false;
  }
  step(
    `postloop: pearls sell for ${pearlPrice} against ${voa * 10} for ten farming turns -- farming`,
  );
  return true;
}

/** Drink a pilsner when out of adventures, cracking a six-pack if needed. */
function pilsnerForAdventures(): void {
  if (itemAmount($item`astral pilsner`) === 0 && itemAmount($item`astral six-pack`) > 0) {
    use($item`astral six-pack`);
  }
  if (itemAmount($item`astral pilsner`) === 0) {
    abort("uts_runOutEagleBanish: out of adventures and no astral pilsner left to drink.");
  }
  cliExecute("shrug Donho's Bubbly Ballad");
  if (haveSkill($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
  drink($item`astral pilsner`);
}

export function pearlPostloop(): void {
  let rundown =
    flag("uts_postLoopRunOutEagleBanish") && getProperty("banishedPhyla").includes("construct");
  const farm = pearlFarmWorthIt();
  if (!rundown && !farm) return;
  const eagle = $familiar`Patriotic Eagle`;
  if (rundown) {
    step("postloop: re-aiming the Patriotic Screech off the construct phylum");
    if (!haveFamiliar(eagle)) {
      abort(
        "uts_postLoopRunOutEagleBanish: no Patriotic Eagle in the terrarium, so the screech can't be re-aimed.",
      );
    }
    if (!canAdventure($location`The Smut Orc Logging Camp`)) {
      abort(
        "uts_postLoopRunOutEagleBanish: The Smut Orc Logging Camp isn't open, and the re-aim needs a place to screech.",
      );
    }
  }
  pullEverything();
  // The eagle's combats recharge the screech, so it stays out until the
  // re-aim; otherwise the Hound Dog's +combat means fewer noncombats.
  if (rundown) useFamiliar(eagle);
  else if (haveFamiliar($familiar`Jumpsuited Hound Dog`)) {
    useFamiliar($familiar`Jumpsuited Hound Dog`);
  }
  if (myFamiliar() === $familiar.none) {
    const fallback = $familiars`Patriotic Eagle, Grouper Groupie`.find((f) => haveFamiliar(f));
    if (fallback) useFamiliar(fallback);
    if (myFamiliar() === $familiar.none) {
      abort("postloop pearls: no familiar out; take out any familiar and rerun.");
    }
  }

  setProperty("_utsPearlFarm", "true");
  const claimedAtStart = claimedCount();
  let spent = 0;
  // The combat script sets _utsScreechReady from each eagle fight's skill
  // list. screechCombats misses eagle chatter, so it only times the fallback.
  setProperty("_utsScreechReady", "");
  let nextScreechTry = 0;
  let fallbackScreechTry = Math.max(0, Math.min(get("screechCombats"), 11));
  let screechNoAttempts = 0;
  let current: Location | undefined;
  try {
    for (;;) {
      // One fight at the Smut Orc Logging Camp moves the banish onto the orc
      // phylum. Zone progress holds while stepping out.
      if (
        rundown &&
        myAdventures() > 0 &&
        spent >= nextScreechTry &&
        (getProperty("_utsScreechReady") === "true" || spent >= fallbackScreechTry)
      ) {
        setProperty("_utsScreechFired", "");
        setProperty("_utsScreechReaim", "true");
        adv1($location`The Smut Orc Logging Camp`, -1, "");
        setProperty("_utsScreechReaim", "false");
        spent++;
        // banishedPhyla is the ground truth; the recorded cast only explains
        // a banish that did not move.
        const fired = getProperty("_utsScreechFired");
        if (!getProperty("banishedPhyla").includes("construct")) {
          print(
            fired === "true"
              ? `Patriotic Screech re-aimed at smut orcs after ${spent} turns; constructs are free.`
              : `The construct banish is gone after ${spent} turns; constructs are free.`,
            "blue",
          );
          rundown = false;
          farmHandoff(farm, current);
        } else if (fired === "true") {
          reportRundownStalled("the screech was cast but constructs are still banished", spent);
          rundown = false;
          farmHandoff(farm, current);
        } else if (fired === "false") {
          // Offered but rejected: back off both paths.
          screechNoAttempts = 0;
          nextScreechTry = spent + 11;
          fallbackScreechTry = spent + 11;
        } else if (fired === "unready") {
          // Not offered: wait for a farm fight to see it again.
          screechNoAttempts = 0;
          fallbackScreechTry = spent + 11;
        } else if (++screechNoAttempts >= 2) {
          // No cast attempted twice: back off both paths.
          screechNoAttempts = 0;
          nextScreechTry = spent + 11;
          fallbackScreechTry = spent + 11;
        }
      }
      if (!rundown && !farm) break;
      if (myAdventures() === 0) pilsnerForAdventures();
      if (rundown && spent >= 40) {
        reportRundownStalled("the screech still isn't ready after 40 turns", spent);
        rundown = false;
        if (!farm) break;
        farmHandoff(farm, current);
      }
      if (!current || claimed(current)) {
        current = PEARL_ZONES.map(([zone]) => zone).find(
          (zone) => !claimed(zone) && canAdventure(zone),
        );
        if (!current) {
          if (rundown)
            reportRundownStalled("no open pearl zone with today's pearl unclaimed", spent);
          break;
        }
        pearlZonePrep(current);
      }
      const pearls = claimedCount() - claimedAtStart;
      if (haveEffect($effect`Fishy`) === 0 && !cloverFishy(current)) {
        if (rundown) {
          reportRundownStalled("out of Fishy, so no pearl zone is reachable", spent);
          break;
        }
        abort(
          `postloop pearls: out of Fishy mid-zone after ${spent} turns with ${pearls} pearls claimed; today's zone progress won't survive rollover.`,
        );
      }
      if (myAdventures() === 0) {
        abort(
          `postloop pearls: out of adventures mid-zone after ${spent} turns with ${pearls} pearls claimed; today's zone progress won't survive rollover.`,
        );
      }
      if (spent >= 90) {
        abort(
          "postloop pearls: 90 turns spent without finishing; something is wrong, bailing out.",
        );
      }
      pearlResCheck(current);
      adv1(current, -1, "");
      spent++;
    }
  } finally {
    setProperty("_utsPearlFarm", "false");
    setProperty("_utsScreechReaim", "false");
  }
  if (farm) {
    for (const [zone, , pref] of PEARL_ZONES) {
      if (!flag(pref)) print(`uts_postLoopFarmPearls: ${zone} left unclaimed.`, "red");
    }
    print(
      `uts_postLoopFarmPearls: ${claimedCount() - claimedAtStart} pearls claimed in ${spent} turns.`,
      "blue",
    );
  }
}

// ─── PILSNERS AND THE CODPIECE ────────────────────────────────────────────────

/**
 * uts_usePilsners: drink the astral pilsners out, leaving out any liver
 * capacity gear or the familiar is lending, since whatever runs next re-dresses.
 */
export function usePilsners(): void {
  if (!flag("uts_usePilsners")) return;
  step("postloop: drinking out the astral pilsners");
  if (storageAmount($item`astral pilsner`) > 0 || storageAmount($item`astral six-pack`) > 0) {
    pullEverything();
  }
  let liver = inebrietyLimit();
  for (const slot of Slot.all()) {
    liver -= Math.floor(numericModifier(equippedItem(slot), "Liver Capacity"));
  }
  if (myFamiliar() !== $familiar.none) {
    liver -= Math.floor(
      numericModifier(myFamiliar(), "Liver Capacity", familiarWeight(myFamiliar()), $item.none),
    );
  }
  liver = Math.min(liver, inebrietyLimit());
  let drunk = 0;
  let odeWarned = false;
  while (myInebriety() < liver) {
    if (
      itemAmount($item`astral pilsner`) === 0 &&
      itemAmount($item`astral six-pack`) > 0 &&
      !use($item`astral six-pack`)
    ) {
      break;
    }
    const before = itemAmount($item`astral pilsner`);
    if (before === 0) break;
    if (haveEffect($effect`Ode to Booze`) === 0 && haveSkill($skill`The Ode to Booze`)) {
      if (!cliExecute("shrug Donho's Bubbly Ballad")) {
        print("uts_usePilsners: Donho's Bubbly Ballad wouldn't shrug.", "blue");
      }
      if (!useSkill(1, $skill`The Ode to Booze`) && !odeWarned) {
        print("uts_usePilsners: no Ode to Booze; drinking without it.", "blue");
        odeWarned = true;
      }
    }
    if (!drink($item`astral pilsner`)) break;
    // A mime army shotglass makes the day's first small drink free, so
    // progress is the pilsner count falling, not inebriety.
    if (itemAmount($item`astral pilsner`) >= before) break;
    drunk++;
  }
  const left = itemAmount($item`astral pilsner`) + 6 * itemAmount($item`astral six-pack`);
  print(`uts_usePilsners: drank ${drunk}, ${left} pilsners left.`, "blue");
}

/** uts_postLoopPrepCodpiece: five unblemished pearls slotted for the next run. */
export function prepCodpiece(): void {
  if (!flag("uts_postLoopPrepCodpiece")) return;
  step("postloop: loading the codpiece with unblemished pearls");
  if (!haveItem($item`The Eternity Codpiece`)) {
    abort("uts_postLoopPrepCodpiece: you don't own The Eternity Codpiece.");
  }
  pullEverything();
  codpiece("none");
  const pearl = $item`unblemished pearl`;
  if (itemAmount(pearl) < 5) retrieveItem(5, pearl);
  if (itemAmount(pearl) < 5) {
    abort(
      `uts_postLoopPrepCodpiece: couldn't get to five unblemished pearls (have ${itemAmount(pearl)}).`,
    );
  }
  codpiece(Array(5).fill("unblemished pearl").join(", "));
  print("Codpiece loaded: five unblemished pearls slotted for the next run.", "blue");
}

/** The postloop steps, in order. Each self-gates on its own uts_postLoop* pref. */
export function postloopSteps(): void {
  // First, since the later ones can abort and leave the supply undrunk.
  usePilsners();
  pearlPostloop();
  prepCodpiece();
  const command = getProperty("uts_postloopCommand");
  if (command !== "") cliExecute(command);
}

/** After the prism: spend the sand pennies, see the council, then the postloop. */
export function pathCleanup(): void {
  while (itemAmount($item`sand penny`) > 30) {
    buy($coinmaster`Wet Crap For Sale`, 1, $item`water-logged pill`);
  }
  while (itemAmount($item`sand penny`) > 10) {
    buy($coinmaster`Wet Crap For Sale`, 1, $item`waterlogged scroll of healing`);
  }
  council();
  council();
  // After council(): the storage pull pilsners may need is refused before
  // the prism breaks.
  postloopSteps();
}
