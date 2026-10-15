import { Location, myAdventures } from "kolmafia";
import { Engine, Outfit, Quest, Task } from "grimoire-kolmafia";
import { args } from "./args";
import { breathingGear } from "./lib";

export type SeaTask = Task & {
  /** This task adventures underwater, so it needs breathing gear and a turn to spend. */
  underwater?: boolean;
};

export type SeaQuest = Quest<SeaTask>;

export class SeaEngine extends Engine<never, SeaTask> {
  available(task: SeaTask): boolean {
    // TheSea.ash always kept one adventure in reserve before taking a turn.
    if (task.underwater && myAdventures() <= 1) return false;
    return super.available(task);
  }

  createOutfit(task: SeaTask): Outfit {
    const outfit = super.createOutfit(task);
    if (task.underwater) {
      const gear = breathingGear();
      if (gear && !outfit.equip(gear)) {
        throw new Error(`Unable to wear ${gear} to breathe underwater for ${task.name}.`);
      }
      if (args.modifier) outfit.modifier.push(args.modifier);
    }
    return outfit;
  }
}

/** Helper for tasks that adventure in one location. */
export function at(location: Location): Pick<SeaTask, "do" | "underwater"> {
  return { do: location, underwater: true };
}
