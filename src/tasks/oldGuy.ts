import { create, Item, use, visitUrl } from "kolmafia";
import { step } from "grimoire-kolmafia";
import { $item, have } from "libram";
import { args } from "../args";
import { SeaQuest } from "../engine";
import { sandDollarTasks } from "./sandDollars";

const OLD_MAN = "place.php?whichplace=sea_oldman&action=oldman_oldman";
const BOOT = $item`damp old boot`;

const done = () => step("questS01OldGuy") >= 999;

/** The Old Man's reward to pick for the configured `boot` setting. */
function reward(): Item {
  const boot = $item`das boot`;
  const pipe = $item`fishy pipe`;
  const meat = $item`crate of fish meat`;
  const wallet = $item`damp old wallet`;
  switch (args.boot) {
    case 1:
      return boot;
    case 2:
      return pipe;
    case 3:
      return meat;
    case 4:
      return wallet;
    case 5:
      return !have(boot) ? boot : !have(pipe) ? pipe : meat;
    default:
      return !have(boot) ? boot : !have(pipe) ? pipe : wallet;
  }
}

/** An Old Guy and The Ocean: buy his boot back from Big Brother and pick a reward. */
export const OldGuyQuest: SeaQuest = {
  name: "Old Guy",
  ready: () => args.boot > 0 && step("questS02Monkees") >= 2,
  completed: done,
  tasks: [
    ...sandDollarTasks(
      "the boot",
      50,
      () => args.buyBoot,
      () => have(BOOT) || done(),
    ),
    {
      name: "Buy the Boot",
      after: ["Buy Sand Dollars for the boot", "Farm Sand Dollars for the boot"],
      completed: () => have(BOOT) || done(),
      do: () => create(BOOT),
      limit: { tries: 1 },
    },
    {
      name: "Return the Boot",
      after: ["Buy the Boot"],
      completed: done,
      do: () => {
        const choice = reward();
        visitUrl(OLD_MAN);
        visitUrl(`${OLD_MAN}&preaction=pickreward&whichreward=${choice.id}`);
        if (choice === $item`crate of fish meat` || choice === $item`damp old wallet`) {
          use(choice);
        }
      },
      limit: { tries: 1 },
    },
  ],
};
