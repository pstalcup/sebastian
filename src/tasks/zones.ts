import {
  abort,
  adv1,
  availableAmount,
  buy,
  cliExecute,
  equip,
  haveEffect,
  haveFamiliar,
  haveSkill,
  Item,
  itemAmount,
  Location,
  myHp,
  putCloset,
  pullsRemaining,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  CursedMonkeyPaw,
  get,
  Mining,
  PeridotOfPeril,
  questStep,
} from "libram";

import { branch, TaskBody } from "../engine";
import { pickFamiliar } from "../lib/familiar";
import { dropsItems, Gear } from "../lib/gear";
import {
  banishGear,
  baseballD,
  codpiece,
  isBanished,
  lectureNow,
  leftSkiAvailable,
  mineNum,
  parkaForceAvailable,
  timeSpinnerRefight,
  useMapIfAvailable,
  yellowRayPrep,
} from "../lib/iotm";
import { mood, Mood } from "../lib/mood";
import { setMPRecovery } from "../lib/postAdventure";
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

// How the run farms each zone, as task bodies: the outfit, the setup and one
// turn. Tasks elsewhere pair these with their own ready() and completed().
// Ported from the "Quest Handling" and "Other Utilities" sections of
// UnderTheSea.ash.

const abyss = $location`The Caliginous Abyss`;
const corral = $location`The Coral Corral`;
const school = $location`Mer-kin Elementary School`;
const library = $location`Mer-kin Library`;
const outpost = $location`The Mer-Kin Outpost`;
const rift = $location`Shadow Rift (The Misspelled Cemetary)`;
const gym = $location`Mer-kin Gymnasium`;
const skatePark = $location`The Skate Park`;

/** A body that spends no turn. */
export function action(run: () => void): TaskBody {
  return { do: run };
}

// ─── MONKEY'S PAW ─────────────────────────────────────────────────────────────

export const pawWishReady = () => CursedMonkeyPaw.have() && CursedMonkeyPaw.wishes() > 0;

/** A wish for the item, or a turn in the corral towards it. */
export function monkeypaw(item: Item): TaskBody {
  return branch(
    () => CursedMonkeyPaw.have() && CursedMonkeyPaw.wishes() > 0,
    action(() => CursedMonkeyPaw.wishFor(item)),
    corralFarm(),
  );
}

// ─── PRAYERBEADS ──────────────────────────────────────────────────────────────

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

/** A prayerbead from the monkey's paw, or a -combat turn at the outpost. */
export function farmPrayerbeads(): TaskBody {
  return branch(
    pawWishReady,
    action(() => CursedMonkeyPaw.wishFor($item`Mer-kin prayerbeads`)),
    {
      outfit: () => prayerbeadGear().outfit(),
      prepare: () => mood("-combat"),
      do: outpost,
    },
  );
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

/** Comb jelly's Jelly Combed, if the pull is there. */
export function combJelly(): void {
  if (haveEffect($effect`Jelly Combed`) === 0 && pullSequence($item`comb jelly`)) {
    use($item`comb jelly`);
  }
}

export function recallCaliginous(): TaskBody {
  return {
    before: () => {
      if (availableAmount($item`black glass`) === 0) {
        buy($coinmaster`Big Brother`, 1, $item`black glass`);
      }
    },
    outfit: () => abyssRecallGear().outfit(),
    prepare: combJelly,
    do: abyss,
  };
}

export function finishCaliginous(): TaskBody {
  return {
    outfit: () => {
      const gear = new Gear("mys,sea", abyss)
        .forRole("itdrop")
        .need($item`shark jumper`, $item`scale-mail underwear`, $item`black glass`)
        .ifEquip($item`Congressional Medal of Insanity`)
        .bathysphere()
        .ifEquip($item`blood cubic zirconia`);
      if (!isBanished($monster`school of many`)) gear.need($item`Monodent of the Sea`);
      return gear.outfit();
    },
    do: abyss,
  };
}

// ─── THE CORAL CORRAL ─────────────────────────────────────────────────────────

/** A turn in the corral for whatever of the sea cow and sea cowboy drops is still short. */
export function corralFarm(): TaskBody {
  return {
    // Backup Fidoxene site for reruns that skip the outpost phase; the
    // free-pill guard inside makes repeat calls a no-op.
    before: () => {
      if (ncForceEstimate() >= 4) pillKeeper("free familiar");
    },
    outfit: () => {
      const gear = new Gear("item drop,sea", corral);
      // Lecture copies of the sea cow once the Force budget is spent.
      if (lectureNow()) gear.fam($familiar`Pocket Professor`);
      else gear.forRole("itdrop");
      if (
        !isBanished($monster`Mer-kin rustler`) ||
        (doneWithCowboy() && !isBanished($monster`sea cowboy`)) ||
        (doneWithSeaCow() && !isBanished($monster`sea cow`))
      ) {
        gear.ifEquip(banishGear(corral));
      }
      if (lowShiny()) gear.ifEquip($item`Congressional Medal of Insanity`);
      return gear
        .saber()
        .cloake()
        .champagne()
        .ifEquip($item`legendary seal-clubbing club`)
        .bathysphere($item`toy Cupid bow`)
        .outfit();
    },
    choices: (): { [id: number]: string } => {
      if (!doneWithSeaCow()) return { 1589: "1&victim=775" };
      if (!doneWithCowboy()) return { 1589: "1&victim=776" };
      return {};
    },
    prepare: () => {
      // Whichever victim is hunted, its whole table is non-conditional, so
      // once the Force budget is out the ray forces the same result.
      if (forcesAfterHealer() <= 0) yellowRayPrep();
      mood("itdrop");
      mapMonster(corral);
    },
    do: corral,
    post: () => {
      timeSpinnerRefight(corral);
      if (
        get("baseballTeam").includes("775") &&
        baseballPlayers() === 9 &&
        itemAmount($item`sea cowbell`) < 3
      ) {
        baseballD();
      }
    },
  };
}

// ─── SHADOW RIFT ──────────────────────────────────────────────────────────────

/** Whether a shadow rift visit has anything left to do today. */
export function riftOpen(): boolean {
  return (
    haveItem($item`closed-circuit pay phone`) &&
    (!get("_shadowAffinityToday") || haveEffect($effect`Shadow Affinity`) > 0)
  );
}

/** Shadow Rift fight gear. The Liquidizer grants the Douse Foe the CCS casts on a shadow slab. */
function shadowRiftGear(): Gear {
  const gear = new Gear("item drop", rift)
    .ifEquip($item`Flash Liquidizer Ultra Dousing Accessory`)
    .need($item`Monodent of the Sea`);
  if (get("lassoTrainingCount") < 20) gear.ifEquip($item`sea cowboy hat`, $item`sea chaps`);
  return gear
    .ifEquip($item`bat wings`, $item`Everfull Dart Holster`, $item`toy Cupid bow`)
    .baseball();
}

const riftQuest = () => questStep("questRufus");

/** Shadow Waters: the pay phone, the quest's noncombat, then one rift fight. */
function shadowWaters(): TaskBody {
  return {
    outfit: () => shadowRiftGear().outfit(),
    do: () => {
      if (riftQuest() === -1) use($item`closed-circuit pay phone`);
      if (riftQuest() === 0) {
        ncForce();
        adv1Rift();
      }
      if (!get("_seadentWaveUsed")) useSkill($skill`Sea *dent: Summon a Wave`);
      use($item`closed-circuit pay phone`);
      // The noncombat force can take an accessory slot.
      shadowRiftGear().dress();
      return rift;
    },
  };
}

/** One Shadow Affinity fight, with the Summon a Wave and choice follow-ups. */
function shadowAffinity(): TaskBody {
  return {
    before: () => {
      if (
        get("encountersUntilSRChoice") > 9 &&
        riftQuest() === -1 &&
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
      if (riftQuest() === -1) use($item`closed-circuit pay phone`);
    },
    outfit: () => {
      const gear = shadowRiftGear();
      if (haveFamiliar($familiar`Jill-of-All-Trades`)) gear.fam($familiar`Jill-of-All-Trades`);
      else gear.forRole("itdrop");
      return gear.outfit();
    },
    prepare: () => mood("itdrop"),
    do: rift,
    post: () => {
      if (!get("_seadentWaveUsed") && haveEffect($effect`Shadow Affinity`) > 0) {
        adv1Rift();
        useSkill($skill`Sea *dent: Summon a Wave`);
      }
      if (get("encountersUntilSRChoice") === 0) adv1Rift();
    },
  };
}

/** A follow-up rift turn within the same visit, on adv1() as the original had it. */
function adv1Rift(): void {
  setMPRecovery();
  adv1(rift, -1, "");
}

/**
 * One shadow rift visit: Shadow Waters first, then the Shadow Affinity
 * fights, which want a sea lasso on hand for lasso training.
 */
export function shadowRift(): TaskBody {
  const needLasso = () =>
    haveEffect($effect`Shadow Waters`) > 0 &&
    haveEffect($effect`Shadow Affinity`) > 0 &&
    itemAmount($item`sea lasso`) === 0;
  const lasso = monkeypaw($item`sea lasso`);
  return branch(
    () => haveEffect($effect`Shadow Waters`) === 0,
    shadowWaters(),
    branch(
      needLasso,
      {
        ...lasso,
        before: () => {
          equip($item`really, really nice swimming trunks`);
          equip($item`little bitty bathysphere`);
          lasso.before?.();
        },
      },
      shadowAffinity(),
    ),
  );
}

// ─── CURVEBALL ────────────────────────────────────────────────────────────────

/** The peril zone a curveball fight goes to, or the Knob's outskirts if all are periled. */
function curveballZone(): [Mood | undefined, string, Location] {
  const zones: [Mood, string, Location][] = [
    ["spookyres", "spooky res,sea", $location`Anemone Mine`],
    ["hotres", "hot res,sea", $location`The Marinara Trench`],
    ["sleazeres", "sleaze res,sea", $location`The Dive Bar`],
  ];
  // The mine first only while the digpick is still wanted from it.
  const order =
    availableAmount($item`Mer-kin digpick`) === 0 ? zones : [...zones.slice(1), zones[0]];
  const target = order.find(([, , zone]) => !PeridotOfPeril.periledToday(zone));
  return target ?? [undefined, "item drop", $location`The Outskirts of Cobb's Knob`];
}

/** Spend a baseball curveball fight in a peril zone not yet periled today. */
export function curveballBurn(): TaskBody {
  return {
    before: () => {
      if (curveballZone()[0]) codpiece("blood cubic zirconia, peridot of peril");
    },
    outfit: () => {
      const [buffs, modifier, zone] = curveballZone();
      const gear = new Gear(modifier, zone);
      if (!buffs) return gear.need($item`Monodent of the Sea`).outfit();
      return gear
        .forRole("itdrop")
        .ifEquip($item`The Eternity Codpiece`)
        .need($item`Monodent of the Sea`)
        .bathysphere()
        .outfit();
    },
    prepare: () => {
      const buffs = curveballZone()[0];
      if (buffs) mood(buffs);
    },
    do: () => curveballZone()[2],
    post: () => codpiece("none"),
  };
}

// ─── ANEMONE MINE ─────────────────────────────────────────────────────────────

/** One dig in the anemone mine for teflon ore. A page, not an adventure. */
export function mineAnemone(): TaskBody {
  return {
    outfit: () => {
      const familiar = pickFamiliar("itdrop");
      return familiar ? { familiar } : {};
    },
    do: () => {
      equip($item`Mer-kin digpick`);
      equipSwimTrunks();
      Mining.mineCoordinate(Mining.Mine.ANEMONE, mineNum());
      if (myHp() === 0) cliExecute("restore HP");
      if (itemAmount($item`teflon ore`) > 0 && haveEffect($effect`Beaten Up`) > 0) {
        if (haveSkill($skill`Tongue of the Walrus`)) useSkill($skill`Tongue of the Walrus`);
        else cliExecute("rest");
      }
    },
  };
}

// ─── GYMNASIUM AND SKATE PARK ─────────────────────────────────────────────────

export function gymnasium(): TaskBody {
  return {
    outfit: () => {
      const gear = new Gear("combat,sea", gym).forRole("combat");
      if (get("skateParkStatus") === "war") {
        if (leftSkiAvailable()) gear.ifEquip($item`McHugeLarge left ski`);
        else if (parkaForceAvailable()) {
          gear.ifEquip($item`Jurassic Parka`).mode({ parka: "spikolodon" });
        }
      }
      return gear
        .baseball()
        .ifEquip(divingHelmet(), tailpiece())
        .delay()
        .freeKill()
        .bathysphere()
        .outfit();
    },
    prepare: () => {
      mood("combat");
      if (get("noncombatForcerActive")) {
        abort("Sneak active while trying to adventure in gymnasium, get rid of it");
      }
    },
    do: gym,
  };
}

const skateBoard = () => (highShiny() ? $item`skate board` : $item`skate blade`);

/** The skate park noncombat under a forcer, the gym first to spend a free one. */
function skateParkTurn(): TaskBody {
  return {
    before: () => {
      if (!parkaForceAvailable() && !leftSkiAvailable() && haveItem($item`Allied Radio Backpack`)) {
        cliExecute("alliedradio misc sniper");
      }
      const board = skateBoard();
      if (
        (pullsRemaining() > reservedPulls() || board === $item`skate board`) &&
        availableAmount(board) === 0
      ) {
        pullSequence(board);
      }
    },
    outfit: () => {
      if (get("noncombatForcerActive")) return {};
      const gear = new Gear("-combat, sea, -weapon", skatePark).forRole("-combat");
      if (availableAmount(skateBoard()) > 0) gear.need(skateBoard());
      return gear.bathysphere($item`toy Cupid bow`).outfit();
    },
    prepare: () => {
      if (!get("noncombatForcerActive")) {
        mood("-combat");
        return;
      }
      equipSwimTrunks();
      cliExecute("unequip peridot");
      if (itemAmount(skateBoard()) > 0) equip(skateBoard());
    },
    do: skatePark,
  };
}

/** One turn towards ending the skate park war. Ready only while it's on. */
export function skateParkWar(): TaskBody {
  const body = branch(
    () => !get("noncombatForcerActive") && (parkaForceAvailable() || leftSkiAvailable()),
    gymnasium(),
    skateParkTurn(),
  );
  return {
    ...body,
    before: () => {
      ncForce();
      body.before?.();
    },
  };
}

export const skateParkAtWar = () => {
  visitUrl("sea_skatepark.php");
  return get("skateParkStatus") === "war";
};

// ─── ELEMENTARY SCHOOL AND LIBRARY ────────────────────────────────────────────

/** Hallpasses go in the closet, so the lounge noncombat doesn't eat one. */
export function closetHallpasses(): void {
  const passes = itemAmount($item`Mer-kin hallpass`);
  if (passes > 0) putCloset(passes, $item`Mer-kin hallpass`);
}

export function getCheatsheet(): TaskBody {
  return {
    before: closetHallpasses,
    outfit: () => {
      let modifier = "item drop,sea";
      if (itemAmount($item`Mer-kin bunwig`) === 0 && availableAmount($item`Mer-kin bunwig`) === 0) {
        modifier += ", hat drop";
      }
      const gear = new Gear(modifier, school).forRole("itdrop");
      if (get("_backUpUses") < 11 && haveItem($item`backup camera`)) {
        gear.need($item`backup camera`);
      } else if (haveSkill($skill`Double-Fisted Skull Smashing`)) {
        gear.need($item`Monodent of the Sea`);
      }
      return gear
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
        .outfit();
    },
    choices: { 1589: "1&victim=852" },
    prepare: () => {
      if (!get("merkinElementaryTeacherUnlock")) mood("-combat");
      mood("itdrop");
      useMapIfAvailable();
      // Leftover Map charges force a monitor here; the refight buys a
      // guaranteed monitor for one turn straight after fighting one.
      mapMonster(school);
    },
    do: school,
    post: () => {
      timeSpinnerRefight(school);
      closetHallpasses();
    },
  };
}

export function merkinLib(): TaskBody {
  return {
    outfit: () => {
      const scroll7 = get("dreadScroll7") === 0;
      const kill = itemAmount($item`Mer-kin killscroll`);
      const heal = itemAmount($item`Mer-kin healscroll`);
      const worktea = itemAmount($item`Mer-kin worktea`);
      const knucklebone = itemAmount($item`Mer-kin knucklebone`);

      const gear = new Gear(heal < 2 ? "item drop,sea" : dropsItems, library)
        .forRole(scroll7 ? "itdrop" : "exp")
        .need($item`Mer-kin scholar mask`, $item`Mer-kin scholar tailpiece`);
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
        (kill === 0 && get("dreadScroll5") === 0)
      ) {
        gear.ifEquip($item`blood cubic zirconia`);
      } else {
        gear.delay();
      }
      return gear.outfit();
    },
    prepare: () => {
      mood("itdrop");
      useMapIfAvailable();
    },
    do: library,
  };
}
