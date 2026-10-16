import { Location } from "kolmafia";
import { Engine, Outfit, Quest, Task } from "grimoire-kolmafia";
import { get, PropertiesManager } from "libram";
import { postAdventure, refreshMPRecovery } from "./lib/postAdventure";

export type UtsTask = Task & {
  /**
   * Setup that has to happen before the outfit is chosen, like spending a
   * noncombat forcer that equips its own gear.
   */
  before?: () => void;
  /**
   * Run post_adv() after the task, as adv() did in the original. Defaults to
   * true when the task adventures in a location and false otherwise.
   */
  postAdventure?: boolean;
};

export type UtsQuest = Quest<UtsTask>;

/** The CCS the run fights with. It consults the combat script. */
export const UTS_CCS = "uts_grimoire";
/** The bundled combat consult script, built from src/combat.ts. */
export const COMBAT_SCRIPT = "sebastian_combat.js";
/** The bundled choice adventure script, built from src/choice.ts. */
export const CHOICE_SCRIPT = "sebastian_choice.js";

export class UtsEngine extends Engine<never, UtsTask> {
  private adventured = false;

  /** Public so postloop mode can set its own properties for the engine to restore. */
  get properties(): PropertiesManager {
    return this.propertyManager;
  }

  createOutfit(task: UtsTask): Outfit {
    task.before?.();
    return super.createOutfit(task);
  }

  do(task: UtsTask): void {
    // Resolve the target once, so a task's do() is never called twice.
    const target = typeof task.do === "function" ? task.do() : task.do;
    this.adventured = target instanceof Location;
    if (target instanceof Location) {
      refreshMPRecovery();
      super.do({ ...task, do: target });
    } else {
      super.do({ ...task, do: () => target });
    }
  }

  post(task: UtsTask): void {
    if (task.postAdventure ?? this.adventured) postAdventure();
    super.post(task);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
    manager.set({
      choiceAdventureScript: CHOICE_SCRIPT,
      mpAutoRecoveryItems: `${get("mpAutoRecoveryItems")};magical mystery juice;doc galaktik's invigorating tonic`,
    });
    // The Force's follow-up choice must be answerable from the property
    // alone, for fights that start outside the choice script's reach.
    manager.setChoice(1387, 3);
  }
}
