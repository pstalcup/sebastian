import { availableAmount, create, Item, visitUrl } from "kolmafia";
import { step } from "grimoire-kolmafia";
import { $item, $location, get } from "libram";
import { args } from "../args";
import { at, SeaQuest } from "../engine";
import { getsome } from "../lib";
import { sandDollarTasks } from "./sandDollars";

const mapBought = () => get("mapToTheSkateParkPurchased");
const atWar = () => get("skateParkStatus") === "war";

/** The weapon to fight with, and which side to take in choice 403 (Picking Sides). */
function skateSide(): { weapon: Item; choice: number } {
  switch (args.skate) {
    case 1:
      return { weapon: $item`skate blade`, choice: 1 };
    case 2:
      return { weapon: $item`brand new key`, choice: 2 };
    default:
      return {
        weapon: $item`skate board`,
        choice: availableAmount($item`skate blade`) > availableAmount($item`brand new key`) ? 2 : 1,
      };
  }
}

/** Unlock the Skate Park and, optionally, end the war there. */
export const SkateQuest: SeaQuest = {
  name: "Skate Park",
  ready: () => args.skate > 0 && step("questS02Monkees") >= 2,
  completed: () => mapBought() && (args.skate === 4 || !atWar()),
  tasks: [
    ...sandDollarTasks("the Skate Park map", 25, () => args.buySkateMap, mapBought),
    {
      name: "Buy the Map",
      after: [
        "Buy Sand Dollars for the Skate Park map",
        "Farm Sand Dollars for the Skate Park map",
      ],
      completed: mapBought,
      do: () => {
        create($item`map to the Skate Park`);
        visitUrl("seafloor.php"); // lets KoLmafia notice the new zone
      },
      limit: { tries: 1 },
    },
    {
      name: "Buy Weapon",
      after: ["Buy the Map"],
      ready: () => args.buySkateBoard && args.skate <= 3,
      completed: () => availableAmount(skateSide().weapon) > 0 || !atWar(),
      do: () => {
        const { weapon } = skateSide();
        if (!getsome(1, weapon)) throw new Error(`Unable to buy a ${weapon}.`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Find Weapon",
      after: ["Buy the Map"],
      ready: () => args.skate <= 3,
      completed: () => availableAmount(skateSide().weapon) > 0 || !atWar(),
      ...at($location`The Skate Park`),
      choices: () => ({ 403: skateSide().choice }),
      limit: { soft: 10 },
    },
    {
      name: "End the War",
      after: ["Find Weapon"],
      ready: () => args.skate <= 3,
      completed: () => !atWar(),
      ...at($location`The Skate Park`),
      outfit: () => ({ weapon: skateSide().weapon }),
      choices: () => ({ 403: skateSide().choice }),
      limit: { soft: 10 },
    },
  ],
};
