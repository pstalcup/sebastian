import { getProperty } from "kolmafia";
import { get } from "libram";
import { UtsQuest, UtsTask } from "../engine";
import { pathCleanup } from "../phases/postloop";
import {
  backupLasso,
  postSeahorse,
  seahorsePrep,
  seahorseRoute,
  seahorseTaming,
  shadowTeflon,
} from "../phases/seahorse";
import { finalBoss, postYogUrt, shub, yogUrt } from "../phases/temple";
import { inSeaPath } from "../lib/state";

// From the seahorse to the prism, in the order seaMonkees() ran it. These
// phases are long procedural loops in the original, so each runs once as a
// whole, in order, and is skipped on a rerun once its own goal is met.

const ran = new Set<string>();

function phase(name: string, run: () => void, done: () => boolean = () => false): UtsTask {
  return {
    name,
    completed: () => ran.has(name) || done(),
    do: () => {
      ran.add(name);
      run();
    },
    limit: { tries: 1 },
  };
}

const tamed = () => getProperty("seahorseName") !== "";

export const EndgameQuest: UtsQuest = {
  name: "Endgame",
  tasks: [
    phase("Diver, abyss and corral", seahorseRoute, tamed),
    phase("Shadow rift and teflon", shadowTeflon),
    phase("Backup lasso training", backupLasso, () => get("lassoTrainingCount") >= 20),
    phase("Seahorse prep", seahorsePrep, tamed),
    phase("Tame the seahorse", seahorseTaming, tamed),
    phase("After the seahorse", postSeahorse),
    phase("Yog-Urt", yogUrt, () => inSeaPath() && get("yogUrtDefeated")),
    phase("After Yog-Urt", postYogUrt),
    phase("Shub-Jigguwatt", shub, () => inSeaPath() && get("shubJigguwattDefeated")),
    phase(
      "Final boss",
      finalBoss,
      () => inSeaPath() && getProperty("questL13Final") !== "unstarted",
    ),
    phase(
      "Path cleanup",
      pathCleanup,
      () => !inSeaPath() || getProperty("questL13Final") !== "finished",
    ),
  ],
};
