import { cliExecute, getClanId, maximize, print, visitUrl, writeCcs } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { args } from "./args";
import { UTS_CCS, UtsEngine } from "./engine";
import { initialization } from "./initialization";
import { iotmChecklist, pullChecklist, skillChecklist } from "./lib/checklists";
import { setDropsItems } from "./lib/gear";
import { postAdventure } from "./lib/postAdventure";
import { GuildQuest } from "./tasks/guild";
import { LassoQuest, MonkeesQuest } from "./tasks/monkees";

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

  if (args.postloop) {
    print("The postloop steps are not ported yet; running UnderTheSea.ash postloop.", "blue");
    cliExecute("UnderTheSea postloop");
    return;
  }

  setDropsItems(maximize("Drops Items", false) ? "Drops Items, sea" : "item drop, sea");
  // Fights still go through the original ASH combat script.
  writeCcs("[ default ]\nconsult UnderTheSeaCCS.ash\nabort", UTS_CCS);

  const clan = getClanId();
  // In seaMonkees() order: the early lasso, the guild, then the quest itself.
  const engine = new UtsEngine(getTasks([LassoQuest, GuildQuest, MonkeesQuest]), {
    ccs: UTS_CCS,
  });

  print("Starting UnderTheSea");
  try {
    initialization();
    // Priming, in case the last run aborted mid-combat.
    postAdventure();
    engine.run();
  } finally {
    engine.destruct();
    // The Sheriff props come from a photo booth in another clan.
    if (getClanId() !== clan) {
      visitUrl(`showclan.php?whichclan=${clan}&action=joinclan&confirm=on`);
    }
    print("Ending UnderTheSea");
  }

  if (args.handoff) {
    print("The ported phases are done; UnderTheSea.ash takes it from here.", "blue");
    cliExecute("UnderTheSea");
  } else {
    print("The ported phases are done. Run UnderTheSea to finish the run.", "blue");
  }
}
