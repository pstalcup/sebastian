import {
  abort,
  availableAmount,
  buy,
  cliExecute,
  equip,
  getProperty,
  haveSkill,
  itemAmount,
  myFamiliar,
  pullsRemaining,
  refreshStatus,
  setProperty,
  toInt,
  use,
  useFamiliar,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $location,
  $monster,
  $skill,
  get,
  have,
} from "libram";
import { UtsQuest } from "../engine";
import { baseballD } from "../lib/iotm";
import { doSWord, pickFamiliar } from "../lib/familiar";
import { Gear } from "../lib/gear";
import { mood } from "../lib/mood";
import { oldGuy } from "../lib/oldGuy";
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
import { abyssRecallGear, prayerbeadGear } from "../phases/shared";
import { monkeesStep } from "./monkees";

// From the golem recall through the Old Guy. Ported from golemRecall(),
// outpost(), recallCaliginous(), pullPrayerbead(), farmPrayerbeads() and the
// stashbox steps in seaMonkees() in UnderTheSea.ash.

const outpost = $location`The Mer-Kin Outpost`;
const abyss = $location`The Caliginous Abyss`;
const sword = $familiar`Sword of S Words`;

const habitatFightsLeft = () => toInt(getProperty("_monsterHabitatsFightsLeft"));
const habitatsRecalled = () => toInt(getProperty("_monsterHabitatsRecalled"));
const lockkeyHunt = () => getProperty("merkinLockkeyMonster") !== "";
/** Item drops matter here: few forcers, or no shadow rift to fall back on. */
const scaleHunt = () =>
  (highShiny() || lowShiny() || !haveItem($item`closed-circuit pay phone`)) &&
  itemAmount($item`pristine fish scale`) < 6;

/** The outpost loop runs until the stashbox turns up or the corral opens, and through steps 6 to 8. */
export function outpostActive(): boolean {
  const step = monkeesStep();
  return (
    (itemAmount($item`Mer-kin stashbox`) === 0 && !get("corralUnlocked")) ||
    (step >= 6 && step <= 8)
  );
}

/** Kits without the CyberRealm route Back-to-the-Future the abyss from the outpost. */
function bofaCaliginous(): boolean {
  const step = monkeesStep();
  return (
    outpostActive() &&
    inSeaPath() &&
    !momNCyber() &&
    lassoShadow() &&
    habitatsRecalled() === 2 &&
    habitatFightsLeft() === 0 &&
    toInt(getProperty("momSeaMonkeeProgress")) < 40 &&
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
    getProperty("lastCopyableMonster") === "Black Crayon Golem" &&
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
  const habitat = getProperty("_monsterHabitatsMonster");
  if (
    (habitat === "eye in the darkness" || habitat === "slithering thing") &&
    habitatFightsLeft() > 0
  ) {
    gear.need($item`shark jumper`, $item`scale-mail underwear`);
  }
  if ((gear.familiar ?? myFamiliar()) !== sword) gear.need($item`Monodent of the Sea`);
  return lockkey ? gear.delay() : gear.freeKill();
}

let prayerbeadPullTried = false;

export const OutpostQuest: UtsQuest = {
  name: "Outpost",
  tasks: [
    {
      name: "Golem recall",
      ready: () =>
        monkeesStep() === 6 && inSeaPath() && !highShiny() && haveSkill($skill`Just the Facts`),
      completed: () => getProperty("_monsterHabitatsMonster") !== "" || monkeesStep() > 6,
      outfit: () =>
        new Gear("item drop")
          .forRole(have($familiar`Red-Nosed Snapper`) ? "itdrop" : "-combat")
          .ifEquip($item`legendary seal-clubbing club`, $item`McHugeLarge left pole`)
          .bathysphere($item`toy Cupid bow`)
          .outfit(),
      prepare: () => {
        if (myFamiliar() === $familiar`Red-Nosed Snapper`) cliExecute("snapper construct");
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
      name: "Recall the abyss",
      ready: bofaCaliginous,
      completed: () => !bofaCaliginous(),
      before: () => {
        if (!have($item`black glass`)) oldGuy();
        if (!have($item`Elf Guard SCUBA tank`)) pullSequence($item`Elf Guard SCUBA tank`);
        if (!have($item`black glass`)) buy($coinmaster`Big Brother`, 1, $item`black glass`);
      },
      outfit: () => abyssRecallGear().outfit(),
      prepare: () => {
        if (!have($effect`Jelly Combed`) && pullSequence($item`comb jelly`)) use($item`comb jelly`);
      },
      do: abyss,
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
          getProperty("baseballTeam").includes("773") &&
          baseballPlayers() === 9
        ) {
          baseballD();
        }
        if (outpost.turnsSpent < 5) setProperty("stashboxChecked", "0");
        const checked = getProperty("stashboxChecked");
        if (["1", "2", "3"].every((n) => checked.includes(n))) {
          abort("All stashbox locations checked but no stashbox — something went wrong");
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
        prayerbeadPullTried ||
        availableAmount($item`Mer-kin prayerbeads`) >= 3 ||
        pulledToday($item`Mer-kin prayerbeads`),
      do: () => {
        prayerbeadPullTried = true;
        pullSequence($item`Mer-kin prayerbeads`);
      },
    },
    {
      // Short on noncombat forcers, so get prayerbeads now while -combat is up.
      name: "Wish for prayerbeads",
      ready: () =>
        ncForceEstimate() < 4 &&
        haveItem($item`cursed monkey's paw`) &&
        get("_monkeyPawWishesUsed") < 5,
      completed: () => availableAmount($item`Mer-kin prayerbeads`) >= 2,
      do: () => cliExecute("monkeypaw wish mer-kin prayerbeads"),
      limit: { tries: 5 },
    },
    {
      name: "Farm prayerbeads",
      ready: () =>
        ncForceEstimate() < 4 &&
        !(haveItem($item`cursed monkey's paw`) && get("_monkeyPawWishesUsed") < 5),
      completed: () => availableAmount($item`Mer-kin prayerbeads`) >= 2,
      outfit: () => prayerbeadGear().outfit(),
      prepare: () => mood("-combat"),
      do: outpost,
    },
    {
      name: "Old Guy",
      ready: () => getProperty("questS01OldGuy") === "started",
      completed: () => getProperty("questS01OldGuy") !== "started",
      do: () => oldGuy(),
      limit: { tries: 1 },
    },
  ],
};
