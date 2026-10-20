import {
  adv1,
  autosell,
  buy,
  chew,
  cliExecute,
  drink,
  eat,
  getCampground,
  getFuel,
  haveEffect,
  haveSkill,
  inebrietyLimit,
  Item,
  itemAmount,
  Location,
  mallPrice,
  myAdventures,
  myInebriety,
  myLocation,
  myMaxhp,
  myMaxmp,
  myMeat,
  myMp,
  mpCost,
  mySpleenUse,
  npcPrice,
  print,
  pullsRemaining,
  restoreMp,
  retrieveItem,
  reverseNumberology,
  spleenLimit,
  totalTurnsPlayed,
  use,
  useSkill,
  equip,
  availableAmount,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  get,
  have,
  AsdonMartin,
  AutumnAton,
  BatWings,
  LegendarySealClubbingClub,
  set,
  TrainSet,
  uneffect,
} from "libram";

import { doSWord, swordOfSWords } from "./familiar";
import { Gear } from "./gear";
import {
  eatSushi,
  isBanished,
  sodaBreadAffordable,
  sodaBreadFor,
  trainset,
  useAutumnaton,
} from "./iotm";
import { diverHuntActive, seaCowNeeded, tailpiece } from "./progress";
import { pulledToday, pullSequence } from "./pulls";
import { dreadSeedCheck } from "./seedfinder";
import {
  haveItem,
  highShiny,
  inAftercore,
  inSeaPath,
  lowShiny,
  pearlLoc,
  pearlRes,
  debug,
} from "./state";

// Housekeeping after every adventure. Ported from post_adv(), setMPRecovery()
// and the dolphin whistle helpers in UnderTheSea.ash and its globals.

// ─── MP RECOVERY ──────────────────────────────────────────────────────────────

/** MP for one fight's kill: three casts of cleanUp()'s spell, at most half of max MP. */
function fightMP(): number {
  const kill = haveSkill($skill`Saucegeyser`) ? $skill`Saucegeyser` : $skill`Saucestorm`;
  return Math.min(Math.floor(myMaxmp() / 2), 3 * mpCost(kill));
}

/**
 * MP up to goal that meat buys in Doc Galaktik's tonics at their low roll of
 * 9, after selling drops the run never uses. Stops the run when not even one
 * fight's kill is affordable.
 */
function affordableMP(goal: number): number {
  const price = npcPrice($item`Doc Galaktik's Invigorating Tonic`);
  if (price <= 0) return goal;
  if (myMeat() < price * Math.floor((goal + 8) / 9)) {
    for (const item of $items`Eye Agate, Azurite, Lapis Lazuli, dense meat stack`) {
      if (itemAmount(item) > 0 && !autosell(itemAmount(item), item)) {
        print(`Couldn't autosell the ${item}.`, "red");
      }
    }
  }
  const fight = Math.min(goal, fightMP());
  const afford = Math.floor(myMeat() / price) * 9;
  if (afford < fight && myMp() < fight && (!restoreMp(fight) || myMp() < fight)) {
    const why = `SEB: ${myMp()} MP and ${myMeat()} meat can't cover the ${fight} MP of the next fight. Get MP or meat, then rerun.`;
    print(why, "red");
    throw new Error(why);
  }
  return Math.min(goal, Math.max(fight, Math.floor(myMeat() / price) * 9));
}

const round4 = (n: number) => Math.round(n * 10000) / 10000;

/** The MP recovery target setMPRecovery() last wrote. */
let mpTargetSet = -1;

/** MP recovery up to 250 or what meat buys, starting before a fight's kill runs short. */
export function setMPRecovery(): void {
  const target = Math.min(1, affordableMP(250) / myMaxmp());
  const low = Math.min(target, Math.max(target * 0.5, fightMP() / myMaxmp()));
  set("mpAutoRecovery", round4(low));
  set("mpAutoRecoveryTarget", round4(target));
  mpTargetSet = round4(target);
}

/** Re-cap MP recovery at the meat on hand, unless a phase has set its own target since. */
export function refreshMPRecovery(): void {
  if (get("mpAutoRecoveryTarget") === mpTargetSet) setMPRecovery();
}

// ─── DOLPHINS ─────────────────────────────────────────────────────────────────

/** Quest items worth a turn to claim off a dolphin. */
const WHISTLE_WORTHY = new Set(
  $items`Mer-kin prayerbeads, Mer-kin healscroll, Mer-kin lockkey, Mer-kin hallpass, Mer-kin cheatsheet, Mer-kin bunwig, rusty rivet, rusty porthole, rusty broken diving helmet, sea leather, sea cowbell, sea lasso`,
);

function stillWanted(item: Item): boolean {
  switch (item) {
    case $item`rusty broken diving helmet`:
    case $item`rusty porthole`:
    case $item`rusty rivet`:
      return diverHuntActive();
    case $item`sea leather`:
      return seaCowNeeded();
    case $item`Mer-kin cheatsheet`:
      // One is spent per wordquiz, and each quiz is ten of the ninety wanted.
      return availableAmount(item) * 10 < 90 - get("merkinVocabularyMastery");
    case $item`Mer-kin prayerbeads`:
      return !have(item, 3);
    case $item`Mer-kin bunwig`:
      return !have(item);
  }
  return true;
}

function durableWhistleReady(): boolean {
  return (
    availableAmount($item`durable dolphin whistle`) > 0 &&
    get("_durableDolphinWhistleUsed") < get("seaPoints")
  );
}

/** Sand dollars Big Brother is still owed, so only the surplus buys whistles. */
function sandDollarsOwed(): number {
  let owed = 0;
  if (!have($item`black glass`)) owed += 13;
  if (!get("dampOldBootPurchased")) owed += 50;
  if (tailpiece() === $item.none && !have($item`waterlogged bootstraps`)) owed += 10;
  return owed;
}

let dolphinSaid = "";

function dolphinWhistle(): void {
  // The buffer holds one item and the next theft overwrites it.
  const stolen = get("dolphinItem") ?? $item.none;
  if (
    !WHISTLE_WORTHY.has(stolen) ||
    !stillWanted(stolen) ||
    highShiny() ||
    myAdventures() === 0 ||
    myInebriety() > inebrietyLimit()
  ) {
    return;
  }
  let refused = false;
  if (
    availableAmount($item`dolphin whistle`) === 0 &&
    !durableWhistleReady() &&
    availableAmount($item`sand dollar`) > sandDollarsOwed()
  ) {
    refused = !buy($coinmaster`Big Brother`, 1, $item`dolphin whistle`);
  }
  const whistle = durableWhistleReady()
    ? $item`durable dolphin whistle`
    : availableAmount($item`dolphin whistle`) > 0
      ? $item`dolphin whistle`
      : $item.none;
  if (whistle !== $item.none) use(whistle);
  // use() reports success mid-fight too, so the emptied buffer is what says it blew.
  const blew = get("dolphinItem") === null;
  const why = blew
    ? `blew the ${whistle}`
    : whistle !== $item.none
      ? `the ${whistle} would not blow`
      : refused
        ? "Big Brother would not sell a whistle"
        : `no whistle, and ${availableAmount($item`sand dollar`)} sand dollars against ${sandDollarsOwed()} owed`;
  const said = `${stolen}: ${why}`;
  if (said !== dolphinSaid) {
    debug(`a dolphin took ${stolen}; ${why}.`);
    dolphinSaid = said;
  }
  // A later theft of the same item is a new event.
  if (blew) dolphinSaid = "";
}

// ─── FISHY ────────────────────────────────────────────────────────────────────

const PASTAS = $items`Frutti di Scatoletta, Pesto alla Marziano, Arrattabbattabiata, Orzo di Riso, Pasta Grimavera, Linguini Ubriacapa, Gnocci Domani, Formica e Pepe, Tubetto Gelatto`;

function valueOfSpleen(): number {
  if (!haveSkill($skill`Sweet Synthesis`)) {
    return 30 * 250 * 3 - mallPrice($item`Crimbo candied pecan`) * 2;
  }
  return get("valueOfAdventure") * 2.5 - mallPrice($item`transdermal smoke patch`);
}

function seaPathFishy(): void {
  if (
    haveItem($item`fishy pipe`) &&
    availableAmount($item`closed-circuit pay phone`) > 0 &&
    haveItem($item`Monodent of the Sea`) &&
    haveItem($item`Platinum Yendorian Express Card`) &&
    !get("_fishyPipeUsed") &&
    !lowShiny() &&
    !highShiny()
  ) {
    if (itemAmount($item`fishy pipe`) === 0) cliExecute("pull fishy pipe");
    use($item`fishy pipe`);
  } else if (highShiny() || (lowShiny() && !pulledToday($item`Aldebaran sardines`))) {
    const pasta = PASTAS.reduce((a, b) => (mallPrice(b) < mallPrice(a) ? b : a));
    if (pullSequence(pasta)) eat(pasta);
    if (pullSequence($item`Aldebaran sardines`)) eat($item`Aldebaran sardines`);
  } else if (
    pullsRemaining() !== 0 &&
    !pulledToday($item`fish sauce`) &&
    !pulledToday($item`cuppa Gill tea`)
  ) {
    if (mallPrice($item`fish sauce`) + valueOfSpleen() <= mallPrice($item`cuppa Gill tea`)) {
      pullSequence($item`fish sauce`);
      chew($item`fish sauce`);
    } else {
      pullSequence($item`cuppa Gill tea`);
      use($item`cuppa Gill tea`);
    }
  } else if (getCampground()[$item`potted tea tree`.name] && !get("_pottedTeaTreeUsed")) {
    cliExecute("teatree cuppa Gill tea");
    use($item`cuppa Gill tea`);
  } else {
    retrieveItem($item`white rice`);
    eatSushi();
  }
}

function seaPathUpkeep(): void {
  if (myAdventures() === 0) {
    if (availableAmount($item`astral six-pack`) > 0) use($item`astral six-pack`);
    if (availableAmount($item`astral pilsner`) === 0) throw new Error("no more easy diet");
    uneffect($effect`Donho's Bubbly Ballad`);
    if (haveSkill($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
    drink($item`astral pilsner`);
  }
  if (haveEffect($effect`Driving Waterproofly`) === 0 && AsdonMartin.installed()) {
    // libram fuels from inventory first, then buys (soda bread in ronin).
    // A drive takes 37 fuel; the bread for it only gets bought when meat
    // allows. Without fuel the run goes on undriven rather than stopping.
    if (
      !sodaBreadAffordable(sodaBreadFor(37)) ||
      !AsdonMartin.drive($effect`Driving Waterproofly`, 1, true)
    ) {
      print(
        `SEB: couldn't fuel the Asdon (${getFuel()} fuel, ${myMeat()} meat), skipping Driving Waterproofly.`,
        "red",
      );
    }
  }
  if (haveEffect($effect`Fishy`) === 0) {
    seaPathFishy();
    if (haveEffect($effect`Fishy`) === 0) throw new Error("acquire fishy failed");
  }
}

function aftercoreUpkeep(): void {
  if (availableAmount($item`sea lasso`) === 0) retrieveItem($item`sea lasso`);
  if (myAdventures() === 0) throw new Error("Out of adventures, run consume");
  if (haveEffect($effect`Fishy`) > 0) return;
  if (haveItem($item`fishy pipe`) && !get("_fishyPipeUsed")) {
    use($item`fishy pipe`);
  } else if (mySpleenUse() < spleenLimit()) {
    retrieveItem($item`fish sauce`);
    chew($item`fish sauce`);
  } else {
    throw new Error("get fishy");
  }
}

// ─── COPIED MONSTERS ──────────────────────────────────────────────────────────

/** Item familiar, or the Sword when it is still collecting lassos. */
function copyFightFamiliar(gear: Gear): Gear {
  return doSWord() ? gear.fam(swordOfSWords) : gear.forRole("itdrop");
}

function copiedMonsterFollowUps(): void {
  const pearlZone = pearlLoc();
  // VHS tape monster, eight turns after it was recorded.
  if (
    get("spookyVHSTapeMonster") !== null &&
    totalTurnsPlayed() >= get("spookyVHSTapeMonsterTurn") + 8
  ) {
    copyFightFamiliar(new Gear(`${pearlRes()},sea`, pearlZone))
      .ifEquip($item`legendary seal-clubbing club`)
      .need($item`shark jumper`, $item`scale-mail underwear`)
      .bathysphere()
      .outfit()
      .dress();
    adv1(pearlZone, -1, "");
  }

  // VHS tape recording window, in the Caliginous Abyss.
  const momProgress = get("momSeaMonkeeProgress");
  if (
    availableAmount($item`Spooky VHS Tape`) > 0 &&
    get("spookyVHSTapeMonster") === null &&
    momProgress > 22 &&
    momProgress < 33
  ) {
    const abyss = $location`The Caliginous Abyss`;
    const gear = new Gear("item drop,sea", abyss)
      .forRole("itdrop")
      .need($item`shark jumper`, $item`scale-mail underwear`, $item`black glass`)
      .ifEquip($item`Peridot of Peril`)
      .freeKill()
      .bathysphere($item`toy Cupid bow`);
    if (!isBanished($monster`school of many`)) {
      gear.need($item`Monodent of the Sea`);
    }
    gear.outfit().dress();
    adv1(abyss, -1, "");
  }

  // Club 'Em Into Next Week monster.
  if (
    LegendarySealClubbingClub.clubIntoNextWeekMonster() !== null &&
    LegendarySealClubbingClub.turnsUntilNextWeekFight() <= 0 &&
    myLocation() !== $location`Mer-kin Elementary School` &&
    myLocation() !== $location`Mer-kin Library`
  ) {
    new Gear(`${pearlRes()},sea`, pearlZone)
      .forRole("itdrop")
      .need($item`legendary seal-clubbing club`)
      .bathysphere()
      .outfit()
      .dress();
    adv1(pearlZone, -1, "");
  }
}

// ─── POST ADVENTURE ───────────────────────────────────────────────────────────

export function postAdventure(): void {
  if (get("_lastCombatLost")) {
    if (have($effect`Beaten Up`)) {
      if (haveSkill($skill`Tongue of the Walrus`)) useSkill($skill`Tongue of the Walrus`);
      else cliExecute("campground rest");
    }
    set("_lastCombatLost", false);
    throw new Error("It appears you lost the last combat, look into that");
  }
  if (have($effect`Really Quite Poisoned`)) uneffect($effect`Really Quite Poisoned`);
  if (have($effect`Marked by the Don`) && haveSkill($skill`Disco Nap`)) {
    useSkill($skill`Disco Nap`);
  }
  if (get("NCtoC", false)) set("NCtoC", false);

  if (!get("isMerkinHighPriest") && get("seahorseName") !== "") {
    dreadSeedCheck();
  }
  if (AutumnAton.available()) useAutumnaton();
  if (
    get("_universeCalculated") < Math.min(2, get("skillLevel144")) &&
    Object.values(reverseNumberology()).includes(69)
  ) {
    cliExecute("numberology 69");
  }
  if (TrainSet.canConfigure()) trainset();
  if (haveEffect($effect`Resined`) === 0 && availableAmount($item`inflammable leaf`) > 50) {
    use($item`distilled resin`);
  }
  if (availableAmount($item`whirled peas`) >= 2) retrieveItem($item`handful of split pea soup`);
  if (
    haveSkill($skill`Summon Taffy`) &&
    mpCost($skill`Summon Taffy`) < myMp() &&
    get("_taffyYellowSummons") === 0
  ) {
    useSkill($skill`Summon Taffy`);
  }

  if (inSeaPath()) seaPathUpkeep();
  else if (inAftercore()) aftercoreUpkeep();

  if (BatWings.restUpsideDownRemaining() > 0 && (myMp() < myMaxmp() - 1000 || myMp() < 150)) {
    equip($item`bat wings`);
    useSkill($skill`Rest upside down`);
  }

  dolphinWhistle();

  if (myMeat() < 300) {
    for (const item of $items`dull fish scale, rough fish scale`) {
      autosell(itemAmount(item), item);
    }
  }

  copiedMonsterFollowUps();

  let hpTarget = Math.min(1, 570 / myMaxhp());
  if (myLocation() === $location`Mer-kin Colosseum`) hpTarget = 1;
  else if (myLocation() === $location`Mer-kin Gymnasium`) hpTarget = Math.min(1, 800 / myMaxhp());
  set("hpAutoRecovery", round4(hpTarget * 0.75));
  set("hpAutoRecoveryTarget", round4(hpTarget));
  setMPRecovery();
}

/** One turn in a zone with the original's adv(): MP re-cap, adv1, then post_adv(). */
export function adv(location: Location): void {
  refreshMPRecovery();
  adv1(location, -1, "");
  postAdventure();
}
