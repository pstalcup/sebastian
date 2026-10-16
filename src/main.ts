import { getClanId, getProperty, maximize, print, visitUrl, writeCcs } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { args } from "./args";
import { COMBAT_SCRIPT, UTS_CCS, UtsEngine } from "./engine";
import { initialization } from "./initialization";
import { iotmChecklist, pullChecklist, skillChecklist } from "./lib/checklists";
import { setDropsItems } from "./lib/gear";
import { inSeaPath } from "./lib/state";
import { postAdventure } from "./lib/postAdventure";
import { GuildQuest } from "./tasks/guild";
import { LassoQuest, MonkeesQuest } from "./tasks/monkees";
import { OutpostQuest } from "./tasks/outpost";
import { PathCleanupQuest, PostloopQuest } from "./tasks/postloop";
import {
  BackupLassoQuest,
  PostSeahorseQuest,
  SeahorseRouteQuest,
  TamingQuest,
  TeflonQuest,
} from "./tasks/seahorse";
import { AfterYogUrtQuest, FinalBossQuest, ShubQuest, YogUrtQuest } from "./tasks/temple";

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (args.sim) {
    // Report only: the checklists the run prints at startup, and nothing else.
    iotmChecklist();
    skillChecklist();
    pullChecklist();
    return;
  }

  setDropsItems(maximize("Drops Items", false) ? "Drops Items, sea" : "item drop, sea");
  // Every fight goes through the ported combat script.
  writeCcs(`[ default ]\nconsult ${COMBAT_SCRIPT}\nabort`, UTS_CCS);

  if (args.postloop) {
    // The finishing steps the run would have reached on its own, without
    // initialization() or any of the run itself. Each self-gates on its own
    // uts_postLoop* pref, so with none set this only sets up and tears down.
    const engine = new UtsEngine(getTasks([PostloopQuest]), { ccs: UTS_CCS });
    print("Starting UnderTheSea (postloop only)");
    try {
      // A run killed mid-walk can leave these set.
      engine.properties.set({ _utsPearlFarm: false, _utsScreechReaim: false });
      engine.run();
    } finally {
      engine.destruct();
      print("Ending UnderTheSea");
    }
    return;
  }

  const clan = getClanId();
  // In seaMonkees() order: the early lasso, the guild, the quest, the outpost,
  // the seahorse, the temple, then past the prism. Every task reads its state
  // from the game, so a rerun picks up where the last one stopped.
  const engine = new UtsEngine(
    getTasks([
      LassoQuest,
      GuildQuest,
      MonkeesQuest,
      OutpostQuest,
      SeahorseRouteQuest,
      TeflonQuest,
      BackupLassoQuest,
      TamingQuest,
      PostSeahorseQuest,
      YogUrtQuest,
      AfterYogUrtQuest,
      ShubQuest,
      FinalBossQuest,
      PathCleanupQuest,
      // The postloop steps wait for the council visit that closes the path.
      { ...PostloopQuest, ready: () => getProperty("_utsCouncilVisited") === "true" },
    ]),
    { ccs: UTS_CCS },
  );

  print("Starting UnderTheSea");
  try {
    initialization();
    // Priming, in case the last run aborted mid-combat.
    postAdventure();
    engine.run();
    if (inSeaPath() && getProperty("questL13Final") !== "finished") {
      print(
        "UTS: no task is ready to run, but the prism isn't broken yet. Check the log above.",
        "red",
      );
    }
  } finally {
    engine.destruct();
    // The Sheriff props come from a photo booth in another clan.
    if (getClanId() !== clan) {
      visitUrl(`showclan.php?whichclan=${clan}&action=joinclan&confirm=on`);
    }
    print("Ending UnderTheSea");
  }
}
