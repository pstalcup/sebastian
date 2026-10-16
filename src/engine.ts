import { Engine, Outfit, Quest, Task } from "grimoire-kolmafia";
import { Location } from "kolmafia";
import { get, PropertiesManager } from "libram";

import { postAdventure, refreshMPRecovery } from "./lib/postAdventure";

export type SebTask = Task & {
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

export type SebQuest = Quest<SebTask>;

/**
 * How a task acts, without when: the outfit, setup and turn. Several tasks
 * farm the same zone the same way under different conditions, so they share
 * a body and differ only in ready() and completed().
 */
export type TaskBody = Pick<SebTask, "before" | "outfit" | "prepare" | "do" | "post" | "choices">;

function resolve<T>(value: T | (() => T)): T {
  return typeof value === "function" ? (value as () => T)() : value;
}

/**
 * One of two bodies, picked in before() and kept for the rest of the
 * execution, so a turn that changes the condition can't switch bodies
 * between the outfit and the post.
 */
export function branch(pick: () => boolean, yes: TaskBody, no: TaskBody): TaskBody {
  let body = no;
  return {
    before: () => {
      body = pick() ? yes : no;
      body.before?.();
    },
    outfit: () => resolve(body.outfit) ?? {},
    choices: () => resolve(body.choices) ?? {},
    prepare: () => body.prepare?.(),
    do: () => (body.do instanceof Location ? body.do : body.do()),
    post: () => body.post?.(),
  };
}

/**
 * The body with extra setup before its own before() and extra cleanup after
 * its own post(). Setting before or post beside a spread body would replace
 * the body's hook instead of adding to it, so tasks add hooks through this.
 */
export function withHooks(body: TaskBody, hooks: Pick<TaskBody, "before" | "post">): TaskBody {
  return {
    ...body,
    before: () => {
      hooks.before?.();
      body.before?.();
    },
    post: () => {
      body.post?.();
      hooks.post?.();
    },
  };
}

/** The CCS the run fights with. It consults the combat script. */
export const SEB_CCS = "seb_grimoire";
/** The bundled combat consult script, built from src/combat.ts. */
export const COMBAT_SCRIPT = "sebastian_combat.js";
/** The bundled choice adventure script, built from src/choice.ts. */
export const CHOICE_SCRIPT = "sebastian_choice.js";

export class SebEngine extends Engine<never, SebTask> {
  private adventured = false;

  /** Public so postloop mode can set its own properties for the engine to restore. */
  get properties(): PropertiesManager {
    return this.propertyManager;
  }

  createOutfit(task: SebTask): Outfit {
    task.before?.();
    return super.createOutfit(task);
  }

  do(task: SebTask): void {
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

  post(task: SebTask): void {
    if (task.postAdventure ?? this.adventured) postAdventure();
    super.post(task);
  }

  initPropertiesManager(manager: PropertiesManager): void {
    super.initPropertiesManager(manager);
    manager.set({
      choiceAdventureScript: CHOICE_SCRIPT,
      mpAutoRecoveryItems: `${get("mpAutoRecoveryItems")};magical mystery juice;doc galaktik's invigorating tonic`,
      // The run retunes recovery as it goes (setMPRecovery(), the bosses).
      // Registering the current values here puts them back at the end.
      hpAutoRecovery: get("hpAutoRecovery"),
      hpAutoRecoveryTarget: get("hpAutoRecoveryTarget"),
      mpAutoRecovery: get("mpAutoRecovery"),
      mpAutoRecoveryTarget: get("mpAutoRecoveryTarget"),
    });
    // The saber's daily upgrade: the familiar weight chip.
    manager.setChoice(1386, 4);
    // The Force's follow-up choice must be answerable from the property
    // alone, for fights that start outside the choice script's reach.
    manager.setChoice(1387, 3);
  }
}
