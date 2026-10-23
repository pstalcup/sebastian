import { Args, getTasks } from "grimoire-kolmafia";
import { maximize, print, writeCcs } from "kolmafia";
import { Clan, get, questStep, set } from "libram";

import { args } from "./args";
import { COMBAT_SCRIPT, SEB_CCS, SebEngine, SebQuest } from "./engine";
import { initialization } from "./initialization";
import { iotmChecklist, pullChecklist, skillChecklist } from "./lib/checklists";
import { setDropsItems } from "./lib/gear";
import { postAdventure } from "./lib/postAdventure";
import { inSeaPath } from "./lib/state";
import { printStopLink } from "./lib/stop";
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
  writeCcs(`[ default ]\nconsult ${COMBAT_SCRIPT}\nabort`, SEB_CCS);

  if (args.postloop) {
    // The finishing steps the run would have reached on its own, without
    // initialization() or any of the run itself. Each self-gates on its own
    // seb_postLoop* pref, so with none set this only sets up and tears down.
    const engine = new SebEngine(getTasks([PostloopQuest]), { ccs: SEB_CCS });
    print("Starting UnderTheSea (postloop only)");
    printStopLink();
    try {
      // A run killed mid-walk can leave these set.
      engine.properties.set({ _sebPearlFarm: false, _sebScreechReaim: false });
      engine.run();
    } catch (e) {
      set("_lastScriptError", `${e}`);
      throw e;
    } finally {
      engine.destruct();
      print("Ending UnderTheSea");
    }
    return;
  }

  if (args.boss) set("_sebAftercoreBoss", args.boss);

  const home = Clan.get();
  // Freeing the king at the council drops the path, which makes the aftercore
  // tasks ready. A run that starts in the path stops at the king: its sea
  // quests stay gated on the path, and only the postloop steps run after.
  const startedInPath = inSeaPath();
  const pathOnly = (quest: SebQuest): SebQuest =>
    startedInPath ? { ...quest, ready: () => inSeaPath() && (quest.ready?.() ?? true) } : quest;
  // In seaMonkees() order: the early lasso, the guild, the quest, the outpost,
  // the seahorse, the temple, then past the prism. Every task reads its state
  // from the game, so a rerun picks up where the last one stopped.
  const engine = new SebEngine(
    getTasks([
      ...[
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
      ].map(pathOnly),
      // The postloop steps wait for the council visit that closes the path.
      { ...PostloopQuest, ready: () => get("_sebCouncilVisited", false) },
    ]),
    { ccs: SEB_CCS },
  );

  print("Starting UnderTheSea");
  printStopLink();
  try {
    initialization();
    // Priming, in case the last run aborted mid-combat.
    postAdventure();
    engine.run();
    if (startedInPath && !inSeaPath()) {
      print("SEB: the king is free, so this run is done. Aftercore takes its own run.", "blue");
    } else if (inSeaPath() && questStep("questL13Final") < 999) {
      print(
        "SEB: no task is ready to run, but the prism isn't broken yet. Check the log above.",
        "red",
      );
    }
  } catch (e) {
    // halfloop reads this when cli_execute("sebastian") fails. abort() skips
    // both, so failures throw instead.
    set("_lastScriptError", `${e}`);
    throw e;
  } finally {
    engine.destruct();
    // The Sheriff props come from a photo booth in another clan.
    if (Clan.get().id !== home.id) {
      home.join();
    }
    print("Ending UnderTheSea");
  }
}
