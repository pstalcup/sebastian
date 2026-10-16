import {
  availableAmount,
  buyUsingStorage,
  haveEffect,
  Item,
  itemAmount,
  mallPrice,
  pullsRemaining,
  storageAmount,
  takeStorage,
  use,
  userConfirm,
  useSkill,
} from "kolmafia";
import { $effect, $item, $skill, get, have } from "libram";

import { lowShiny } from "./state";

// Hagnk's pulls and luck. Ported from "Game Mechanics" in UnderTheSeaGlobals.ash.

export function pulledToday(item: Item): boolean {
  return get("_roninStoragePulls").split(",").includes(`${item.id}`);
}

/** Pulls the end of the run will want, so earlier phases leave them alone. */
export function reservedPulls(): number {
  let n = 0;
  const prayerbeads = $item`Mer-kin prayerbeads`;
  if (availableAmount(prayerbeads) < 3 && !pulledToday(prayerbeads)) n += 1;
  const cowbell = $item`sea cowbell`;
  if (itemAmount(cowbell) < 3 && !pulledToday(cowbell)) n += 1;
  const combJelly = $item`comb jelly`;
  if (
    !lowShiny() &&
    haveEffect($effect`Jelly Combed`) === 0 &&
    availableAmount(combJelly) === 0 &&
    !pulledToday(combJelly)
  ) {
    n += 1;
  }
  const exploit = $item`null-day exploit`;
  if (
    !get("shubJigguwattDefeated") &&
    itemAmount($item`crayon shavings`) < 4 &&
    itemAmount(exploit) === 0 &&
    !pulledToday(exploit)
  ) {
    n += 1;
  }
  return n;
}

/**
 * Pull one of an item, buying it into storage first if Hagnk's has none.
 * Asks before paying more than autoBuyPriceLimit, like the original.
 */
export function pullSequence(item: Item): boolean {
  if (pullsRemaining() === 0 || pulledToday(item)) return false;
  if (storageAmount(item) === 0) {
    if (mallPrice(item) > get("autoBuyPriceLimit")) {
      if (!userConfirm(`Price of ${item} exceeds autoBuyPriceLimit, skip?`)) {
        throw new Error(`Price of ${item} exceeds autoBuyPriceLimit`);
      }
    }
    buyUsingStorage(item);
  }
  return takeStorage(1, item);
}

/** Get Lucky! from the cheapest source: Aug. 2nd, the heartstone, then a clover. */
export function getLucky(): void {
  if (have($effect`Lucky!`)) return;
  const aug2 = $skill`Aug. 2nd: Find an Eleven-Leaf Clover Day`;
  if (have(aug2) && !get("_aug2Cast") && get("_augSkillsCast") < 5) {
    useSkill(aug2);
    if (have($effect`Lucky!`)) return;
  }
  if (
    availableAmount($item`Heartstone`) > 0 &&
    get("heartstoneLuckUnlocked") &&
    !get("_heartstoneLuckUsed")
  ) {
    useSkill($skill`Heartstone: %luck`);
    if (have($effect`Lucky!`)) return;
  }
  use($item`11-leaf clover`);
}
