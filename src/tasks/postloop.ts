import {
  abort,
  buy,
  canAdventure,
  cliExecute,
  council,
  drink,
  equippedItem,
  Familiar,
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
  toInt,
  use,
  useSkill,
} from "kolmafia";
import { $coinmaster, $effect, $familiar, $familiars, $item, $location, $skill, get } from "libram";
import { UtsQuest } from "../engine";
import { Gear } from "../lib/gear";
import { codpiece } from "../lib/iotm";
import { mood, Mood } from "../lib/mood";
import { getLucky } from "../lib/pulls";
import { haveItem, inSeaPath } from "../lib/state";
import { action } from "./zones";

// After the prism: spend the sand pennies, then the opt-in postloop steps
// (pilsners, pearls and the eagle's banish re-aim, the codpiece). Ported from
// the end of seaMonkees() and pearlPostloop() through prepCodpiece() in
// UnderTheSea.ash.

const flag = (name: string) => getProperty(name) === "true";
const prop = (name: string) => getProperty(name);

// ─── PEARL FARMING / EAGLE BANISH RE-AIM ──────────────────────────────────────
// One walk serves both postloop prefs. uts_postLoopRunOutEagleBanish
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
//
// The walk's state lives in daily properties, so a rerun carries on with it:
//   _utsPearlWalk      "" not started, "on", or "done"
//   _utsPearlRundown   "on" while the re-aim is still wanted
//   _utsPearlSpent     turns the walk has spent
//   _utsPearlClaimed   pearls already claimed when the walk started
//   _utsScreechNext / _utsScreechFallback / _utsScreechMisses: the re-aim's
//                      back-off, in walk turns

const PEARL_ZONES: [Location, string, string][] = [
  [$location`Anemone Mine`, "spooky", "_unblemishedPearlAnemoneMine"],
  [$location`The Dive Bar`, "sleaze", "_unblemishedPearlDiveBar"],
  [$location`Madness Reef`, "stench", "_unblemishedPearlMadnessReef"],
  [$location`The Marinara Trench`, "hot", "_unblemishedPearlMarinaraTrench"],
  [$location`The Briniest Deepests`, "cold", "_unblemishedPearlTheBriniestDeepests"],
];

function pearlElement(zone: Location): string {
  const found = PEARL_ZONES.find(([location]) => location === zone);
  if (!found) throw new Error(`${zone} is not a pearl zone`);
  return found[1];
}

const claimedCount = () => PEARL_ZONES.filter(([, , pref]) => flag(pref)).length;
/** The first open zone with today's pearl unclaimed. */
const currentZone = () =>
  PEARL_ZONES.find(([zone, , pref]) => !flag(pref) && canAdventure(zone))?.[0];

const counter = (name: string) => toInt(prop(name));
const setCounter = (name: string, value: number) => setProperty(name, `${value}`);
const spent = () => counter("_utsPearlSpent");

const walking = () => prop("_utsPearlWalk") === "on";
const rundown = () => walking() && prop("_utsPearlRundown") === "on";
const farming = () => walking() && pearlFarmWorthIt();

/**
 * Pearl progress pays its full 10% a combat only at 18 of the zone's element.
 * Checked every turn: the resistance buffs run out mid-zone.
 */
function pearlResCheck(zone: Location): void {
  const element = pearlElement(zone);
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

/** Empty Hagnk's once per ascension: the run is over, so everything may as well be on hand. */
function pullEverything(): void {
  if (get("lastEmptiedStorage") === myAscensions()) return;
  if (!cliExecute("pull all")) abort("pull all didn't empty storage.");
}

/** A guaranteed Lucky! for The Brinier Deepers' Haggling, which grants 20 turns of Fishy. */
function cloverFishyReady(): boolean {
  if (!flag("uts_postLoopCloverFishy") || myAdventures() < 3) return false;
  if (!canAdventure($location`The Brinier Deepers`)) return false;
  const aug2Free =
    haveSkill($skill`Aug. 2nd: Find an Eleven-Leaf Clover Day`) &&
    !get("_aug2Cast") &&
    get("_augSkillsCast") < 5;
  return (
    haveEffect($effect`Lucky!`) > 0 ||
    aug2Free ||
    itemAmount($item`11-leaf clover`) > 0 ||
    (get("autoSatisfyWithCoinmasters") && get("_cloversPurchased") < 3)
  );
}

function reportRundownStalled(why: string): void {
  print(
    `uts_postLoopRunOutEagleBanish: ${why} after ${spent()} turns; the Patriotic Screech is still aimed at the construct phylum.`,
    "red",
  );
  print(
    "Crates are constructs, so garbo will abort on its crate setup. Re-aim by hand: take out the Patriotic Eagle and screech in The Smut Orc Logging Camp.",
    "red",
  );
}

/** Whether a pearl mall-buys for more than ten farming turns are worth. Asked once a day. */
function pearlFarmWorthIt(): boolean {
  if (!flag("uts_postLoopFarmPearls")) return false;
  const cached = prop("_utsPearlFarmWorth");
  if (cached !== "") return cached === "true";
  const pearlPrice = mallPrice($item`unblemished pearl`);
  let voa = get("valueOfAdventure");
  if (pearlPrice > 0 && voa <= 0) {
    // garbo's own default; an unset zero would make farming always win.
    voa = 4000;
    print(`uts_postLoopFarmPearls: valueOfAdventure isn't set, assuming ${voa}.`, "blue");
  }
  let worth = false;
  if (pearlPrice <= 0) {
    print(
      "uts_postLoopFarmPearls: couldn't get a mall price for the pearl; skipping the farm.",
      "red",
    );
  } else if (pearlPrice <= voa * 10) {
    print(
      `uts_postLoopFarmPearls: a pearl mall-buys at ${pearlPrice} and ten farming turns are worth ${voa * 10} -- buying beats farming today.`,
      "blue",
    );
  } else {
    print(
      `UTS: postloop: pearls sell for ${pearlPrice} against ${voa * 10} for ten farming turns -- farming`,
      "blue",
    );
    worth = true;
  }
  setProperty("_utsPearlFarmWorth", `${worth}`);
  return worth;
}

const rundownWanted = () =>
  flag("uts_postLoopRunOutEagleBanish") && prop("banishedPhyla").includes("construct");

/**
 * The eagle's combats recharge the screech, so it stays out until the
 * re-aim; after that the Hound Dog's +combat means fewer noncombats per pearl.
 */
function walkFamiliar(): Familiar {
  if (rundown()) return $familiar`Patriotic Eagle`;
  if (haveFamiliar($familiar`Jumpsuited Hound Dog`)) return $familiar`Jumpsuited Hound Dog`;
  if (myFamiliar() !== $familiar.none) return myFamiliar();
  const fallback = $familiars`Patriotic Eagle, Grouper Groupie`.find((f) => haveFamiliar(f));
  if (!fallback) abort("postloop pearls: no familiar out; take out any familiar and rerun.");
  return fallback;
}

function endRundown(): void {
  setProperty("_utsPearlRundown", "off");
}

/** What the re-aim fight left in _utsScreechFired, and the back-off it calls for. */
function readScreech(): void {
  // banishedPhyla is the ground truth; the recorded cast only explains a
  // banish that did not move.
  const fired = prop("_utsScreechFired");
  const backOff = (next: boolean) => {
    setCounter("_utsScreechMisses", 0);
    if (next) setCounter("_utsScreechNext", spent() + 11);
    setCounter("_utsScreechFallback", spent() + 11);
  };
  if (!prop("banishedPhyla").includes("construct")) {
    print(
      fired === "true"
        ? `Patriotic Screech re-aimed at smut orcs after ${spent()} turns; constructs are free.`
        : `The construct banish is gone after ${spent()} turns; constructs are free.`,
      "blue",
    );
    endRundown();
  } else if (fired === "true") {
    reportRundownStalled("the screech was cast but constructs are still banished");
    endRundown();
  } else if (fired === "false") {
    // Offered but rejected: back off both paths.
    backOff(true);
  } else if (fired === "unready") {
    // Not offered: wait for a farm fight to see it again.
    backOff(false);
  } else {
    // No cast attempted twice: back off both paths.
    setCounter("_utsScreechMisses", counter("_utsScreechMisses") + 1);
    if (counter("_utsScreechMisses") >= 2) backOff(true);
  }
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

// ─── PILSNERS ─────────────────────────────────────────────────────────────────

/** Liver left once any capacity the gear or familiar lends is set aside, since whatever runs next re-dresses. */
function pilsnerLiver(): number {
  let liver = inebrietyLimit();
  for (const slot of Slot.all()) {
    liver -= Math.floor(numericModifier(equippedItem(slot), "Liver Capacity"));
  }
  if (myFamiliar() !== $familiar.none) {
    liver -= Math.floor(
      numericModifier(myFamiliar(), "Liver Capacity", familiarWeight(myFamiliar()), $item.none),
    );
  }
  return Math.min(liver, inebrietyLimit());
}

const pilsnersLeft = () =>
  itemAmount($item`astral pilsner`) + 6 * itemAmount($item`astral six-pack`);

/** uts_usePilsners: drink the astral pilsners out. */
function usePilsners(): void {
  if (storageAmount($item`astral pilsner`) > 0 || storageAmount($item`astral six-pack`) > 0) {
    pullEverything();
  }
  const liver = pilsnerLiver();
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
  print(`uts_usePilsners: drank ${drunk}, ${pilsnersLeft()} pilsners left.`, "blue");
}

// ─── THE CODPIECE ─────────────────────────────────────────────────────────────

/** uts_postLoopPrepCodpiece: five unblemished pearls slotted for the next run. */
function prepCodpiece(): void {
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

// ─── THE QUESTS ───────────────────────────────────────────────────────────────

/** After the prism: spend the sand pennies and see the council. */
export const PathCleanupQuest: UtsQuest = {
  name: "Path cleanup",
  ready: () => inSeaPath() && prop("questL13Final") === "finished",
  tasks: [
    {
      name: "Sand pennies",
      completed: () => itemAmount($item`sand penny`) <= 10,
      ...action(() => {
        while (itemAmount($item`sand penny`) > 30) {
          buy($coinmaster`Wet Crap For Sale`, 1, $item`water-logged pill`);
        }
        while (itemAmount($item`sand penny`) > 10) {
          buy($coinmaster`Wet Crap For Sale`, 1, $item`waterlogged scroll of healing`);
        }
      }),
      limit: { tries: 1 },
    },
    {
      // The storage pull pilsners may need is refused before the prism breaks.
      name: "Council",
      completed: () => prop("_utsCouncilVisited") === "true",
      ...action(() => {
        council();
        council();
        setProperty("_utsCouncilVisited", "true");
      }),
      limit: { tries: 1 },
    },
  ],
};

/** The opt-in postloop steps. Each gates on its own uts_* pref. */
export const PostloopQuest: UtsQuest = {
  name: "Postloop",
  tasks: [
    {
      // First, since the later ones can abort and leave the supply undrunk.
      name: "Drink the astral pilsners",
      ready: () => flag("uts_usePilsners"),
      completed: () => myInebriety() >= pilsnerLiver() || pilsnersLeft() === 0,
      ...action(usePilsners),
      limit: { skip: 1 },
    },
    {
      name: "Start the pearl walk",
      ready: () => rundownWanted() || pearlFarmWorthIt(),
      completed: () => prop("_utsPearlWalk") !== "",
      ...action(() => {
        if (rundownWanted()) {
          print("UTS: postloop: re-aiming the Patriotic Screech off the construct phylum", "blue");
          if (!haveFamiliar($familiar`Patriotic Eagle`)) {
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
        setProperty("_utsPearlRundown", rundownWanted() ? "on" : "off");
        setCounter("_utsPearlClaimed", claimedCount());
        setCounter("_utsPearlSpent", 0);
        // The combat script sets _utsScreechReady from each eagle fight's
        // skill list. screechCombats misses eagle chatter, so it only times
        // the fallback.
        setProperty("_utsScreechReady", "");
        setCounter("_utsScreechNext", 0);
        setCounter("_utsScreechFallback", Math.max(0, Math.min(get("screechCombats"), 11)));
        setCounter("_utsScreechMisses", 0);
        setProperty("_utsPearlWalk", "on");
      }),
      limit: { tries: 1 },
    },
    {
      // One fight at the Smut Orc Logging Camp moves the banish onto the orc
      // phylum. Zone progress holds while stepping out.
      name: "Re-aim the screech",
      ready: () =>
        rundown() &&
        myAdventures() > 0 &&
        spent() >= counter("_utsScreechNext") &&
        (prop("_utsScreechReady") === "true" || spent() >= counter("_utsScreechFallback")),
      completed: () => !rundown(),
      outfit: { familiar: $familiar`Patriotic Eagle` },
      prepare: () => {
        setProperty("_utsScreechFired", "");
        setProperty("_utsScreechReaim", "true");
      },
      do: $location`The Smut Orc Logging Camp`,
      postAdventure: false,
      post: () => {
        setProperty("_utsScreechReaim", "false");
        setCounter("_utsPearlSpent", spent() + 1);
        readScreech();
      },
    },
    {
      name: "Rundown out of time",
      ready: () => rundown() && spent() >= 40,
      completed: () => !rundown(),
      ...action(() => {
        reportRundownStalled("the screech still isn't ready after 40 turns");
        endRundown();
      }),
    },
    {
      name: "End the pearl walk",
      ready: () => walking() && ((!rundown() && !farming()) || currentZone() === undefined),
      completed: () => !walking(),
      ...action(() => {
        if (rundown()) reportRundownStalled("no open pearl zone with today's pearl unclaimed");
        if (farming()) {
          for (const [zone, , pref] of PEARL_ZONES) {
            if (!flag(pref)) print(`uts_postLoopFarmPearls: ${zone} left unclaimed.`, "red");
          }
          print(
            `uts_postLoopFarmPearls: ${claimedCount() - counter("_utsPearlClaimed")} pearls claimed in ${spent()} turns.`,
            "blue",
          );
        }
        setProperty("_utsPearlWalk", "done");
      }),
    },
    {
      name: "Pilsner for adventures",
      ready: () => walking() && myAdventures() === 0,
      completed: () => myAdventures() > 0,
      ...action(pilsnerForAdventures),
    },
    {
      name: "Lucky Fishy",
      ready: () => walking() && haveEffect($effect`Fishy`) === 0 && cloverFishyReady(),
      completed: () => haveEffect($effect`Fishy`) > 0,
      before: getLucky,
      outfit: () => new Gear("combat,sea", $location`The Brinier Deepers`).bathysphere().outfit(),
      do: () => {
        if (haveEffect($effect`Lucky!`) === 0) return;
        print("UTS: postloop pearls: Lucky! trip to The Brinier Deepers for 20 turns of Fishy");
        return $location`The Brinier Deepers`;
      },
      postAdventure: false,
      // A wanderer can spend the turn without the Lucky!; one more visit
      // collects The Haggling.
      limit: { skip: 2 },
    },
    {
      name: "Out of Fishy",
      ready: () => walking() && haveEffect($effect`Fishy`) === 0,
      completed: () => !walking() || haveEffect($effect`Fishy`) > 0,
      ...action(() => {
        if (rundown()) {
          reportRundownStalled("out of Fishy, so no pearl zone is reachable");
          endRundown();
          setProperty("_utsPearlWalk", "done");
          return;
        }
        abort(
          `postloop pearls: out of Fishy mid-zone after ${spent()} turns with ${claimedCount() - counter("_utsPearlClaimed")} pearls claimed; today's zone progress won't survive rollover.`,
        );
      }),
    },
    {
      // Resistance to the line, then +combat with the rest: the 200 weight
      // means no combat piece outbids a needed res level, and "18 max" stops
      // crediting res past the line.
      name: "Pearl zone",
      ready: walking,
      completed: () => !walking(),
      outfit: () => {
        const zone = currentZone() ?? $location.none;
        return new Gear(`200 ${pearlElement(zone)} res 18 max, combat,sea`, zone)
          .fam(walkFamiliar())
          .bathysphere()
          .outfit();
      },
      prepare: () => {
        if (spent() >= 90) {
          abort(
            "postloop pearls: 90 turns spent without finishing; something is wrong, bailing out.",
          );
        }
        pearlResCheck(currentZone() ?? $location.none);
        setProperty("_utsPearlFarm", "true");
      },
      do: () => currentZone() ?? $location.none,
      postAdventure: false,
      post: () => {
        setProperty("_utsPearlFarm", "false");
        setCounter("_utsPearlSpent", spent() + 1);
      },
    },
    {
      name: "Load the codpiece",
      ready: () => flag("uts_postLoopPrepCodpiece") && !walking(),
      completed: () => prop("_utsCodpieceLoaded") === "true",
      ...action(() => {
        prepCodpiece();
        setProperty("_utsCodpieceLoaded", "true");
      }),
      limit: { tries: 1 },
    },
    {
      name: "Postloop command",
      ready: () => prop("uts_postloopCommand") !== "" && !walking(),
      completed: () => prop("_utsPostloopCommandRan") === "true",
      ...action(() => {
        setProperty("_utsPostloopCommandRan", "true");
        cliExecute(prop("uts_postloopCommand"));
      }),
      limit: { tries: 1 },
    },
  ],
};
