import {
  abort,
  availableAmount,
  buy,
  cliExecute,
  closetAmount,
  equip,
  getProperty,
  haveEffect,
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
  setProperty,
  takeCloset,
  toInt,
  turnsPlayed,
  use,
  useFamiliar,
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
  get,
} from "libram";
import { useRole } from "../lib/familiar";
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
import { adv, postAdventure } from "../lib/postAdventure";
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
import { haveItem, highShiny, inAftercore, inSeaPath, lowShiny, step } from "../lib/state";
import { aftercoreBoss } from "./seahorse";
import {
  closetHallpasses,
  combatScrollHint,
  farmPrayerbeads,
  finishCaliginous,
  getCheatsheet,
  getMissingCorralItems,
  gymnasium,
  merkinLib,
  pullPrayerbead,
  skatePark,
} from "./shared";

// The temple: Yog-Urt, the colosseum and Shub-Jigguwatt, then the final boss.
// Ported from YogUrt() through finalBoss() in UnderTheSea.ash.

const school = $location`Mer-kin Elementary School`;
const library = $location`Mer-kin Library`;
const prop = (name: string) => getProperty(name);

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
  return YOG_HEALINGS_NEEDED[availableAmount($item`Mer-kin prayerbeads`)] ?? 0;
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
 */
function yogHpCheck(): boolean {
  let maxHeal = 1001;
  let n = 0;
  const beads = availableAmount($item`Mer-kin prayerbeads`);
  const needed = beads <= 3 ? YOG_HEALINGS_NEEDED[beads] : 1;
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
  if (itemAmount(antidote) > 0) cliExecute("uneffect gummiheart");
  return haveEffect($effect`Gummiheart`) === 0;
}

// ─── THE SCHOOL AND THE LIBRARY ───────────────────────────────────────────────

/** The long way to the dreadscroll: cheatsheets, the teacher, the bunwig, the vocabulary. */
function vocabularyRoute(): void {
  if (inAftercore()) {
    cliExecute(
      "acquire 10 mer-kin cheatsheet, 10 mer-kin wordquiz, mer-kin killscroll, mer-kin healscroll, mer-kin knucklebone",
    );
  }
  step("phase: elementary school (cheatsheets / vocabulary)");
  while (itemAmount($item`Mer-kin cheatsheet`) < 9 && prop("merkinVocabularyMastery") === "0") {
    getCheatsheet();
  }

  // Unlock the teacher via the noncombat.
  while (!get("merkinElementaryTeacherUnlock") && !libraryReady()) {
    closetHallpasses();
    const gear = new Gear("-combat,sea", school).need(
      $item`crappy Mer-kin tailpiece`,
      $item`crappy Mer-kin mask`,
    );
    if (get("_backUpUses") < 11 && haveItem($item`backup camera`)) gear.need($item`backup camera`);
    else if (haveSkill($skill`Double-Fisted Skull Smashing`)) gear.need($item`Monodent of the Sea`);
    if (get("_clubEmBattlefieldUsed") < 5) gear.ifEquip($item`legendary seal-clubbing club`);
    else if (baseballPlayers() < 9 || !prop("baseballTeam").includes("838")) {
      gear.ifEquip($item`baseball diamond`);
    }
    gear
      .ifEquip($item`blood cubic zirconia`)
      .bathysphere($item`toy Cupid bow`)
      .ifEquip($item`Möbius ring`)
      .dress();
    mood("-combat");
    adv(school);
    closetHallpasses();
  }

  // The bunwig.
  while (availableAmount($item`Mer-kin bunwig`) === 0 && !libraryReady()) {
    if (prop("baseballTeam").includes("773") && baseballPlayers() === 9) {
      baseballD();
      continue;
    }
    new Gear("item drop, hat drop,sea", school)
      .need($item`crappy Mer-kin tailpiece`, $item`crappy Mer-kin mask`)
      .ifEquip($item`legendary seal-clubbing club`, $item`blood cubic zirconia`, $item`Möbius ring`)
      .bathysphere($item`toy Cupid bow`)
      .dress();
    mood("itdrop");
    if (!get("merkinElementaryTeacherUnlock")) mood("-combat");
    adv(school);
    closetHallpasses();
  }
  takeCloset(closetAmount($item`Mer-kin hallpass`), $item`Mer-kin hallpass`);

  // The vocabulary grind.
  while (toInt(prop("merkinVocabularyMastery")) < 90) {
    if (itemAmount($item`Mer-kin wordquiz`) > 0) {
      if (itemAmount($item`Mer-kin cheatsheet`) === 0 && pullsRemaining() > 0) {
        pullSequence($item`Mer-kin cheatsheet`);
      } else if (itemAmount($item`Mer-kin cheatsheet`) === 0) {
        while (itemAmount($item`Mer-kin cheatsheet`) === 0) getCheatsheet();
      }
      use($item`Mer-kin wordquiz`);
    } else {
      new Gear("item drop,sea", school)
        .ifEquip(divingHelmet(), tailpiece(), $item`Möbius ring`)
        .bathysphere($item`toy Cupid bow`)
        .dress();
      adv(school);
    }

    // Library runs while Steely-Eyed Squint is up.
    if (
      itemAmount($item`Mer-kin facecowl`) > 0 &&
      itemAmount($item`Mer-kin waistrope`) > 0 &&
      haveEffect($effect`Steely-Eyed Squint`) > 0
    ) {
      buyScholarGear();
      while (library.turnsSpent < 4 && haveEffect($effect`Steely-Eyed Squint`) > 0) {
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
        gear.dress();
        useMapIfAvailable();
        adv(library);
      }
      print(`turns played? ${turnsPlayed()}`, "orange");
    }
  }
}

/** The short way, when the knucklebone and sushi pin the seed: the lounge's scholar pieces. */
function loungeRoute(): void {
  // Both loops feed on the same zone, so they share a count.
  let schoolTurns = 0;
  while (!get("merkinElementaryTeacherUnlock")) {
    closetHallpasses();
    useRole("-combat");
    const gear = new Gear("-combat,sea", school).need(
      $item`Monodent of the Sea`,
      $item`crappy Mer-kin tailpiece`,
      $item`crappy Mer-kin mask`,
    );
    if (baseballPlayers() < 9 || !prop("baseballTeam").includes("838")) {
      gear.ifEquip($item`baseball diamond`);
    }
    gear
      .ifEquip($item`blood cubic zirconia`)
      .bathysphere($item`toy Cupid bow`)
      .ifEquip($item`Möbius ring`)
      .dress();
    mood("-combat");
    zoneStall("the teacher's lounge noncombat", $item.none, school, schoolTurns, 20);
    adv(school);
    schoolTurns++;
    closetHallpasses();
    if (
      availableAmount($item`Mer-kin facecowl`) > 0 &&
      availableAmount($item`Mer-kin waistrope`) > 0
    ) {
      break;
    }
  }
  takeCloset(closetAmount($item`Mer-kin hallpass`), $item`Mer-kin hallpass`);
  pullPrayerbead();
  while (yogHealingsShort()) farmPrayerbeads();
  cliExecute("uneffect the sonata of sneakiness");
  while (
    availableAmount($item`Mer-kin facecowl`) === 0 ||
    availableAmount($item`Mer-kin waistrope`) === 0
  ) {
    // Waiting for a piece first farms a 5% drop under -150% for the pass
    // that opens the lounge they come from.
    if (availableAmount($item`Mer-kin hallpass`) === 0 && pullsRemaining() > reservedPulls()) {
      pullSequence($item`Mer-kin hallpass`);
    }
    useRole("itdrop");
    mood("combat");
    mood("itdrop");
    new Gear("item drop,sea", school)
      .ifEquip(divingHelmet(), tailpiece())
      .need($item`Monodent of the Sea`)
      .ifEquip($item`blood cubic zirconia`, $item`Möbius ring`)
      .bathysphere($item`toy Cupid bow`)
      .dress();
    // The lounge wants a hallpass, so that is the real gate.
    zoneStall("the scholar outfit pieces", $item`Mer-kin hallpass`, school, schoolTurns, 20);
    adv(school);
    schoolTurns++;
  }
}

function dreadscrollLibrary(): void {
  step("phase: library (dreadscroll)");
  const missing = () =>
    availableAmount($item`Mer-kin dreadscroll`) === 0 ||
    ["1", "6", "8"].some((n) => prop(`dreadScroll${n}`) === "0");
  while (missing()) {
    merkinLib();
    if (availableAmount($item`Mer-kin dreadscroll`) === 0) continue;
    // The knucklebone for scroll 4.
    if (prop("dreadScroll4") === "0") {
      if (itemAmount($item`Mer-kin knucklebone`) === 0) pullSequence($item`Mer-kin knucklebone`);
      use($item`Mer-kin knucklebone`);
      dreadSeedCheck();
    }
    if (prop("dreadScroll7") === "0" && toInt(prop("merkinVocabularyMastery")) < 90) {
      if (availableAmount($item`Mer-kin worktea`) === 0) pullSequence($item`Mer-kin worktea`);
      retrieveItem($item`white rice`);
      eatSushi();
    }
    dreadSeedCheck();
  }
}

function becomeHighPriest(): void {
  step("phase: becoming High Priest");
  while (!get("isMerkinHighPriest")) {
    if (turnsPlayed() <= 17 && prop("uts_godRunGuard") === "true" && prop("dreadScroll7") === "0") {
      if (itemAmount($item`Mer-kin worktea`) > 0) {
        retrieveItem($item`white rice`);
        eatSushi();
      } else {
        abort("On track for a god run, eat a sushi for the dreadscroll clue");
      }
    }
    if (inAftercore()) {
      if (!get("hasSushiMat")) use($item`sushi-rolling mat`);
      retrieveItem($item`Mer-kin worktea`);
      retrieveItem($item`white rice`);
      eatSushi();
    }
    if (haveEffect($effect`Deep-Tainted Mind`) === 0) {
      use($item`Mer-kin dreadscroll`);
      postAdventure();
      continue;
    }
    while (haveEffect($effect`Deep-Tainted Mind`) > 0) {
      if (prop("skateParkStatus") === "war") {
        skatePark();
      } else if (
        itemAmount($item`Mer-kin thighguard`) === 0 ||
        itemAmount($item`Mer-kin headguard`) === 0
      ) {
        gymnasium();
        skateBuff();
      } else if (prop("questS02Monkees") === "step12") {
        finishCaliginous();
      } else {
        abort("Hit a 1-in-40 situation — spend 1 non-free turn somewhere and rerun script");
      }
    }
  }
}

function skateBuff(): void {
  if (!get("_skateBuff1") && !highShiny()) {
    equipSwimTrunks();
    visitUrl("sea_skatepark.php?action=state2buff1");
  }
}

function skateParkCleanup(): void {
  while (prop("skateParkStatus") === "war") skatePark();
  skateBuff();
}

// ─── YOG-URT ──────────────────────────────────────────────────────────────────

function yogPrep(): void {
  if (!isKBandSushiEnough() || inAftercore()) {
    vocabularyRoute();
  } else if (
    availableAmount($item`Mer-kin dreadscroll`) === 0 &&
    availableAmount($item`Mer-kin scholar tailpiece`) === 0
  ) {
    loungeRoute();
  }

  buyScholarGear();
  if (availableAmount($item`Mer-kin dreadscroll`) > 0) dreadSeedCheck();
  dreadscrollLibrary();

  if (availableAmount($item`Mer-kin prayerbeads`) < 3 && (lowShiny() || pullsRemaining() === 0)) {
    while (availableAmount($item`Mer-kin prayerbeads`) < 3) farmPrayerbeads();
  }

  // Every clue but scroll 7 has to be in by now.
  for (let x = 1; x <= 8; x++) {
    if (x === 7 || prop(`dreadScroll${x}`) !== "0") continue;
    if (x === 2) {
      print("Missed the healscroll hint", "red");
      combatScrollHint();
    } else if (x === 5) {
      print("Missed the killscroll hint", "red");
      combatScrollHint();
    } else {
      abort(`Missed dreadscroll ${x} hint`);
    }
  }

  while (yogHealingsShort()) farmPrayerbeads();
  cliExecute("uneffect the sonata of sneakiness");
  if (prop("leprecondoInstalled").includes("11") && itemAmount($item`Leprecondo`) > 0) {
    leprecondo(highShiny() ? "10,24,12,8,22,13,15,4,5,6" : "22,24,12,8,13,15,10,4,5,6");
  }
  becomeHighPriest();
}

/** Two delevelers on hand, by pulling a null-day exploit or farming the corral. */
function yogDelevelers(): void {
  if (haveEffect($effect`Null Afternoon`) > 0 || delevelers() >= 2) return;
  if (!pulledToday($item`null-day exploit`) && pullsRemaining() > 0 && !lowShiny()) {
    pullSequence($item`null-day exploit`);
    use($item`null-day exploit`);
    return;
  }
  const why = pulledToday($item`null-day exploit`)
    ? "the null-day exploit was already pulled today"
    : lowShiny()
      ? "low shiny runs don't pull a null-day exploit here"
      : "no pulls are left for a null-day exploit";
  const farmStart = turnsPlayed();
  let noticeAt = 10;
  while (delevelers() < 2) {
    getMissingCorralItems();
    const farmed = turnsPlayed() - farmStart;
    if (farmed > noticeAt) {
      print(
        `Deleveler farming: ${farmed} turns in The Coral Corral for delevelers. ` +
          `Yog-Urt needs 2 delevelers and ${delevelers()} are on hand; ${why}.`,
        "red",
      );
      noticeAt = farmed + 10 - (farmed % 10);
    }
  }
}

function yogFight(): void {
  let hpCheckPasses = 0;
  while (!get("yogUrtDefeated")) {
    cliExecute(
      "acquire waterlogged scroll of healing, sea gel, Doc Galaktik's Pungent Unguent, Doc Galaktik's Homeopathic Elixir; cast cannel",
    );
    // Null Afternoon stands in for the delevelers while it lasts.
    yogDelevelers();
    if (
      availableAmount($item`Mer-kin prayerbeads`) < 3 &&
      pulledToday($item`Mer-kin prayerbeads`)
    ) {
      pullSequence($item`Mer-kin prayerbeads`);
    }
    while (yogHealingsShort()) farmPrayerbeads();

    useRole("exp");
    new Gear(
      "moxie, hot damage, cold damage, spooky damage, sleaze damage, stench damage, -hp, -equip tiny yam cannon,sea",
      $location`Mer-kin Temple (Right Door)`,
    )
      .need($item`Mer-kin scholar mask`, $item`Mer-kin scholar tailpiece`)
      .bathysphere($item`toy Cupid bow`)
      .ifEquip($item`bat wings`)
      .dress();
    equip($slot`acc1`, $item`Mer-kin prayerbeads`);
    const beads = availableAmount($item`Mer-kin prayerbeads`);
    const pullIfMissing = (item: Item) => {
      if (itemAmount(item) === 0 && !pulledToday(item)) {
        pullSequence(item);
        return true;
      }
      return false;
    };
    if (beads >= 3) {
      equip($slot`acc2`, $item`Mer-kin prayerbeads`);
      equip($slot`acc3`, $item`Mer-kin prayerbeads`);
    } else if (beads >= 2) {
      equip($slot`acc2`, $item`Mer-kin prayerbeads`);
      if (!pullIfMissing($item`New Age healing crystal`)) pullIfMissing($item`soggy used band-aid`);
    } else {
      pullIfMissing($item`New Age healing crystal`);
      pullIfMissing($item`soggy used band-aid`);
    }
    if (!yogHpCheck()) {
      // Farming the outpost can move this: a healer's healscroll raises the
      // weakest healing the fight will throw. That is only a chance, so the
      // wait is capped, below Gummiheart's duration.
      if (hpCheckPasses >= 25) {
        abort(
          `Predicted HP is still too high for the healing on hand after ${hpCheckPasses} prayerbead attempts` +
            (haveEffect($effect`Gummiheart`) > 0
              ? " (Gummiheart is still up and no antidote could be pulled)"
              : "") +
            " -- check what is granting maximum HP.",
        );
      }
      hpCheckPasses++;
      farmPrayerbeads();
      continue;
    }
    // Prayerbead farming can outlast Null Afternoon; restock delevelers first.
    if (haveEffect($effect`Null Afternoon`) === 0 && delevelers() < 2) continue;
    adv($location`Mer-kin Temple (Right Door)`);
  }
}

export function yogUrt(): void {
  step("phase: Yog-Urt preparation");
  if (!((inSeaPath() && !get("yogUrtDefeated")) || (inAftercore() && aftercoreBoss === "Yogurt"))) {
    return;
  }
  if (!get("isMerkinHighPriest")) yogPrep();
  skateParkCleanup();
  if (availableAmount($item`Mer-kin prayerbeads`) < 3 && (lowShiny() || pullsRemaining() === 0)) {
    while (yogHealingsShort()) farmPrayerbeads();
  }
  if (itemAmount($item`Mer-kin healscroll`) === 0) pullSequence($item`Mer-kin healscroll`);
  yogFight();
}

export function postYogUrt(): void {
  if (!get("yogUrtDefeated") && inSeaPath()) abort("Passing over yogUrt too early — rerun script");
  if (inSeaPath()) {
    skateParkCleanup();
    // Late pulls. The comfort and cleanup items wait until Shub is dead:
    // they once ate the last pull slots right before a Shub retry needed the
    // null-day exploit.
    if (pullsRemaining() > 0) {
      if (itemAmount($item`crayon shavings`) < 8) pullSequence($item`null-day exploit`);
      for (const item of $items`peppermint parasol, ink bladder, Mer-kin pinkslip, stuffed yam stinkbomb, Louder Than Bomb, anchor bomb`) {
        if (
          item === $item`peppermint parasol` &&
          (haveItem($item`navel ring of navel gazing`) || haveItem($item`Greatest American Pants`))
        ) {
          continue;
        }
        if (!pulledToday(item)) pullSequence(item);
        if (pullsRemaining() === 0) break;
      }
    }
  }
  if (inSeaPath() && prop("spookyVHSTapeMonster") === "") {
    while (prop("questS02Monkees") === "step12") finishCaliginous();
  }
}

// ─── THE COLOSSEUM AND SHUB-JIGGUWATT ─────────────────────────────────────────

/**
 * Champions come at rounds won 12 to 14 and must die to one Saucegeyser.
 * Stops before the turn when the estimate is short of the weakest one's HP,
 * or no higher than one that already failed today.
 */
function championCheck(): void {
  const won = toInt(prop("lastColosseumRoundWon"));
  if (won < 12 || won > 14 || !haveSkill($skill`Saucegeyser`) || get("isMerkinGladiatorChampion")) {
    return;
  }
  const weakest = monsterHp($monster`Georgepaul, the Balldodger`);
  const ranEst = prop("_utsChampionRanEst");
  let why = "";
  if (ranEst !== "" && geyserLowRoll() <= toInt(ranEst)) {
    why =
      `UTS: one Saucegeyser estimated at ${ranEst} failed to kill a Colosseum champion today, ` +
      `and the estimate here is ${geyserLowRoll()}. Raise Mysticality or spell damage past that, or fight it by hand, then rerun.`;
  } else if (geyserLowRoll() < weakest) {
    why =
      `UTS: the Colosseum champions (${weakest} HP and up) must die to one Saucegeyser, estimated at ` +
      `${geyserLowRoll()} here. Raise Mysticality or spell damage, or fight them by hand, then rerun.`;
  }
  if (why === "") {
    setProperty("_utsChampionRanEst", "");
    return;
  }
  print(why, "red");
  abort(why);
}

function gladiatorGear(): void {
  step("phase: gymnasium (gladiator gear)");
  // The colosseum outfit needs both pieces, so keep looping while either is missing.
  while (
    availableAmount($item`Mer-kin gladiator mask`) === 0 ||
    availableAmount($item`Mer-kin gladiator tailpiece`) === 0
  ) {
    gymnasium();
    if (itemAmount($item`Mer-kin thighguard`) > 0 && itemAmount($item`Mer-kin headguard`) > 0) {
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
    }
  }
  refreshStatus();
}

function colosseum(): void {
  step("phase: colosseum");
  const colosseum = $location`Mer-kin Colosseum`;
  const roundsWon = () => toInt(prop("lastColosseumRoundWon"));
  // Gladiators are insta-kill immune, so the club is the only free round in
  // the building. Past its five casts, only the bat wings can refund a round.
  while (roundsWon() < 15) {
    const coeff =
      (60 + myBuffedstat($stat`Mysticality`) / 2.5) / (numericModifier("Spell Damage Percent") + 1);
    const gear = new Gear(`${coeff} spell damage percent, mys,sea`, colosseum).need(
      $item`Mer-kin gladiator tailpiece`,
      $item`Mer-kin gladiator mask`,
    );
    if (
      get("_clubEmTimeUsed") < 5 &&
      !highShiny() &&
      !lowShiny() &&
      haveItem($item`legendary seal-clubbing club`)
    ) {
      gear.need($item`legendary seal-clubbing club`);
    }
    if (get("_batWingsFreeFights") < 5 && availableAmount($item`bat wings`) > 0) {
      gear.ifEquip($item`bat wings`);
    } else if (haveItem($item`unwrapped knock-off retro superhero cape`)) {
      gear
        .need($item`unwrapped knock-off retro superhero cape`)
        .mode({ retrocape: ["heck", "kill"] });
    }
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
    if (
      haveFamiliar($familiar`Patriotic Eagle`) &&
      get("screechCombats") > 0 &&
      haveItem($item`Congressional Medal of Insanity`)
    ) {
      useFamiliar($familiar`Patriotic Eagle`);
    } else if (haveFamiliar($familiar`Foul Ball`)) {
      useFamiliar($familiar`Foul Ball`);
    }
    mood("colosseum");
    gear
      .ifEquip($item`Congressional Medal of Insanity`)
      .bathysphere()
      .dress();
    championCheck();
    adv(colosseum);
    if (prop("lastEncounter") === "Been There, Won That") {
      setProperty("lastColosseumRoundWon", "15");
      setProperty("isMerkinGladiatorChampion", "true");
    }
  }
  if (roundsWon() < 15) abort("Skipped over colosseum — rerun script");
}

function shubFight(): void {
  step("phase: Shub-Jigguwatt");
  if (get("shubJigguwattDefeated")) return;
  if (inAftercore()) {
    retrieveItem(8, $item`crayon shavings`);
  } else if (itemAmount($item`crayon shavings`) < 8 && haveEffect($effect`Null Afternoon`) === 0) {
    if (itemAmount($item`null-day exploit`) > 0) use($item`null-day exploit`);
    else if (highShiny()) mood("shub");
    else abort("Hit Shub without adequate delevers, this means something went wrong, sorry!");
  }
  for (const effect of $effects`Scarysauce`) {
    if (haveEffect(effect) > 0 && !cliExecute(`uneffect ${effect}`)) {
      print(`Couldn't remove ${effect} before Shub-Jigguwatt.`, "red");
    }
  }
  useRole("exp");
  new Gear("damage absorption, mus,sea", $location`Mer-kin Temple (Left Door)`)
    .need($item`Mer-kin gladiator mask`, $item`Mer-kin gladiator tailpiece`)
    .bathysphere($item`toy Cupid bow`)
    .dress();
  setProperty("hpAutoRecoveryTarget", "1");
  setProperty("mpAutoRecovery", "-0.05");
  setProperty("mpAutoRecoveryTarget", "-0.05");
  while (myHp() < myMaxhp()) useSkill($skill`Cannelloni Cocoon`);
  cliExecute("recover hp; cast * empathy");
  adv($location`Mer-kin Temple (Left Door)`);
}

export function shub(): void {
  if (!(inSeaPath() || (inAftercore() && aftercoreBoss === "Shub"))) return;
  gladiatorGear();
  colosseum();
  if (inSeaPath()) {
    while (prop("questS02Monkees") === "step12") finishCaliginous();
  }
  shubFight();
}

// ─── THE FINAL BOSS ───────────────────────────────────────────────────────────

export function finalBoss(): void {
  const center = $location`Mer-kin Temple (Center Door)`;
  if (inSeaPath()) {
    step("phase: Naughty Sorceress");
    if (prop("questL13Final") !== "unstarted") return;
    const gear = new Gear("spell damage percent, mys,sea", center).need(
      $item`Mer-kin gladiator mask`,
      $item`Mer-kin gladiator tailpiece`,
    );
    if (get("_batWingsFreeFights") < 5) {
      gear.ifEquip($item`bat wings`);
    } else if (haveItem($item`unwrapped knock-off retro superhero cape`)) {
      gear
        .need($item`unwrapped knock-off retro superhero cape`)
        .mode({ retrocape: ["heck", "kill"] });
    }
    gear
      .ifEquip($item`Congressional Medal of Insanity`)
      .bathysphere($item`toy Cupid bow`)
      .dress();
    adv(center);
    adv(center);
  } else if (inAftercore() && aftercoreBoss === "Dad") {
    useFamiliar($familiar`Tiny Plastic Santa Claus Skeleton`);
    cliExecute("acquire 3 warbear whosit; acquire 3 volcanic ash; recover mp; tempura air");
    new Gear("spell damage percent,sea", center)
      .need(
        $item`goggles of loathing`,
        $item`stick-knife of loathing`,
        $item`scepter of loathing`,
        $item`jeans of loathing`,
        $item`treads of loathing`,
        $item`belt of loathing`,
        $item`little bitty bathysphere`,
      )
      .dress();
    setProperty("mpAutoRecoveryTarget", "1");
    adv(center);
  }
}
