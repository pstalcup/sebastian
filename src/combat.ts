import {
  abort,
  availableAmount,
  cliExecute,
  currentRound,
  equippedAmount,
  expectedDamage,
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
  Skill,
  visitUrl,
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
  BloodCubicZirconia,
  EverfullDarts,
  get,
  Macro,
  StompingBoots,
  set,
} from "libram";

import { swordOfSWords } from "./lib/familiar";
import {
  banishUsedAtYourLocation,
  isBanished,
  cloakeReady,
  cloakeZone,
  combatBan,
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
import { bczSweatReady } from "./lib/resources";
import { haveItem, highShiny, lowShiny, debug } from "./lib/state";

// The combat consult script. Ported from UnderTheSeaCCS.ash and the fight
// helpers of UnderTheSeaGlobals.ash onto libram macros; the run's CCS is
// "consult sebastian_combat.js".
//
// Each pass plans the rest of the fight from what is known now (the monster,
// the zone, gear, properties) and submits it as one macro. Checks the
// original made on the fight page ("is this skill offered?") become the
// macro's own hasskill and hascombatitem tests, and the fight simply stops
// running steps once it is over. Anything that swaps the monster (a re-roll,
// a backup, a waffle) ends the pass, and the next pass plans for the new
// monster, as the original re-entered itself through run_combat(). Yog-Urt
// and Shub's deleveling react to HP and stats round by round, so those submit
// one round's macro at a time.

/**
 * Stops the run from inside a fight, recording why for halfloop first. A throw
 * here would end only this consult, so this one still aborts.
 */
function stop(why: string): never {
  set("_lastScriptError", why);
  return abort(why);
}

const saber = $item`Fourth of May Cosplay Saber`;
const curveballOn = (monster: Monster) =>
  get("_curveballMonster") === monster && get("_curveballFightsLeft", 0) > 0;
const someFishCurveball = () => curveballOn($monster`some fish`);

/** The monster the pass is planning for. */
let foe: Monster = $monster.none;

/** A pass's macro, and whether it ends on something that swaps the monster. */
class Plan extends Macro {
  swapped = false;

  /** Cast and end the pass: the next pass plans for the new monster. */
  swap(step: Macro | string): this {
    this.step(step);
    this.swapped = true;
    return this;
  }

  /** Fish won't call over some fish, so Talk to Some Fish drops out against the fish phylum. */
  trySkill(...skills: (Skill | string)[]): this {
    const fish = foe.phylum === $phylum`fish`;
    return super.trySkill(...skills.filter((skill) => !fish || skill !== talkToFish));
  }
}

// ─── FREE KILLS AND RUNS ──────────────────────────────────────────────────────

/** The day's darts, as many throws as are left. */
function darts(): Macro {
  const macro = new Macro();
  if (!haveEquipped($item`Everfull Dart Holster`)) return macro;
  let skill = $skill`Darts: Throw at %part1`;
  if (EverfullDarts.currentPerks().includes("Butt awareness")) {
    const match = /(\d+):butt/.exec(get("_currentDartboard"));
    if (!match) return macro;
    skill = Skill.get(Number(match[1]));
  }
  for (let i = 0; i < get("_dartsLeft"); i++) macro.trySkill(skill);
  return macro;
}

/** Attempt a free kill. With drop, skip the ones that hurt item drops. */
function freeKill(drop: boolean): Macro {
  const macro = new Macro();
  if (freeMonster(foe)) return macro;
  const colosseum = myLocation() === $location`Mer-kin Colosseum`;
  if (highShiny()) {
    if (!colosseum) {
      for (let i = 0; i < get("_dartsLeft"); i++) {
        macro.trySkill($skill`Darts: Aim for the Bullseye`);
      }
      macro.trySkill($skill`Spit jurassic acid`);
    }
    return macro;
  }
  if (curveballOn(foe)) return macro;

  for (const skill of $skills`Spit jurassic acid, Assert your Authority, Club 'Em Back in Time, Darts: Aim for the Bullseye, BCZ: Sweat Bullets, Chest X-Ray, Shattering Punch, Gingerbread Mob Hit`) {
    const club = skill === $skill`Club 'Em Back in Time`;
    if (colosseum && !club) continue;
    if (club && ((!colosseum && !lowShiny()) || drop || get("_clubEmTimeUsed") >= 5)) continue;
    if (skill === $skill`BCZ: Sweat Bullets` && !bczSweatReady()) {
      continue;
    }
    macro.trySkill(skill);
  }

  for (const item of $items`shadow brick, groveling gravel`) {
    if (itemAmount(item) === 0) continue;
    if (item === $item`groveling gravel` && drop) continue;
    if (item === $item`shadow brick` && get("_shadowBricksUsed") === 13) continue;
    if (colosseum) continue;
    macro.tryItem(item);
  }

  if (saberForcesFree() > 0 && haveEquipped(saber)) {
    macro.if_($skill`Use the Force`, Macro.skill($skill`Use the Force`));
  }
  return macro;
}

/** Attempt a free run. With banish, banishing runs are allowed. */
function freeRunAny(banish: boolean): Macro {
  const macro = new Macro();
  if (curveballOn(foe)) return macro;
  const navel = get("_navelRunaways");
  if (haveEquipped($item`Greatest American Pants`) && (navel < 3 || (navel < 10 && highShiny()))) {
    macro.runaway();
  }
  if (myFamiliar() === $familiar`Pair of Stomping Boots` && StompingBoots.couldRunaway()) {
    macro.runaway();
  }

  const banishers = $skills`Snokebomb, Bowl a Curveball, Feel Hatred, Throw Latte on Opponent`;
  for (const skill of $skills`Spring Away, Bowl a Curveball, Creepy Grin, Throw Latte on Opponent, Release the Boots, Feel Hatred, Snokebomb`) {
    if (!banish && banishers.includes(skill)) continue;
    const snokebomb = skill === $skill`Snokebomb`;
    if (banish && snokebomb && banishUsedAtYourLocation($skill`Snokebomb`)) continue;
    if (
      snokebomb &&
      $locations`The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry`.includes(
        myLocation(),
      )
    ) {
      return macro;
    }
    // Spring Kick banishes first, then Spring Away runs.
    const cast =
      banish && skill === $skill`Spring Away`
        ? Macro.trySkill($skill`Spring Kick`).skill(skill)
        : Macro.skill(skill);
    macro.if_(skill, cast);
  }

  const banishItems = $items`anchor bomb, stuffed yam stinkbomb, handful of split pea soup`;
  for (const item of $items`glob of Blank-Out, peppermint parasol, anchor bomb, stuffed yam stinkbomb, handful of split pea soup, Mer-kin pinkslip, ink bladder`) {
    if (itemAmount(item) === 0) continue;
    if (!banish && banishItems.includes(item)) continue;
    if (item === $item`peppermint parasol` && get("parasolUsed") >= 3) continue;
    if (item === $item`Mer-kin pinkslip` && foe.phylum !== $phylum`mer-kin`) continue;
    macro.tryItem(item);
  }
  return macro;
}

/** freeRunAny, skipped for free fights. */
function freeRun(banish: boolean): Macro {
  return freeMonster(foe) ? new Macro() : freeRunAny(banish);
}

function bczGazeReady(): boolean {
  if (get("NCtoC", false)) return false;
  return (
    myBasestat($stat`submysticality`) - 40000 >
    BloodCubicZirconia.skillCost($skill`BCZ: Refracted Gaze`)
  );
}

// ─── FINISHING ────────────────────────────────────────────────────────────────

/**
 * Ends a live free fight: Saucestorm while affordable, then attacks for as
 * long as HP is safe. A free run source is the last resort only, since
 * spending one on a fight that costs no turn buys nothing. Aborts if the
 * fight is still live.
 */
function finishFreeFight(): Macro {
  const saucestorm = $skill`Saucestorm`;
  const safeHp = Math.ceil(expectedDamage()) + 1;
  const macro = new Macro();
  if (haveSkill(saucestorm)) {
    macro.while_(
      `hasskill ${saucestorm.id} && !mpbelow ${mpCost(saucestorm)}`,
      Macro.skill(saucestorm),
    );
  }
  // Out of MP is the usual way here, and a free fight dies to the weapon
  // fine; the old three swings left most of them for the free run below.
  macro.while_(`!hpbelow ${safeHp} && !pastround 20`, Macro.attack());
  macro.step(freeRunAny(false));
  for (let i = 0; i < 3; i++) macro.if_(`!hpbelow ${safeHp}`, Macro.runaway());
  return macro.abortWithWarning(`Could not finish or escape ${foe}. Finish the fight by hand.`);
}

/** Finish the enemy with Saucegeyser while MP lasts. */
function cleanUp(): Macro {
  const macro = new Macro();
  if (itemAmount($item`pulled red taffy`) > 0 && myLocation().environment === "underwater") {
    macro.tryItem($item`pulled red taffy`);
  }
  let round: Macro;
  if (haveSkill($skill`Saucegeyser`) && foe !== $monster`Yog-Urt, Elder Goddess of Hatred`) {
    round = Macro.skill($skill`Saucegeyser`);
  } else {
    round = Macro.trySkill($skill`Stuffed Mortar Shell`).skill($skill`Saucestorm`);
  }
  // One cast, then more while there's MP for them.
  macro.step(round).while_("!mpbelow 24", round);
  // Out of MP with a free fight still live: finish it without a banish.
  if (freeMonster(foe)) macro.step(finishFreeFight());
  return macro;
}

// ─── FIGHT OPENERS ────────────────────────────────────────────────────────────

const force = $skill`Use the Force`;

/** The mimic egg, capped at 11 a day and 50 familiar experience. */
function layMimicEgg(): Macro {
  if (
    myFamiliar() !== $familiar`Chest Mimic` ||
    get("_mimicEggsObtained") >= 11 ||
    $familiar`Chest Mimic`.experience < 50
  ) {
    return new Macro();
  }
  return Macro.trySkill($skill`%fn, lay an egg`);
}

/** A Force that ends the fight, where one is planned for this monster. */
function forceOn(target: Monster, ready: boolean, why: string, first = new Macro()): Macro {
  if (foe !== target || !ready || !haveEquipped(saber)) return new Macro();
  debug(`Use the Force planned -> ${why}`);
  return Macro.if_(force, first.skill(force));
}

/** The planned Forces: the diver (with its insurance egg), the healer, the sea cow, the researcher. */
function forces(): Macro {
  const seaCowReady =
    seaCowNeeded() &&
    forcesAfterHealer() > 0 &&
    !(haveEquipped($item`pro skateboard`) && !get("_epicMcTwistUsed")) &&
    !(
      $location`The Coral Corral`.turnsSpent <= 1 &&
      itemAmount($item`sea leather`) === 0 &&
      availableAmount($item`sea cowboy hat`) === 0
    );
  const researcherReady =
    (itemAmount($item`Mer-kin killscroll`) === 0 || itemAmount($item`Mer-kin healscroll`) === 0) &&
    saberForcesFree() > 0;
  return new Macro()
    .step(
      forceOn(
        $monster`unholy diver`,
        diverForceReady(),
        `unholy diver (rivets ${itemAmount($item`rusty rivet`)}/8)`,
        layMimicEgg(),
      ),
    )
    .step(
      forceOn(
        $monster`Mer-kin healer`,
        prayerbeadsShort() && forcesAfterDiver() > 0,
        "Mer-kin healer (prayerbeads)",
      ),
    )
    .step(forceOn($monster`sea cow`, seaCowReady, "sea cow"))
    .step(forceOn($monster`Mer-kin researcher`, researcherReady, "Mer-kin researcher (scrolls)"));
}

/** +50% item drops for the fight, in the zones ground purely for a drop. */
function becomeBat(): Macro {
  if (
    !cloakeReady() ||
    !cloakeZone(myLocation()) ||
    haveEffect($effect`Bat-Adjacent Form`) > 0 ||
    !haveEquipped($item`vampyric cloake`)
  ) {
    return new Macro();
  }
  return Macro.trySkill($skill`Become a Bat`);
}

/** +200% item on the diver itself, three a day, before anything ends the fight. */
function otoscope(): Macro {
  if (
    (diverForceReady() && haveEquipped(saber)) ||
    get("_otoscopeUsed") >= 3 ||
    !haveEquipped($item`Lil' Doctor™ bag`) ||
    foe !== $monster`unholy diver` ||
    diverPartsComplete()
  ) {
    return new Macro();
  }
  return Macro.trySkill($skill`Otoscope`);
}

/** Stench jelly off any stench monster, for one forced noncombat. */
function extractJelly(): Macro {
  const stench = `${foe.attackElement}` === "stench" || `${foe.defenseElement}` === "stench";
  if (myFamiliar() !== $familiar`Space Jellyfish` || !stench) return new Macro();
  if (itemAmount($item`stench jelly`) > 0) return new Macro();
  return Macro.trySkill($skill`Extract Jelly`);
}

/** At the wreck, re-roll anything but the diver while its parts are owed. */
function replaceEnemy(): Macro | undefined {
  if (myLocation() !== $location`The Wreck of the Edgar Fitzsimmons`) return undefined;
  if (freeMonster(foe) || foe === $monster`unholy diver` || diverPartsComplete()) return undefined;
  if (macroReady() && haveSkill($skill`Macrometeorite`)) {
    debug("Macrometeorite: re-rolling the monster");
    return Macro.skill($skill`Macrometeorite`);
  }
  if (gloveReady() && haveEquipped($item`Powerful Glove`)) {
    debug("CHEAT CODE: re-rolling the monster");
    return Macro.skill($skill`CHEAT CODE: Replace Enemy`);
  }
  return undefined;
}

/** Chain a free copy of the diver or the sea cow while their drops are owed. */
function lectureOnRelativity(): Macro {
  if (!professorReady() || myFamiliar() !== $familiar`Pocket Professor`) return new Macro();
  const wanted =
    (foe === $monster`unholy diver` && !diverPartsComplete()) ||
    (foe === $monster`sea cow` && seaCowNeeded());
  // The skill refuses to fire below 2 adventures, even against a free fight.
  if (!wanted || myAdventures() < 2) return new Macro();
  return Macro.trySkill($skill`lecture on relativity`);
}

/** Feel Nostalgic, on a fight being won, for a copied table still owed something. */
function feelNostalgic(): Macro {
  if (!haveSkill($skill`Feel Nostalgic`) || get("_feelNostalgicUsed") >= 3) return new Macro();
  // A Force would forfeit the win and the charge with it.
  if (saberForcesFree() > 0 && haveEquipped(saber)) return new Macro();
  const copied = get("lastCopyableMonster");
  const wanted =
    (copied === $monster`unholy diver` && !diverPartsComplete()) ||
    (copied === $monster`sea cow` && seaCowNeeded()) ||
    (copied === $monster`Mer-kin monitor` && cheatsheetsNeeded());
  if (!wanted || foe === copied) return new Macro();
  return Macro.trySkill($skill`Feel Nostalgic`);
}

// ─── YOG-URT AND SHUB ─────────────────────────────────────────────────────────

const DELEVELERS = $items`Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell`;
const YOG_HEALING = $items`sea gel, Mer-kin healscroll, waterlogged scroll of healing, soggy used band-aid, New Age healing crystal`;
const elixir = $item`Doc Galaktik's Homeopathic Elixir`;
const unguent = $item`Doc Galaktik's Pungent Unguent`;

/** _lastCombatActions lists throws as "it<id>;". */
function itemUsedThisCombat(item: Item): boolean {
  return get("_lastCombatActions").includes(`it${item.id};`);
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
  if (!found) stop("Yog-Urt needs a deleveler and none is left.");
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

/** One round under More Like a Suckrament. Nothing thrown may damage Yog-Urt. */
function yogSuckramentRound(needHeal: boolean): Macro {
  const heal = yogHealing();
  if (needHeal && heal !== $item.none) {
    const deleveler = yogDeleveler();
    return deleveler !== $item.none ? Macro.item([deleveler, heal]) : Macro.item(heal);
  }
  if (!needHeal && yogDeleveler() !== $item.none) return Macro.item(yogDeleveler());
  if (yogDocPair()) return Macro.item([elixir, unguent]);
  if (heal !== $item.none) return Macro.item(heal);
  return stop(
    "Yog-Urt: nothing harmless left to throw under More Like a Suckrament. Finish the fight by hand.",
  );
}

/** Heal through More Like a Suckrament without touching Yog-Urt, then kill her. One round per macro. */
function yogUrtFight(): void {
  const beads = Math.min(equippedAmount($item`Mer-kin prayerbeads`), 3);
  let stuck = 0;
  while (currentRound() > 0 && haveEffect($effect`More Like a Suckrament`) > 0) {
    if (currentRound() > 12) {
      stop("Yog-Urt: More Like a Suckrament is still up past round 12. Finish the fight by hand.");
    }
    if (stuck >= 3) stop("Yog-Urt: throws are not advancing the round. Finish the fight by hand.");
    const round = currentRound();
    // She hits first each round; past the counted heals the action only fills the round.
    yogSuckramentRound(round <= YOG_HEALINGS_NEEDED[beads]).submit();
    stuck = currentRound() === round ? stuck + 1 : 0;
  }
  let mortared = false;
  const mortar = $skill`Stuffed Mortar Shell`;
  const saucestorm = $skill`Saucestorm`;
  for (let guard = 0; currentRound() > 0 && guard < 40; guard++) {
    // Her own hits run up to about 11 once the effect is gone.
    let round: Macro;
    if (myHp() < 15 && yogDocPair()) {
      round = Macro.item([elixir, unguent]);
    } else if (myHp() < 15 && yogHealing() !== $item.none) {
      round = Macro.item(yogHealing());
    } else if (!mortared && haveSkill(mortar) && myMp() >= mpCost(mortar)) {
      // Its damage lands next round; a recast while it is pending does nothing.
      round = Macro.skill(mortar);
      mortared = true;
    } else if (haveSkill(saucestorm) && myMp() >= mpCost(saucestorm)) {
      round = Macro.skill(saucestorm);
    } else {
      round = Macro.attack();
    }
    round.submit();
  }
}

/** Every ordered pair of delevelers, for Shub's double throws. */
const DELEVELER_PAIRS: [Item, Item][] = DELEVELERS.flatMap((a) =>
  DELEVELERS.map((b): [Item, Item] => [a, b]),
);

/** Shub-Jigguwatt: delevel with pairs of throws until her stats are in reach, then swing. */
function shubFight(): void {
  const lasso = $item`sea lasso`;
  const statsTooHigh = () =>
    myBasestat($stat`Moxie`) + 10 < monsterAttack() ||
    myBasestat($stat`Muscle`) - 30 < monsterDefense();
  if (haveEffect($effect`Null Afternoon`) === 0) {
    if (itemAmount($item`crayon shavings`) >= 8) {
      const shavings: [Item, Item] = [$item`crayon shavings`, $item`crayon shavings`];
      Macro.item(shavings, shavings, shavings, shavings).submit();
    } else {
      while (currentRound() > 0 && delevelers() > 0 && statsTooHigh()) {
        const pair = DELEVELER_PAIRS.find(
          ([a, b]) =>
            itemAmount(a) > 0 &&
            itemAmount(b) > 0 &&
            !(a === b && (itemAmount(a) < 2 || b === lasso)) &&
            !((a === lasso || b === lasso) && itemUsedThisCombat(lasso)),
        );
        if (pair) Macro.item(pair).submit();
        const lassoSpent = itemAmount(lasso) > 0 && itemUsedThisCombat(lasso);
        if (delevelers() === 1 || (lassoSpent && delevelers() === 2)) {
          const singles =
            $items`Mer-kin mouthsoap, crayon shavings, table tennis ball, sea cowbell`.filter(
              (item) => itemAmount(item) === 1,
            );
          if (singles.length > 0) Macro.item(...singles).submit();
          if (delevelers() === 1 && itemAmount(lasso) > 0) break;
        }
        if (!pair) break;
      }
    }
  }
  if (currentRound() > 0) Macro.while_("!pastround 30", Macro.attack()).submit();
}

// ─── ZONES ────────────────────────────────────────────────────────────────────

// The Sword of S Words skill, newer than eslint-plugin-libram's data.
// eslint-disable-next-line libram/verify-constants
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
const someFish = $monster`some fish`;

/** The scroll hints the dreadscroll wants, thrown at mer-kin. */
function throwScrollHints(): Macro {
  const macro = new Macro();
  if (get("dreadScroll2") === 0) {
    for (let i = 0; i < itemAmount($item`Mer-kin healscroll`); i++) {
      macro.tryItem($item`Mer-kin healscroll`);
    }
  }
  if (get("dreadScroll5") === 0 && foe.phylum === $phylum`mer-kin`) {
    for (let i = 0; i < itemAmount($item`Mer-kin killscroll`); i++) {
      macro.tryItem($item`Mer-kin killscroll`);
    }
  }
  return macro;
}

function knobAlleyPantry(plan: Plan): void {
  if (someFishCurveball()) plan.trySkill(talkToFish).step(cleanUp());
  if (!freeMonster(foe)) {
    plan.step(freeRun(false));
    if (
      haveEquipped($item`Greatest American Pants`) ||
      haveEquipped($item`navel ring of navel gazing`)
    ) {
      plan.runaway();
    }
  }
  plan
    .trySkill(talkToFish, $skill`Prepare to reanimate your Foe`)
    .step(darts())
    .step(cleanUp());
}

function madnessBakery(plan: Plan): void {
  if (!haveSkill(screech)) stop("Need patriotic eagle");
  plan.trySkill(screech, talkToFish).step(freeKill(false)).step(cleanUp());
}

function shadowRift(plan: Plan): void {
  if (myPrimestat() === $stat`Moxie`) plan.step("pickpocket");
  if (
    get("_seadentWaveUsed") &&
    get("lassoTrainingCount") < 20 &&
    itemAmount($item`sea lasso`) > 0
  ) {
    plan.tryItem($item`sea lasso`);
  }
  if (foe === $monster`shadow slab`) {
    if (itemAmount($item`Septapus summoning charm`) > 0) {
      plan.tryItem($item`Septapus summoning charm`);
    }
    plan.trySkill($skill`Swoop like a Bat`, $skill`Perpetrate Mild Evil`);
    // Douse Foe exists only while the Liquidizer is worn.
    if (haveEquipped($item`Flash Liquidizer Ultra Dousing Accessory`) && !get("_douseFoeSuccess")) {
      for (let i = get("_douseFoeUses"); i < 3; i++) {
        plan.if_("!pastround 24", Macro.trySkill($skill`Douse Foe`));
      }
    }
  }
  if (foe === $monster`tumbleweed`) stop("Unexpected mob encountered in shadow rift");
  // Talk to the fish once the pickpocket is spent, or while scales are short.
  if (myPrimestat() !== $stat`Moxie` || availableAmount($item`pristine fish scale`) < 6) {
    plan.trySkill(talkToFish);
  }
  plan.step(darts()).step(cleanUp());
}

function octopusGarden(plan: Plan): void {
  const eagle = $familiar`Patriotic Eagle`;
  if (haveEffect($effect`Citizen of a Zone`) === 0 && myFamiliar() === eagle && !highShiny()) {
    plan.trySkill($skill`%fn, let's pledge allegiance to a Zone`);
  }
  if (foe === $monster`Neptune flytrap`) {
    if (haveEffect($effect`Everything Looks Red, White and Blue`) === 0 && myFamiliar() === eagle) {
      plan.trySkill($skill`%fn, fire a Red, White and Blue Blast`);
    }
    if (myFamiliar() === swordOfSWords) plan.trySkill(killALot);
    plan.step(darts());
    if (
      (haveEquipped($item`McHugeLarge left pole`) ||
        availableAmount($item`McHugeLarge left pole`) === 0) &&
      !get("trackedMonsters").includes("Neptune flytrap")
    ) {
      plan.trySkill(...sniffs);
    }
    plan.step(freeKill(true)).step(cleanUp());
  } else if (!freeMonster(foe)) {
    if (
      haveEquipped($item`spring shoes`) &&
      !banishUsedAtYourLocation($skill`Spring Kick`) &&
      highShiny()
    ) {
      plan.trySkill($skill`Spring Kick`, talkToFish);
    } else {
      plan.step(freeRun(true));
    }
  }
  plan.step(cleanUp());
}

function wreck(plan: Plan): void {
  const diver = $monster`unholy diver`;
  if (foe !== diver && !freeMonster(foe)) {
    plan.step(freeRun(true));
    if (foe === $monster`Mer-kin scavenger`) {
      if (haveEquipped($item`spring shoes`)) plan.trySkill($skill`Spring Kick`);
      else plan.trySkill(lightningBolt);
      plan.trySkill(talkToFish);
    }
    if (foe === $monster`mine crab`) plan.trySkill($skill`Heartstone: %banish`, lightningBolt);
  }
  if (foe === diver) {
    if (get("beGregariousCharges") > 0 && get("beGregariousMonster") !== $monster`unholy diver`) {
      plan.trySkill($skill`Be Gregarious`);
    }
    if (myFamiliar() === $familiar`Melodramedary`) plan.trySkill($skill`%fn, spit on them!`);
    if (haveEquipped($item`pro skateboard`)) plan.trySkill(mcTwist);
    if (haveEquipped(saber)) plan.trySkill(force);
  }
  plan.step(feelNostalgic()).step(darts()).step(freeKill(true)).step(cleanUp());
}

function pearlZone(plan: Plan): void {
  // Lasso training only counts with both trainer pieces worn.
  if (haveEquipped($item`sea cowboy hat`) && haveEquipped($item`sea chaps`)) {
    plan.tryItem($item`sea lasso`);
  }
  const miner = $monster`Mer-kin miner`;
  const squid = $monster`giant squid`;
  const tippler = $monster`Mer-kin tippler`;
  if (foe === miner) plan.step("pickpocket").trySkill($skill`Swoop like a Bat`);
  // Sniffing feeds the step-4 pearl hunt, which is over once the corral has started.
  const tracked = get("trackedMonsters");
  if (
    ((foe === squid && !tracked.includes("giant squid")) ||
      (foe === tippler && !tracked.includes("Mer-kin tippler"))) &&
    $location`The Coral Corral`.turnsSpent === 0
  ) {
    plan.trySkill(...sniffs);
  }
  if (freeMonster(foe)) plan.trySkill(gaze).step(cleanUp());
  if (highShiny() && foe === $monster`Anemone combatant`) plan.trySkill(lightningBolt);
  if (someFishCurveball()) plan.trySkill(talkToFish).step(cleanUp());
  if (
    (foe !== squid || itemAmount($item`comb jelly`) > 0) &&
    foe !== tippler &&
    (foe !== miner || itemAmount($item`Mer-kin digpick`) > 0)
  ) {
    if (haveItem($item`cosmic bowling ball`)) plan.step(freeRun(true));
    plan.trySkill(talkToFish).step(darts()).step(freeRun(true)).step(cleanUp());
  } else {
    plan.step(freeKill(true));
  }
  plan.step(cleanUp());
}

function outpost(plan: Plan): void {
  if (myPath().id === 0 && get("lassoTrainingCount") < 20) plan.tryItem($item`sea lasso`);
  if (foe === $monster`time cop`) {
    plan.step(darts()).step(cleanUp());
    return;
  }
  const fightsLeft = get("_monsterHabitatsFightsLeft");
  const recalled = get("_monsterHabitatsRecalled");
  if (foe === $monster`Black Crayon Golem`) {
    if (fightsLeft === 0 && haveEffect($effect`Everything Looks Purple`) === 0 && recalled === 2) {
      plan.trySkill($skill`Blow the Purple Candle!`);
    } else if (fightsLeft === 0 && recalled < 2) {
      plan.trySkill(recallHabitats);
    }
    if (fightsLeft === 0 && recalled >= 2 && myFamiliar() === $familiar`Patriotic Eagle`) {
      plan.trySkill(screech);
    }
    plan.step(darts()).step(cleanUp());
    return;
  }
  const scaleHunt =
    myFamiliar() !== swordOfSWords &&
    (highShiny() || !haveItem($item`closed-circuit pay phone`) || lowShiny()) &&
    availableAmount($item`pristine fish scale`) < 6 &&
    !freeMonster(foe);
  const healer = $monster`Mer-kin healer`;
  const thief = foe === $monster`Mer-kin burglar` || foe === $monster`Mer-kin raider`;
  const backupReady = get("_backUpUses") < 7 && haveEquipped($item`backup camera`);

  if ($location`The Mer-Kin Outpost`.turnsSpent < 24 || get("merkinLockkeyMonster") !== null) {
    // Back up to the Black Crayon Golem if available; the next pass fights it.
    // Never over a fight that is already free, or over the lockkey monster
    // whose drop the hunt is waiting for: neither swap saves a turn.
    if (
      !freeMonster(foe) &&
      foe !== get("merkinLockkeyMonster") &&
      fightsLeft === 0 &&
      recalled >= 2 &&
      backupReady &&
      get("lastCopyableMonster") === $monster`Black Crayon Golem`
    ) {
      plan.swap(Macro.skill(backUp));
      return;
    }
    if (scaleHunt) plan.trySkill(talkToFish).step(freeKill(true)).step(cleanUp());
    if (foe === healer && itemAmount($item`Mer-kin prayerbeads`) < 2) {
      if (haveEquipped($item`Baseball Diamond`) || someFishCurveball()) plan.trySkill(talkToFish);
      plan.step(freeKill(true));
      if (backupReady) {
        plan.swap(Macro.skill(backUp));
        return;
      }
      plan.step(freeRun(false)).step(cleanUp());
    } else if (thief) {
      if (
        (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
        myFamiliar() === swordOfSWords &&
        !banishUsedAtYourLocation($skill`Sea *dent: Throw a Lightning Bolt`)
      ) {
        plan.trySkill(lightningBolt);
      }
      plan.step(freeRun(true));
    }
    plan.step(freeKill(false)).step(cleanUp());
  } else {
    if (scaleHunt) plan.trySkill(talkToFish).step(freeKill(true)).step(cleanUp());
    if (thief) plan.step(freeRun(true));
    plan
      .step(freeKill(foe === healer && itemAmount($item`Mer-kin prayerbeads`) < 2))
      .step(cleanUp());
  }
}

function cyberzone(plan: Plan): void {
  if ($monsters`eye in the darkness, slithering thing`.includes(foe)) {
    plan.trySkillRepeat($skill`Throw Cyber Rock`);
  } else {
    plan.trySkill(lightningBolt);
  }
}

function banishOrRun(): Macro {
  const ban = combatBan();
  return ban !== $skill.none ? Macro.trySkill(ban) : freeRun(true);
}

function corral(plan: Plan): void {
  const seahorse = $monster`wild seahorse`;
  const rustler = $monster`Mer-kin rustler`;
  const cow = $monster`sea cow`;
  const cowboy = $monster`sea cowboy`;
  // A free wanderer (the Kramco's goblins burn delay here) is just killed:
  // no run, banish, waffle, backup, McTwist or club charge spent on it.
  if (freeMonster(foe)) {
    plan.step(cleanUp());
    return;
  }
  const readyToTame =
    itemAmount($item`sea cowbell`) >= 3 &&
    itemAmount($item`sea lasso`) >= 1 &&
    get("lassoTrainingCount") === 20;
  if (foe === seahorse && readyToTame) {
    plan
      .item([$item`sea cowbell`, $item`sea cowbell`], [$item`sea cowbell`, $item`sea lasso`])
      .abortWithWarning("For some reason seahorse wasn't tamed, check that out");
    return;
  }
  if (
    highShiny() &&
    get("swordOfSWordsMonster") !== $monster`sea cow` &&
    myFamiliar() === swordOfSWords &&
    foe === cow
  ) {
    plan.trySkill(killALot).step(cleanUp());
  }
  if (!get("_epicMcTwistUsed") && haveEquipped($item`pro skateboard`)) {
    if (haveEquipped($item`backup camera`)) {
      if (foe === rustler) plan.trySkill($skill`Spring Kick`);
      plan.trySkill(backUp, gaze, mcTwist);
    } else if (foe.phylum !== $phylum`fish`) {
      if (foe === rustler) plan.trySkill($skill`Spring Kick`);
      plan.trySkill(talkToFish, gaze, mcTwist).tryItem($item`pulled yellow taffy`);
    } else if (foe === seahorse) {
      plan.runaway();
    } else if (itemAmount($item`software glitch`) > 0) {
      plan
        .item($item`software glitch`)
        .ifNot($monster`bugged bugbear`, Macro.abortWithWarning("Software glitch failed"))
        .trySkill(gaze, mcTwist)
        .tryItem($item`pulled yellow taffy`);
    }
    plan.step(freeKill(true)).step(cleanUp());
  } else if (readyToTame) {
    if (foe.phylum === $phylum`plant`) plan.trySkill($skill`Tear Away your Pants!`);
    if (get("seahorseName") === "") {
      const cowGone = isBanished($monster`sea cow`);
      const cowboyGone = isBanished($monster`sea cowboy`);
      const rustlerGone = isBanished($monster`Mer-kin rustler`);
      // Fewer than two of the three banished: run from or banish this one.
      if (
        (!cowGone && !cowboyGone) ||
        (!rustlerGone && !cowboyGone) ||
        (!cowGone && !rustlerGone)
      ) {
        if (foe === rustler && someFishCurveball()) {
          plan.trySkill(talkToFish).if_(someFish, cleanUp());
        }
        plan.step(freeRun(true));
        if (foe === rustler) {
          if (haveSkill($skill`Heartstone: %banish`) && get("heartstoneBanishUnlocked")) {
            plan.trySkill($skill`Heartstone: %banish`);
          }
        } else if (foe === cowboy || foe === cow) {
          plan.trySkill(lightningBolt);
        }
      }
    }
    if (itemAmount($item`waffle`) > 0 && !get("_lastCombatActions").includes("it11311")) {
      // The waffle swaps the monster; the next pass plans for the new one.
      plan.swap(Macro.item($item`waffle`));
      return;
    }
    if (someFishCurveball()) plan.trySkill(talkToFish).if_(someFish, cleanUp());
    plan.step(freeRun(false)).step(freeKill(false)).step(cleanUp());
  } else {
    if (foe === seahorse) plan.runaway();
    else if (foe === rustler) plan.step(banishOrRun());
    else if (foe === cow && doneWithSeaCow()) plan.step(banishOrRun());
    else if (foe === cowboy && doneWithCowboy()) plan.step(banishOrRun());
    // The fight is being killed from here on: the one safe moment for a
    // Feel Nostalgic charge on the cow's table.
    plan.step(feelNostalgic());
    // Club 'Em Across the Battlefield does nothing once a noncombat has
    // already been forced into a combat.
    if (
      haveEquipped($item`legendary seal-clubbing club`) &&
      get("_clubEmBattlefieldUsed") < 5 &&
      !get("NCtoC", false)
    ) {
      plan.trySkill(clubBattlefield);
    }
    plan.step(cleanUp());
  }
}

function abyss(plan: Plan): void {
  if (
    (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
    itemAmount($item`sea lasso`) > 1 &&
    get("lassoTrainingCount") < 20 &&
    haveEquipped($item`sea cowboy hat`)
  ) {
    plan.tryItem($item`sea lasso`);
  }
  if (foe === $monster`Peanut` && get("lastColosseumRoundWon") < 15) {
    const waffles = availableAmount($item`waffle`);
    if (
      haveItem($item`august scepter`) &&
      haveItem($item`2002 Mr. Store Catalog`) &&
      haveSkill($skill`Just the Facts`) &&
      haveFamiliar($familiar`Patriotic Eagle`) &&
      (waffles > 1 || (waffles === 1 && get("seahorseName") !== ""))
    ) {
      plan.swap(Macro.item($item`waffle`));
    } else {
      plan.step(cleanUp());
    }
    return;
  }
  if (freeMonster(foe)) {
    plan.step(cleanUp());
    return;
  }
  const habitats = $monsters`slithering thing, eye in the darkness`;
  if (
    itemAmount($item`Spooky VHS Tape`) > 0 &&
    get("spookyVHSTapeMonster") === null &&
    get("momSeaMonkeeProgress") < 36 &&
    [...habitats, $monster`school of many`].includes(foe)
  ) {
    plan.tryItem($item`Spooky VHS Tape`);
  }
  if (
    get("_monsterHabitatsRecalled") !== 3 &&
    get("_monsterHabitatsFightsLeft") === 0 &&
    !highShiny() &&
    (haveItem($item`server room key`) || $location`The Mer-Kin Outpost`.turnsSpent < 29) &&
    habitats.includes(foe)
  ) {
    plan.trySkill(recallHabitats);
  }
  if (foe === $monster`school of many`) {
    plan.trySkill(lightningBolt);
    for (let i = 0; i < 4; i++) plan.trySkill($skill`Garbage Nova`);
  }
  plan.step(freeKill(false)).step(cleanUp());
}

function school(plan: Plan): void {
  const club =
    haveEquipped($item`legendary seal-clubbing club`) && get("_clubEmBattlefieldUsed") < 5;
  const forced = get("NCtoC", false);
  if (freeMonster(foe)) {
    if (!forced) plan.trySkill(gaze);
    if (club && !forced) plan.trySkill(clubBattlefield);
    else plan.step(cleanUp());
  } else if ($monsters`Mer-kin teacher, Mer-kin punisher, Mer-kin monitor`.includes(foe)) {
    if (
      haveEquipped($item`spring shoes`) &&
      !banishUsedAtYourLocation($skill`Spring Kick`) &&
      ((foe === $monster`Mer-kin teacher` && itemAmount($item`Mer-kin bunwig`) > 0) ||
        (foe === $monster`Mer-kin punisher` && itemAmount($item`Mer-kin mouthsoap`) > 0))
    ) {
      plan.trySkill($skill`Spring Kick`);
    }
    // Backing up throws this monster away, so only when its drop is no
    // longer wanted: the same bunwig and mouthsoap test as the Spring Kick,
    // and the monitor while cheatsheets are owed.
    const wanted =
      (foe === $monster`Mer-kin teacher` && itemAmount($item`Mer-kin bunwig`) === 0) ||
      (foe === $monster`Mer-kin punisher` && itemAmount($item`Mer-kin mouthsoap`) === 0) ||
      (foe === $monster`Mer-kin monitor` && cheatsheetsNeeded());
    if (
      !wanted &&
      freeMonster(get("lastCopyableMonster") ?? $monster.none) &&
      get("_backUpUses") < 11 &&
      haveEquipped($item`backup camera`)
    ) {
      // The original followed the backup with the gaze and the club against
      // the copy; the next pass plans the copy's fight instead.
      plan.swap(Macro.skill(backUp));
      return;
    }
  }
  // The kill path from here on: the safe spot for a Feel Nostalgic charge
  // on the monitor's cheatsheet table.
  plan.step(feelNostalgic());
  if (bczGazeReady() && !forced) {
    plan.trySkill(talkToFish);
    if (itemAmount($item`Mer-kin cheatsheet`) < 10) plan.trySkill(gaze);
  }
  plan.step(freeKill(true)).step(cleanUp());
}

function library(plan: Plan): void {
  if (freeMonster(foe)) {
    if (bczGazeReady()) plan.trySkill(gaze);
    plan.step(cleanUp());
  }
  const short = (item: Item) => itemAmount(item) === 0;
  if (get("merkinVocabularyMastery") >= 90) {
    plan.step(throwScrollHints());
    if (freeMonster(foe)) {
      if (bczGazeReady()) plan.trySkill(gaze);
    } else {
      if (short($item`Mer-kin knucklebone`)) {
        if (bczGazeReady()) plan.trySkill(talkToFish, gaze);
      } else if (foe === $monster`Mer-kin alphabetizer`) {
        plan.trySkill($skill`Spring Kick`);
      } else if (foe === $monster`Mer-kin drifter`) {
        plan.step(freeRun(true));
      }
      plan.step(freeKill(true)).step(cleanUp());
    }
  } else if (
    // Not over a fight that is already free: that swap saves no turn.
    !freeMonster(foe) &&
    freeMonster(get("lastCopyableMonster") ?? $monster.none) &&
    get("_backUpUses") < 11 &&
    haveEquipped($item`backup camera`)
  ) {
    plan.swap(Macro.skill(backUp));
    return;
  } else {
    if (
      bczGazeReady() &&
      $items`Mer-kin killscroll, Mer-kin healscroll, Mer-kin worktea, Mer-kin knucklebone`.some(
        short,
      )
    ) {
      plan.trySkill(talkToFish, gaze);
    }
    plan.step(freeKill(true)).step(cleanUp());
  }
  plan.step(cleanUp());
}

function gymnasium(plan: Plan): void {
  plan.step(throwScrollHints());
  if (get("skateParkStatus") === "war") {
    plan.trySkill($skill`Launch spikolodon spikes`, $skill`McHugeLarge Avalanche`);
  }
  if (freeMonster(foe)) {
    if (bczGazeReady()) plan.trySkill(gaze);
  } else {
    plan.step(freeRun(true)).step(freeKill(false));
  }
  plan.step(cleanUp());
}

/**
 * Colosseum rounds need wins, so this drains free kills and never Uses the
 * Force. A champion's specials take hold from round 2, so one Saucegeyser
 * must kill it; when it can't, leave rather than lose.
 */
function colosseum(plan: Plan): void {
  if (foe.boss && haveSkill($skill`Saucegeyser`)) {
    // championCheck() reads _sebChampionRanEst to stop a rerun before the turn.
    // The round count lets it tell a cast that killed from one that didn't.
    const ranEst = `${geyserLowRoll()}:${get("lastColosseumRoundWon")}`;
    if (geyserLowRoll() < monsterHp()) {
      set("_sebChampionRanEst", ranEst);
      let why =
        `SEB: ${foe} has ${monsterHp()} HP and one Saucegeyser is estimated at ` +
        `${geyserLowRoll()}. Raise Mysticality or spell damage, or fight it by hand, then rerun.`;
      freeRunAny(false).runaway().submit();
      if (currentRound() > 0) why += " The fight is still in progress: finish it by hand.";
      print(why, "red");
      stop(why);
    }
    // Recorded before the cast: a kill ends the fight and the run moves on.
    set("_sebChampionRanEst", ranEst);
    plan.skill($skill`Saucegeyser`);
  } else {
    plan.step(freeKill(false));
  }
  if (get("lastColosseumRoundWon") < 15) plan.step(cleanUp());
}

/** The old single-door temple, for aftercore bosses. */
function temple(plan: Plan): void {
  if (foe === $monster`Yog-Urt, Elder Goddess of Hatred`) {
    if (myMaxhp() > 311) {
      stop("Too much HP to beat Yogurt (need < 312 after debuff) — check what's granting HP");
    }
    const opener =
      availableAmount($item`crayon shavings`) >= 9
        ? $item`crayon shavings`
        : $item`table tennis ball`;
    plan.item(
      [opener, $item`Mer-kin healscroll`],
      [$item`Mer-kin mouthsoap`, $item`waterlogged scroll of healing`],
      $item`sea gel`,
    );
    if (equippedAmount($item`Mer-kin prayerbeads`) < 3) plan.item($item`New Age healing crystal`);
    if (equippedAmount($item`Mer-kin prayerbeads`) < 2) plan.item($item`soggy used band-aid`);
    plan.step(cleanUp()).attack().attack().attack();
  }
  if (foe === $monster`Shub-Jigguwatt, Elder God of Violence`) {
    const shavings: [Item, Item] = [$item`crayon shavings`, $item`crayon shavings`];
    plan.item(shavings, shavings, shavings, shavings).while_("!pastround 30", Macro.attack());
  }
  if (foe === $monster`Dad Sea Monkee`) {
    cliExecute("dad");
    stop(
      "execute spells in the above order, can use shrap instead of toynado and volcanometeor instead of awesome balls of fire",
    );
  }
}

function byLocation(plan: Plan): void {
  const location = myLocation();
  if (location === $location`The Skeleton Store`) {
    plan.step(cleanUp());
  } else if (
    $locations`The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry`.includes(
      location,
    )
  ) {
    knobAlleyPantry(plan);
  } else if (location === $location`Madness Bakery`) {
    madnessBakery(plan);
  } else if (location === $location`Shadow Rift (The Misspelled Cemetary)`) {
    shadowRift(plan);
  } else if (location === $location`An Octopus's Garden`) {
    octopusGarden(plan);
  } else if (location === $location`The Wreck of the Edgar Fitzsimmons`) {
    wreck(plan);
  } else if ($locations`The Marinara Trench, The Dive Bar, Anemone Mine`.includes(location)) {
    pearlZone(plan);
  } else if (location === $location`The Mer-Kin Outpost`) {
    outpost(plan);
  } else if (location === $location`The Skate Park`) {
    plan.attack().attack().step(cleanUp());
  } else if (location === $location`Cyberzone 1`) {
    cyberzone(plan);
  } else if (location === $location`The Coral Corral`) {
    corral(plan);
  } else if (location === $location`The Caliginous Abyss`) {
    abyss(plan);
  } else if (location === $location`Mer-kin Elementary School`) {
    school(plan);
  } else if (location === $location`Mer-kin Library`) {
    library(plan);
  } else if (location === $location`Mer-kin Gymnasium`) {
    gymnasium(plan);
  } else if (location === $location`Mer-kin Colosseum`) {
    colosseum(plan);
  } else if (location === $location`Mer-kin Temple (Center Door)`) {
    // Raise Backup Dancer is a Pastamancer skill and only a damage boost here.
    plan.trySkill($skill`Raise Backup Dancer`, $skill`Raise Backup Dancer`).step(cleanUp());
  } else if (location === $location`Mer-kin Temple`) {
    temple(plan);
  }
}

function byMonster(plan: Plan): void {
  if (foe === $monster`Black Crayon Golem`) {
    if (get("_monsterHabitatsFightsLeft") === 0 && get("_monsterHabitatsRecalled") < 3) {
      plan.trySkill(recallHabitats);
    }
    // trackedMonsters records mafia's own capitalisation, so compare lowercased.
    if (!get("trackedMonsters").toLowerCase().includes("black crayon golem:mchugelarge slash")) {
      plan.trySkill(
        $skill`Gallapagosian Mating Call`,
        $skill`McHugeLarge Slash`,
        $skill`Club 'Em Into Next Week`,
      );
    }
    // In-place summons reach this case with no location logic to finish the fight.
    plan.step(cleanUp());
  } else if (foe === $monster`unholy diver`) {
    plan.step(killDiver());
  } else if (foe === $monster`sea cowboy`) {
    plan.trySkill(killALot).step(freeKill(true)).step(cleanUp());
  } else if (
    $monsters`rotten dolphin thief, kid who is too old to be Trick-or-Treating, suburban security civilian, vandal kid`.includes(
      foe,
    )
  ) {
    plan.step(cleanUp());
  }
}

/** The diver's own kill, shared by the copy guard and the monster switch. */
function killDiver(): Macro {
  return layMimicEgg()
    .tryItem($item`spitball`)
    .step(freeKill(true))
    .step(cleanUp());
}

const BANG_POTIONS = $items`milky potion, swirly potion, bubbly potion, smoky potion, cloudy potion, effervescent potion, fizzy potion, dark potion, murky potion`;

/** Murky potions thrown in the first rounds, two at a time with Funkslinging. */
function bangPotions(): Macro {
  const macro = new Macro();
  if (availableAmount($item`murky potion`) === 0 || foe === $monster`sea cowboy`) return macro;
  const owned = BANG_POTIONS.filter((item) => availableAmount(item) > 0);
  const [a, b] = owned;
  const throwOnce =
    haveSkill($skill`Ambidextrous Funkslinging`) && b ? Macro.item([a, b]) : Macro.item(a);
  for (let round = currentRound(); round < 5; round++) macro.if_("!pastround 4", throwOnce);
  return macro;
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
  set("_sebScreechReady", ready);
  return ready;
}

/** The postloop's Patriotic Screech re-aim at the Smut Orc Logging Camp. */
function screechReaim(page: string, plan: Plan): void {
  // Only the zone's natives are safe to banish. A result left unset tells
  // the caller no cast was attempted.
  const orc = foe.phylum === $phylum`orc`;
  if (get("_sebScreechFired") === "" && orc && noteScreechReady(page) === "false") {
    set("_sebScreechFired", "unready");
  } else if (get("_sebScreechFired") === "" && orc) {
    const result = Macro.skill(screech).submit();
    // The line mafia itself reads to register the banish.
    set(
      "_sebScreechFired",
      result.includes("releases an ear shattering screech") ? "true" : "false",
    );
  }
  plan.step(freeKill(false)).step(cleanUp());
}

// ─── ONE PASS ─────────────────────────────────────────────────────────────────

/** Plan the rest of the fight against the current monster, from the original's main(). */
function plan(page: string): Plan {
  foe = lastMonster();
  const plan = new Plan();
  if (get("_sebScreechReaim", false)) {
    screechReaim(page, plan);
    return plan;
  }
  if (get("_sebPearlFarm", false)) {
    noteScreechReady(page);
    return plan.step(freeKill(false)).step(cleanUp());
  }

  plan.step(forces()).step(becomeBat()).step(otoscope()).step(extractJelly());
  const reroll = replaceEnemy();
  if (reroll) return plan.swap(reroll);

  plan.step(lectureOnRelativity()).step(bangPotions());
  if (
    (highShiny() || !haveItem($item`closed-circuit pay phone`)) &&
    itemAmount($item`sea lasso`) > 5 &&
    myLocation().environment === "underwater" &&
    get("lassoTrainingCount") < 6
  ) {
    plan.tryItem($item`sea lasso`);
  }
  // A copied diver surfaces wherever the route is adventuring, and that
  // zone's logic would spend it on its own target. While the helmet chain is
  // short, kill it as a diver. The wreck has its own diver logic.
  if (
    foe === $monster`unholy diver` &&
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
      plan.tryItem($item`sea lasso`);
    }
    return plan.step(killDiver());
  }

  byLocation(plan);
  if (plan.swapped) return plan;
  byMonster(plan);
  return plan;
}

export function main(round: number, monster: Monster, page: string): void {
  void round;
  void monster;
  // Yog-Urt and Shub react round by round. Any stray opener under More Like
  // a Suckrament costs a heal round or kills.
  if (lastMonster() === $monster`Yog-Urt, Elder Goddess of Hatred`) {
    if (myLocation() === $location`Mer-kin Temple (Right Door)`) {
      yogUrtFight();
      return;
    }
  }
  if (myLocation() === $location`Mer-kin Temple (Left Door)`) {
    shubFight();
    return;
  }

  // Each pass is one macro; a pass that swaps the monster is followed by a
  // pass planned for the new one.
  for (let pass = 0; currentRound() > 0 && pass < 6; pass++) {
    const macro = plan(page);
    const swapped = macro.swapped;
    page = macro.submit();
    if (!swapped && currentRound() > 0) {
      // The plan ran out with the fight still on; the next pass tries again
      // from where it stands, as mafia would have re-consulted the script.
      page = visitUrl("fight.php");
    }
  }
  if (currentRound() > 0)
    stop(`The fight against ${lastMonster()} is still going. Finish it by hand.`);
}
