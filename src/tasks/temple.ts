import {
  abort,
  availableAmount,
  buy,
  cliExecute,
  closetAmount,
  equip,
  haveEffect,
  haveEquipped,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  monsterHp,
  myBuffedstat,
  myHp,
  myMaxhp,
  numericModifier,
  print,
  pullsRemaining,
  refreshStatus,
  retrieveItem,
  takeCloset,
  toInt,
  turnsPlayed,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  $slot,
  $stat,
  BatWings,
  CursedMonkeyPaw,
  get,
  Leprecondo,
  questStep,
  set,
  uneffect,
} from "libram";

import { branch, TaskBody, SebQuest, SebTask } from "../engine";
import { Gear } from "../lib/gear";
import {
  baseballD,
  buyScholarGear,
  eatSushi,
  geyserLowRoll,
  leprecondo,
  useMapIfAvailable,
  zoneStall,
} from "../lib/iotm";
import { mood } from "../lib/mood";
import { adv } from "../lib/postAdventure";
import {
  delevelers,
  divingHelmet,
  libraryReady,
  tailpiece,
  YOG_HEALINGS_NEEDED,
} from "../lib/progress";
import { pulledToday, pullSequence, reservedPulls } from "../lib/pulls";
import { baseballPlayers, equipSwimTrunks } from "../lib/resources";
import { dreadSeedCheck, isKBandSushiEnough } from "../lib/seedfinder";
import { haveItem, highShiny, inAftercore, inSeaPath, lowShiny } from "../lib/state";

import { aftercoreBoss, tamed } from "./seahorse";
import {
  action,
  closetHallpasses,
  corralFarm,
  farmPrayerbeads,
  finishCaliginous,
  getCheatsheet,
  gymnasium,
  merkinLib,
  pawWishReady,
  prayerbeadGear,
  skateParkWar,
} from "./zones";

// The temple: the dreadscroll, Yog-Urt, the colosseum and Shub-Jigguwatt,
// then the final boss. Ported from YogUrt() through finalBoss() in
// UnderTheSea.ash.

const school = $location`Mer-kin Elementary School`;
const library = $location`Mer-kin Library`;
const corral = $location`The Coral Corral`;
const rightDoor = $location`Mer-kin Temple (Right Door)`;
const leftDoor = $location`Mer-kin Temple (Left Door)`;
const center = $location`Mer-kin Temple (Center Door)`;
const colosseum = $location`Mer-kin Colosseum`;
const scroll = (n: number) => get(`dreadScroll${n}`, 0);
const vocabulary = () => get("merkinVocabularyMastery");
const highPriest = () => get("isMerkinHighPriest");
const beads = () => availableAmount($item`Mer-kin prayerbeads`);

// ─── YOG-URT'S HP CHECK ───────────────────────────────────────────────────────

/** Healing items Yog-Urt's fight throws, in the order it throws them, and what each heals. */
const YOG_HEALING: [Item, number][] = [
  [$item`sea gel`, 500],
  [$item`Mer-kin healscroll`, 300],
  [$item`waterlogged scroll of healing`, 250],
  [$item`soggy used band-aid`, 1000],
  [$item`New Age healing crystal`, 500],
];

function yogHealingsNeeded(): number {
  return YOG_HEALINGS_NEEDED[beads()] ?? 0;
}

function yogHealingsOwned(): number {
  return YOG_HEALING.filter(([item]) => availableAmount(item) > 0).length;
}

/** Healings short of what the fight needs, more than pulls can cover. */
function yogHealingsShort(): boolean {
  return yogHealingsNeeded() - yogHealingsOwned() > pullsRemaining();
}

/** Maximum HP per point of buffed Muscle, from what's worn. */
function trueHPPercent(): number {
  const hp = (myMaxhp() - numericModifier("Maximum HP")) / (myBuffedstat($stat`Muscle`) + 3);
  return Math.round(hp * 100) / 100;
}

/**
 * Whether Yog-Urt's healing can keep up: the fight halves your Muscle, so
 * two hits at 90% of the predicted HP must not outrun the weakest healing.
 * Reads what is worn, so it runs once the Yog-Urt outfit is on.
 */
function yogHpCheck(): boolean {
  let maxHeal = 1001;
  let n = 0;
  const needed = beads() <= 3 ? YOG_HEALINGS_NEEDED[beads()] : 1;
  for (const [item, heal] of YOG_HEALING) {
    if (n >= needed) break;
    if (availableAmount(item) > 0) {
      maxHeal = Math.min(maxHeal, heal);
      n++;
    }
  }
  const predictedMus =
    Math.round(30 * (1 + numericModifier("Muscle Percent") / 100)) + numericModifier("Muscle");
  print(`Predicted Mus ${predictedMus}`);
  const predictedHP =
    Math.round((predictedMus + 3) * trueHPPercent()) + numericModifier("Maximum HP");
  print(`predicted HP ${predictedHP}`);
  if (predictedHP * 0.9 * 2 <= predictedHP + maxHeal) return true;
  if (haveEffect($effect`Gummiheart`) === 0) return false;
  const antidote = $item`soft green echo eyedrop antidote`;
  if (itemAmount(antidote) === 0 && pullsRemaining() > reservedPulls()) pullSequence(antidote);
  if (itemAmount(antidote) > 0) uneffect($effect`Gummiheart`);
  return haveEffect($effect`Gummiheart`) === 0;
}

// ─── THE SCHOOL ───────────────────────────────────────────────────────────────

/**
 * The long way to the dreadscroll (cheatsheets, the teacher, the bunwig, the
 * vocabulary) or the short way, when the knucklebone and sushi pin the seed
 * (the lounge's scholar pieces). Picked once a day, since it asks seedfinder.
 */
function schoolRoute(): "vocabulary" | "lounge" {
  let value = get("_sebSchoolRoute");
  if (value === "") {
    value = !isKBandSushiEnough() || inAftercore() ? "vocabulary" : "lounge";
    set("_sebSchoolRoute", value);
  }
  return value as "vocabulary" | "lounge";
}

const vocabularyRoute = () => !highPriest() && schoolRoute() === "vocabulary";
const loungeRoute = () =>
  !highPriest() &&
  schoolRoute() === "lounge" &&
  availableAmount($item`Mer-kin dreadscroll`) === 0 &&
  availableAmount($item`Mer-kin scholar tailpiece`) === 0;
const teacher = () => get("merkinElementaryTeacherUnlock");
const loungePieces = () =>
  availableAmount($item`Mer-kin facecowl`) > 0 && availableAmount($item`Mer-kin waistrope`) > 0;

function takeHallpasses(): void {
  takeCloset(closetAmount($item`Mer-kin hallpass`), $item`Mer-kin hallpass`);
}

const vocabularyTasks: SebTask[] = [
  {
    name: "Aftercore school supplies",
    ready: () => vocabularyRoute() && inAftercore(),
    completed: () => itemAmount($item`Mer-kin wordquiz`) >= 10 || vocabulary() >= 90,
    ...action(() =>
      cliExecute(
        "acquire 10 mer-kin cheatsheet, 10 mer-kin wordquiz, mer-kin killscroll, mer-kin healscroll, mer-kin knucklebone",
      ),
    ),
    limit: { skip: 1 },
  },
  {
    name: "Cheatsheets",
    ready: vocabularyRoute,
    completed: () => itemAmount($item`Mer-kin cheatsheet`) >= 9 || vocabulary() > 0,
    ...getCheatsheet(),
  },
  {
    name: "Unlock the teacher",
    ready: vocabularyRoute,
    completed: () => teacher() || libraryReady(),
    before: closetHallpasses,
    outfit: () => {
      const gear = new Gear("-combat,sea", school).need(
        $item`crappy Mer-kin tailpiece`,
        $item`crappy Mer-kin mask`,
      );
      if (get("_backUpUses") < 11 && haveItem($item`backup camera`)) {
        gear.need($item`backup camera`);
      } else if (haveSkill($skill`Double-Fisted Skull Smashing`)) {
        gear.need($item`Monodent of the Sea`);
      }
      if (get("_clubEmBattlefieldUsed") < 5) {
        gear.ifEquip($item`legendary seal-clubbing club`);
      } else if (baseballPlayers() < 9 || !get("baseballTeam").includes("838")) {
        gear.ifEquip($item`Baseball Diamond`);
      }
      return gear
        .ifEquip($item`blood cubic zirconia`)
        .bathysphere($item`toy Cupid bow`)
        .ifEquip($item`Möbius ring`)
        .outfit();
    },
    prepare: () => mood("-combat"),
    do: school,
    post: closetHallpasses,
  },
  {
    name: "Bunwig",
    ready: vocabularyRoute,
    completed: () => availableAmount($item`Mer-kin bunwig`) > 0 || libraryReady(),
    before: () => {
      if (get("baseballTeam").includes("773") && baseballPlayers() === 9) baseballD();
    },
    outfit: () =>
      new Gear("item drop, hat drop,sea", school)
        .need($item`crappy Mer-kin tailpiece`, $item`crappy Mer-kin mask`)
        .ifEquip(
          $item`legendary seal-clubbing club`,
          $item`blood cubic zirconia`,
          $item`Möbius ring`,
        )
        .bathysphere($item`toy Cupid bow`)
        .outfit(),
    prepare: () => {
      mood("itdrop");
      if (!teacher()) mood("-combat");
    },
    do: school,
    post: closetHallpasses,
  },
  {
    // Library runs while Steely-Eyed Squint is up, mid-vocabulary.
    name: "Library under Squint",
    ready: () =>
      vocabularyRoute() &&
      vocabulary() < 90 &&
      haveEffect($effect`Steely-Eyed Squint`) > 0 &&
      library.turnsSpent < 4 &&
      (loungePieces() ||
        (haveItem($item`Mer-kin scholar mask`) && haveItem($item`Mer-kin scholar tailpiece`))),
    completed: () => library.turnsSpent >= 4,
    before: buyScholarGear,
    outfit: () => {
      const gear = new Gear("item drop,sea", library)
        .need(
          $item`Mer-kin scholar mask`,
          $item`Mer-kin scholar tailpiece`,
          $item`Monodent of the Sea`,
        )
        .ifEquip($item`blood cubic zirconia`);
      if (get("_backUpUses") < 11 && haveItem($item`backup camera`)) {
        gear.need($item`backup camera`);
      }
      return gear.outfit();
    },
    prepare: useMapIfAvailable,
    do: library,
  },
  {
    // A wordquiz with no cheatsheet and no pull to get one.
    name: "Cheatsheet for a wordquiz",
    ready: () =>
      vocabularyRoute() &&
      vocabulary() < 90 &&
      itemAmount($item`Mer-kin wordquiz`) > 0 &&
      pullsRemaining() === 0,
    completed: () => itemAmount($item`Mer-kin cheatsheet`) > 0,
    ...getCheatsheet(),
  },
  {
    name: "Vocabulary",
    ready: vocabularyRoute,
    completed: () => vocabulary() >= 90,
    ...((): TaskBody => {
      const body = branch(
        () => itemAmount($item`Mer-kin wordquiz`) > 0,
        action(() => {
          if (itemAmount($item`Mer-kin cheatsheet`) === 0) pullSequence($item`Mer-kin cheatsheet`);
          use($item`Mer-kin wordquiz`);
        }),
        {
          outfit: () =>
            new Gear("item drop,sea", school)
              .ifEquip(divingHelmet(), tailpiece(), $item`Möbius ring`)
              .bathysphere($item`toy Cupid bow`)
              .outfit(),
          do: school,
        },
      );
      return {
        ...body,
        before: () => {
          takeHallpasses();
          body.before?.();
        },
      };
    })(),
  },
];

const loungeTasks: SebTask[] = [
  {
    name: "Lounge: unlock the teacher",
    ready: loungeRoute,
    completed: () => teacher() || loungePieces(),
    before: closetHallpasses,
    outfit: () => {
      const gear = new Gear("-combat,sea", school)
        .forRole("-combat")
        .need(
          $item`Monodent of the Sea`,
          $item`crappy Mer-kin tailpiece`,
          $item`crappy Mer-kin mask`,
        );
      if (baseballPlayers() < 9 || !get("baseballTeam").includes("838")) {
        gear.ifEquip($item`Baseball Diamond`);
      }
      return gear
        .ifEquip($item`blood cubic zirconia`)
        .bathysphere($item`toy Cupid bow`)
        .ifEquip($item`Möbius ring`)
        .outfit();
    },
    prepare: () => {
      mood("-combat");
      zoneStall("the teacher's lounge noncombat", $item.none, school, school.turnsSpent, 20);
    },
    do: school,
    post: closetHallpasses,
  },
  {
    name: "Lounge: pull a prayerbead",
    ready: () => loungeRoute() && beads() < 3,
    completed: () => beads() >= 3 || pulledToday($item`Mer-kin prayerbeads`),
    ...action(() => pullSequence($item`Mer-kin prayerbeads`)),
    limit: { skip: 1 },
  },
  {
    name: "Lounge: prayerbeads",
    ready: loungeRoute,
    completed: () => !yogHealingsShort(),
    ...farmPrayerbeads(),
  },
  {
    // Waiting for a piece first farms a 5% drop under -150% for the pass
    // that opens the lounge they come from.
    name: "Lounge: scholar pieces",
    ready: loungeRoute,
    completed: loungePieces,
    before: () => {
      takeHallpasses();
      uneffect($effect`The Sonata of Sneakiness`);
      if (availableAmount($item`Mer-kin hallpass`) === 0 && pullsRemaining() > reservedPulls()) {
        pullSequence($item`Mer-kin hallpass`);
      }
    },
    outfit: () =>
      new Gear("item drop,sea", school)
        .forRole("itdrop")
        .ifEquip(divingHelmet(), tailpiece())
        .need($item`Monodent of the Sea`)
        .ifEquip($item`blood cubic zirconia`, $item`Möbius ring`)
        .bathysphere($item`toy Cupid bow`)
        .outfit(),
    prepare: () => {
      mood("combat");
      mood("itdrop");
      // The lounge wants a hallpass, so that is the real gate.
      zoneStall(
        "the scholar outfit pieces",
        $item`Mer-kin hallpass`,
        school,
        school.turnsSpent,
        20,
      );
    },
    do: school,
  },
];

// ─── THE LIBRARY AND THE DREADSCROLL ──────────────────────────────────────────

const scholarGear = () =>
  (availableAmount($item`Mer-kin scholar mask`) > 0 || haveEquipped($item`Mer-kin scholar mask`)) &&
  (availableAmount($item`Mer-kin scholar tailpiece`) > 0 ||
    haveEquipped($item`Mer-kin scholar tailpiece`));
const schoolDone = () =>
  schoolRoute() === "vocabulary" ? vocabulary() >= 90 : !loungeRoute() || loungePieces();
const haveDreadscroll = () => availableAmount($item`Mer-kin dreadscroll`) > 0;
const libraryDone = () => haveDreadscroll() && [1, 6, 8].every((n) => scroll(n) !== 0);
const hintsDone = () => [1, 2, 3, 4, 5, 6, 8].every((n) => scroll(n) !== 0);

function sushiClue(): void {
  if (availableAmount($item`Mer-kin worktea`) === 0) pullSequence($item`Mer-kin worktea`);
  retrieveItem($item`white rice`);
  eatSushi();
}

/** A turn towards the scroll a combat hint needs: thingpouches, a pull, or prayerbead trips. */
function scrollFor(item: Item, fromPouches: boolean): TaskBody {
  return branch(
    () => fromPouches && itemAmount($item`Mer-kin thingpouch`) > 0,
    action(() => use(itemAmount($item`Mer-kin thingpouch`), $item`Mer-kin thingpouch`)),
    branch(
      () => !lowShiny() && pullsRemaining() > reservedPulls(),
      action(() => pullSequence(item)),
      farmPrayerbeads(),
    ),
  );
}

const dreadscrollTasks: SebTask[] = [
  {
    name: "Scholar gear",
    ready: () => !highPriest() && schoolDone(),
    completed: scholarGear,
    ...action(buyScholarGear),
    limit: { tries: 1 },
  },
  {
    name: "Library",
    ready: () => !highPriest() && schoolDone(),
    completed: libraryDone,
    ...merkinLib(),
    post: () => {
      if (haveDreadscroll()) dreadSeedCheck();
    },
  },
  {
    name: "Knucklebone clue",
    ready: () => !highPriest() && haveDreadscroll(),
    completed: () => scroll(4) !== 0,
    ...action(() => {
      if (itemAmount($item`Mer-kin knucklebone`) === 0) pullSequence($item`Mer-kin knucklebone`);
      use($item`Mer-kin knucklebone`);
      dreadSeedCheck();
    }),
    limit: { tries: 1 },
  },
  {
    name: "Sushi clue",
    ready: () => !highPriest() && haveDreadscroll() && vocabulary() < 90,
    completed: () => scroll(7) !== 0,
    ...action(() => {
      sushiClue();
      dreadSeedCheck();
    }),
    limit: { skip: 1 },
  },
  {
    name: "Prayerbeads, no pulls to spare",
    ready: () => !highPriest() && libraryDone() && (lowShiny() || pullsRemaining() === 0),
    completed: () => beads() >= 3,
    ...farmPrayerbeads(),
  },
  // Every clue but scroll 7 has to be in by now. The two combat scrolls'
  // hints come from a gym fight with the scroll in hand.
  {
    name: "Killscroll for its hint",
    ready: () => !highPriest() && libraryDone() && scroll(5) === 0,
    completed: () => itemAmount($item`Mer-kin killscroll`) > 0,
    before: () => print("Missed the killscroll hint", "red"),
    ...scrollFor($item`Mer-kin killscroll`, true),
  },
  {
    name: "Healscroll for its hint",
    ready: () => !highPriest() && libraryDone() && scroll(2) === 0,
    completed: () => itemAmount($item`Mer-kin healscroll`) > 0,
    before: () => print("Missed the healscroll hint", "red"),
    ...scrollFor($item`Mer-kin healscroll`, false),
  },
  {
    name: "Gym for the scroll hints",
    ready: () => !highPriest() && libraryDone(),
    completed: () => scroll(5) !== 0 && scroll(2) !== 0,
    ...gymnasium(),
    limit: { skip: 1 },
  },
  {
    name: "Every hint in",
    ready: () => !highPriest() && libraryDone(),
    completed: hintsDone,
    ...action(() => {
      const missed = [1, 3, 4, 6, 8].find((n) => scroll(n) === 0);
      if (missed) abort(`Missed dreadscroll ${missed} hint`);
    }),
    limit: { tries: 1 },
  },
];

// ─── BECOMING HIGH PRIEST ─────────────────────────────────────────────────────

const priestReady = () => !highPriest() && libraryDone() && hintsDone();
const tainted = () => haveEffect($effect`Deep-Tainted Mind`) > 0;
const skateWar = () => get("skateParkStatus") === "war";
const guardsMissing = () =>
  itemAmount($item`Mer-kin thighguard`) === 0 || itemAmount($item`Mer-kin headguard`) === 0;

function skateBuff(): void {
  if (!get("_skateBuff1") && !highShiny()) {
    equipSwimTrunks();
    visitUrl("sea_skatepark.php?action=state2buff1");
  }
}

const priestTasks: SebTask[] = [
  {
    name: "Prayerbeads for Yog-Urt's healing",
    ready: priestReady,
    completed: () => !yogHealingsShort(),
    ...farmPrayerbeads(),
  },
  {
    name: "Leprecondo",
    ready: () =>
      priestReady() &&
      Leprecondo.have() &&
      Leprecondo.installedFurniture().includes("padded weight bench"),
    completed: highPriest,
    ...action(() =>
      leprecondo(highShiny() ? "10,24,12,8,22,13,15,4,5,6" : "22,24,12,8,13,15,10,4,5,6"),
    ),
    limit: { skip: 1 },
  },
  {
    name: "Sushi for a god run",
    ready: () =>
      priestReady() && turnsPlayed() <= 17 && get("seb_godRunGuard", false) && scroll(7) === 0,
    completed: () => scroll(7) !== 0,
    ...action(() => {
      if (itemAmount($item`Mer-kin worktea`) === 0) {
        abort("On track for a god run, eat a sushi for the dreadscroll clue");
      }
      retrieveItem($item`white rice`);
      eatSushi();
    }),
    limit: { tries: 1 },
  },
  {
    name: "Aftercore sushi",
    ready: () => priestReady() && inAftercore() && !tainted(),
    completed: highPriest,
    ...action(() => {
      if (!get("hasSushiMat")) use($item`sushi-rolling mat`);
      retrieveItem($item`Mer-kin worktea`);
      retrieveItem($item`white rice`);
      eatSushi();
    }),
    limit: { skip: 1 },
  },
  // A wrong reading leaves Deep-Tainted Mind, which only spent turns clear.
  {
    name: "Tainted: skate park war",
    ready: () => priestReady() && tainted() && skateWar(),
    completed: () => !tainted(),
    ...skateParkWar(),
  },
  {
    name: "Tainted: gym",
    ready: () => priestReady() && tainted() && guardsMissing(),
    completed: () => !tainted(),
    ...gymnasium(),
    post: skateBuff,
  },
  {
    name: "Tainted: abyss",
    ready: () => priestReady() && tainted() && questStep("questS02Monkees") === 12,
    completed: () => !tainted(),
    ...finishCaliginous(),
  },
  {
    name: "Tainted: nowhere to go",
    ready: () => priestReady() && tainted(),
    completed: () => !tainted(),
    ...action(() =>
      abort("Hit a 1-in-40 situation; spend 1 non-free turn somewhere and rerun script"),
    ),
  },
  {
    name: "Read the dreadscroll",
    ready: () => priestReady() && !tainted(),
    completed: highPriest,
    before: () => uneffect($effect`The Sonata of Sneakiness`),
    ...action(() => use($item`Mer-kin dreadscroll`)),
    postAdventure: true,
    limit: { tries: 5 },
  },
];

// ─── YOG-URT ──────────────────────────────────────────────────────────────────

const yogWanted = () =>
  (inSeaPath() && !get("yogUrtDefeated")) || (inAftercore() && aftercoreBoss() === "Yogurt");
const disguised = () =>
  tamed() && (tailpiece() !== $item.none || availableAmount($item`crappy Mer-kin tailpiece`) > 0);

const skateCleanup: SebTask[] = [
  {
    name: "Skate park war",
    ready: skateWar,
    completed: () => !skateWar(),
    before: () => visitUrl("sea_skatepark.php"),
    ...skateParkWar(),
  },
  {
    name: "Skate park buff",
    ready: () => !highShiny(),
    completed: () => get("_skateBuff1"),
    ...action(skateBuff),
    limit: { tries: 1 },
  },
];

/** Prayerbeads worn, and the healing pulls that stand in for missing ones. */
function yogBeadsAndHealing(): void {
  equip($slot`acc1`, $item`Mer-kin prayerbeads`);
  const pullIfMissing = (item: Item) => {
    if (itemAmount(item) === 0 && !pulledToday(item)) {
      pullSequence(item);
      return true;
    }
    return false;
  };
  if (beads() >= 3) {
    equip($slot`acc2`, $item`Mer-kin prayerbeads`);
    equip($slot`acc3`, $item`Mer-kin prayerbeads`);
  } else if (beads() >= 2) {
    equip($slot`acc2`, $item`Mer-kin prayerbeads`);
    if (!pullIfMissing($item`New Age healing crystal`)) pullIfMissing($item`soggy used band-aid`);
  } else {
    pullIfMissing($item`New Age healing crystal`);
    pullIfMissing($item`soggy used band-aid`);
  }
}

/** A prayerbead, while still in the Yog-Urt outfit: the healscroll a healer drops can fix the HP check. */
function prayerbeadNow(): void {
  if (pawWishReady()) {
    CursedMonkeyPaw.wishFor($item`Mer-kin prayerbeads`);
    return;
  }
  prayerbeadGear().dress();
  mood("-combat");
  adv($location`The Mer-Kin Outpost`);
}

export const YogUrtQuest: SebQuest = {
  name: "Yog-Urt",
  ready: () => disguised() && yogWanted(),
  tasks: [
    ...vocabularyTasks,
    ...loungeTasks,
    ...dreadscrollTasks,
    ...priestTasks,
    ...skateCleanup.map((task) => ({ ...task, ready: () => highPriest() && task.ready!() })),
    {
      name: "Prayerbeads, short on pulls",
      ready: () => highPriest() && beads() < 3 && (lowShiny() || pullsRemaining() === 0),
      completed: () => !yogHealingsShort(),
      ...farmPrayerbeads(),
    },
    {
      name: "Healscroll",
      ready: highPriest,
      completed: () => itemAmount($item`Mer-kin healscroll`) > 0,
      ...action(() => pullSequence($item`Mer-kin healscroll`)),
      limit: { skip: 1 },
    },
    // Null Afternoon stands in for the two delevelers while it lasts.
    {
      name: "Null-day exploit",
      ready: () =>
        highPriest() &&
        haveEffect($effect`Null Afternoon`) === 0 &&
        delevelers() < 2 &&
        !pulledToday($item`null-day exploit`) &&
        pullsRemaining() > 0 &&
        !lowShiny(),
      completed: () => haveEffect($effect`Null Afternoon`) > 0,
      ...action(() => {
        pullSequence($item`null-day exploit`);
        use($item`null-day exploit`);
      }),
      limit: { tries: 1 },
    },
    {
      name: "Delevelers from the corral",
      ready: () => highPriest() && haveEffect($effect`Null Afternoon`) === 0,
      completed: () => delevelers() >= 2,
      ...corralFarm(),
      post: () => {
        corralFarm().post?.();
        if (corral.turnsSpent % 10 === 0) {
          print(
            `Deleveler farming: ${corral.turnsSpent} turns in The Coral Corral. ` +
              `Yog-Urt needs 2 delevelers and ${delevelers()} are on hand.`,
            "red",
          );
        }
      },
    },
    {
      name: "Prayerbeads for the healing",
      ready: highPriest,
      completed: () => !yogHealingsShort(),
      ...farmPrayerbeads(),
    },
    {
      name: "Yog-Urt",
      ready: highPriest,
      completed: () => get("yogUrtDefeated"),
      before: () => {
        cliExecute(
          "acquire waterlogged scroll of healing, sea gel, Doc Galaktik's Pungent Unguent, Doc Galaktik's Homeopathic Elixir; cast cannel",
        );
        if (beads() < 3 && !pulledToday($item`Mer-kin prayerbeads`)) {
          pullSequence($item`Mer-kin prayerbeads`);
        }
      },
      outfit: () =>
        new Gear(
          "moxie, hot damage, cold damage, spooky damage, sleaze damage, stench damage, -hp, -equip tiny yam cannon,sea",
          rightDoor,
        )
          .forRole("exp")
          .need($item`Mer-kin scholar mask`, $item`Mer-kin scholar tailpiece`)
          .bathysphere($item`toy Cupid bow`)
          .ifEquip($item`bat wings`)
          .outfit(),
      prepare: yogBeadsAndHealing,
      do: () => {
        // Farming the outpost can move this: a healer's healscroll raises
        // the weakest healing the fight will throw.
        if (!yogHpCheck()) {
          prayerbeadNow();
          return;
        }
        // Prayerbead farming can outlast Null Afternoon; restock delevelers first.
        if (haveEffect($effect`Null Afternoon`) === 0 && delevelers() < 2) return;
        return rightDoor;
      },
      limit: {
        tries: 25,
        message:
          "Predicted HP is still too high for the healing on hand; check what is granting maximum HP, or whether Gummiheart is up.",
      },
    },
  ],
};

const finishAbyss: SebTask = {
  name: "Finish the abyss",
  ready: () => inSeaPath() && questStep("questS02Monkees") === 12,
  completed: () => questStep("questS02Monkees") !== 12,
  ...finishCaliginous(),
};

export const AfterYogUrtQuest: SebQuest = {
  name: "After Yog-Urt",
  ready: () => disguised() && (!inSeaPath() || get("yogUrtDefeated")),
  tasks: [
    ...skateCleanup.map((task) => ({ ...task, ready: () => inSeaPath() && task.ready!() })),
    {
      // The comfort and cleanup items wait until Shub is dead: they once ate
      // the last pull slots right before a Shub retry needed the null-day exploit.
      name: "Late pulls",
      ready: inSeaPath,
      completed: () => pullsRemaining() === 0,
      ...action(() => {
        if (itemAmount($item`crayon shavings`) < 8) pullSequence($item`null-day exploit`);
        for (const item of $items`peppermint parasol, ink bladder, Mer-kin pinkslip, stuffed yam stinkbomb, Louder Than Bomb, anchor bomb`) {
          if (
            item === $item`peppermint parasol` &&
            (haveItem($item`navel ring of navel gazing`) ||
              haveItem($item`Greatest American Pants`))
          ) {
            continue;
          }
          if (!pulledToday(item)) pullSequence(item);
          if (pullsRemaining() === 0) break;
        }
      }),
      limit: { skip: 1 },
    },
    {
      ...finishAbyss,
      ready: () => finishAbyss.ready!() && get("spookyVHSTapeMonster") === null,
    },
  ],
};

// ─── THE COLOSSEUM AND SHUB-JIGGUWATT ─────────────────────────────────────────

/**
 * Champions come at rounds won 12 to 14 and must die to one Saucegeyser.
 * Stops before the turn when the estimate is short of the weakest one's HP,
 * or no higher than one that already failed today.
 */
function championCheck(): void {
  const won = get("lastColosseumRoundWon");
  if (won < 12 || won > 14 || !haveSkill($skill`Saucegeyser`) || get("isMerkinGladiatorChampion")) {
    return;
  }
  const weakest = monsterHp($monster`Georgepaul, the Balldodger`);
  const ranEst = get("_sebChampionRanEst");
  let why = "";
  if (ranEst !== "" && geyserLowRoll() <= toInt(ranEst)) {
    why =
      `SEB: one Saucegeyser estimated at ${ranEst} failed to kill a Colosseum champion today, ` +
      `and the estimate here is ${geyserLowRoll()}. Raise Mysticality or spell damage past that, or fight it by hand, then rerun.`;
  } else if (geyserLowRoll() < weakest) {
    why =
      `SEB: the Colosseum champions (${weakest} HP and up) must die to one Saucegeyser, estimated at ` +
      `${geyserLowRoll()} here. Raise Mysticality or spell damage, or fight them by hand, then rerun.`;
  }
  if (why === "") {
    set("_sebChampionRanEst", "");
    return;
  }
  print(why, "red");
  abort(why);
}

const gladiatorGear = () =>
  availableAmount($item`Mer-kin gladiator mask`) > 0 &&
  availableAmount($item`Mer-kin gladiator tailpiece`) > 0;
const roundsWon = () => get("lastColosseumRoundWon");
const shubWanted = () => inSeaPath() || (inAftercore() && aftercoreBoss() === "Shub");

export const ShubQuest: SebQuest = {
  name: "Shub-Jigguwatt",
  ready: () => disguised() && (!inSeaPath() || get("yogUrtDefeated")) && shubWanted(),
  completed: () => get("shubJigguwattDefeated"),
  tasks: [
    {
      name: "Gym for the guards",
      ready: () => !gladiatorGear() && guardsMissing(),
      completed: gladiatorGear,
      ...gymnasium(),
    },
    {
      name: "Gladiator gear",
      completed: gladiatorGear,
      ...action(() => {
        equip($slot`hat`, $item.none);
        equip($slot`pants`, $item.none);
        equipSwimTrunks();
        if (itemAmount($item`Mer-kin scholar mask`) > 0) {
          visitUrl("shop.php?whichshop=grandma&action=buyitem&quantity=1&whichrow=131");
        }
        if (itemAmount($item`Mer-kin scholar tailpiece`) > 0) {
          visitUrl("shop.php?whichshop=grandma&action=buyitem&quantity=1&whichrow=1619");
        }
        for (const item of $items`Mer-kin gladiator mask, Mer-kin gladiator tailpiece`) {
          if (availableAmount(item) === 0) buy($coinmaster`Grandma Sea Monkey`, 1, item);
        }
        refreshStatus();
      }),
      limit: { tries: 1 },
    },
    {
      // Gladiators are insta-kill immune, so the club is the only free round
      // in the building. Past its five casts, only the bat wings can refund a round.
      name: "Colosseum",
      completed: () => roundsWon() >= 15,
      before: () => {
        if (
          roundsWon() >= 3 &&
          haveEffect($effect`Up To 11`) === 0 &&
          haveSkill($skill`BCZ: Dial it up to 11`)
        ) {
          cliExecute($effect`Up To 11`.default);
        }
        if (
          roundsWon() >= 6 &&
          itemAmount($item`crayon shavings`) < 8 &&
          itemAmount($item`null-day exploit`) > 0 &&
          haveEffect($effect`Null Afternoon`) === 0
        ) {
          use($item`null-day exploit`);
        }
      },
      outfit: () => {
        const coeff =
          (60 + myBuffedstat($stat`Mysticality`) / 2.5) /
          (numericModifier("Spell Damage Percent") + 1);
        const gear = new Gear(`${coeff} spell damage percent, mys,sea`, colosseum).need(
          $item`Mer-kin gladiator tailpiece`,
          $item`Mer-kin gladiator mask`,
        );
        if (
          haveFamiliar($familiar`Patriotic Eagle`) &&
          get("screechCombats") > 0 &&
          haveItem($item`Congressional Medal of Insanity`)
        ) {
          gear.fam($familiar`Patriotic Eagle`);
        } else if (haveFamiliar($familiar`Foul Ball`)) {
          gear.fam($familiar`Foul Ball`);
        }
        if (
          get("_clubEmTimeUsed") < 5 &&
          !highShiny() &&
          !lowShiny() &&
          haveItem($item`legendary seal-clubbing club`)
        ) {
          gear.need($item`legendary seal-clubbing club`);
        }
        if (BatWings.have() && BatWings.flapChance() > 0) {
          gear.ifEquip($item`bat wings`);
        } else if (haveItem($item`unwrapped knock-off retro superhero cape`)) {
          gear
            .need($item`unwrapped knock-off retro superhero cape`)
            .mode({ retrocape: ["heck", "kill"] });
        }
        return gear
          .ifEquip($item`Congressional Medal of Insanity`)
          .bathysphere()
          .outfit();
      },
      prepare: () => {
        mood("colosseum");
        championCheck();
      },
      do: colosseum,
      post: () => {
        if (get("lastEncounter") === "Been There, Won That") {
          set("lastColosseumRoundWon", 15);
          set("isMerkinGladiatorChampion", true);
        }
      },
      limit: { tries: 30 },
    },
    finishAbyss,
    {
      name: "Shub-Jigguwatt",
      completed: () => get("shubJigguwattDefeated"),
      before: () => {
        if (inAftercore()) {
          retrieveItem(8, $item`crayon shavings`);
        } else if (
          itemAmount($item`crayon shavings`) < 8 &&
          haveEffect($effect`Null Afternoon`) === 0
        ) {
          if (itemAmount($item`null-day exploit`) > 0) use($item`null-day exploit`);
          else if (highShiny()) mood("shub");
          else abort("Hit Shub without adequate delevers, this means something went wrong, sorry!");
        }
        for (const effect of $effects`Scarysauce`) {
          if (haveEffect(effect) > 0 && !uneffect(effect)) {
            print(`Couldn't remove ${effect} before Shub-Jigguwatt.`, "red");
          }
        }
      },
      outfit: () =>
        new Gear("damage absorption, mus,sea", leftDoor)
          .forRole("exp")
          .need($item`Mer-kin gladiator mask`, $item`Mer-kin gladiator tailpiece`)
          .bathysphere($item`toy Cupid bow`)
          .outfit(),
      prepare: () => {
        set("hpAutoRecoveryTarget", 1);
        set("mpAutoRecovery", -0.05);
        set("mpAutoRecoveryTarget", -0.05);
        while (myHp() < myMaxhp()) useSkill($skill`Cannelloni Cocoon`);
        cliExecute("recover hp; cast * empathy");
      },
      do: leftDoor,
      limit: { tries: 1 },
    },
  ],
};

// ─── THE FINAL BOSS ───────────────────────────────────────────────────────────

const finalBossGear = (): Gear => {
  const gear = new Gear("spell damage percent, mys,sea", center).need(
    $item`Mer-kin gladiator mask`,
    $item`Mer-kin gladiator tailpiece`,
  );
  if (BatWings.flapChance() > 0) {
    gear.ifEquip($item`bat wings`);
  } else if (haveItem($item`unwrapped knock-off retro superhero cape`)) {
    gear
      .need($item`unwrapped knock-off retro superhero cape`)
      .mode({ retrocape: ["heck", "kill"] });
  }
  return gear.ifEquip($item`Congressional Medal of Insanity`).bathysphere($item`toy Cupid bow`);
};

export const FinalBossQuest: SebQuest = {
  name: "Final boss",
  tasks: [
    {
      name: "Naughty Sorceress",
      ready: () => inSeaPath() && get("shubJigguwattDefeated"),
      completed: () => questStep("questL13Final") >= 0,
      outfit: () => finalBossGear().outfit(),
      do: () => {
        adv(center);
        adv(center);
      },
      limit: { tries: 1 },
    },
    {
      name: "Dad",
      ready: () => inAftercore() && aftercoreBoss() === "Dad",
      completed: () => get("_sebDadFought", false),
      before: () =>
        cliExecute("acquire 3 warbear whosit; acquire 3 volcanic ash; recover mp; tempura air"),
      outfit: () =>
        new Gear("spell damage percent,sea", center)
          .fam($familiar`Tiny Plastic Santa Claus Skeleton`)
          .need(
            $item`Goggles of Loathing`,
            $item`Stick-Knife of Loathing`,
            $item`Scepter of Loathing`,
            $item`Jeans of Loathing`,
            $item`Treads of Loathing`,
            $item`Belt of Loathing`,
            $item`little bitty bathysphere`,
          )
          .outfit(),
      prepare: () => set("mpAutoRecoveryTarget", 1),
      do: () => {
        set("_sebDadFought", true);
        return center;
      },
      limit: { tries: 1 },
    },
  ],
};
