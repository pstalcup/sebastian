import {
  abort,
  availableAmount,
  buy,
  cliExecute,
  create,
  equip,
  getProperty,
  handlingChoice,
  haveEffect,
  haveSkill,
  itemAmount,
  lastChoice,
  maximize,
  myAdventures,
  myBuffedstat,
  myFamiliar,
  myMaxhp,
  myTurncount,
  numericModifier,
  print,
  pullsRemaining,
  restoreHp,
  retrieveItem,
  runChoice,
  runCombat,
  storageAmount,
  takeStorage,
  toInt,
  toSlot,
  totalTurnsPlayed,
  use,
  useSkill,
  userPrompt,
  visitUrl,
  elementalResistance,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $element,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  $slot,
  $stat,
  ChestMimic,
  get,
} from "libram";
import { useFam, useRole } from "../lib/familiar";
import { dropsItems, Gear } from "../lib/gear";
import { banishGear, baseballD, codpiece, timeSpinnerFight, yellowRayPrep } from "../lib/iotm";
import { mood } from "../lib/mood";
import { getSandDollar } from "../lib/oldGuy";
import { adv } from "../lib/postAdventure";
import { diverForceReady, diverPartsComplete, divingHelmet, tailpiece } from "../lib/progress";
import { getLucky, pulledToday, pullSequence, reservedPulls } from "../lib/pulls";
import {
  baseballPlayers,
  equipSwimTrunks,
  lassoShadow,
  mapMonster,
  momNCyber,
  ncForce,
  ncForceEstimate,
  summon,
} from "../lib/resources";
import {
  countSummons,
  gotPeriled,
  haveItem,
  highShiny,
  inAftercore,
  inSeaPath,
  lowShiny,
  pearlLoc,
  pearlRes,
  step,
} from "../lib/state";
import {
  curveballBurn,
  finishCaliginous,
  getMissingCorralItems,
  mineAnemone,
  monkeypaw,
  recallCaliginous,
  shadowRift,
} from "./shared";

// The seahorse branch: the diving helmet, Mom's rescue in the abyss, the
// corral, teflon ore, lasso training and the taming itself. Ported from
// unholyDiver() through postSeahorse() in UnderTheSea.ash.

const wreck = $location`The Wreck of the Edgar Fitzsimmons`;
const abyss = $location`The Caliginous Abyss`;
const corral = $location`The Coral Corral`;
const rift = $location`Shadow Rift (The Misspelled Cemetary)`;

const prop = (name: string) => getProperty(name);
const helmetOn = () => toSlot(divingHelmet()) === $slot`hat`;

function diverBaseball(): void {
  if (baseballPlayers() >= 9 && prop("baseballTeam").includes("745")) baseballD();
}

function diverChainReport(): string {
  return (
    `${availableAmount($item`rusty broken diving helmet`)} broken helmet, ` +
    `${itemAmount($item`rusty porthole`)} porthole, ` +
    `${itemAmount($item`rusty rivet`)}/8 rivets`
  );
}

// ─── UNHOLY DIVER ─────────────────────────────────────────────────────────────

/** Summoned divers: mimic eggs, the Time-Spinner, then summon(). */
function summonDivers(): void {
  if (haveEffect($effect`Shadow Waters`) === 0) shadowRift();
  for (let tries = 0; !diverPartsComplete() && tries < 4; tries++) {
    if (diverForceReady() || itemAmount($item`rusty rivet`) < 4) {
      if (!useFam($familiar`Chest Mimic`)) useRole("itdrop");
    } else if (!useFam($familiar`Jill-of-All-Trades`)) {
      useRole("itdrop");
    }
    new Gear("item drop", wreck)
      .diverSaber()
      .ifEquip($item`blood cubic zirconia`, $item`baseball diamond`, $item`toy Cupid bow`)
      .dress();
    if (!diverForceReady()) {
      mood("superitdrop");
      yellowRayPrep();
    }
    const diver = $monster`unholy diver`;
    if (ChestMimic.differentiableQuantity(diver) > 0) {
      ChestMimic.differentiate(diver);
      if (handlingChoice() && lastChoice() === 1387) runChoice(3);
    } else if (timeSpinnerFight(diver)) {
      // Refought.
    } else if (countSummons() >= 1) {
      if (!summon(diver)) break;
      runCombat();
    } else {
      break;
    }
    diverBaseball();
  }
  diverBaseball();
  while (
    itemAmount($item`rusty rivet`) > 5 &&
    itemAmount($item`rusty rivet`) < 8 &&
    get("_monkeyPawWishesUsed") < 5 &&
    haveItem($item`cursed monkey's paw`)
  ) {
    cliExecute("monkeypaw wish rusty rivet");
  }
}

/** One turn in the wreck: -combat for the hatch, else the diver at max item. */
function wreckTurn(): void {
  if (totalTurnsPlayed() >= toInt(prop("_lastFitzsimmonsHatch")) + 20) {
    useRole("-combat");
    new Gear("-combat,sea", wreck).bathysphere($item`toy Cupid bow`).dress();
    mood("-combat");
    if (ncForceEstimate() > 4) ncForce();
    adv(wreck);
    return;
  }
  useRole("itdrop");
  const gear = new Gear("item drop,sea", wreck);
  if (!gotPeriled(wreck)) gear.ifEquip($item`Peridot of Peril`);
  if (!highShiny()) {
    const habitat = prop("_monsterHabitatsMonster");
    if (
      (habitat === "eye in the darkness" || habitat === "slithering thing") &&
      toInt(prop("_monsterHabitatsFightsLeft")) > 0
    ) {
      gear.need($item`shark jumper`, $item`scale-mail underwear`);
    }
    if (banishGear(wreck) === $item`spring shoes` && availableAmount($item`spring shoes`) > 0) {
      gear.need($item`spring shoes`);
    } else if (get("heartstoneBanishUnlocked")) {
      gear.ifEquip($item`heartstone`);
    }
    gear
      .saber()
      .cloake()
      .champagne()
      .glove()
      .need($item`Monodent of the Sea`)
      .bathysphere($item`toy Cupid bow`)
      .dress();
    mood("itdrop");
    mapMonster(wreck);
  } else {
    if (!get("_epicMcTwistUsed")) {
      pullSequence($item`pro skateboard`);
      gear.ifEquip($item`pro skateboard`);
    }
    if (haveItem($item`Fourth of May Cosplay Saber`)) gear.saber();
    else mood("superitdrop");
    gear.bathysphere($item`toy Cupid bow`).dress();
  }
  adv(wreck);
}

/**
 * The aerated diving helmet. "summon" spends summons on the diver before
 * falling through to "direct", the plain grind in the wreck.
 */
export function unholyDiver(how: "summon" | "direct"): void {
  step("phase: rusty rivets");
  while (!diverPartsComplete() && !helmetOn()) {
    diverBaseball();
    if (how === "summon") {
      if (countSummons() > 0) summonDivers();
      if (diverPartsComplete() || helmetOn()) break;
    }
    // Every free diver source runs above this, so no adventures here means
    // nothing is left to spend on the hunt.
    if (myAdventures() < 1) {
      abort(
        `Out of adventures with the diving helmet chain short: ${diverChainReport()}, ` +
          `${availableAmount($item`bubblin' stone`)} bubblin' stone.`,
      );
    }
    wreckTurn();
  }
  if (!helmetOn() && !retrieveItem($item`aerated diving helmet`)) {
    abort(
      `Could not build an aerated diving helmet: ${diverChainReport()}, ` +
        `${availableAmount($item`rusty diving helmet`)} rusty diving helmet, ` +
        `${availableAmount($item`bubblin' stone`)} bubblin' stone, ${myAdventures()} adventures left.`,
    );
  }
}

// ─── MOM IN THE ABYSS ─────────────────────────────────────────────────────────

/** Mom's rescue: "cheap" in the abyss itself, or "cyberrealm" with the eagle and habitats. */
export function caliginous(how: "cheap" | "cyberrealm"): void {
  step("phase: Mom rescue (habitats / cyberzone)");
  const momProgress = () => toInt(prop("momSeaMonkeeProgress"));
  let initialMomProgress = 24;
  if (!haveItem($item`backup camera`)) initialMomProgress += 4;
  if (!haveItem($item`2002 Mr. Store Catalog`)) initialMomProgress += 12;

  if (how === "cheap") {
    if (availableAmount($item`black glass`) === 0) {
      buy($coinmaster`Big Brother`, 1, $item`black glass`);
    }
    useRole("itdrop");
    if (myFamiliar() === $familiar`Red-Nosed Snapper`) cliExecute("snapper horror");
    if (highShiny() && momProgress() < 36) {
      const sword = $familiar`Sword of S Words`;
      if (prop("swordOfSWordsMonster") !== "775") {
        new Gear("item drop,sea", corral)
          .fam(sword)
          .ifEquip($item`Peridot of Peril`)
          .bathysphere($item`toy Cupid bow`)
          .dress();
        mood("itdrop");
        adv(corral);
      }
      while (momProgress() < 40) {
        if (availableAmount($item`sea cowbell`) < 3) useFam(sword);
        else useRole("itdrop");
        if (haveEffect($effect`Jelly Combed`) === 0 && pullSequence($item`comb jelly`)) {
          use($item`comb jelly`);
        }
        if (
          availableAmount($item`sea leather`) > 0 &&
          availableAmount($item`sea cowboy hat`) === 0
        ) {
          create($item`sea cowboy hat`);
        }
        const gear = new Gear("item drop,sea,-equip peridot", abyss).need(
          $item`shark jumper`,
          $item`scale-mail underwear`,
          $item`black glass`,
        );
        if (!prop("banishedMonsters").includes("school of many")) {
          gear.need($item`Monodent of the Sea`);
        }
        if (get("lassoTrainingCount") < 20 && availableAmount($item`sea cowboy hat`) > 0) {
          gear.need($item`sea cowboy hat`);
        }
        if (haveEffect($effect`Driving Waterproofly`) === 0) {
          pullSequence($item`Elf Guard SCUBA tank`);
          gear.need($item`Elf Guard SCUBA tank`);
        }
        gear.bathysphere($item`toy Cupid bow`).dress();
        mood("itdrop");
        adv(abyss);
      }
    }
  }

  if (momProgress() < 24 && how === "cyberrealm") {
    if (!prop("banishedPhyla").includes("construct")) {
      if (!get("madnessBakeryAvailable")) {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
      }
      const bakery = $location`Madness Bakery`;
      while (!prop("banishedPhyla").includes("construct") && bakery.turnsSpent < 3) {
        new Gear("item drop", bakery)
          .fam($familiar`Patriotic Eagle`)
          .need($item`Monodent of the Sea`)
          .dress();
        adv(bakery);
      }
    }
    while (
      prop("_monsterHabitatsMonster") !== "eye in the darkness" &&
      prop("_monsterHabitatsMonster") !== "slithering thing" &&
      toInt(prop("_monsterHabitatsRecalled")) < 3 &&
      haveSkill($skill`Just the Facts`)
    ) {
      recallCaliginous();
    }
    const cyberzone = $location`Cyberzone 1`;
    while (
      toInt(prop("_monsterHabitatsFightsLeft")) > 0 &&
      get("_cyberFreeFights") < 10 &&
      momProgress() < 40
    ) {
      new Gear("moxie", cyberzone)
        .fam($familiar`Glover`)
        .need($item`shark jumper`, $item`scale-mail underwear`, $item`Monodent of the Sea`)
        .dress();
      if (myBuffedstat($stat`Moxie`) < 500) abort("Need 500 moxie here to be safe");
      adv(cyberzone);
    }
    while (momProgress() < initialMomProgress) finishCaliginous();
  }
}

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

/** "drop" McTwists the corral first; both modes then make the sea leather gear. */
export function corralPhase(how: "collect" | "drop"): void {
  if (!get("corralUnlocked")) abort("corral not unlocked");
  while (how === "drop" && !get("_epicMcTwistUsed")) {
    step("phase: McTwist corral");
    if (haveEffect($effect`Shadow Waters`) === 0 && !lowShiny()) shadowRift();
    useRole("itdrop");
    if (myFamiliar() === $familiar`Red-Nosed Snapper`) cliExecute("snapper mer-kin");
    cliExecute("unequip peridot of peril");
    codpiece("blood cubic zirconia, heartstone");
    if (!get("_steelyEyedSquintUsed")) mood("superitdrop");
    if (availableAmount($item`pro skateboard`) === 0) pullSequence($item`pro skateboard`);
    const copied = prop("lastCopyableMonster");
    let gear: Gear;
    if (
      get("_backUpUses") < 11 &&
      haveItem($item`backup camera`) &&
      (copied === "eye in the darkness" || copied === "slithering thing")
    ) {
      gear = new Gear("item drop, sea, -equip peridot of peril", corral)
        .need($item`shark jumper`, $item`scale-mail underwear`)
        .ifEquip(divingHelmet())
        .need($item`pro skateboard`)
        .ifEquip($item`The Eternity Codpiece`)
        .need($item`backup camera`);
    } else {
      if (haveSkill($skill`Steely-eyed Squint`) && haveItem($item`cursed monkey's paw`)) {
        pullSequence($item`software glitch`);
      }
      gear = new Gear("item drop, sea, -equip peridot of peril, equip monodent of the sea", corral)
        .ifEquip(divingHelmet())
        .need($item`pro skateboard`)
        .ifEquip($item`The Eternity Codpiece`);
    }
    gear.dress();
    mood("itdrop");
    adv(corral);
  }
  if (how === "drop" && itemAmount($item`sea lasso`) < 5 && get("lassoTrainingCount") < 20) {
    while (!haveItem($item`cursed monkey's paw`) && itemAmount($item`sea lasso`) < 6) {
      getMissingCorralItems();
    }
    codpiece("none");
  }
  step("phase: collect sea leathers");
  if (availableAmount($item`sea chaps`) === 0 && tailpiece() === $item.none) {
    while (itemAmount($item`sea leather`) < 1) getMissingCorralItems();
    create($item`sea chaps`);
  }
  if (availableAmount($item`sea cowboy hat`) === 0) {
    while (itemAmount($item`sea leather`) < 1) getMissingCorralItems();
    create($item`sea cowboy hat`);
  }
}

/**
 * The route through the diver, the abyss and the corral, by kit:
 *  - high shiny: S Word sea cow, then the abyss, max item diver, finish the corral;
 *  - squint, Mom and CyberRealm, a rift lasso and the zirconia: summon the diver,
 *    CyberRealm abyss, McTwist the corral;
 *  - anything else: the corral, the diver directly, then the abyss.
 */
export function seahorseRoute(): void {
  if (prop("seahorseName") !== "") return;
  if (inAftercore()) {
    if (!retrieveItem($item`aerated diving helmet`)) {
      abort("Could not build an aerated diving helmet.");
    }
  } else if (highShiny()) {
    caliginous("cheap");
    unholyDiver("direct");
    corralPhase("collect");
  } else if (
    haveSkill($skill`Steely-eyed Squint`) &&
    momNCyber() &&
    lassoShadow() &&
    availableAmount($item`blood cubic zirconia`) > 0
  ) {
    unholyDiver("summon");
    caliginous("cyberrealm");
    corralPhase("drop");
  } else {
    corralPhase("collect");
    unholyDiver("direct");
    caliginous(momNCyber() ? "cyberrealm" : "cheap");
  }
}

// ─── SHADOW RIFT AND TEFLON ───────────────────────────────────────────────────

const curveballLive = () =>
  toInt(prop("_curveballFightsLeft")) > 0 && prop("_curveballMonster") === "some fish";

export function shadowTeflon(): void {
  step("phase: shadow rift prep");
  if (inSeaPath() && !highShiny()) {
    if (
      get("encountersUntilSRChoice") > 9 &&
      prop("questRufus") === "unstarted" &&
      itemAmount($item`closed-circuit pay phone`) > 0
    ) {
      retrieveItem($item`oversized sparkler`);
      if (itemAmount($item`lump of loyal latite`) > 0) use($item`lump of loyal latite`);
      new Gear("item drop", rift)
        .need($item`Flash Liquidizer Ultra Dousing Accessory`, $item`Monodent of the Sea`)
        .ifEquip($item`bat wings`, $item`Everfull Dart Holster`, $item`toy Cupid bow`)
        .dress();
      mood("itdrop");
      if (!highShiny() && haveItem($item`closed-circuit pay phone`)) {
        use($item`closed-circuit pay phone`);
      }
    }
    if (curveballLive() && itemAmount($item`Mer-kin digpick`) === 0) curveballBurn();
    while (curveballLive() && !haveItem($item`platinum Yendorian express card`)) {
      curveballBurn();
    }
  }

  step("phase: teflon ore");
  const mine = $location`Anemone Mine`;
  if (itemAmount($item`teflon ore`) === 0 && tailpiece() === $item.none) {
    if (
      availableAmount($item`Mer-kin digpick`) === 0 &&
      !lowShiny() &&
      pullsRemaining() > reservedPulls()
    ) {
      pullSequence($item`Mer-kin digpick`);
    } else if (availableAmount($item`Mer-kin digpick`) === 0) {
      mood("itdrop");
      new Gear("item drop,sea", mine)
        .ifEquip($item`Peridot of Peril`)
        .bathysphere()
        .dress();
      if (numericModifier("Item Drop") > 250) {
        adv(mine);
      } else if (haveItem($item`bat wings`)) {
        equip($item`bat wings`);
        adv(mine);
      }
      if (availableAmount($item`Mer-kin digpick`) === 0) pullSequence($item`Mer-kin digpick`);
    }
    while (
      get("_unaccompaniedMinerUsed") < 5 &&
      haveSkill($skill`Unaccompanied Miner`) &&
      itemAmount($item`teflon ore`) === 0
    ) {
      mineAnemone();
    }
    if (itemAmount($item`teflon ore`) === 0 && !pulledToday($item`lodestone`)) {
      pullSequence($item`lodestone`);
      use($item`lodestone`);
    }
  }

  if (!inSeaPath()) return;
  const card = $item`platinum Yendorian express card`;
  if (!get("expressCardUsed") && haveItem(card) && !highShiny()) {
    if (storageAmount(card) > 0 && itemAmount(card) === 0) takeStorage(1, card);
    use(card);
  }

  step("phase: lasso training");
  const affinityLeft = () =>
    haveEffect($effect`Shadow Affinity`) > 0 || !get("_shadowAffinityToday");
  const phone = () => haveItem($item`closed-circuit pay phone`);
  while (get("lassoTrainingCount") < 20 && !highShiny() && affinityLeft() && phone()) {
    shadowRift();
  }
  if ((myTurncount() > 25 || !haveItem($item`miniature crystal ball`)) && !highShiny() && phone()) {
    while (affinityLeft()) shadowRift();
  }

  // Teflon ore, second try after the lodestone.
  if (itemAmount($item`teflon ore`) === 0 && tailpiece() === $item.none) {
    while (haveEffect($effect`Loded`) > 0 && itemAmount($item`teflon ore`) === 0) mineAnemone();
    if (itemAmount($item`teflon ore`) === 0) {
      print("Failed to acquire teflon ore — can pull mining dynamite for one more try", "red");
      while (itemAmount($item`teflon ore`) === 0) mineAnemone();
    }
  }
}

/** Lasso training in the pearl zone, when the rift didn't finish it. */
export function backupLasso(): void {
  while (get("lassoTrainingCount") < 20) {
    if (haveItem($item`closed-circuit pay phone`)) {
      print("Lasso training didn't finish via shadow rift", "red");
    }
    if (!pulledToday($item`Elf Guard SCUBA tank`)) cliExecute("pull elf guard scuba");
    if (itemAmount($item`sea lasso`) === 0) {
      equip($item`really, really nice swimming trunks`);
      equip($item`little bitty bathysphere`);
      monkeypaw($item`sea lasso`);
    }
    useRole("itdrop");
    if (availableAmount($item`pristine fish scale`) < 6) mood("itdrop");
    new Gear(`${pearlRes()},sea`, pearlLoc())
      .need($item`Monodent of the Sea`, $item`sea cowboy hat`, $item`sea chaps`)
      .bathysphere()
      .dress();
    adv(pearlLoc());
  }
}

// ─── TAMING ───────────────────────────────────────────────────────────────────

export function seahorsePrep(): void {
  let wantCowbell = 0;
  const wishes = get("_monkeyPawWishesUsed");
  if (availableAmount($item`cursed monkey's paw`) === 0 || highShiny()) wantCowbell = 2;
  else if (wishes > 3) wantCowbell = 2 - (5 - wishes);
  if (prop("seahorseName") !== "") return;
  while (itemAmount($item`sea cowbell`) < wantCowbell) getMissingCorralItems();
  while (itemAmount($item`sea lasso`) === 0) getMissingCorralItems();
}

export function seahorseTaming(): void {
  step("phase: seahorse taming");
  const predictions = () => prop("crystalBallPredictions").toLowerCase();
  const seahorseNext = () => predictions().includes("the coral corral:wild seahorse");
  const crystalBall = () => availableAmount($item`miniature crystal ball`) > 0;
  while (prop("seahorseName") === "") {
    if (inAftercore()) {
      retrieveItem(3, $item`sea cowbell`);
      retrieveItem($item`sea lasso`);
    }
    if (itemAmount($item`sea cowbell`) < 3 && !pulledToday($item`sea cowbell`)) {
      pullSequence($item`sea cowbell`);
    }
    useRole("itdrop");
    if (itemAmount($item`waffle`) === 0) pullSequence($item`waffle`);
    const gear = new Gear(dropsItems, corral);
    if (!prop("_perilLocations").includes("199")) gear.ifEquip($item`Peridot of Peril`);
    if (!haveItem($item`august scepter`)) {
      gear.need($item`Monodent of the Sea`).ifEquip($item`heartstone`);
    } else if (haveItem($item`miniature crystal ball`)) {
      gear.need($item`miniature crystal ball`);
    }
    if (curveballLive()) gear.need($item`Monodent of the Sea`);
    // All three non-seahorse monsters banished: the tearaway pants.
    const banished = prop("banishedMonsters");
    if (
      banished.includes("Mer-kin rustler") &&
      banished.includes("sea cowboy") &&
      banished.includes("sea cow:") &&
      haveItem($item`tearaway pants`)
    ) {
      gear.need($item`tearaway pants`);
    }
    gear.delay().dress();

    while (itemAmount($item`sea lasso`) === 0) monkeypaw($item`sea lasso`);
    while (itemAmount($item`sea cowbell`) < 3 && get("_monkeyPawWishesUsed") < 5) {
      monkeypaw($item`sea cowbell`);
    }
    if (itemAmount($item`sea cowbell`) < 3) abort("need more cowbells");

    adv(corral);
    // Burn shadow affinity while the crystal ball shows something else coming.
    if (
      predictions().includes("the coral corral") &&
      !seahorseNext() &&
      haveEffect($effect`Shadow Affinity`) > 0 &&
      crystalBall()
    ) {
      shadowRift();
    }
    while (
      haveEffect($effect`Shadow Affinity`) > 0 &&
      itemAmount($item`shadow brick`) === 0 &&
      !seahorseNext() &&
      crystalBall()
    ) {
      shadowRift();
    }
  }
}

// ─── AFTER THE SEAHORSE ───────────────────────────────────────────────────────

function scalesFromAbyss(): void {
  while (availableAmount($item`pristine fish scale`) < 3) {
    if (get("_cloversPurchased") < 3) {
      getLucky();
      equip($slot`acc3`, $item`black glass`);
    } else {
      abort(
        `get a total of ${availableAmount($item`pristine fish scale`)} pristine fish scale, out of hermitage clovers`,
      );
    }
    adv(abyss);
  }
}

/** Which boss an aftercore run is for, asked once the disguise is made. */
export let aftercoreBoss = "";

/** The crappy disguise to replace the missing tailpiece, and the spooky dreadscroll clue. */
export function postSeahorse(): void {
  while (haveEffect($effect`Shadow Affinity`) > 0) {
    while (curveballLive()) curveballBurn();
    shadowRift();
  }
  if (prop("encountersUntilSRChoice") === "0") adv(rift);
  if (prop("questRufus") === "step1") {
    use($item`closed-circuit pay phone`);
    adv(rift);
  }

  if (tailpiece() !== $item.none) return;
  equipSwimTrunks();
  while (itemAmount($item`sand dollar`) < 10) getSandDollar();
  // The diver phase runs only while the seahorse is untamed, so a part still
  // missing here has no other route back.
  if (
    availableAmount($item`crappy Mer-kin mask`) === 0 &&
    availableAmount($item`aerated diving helmet`) === 0 &&
    availableAmount($item`rusty diving helmet`) === 0 &&
    !diverPartsComplete()
  ) {
    step("Diving helmet chain short after the diver phase; recovering it in the Wreck");
    unholyDiver("direct");
  }
  cliExecute("unequip sea chaps; unequip aerated diving helmet");
  if (availableAmount($item`crappy Mer-kin mask`) === 0) {
    scalesFromAbyss();
    if (!retrieveItem($item`crappy Mer-kin mask`)) {
      abort("Could not build a crappy Mer-kin mask; the aerated diving helmet chain is short.");
    }
  }
  if (availableAmount($item`crappy Mer-kin tailpiece`) === 0) {
    scalesFromAbyss();
    if (!retrieveItem($item`crappy Mer-kin tailpiece`)) {
      abort(
        `Could not build a crappy Mer-kin tailpiece: ${availableAmount($item`sea chaps`)} sea chaps, ` +
          `${availableAmount($item`teflon swim fins`)} swim fins, ` +
          `${availableAmount($item`pristine fish scale`)}/3 fish scales.`,
      );
    }
  }

  if (inAftercore()) {
    aftercoreBoss = userPrompt("Which boss?", { Yogurt: true, Shub: true, Dad: true, Abort: true });
    if (aftercoreBoss === "Abort" || aftercoreBoss === "") abort();
  }

  if (prop("dreadScroll3") === "0") {
    mood("spookyres");
    maximize("50 spooky res, hp", false);
    // Mafia skips the cast below 500 maximum HP.
    if (myMaxhp() < 500) {
      abort(`Deep Dark Visions needs 500 maximum HP; you have ${myMaxhp()}.`);
    }
    // A cast deals three to four times max HP before resistance; below this
    // even a full HP cast ends Beaten Up.
    const spookyRes = Math.floor(elementalResistance($element`spooky`));
    if (spookyRes < 67) {
      print(
        `Deep Dark Visions: ${spookyRes}% spooky resistance is too low to survive a cast.`,
        "red",
      );
    }
    for (let casts = 0; prop("dreadScroll3") === "0"; casts++) {
      if (casts >= 10) {
        abort(
          "Deep Dark Visions gave no dreadscroll phrase in 10 casts. Cast it by hand until dreadScroll3 is set, then rerun.",
        );
      }
      if (!restoreHp(spookyRes < 67 ? 1000 : myMaxhp())) {
        abort("Could not restore HP before Deep Dark Visions; see the message above.");
      }
      if (!useSkill(1, $skill`Deep Dark Visions`)) {
        abort("Could not cast Deep Dark Visions; see the message above.");
      }
    }
  }
}
