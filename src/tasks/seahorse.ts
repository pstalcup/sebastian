import {
  availableAmount,
  buy,
  canAdventure,
  cliExecute,
  create,
  elementalResistance,
  equip,
  handlingChoice,
  haveEffect,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  lastChoice,
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
  toSlot,
  totalTurnsPlayed,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $element,
  $familiar,
  $item,
  $location,
  $monster,
  $monsters,
  $phylum,
  $skill,
  $slot,
  $stat,
  ChestMimic,
  CrystalBall,
  CursedMonkeyPaw,
  get,
  PeridotOfPeril,
  questStep,
  Snapper,
  set,
} from "libram";

import { branch, TaskBody, SebQuest, SebTask, withHooks } from "../engine";
import { swordOfSWords } from "../lib/familiar";
import { dropsItems, Gear } from "../lib/gear";
import {
  banishGear,
  baseballD,
  codpiece,
  isBanished,
  timeSpinnerFight,
  yellowRayPrep,
} from "../lib/iotm";
import { mood } from "../lib/mood";
import { getSandDollar } from "../lib/oldGuy";
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
  bangAlcoholKnown,
  detectionPotion,
  gotPeriled,
  haveItem,
  highShiny,
  inAftercore,
  inSeaPath,
  lowShiny,
  pearlLoc,
  pearlRes,
  unknownBangPotions,
} from "../lib/state";

import {
  action,
  combJelly,
  corralFarm,
  curveballBurn,
  digAnemone,
  finishCaliginous,
  lassoWish,
  mineAnemone,
  monkeypaw,
  pawWishReady,
  recallCaliginous,
  riftOpen,
  shadowRift,
} from "./zones";

// The seahorse branch: the diving helmet, Mom's rescue in the abyss, the
// corral, teflon ore, lasso training, the taming itself and the crappy
// disguise after it. Ported from unholyDiver() through postSeahorse() in
// UnderTheSea.ash. Every task reads its state from the game, so a rerun
// picks up wherever the last one stopped.

const wreck = $location`The Wreck of the Edgar Fitzsimmons`;
const abyss = $location`The Caliginous Abyss`;
const corral = $location`The Coral Corral`;
const rift = $location`Shadow Rift (The Misspelled Cemetary)`;
const sword = swordOfSWords;

const helmetOn = () => toSlot(divingHelmet()) === $slot`hat`;
export const tamed = () => get("seahorseName") !== "";
const momProgress = () => get("momSeaMonkeeProgress");

// ─── THE ROUTE ────────────────────────────────────────────────────────────────

/**
 * The route through the diver, the abyss and the corral, by kit:
 *  - high shiny: S Word sea cow, then the abyss, max item diver, finish the corral;
 *  - squint, Mom and CyberRealm, a rift lasso and the zirconia: summon the diver,
 *    CyberRealm abyss, McTwist the corral;
 *  - anything else: the corral, the diver directly, then the abyss.
 * Picked once a day and kept in _sebSeahorseRoute, so a rerun stays on it.
 */
type Leg =
  | "diver:summon"
  | "diver:direct"
  | "abyss:cheap"
  | "abyss:cyberrealm"
  | "corral:collect"
  | "corral:drop";

function route(): Leg[] {
  let value = get("_sebSeahorseRoute");
  if (value === "") {
    if (highShiny()) {
      value = "abyss:cheap,diver:direct,corral:collect";
    } else if (
      haveSkill($skill`Steely-Eyed Squint`) &&
      momNCyber() &&
      lassoShadow() &&
      availableAmount($item`blood cubic zirconia`) > 0
    ) {
      value = "diver:summon,abyss:cyberrealm,corral:drop";
    } else {
      value = `corral:collect,diver:direct,abyss:${momNCyber() ? "cyberrealm" : "cheap"}`;
    }
    set("_sebSeahorseRoute", value);
  }
  return value.split(",") as Leg[];
}

/** Mom's progress the CyberRealm abyss stops at; the backup camera and catalog help after. */
function momTarget(): number {
  let target = 24;
  if (!haveItem($item`backup camera`)) target += 4;
  if (!haveItem($item`2002 Mr. Store Catalog`)) target += 12;
  return target;
}

const mcTwistDone = () => get("_epicMcTwistUsed");
const lassosDone = () =>
  haveItem($item`cursed monkey's paw`) ||
  itemAmount($item`sea lasso`) >= 6 ||
  get("lassoTrainingCount") >= 20;
const leathersDone = () =>
  (availableAmount($item`sea chaps`) > 0 || tailpiece() !== $item.none) &&
  availableAmount($item`sea cowboy hat`) > 0;

function legDone(leg: Leg): boolean {
  switch (leg) {
    case "diver:summon":
    case "diver:direct":
      return helmetOn();
    case "abyss:cheap":
      return !highShiny() || momProgress() >= 40;
    case "abyss:cyberrealm":
      return momProgress() >= momTarget();
    case "corral:collect":
      return leathersDone();
    case "corral:drop":
      return mcTwistDone() && lassosDone() && leathersDone();
  }
}

/** This leg is on today's route and every leg before it is done. */
function legReady(...legs: Leg[]): boolean {
  if (tamed() || inAftercore()) return false;
  const legsToday = route();
  const index = legsToday.findIndex((leg) => legs.includes(leg));
  return index >= 0 && legsToday.slice(0, index).every(legDone);
}

export function routeDone(): boolean {
  if (tamed()) return true;
  if (inAftercore()) return helmetOn();
  return route().every(legDone);
}

// ─── UNHOLY DIVER ─────────────────────────────────────────────────────────────

const diverLeg = () => legReady("diver:summon", "diver:direct");
const summonLeg = () => legReady("diver:summon");

function diverBaseball(): void {
  if (baseballPlayers() >= 9 && get("baseballTeam").includes("745")) baseballD();
}

function diverChainReport(): string {
  return (
    `${availableAmount($item`rusty broken diving helmet`)} broken helmet, ` +
    `${itemAmount($item`rusty porthole`)} porthole, ` +
    `${itemAmount($item`rusty rivet`)}/8 rivets`
  );
}

const diver = $monster`unholy diver`;
const diverSummonable = () => ChestMimic.differentiableQuantity(diver) > 0 || countSummons() >= 1;

/** A summoned diver: a mimic egg, the Time-Spinner, then summon(). */
function summonDiver(): TaskBody {
  return {
    outfit: () => {
      const gear = new Gear("item drop", wreck);
      const egg = diverForceReady() || itemAmount($item`rusty rivet`) < 4;
      const familiar = egg ? $familiar`Chest Mimic` : $familiar`Jill-of-All-Trades`;
      if (haveFamiliar(familiar)) gear.fam(familiar);
      else gear.forRole("itdrop");
      return gear
        .diverSaber()
        .ifEquip($item`blood cubic zirconia`, $item`Baseball Diamond`, $item`toy Cupid bow`)
        .outfit();
    },
    prepare: () => {
      if (!diverForceReady()) {
        mood("superitdrop");
        yellowRayPrep();
      }
    },
    do: () => {
      if (ChestMimic.differentiableQuantity(diver) > 0) {
        ChestMimic.differentiate(diver);
        if (handlingChoice() && lastChoice() === 1387) runChoice(3);
      } else if (!timeSpinnerFight(diver) && summon(diver)) {
        runCombat();
      }
    },
    post: diverBaseball,
  };
}

/** One turn in the wreck: -combat for the hatch, else the diver at max item. */
function wreckTurn(): TaskBody {
  const hatch: TaskBody = {
    outfit: () =>
      new Gear("-combat,sea", wreck)
        .forRole("-combat")
        .bathysphere($item`toy Cupid bow`)
        .outfit(),
    prepare: () => {
      mood("-combat");
      if (ncForceEstimate() > 4) ncForce();
    },
    do: wreck,
  };
  const hunt: TaskBody = {
    before: () => {
      if (highShiny() && !get("_epicMcTwistUsed")) pullSequence($item`pro skateboard`);
    },
    outfit: () => {
      const gear = new Gear("item drop,sea", wreck).forRole("itdrop");
      if (!gotPeriled(wreck)) gear.ifEquip($item`Peridot of Peril`);
      if (highShiny()) {
        if (!get("_epicMcTwistUsed")) gear.ifEquip($item`pro skateboard`);
        if (haveItem($item`Fourth of May Cosplay Saber`)) gear.saber();
        return gear.bathysphere($item`toy Cupid bow`).outfit();
      }
      const habitat = get("_monsterHabitatsMonster");
      if (
        (habitat === $monster`eye in the darkness` || habitat === $monster`slithering thing`) &&
        get("_monsterHabitatsFightsLeft") > 0
      ) {
        gear.need($item`shark jumper`, $item`scale-mail underwear`);
      }
      if (banishGear(wreck) === $item`spring shoes` && availableAmount($item`spring shoes`) > 0) {
        gear.need($item`spring shoes`);
      } else if (get("heartstoneBanishUnlocked")) {
        gear.ifEquip($item`Heartstone`);
      }
      return gear
        .saber()
        .cloake()
        .champagne()
        .glove()
        .need($item`Monodent of the Sea`)
        .bathysphere($item`toy Cupid bow`)
        .outfit();
    },
    prepare: () => {
      if (!highShiny()) {
        mood("itdrop");
        mapMonster(wreck);
      } else if (!haveItem($item`Fourth of May Cosplay Saber`)) {
        mood("superitdrop");
      }
    },
    do: wreck,
  };
  const body = branch(() => totalTurnsPlayed() >= get("_lastFitzsimmonsHatch") + 20, hatch, hunt);
  return withHooks(body, {
    before: () => {
      diverBaseball();
      // Every free diver source runs before this, so no adventures here
      // means nothing is left to spend on the hunt.
      if (myAdventures() < 1) {
        throw new Error(
          `Out of adventures with the diving helmet chain short: ${diverChainReport()}, ` +
            `${availableAmount($item`bubblin' stone`)} bubblin' stone.`,
        );
      }
    },
  });
}

function buildHelmet(): void {
  if (!retrieveItem($item`aerated diving helmet`)) {
    throw new Error(
      `Could not build an aerated diving helmet: ${diverChainReport()}, ` +
        `${availableAmount($item`rusty diving helmet`)} rusty diving helmet, ` +
        `${availableAmount($item`bubblin' stone`)} bubblin' stone, ${myAdventures()} adventures left.`,
    );
  }
}

const diverTasks: SebTask[] = [
  {
    name: "Diver: Shadow Waters",
    ready: () =>
      summonLeg() &&
      countSummons() > 0 &&
      !diverPartsComplete() &&
      haveEffect($effect`Shadow Waters`) === 0 &&
      riftOpen(),
    completed: () => haveEffect($effect`Shadow Waters`) > 0,
    ...shadowRift(),
    limit: { tries: 3 },
  },
  {
    name: "Diver: summon",
    ready: () => summonLeg() && diverSummonable(),
    completed: () => diverPartsComplete() || helmetOn(),
    ...summonDiver(),
    // A summon that fails doesn't use itself up; the wreck takes over.
    limit: { skip: 10 },
  },
  {
    name: "Diver: wish for rivets",
    ready: () =>
      summonLeg() &&
      itemAmount($item`rusty rivet`) > 5 &&
      pawWishReady() &&
      availableAmount($item`cursed monkey's paw`) > 0,
    completed: () => itemAmount($item`rusty rivet`) >= 8 || diverPartsComplete() || helmetOn(),
    ...action(() => CursedMonkeyPaw.wishFor($item`rusty rivet`)),
    limit: { tries: 3 },
  },
  {
    name: "Diver: wreck",
    ready: diverLeg,
    completed: () => diverPartsComplete() || helmetOn(),
    ...wreckTurn(),
  },
  {
    name: "Diver: build the helmet",
    ready: () => diverLeg() && diverPartsComplete(),
    completed: helmetOn,
    ...action(buildHelmet),
    limit: { tries: 1 },
  },
];

// ─── MOM IN THE ABYSS ─────────────────────────────────────────────────────────

const cheapLeg = () => legReady("abyss:cheap");
const cyberLeg = () => legReady("abyss:cyberrealm") && momProgress() < momTarget();
const habitat = () => get("_monsterHabitatsMonster");
const abyssHabitat = () =>
  habitat() === $monster`eye in the darkness` || habitat() === $monster`slithering thing`;

const abyssTasks: SebTask[] = [
  {
    // Sets the sword on the sea cow, for cowbells while grinding the abyss.
    name: "Abyss: S Word sea cow",
    ready: () => cheapLeg() && highShiny() && momProgress() < 36,
    completed: () => get("swordOfSWordsMonster") === $monster`sea cow`,
    outfit: () =>
      new Gear("item drop,sea", corral)
        .fam(sword)
        .ifEquip($item`Peridot of Peril`)
        .bathysphere($item`toy Cupid bow`)
        .outfit(),
    prepare: () => mood("itdrop"),
    do: corral,
    limit: { skip: 1 },
  },
  {
    name: "Abyss: grind",
    ready: () => cheapLeg() && highShiny(),
    completed: () => momProgress() >= 40,
    before: () => {
      if (availableAmount($item`black glass`) === 0) {
        buy($coinmaster`Big Brother`, 1, $item`black glass`);
      }
      if (availableAmount($item`sea leather`) > 0 && availableAmount($item`sea cowboy hat`) === 0) {
        create($item`sea cowboy hat`);
      }
    },
    outfit: () => {
      const gear = new Gear("item drop,sea,-equip peridot", abyss).need(
        $item`shark jumper`,
        $item`scale-mail underwear`,
        $item`black glass`,
      );
      if (availableAmount($item`sea cowbell`) < 3 && haveFamiliar(sword)) gear.fam(sword);
      else gear.forRole("itdrop");
      if (!isBanished($monster`school of many`)) {
        gear.need($item`Monodent of the Sea`);
      }
      if (get("lassoTrainingCount") < 20 && availableAmount($item`sea cowboy hat`) > 0) {
        gear.need($item`sea cowboy hat`);
      }
      if (haveEffect($effect`Driving Waterproofly`) === 0) {
        pullSequence($item`Elf Guard SCUBA tank`);
        gear.need($item`Elf Guard SCUBA tank`);
      }
      return gear.bathysphere($item`toy Cupid bow`).outfit();
    },
    prepare: () => {
      if (myFamiliar() === $familiar`Red-Nosed Snapper`) Snapper.trackPhylum($phylum`horror`);
      combJelly();
      mood("itdrop");
    },
    do: abyss,
  },
  {
    name: "Abyss: banish constructs",
    ready: () => cyberLeg() && $location`Madness Bakery`.turnsSpent < 3,
    completed: () => get("banishedPhyla").includes("construct"),
    before: () => {
      if (!get("madnessBakeryAvailable")) {
        visitUrl("shop.php?whichshop=armory&action=talk");
        runChoice(1);
      }
    },
    outfit: () =>
      new Gear("item drop", $location`Madness Bakery`)
        .fam($familiar`Patriotic Eagle`)
        .need($item`Monodent of the Sea`)
        .outfit(),
    do: $location`Madness Bakery`,
  },
  {
    name: "Abyss: recall the habitat",
    ready: () =>
      cyberLeg() && haveSkill($skill`Just the Facts`) && get("_monsterHabitatsRecalled") < 3,
    completed: abyssHabitat,
    ...recallCaliginous(),
  },
  {
    name: "Abyss: cyberzone",
    ready: () =>
      cyberLeg() && get("_monsterHabitatsFightsLeft") > 0 && get("_cyberFreeFights") < 10,
    completed: () => momProgress() >= 40,
    outfit: () =>
      new Gear("moxie", $location`Cyberzone 1`)
        .fam($familiar`Glover`)
        .need($item`shark jumper`, $item`scale-mail underwear`, $item`Monodent of the Sea`)
        .outfit(),
    prepare: () => {
      if (myBuffedstat($stat`Moxie`) < 500) throw new Error("Need 500 moxie here to be safe");
    },
    do: $location`Cyberzone 1`,
  },
  {
    name: "Abyss: finish",
    ready: cyberLeg,
    completed: () => momProgress() >= momTarget(),
    ...finishCaliginous(),
  },
];

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

const dropLeg = () => legReady("corral:drop");
const corralLeg = () => legReady("corral:collect", "corral:drop");

/** The leather piece, crafted from a sea leather or farmed for one. */
function leatherPiece(item: Item): TaskBody {
  const body = branch(
    () => itemAmount($item`sea leather`) > 0,
    action(() => create(item)),
    corralFarm(),
  );
  return withHooks(body, {
    before: () => {
      if (dropLeg()) codpiece("none");
    },
  });
}

const corralTasks: SebTask[] = [
  {
    name: "Corral: Shadow Waters",
    ready: () =>
      dropLeg() &&
      !mcTwistDone() &&
      !lowShiny() &&
      haveEffect($effect`Shadow Waters`) === 0 &&
      riftOpen(),
    completed: () => haveEffect($effect`Shadow Waters`) > 0,
    ...shadowRift(),
    limit: { tries: 3 },
  },
  {
    name: "Corral: McTwist",
    ready: dropLeg,
    completed: mcTwistDone,
    before: () => {
      codpiece("blood cubic zirconia, heartstone");
      if (availableAmount($item`pro skateboard`) === 0) pullSequence($item`pro skateboard`);
    },
    outfit: () => {
      const copied = get("lastCopyableMonster");
      if (
        get("_backUpUses") < 11 &&
        haveItem($item`backup camera`) &&
        (copied === $monster`eye in the darkness` || copied === $monster`slithering thing`)
      ) {
        return new Gear("item drop, sea, -equip peridot of peril", corral)
          .forRole("itdrop")
          .need($item`shark jumper`, $item`scale-mail underwear`)
          .ifEquip(divingHelmet())
          .need($item`pro skateboard`)
          .ifEquip($item`The Eternity Codpiece`)
          .need($item`backup camera`)
          .outfit();
      }
      if (haveSkill($skill`Steely-Eyed Squint`) && haveItem($item`cursed monkey's paw`)) {
        pullSequence($item`software glitch`);
      }
      return new Gear("item drop, sea, -equip peridot of peril, equip monodent of the sea", corral)
        .forRole("itdrop")
        .ifEquip(divingHelmet())
        .need($item`pro skateboard`)
        .ifEquip($item`The Eternity Codpiece`)
        .outfit();
    },
    prepare: () => {
      if (myFamiliar() === $familiar`Red-Nosed Snapper`) Snapper.trackPhylum($phylum`mer-kin`);
      if (!get("_steelyEyedSquintUsed")) mood("superitdrop");
      mood("itdrop");
    },
    do: corral,
  },
  {
    name: "Corral: sea lassos",
    ready: () => dropLeg() && mcTwistDone(),
    completed: lassosDone,
    ...corralFarm(),
  },
  {
    name: "Corral: sea chaps",
    ready: corralLeg,
    completed: () => availableAmount($item`sea chaps`) > 0 || tailpiece() !== $item.none,
    ...leatherPiece($item`sea chaps`),
  },
  {
    name: "Corral: sea cowboy hat",
    ready: corralLeg,
    completed: () => availableAmount($item`sea cowboy hat`) > 0,
    ...leatherPiece($item`sea cowboy hat`),
  },
];

export const SeahorseRouteQuest: SebQuest = {
  name: "Seahorse route",
  tasks: [
    {
      name: "Aerated diving helmet",
      ready: () => inAftercore() && !tamed(),
      completed: helmetOn,
      ...action(buildHelmet),
      limit: { tries: 1 },
    },
    ...diverTasks,
    ...abyssTasks,
    ...corralTasks,
  ],
};

// ─── SHADOW RIFT AND TEFLON ───────────────────────────────────────────────────

const curveballLive = () =>
  get("_curveballFightsLeft", 0) > 0 && get("_curveballMonster") === $monster`some fish`;
/** An Unaccompanied Miner swing, which stops the run if mining.php didn't count it. */
function freeDig(): void {
  const used = get("_unaccompaniedMinerUsed");
  digAnemone();
  if (get("_unaccompaniedMinerUsed") <= used) {
    throw new Error("Unaccompanied Miner swing didn't count in mining.php. Mine unlocked?");
  }
}

const teflonNeeded = () => itemAmount($item`teflon ore`) === 0 && tailpiece() === $item.none;
const haveDigpick = () => availableAmount($item`Mer-kin digpick`) > 0;
const affinityLeft = () => haveEffect($effect`Shadow Affinity`) > 0 || !get("_shadowAffinityToday");
const phone = () => haveItem($item`closed-circuit pay phone`);
const card = $item`Platinum Yendorian Express Card`;
const mine = $location`Anemone Mine`;
const riftTraining = () =>
  inSeaPath() && get("lassoTrainingCount") < 20 && !highShiny() && affinityLeft() && phone();

export const TeflonQuest: SebQuest = {
  name: "Shadow rift and teflon",
  ready: routeDone,
  tasks: [
    {
      name: "Rift: dial in",
      ready: () =>
        inSeaPath() &&
        !highShiny() &&
        get("encountersUntilSRChoice") > 9 &&
        itemAmount($item`closed-circuit pay phone`) > 0,
      completed: () => questStep("questRufus") >= 0,
      before: () => {
        retrieveItem($item`oversized sparkler`);
        if (itemAmount($item`lump of loyal latite`) > 0) use($item`lump of loyal latite`);
      },
      outfit: () =>
        new Gear("item drop", rift)
          .need($item`Flash Liquidizer Ultra Dousing Accessory`, $item`Monodent of the Sea`)
          .ifEquip($item`bat wings`, $item`Everfull Dart Holster`, $item`toy Cupid bow`)
          .outfit(),
      prepare: () => mood("itdrop"),
      do: () => use($item`closed-circuit pay phone`),
      limit: { tries: 1 },
    },
    {
      // The digpick first, then the Yendorian express card.
      name: "Rift: curveball fights",
      ready: () => inSeaPath() && !highShiny() && curveballLive(),
      completed: () => !curveballLive() || (haveItem(card) && haveDigpick()),
      ...curveballBurn(),
      limit: { tries: 10 },
    },
    {
      name: "Teflon: pull a digpick",
      ready: () =>
        teflonNeeded() && !haveDigpick() && !lowShiny() && pullsRemaining() > reservedPulls(),
      completed: haveDigpick,
      ...action(() => pullSequence($item`Mer-kin digpick`)),
      limit: { skip: 1 },
    },
    {
      // At over 250% item the anemone mine's digpick is a sure drop.
      name: "Teflon: fight for a digpick",
      ready: () => teflonNeeded() && !haveDigpick(),
      completed: haveDigpick,
      outfit: () =>
        new Gear("item drop,sea", mine)
          .ifEquip($item`Peridot of Peril`)
          .bathysphere()
          .outfit(),
      prepare: () => mood("itdrop"),
      do: () => {
        if (numericModifier("Item Drop") > 250) return mine;
        if (haveItem($item`bat wings`)) {
          equip($item`bat wings`);
          return mine;
        }
        return undefined;
      },
      post: () => {
        if (!haveDigpick()) pullSequence($item`Mer-kin digpick`);
      },
      limit: { skip: 1 },
    },
    {
      // Once the booze potion is known the rest are safe to drink, so drink
      // them until the potion of detection turns up.
      name: "Teflon: identify bang potions",
      ready: () => teflonNeeded() && haveDigpick() && bangAlcoholKnown(),
      completed: () =>
        !teflonNeeded() || detectionPotion() !== undefined || unknownBangPotions().length === 0,
      ...action(() => use(unknownBangPotions()[0])),
      limit: { tries: 9 },
    },
    {
      // Object Detection shows every sparkle in the mine, teflon included.
      name: "Teflon: Object Detection",
      ready: () => {
        const potion = detectionPotion();
        return teflonNeeded() && haveDigpick() && potion !== undefined && haveItem(potion);
      },
      completed: () => !teflonNeeded() || haveEffect($effect`Object Detection`) > 0,
      ...action(() => use(detectionPotion() as Item)),
      limit: { tries: 3 },
    },
    {
      name: "Teflon: Unaccompanied Miner",
      ready: () =>
        teflonNeeded() &&
        haveDigpick() &&
        haveSkill($skill`Unaccompanied Miner`) &&
        get("_unaccompaniedMinerUsed") < 5 &&
        // Muscle classes get in at the Grandpa step, the rest need Big Brother's map.
        canAdventure($location`Anemone Mine`),
      completed: () => !teflonNeeded(),
      ...mineAnemone(freeDig),
      limit: { tries: 5 },
    },
    {
      name: "Teflon: lodestone",
      ready: () => teflonNeeded() && !pulledToday($item`lodestone`),
      completed: () => !teflonNeeded() || haveEffect($effect`Loded`) > 0,
      ...action(() => {
        pullSequence($item`lodestone`);
        use($item`lodestone`);
      }),
      limit: { skip: 1 },
    },
    {
      name: "Express card",
      ready: () => inSeaPath() && haveItem(card) && !highShiny(),
      completed: () => get("expressCardUsed"),
      ...action(() => {
        if (storageAmount(card) > 0 && itemAmount(card) === 0) takeStorage(1, card);
        use(card);
      }),
      limit: { tries: 1 },
    },
    {
      name: "Rift: lasso training",
      ready: riftTraining,
      completed: () => get("lassoTrainingCount") >= 20,
      ...shadowRift(),
      limit: { tries: 40 },
    },
    {
      // The day's affinity is wasted unless spent, so spend it now.
      name: "Rift: spend the affinity",
      ready: () =>
        inSeaPath() &&
        (myTurncount() > 25 || !haveItem($item`miniature crystal ball`)) &&
        !highShiny() &&
        phone(),
      completed: () => !affinityLeft(),
      ...shadowRift(),
      limit: { tries: 40 },
    },
    {
      name: "Teflon: mine while Loded",
      ready: () => teflonNeeded() && haveDigpick() && haveEffect($effect`Loded`) > 0,
      completed: () => !teflonNeeded(),
      ...mineAnemone(),
      limit: { tries: 20 },
    },
    {
      name: "Teflon: mine",
      ready: () => teflonNeeded() && haveDigpick(),
      completed: () => !teflonNeeded(),
      ...withHooks(mineAnemone(), {
        before: () =>
          print("Failed to acquire teflon ore; can pull mining dynamite for one more try", "red"),
      }),
      limit: { tries: 30 },
    },
  ],
};

// ─── LASSO TRAINING ───────────────────────────────────────────────────────────

/** Lasso training in the pearl zone, when the rift can't finish it. */
export const BackupLassoQuest: SebQuest = {
  name: "Backup lasso training",
  ready: () => routeDone() && !riftTraining(),
  tasks: [
    {
      name: "Sea lasso",
      ready: () => get("lassoTrainingCount") < 20,
      completed: () => itemAmount($item`sea lasso`) > 0 || get("lassoTrainingCount") >= 20,
      ...lassoWish(),
    },
    {
      name: "Pearl zone",
      completed: () => get("lassoTrainingCount") >= 20,
      before: () => {
        if (phone()) print("Lasso training didn't finish via shadow rift", "red");
        if (!pulledToday($item`Elf Guard SCUBA tank`)) cliExecute("pull elf guard scuba");
      },
      outfit: () =>
        new Gear(`${pearlRes()},sea`, pearlLoc())
          .forRole("itdrop")
          .need($item`Monodent of the Sea`, $item`sea cowboy hat`, $item`sea chaps`)
          .bathysphere()
          .outfit(),
      prepare: () => {
        if (availableAmount($item`pristine fish scale`) < 6) mood("itdrop");
      },
      do: () => pearlLoc(),
    },
  ],
};

// ─── TAMING ───────────────────────────────────────────────────────────────────

/** Cowbells to farm before taming, leaving the rest to the monkey's paw. */
function cowbellsWanted(): number {
  if (!CursedMonkeyPaw.have() || highShiny()) return 2;
  return Math.max(0, 2 - CursedMonkeyPaw.wishes());
}

const seahorseNext = () =>
  CrystalBall.getPrediction().get($location`The Coral Corral`) === $monster`wild seahorse`;
const crystalBall = () => CrystalBall.have();

export const TamingQuest: SebQuest = {
  name: "Taming",
  ready: () => routeDone() && !tamed(),
  tasks: [
    {
      name: "Farm cowbells",
      completed: () => itemAmount($item`sea cowbell`) >= cowbellsWanted(),
      ...corralFarm(),
    },
    {
      name: "Farm a sea lasso",
      ready: () => !inAftercore(),
      completed: () => itemAmount($item`sea lasso`) > 0,
      ...corralFarm(),
    },
    {
      name: "Aftercore lasso and cowbells",
      ready: inAftercore,
      completed: () => itemAmount($item`sea cowbell`) >= 3 && itemAmount($item`sea lasso`) > 0,
      ...action(() => {
        retrieveItem(3, $item`sea cowbell`);
        retrieveItem($item`sea lasso`);
      }),
      limit: { tries: 1 },
    },
    {
      name: "Pull a cowbell",
      ready: () => !pulledToday($item`sea cowbell`),
      completed: () => itemAmount($item`sea cowbell`) >= 3,
      ...action(() => pullSequence($item`sea cowbell`)),
      limit: { skip: 1 },
    },
    {
      name: "Wish for cowbells",
      ready: () => CursedMonkeyPaw.wishes() > 0,
      completed: () => itemAmount($item`sea cowbell`) >= 3,
      ...monkeypaw($item`sea cowbell`),
    },
    {
      // Burn shadow affinity while the crystal ball shows something else coming.
      name: "Spend the affinity on a bad prediction",
      ready: () =>
        crystalBall() &&
        !seahorseNext() &&
        (CrystalBall.getPrediction().has($location`The Coral Corral`) ||
          itemAmount($item`shadow brick`) === 0),
      completed: () => haveEffect($effect`Shadow Affinity`) === 0,
      ...shadowRift(),
      limit: { tries: 20 },
    },
    {
      name: "Tame the seahorse",
      completed: tamed,
      before: () => {
        if (itemAmount($item`sea cowbell`) < 3) throw new Error("need more cowbells");
        if (itemAmount($item`waffle`) === 0) pullSequence($item`waffle`);
      },
      outfit: () => {
        const gear = new Gear(dropsItems, corral).forRole("itdrop");
        if (!PeridotOfPeril.periledToday(corral)) gear.ifEquip($item`Peridot of Peril`);
        if (!haveItem($item`august scepter`)) {
          gear.need($item`Monodent of the Sea`).ifEquip($item`Heartstone`);
        } else if (haveItem($item`miniature crystal ball`)) {
          gear.need($item`miniature crystal ball`);
        }
        if (curveballLive()) gear.need($item`Monodent of the Sea`);
        // All three non-seahorse monsters banished: the tearaway pants.
        if (
          $monsters`Mer-kin rustler, sea cowboy, sea cow`.every(isBanished) &&
          haveItem($item`tearaway pants`)
        ) {
          gear.need($item`tearaway pants`);
        }
        return gear.delay().outfit();
      },
      do: corral,
    },
  ],
};

// ─── AFTER THE SEAHORSE ───────────────────────────────────────────────────────

const noTailpiece = () => tailpiece() === $item.none;
const disguiseShort = () =>
  availableAmount($item`crappy Mer-kin mask`) === 0 ||
  availableAmount($item`crappy Mer-kin tailpiece`) === 0;

export const AFTERCORE_BOSSES = ["Yogurt", "Shub", "Dad"];

/** Which boss an aftercore run is for, from the boss arg or set by hand, kept for reruns. */
export const aftercoreBoss = () => get("_sebAftercoreBoss");

/** Mafia skips Deep Dark Visions below 500 maximum HP; under 67% spooky res a cast ends Beaten Up. */
function deepDarkVisions(): void {
  if (myMaxhp() < 500) {
    throw new Error(`Deep Dark Visions needs 500 maximum HP; you have ${myMaxhp()}.`);
  }
  const spookyRes = Math.floor(elementalResistance($element`spooky`));
  if (spookyRes < 67) {
    print(
      `Deep Dark Visions: ${spookyRes}% spooky resistance is too low to survive a cast.`,
      "red",
    );
  }
  if (!restoreHp(spookyRes < 67 ? 1000 : myMaxhp())) {
    throw new Error("Could not restore HP before Deep Dark Visions; see the message above.");
  }
  if (!useSkill(1, $skill`Deep Dark Visions`)) {
    throw new Error("Could not cast Deep Dark Visions; see the message above.");
  }
}

export const PostSeahorseQuest: SebQuest = {
  name: "After the seahorse",
  ready: tamed,
  tasks: [
    {
      name: "Spend the affinity",
      ready: () => haveEffect($effect`Shadow Affinity`) > 0,
      completed: () => haveEffect($effect`Shadow Affinity`) === 0,
      ...branch(curveballLive, curveballBurn(), shadowRift()),
      limit: { tries: 40 },
    },
    {
      name: "Rift choice",
      ready: () => phone(),
      completed: () => get("encountersUntilSRChoice") !== 0,
      do: rift,
      limit: { tries: 1 },
    },
    {
      name: "Rufus",
      completed: () => questStep("questRufus") !== 1,
      do: () => {
        use($item`closed-circuit pay phone`);
        return rift;
      },
      limit: { tries: 1 },
    },
    {
      name: "Sand dollars",
      ready: noTailpiece,
      completed: () => itemAmount($item`sand dollar`) >= 10,
      ...withHooks(action(getSandDollar), { before: equipSwimTrunks }),
    },
    {
      // The diver tasks run only while the seahorse is untamed, so a part
      // still missing here has no other route back.
      name: "Recover the diving helmet",
      ready: () =>
        noTailpiece() &&
        availableAmount($item`crappy Mer-kin mask`) === 0 &&
        availableAmount($item`rusty diving helmet`) === 0,
      completed: () => availableAmount($item`aerated diving helmet`) > 0 || diverPartsComplete(),
      ...wreckTurn(),
    },
    {
      name: "Build the diving helmet",
      ready: () =>
        noTailpiece() && availableAmount($item`crappy Mer-kin mask`) === 0 && diverPartsComplete(),
      completed: () => availableAmount($item`aerated diving helmet`) > 0,
      ...action(buildHelmet),
      limit: { tries: 1 },
    },
    {
      name: "Scales from the abyss",
      ready: () => noTailpiece() && disguiseShort(),
      completed: () => availableAmount($item`pristine fish scale`) >= 3,
      before: () => {
        if (get("_cloversPurchased") >= 3) {
          throw new Error(
            `get a total of ${availableAmount($item`pristine fish scale`)} pristine fish scale, out of hermitage clovers`,
          );
        }
        getLucky();
      },
      do: () => {
        equip($slot`acc3`, $item`black glass`);
        return abyss;
      },
      limit: { tries: 6 },
    },
    {
      name: "Crappy Mer-kin mask",
      ready: noTailpiece,
      completed: () => availableAmount($item`crappy Mer-kin mask`) > 0,
      ...action(() => {
        cliExecute("unequip sea chaps; unequip aerated diving helmet");
        if (!retrieveItem($item`crappy Mer-kin mask`)) {
          throw new Error(
            "Could not build a crappy Mer-kin mask; the aerated diving helmet chain is short.",
          );
        }
      }),
      limit: { tries: 1 },
    },
    {
      name: "Crappy Mer-kin tailpiece",
      completed: () => !noTailpiece(),
      ...action(() => {
        cliExecute("unequip sea chaps");
        if (!retrieveItem($item`crappy Mer-kin tailpiece`)) {
          throw new Error(
            `Could not build a crappy Mer-kin tailpiece: ${availableAmount($item`sea chaps`)} sea chaps, ` +
              `${availableAmount($item`teflon swim fins`)} swim fins, ` +
              `${availableAmount($item`pristine fish scale`)}/3 fish scales.`,
          );
        }
      }),
      limit: { tries: 1 },
    },
    {
      // Mafia often runs headless, where userPrompt throws, so the boss comes
      // from the boss arg or the pref instead.
      name: "Pick the aftercore boss",
      ready: inAftercore,
      completed: () => AFTERCORE_BOSSES.includes(aftercoreBoss()),
      ...action(() => {
        const boss = aftercoreBoss();
        throw new Error(
          boss === ""
            ? `No aftercore boss chosen. Run "sebastian boss=Shub" (or Yogurt, or Dad), or set _sebAftercoreBoss.`
            : `_sebAftercoreBoss is "${boss}", which isn't Yogurt, Shub or Dad.`,
        );
      }),
      limit: { tries: 1 },
    },
    {
      name: "Deep Dark Visions",
      completed: () => get("dreadScroll3") !== 0,
      outfit: { modifier: "50 spooky res, hp" },
      prepare: () => mood("spookyres"),
      ...action(deepDarkVisions),
      limit: {
        tries: 10,
        message: "Cast Deep Dark Visions by hand until dreadScroll3 is set, then rerun.",
      },
    },
  ],
};
