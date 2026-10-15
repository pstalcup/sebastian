import { create, faxbot, getCampground, use } from "kolmafia";
import { step } from "grimoire-kolmafia";
import { $item, $location, $monster, get, have } from "libram";
import { args } from "../args";
import { at, SeaQuest } from "../engine";
import { getsome } from "../lib";
import { sandDollarTasks } from "./sandDollars";

const MAT = $item`sushi-rolling mat`;
const haveMat = () => getCampground()[MAT.name] !== undefined;

/** Buy a sushi-rolling mat from Big Brother and install it. */
export const SushiMatQuest: SeaQuest = {
  name: "Sushi Mat",
  ready: () => args.sushiMat > 0 && step("questS02Monkees") >= 2,
  completed: haveMat,
  tasks: [
    ...sandDollarTasks(
      "the sushi mat",
      50,
      () => args.sushiMat === 1,
      () => have(MAT) || haveMat(),
    ),
    {
      name: "Buy the Mat",
      after: ["Buy Sand Dollars for the sushi mat", "Farm Sand Dollars for the sushi mat"],
      completed: () => have(MAT) || haveMat(),
      do: () => create(MAT),
      limit: { tries: 1 },
    },
    {
      name: "Install the Mat",
      after: ["Buy the Mat"],
      completed: haveMat,
      do: () => use(MAT),
      limit: { tries: 1 },
    },
  ],
};

const RUSTY = $item`rusty diving helmet`;
const AERATED = $item`aerated diving helmet`;

/** Combine a bubblin' stone with a rusty diving helmet. */
export const HelmetQuest: SeaQuest = {
  name: "Aerated Helmet",
  // The bubblin' stone comes from Big Brother.
  ready: () => args.helmet > 0 && have($item`bubblin' stone`),
  completed: () => have(AERATED),
  tasks: [
    {
      name: "Buy Rusty Helmet",
      ready: () => args.helmet === 1,
      completed: () => have(RUSTY) || have(AERATED),
      do: () => {
        if (!getsome(1, RUSTY)) throw new Error("Unable to buy a rusty diving helmet.");
      },
      limit: { tries: 1 },
    },
    {
      name: "Fax Unholy Diver",
      ready: () => args.helmet === 3 && !get("_photocopyUsed"),
      completed: () => have(RUSTY) || have(AERATED),
      do: () => {
        if (!faxbot($monster`unholy diver`))
          throw new Error("Faxbot failed! Try the script again later.");
        use($item`photocopied monster`);
      },
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Rusty Helmet",
      ready: () => args.helmet !== 1,
      completed: () => have(RUSTY) || have(AERATED),
      ...at($location`The Wreck of the Edgar Fitzsimmons`),
      outfit: { modifier: "item" },
      choices: { 299: 1 },
      limit: { soft: 50 },
    },
    {
      name: "Make the Helmet",
      after: ["Buy Rusty Helmet", "Rusty Helmet"],
      completed: () => have(AERATED),
      do: () => create(AERATED),
      limit: { tries: 1 },
    },
  ],
};
