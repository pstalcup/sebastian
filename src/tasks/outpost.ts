import {
  availableAmount,
  cliExecute,
  equip,
  haveSkill,
  itemAmount,
  myFamiliar,
  pullsRemaining,
  refreshStatus,
  use,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $phylum,
  $skill,
  get,
  have,
  questStep,
  Snapper,
  set,
} from "libram";

import { SebQuest, withHooks } from "../engine";
import { doSWord, pickFamiliar, swordOfSWords } from "../lib/familiar";
import { Gear } from "../lib/gear";
import { baseballD } from "../lib/iotm";
import { mood } from "../lib/mood";
import { oldGuyTurn } from "../lib/oldGuy";
import { pulledToday, pullSequence } from "../lib/pulls";
import {
  baseballPlayers,
  equipSwimTrunks,
  lassoShadow,
  momNCyber,
  ncForceEstimate,
  pillKeeper,
  summon,
} from "../lib/resources";
import { haveItem, highShiny, inAftercore, inSeaPath, lowShiny } from "../lib/state";

import { farmPrayerbeads, recallCaliginous } from "./zones";

// From the golem recall through the Old Guy. Ported from golemRecall(),
// outpost(), recallCaliginous(), pullPrayerbead(), farmPrayerbeads() and the
// stashbox steps in seaMonkees() in UnderTheSea.ash.

const outpost = $location`The Mer-Kin Outpost`;
const sword = swordOfSWords;

const habitatFightsLeft = () => get("_monsterHabitatsFightsLeft");
const habitatsRecalled = () => get("_monsterHabitatsRecalled");
const lockkeyHunt = () => get("merkinLockkeyMonster") !== null;
/** Item drops matter here: few forcers, or no shadow rift to fall back on. */
const scaleHunt = () =>
  (highShiny() || lowShiny() || !haveItem($item`closed-circuit pay phone`)) &&
  itemAmount($item`pristine fish scale`) < 6;

/** The outpost loop runs until the stashbox turns up or the corral opens, and through steps 6 to 8. */
export function outpostActive(): boolean {
  const step = questStep("questS02Monkees");
  return (
    (itemAmount($item`Mer-kin stashbox`) === 0 && !get("corralUnlocked")) ||
    (step >= 6 && step <= 8)
  );
}

/** Kits without the CyberRealm route Back-to-the-Future the abyss from the outpost. */
function bofaCaliginous(): boolean {
  const step = questStep("questS02Monkees");
  return (
    outpostActive() &&
    inSeaPath() &&
    !momNCyber() &&
    lassoShadow() &&
    habitatsRecalled() === 2 &&
    habitatFightsLeft() === 0 &&
    get("momSeaMonkeeProgress") < 40 &&
    step >= 9 &&
    step <= 12
  );
}

function outpostGear(): Gear {
  const lockkey = lockkeyHunt();
  const gear = new Gear(lockkey ? "-combat,sea" : "item drop,sea", outpost);
  if (habitatFightsLeft() === 1 && habitatsRecalled() === 2 && have($familiar`Patriotic Eagle`)) {
    gear.fam($familiar`Patriotic Eagle`);
  } else if (
    doSWord() &&
    outpost.turnsSpent < 26 &&
    (habitatFightsLeft() === 0 || availableAmount($item`crayon shavings`) >= 9)
  ) {
    gear.fam(sword);
  } else if (scaleHunt()) {
    gear.forRole("itdrop");
  } else {
    gear.forRole("-combat");
  }
  gear.bathysphere(lockkey ? $item.none : $item`toy Cupid bow`);

  if (
    habitatFightsLeft() === 1 &&
    habitatsRecalled() === 2 &&
    !have($effect`Everything Looks Purple`) &&
    haveItem($item`Roman Candelabra`)
  ) {
    gear.need($item`Roman Candelabra`);
  } else {
    gear.baseball();
  }
  if (inAftercore() && get("lassoTrainingCount") < 20) {
    gear.need($item`sea cowboy hat`, $item`sea chaps`);
  }
  if (
    get("lastCopyableMonster") === $monster`Black Crayon Golem` &&
    get("_backUpUses") < 7 &&
    haveItem($item`backup camera`) &&
    (outpost.turnsSpent < 26 || lockkey)
  ) {
    gear.need($item`backup camera`);
  } else if (get("_bczSweatBulletsCasts") < 9 && !highShiny()) {
    gear.ifEquip($item`blood cubic zirconia`);
  } else if (lowShiny()) {
    gear.ifEquip($item`Congressional Medal of Insanity`);
  }
  const habitat = get("_monsterHabitatsMonster");
  if (
    (habitat === $monster`eye in the darkness` || habitat === $monster`slithering thing`) &&
    habitatFightsLeft() > 0
  ) {
    gear.need($item`shark jumper`, $item`scale-mail underwear`);
  }
  if ((gear.familiar ?? myFamiliar()) !== sword) gear.need($item`Monodent of the Sea`);
  return lockkey ? gear.delay() : gear.freeKill();
}

export const OutpostQuest: SebQuest = {
  name: "Outpost",
  tasks: [
    {
      name: "Golem recall",
      ready: () =>
        questStep("questS02Monkees") === 6 &&
        inSeaPath() &&
        !highShiny() &&
        haveSkill($skill`Just the Facts`),
      completed: () => get("_monsterHabitatsMonster") !== null || questStep("questS02Monkees") > 6,
      outfit: () =>
        new Gear("item drop")
          .forRole(have($familiar`Red-Nosed Snapper`) ? "itdrop" : "-combat")
          .ifEquip($item`legendary seal-clubbing club`, $item`McHugeLarge left pole`)
          .bathysphere($item`toy Cupid bow`)
          .outfit(),
      prepare: () => {
        if (myFamiliar() === $familiar`Red-Nosed Snapper`) Snapper.trackPhylum($phylum`construct`);
      },
      do: () => {
        summon($monster`Black Crayon Golem`, () =>
          new Gear("item drop")
            .ifEquip($item`legendary seal-clubbing club`, $item`McHugeLarge left pole`)
            .outfit()
            .dress(),
        );
      },
      limit: { tries: 1 },
    },
    {
      // The Old Guy's errand brings the black glass along with it.
      name: "Black glass for the abyss",
      ready: () => bofaCaliginous() && !have($item`black glass`),
      completed: () => have($item`black glass`),
      do: oldGuyTurn,
    },
    {
      name: "Recall the abyss",
      ready: bofaCaliginous,
      completed: () => !bofaCaliginous(),
      ...withHooks(recallCaliginous(), {
        before: () => {
          if (!have($item`Elf Guard SCUBA tank`)) pullSequence($item`Elf Guard SCUBA tank`);
        },
      }),
    },
    {
      name: "Search for the stashbox",
      ready: outpostActive,
      completed: () => !outpostActive(),
      before: () => {
        if (ncForceEstimate() >= 5 && have($effect`Driving Waterproofly`)) {
          pillKeeper("free familiar");
        }
        // With no squint and few forcers, burn the baseball now: the pull it
        // would save may be needed for a pearl necklace.
        if (
          inSeaPath() &&
          !haveSkill($skill`Steely-Eyed Squint`) &&
          ncForceEstimate() < 4 &&
          get("baseballTeam").includes("773") &&
          baseballPlayers() === 9
        ) {
          baseballD();
        }
        if (outpost.turnsSpent < 5) set("stashboxChecked", "0");
        const checked = get("stashboxChecked");
        if (["1", "2", "3"].every((n) => checked.includes(n))) {
          throw new Error("All stashbox locations checked but no stashbox — something went wrong");
        }
      },
      outfit: () => outpostGear().outfit(),
      prepare: () => {
        if (myFamiliar() === sword || scaleHunt()) mood("itdrop");
        if (lockkeyHunt()) mood("-combat");
      },
      do: outpost,
      post: () => {
        if (
          [
            $item`Grandma's Note`,
            $item`Grandma's Fuchsia Yarn`,
            $item`Grandma's Chartreuse Yarn`,
          ].every((item) => itemAmount(item) > 0)
        ) {
          const familiar = pickFamiliar("itdrop");
          if (familiar) useFamiliar(familiar);
          equip($item`really, really nice swimming trunks`);
          cliExecute("grandpa note");
        }
        if (!outpostActive()) refreshStatus();
      },
    },
    {
      name: "Open the stashbox",
      ready: () => itemAmount($item`Mer-kin stashbox`) === 1,
      completed: () => itemAmount($item`Mer-kin stashbox`) === 0,
      do: () => {
        use($item`Mer-kin stashbox`);
        use($item`Mer-kin trailmap`);
        equipSwimTrunks();
        cliExecute("grandpa currents");
      },
      limit: { tries: 1 },
    },
    {
      // The day's pull is free where farming costs a turn, so take it first.
      name: "Pull a prayerbead",
      ready: () => pullsRemaining() > 0,
      completed: () =>
        availableAmount($item`Mer-kin prayerbeads`) >= 3 || pulledToday($item`Mer-kin prayerbeads`),
      do: () => {
        pullSequence($item`Mer-kin prayerbeads`);
      },
      limit: { skip: 1 },
    },
    {
      // Short on noncombat forcers, so get prayerbeads now while -combat is up.
      name: "Prayerbeads",
      ready: () => ncForceEstimate() < 4,
      completed: () => availableAmount($item`Mer-kin prayerbeads`) >= 2,
      ...farmPrayerbeads(),
    },
    {
      name: "Old Guy",
      ready: () => questStep("questS01OldGuy") === 0,
      completed: () => questStep("questS01OldGuy") !== 0,
      do: oldGuyTurn,
    },
  ],
};
