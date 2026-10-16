import {
  adv1,
  availableAmount,
  cliExecute,
  getProperty,
  itemAmount,
  maximize,
  myLocation,
  myPrimestat,
  print,
  toFloat,
  toInt,
  use,
  visitUrl,
} from "kolmafia";
import { $effect, $familiar, $item, $location, $monster, $stat, get, have } from "libram";
import { UtsQuest } from "../engine";
import { ashHelpers } from "../lib/ash";
import { doSWord } from "../lib/familiar";
import { dropsItems, Gear } from "../lib/gear";
import { mood, resMood } from "../lib/mood";
import { postAdventure, refreshMPRecovery } from "../lib/postAdventure";
import { pullSequence } from "../lib/pulls";
import {
  baseballPlayers,
  equipSwimTrunks,
  mapMonster,
  mapReady,
  ncForce,
  ncForceEstimate,
  sheriffOutfit,
  summon,
} from "../lib/resources";
import {
  countSummons,
  gotPeriled,
  haveItem,
  highShiny,
  lowShiny,
  pearlLoc,
  pearlRes,
} from "../lib/state";

// The Sea Monkees quest up to asking Grandpa about Grandma. Ported from
// SWordLasso(), flytrap(), fitzsimmons(), grandpa() and the steps between them
// in seaMonkees() in UnderTheSea.ash.

const MONKEES_STEPS = ["unstarted", "started"];

/** questS02Monkees as a number: -1 unstarted, 0 started, N for stepN, 999 finished. */
export function monkeesStep(): number {
  const value = getProperty("questS02Monkees");
  if (value === "finished") return 999;
  const index = MONKEES_STEPS.indexOf(value);
  if (index >= 0) return index - 1;
  return toInt(value.replace("step", ""));
}

const garden = $location`An Octopus's Garden`;
const pellet = $item`wriggling flytrap pellet`;
const sword = $familiar`Sword of S Words`;
const havePellet = () => itemAmount(pellet) > 0;
const flytrapPending = () => monkeesStep() === -1 && !havePellet();

/** The sword and spade route to the skeleton store, for saberless kits. */
const skeletonRoute = () =>
  flytrapPending() &&
  !highShiny() &&
  have(sword) &&
  availableAmount($item`Archaeologist's Spade`) > 0;

let swordLassoTried = false;
let forcingFitzsimmons = false;

/** Sword of S Words, for runs that can't lasso-train in the shadow rift. */
export const LassoQuest: UtsQuest = {
  name: "Lasso",
  tasks: [
    {
      name: "S Word sea cowboy",
      ready: () =>
        have(sword) &&
        countSummons() >= 3 &&
        (highShiny() || !haveItem($item`closed-circuit pay phone`)),
      completed: () => swordLassoTried || toFloat(getProperty("swordOfSWordsMonster")) >= 10,
      outfit: () => new Gear("item drop").fam(sword).baseball().freeKill().outfit(),
      prepare: () => {
        mood("itdrop");
        cliExecute("recover hp");
      },
      do: () => {
        swordLassoTried = true;
        summon($monster`sea cowboy`);
      },
      postAdventure: true,
    },
  ],
};

export const MonkeesQuest: UtsQuest = {
  name: "Sea Monkees",
  tasks: [
    {
      name: "Flytrap: set the sword",
      ready: skeletonRoute,
      completed: () => getProperty("swordOfSWordsMonster") === "740" || !flytrapPending(),
      outfit: () =>
        new Gear(dropsItems, garden)
          .fam(sword)
          .ifEquip($item`Peridot of Peril`)
          .baseball()
          .bathysphere($item`toy Cupid bow`)
          .freeKill()
          .outfit(),
      do: garden,
    },
    {
      name: "Flytrap: skeleton store",
      ready: () => skeletonRoute() && getProperty("swordOfSWordsMonster") === "740",
      completed: () => !flytrapPending() || myLocation() === $location`The Skeleton Store`,
      do: () => {
        if (!get("skeletonStoreAvailable")) visitUrl("shop.php?whichshop=meatsmith&action=talk");
        refreshMPRecovery();
        adv1($location`The Skeleton Store`, -1, "");
        postAdventure();
        while (get("_archSpadeDigs") < 11 && !havePellet()) {
          maximize(dropsItems, false);
          use($item`Archaeologist's Spade`);
          if (myLocation() !== $location`The Skeleton Store`) break;
        }
      },
    },
    {
      // Citizen of a Zone or the red, white and blue ray on the flytrap.
      name: "Flytrap: eagle",
      ready: () => flytrapPending() && have($familiar`Patriotic Eagle`),
      completed: () =>
        have($effect`Citizen of a Zone`) ||
        have($effect`Everything Looks Red, White and Blue`) ||
        !flytrapPending(),
      outfit: () => {
        const gear = new Gear(dropsItems, garden)
          .fam($familiar`Patriotic Eagle`)
          .baseball()
          .bathysphere($item`toy Cupid bow`)
          .freeKill();
        if (!gotPeriled(garden)) gear.ifEquip($item`Peridot of Peril`);
        return gear.outfit();
      },
      do: garden,
    },
    {
      name: "Flytrap: pellet",
      ready: flytrapPending,
      completed: () => !flytrapPending(),
      outfit: () => {
        const rwb = get("rwbMonsterCount");
        const gear = new Gear(dropsItems, garden).forRole("exp").bathysphere($item`toy Cupid bow`);
        if (rwb <= 1 && !getProperty("trackedMonsters").includes("Neptune flytrap")) {
          gear.ifEquip($item`McHugeLarge left pole`);
        } else {
          gear.baseball();
        }
        if (rwb === 0 && !mapReady() && highShiny()) gear.need($item`Monodent of the Sea`);
        if (get("_assertYourAuthorityCast") < 3 && sheriffOutfit() && !highShiny()) {
          gear.need($item`Sheriff moustache`, $item`Sheriff badge`, $item`Sheriff pistol`);
        }
        return gear.freeKill().outfit();
      },
      prepare: () => {
        if (get("rwbMonsterCount") === 0) {
          if (!mapReady()) print("Initiating banishes in Octopus Garden", "red");
          mapMonster(garden);
        }
      },
      do: garden,
      post: () => ashHelpers.timeSpinnerRefight("An Octopus's Garden"),
    },
    {
      name: "Flytrap: use pellet",
      ready: () => monkeesStep() === -1 && havePellet(),
      completed: () => monkeesStep() >= 0,
      do: () => use(pellet),
      limit: { tries: 1 },
    },
    {
      name: "Little Brother",
      ready: () => monkeesStep() === 0,
      completed: () => monkeesStep() >= 1,
      do: () => {
        equipSwimTrunks();
        visitUrl("monkeycastle.php?who=1");
      },
      limit: { tries: 5 },
    },
    {
      name: "Wreck of the Edgar Fitzsimmons",
      ready: () => monkeesStep() === 1,
      completed: () => monkeesStep() >= 2,
      before: () => {
        forcingFitzsimmons = ncForceEstimate() >= 4;
        if (forcingFitzsimmons) ncForce();
      },
      outfit: () => {
        const wreck = $location`The Wreck of the Edgar Fitzsimmons`;
        if (forcingFitzsimmons) {
          return new Gear("item drop,sea, -equip peridot of peril", wreck)
            .bathysphere()
            .ifEquip($item`Möbius ring`)
            .outfit();
        }
        return new Gear("-combat,sea, -equip peridot of peril", wreck)
          .forRole("-combat")
          .need($item`Monodent of the Sea`)
          .ifEquip($item`Möbius ring`)
          .bathysphere($item`toy Cupid bow`)
          .outfit();
      },
      prepare: () => {
        if (!forcingFitzsimmons) mood("-combat");
      },
      do: $location`The Wreck of the Edgar Fitzsimmons`,
    },
    {
      name: "Big Brother",
      ready: () => monkeesStep() === 2,
      completed: () => monkeesStep() >= 3,
      do: () => {
        equipSwimTrunks();
        visitUrl("monkeycastle.php?who=2");
        visitUrl("monkeycastle.php?who=1");
      },
      limit: { tries: 1 },
    },
    {
      name: "Grandpa",
      ready: () => monkeesStep() === 4,
      completed: () => monkeesStep() >= 5,
      before: () => {
        if (!have($effect`Colorfully Concealed`) && !lowShiny()) {
          pullSequence($item`Mer-kin hidepaint`);
          if (itemAmount($item`Mer-kin hidepaint`) > 0) use($item`Mer-kin hidepaint`);
        }
        if (baseballPlayers() >= 9 && get("_baseballInnings") <= 2) ashHelpers.baseballD();
      },
      outfit: () => {
        const gear = new Gear("item drop, sea, -100 combat", pearlLoc());
        if (doSWord()) gear.fam(sword);
        else gear.forRole("itdrop");
        gear
          .need($item`Monodent of the Sea`)
          .delay()
          .ifEquip($item`Möbius ring`)
          .bathysphere($item`toy Cupid bow`);
        const tracked = getProperty("trackedMonsters");
        const stat = myPrimestat();
        if (baseballPlayers() < 9 && availableAmount($item`baseball diamond`) > 0) {
          gear.baseball();
        } else if (
          (stat === $stat`Mysticality` && !tracked.includes("giant squid")) ||
          (stat === $stat`Moxie` && !tracked.includes("Mer-kin tippler"))
        ) {
          gear.ifEquip($item`McHugeLarge left pole`);
        }
        if (get("_bczSweatBulletsCasts") < 9) gear.ifEquip($item`blood cubic zirconia`);
        return gear.outfit();
      },
      prepare: () => {
        if (doSWord()) mood("itdrop");
        mood(resMood(pearlRes()));
        mood("-combat");
      },
      do: () => pearlLoc(),
    },
    {
      name: "Ask Grandpa about Grandma",
      ready: () => monkeesStep() === 5,
      completed: () => monkeesStep() >= 6,
      do: () => cliExecute("grandpa grandma"),
      limit: { tries: 1 },
    },
  ],
};
