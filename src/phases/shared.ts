import {
  abort,
  adv1,
  availableAmount,
  buy,
  cliExecute,
  equip,
  getProperty,
  haveEffect,
  haveSkill,
  Item,
  itemAmount,
  myHp,
  putCloset,
  pullsRemaining,
  setProperty,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $coinmaster, $effect, $familiar, $item, $location, $skill, get } from "libram";
import { useFam, useRole } from "../lib/familiar";
import { dropsItems, Gear } from "../lib/gear";
import {
  banishGear,
  baseballD,
  codpiece,
  leftSkiAvailable,
  mineNum,
  parkaForceAvailable,
  professorFamiliar,
  timeSpinnerRefight,
  useMapIfAvailable,
  yellowRayPrep,
} from "../lib/iotm";
import { mood, Mood } from "../lib/mood";
import { adv, postAdventure, setMPRecovery } from "../lib/postAdventure";
import {
  divingHelmet,
  doneWithCowboy,
  doneWithSeaCow,
  forcesAfterHealer,
  saberForcesFree,
  tailpiece,
} from "../lib/progress";
import { pullSequence, reservedPulls } from "../lib/pulls";
import {
  baseballPlayers,
  equipSwimTrunks,
  mapMonster,
  ncForce,
  ncForceEstimate,
  pillKeeper,
} from "../lib/resources";
import { haveItem, highShiny, lowShiny } from "../lib/state";

// Zone helpers more than one phase leans on. Ported from the "Quest Handling"
// and "Other Utilities" sections of UnderTheSea.ash.

const abyss = $location`The Caliginous Abyss`;
const corral = $location`The Coral Corral`;
const school = $location`Mer-kin Elementary School`;
const library = $location`Mer-kin Library`;
const outpost = $location`The Mer-Kin Outpost`;
const rift = $location`Shadow Rift (The Misspelled Cemetary)`;

const banishedMonsters = () => getProperty("banishedMonsters");

// ─── PRAYERBEADS ──────────────────────────────────────────────────────────────

export function pullPrayerbead(): void {
  if (availableAmount($item`Mer-kin prayerbeads`) < 3) pullSequence($item`Mer-kin prayerbeads`);
}

/** The -combat outpost setup for prayerbead trips. */
export function prayerbeadGear(): Gear {
  const gear = new Gear("-combat,sea", outpost)
    .forRole("-combat")
    .bathysphere($item`toy Cupid bow`);
  if (lowShiny()) gear.ifEquip($item`Congressional Medal of Insanity`);
  // Any healer that slips through the -combat stack gets Forced for a
  // guaranteed prayerbead and thingpouch, with the turn refunded.
  return gear.healerSaber();
}

export function farmPrayerbeads(): void {
  if (get("_monkeyPawWishesUsed") < 5 && haveItem($item`cursed monkey's paw`)) {
    cliExecute("monkeypaw wish mer-kin prayerbeads");
    return;
  }
  prayerbeadGear().dress();
  mood("-combat");
  adv(outpost);
}

// ─── THE CALIGINOUS ABYSS ─────────────────────────────────────────────────────

export function abyssRecallGear(): Gear {
  return new Gear("item drop,sea", abyss)
    .forRole("-combat")
    .need(
      $item`shark jumper`,
      $item`scale-mail underwear`,
      $item`black glass`,
      $item`Monodent of the Sea`,
    )
    .ifEquip($item`Peridot of Peril`)
    .bathysphere()
    .freeKill();
}

export function recallCaliginous(): void {
  if (availableAmount($item`black glass`) === 0)
    buy($coinmaster`Big Brother`, 1, $item`black glass`);
  abyssRecallGear().dress();
  if (haveEffect($effect`Jelly Combed`) === 0 && pullSequence($item`comb jelly`)) {
    use($item`comb jelly`);
  }
  adv(abyss);
}

export function finishCaliginous(): void {
  const gear = new Gear("mys,sea", abyss)
    .forRole("itdrop")
    .need($item`shark jumper`, $item`scale-mail underwear`, $item`black glass`)
    .ifEquip($item`Congressional Medal of Insanity`)
    .bathysphere()
    .ifEquip($item`blood cubic zirconia`);
  if (!banishedMonsters().includes("school of many")) gear.need($item`Monodent of the Sea`);
  gear.dress();
  adv(abyss);
}

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

export function getMissingCorralItems(): void {
  useRole("itdrop");
  // Backup Fidoxene site for reruns that skip the outpost phase; the
  // free-pill guard inside makes repeat calls a no-op.
  if (ncForceEstimate() >= 4) pillKeeper("free familiar");
  // Lecture copies of the sea cow once the Force budget is spent.
  professorFamiliar();
  const gear = new Gear("item drop,sea", corral);
  if (
    !banishedMonsters().includes("Mer-kin rustler") ||
    (doneWithCowboy() && !banishedMonsters().includes("sea cowboy")) ||
    (doneWithSeaCow() && !banishedMonsters().includes("sea cow:"))
  ) {
    gear.ifEquip(banishGear(corral));
  }
  if (lowShiny()) gear.ifEquip($item`Congressional Medal of Insanity`);
  gear
    .saber()
    .cloake()
    .champagne()
    .ifEquip($item`legendary seal-clubbing club`)
    .bathysphere($item`toy Cupid bow`)
    .dress();
  if (!doneWithSeaCow()) setProperty("choiceAdventure1589", "1&victim=775");
  else if (!doneWithCowboy()) setProperty("choiceAdventure1589", "1&victim=776");
  // Whichever victim is hunted, its whole table is non-conditional, so once
  // the Force budget is out the ray forces the same result.
  if (forcesAfterHealer() <= 0) yellowRayPrep();
  mood("itdrop");
  mapMonster(corral);
  adv(corral);
  timeSpinnerRefight(corral);
  if (
    getProperty("baseballTeam").includes("775") &&
    baseballPlayers() === 9 &&
    itemAmount($item`sea cowbell`) < 3
  ) {
    baseballD();
  }
}

/** Wish for an item with the monkey's paw, or farm the corral for it. */
export function monkeypaw(item: Item): void {
  if (availableAmount($item`cursed monkey's paw`) === 0 || get("_monkeyPawWishesUsed") === 5) {
    while (availableAmount(item) === 0) getMissingCorralItems();
  } else {
    cliExecute(`monkeypaw item ${item}`);
  }
}

// ─── SHADOW RIFT ──────────────────────────────────────────────────────────────

/** Shadow Rift fight gear. The Liquidizer grants the Douse Foe the CCS casts on a shadow slab. */
function shadowRiftGear(): void {
  const gear = new Gear("item drop", rift)
    .ifEquip($item`Flash Liquidizer Ultra Dousing Accessory`)
    .need($item`Monodent of the Sea`);
  if (get("lassoTrainingCount") < 20) gear.ifEquip($item`sea cowboy hat`, $item`sea chaps`);
  gear
    .ifEquip($item`bat wings`, $item`Everfull Dart Holster`, $item`toy Cupid bow`)
    .baseball()
    .dress();
}

export function shadowRift(): void {
  if (
    !haveItem($item`closed-circuit pay phone`) ||
    (get("_shadowAffinityToday") && haveEffect($effect`Shadow Affinity`) === 0)
  ) {
    return;
  }
  // These fights run on adv1(), which skips post_adv().
  setMPRecovery();
  const quest = () => getProperty("questRufus");
  if (haveEffect($effect`Shadow Waters`) === 0) {
    if (quest() === "unstarted") use($item`closed-circuit pay phone`);
    if (quest() === "started") {
      ncForce();
      adv1(rift, -1, "");
    }
    if (!get("_seadentWaveUsed")) useSkill($skill`Sea *dent: Summon a Wave`);
    use($item`closed-circuit pay phone`);
    shadowRiftGear();
    adv1(rift, -1, "");
    return;
  }
  if (
    get("encountersUntilSRChoice") > 9 &&
    quest() === "unstarted" &&
    itemAmount($item`closed-circuit pay phone`) > 0
  ) {
    new Gear("item drop", rift)
      .need($item`Flash Liquidizer Ultra Dousing Accessory`, $item`Monodent of the Sea`)
      .ifEquip($item`bat wings`)
      .baseball()
      .ifEquip($item`Everfull Dart Holster`)
      .dress();
    use($item`closed-circuit pay phone`);
  }
  if (quest() === "unstarted") use($item`closed-circuit pay phone`);
  if (haveEffect($effect`Shadow Affinity`) > 0) {
    if (itemAmount($item`sea lasso`) === 0) {
      equip($item`really, really nice swimming trunks`);
      equip($item`little bitty bathysphere`);
      monkeypaw($item`sea lasso`);
    }
    if (!useFam($familiar`Jill-of-All-Trades`)) useRole("itdrop");
    shadowRiftGear();
    mood("itdrop");
    adv1(rift, -1, "");
    if (!get("_seadentWaveUsed") && haveEffect($effect`Shadow Affinity`) > 0) {
      adv1(rift, -1, "");
      useSkill($skill`Sea *dent: Summon a Wave`);
    }
    if (get("encountersUntilSRChoice") === 0) adv1(rift, -1, "");
  }
}

// ─── CURVEBALL ────────────────────────────────────────────────────────────────

/** Spend a baseball curveball fight in a peril zone not yet periled today. */
export function curveballBurn(): void {
  const periled = getProperty("_perilLocations");
  const zones: [string, Mood, string, typeof outpost][] = [
    ["196", "spookyres", "spooky res,sea", $location`Anemone Mine`],
    ["195", "hotres", "hot res,sea", $location`The Marinara Trench`],
    ["197", "sleazeres", "sleaze res,sea", $location`The Dive Bar`],
  ];
  // The mine first only while the digpick is still wanted from it.
  const order =
    availableAmount($item`Mer-kin digpick`) === 0 ? zones : [...zones.slice(1), zones[0]];
  const target = order.find(([id]) => !periled.includes(id));
  if (target) {
    const [, buffs, modifier, zone] = target;
    mood(buffs);
    useRole("itdrop");
    codpiece("blood cubic zirconia, peridot of peril");
    new Gear(modifier, zone)
      .ifEquip($item`The Eternity Codpiece`)
      .need($item`Monodent of the Sea`)
      .bathysphere()
      .dress();
    adv1(zone, -1, "");
  } else {
    new Gear("item drop").need($item`Monodent of the Sea`).dress();
    adv1($location`The Outskirts of Cobb's Knob`, -1, "");
  }
  codpiece("none");
}

// ─── ANEMONE MINE ─────────────────────────────────────────────────────────────

export function mineAnemone(): void {
  equip($item`Mer-kin digpick`);
  equipSwimTrunks();
  useRole("itdrop");
  visitUrl(`mining.php?mine=3&which=${mineNum()}`);
  if (myHp() === 0) cliExecute("restore HP");
  if (itemAmount($item`teflon ore`) > 0 && haveEffect($effect`Beaten Up`) > 0) {
    if (haveSkill($skill`Tongue of the Walrus`)) useSkill($skill`Tongue of the Walrus`);
    else cliExecute("rest");
  }
  // post_adv() without a turn: the mine is a page, not an adventure.
  postAdventure();
}

// ─── GYMNASIUM AND SKATE PARK ─────────────────────────────────────────────────

export function gymnasium(): void {
  const gym = $location`Mer-kin Gymnasium`;
  useRole("combat");
  const gear = new Gear("combat,sea", gym);
  if (getProperty("skateParkStatus") === "war") {
    if (leftSkiAvailable()) gear.ifEquip($item`McHugeLarge left ski`);
    else if (parkaForceAvailable())
      gear.ifEquip($item`Jurassic Parka`).mode({ parka: "spikolodon" });
  }
  gear.baseball().ifEquip(divingHelmet(), tailpiece()).delay().freeKill().bathysphere().dress();
  mood("combat");
  if (get("noncombatForcerActive")) {
    abort("Sneak active while trying to adventure in gymnasium, get rid of it");
  }
  adv(gym);
}

export function skatePark(): void {
  visitUrl("sea_skatepark.php");
  if (getProperty("skateParkStatus") !== "war") return;
  ncForce();
  const board = highShiny() ? $item`skate board` : $item`skate blade`;
  if (!get("noncombatForcerActive") && (parkaForceAvailable() || leftSkiAvailable())) {
    gymnasium();
  } else if (
    !parkaForceAvailable() &&
    !leftSkiAvailable() &&
    haveItem($item`allied radio backpack`)
  ) {
    cliExecute("alliedradio misc sniper");
  }
  if (
    (pullsRemaining() > reservedPulls() || board === $item`skate board`) &&
    availableAmount(board) === 0
  ) {
    pullSequence(board);
  }
  if (get("noncombatForcerActive")) {
    equipSwimTrunks();
    cliExecute("unequip peridot");
    if (itemAmount(board) > 0) equip(board);
  } else {
    useRole("-combat");
    const gear = new Gear("-combat, sea, -weapon", $location`The Skate Park`);
    if (availableAmount(board) > 0) gear.need(board);
    gear.bathysphere($item`toy Cupid bow`).dress();
    mood("-combat");
  }
  adv($location`The Skate Park`);
}

// ─── ELEMENTARY SCHOOL AND LIBRARY ────────────────────────────────────────────

/** Hallpasses go in the closet, so the lounge noncombat doesn't eat one. */
export function closetHallpasses(): void {
  const passes = itemAmount($item`Mer-kin hallpass`);
  if (passes > 0) putCloset(passes, $item`Mer-kin hallpass`);
}

export function getCheatsheet(): void {
  closetHallpasses();
  let modifier = "item drop,sea";
  if (itemAmount($item`Mer-kin bunwig`) === 0 && availableAmount($item`Mer-kin bunwig`) === 0) {
    modifier += ", hat drop";
  }
  const gear = new Gear(modifier, school).forRole("itdrop");
  if (get("_backUpUses") < 11 && haveItem($item`backup camera`)) gear.need($item`backup camera`);
  else if (haveSkill($skill`Double-Fisted Skull Smashing`)) gear.need($item`Monodent of the Sea`);
  gear
    .saber()
    .cloake()
    .ifEquip(
      divingHelmet(),
      tailpiece(),
      $item`blood cubic zirconia`,
      $item`legendary seal-clubbing club`,
      $item`Möbius ring`,
    )
    .bathysphere($item`toy Cupid bow`)
    .dress();
  setProperty("choiceAdventure1589", "1&victim=852");
  if (!get("merkinElementaryTeacherUnlock")) mood("-combat");
  mood("itdrop");
  useMapIfAvailable();
  // Leftover Map charges force a monitor here; the refight buys a guaranteed
  // monitor for one turn straight after fighting one.
  mapMonster(school);
  adv(school);
  timeSpinnerRefight(school);
  closetHallpasses();
}

export function merkinLib(): void {
  useRole(getProperty("dreadScroll7") === "0" ? "itdrop" : "exp");
  const scroll7 = getProperty("dreadScroll7") === "0";
  const kill = itemAmount($item`Mer-kin killscroll`);
  const heal = itemAmount($item`Mer-kin healscroll`);
  const worktea = itemAmount($item`Mer-kin worktea`);
  const knucklebone = itemAmount($item`Mer-kin knucklebone`);

  const gear = new Gear(heal < 2 ? "item drop,sea" : dropsItems, library).need(
    $item`Mer-kin scholar mask`,
    $item`Mer-kin scholar tailpiece`,
  );
  if (lowShiny()) gear.ifEquip($item`Congressional Medal of Insanity`);
  if (get("_backUpUses") < 11 && haveItem($item`backup camera`) && !highShiny()) {
    gear.need($item`backup camera`);
  }
  // One Force charge on the researcher lands both scrolls and frees their
  // reserved pulls. Both are weapons, so the saber only gets the slot by
  // keeping the monodent out while a truly spare charge exists.
  const saberForResearcher =
    (kill === 0 || heal === 0) &&
    saberForcesFree() > 0 &&
    haveItem($item`Fourth of May Cosplay Saber`);
  if (
    !saberForResearcher &&
    (heal === 0 || ((kill === 0 || worktea === 0 || knucklebone === 0) && scroll7))
  ) {
    gear.need($item`Monodent of the Sea`);
  } else if (!saberForResearcher) {
    gear.delay();
  }
  gear.saber().cloake();
  if (
    heal < 2 ||
    (worktea === 0 && scroll7) ||
    (knucklebone === 0 && scroll7) ||
    (kill === 0 && getProperty("dreadScroll5") === "0")
  ) {
    gear.ifEquip($item`blood cubic zirconia`);
  } else {
    gear.delay();
  }
  gear.dress();
  mood("itdrop");
  useMapIfAvailable();
  adv(library);
}

/** Collect the scroll the combat hints at, then fight in the gym for the hint. */
export function combatScrollHint(): void {
  if (getProperty("dreadScroll5") === "0") {
    while (itemAmount($item`Mer-kin killscroll`) === 0) {
      if (itemAmount($item`Mer-kin thingpouch`) > 0) {
        use(itemAmount($item`Mer-kin thingpouch`), $item`Mer-kin thingpouch`);
      } else if (!lowShiny() && pullsRemaining() > reservedPulls()) {
        pullSequence($item`Mer-kin killscroll`);
      } else {
        farmPrayerbeads();
      }
    }
  }
  if (getProperty("dreadScroll2") === "0") {
    while (itemAmount($item`Mer-kin healscroll`) === 0) {
      if (!lowShiny() && pullsRemaining() > reservedPulls())
        pullSequence($item`Mer-kin healscroll`);
      else farmPrayerbeads();
    }
  }
  if (getProperty("dreadScroll5") === "0" || getProperty("dreadScroll2") === "0") gymnasium();
}
