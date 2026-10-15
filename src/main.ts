import {
  getProperty,
  inebrietyLimit,
  myInebriety,
  myLevel,
  myMeat,
  print,
  putCloset,
  takeCloset,
  visitUrl,
} from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { get } from "libram";
import { args } from "./args";
import { SeaEngine } from "./engine";
import { HelmetQuest, SushiMatQuest } from "./tasks/extras";
import { MonkeesQuest } from "./tasks/monkees";
import { OldGuyQuest } from "./tasks/oldGuy";
import { SkateQuest } from "./tasks/skate";

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (myInebriety() > inebrietyLimit()) {
    print(
      "The Sea is too dangerous to try to traverse while intoxicated to the levels you're attempting. Try again tomorrow.",
      "red",
    );
    return;
  }
  if (myLevel() < 13) {
    print("The Sea is too dangerous for youngsters. Try again when you're older.", "red");
    return;
  }

  // Refresh the Skate Park war status, which KoLmafia only learns by visiting.
  if (args.skate > 0 && get("mapToTheSkateParkPurchased")) visitUrl("sea_skatepark.php");

  const closeted = args.closetMeat >= 0 ? Math.max(0, myMeat() - args.closetMeat) : 0;
  const engine = new SeaEngine(
    getTasks([MonkeesQuest, SkateQuest, OldGuyQuest, SushiMatQuest, HelmetQuest]),
    // TheSea.ash left combat to the player, so fight with their CCS by default.
    { ccs: args.ccs || getProperty("customCombatScript") },
  );
  try {
    if (closeted > 0) putCloset(closeted);
    engine.run();
  } finally {
    engine.destruct();
    if (closeted > 0) takeCloset(closeted);
  }

  const remaining = engine.tasks.filter((task) => !task.completed() && task.ready?.() !== false);
  if (remaining.length > 0) {
    print("Stopped with these steps left:", "orange");
    remaining.forEach((task) => print(`  ${task.name}`, "orange"));
  } else {
    print("The Sea is done for now.", "green");
  }
}
