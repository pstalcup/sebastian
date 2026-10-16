import {
  abort,
  attack,
  availableAmount,
  canStillSteal,
  cliExecute,
  currentRound,
  equippedAmount,
  expectedDamage,
  familiarWeight,
  getProperty,
  haveEffect,
  haveEquipped,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  lastMonster,
  Monster,
  monsterAttack,
  monsterDefense,
  monsterHp,
  mpCost,
  myAdventures,
  myBasestat,
  myFamiliar,
  myHp,
  myLocation,
  myMaxhp,
  myMp,
  myPath,
  myPrimestat,
  print,
  runaway,
  runCombat,
  setProperty,
  Skill,
  steal,
  throwItem,
  throwItems,
  toInt,
  toMonster,
  useSkill,
  visitUrl,
  weightAdjustment,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $locations,
  $monster,
  $monsters,
  $phylum,
  $skill,
  $skills,
  $stat,
  get,
} from "libram";
import {
  banishUsedAtYourLocation,
  cloakeReady,
  cloakeZone,
  combatBan,
  darts,
  freeMonster,
  geyserLowRoll,
  gloveReady,
  macroReady,
  professorReady,
} from "./lib/iotm";
import {
  cheatsheetsNeeded,
  delevelers,
  diverForceReady,
  diverHuntActive,
  diverPartsComplete,
  doneWithCowboy,
  doneWithSeaCow,
  forcesAfterDiver,
  forcesAfterHealer,
  prayerbeadsShort,
  saberForcesFree,
  seaCowNeeded,
  YOG_HEALINGS_NEEDED,
} from "./lib/progress";
import { bczCost } from "./lib/resources";
import { haveItem, highShiny, lowShiny, step } from "./lib/state";

// The combat consult script. Ported from UnderTheSeaCCS.ash and the fight
// helpers of UnderTheSeaGlobals.ash; the run's CCS is "consult
// sebastian_combat.js", so mafia calls main() each time a fight needs a
// decision.

const prop = (name: string) => getProperty(name);
const num = (name: string) => toInt(getProperty(name));
const saber = $item`Fourth of May Cosplay Saber`;
const curveballOn = (monster: Monster | string) =>
  prop("_curveballMonster") === `${monster}` && num("_curveballFightsLeft") > 0;
const someFishCurveball = () => curveballOn("some fish");

/** Cast the skill if the fight page offers it. */
function useIfHaveSkill(page: string, skill: Skill): void {
  if (page.includes(`${skill}`)) useSkill(skill);
}

// ─── FREE KILLS AND RUNS ──────────────────────────────────────────────────────

/** Attempt a free kill. With drop, skip the ones that hurt item drops. */
function freeKill(page: string, drop: boolean): void {
  if (freeMonster(lastMonster())) return;
  const colosseum = myLocation() === $location`Mer-kin Colosseum`;
  if (highShiny()) {
    if (page.includes("Darts: Aim for the Bullseye") && !colosseum) {
      // A refused cast leaves the round where it was.
      for (let lastRound = 0; currentRound() > lastRound && get("_dartsLeft") > 0;) {
        lastRound = currentRound();
        useSkill($skill`Darts: Aim for the Bullseye`);
      }
    }
    if (page.includes("Spit jurassic acid") && !colosseum) useSkill($skill`Spit jurassic acid`);
    return;
  }
  if (curveballOn(lastMonster())) return;

  for (const skill of $skills`Spit jurassic acid, Assert your Authority, Club 'Em Back in Time, Darts: Aim for the Bullseye, BCZ: Sweat Bullets, Chest X-Ray, Shattering Punch, Gingerbread Mob Hit`) {
    const club = skill === $skill`Club 'Em Back in Time`;
    if (colosseum && !club) continue;
    if (club && ((!colosseum && !lowShiny()) || drop || get("_clubEmTimeUsed") >= 5)) continue;
    if (
      skill === $skill`BCZ: Sweat Bullets` &&
      myBasestat($stat`submoxie`) - 22500 < bczCost("SweatBulletsCasts")
    ) {
      continue;
    }
    if (page.includes(`${skill}`)) useSkill(skill);
  }

  for (const item of $items`shadow brick, groveling gravel`) {
    if (itemAmount(item) === 0) continue;
    if (item === $item`groveling gravel` && drop) continue;
    if (item === $item`shadow brick` && get("_shadowBricksUsed") === 13) continue;
    if (colosseum) continue;
    throwItem(item);
  }

  if (
    currentRound() > 0 &&
    saberForcesFree() > 0 &&
    haveEquipped(saber) &&
    page.includes("Use the Force")
  ) {
    step("Use the Force: free-run of last resort");
    useSkill($skill`Use the Force`);
  }
}

/** Attempt a free run. With banish, banishing runs are allowed. */
function freeRunAny(page: string, banish: boolean): void {
  if (curveballOn(lastMonster())) return;
  if (currentRound() === 0) return;
  const navel = get("_navelRunaways");
  if (haveEquipped($item`Greatest American Pants`) && (navel < 3 || (navel < 10 && highShiny()))) {
    runaway();
  }
  if (currentRound() === 0) return;
  const boots = $familiar`Pair of Stomping Boots`;
  if (
    myFamiliar() === boots &&
    Math.round(familiarWeight(boots) + weightAdjustment() / 5) > get("_banderRunaways")
  ) {
    runaway();
  }

  const banishers = $skills`snokebomb, Bowl a Curveball, Feel Hatred, Throw Latte on Opponent`;
  for (const skill of $skills`Spring Away, Bowl a Curveball, Creepy Grin, Throw Latte on Opponent, Release the Boots, Feel Hatred, snokebomb`) {
    if (!page.includes(`${skill}`)) continue;
    if (!banish && banishers.includes(skill)) continue;
    const snokebomb = skill === $skill`snokebomb`;
    if (banish && snokebomb && banishUsedAtYourLocation("snokebomb")) continue;
    if (
      snokebomb &&
      $locations`The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry`.includes(
        myLocation(),
      )
    ) {
      return;
    }
    if (currentRound() === 0) return;
    if (banish && skill === $skill`Spring Away`) useSkill($skill`Spring Kick`);
    if (currentRound() === 0) return;
    useSkill(skill);
  }

  const banishItems = $items`anchor bomb, stuffed yam stinkbomb, handful of split pea soup`;
  for (const item of $items`glob of Blank-Out, peppermint parasol, anchor bomb, stuffed yam stinkbomb, handful of split pea soup, Mer-kin pinkslip, ink bladder`) {
    if (itemAmount(item) === 0) continue;
    if (!banish && banishItems.includes(item)) continue;
    if (item === $item`peppermint parasol` && num("parasolUsed") >= 3) continue;
    if (item === $item`Mer-kin pinkslip` && lastMonster().phylum !== $phylum`mer-kin`) continue;
    if (currentRound() === 0) return;
    throwItem(item);
  }
}

/** freeRunAny, skipped for free fights. */
function freeRun(page: string, banish: boolean): void {
  if (freeMonster(lastMonster())) return;
  freeRunAny(page, banish);
}

function bczGazeReady(): boolean {
  if (prop("NCtoC") === "true") return false;
  return myBasestat($stat`submysticality`) - 40000 > bczCost("RefractedGazeCasts");
}

// ─── FINISHING ────────────────────────────────────────────────────────────────

/**
 * Ends a live free fight: Saucestorm while affordable, attacks while HP is
 * safe, then a non-banishing run. Aborts if the fight is still live.
 */
function finishFreeFight(): void {
  const saucestorm = $skill`Saucestorm`;
  while (currentRound() > 0 && haveSkill(saucestorm) && myMp() >= mpCost(saucestorm)) {
    const round = currentRound();
    useSkill(saucestorm);
    if (round === currentRound()) break;
  }
  let stuck = 0;
  while (currentRound() > 0 && myHp() > expectedDamage() && stuck < 3) {
    const round = currentRound();
    attack();
    stuck = currentRound() === round ? stuck + 1 : 0;
  }
  if (currentRound() > 0) freeRunAny(visitUrl("fight.php"), false);
  for (let i = 0; i < 3; i++) {
    if (currentRound() > 0 && myHp() > expectedDamage()) runaway();
  }
  if (currentRound() > 0) {
    abort(`Could not finish or escape ${lastMonster()}. Finish the fight by hand.`);
  }
}

/** Finish the enemy with Saucegeyser, guarded against loops. */
function cleanUp(): void {
  let loopCount = 0;
  if (itemAmount($item`pulled red taffy`) > 0 && myLocation().environment === "underwater") {
    throwItem($item`pulled red taffy`);
  }
  while (currentRound() > 0) {
    const round = currentRound();
    if (
      haveSkill($skill`Saucegeyser`) &&
      lastMonster() !== $monster`Yog-Urt, Elder Goddess of Hatred`
    ) {
      useSkill($skill`Saucegeyser`);
    } else {
      if (haveSkill($skill`Stuffed Mortar Shell`)) useSkill($skill`Stuffed Mortar Shell`);
      useSkill($skill`Saucestorm`);
    }
    if (round === currentRound() && ++loopCount > 3) {
      abort("May be stuck in an infinite saucegeyser loop");
    }
    if (myMp() < 24) break;
  }
  // Out of MP with a free fight still live: finish it without a banish.
  if (currentRound() > 0 && freeMonster(lastMonster())) finishFreeFight();
}

// ─── FIGHT OPENERS ────────────────────────────────────────────────────────────

/** The mimic egg, capped at 11 a day and 50 familiar experience. */
function layMimicEgg(page: string): void {
  if (myFamiliar() !== $familiar`Chest Mimic`) return;
  if (get("_mimicEggsObtained") >= 11) return;
  if ($familiar`Chest Mimic`.experience < 50) return;
  if (!page.includes("lay an egg")) return;
  useSkill($skill`%fn, lay an egg`);
}

/** A Force that ends the fight: true when it was cast. */
function forceOn(target: Monster, ready: boolean, page: string, why: string): boolean {
  if (lastMonster() !== target || !ready) return false;
  if (!haveEquipped(saber) || !page.includes("Use the Force")) return false;
  step(`Use the Force -> ${why}`);
  useSkill($skill`Use the Force`);
  return true;
}

/** The diver: the insurance egg for diver #2 first, then Force the drops. */
function diverForce(page: string): boolean {
  if (lastMonster() !== $monster`unholy diver` || !diverForceReady()) return false;
  if (!haveEquipped(saber) || !page.includes("Use the Force")) return false;
  layMimicEgg(page);
  return forceOn(
    $monster`unholy diver`,
    true,
    page,
    `unholy diver (rivets ${itemAmount($item`rusty rivet`)}/8)`,
  );
}

/** One Forced cow is a guaranteed leather and cowbell. */
function seaCowForce(page: string): boolean {
  const ready =
    seaCowNeeded() &&
    forcesAfterHealer() > 0 &&
    !(haveEquipped($item`pro skateboard`) && !get("_epicMcTwistUsed")) &&
    !(
      $location`The Coral Corral`.turnsSpent <= 1 &&
      itemAmount($item`sea leather`) === 0 &&
      availableAmount($item`sea cowboy hat`) === 0
    );
  return forceOn($monster`sea cow`, ready, page, "sea cow");
}

function healerForce(page: string): boolean {
  return forceOn(
    $monster`Mer-kin healer`,
    prayerbeadsShort() && forcesAfterDiver() > 0,
    page,
    "Mer-kin healer (prayerbeads)",
  );
}

function researcherForce(page: string): boolean {
  const ready =
    (itemAmount($item`Mer-kin killscroll`) === 0 || itemAmount($item`Mer-kin healscroll`) === 0) &&
    saberForcesFree() > 0;
  return forceOn($monster`Mer-kin researcher`, ready, page, "Mer-kin researcher (scrolls)");
}

/** +50% item drops for the fight, in the zones ground purely for a drop. */
function becomeBat(page: string): void {
  if (!cloakeReady() || !cloakeZone(myLocation())) return;
  if (haveEffect($effect`Bat-Adjacent Form`) > 0) return;
  if (!haveEquipped($item`vampyric cloake`) || !page.includes("Become a Bat")) return;
  useSkill($skill`Become a Bat`);
}

/** +200% item on the diver itself, three a day, before anything ends the fight. */
function otoscope(page: string): void {
  // A fight the saber is about to Force has its drops forced anyway.
  if (diverForceReady() && haveEquipped(saber)) return;
  if (get("_otoscopeUsed") >= 3) return;
  if (!haveEquipped($item`Lil' Doctor™ bag`)) return;
  if (lastMonster() !== $monster`unholy diver` || diverPartsComplete()) return;
  if (!page.includes("Otoscope")) return;
  step(`Otoscope on ${lastMonster()}`);
  useSkill($skill`Otoscope`);
}

/** Stench jelly off any stench monster, for one forced noncombat. */
function extractJelly(page: string): void {
  if (myFamiliar() !== $familiar`Space Jellyfish`) return;
  const monster = lastMonster();
  const stench =
    `${monster.attackElement}` === "stench" || `${monster.defenseElement}` === "stench";
  if (!stench || itemAmount($item`stench jelly`) > 0) return;
  if (!page.includes("Extract Jelly")) return;
  useSkill($skill`Extract Jelly`);
}

/** Macrometeorite first, then the glove's CHEAT CODE. True when the monster changed. */
function rerollEnemy(page: string): boolean {
  if (macroReady() && page.includes("Macrometeorite")) {
    step("Macrometeorite: re-rolling the monster");
    useSkill($skill`Macrometeorite`);
    return true;
  }
  if (
    gloveReady() &&
    haveEquipped($item`Powerful Glove`) &&
    page.includes("CHEAT CODE: Replace Enemy")
  ) {
    step("CHEAT CODE: re-rolling the monster");
    useSkill($skill`CHEAT CODE: Replace Enemy`);
    return true;
  }
  return false;
}

/** At the wreck, re-roll anything but the diver while its parts are owed. */
function replaceEnemy(page: string): boolean {
  if (myLocation() !== $location`The Wreck of the Edgar Fitzsimmons`) return false;
  const monster = lastMonster();
  if (freeMonster(monster) || monster === $monster`unholy diver`) return false;
  if (diverPartsComplete()) return false;
  return rerollEnemy(page);
}

/** Chain a free copy of the diver or the sea cow while their drops are owed. */
function lectureOnRelativity(page: string): void {
  if (!professorReady() || myFamiliar() !== $familiar`Pocket Professor`) return;
  const monster = lastMonster();
  const wanted =
    (monster === $monster`unholy diver` && !diverPartsComplete()) ||
    (monster === $monster`sea cow` && seaCowNeeded());
  // The skill refuses to fire below 2 adventures, even against a free fight.
  if (!wanted || myAdventures() < 2 || !page.includes("lecture on relativity")) return;
  step(`Lecture on Relativity: chaining a free ${monster}`);
  useSkill($skill`lecture on relativity`);
}

/** Feel Nostalgic, on a fight being won, for a copied table still owed something. */
function feelNostalgic(page: string): void {
  if (!haveSkill($skill`Feel Nostalgic`) || get("_feelNostalgicUsed") >= 3) return;
  // A Force would forfeit the win and the charge with it.
  if (saberForcesFree() > 0 && haveEquipped(saber)) return;
  const copied = prop("lastCopyableMonster");
  const wanted =
    (copied === "unholy diver" && !diverPartsComplete()) ||
    (copied === "sea cow" && seaCowNeeded()) ||
    (copied === "Mer-kin monitor" && cheatsheetsNeeded());
  if (!wanted || `${lastMonster()}` === copied || !page.includes("Feel Nostalgic")) return;
  step(`Feel Nostalgic: re-rolling the ${copied} table`);
  useSkill($skill`Feel Nostalgic`);
}

// ─── YOG-URT ──────────────────────────────────────────────────────────────────

const DELEVELERS = $items`Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell`;
const YOG_HEALING = $items`sea gel, Mer-kin healscroll, waterlogged scroll of healing, soggy used band-aid, New Age healing crystal`;
const elixir = $item`Doc Galaktik's Homeopathic Elixir`;
const unguent = $item`Doc Galaktik's Pungent Unguent`;

/** _lastCombatActions lists throws as "it<id>;". */
function itemUsedThisCombat(item: Item): boolean {
  return prop("_lastCombatActions").includes(`it${item.id};`);
}

/** None when no deleveler is needed; aborts when one is needed and none is left. */
function yogDeleveler(): Item {
  // Null Afternoon zeroes enemy Attack and Defense; mafia's stats don't show it.
  if (haveEffect($effect`Null Afternoon`) > 0) return $item.none;
  if (
    myBasestat($stat`Moxie`) + 10 > monsterAttack() &&
    myBasestat($stat`Muscle`) - 30 > monsterDefense()
  ) {
    return $item.none;
  }
  const found = DELEVELERS.find((item) => itemAmount(item) > 0 && !itemUsedThisCombat(item));
  if (!found) abort("Yog-Urt needs a deleveler and none is left.");
  return found ?? $item.none;
}

/** None when every full heal has been used. */
function yogHealing(): Item {
  return (
    YOG_HEALING.find((item) => itemAmount(item) > 0 && !itemUsedThisCombat(item)) ?? $item.none
  );
}

function yogDocPair(): boolean {
  return [elixir, unguent].every((item) => itemAmount(item) > 0 && !itemUsedThisCombat(item));
}

/** One action under More Like a Suckrament. Nothing thrown may damage Yog-Urt. */
function yogSuckramentAction(needHeal: boolean): void {
  const heal = yogHealing();
  if (needHeal && heal !== $item.none) {
    const deleveler = yogDeleveler();
    if (deleveler !== $item.none) throwItems(deleveler, heal);
    else throwItem(heal);
  } else if (!needHeal && yogDeleveler() !== $item.none) {
    throwItem(yogDeleveler());
  } else if (yogDocPair()) {
    throwItems(elixir, unguent);
  } else if (heal !== $item.none) {
    throwItem(heal);
  } else {
    abort(
      "Yog-Urt: nothing harmless left to throw under More Like a Suckrament. Finish the fight by hand.",
    );
  }
}

/** Heal through More Like a Suckrament without touching Yog-Urt, then kill her. */
function yogUrtFight(): void {
  const beads = Math.min(equippedAmount($item`Mer-kin prayerbeads`), 3);
  let stuck = 0;
  while (currentRound() > 0 && haveEffect($effect`More Like a Suckrament`) > 0) {
    if (currentRound() > 12) {
      abort("Yog-Urt: More Like a Suckrament is still up past round 12. Finish the fight by hand.");
    }
    if (stuck >= 3) abort("Yog-Urt: throws are not advancing the round. Finish the fight by hand.");
    const round = currentRound();
    // She hits first each round; past the counted heals the action only fills the round.
    yogSuckramentAction(round <= YOG_HEALINGS_NEEDED[beads]);
    stuck = currentRound() === round ? stuck + 1 : 0;
  }
  let mortared = false;
  const mortar = $skill`Stuffed Mortar Shell`;
  const saucestorm = $skill`Saucestorm`;
  for (let guard = 0; currentRound() > 0 && guard < 40; guard++) {
    // Her own hits run up to about 11 once the effect is gone.
    if (myHp() < 15 && yogDocPair()) {
      throwItems(elixir, unguent);
    } else if (myHp() < 15 && yogHealing() !== $item.none) {
      throwItem(yogHealing());
    } else if (!mortared && haveSkill(mortar) && myMp() >= mpCost(mortar)) {
      // Its damage lands next round; a recast while it is pending does nothing.
      useSkill(mortar);
      mortared = true;
    } else if (haveSkill(saucestorm) && myMp() >= mpCost(saucestorm)) {
      useSkill(saucestorm);
    } else {
      // One swing per pass so the HP check above still runs.
      attack();
    }
  }
}

/** Every ordered pair of delevelers, for Shub's double throws. */
const DELEVELER_PAIRS: [Item, Item][] = DELEVELERS.flatMap((a) =>
  DELEVELERS.map((b): [Item, Item] => [a, b]),
);

const BANG_POTIONS = $items`milky potion, swirly potion, bubbly potion, smoky potion, cloudy potion, effervescent potion, fizzy potion, dark potion, murky potion`;
function bangA(): Item {
  return BANG_POTIONS.find((item) => availableAmount(item) > 0) ?? $item.none;
}
function bangB(): Item {
  const a = bangA();
  return BANG_POTIONS.find((item) => availableAmount(item) > 0 && item !== a) ?? $item.none;
}

/** The diver's own kill, shared by the copy guard and the monster switch. */
function killDiver(page: string): void {
  layMimicEgg(page);
  if (itemAmount($item`spitball`) > 0) throwItem($item`spitball`);
  freeKill(page, true);
  cleanUp();
}

/**
 * KoL leaves the screech out of the skill list while it recharges. Records
 * and returns "true" or "false"; "" without the eagle or a skill list.
 */
function noteScreechReady(page: string): string {
  if (myFamiliar() !== $familiar`Patriotic Eagle` || currentRound() < 1) return "";
  let start = page.indexOf("<select name=whichskill>");
  if (start < 0) start = page.indexOf('<select name="whichskill">');
  if (start < 0) return "";
  const stop = page.indexOf("</select>", start);
  if (stop < 0) return "";
  const ready = page.slice(start, stop).includes('value="7451"') ? "true" : "false";
  setProperty("_utsScreechReady", ready);
  return ready;
}

const killALot = $skill`%fn, kill a lot of these guys`;
const talkToFish = $skill`Sea *dent: Talk to Some Fish`;
const lightningBolt = $skill`Sea *dent: Throw a Lightning Bolt`;
const gaze = $skill`BCZ: Refracted Gaze`;
const mcTwist = $skill`Do an epic McTwist!`;
const backUp = $skill`Back-Up to your Last Enemy`;
const screech = $skill`%fn, Release the Patriotic Screech!`;
const recallHabitats = $skill`Recall Facts: Monster Habitats`;
const clubBattlefield = $skill`Club 'Em Across the Battlefield`;
const sniffs = $skills`Transcendent Olfaction, Gallapagosian Mating Call, McHugeLarge Slash`;

/** The scroll hints the dreadscroll wants, thrown at mer-kin. */
function throwScrollHints(): void {
  while (
    prop("dreadScroll2") === "0" &&
    itemAmount($item`Mer-kin healscroll`) > 0 &&
    currentRound() > 0
  ) {
    throwItem($item`Mer-kin healscroll`);
  }
  while (
    prop("dreadScroll5") === "0" &&
    itemAmount($item`Mer-kin killscroll`) > 0 &&
    currentRound() > 0 &&
    lastMonster().phylum === $phylum`mer-kin`
  ) {
    throwItem($item`Mer-kin killscroll`);
  }
}

// ─── ZONES ────────────────────────────────────────────────────────────────────

function knobAlleyPantry(page: string): void {
  if (someFishCurveball()) {
    useIfHaveSkill(page, talkToFish);
    cleanUp();
  }
  if (!freeMonster(lastMonster())) {
    freeRun(page, false);
    if (
      haveEquipped($item`Greatest American Pants`) ||
      haveEquipped($item`navel ring of navel gazing`)
    ) {
      runaway();
    }
  }
  useIfHaveSkill(page, talkToFish);
  useIfHaveSkill(page, $skill`Prepare to reanimate your Foe`);
  darts();
  cleanUp();
}

function madnessBakery(page: string): void {
  if (!haveSkill(screech)) abort("Need patriotic eagle");
  useSkill(screech);
  useIfHaveSkill(page, talkToFish);
  freeKill(page, false);
  cleanUp();
}

function shadowRift(page: string): void {
  if (myPrimestat() === $stat`Moxie`) steal();
  if (
    get("_seadentWaveUsed") &&
    get("lassoTrainingCount") < 20 &&
    itemAmount($item`sea lasso`) > 0
  ) {
    throwItem($item`sea lasso`);
  }
  if (lastMonster() === $monster`shadow slab`) {
    if (itemAmount($item`Septapus summoning charm`) > 0) {
      throwItem($item`Septapus summoning charm`);
    }
    useIfHaveSkill(page, $skill`Swoop like a Bat`);
    useIfHaveSkill(page, $skill`Perpetrate Mild Evil`);
    // Douse Foe exists only while the Liquidizer is worn.
    if (haveEquipped($item`Flash Liquidizer Ultra Dousing Accessory`)) {
      for (
        let lastRound = 0;
        currentRound() > lastRound &&
        get("_douseFoeUses") < 3 &&
        !get("_douseFoeSuccess") &&
        currentRound() < 25;
      ) {
        lastRound = currentRound();
        useSkill($skill`Douse Foe`);
      }
    }
  }
  if (lastMonster() === $monster`tumbleweed`) abort("Unexpected mob encountered in shadow rift");
  if (!canStillSteal() || availableAmount($item`pristine fish scale`) < 6) {
    useIfHaveSkill(page, talkToFish);
  }
  darts();
  cleanUp();
}

function octopusGarden(page: string): void {
  const eagle = $familiar`Patriotic Eagle`;
  if (haveEffect($effect`Citizen of a Zone`) === 0 && myFamiliar() === eagle && !highShiny()) {
    useSkill($skill`%fn, let's pledge allegiance to a Zone`);
  }
  if (lastMonster() === $monster`Neptune flytrap`) {
    if (haveEffect($effect`Everything Looks Red, White and Blue`) === 0 && myFamiliar() === eagle) {
      useSkill($skill`%fn, fire a Red, White and Blue Blast`);
    }
    if (myFamiliar() === $familiar`Sword of S Words`) useSkill(killALot);
    darts();
    if (
      (haveEquipped($item`McHugeLarge left pole`) ||
        availableAmount($item`McHugeLarge left pole`) === 0) &&
      !prop("trackedMonsters").includes("Neptune flytrap")
    ) {
      for (const skill of sniffs) useIfHaveSkill(page, skill);
    }
    freeKill(page, true);
    cleanUp();
  } else if (!freeMonster(lastMonster())) {
    if (
      haveEquipped($item`spring shoes`) &&
      !banishUsedAtYourLocation("Spring Kick") &&
      highShiny()
    ) {
      useSkill($skill`Spring Kick`);
      useSkill(talkToFish);
    } else {
      freeRun(page, true);
    }
  }
  cleanUp();
}

function wreck(page: string): void {
  const monster = lastMonster();
  const diver = $monster`unholy diver`;
  if (monster !== diver && !freeMonster(monster)) {
    freeRun(page, true);
    if (lastMonster() === $monster`Mer-kin scavenger`) {
      if (haveEquipped($item`spring shoes`)) useSkill($skill`Spring Kick`);
      else useIfHaveSkill(page, lightningBolt);
      useSkill(talkToFish);
    }
    if (lastMonster() === $monster`mine crab`) {
      useSkill($skill`Heartstone: %banish`);
      useIfHaveSkill(page, lightningBolt);
    }
  }
  if (lastMonster() === diver) {
    if (get("beGregariousCharges") > 0 && prop("beGregariousMonster") !== "745") {
      useSkill($skill`Be Gregarious`);
    }
    if (myFamiliar() === $familiar`Melodramedary`) useSkill($skill`%fn, spit on them!`);
    if (haveEquipped($item`pro skateboard`)) useSkill(mcTwist);
    if (haveEquipped(saber)) useSkill($skill`Use the Force`);
  }
  if (currentRound() > 0) feelNostalgic(page);
  darts();
  freeKill(page, true);
  cleanUp();
}

function pearlZone(page: string): void {
  // Lasso training only counts with both trainer pieces worn.
  if (haveEquipped($item`sea cowboy hat`) && haveEquipped($item`sea chaps`)) {
    throwItem($item`sea lasso`);
  }
  const miner = $monster`Mer-kin miner`;
  const squid = $monster`giant squid`;
  const tippler = $monster`Mer-kin tippler`;
  if (lastMonster() === miner) {
    steal();
    useIfHaveSkill(page, $skill`Swoop like a Bat`);
  }
  // Sniffing feeds the step-4 pearl hunt, which is over once the corral has started.
  const tracked = prop("trackedMonsters");
  if (
    ((lastMonster() === squid && !tracked.includes("giant squid")) ||
      (lastMonster() === tippler && !tracked.includes("Mer-kin tippler"))) &&
    $location`The Coral Corral`.turnsSpent === 0
  ) {
    for (const skill of sniffs) useIfHaveSkill(page, skill);
  }
  if (freeMonster(lastMonster())) {
    useIfHaveSkill(page, gaze);
    cleanUp();
  }
  if (highShiny() && lastMonster() === $monster`anemone combatant`) {
    useIfHaveSkill(page, lightningBolt);
  }
  if (someFishCurveball()) {
    useIfHaveSkill(page, talkToFish);
    cleanUp();
  }
  if (
    (lastMonster() !== squid || itemAmount($item`comb jelly`) > 0) &&
    lastMonster() !== tippler &&
    (lastMonster() !== miner || itemAmount($item`Mer-kin digpick`) > 0)
  ) {
    if (haveItem($item`cosmic bowling ball`)) freeRun(page, true);
    useIfHaveSkill(page, talkToFish);
    darts();
    freeRun(page, true);
    cleanUp();
  } else {
    freeKill(page, true);
  }
  cleanUp();
}

function outpost(page: string): void {
  if (myPath().id === 0 && get("lassoTrainingCount") < 20) throwItem($item`sea lasso`);
  const monster = lastMonster();
  if (monster === $monster`time cop`) {
    darts();
    cleanUp();
    return;
  }
  const fightsLeft = prop("_monsterHabitatsFightsLeft");
  const recalled = num("_monsterHabitatsRecalled");
  if (monster === $monster`Black Crayon Golem`) {
    if (
      fightsLeft === "0" &&
      haveEffect($effect`Everything Looks Purple`) === 0 &&
      recalled === 2
    ) {
      useSkill($skill`Blow the Purple Candle!`);
    } else if (fightsLeft === "0" && recalled < 2) {
      useSkill(recallHabitats);
    }
    if (
      prop("_monsterHabitatsFightsLeft") === "0" &&
      num("_monsterHabitatsRecalled") >= 2 &&
      myFamiliar() === $familiar`Patriotic Eagle`
    ) {
      useSkill(screech);
    }
    darts();
    cleanUp();
    return;
  }
  const scaleHunt = () =>
    myFamiliar() !== $familiar`Sword of S Words` &&
    (highShiny() || !haveItem($item`closed-circuit pay phone`) || lowShiny()) &&
    availableAmount($item`pristine fish scale`) < 6 &&
    !freeMonster(lastMonster());
  const healer = $monster`Mer-kin healer`;
  const thief = () =>
    lastMonster() === $monster`Mer-kin burglar` || lastMonster() === $monster`Mer-kin raider`;

  if ($location`The Mer-Kin Outpost`.turnsSpent < 24 || prop("merkinLockkeyMonster") !== "") {
    // Back up to the Black Crayon Golem if available.
    if (
      prop("_monsterHabitatsFightsLeft") === "0" &&
      num("_monsterHabitatsRecalled") >= 2 &&
      get("_backUpUses") < 7 &&
      prop("lastCopyableMonster") === "Black Crayon Golem" &&
      haveEquipped($item`backup camera`)
    ) {
      useSkill(backUp);
      runCombat();
    }
    if (scaleHunt()) {
      useSkill(talkToFish);
      freeKill(page, true);
      cleanUp();
    }
    if (lastMonster() === healer && itemAmount($item`Mer-kin prayerbeads`) < 2) {
      if (haveEquipped($item`baseball diamond`) || someFishCurveball()) useSkill(talkToFish);
      freeKill(page, true);
      if (get("_backUpUses") < 7 && haveEquipped($item`backup camera`)) {
        useSkill(backUp);
        runCombat();
      }
      freeRun(page, false);
      cleanUp();
    } else if (thief()) {
      if (
        (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
        myFamiliar() === $familiar`Sword of S Words` &&
        !banishUsedAtYourLocation("Sea *dent")
      ) {
        useSkill(lightningBolt);
      }
      freeRun(page, true);
    }
    if (!freeMonster(lastMonster())) freeKill(page, false);
    cleanUp();
  } else {
    if (scaleHunt()) {
      useSkill(talkToFish);
      freeKill(page, true);
      cleanUp();
    }
    if (thief()) freeRun(page, true);
    freeKill(page, lastMonster() === healer && itemAmount($item`Mer-kin prayerbeads`) < 2);
    cleanUp();
  }
}

function cyberzone(page: string): void {
  if ($monsters`eye in the darkness, slithering thing`.includes(lastMonster())) {
    // A refused cast leaves the round where it was.
    for (let lastRound = 0; currentRound() > lastRound;) {
      lastRound = currentRound();
      useSkill($skill`Throw Cyber Rock`);
    }
  } else {
    useIfHaveSkill(page, lightningBolt);
  }
}

function banishOrRun(page: string): void {
  const ban = combatBan();
  if (ban !== $skill.none) useSkill(ban);
  else freeRun(page, true);
}

function corral(page: string): void {
  const seahorse = $monster`wild seahorse`;
  const rustler = $monster`Mer-kin rustler`;
  const cow = $monster`sea cow`;
  const cowboy = $monster`sea cowboy`;
  const readyToTame = () =>
    itemAmount($item`sea cowbell`) >= 3 &&
    itemAmount($item`sea lasso`) >= 1 &&
    get("lassoTrainingCount") === 20;
  if (lastMonster() === seahorse && readyToTame()) {
    throwItems($item`sea cowbell`, $item`sea cowbell`);
    throwItems($item`sea cowbell`, $item`sea lasso`);
    if (currentRound() !== 0) abort("For some reason seahorse wasn't tamed, check that out");
  }
  if (
    highShiny() &&
    prop("swordOfSWordsMonster") !== "775" &&
    myFamiliar() === $familiar`Sword of S Words` &&
    lastMonster() === cow
  ) {
    useSkill(killALot);
    cleanUp();
  }
  if (!get("_epicMcTwistUsed") && haveEquipped($item`pro skateboard`)) {
    if (haveEquipped($item`backup camera`)) {
      if (lastMonster() === rustler) useSkill($skill`Spring Kick`);
      useSkill(backUp);
      useSkill(gaze);
      useSkill(mcTwist);
    } else if (lastMonster().phylum !== $phylum`fish`) {
      if (lastMonster() === rustler) useSkill($skill`Spring Kick`);
      useIfHaveSkill(page, talkToFish);
      useSkill(gaze);
      useIfHaveSkill(page, mcTwist);
      if (itemAmount($item`pulled yellow taffy`) > 0) throwItem($item`pulled yellow taffy`);
    } else if (lastMonster() === seahorse) {
      runaway();
    } else if (itemAmount($item`software glitch`) > 0) {
      throwItem($item`software glitch`);
      if (lastMonster() !== $monster`Bugged bugbear`) abort("Software glitch failed");
      useSkill(gaze);
      useIfHaveSkill(page, mcTwist);
      if (itemAmount($item`pulled yellow taffy`) > 0) throwItem($item`pulled yellow taffy`);
    }
    freeKill(page, true);
    cleanUp();
  } else if (
    itemAmount($item`sea cowbell`) >= 3 &&
    itemAmount($item`sea lasso`) > 0 &&
    get("lassoTrainingCount") === 20
  ) {
    if (lastMonster().phylum === $phylum`plant`) useSkill($skill`Tear Away your Pants!`);
    if (prop("seahorseName") === "") {
      const banished = prop("banishedMonsters");
      const cowGone = banished.includes("sea cow:");
      const cowboyGone = banished.includes("sea cowboy");
      const rustlerGone = banished.includes("Mer-kin rustler");
      // Fewer than two of the three banished: run from or banish this one.
      if (
        (!cowGone && !cowboyGone) ||
        (!rustlerGone && !cowboyGone) ||
        (!cowGone && !rustlerGone)
      ) {
        if (lastMonster() === rustler && someFishCurveball()) {
          useIfHaveSkill(page, talkToFish);
          if (lastMonster() === $monster`some fish`) cleanUp();
        }
        freeRun(page, true);
        if (lastMonster() === rustler) {
          if (haveSkill($skill`Heartstone: %banish`) && get("heartstoneBanishUnlocked")) {
            useSkill($skill`Heartstone: %banish`);
          }
        } else if (lastMonster() === cowboy || lastMonster() === cow) {
          useSkill(lightningBolt);
        }
      }
    }
    if (itemAmount($item`waffle`) > 0 && !prop("_lastCombatActions").includes("it11311")) {
      throwItem($item`waffle`);
      runCombat();
    }
    if (someFishCurveball()) {
      useIfHaveSkill(page, talkToFish);
      if (lastMonster() === $monster`some fish`) cleanUp();
    }
    freeRun(page, false);
    freeKill(page, false);
    cleanUp();
  } else {
    if (lastMonster() === seahorse) runaway();
    else if (lastMonster() === rustler) banishOrRun(page);
    else if (lastMonster() === cow && doneWithSeaCow()) banishOrRun(page);
    else if (lastMonster() === cowboy && doneWithCowboy()) banishOrRun(page);
    // The fight is being killed from here on: the one safe moment for a
    // Feel Nostalgic charge on the cow's table.
    if (currentRound() > 0) feelNostalgic(page);
    // Club 'Em Across the Battlefield does nothing once a noncombat has
    // already been forced into a combat.
    if (
      haveEquipped($item`legendary seal-clubbing club`) &&
      get("_clubEmBattlefieldUsed") < 5 &&
      prop("NCtoC") !== "true"
    ) {
      useSkill(clubBattlefield);
    }
    cleanUp();
  }
}

function abyss(page: string): void {
  if (
    (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
    itemAmount($item`sea lasso`) > 1 &&
    get("lassoTrainingCount") < 20 &&
    haveEquipped($item`sea cowboy hat`)
  ) {
    throwItem($item`sea lasso`);
  }
  const monster = lastMonster();
  if (monster === $monster`peanut` && num("lastColosseumRoundWon") < 15) {
    const waffles = availableAmount($item`waffle`);
    if (
      haveItem($item`august scepter`) &&
      haveItem($item`2002 Mr. Store Catalog`) &&
      haveSkill($skill`Just the Facts`) &&
      haveFamiliar($familiar`Patriotic Eagle`) &&
      (waffles > 1 || (waffles === 1 && prop("seahorseName") !== ""))
    ) {
      throwItem($item`waffle`);
    } else {
      cleanUp();
    }
    runCombat();
  } else if (freeMonster(monster)) {
    cleanUp();
  } else {
    const habitats = $monsters`slithering thing, eye in the darkness`;
    if (
      itemAmount($item`spooky VHS tape`) > 0 &&
      prop("spookyVHSTapeMonster") === "" &&
      num("momSeaMonkeeProgress") < 36 &&
      [...habitats, $monster`school of many`].includes(monster)
    ) {
      throwItem($item`spooky VHS tape`);
    }
    if (
      prop("_monsterHabitatsRecalled") !== "3" &&
      prop("_monsterHabitatsFightsLeft") === "0" &&
      !highShiny() &&
      (haveItem($item`server room key`) || $location`The Mer-Kin Outpost`.turnsSpent < 29) &&
      habitats.includes(monster)
    ) {
      useSkill(recallHabitats);
    }
    if (monster === $monster`school of many`) {
      useIfHaveSkill(page, lightningBolt);
      for (let i = 0; i < 4; i++) useSkill($skill`Garbage Nova`);
    }
    freeKill(page, false);
    cleanUp();
  }
}

function school(page: string): void {
  const club = () =>
    haveEquipped($item`legendary seal-clubbing club`) && get("_clubEmBattlefieldUsed") < 5;
  const monster = lastMonster();
  if (freeMonster(monster)) {
    if (prop("NCtoC") !== "true") useIfHaveSkill(page, gaze);
    if (club() && prop("NCtoC") !== "true") useSkill(clubBattlefield);
    else cleanUp();
  } else if ($monsters`Mer-kin teacher, Mer-kin punisher, Mer-kin monitor`.includes(monster)) {
    if (haveEquipped($item`spring shoes`) && !banishUsedAtYourLocation("Spring Kick")) {
      if (
        (monster === $monster`Mer-kin teacher` && itemAmount($item`Mer-kin bunwig`) > 0) ||
        (monster === $monster`Mer-kin punisher` && itemAmount($item`Mer-kin mouthsoap`) > 0)
      ) {
        useSkill($skill`Spring Kick`);
      }
    }
    if (
      freeMonster(toMonster(prop("lastCopyableMonster"))) &&
      get("_backUpUses") < 11 &&
      haveEquipped($item`backup camera`)
    ) {
      useSkill(backUp);
      if (prop("NCtoC") !== "true") useIfHaveSkill(page, gaze);
      if (club() && prop("NCtoC") === "false") useSkill(clubBattlefield);
      if (freeMonster(lastMonster())) cleanUp();
      else abort("backed up to a nonfree monster?");
    }
  }
  // The kill path from here on: the safe spot for a Feel Nostalgic charge
  // on the monitor's cheatsheet table.
  if (currentRound() > 0) feelNostalgic(page);
  if (bczGazeReady() && prop("NCtoC") !== "true") {
    useSkill(talkToFish);
    if (
      toMonster(prop("lastEncounter")) !== $monster.none &&
      itemAmount($item`Mer-kin cheatsheet`) < 10
    ) {
      useSkill(gaze);
    }
  }
  freeKill(page, true);
  cleanUp();
}

function library(page: string): void {
  if (freeMonster(lastMonster())) {
    if (bczGazeReady()) useSkill(gaze);
    cleanUp();
  }
  const short = (item: Item) => itemAmount(item) === 0;
  if (num("merkinVocabularyMastery") >= 90) {
    throwScrollHints();
    if (freeMonster(lastMonster())) {
      if (bczGazeReady()) useSkill(gaze);
    } else {
      if (short($item`Mer-kin knucklebone`)) {
        if (bczGazeReady()) {
          useSkill(talkToFish);
          useSkill(gaze);
        }
      } else if (lastMonster() === $monster`Mer-kin alphabetizer`) {
        useSkill($skill`Spring Kick`);
      } else if (lastMonster() === $monster`Mer-kin drifter`) {
        freeRun(page, true);
      }
      freeKill(page, true);
      cleanUp();
    }
  } else if (
    freeMonster(toMonster(prop("lastCopyableMonster"))) &&
    get("_backUpUses") < 11 &&
    haveEquipped($item`backup camera`)
  ) {
    useSkill(backUp);
    useSkill(gaze);
  } else {
    if (
      bczGazeReady() &&
      $items`Mer-kin killscroll, Mer-kin healscroll, Mer-kin worktea, Mer-kin knucklebone`.some(
        short,
      )
    ) {
      useSkill(talkToFish);
      useSkill(gaze);
    }
    freeKill(page, true);
    cleanUp();
  }
  cleanUp();
}

function gymnasium(page: string): void {
  throwScrollHints();
  if (prop("skateParkStatus") === "war") {
    for (const skill of $skills`Launch spikolodon spikes, McHugeLarge Avalanche`) {
      useIfHaveSkill(page, skill);
    }
  }
  if (freeMonster(lastMonster())) {
    if (bczGazeReady()) useSkill(gaze);
  } else {
    freeRun(page, true);
    freeKill(page, false);
  }
  cleanUp();
}

/**
 * Colosseum rounds need wins, so this drains free kills and never Uses the
 * Force. A champion's specials take hold from round 2, so one Saucegeyser
 * must kill it; when it can't, leave rather than lose.
 */
function colosseum(page: string): void {
  if (currentRound() > 0 && lastMonster().boss && haveSkill($skill`Saucegeyser`)) {
    // championCheck() reads _utsChampionRanEst to stop a rerun before the turn.
    if (geyserLowRoll() < monsterHp()) {
      setProperty("_utsChampionRanEst", `${geyserLowRoll()}`);
      let why =
        `UTS: ${lastMonster()} has ${monsterHp()} HP and one Saucegeyser is estimated at ` +
        `${geyserLowRoll()}. Raise Mysticality or spell damage, or fight it by hand, then rerun.`;
      freeRunAny(page, false);
      if (currentRound() > 0) runaway();
      if (currentRound() > 0) why += " The fight is still in progress: finish it by hand.";
      print(why, "red");
      abort(why);
    }
    const castRound = currentRound();
    useSkill($skill`Saucegeyser`);
    if (currentRound() > castRound) setProperty("_utsChampionRanEst", `${geyserLowRoll()}`);
  } else if (currentRound() > 0) {
    freeKill(page, false);
  }
  if (num("lastColosseumRoundWon") < 15) cleanUp();
}

/** Shub-Jigguwatt: delevel with pairs of throws, then swing. */
function leftDoor(): void {
  const lasso = $item`sea lasso`;
  if (haveEffect($effect`Null Afternoon`) === 0) {
    if (itemAmount($item`crayon shavings`) >= 8) {
      for (let i = 0; i < 4; i++) throwItems($item`crayon shavings`, $item`crayon shavings`);
    } else {
      while (
        delevelers() > 0 &&
        (myBasestat($stat`Moxie`) + 10 < monsterAttack() ||
          myBasestat($stat`Muscle`) - 30 < monsterDefense())
      ) {
        for (const [a, b] of DELEVELER_PAIRS) {
          if (itemAmount(a) === 0 || itemAmount(b) === 0) continue;
          if (a === b && (itemAmount(a) < 2 || b === lasso)) continue;
          if ((a === lasso || b === lasso) && itemUsedThisCombat(lasso)) continue;
          throwItems(a, b);
          break;
        }
        const lassoSpent = itemAmount(lasso) > 0 && itemUsedThisCombat(lasso);
        if (delevelers() === 1 || (lassoSpent && delevelers() === 2)) {
          for (const item of $items`Mer-kin mouthsoap, crayon shavings, table tennis ball, sea cowbell`) {
            if (itemAmount(item) === 1) throwItem(item);
          }
          if (delevelers() === 1 && itemAmount(lasso) > 0) break;
        }
        if (currentRound() === 0) break;
      }
    }
  }
  while (currentRound() > 0) attack();
}

/** The old single-door temple, for aftercore bosses. */
function temple(): void {
  const monster = lastMonster();
  if (monster === $monster`Yog-Urt, Elder Goddess of Hatred`) {
    if (myMaxhp() > 311) {
      abort("Too much HP to beat Yogurt (need < 312 after debuff) — check what's granting HP");
    }
    if (availableAmount($item`crayon shavings`) >= 9) {
      throwItems($item`crayon shavings`, $item`Mer-kin healscroll`);
    } else {
      throwItems($item`table tennis ball`, $item`Mer-kin healscroll`);
    }
    throwItems($item`Mer-kin mouthsoap`, $item`waterlogged scroll of healing`);
    throwItem($item`sea gel`);
    if (equippedAmount($item`Mer-kin prayerbeads`) < 3) throwItem($item`New Age healing crystal`);
    if (equippedAmount($item`Mer-kin prayerbeads`) < 2) throwItem($item`soggy used band-aid`);
    cleanUp();
    attack();
    attack();
    attack();
  }
  if (monster === $monster`Shub-Jigguwatt, Elder God of Violence`) {
    for (let i = 0; i < 4; i++) throwItems($item`crayon shavings`, $item`crayon shavings`);
    while (currentRound() > 0) attack();
  }
  if (monster === $monster`Dad Sea Monkee`) {
    cliExecute("dad");
    abort(
      "execute spells in the above order, can use shrap instead of toynado and volcanometeor instead of awesome balls of fire",
    );
  }
}

function byLocation(page: string): void {
  const location = myLocation();
  if (location === $location`The Skeleton Store`) {
    cleanUp();
  } else if (
    $locations`The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry`.includes(
      location,
    )
  ) {
    knobAlleyPantry(page);
  } else if (location === $location`Madness Bakery`) {
    madnessBakery(page);
  } else if (location === $location`Shadow Rift (The Misspelled Cemetary)`) {
    shadowRift(page);
  } else if (location === $location`An Octopus's Garden`) {
    octopusGarden(page);
  } else if (location === $location`The Wreck of the Edgar Fitzsimmons`) {
    wreck(page);
  } else if ($locations`The Marinara Trench, The Dive Bar, Anemone Mine`.includes(location)) {
    pearlZone(page);
  } else if (location === $location`The Mer-Kin Outpost`) {
    outpost(page);
  } else if (location === $location`The Skate Park`) {
    attack();
    attack();
    cleanUp();
  } else if (location === $location`Cyberzone 1`) {
    cyberzone(page);
  } else if (location === $location`The Coral Corral`) {
    corral(page);
  } else if (location === $location`The Caliginous Abyss`) {
    abyss(page);
  } else if (location === $location`Mer-kin Elementary School`) {
    school(page);
  } else if (location === $location`Mer-kin Library`) {
    library(page);
  } else if (location === $location`Mer-kin Gymnasium`) {
    gymnasium(page);
  } else if (location === $location`Mer-kin Colosseum`) {
    colosseum(page);
  } else if (location === $location`Mer-kin Temple (Right Door)`) {
    yogUrtFight();
  } else if (location === $location`Mer-kin Temple (Left Door)`) {
    leftDoor();
  } else if (location === $location`Mer-kin Temple (Center Door)`) {
    // Raise Backup Dancer is a Pastamancer skill and only a damage boost here.
    if (haveSkill($skill`Raise Backup Dancer`)) {
      useSkill($skill`Raise Backup Dancer`);
      useSkill($skill`Raise Backup Dancer`);
    }
    cleanUp();
  } else if (location === $location`Mer-kin Temple`) {
    temple();
  }
}

function byMonster(page: string): void {
  const monster = lastMonster();
  if (monster === $monster`Black Crayon Golem`) {
    if (prop("_monsterHabitatsFightsLeft") === "0" && num("_monsterHabitatsRecalled") < 3) {
      useSkill(recallHabitats);
    }
    // trackedMonsters records mafia's own capitalisation, so compare lowercased.
    if (!prop("trackedMonsters").toLowerCase().includes("black crayon golem:mchugelarge slash")) {
      for (const skill of $skills`Gallapagosian Mating Call, McHugeLarge Slash`) {
        useIfHaveSkill(page, skill);
      }
      useSkill($skill`Club 'Em Into Next Week`);
    }
    // In-place summons reach this case with no location logic to finish the fight.
    cleanUp();
  } else if (monster === $monster`unholy diver`) {
    killDiver(page);
  } else if (monster === $monster`sea cowboy`) {
    useSkill(killALot);
    freeKill(page, true);
    cleanUp();
  } else if (
    $monsters`rotten dolphin thief, kid who is too old to be Trick-or-Treating, suburban security civilian, vandal kid`.includes(
      monster,
    )
  ) {
    cleanUp();
  }
}

/** The postloop's Patriotic Screech re-aim at the Smut Orc Logging Camp. */
function screechReaim(page: string): void {
  // Only the zone's natives are safe to banish. A result left unset tells
  // the caller no cast was attempted.
  const orc = lastMonster().phylum === $phylum`orc`;
  if (prop("_utsScreechFired") === "" && orc && noteScreechReady(page) === "false") {
    setProperty("_utsScreechFired", "unready");
  } else if (prop("_utsScreechFired") === "" && orc) {
    page = useSkill(screech);
    // The line mafia itself reads to register the banish.
    setProperty(
      "_utsScreechFired",
      page.includes("releases an ear shattering screech") ? "true" : "false",
    );
  }
  freeKill(page, false);
  cleanUp();
}

export function main(round: number, monster: Monster, page: string): void {
  void round;
  void monster;
  if (prop("_utsScreechReaim") === "true") {
    screechReaim(page);
    return;
  }
  if (prop("_utsPearlFarm") === "true") {
    noteScreechReady(page);
    freeKill(page, false);
    cleanUp();
    return;
  }
  // Any stray opener under More Like a Suckrament costs a heal round or kills.
  if (
    myLocation() === $location`Mer-kin Temple (Right Door)` &&
    lastMonster() === $monster`Yog-Urt, Elder Goddess of Hatred`
  ) {
    yogUrtFight();
    return;
  }

  if (diverForce(page) || healerForce(page) || seaCowForce(page) || researcherForce(page)) return;
  becomeBat(page);
  otoscope(page);
  extractJelly(page);

  if (replaceEnemy(page)) {
    page = visitUrl("fight.php");
    runCombat();
  }

  lectureOnRelativity(page);
  while (
    availableAmount($item`murky potion`) > 0 &&
    currentRound() > 0 &&
    currentRound() < 5 &&
    lastMonster() !== $monster`sea cowboy`
  ) {
    if (haveSkill($skill`Ambidextrous Funkslinging`)) throwItems(bangA(), bangB());
    else throwItem(bangA());
  }
  if (
    (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
    itemAmount($item`sea lasso`) > 5 &&
    myLocation().environment === "underwater" &&
    get("lassoTrainingCount") < 6
  ) {
    throwItem($item`sea lasso`);
  }
  // A copied diver surfaces wherever the route is adventuring, and that
  // zone's logic would spend it on its own target. While the helmet chain is
  // short, kill it as a diver. The wreck has its own diver logic.
  if (
    currentRound() > 0 &&
    lastMonster() === $monster`unholy diver` &&
    diverHuntActive() &&
    myLocation() !== $location`The Wreck of the Edgar Fitzsimmons`
  ) {
    // Bounded at 20: taming spends a lasso at exactly that count.
    if (
      haveEquipped($item`sea cowboy hat`) &&
      haveEquipped($item`sea chaps`) &&
      itemAmount($item`sea lasso`) > 0 &&
      get("lassoTrainingCount") < 20
    ) {
      throwItem($item`sea lasso`);
    }
    killDiver(page);
    return;
  }

  byLocation(page);
  byMonster(page);
}
