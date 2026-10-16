import {
  abort,
  adv1,
  autosell,
  buy,
  chew,
  cliExecute,
  drink,
  eat,
  getFuel,
  getProperty,
  getWorkshed,
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
  restoreMp,
  retrieveItem,
  reverseNumberology,
  setProperty,
  spleenLimit,
  toInt,
  toItem,
  totalTurnsPlayed,
  use,
  useSkill,
  equip,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  get,
  have,
} from "libram";
import { eatSushi, trainset, useAutumnaton } from "./iotm";
import { dreadSeedCheck } from "./seedfinder";
import { doSWord } from "./familiar";
import { Gear } from "./gear";
import { diverHuntActive, seaCowNeeded, tailpiece } from "./progress";
import { pulledToday, pullSequence } from "./pulls";
import {
  haveItem,
  highShiny,
  inAftercore,
  inSeaPath,
  lowShiny,
  pearlLoc,
  pearlRes,
  step,
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
    const why = `UTS: ${myMp()} MP and ${myMeat()} meat can't cover the ${fight} MP of the next fight. Get MP or meat, then rerun.`;
    print(why, "red");
    abort(why);
  }
  return Math.min(goal, Math.max(fight, Math.floor(myMeat() / price) * 9));
}

const round4 = (n: number) => `${Math.round(n * 10000) / 10000}`;

/** The MP recovery target setMPRecovery() last wrote. */
let mpTargetSet = "";

/** MP recovery up to 250 or what meat buys, starting before a fight's kill runs short. */
export function setMPRecovery(): void {
  const target = Math.min(1, affordableMP(250) / myMaxmp());
  const low = Math.min(target, Math.max(target * 0.5, fightMP() / myMaxmp()));
  setProperty("mpAutoRecovery", round4(low));
  setProperty("mpAutoRecoveryTarget", round4(target));
  mpTargetSet = round4(target);
}

/** Re-cap MP recovery at the meat on hand, unless a phase has set its own target since. */
export function refreshMPRecovery(): void {
  if (getProperty("mpAutoRecoveryTarget") === mpTargetSet) setMPRecovery();
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
      return itemAmount(item) * 10 < 90 - toInt(getProperty("merkinVocabularyMastery"));
    case $item`Mer-kin prayerbeads`:
      return !have(item, 3);
    case $item`Mer-kin bunwig`:
      return !have(item);
  }
  return true;
}

function durableWhistleReady(): boolean {
  return (
    itemAmount($item`durable dolphin whistle`) > 0 &&
    toInt(getProperty("_durableDolphinWhistleUsed")) < toInt(getProperty("seaPoints"))
  );
}

/** Sand dollars Big Brother is still owed, so only the surplus buys whistles. */
function sandDollarsOwed(): number {
  let owed = 0;
  if (!have($item`black glass`)) owed += 13;
  if (getProperty("dampOldBootPurchased") !== "true") owed += 50;
  if (tailpiece() === $item.none && !have($item`waterlogged bootstraps`)) owed += 10;
  return owed;
}

let dolphinSaid = "";

function dolphinWhistle(): void {
  // The buffer holds one item and the next theft overwrites it.
  const stolen = toItem(getProperty("dolphinItem"));
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
    itemAmount($item`dolphin whistle`) === 0 &&
    !durableWhistleReady() &&
    itemAmount($item`sand dollar`) > sandDollarsOwed()
  ) {
    refused = !buy($coinmaster`Big Brother`, 1, $item`dolphin whistle`);
  }
  const whistle = durableWhistleReady()
    ? $item`durable dolphin whistle`
    : itemAmount($item`dolphin whistle`) > 0
      ? $item`dolphin whistle`
      : $item.none;
  if (whistle !== $item.none) use(whistle);
  // use() reports success mid-fight too, so the emptied buffer is what says it blew.
  const blew = getProperty("dolphinItem") === "";
  const why = blew
    ? `blew the ${whistle}`
    : whistle !== $item.none
      ? `the ${whistle} would not blow`
      : refused
        ? "Big Brother would not sell a whistle"
        : `no whistle, and ${itemAmount($item`sand dollar`)} sand dollars against ${sandDollarsOwed()} owed`;
  const said = `${stolen}: ${why}`;
  if (said !== dolphinSaid) {
    step(`a dolphin took ${stolen}; ${why}.`);
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
    itemAmount($item`closed-circuit pay phone`) > 0 &&
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
  } else if (!pulledToday($item`fish sauce`) && !pulledToday($item`cuppa Gill tea`)) {
    if (mallPrice($item`fish sauce`) + valueOfSpleen() <= mallPrice($item`cuppa Gill tea`)) {
      pullSequence($item`fish sauce`);
      chew($item`fish sauce`);
    } else {
      pullSequence($item`cuppa Gill tea`);
      use($item`cuppa Gill tea`);
    }
  } else {
    retrieveItem($item`white rice`);
    eatSushi();
  }
}

function seaPathUpkeep(): void {
  if (myAdventures() === 0) {
    if (itemAmount($item`astral six-pack`) > 0) use($item`astral six-pack`);
    if (itemAmount($item`astral pilsner`) === 0) abort("no more easy diet");
    cliExecute("shrug Donho's Bubbly Ballad");
    if (haveSkill($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
    drink($item`astral pilsner`);
  }
  if (
    haveEffect($effect`Driving Waterproofly`) === 0 &&
    getWorkshed() === $item`Asdon Martin keyfob (on ring)`
  ) {
    if (getFuel() === 0 && !pulledToday($item`pie man was not meant to eat`)) {
      pullSequence($item`pie man was not meant to eat`);
      cliExecute("asdonmartin fuel 1 pie man was not meant to eat");
    }
    if (getFuel() < 37) {
      abort(
        "Asdon Martin owners, fuel car manually until I can get some guidance on which foods are best",
      );
    }
    cliExecute("asdonmartin drive Waterproofly");
  }
  if (haveEffect($effect`Fishy`) === 0) {
    seaPathFishy();
    if (haveEffect($effect`Fishy`) === 0) abort("acquire fishy failed");
  }
}

function aftercoreUpkeep(): void {
  if (itemAmount($item`sea lasso`) === 0) retrieveItem($item`sea lasso`);
  if (myAdventures() === 0) abort("Out of adventures, run consume");
  if (haveEffect($effect`Fishy`) > 0) return;
  if (haveItem($item`fishy pipe`) && !get("_fishyPipeUsed")) {
    use($item`fishy pipe`);
  } else if (mySpleenUse() < spleenLimit()) {
    retrieveItem($item`fish sauce`);
    chew($item`fish sauce`);
  } else {
    abort("get fishy");
  }
}

// ─── COPIED MONSTERS ──────────────────────────────────────────────────────────

/** Item familiar, or the Sword when it is still collecting lassos. */
function copyFightFamiliar(gear: Gear): Gear {
  return doSWord() ? gear.fam($familiar`Sword of S Words`) : gear.forRole("itdrop");
}

function copiedMonsterFollowUps(): void {
  const pearlZone = pearlLoc();
  // VHS tape monster, eight turns after it was recorded.
  if (
    getProperty("spookyVHSTapeMonster") !== "" &&
    totalTurnsPlayed() >= toInt(getProperty("spookyVHSTapeMonsterTurn")) + 8
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
  const momProgress = toInt(getProperty("momSeaMonkeeProgress"));
  if (
    itemAmount($item`spooky VHS tape`) > 0 &&
    getProperty("spookyVHSTapeMonster") === "" &&
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
    if (!getProperty("banishedMonsters").includes("school of many")) {
      gear.need($item`Monodent of the Sea`);
    }
    gear.outfit().dress();
    adv1(abyss, -1, "");
  }

  // Club 'Em Into Next Week monster.
  if (
    getProperty("clubEmNextWeekMonster") !== "" &&
    totalTurnsPlayed() >= toInt(getProperty("clubEmNextWeekMonsterTurn")) + 8 &&
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
    setProperty("_lastCombatLost", "false");
    abort("It appears you lost the last combat, look into that");
  }
  if (have($effect`Really Quite Poisoned`)) cliExecute("uneffect really quite poisoned");
  if (have($effect`Marked by the Don`) && haveSkill($skill`Disco Nap`)) {
    useSkill($skill`Disco Nap`);
  }
  if (getProperty("NCtoC") === "true") setProperty("NCtoC", "false");

  if (!get("isMerkinHighPriest") && getProperty("seahorseName") !== "") {
    dreadSeedCheck();
  }
  if (getProperty("autumnatonQuestLocation") === "" && itemAmount($item`autumn-aton`) > 0) {
    useAutumnaton();
  }
  if (
    get("_universeCalculated") < Math.min(2, get("skillLevel144")) &&
    Object.values(reverseNumberology()).includes(69)
  ) {
    cliExecute("numberology 69");
  }
  if (get("trainsetPosition") >= get("lastTrainsetConfiguration") + 42) {
    // Visit the workshed first so mafia re-reads the train.
    visitUrl("campground.php?action=workshed");
    trainset();
  }
  if (haveEffect($effect`Resined`) === 0 && itemAmount($item`inflammable leaf`) > 50) {
    use($item`distilled resin`);
  }
  if (itemAmount($item`whirled peas`) >= 2) retrieveItem($item`handful of split pea soup`);
  if (
    haveSkill($skill`Summon Taffy`) &&
    mpCost($skill`Summon Taffy`) < myMp() &&
    get("_taffyYellowSummons") === 0
  ) {
    useSkill($skill`Summon Taffy`);
  }

  if (inSeaPath()) seaPathUpkeep();
  else if (inAftercore()) aftercoreUpkeep();

  if (haveItem($item`bat wings`) && (myMp() < myMaxmp() - 1000 || myMp() < 150)) {
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
  setProperty("hpAutoRecovery", round4(hpTarget * 0.75));
  setProperty("hpAutoRecoveryTarget", round4(hpTarget));
  setMPRecovery();
}

/** One turn in a zone with the original's adv(): MP re-cap, adv1, then post_adv(). */
export function adv(location: Location): void {
  refreshMPRecovery();
  adv1(location, -1, "");
  postAdventure();
}
