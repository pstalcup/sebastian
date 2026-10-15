import { availableAmount } from "kolmafia";
import { $location } from "libram";
import { at, SeaTask } from "../engine";
import { getsome, SAND_DOLLAR } from "../lib";

/**
 * Tasks that collect sand dollars for a Big Brother purchase, either by buying
 * them or by adventuring in the Octopus's Garden like TheSea.ash did.
 */
export function sandDollarTasks(
  name: string,
  amount: number,
  buy: () => boolean,
  done: () => boolean,
  after: string[] = [],
): SeaTask[] {
  return [
    {
      name: `Buy Sand Dollars for ${name}`,
      after,
      ready: buy,
      completed: () => done() || availableAmount(SAND_DOLLAR) >= amount,
      do: () => {
        if (!getsome(amount, SAND_DOLLAR)) {
          throw new Error(`Unable to buy ${amount} sand dollars for ${name}.`);
        }
      },
      limit: { tries: 1 },
    },
    {
      name: `Farm Sand Dollars for ${name}`,
      after,
      ready: () => !buy(),
      completed: () => done() || availableAmount(SAND_DOLLAR) >= amount,
      ...at($location`An Octopus's Garden`),
      outfit: { modifier: "item" },
      limit: { soft: 100 },
    },
  ];
}
