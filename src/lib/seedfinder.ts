import { cliExecute } from "kolmafia";
import { get, set } from "libram";

import { BANG_POTIONS, bangPotionEffect, debugMode } from "./state";

// The one ASH dependency left: seedfinder, which solves the dreadscroll from
// the clues found so far. It is an ASH library with no TypeScript port, so it
// is called through a one-statement ASH bridge, as the original imported it.

const SEEDFINDER = "seedfinder/seedfinder.ash";

function seedfinder(statement: string): boolean {
  return cliExecute(`ash import <${SEEDFINDER}>; ${statement}`);
}

/**
 * Whether any seed clue beyond the scroll itself exists yet: an identified bang
 * potion or a mapped Daily Dungeon. Until then find_seeds() can only brute-force
 * every seed, so the checks below return early without it.
 */
export function dreadCluesFound(): boolean {
  return (
    BANG_POTIONS.some((potion) => bangPotionEffect(potion) !== "") ||
    // "????_????_????" (or "") until a room is seen
    /[^?_]/.test(get("dailyDungeonRooms"))
  );
}

/** Fill in every dreadscroll answer once the clues pin down a single seed. */
export function dreadSeedCheck(): void {
  if (!dreadCluesFound()) return;
  seedfinder(
    `SeedData[int] s = find_seeds(); ` +
      `if (count(s) == 1) { foreach i, seed in s for x from 1 to 8 if (get_property("dreadScroll" + x) == "0") set_property("dreadScroll" + x, seed.dreadscroll[x - 1]); } ${
        debugMode() ? 'else print(count(s) + " possible seeds right now");' : ""
      }`,
  );
}

/**
 * Whether the seeds left all agree on scrolls 4 and 7 (the knucklebone and
 * sushi clues), so the school can be skipped. False with no seeds at all.
 */
export function isKBandSushiEnough(): boolean {
  const flag = "_sebKBandSushiEnough";
  set(flag, false);
  if (!dreadCluesFound()) return false;
  seedfinder(
    "SeedData[int] s = find_seeds(); boolean ok = count(s) > 0; boolean [string] seen; " +
      'foreach i, seed in s { string key = seed.dreadscroll[3] + ":" + seed.dreadscroll[6]; if (seen contains key) ok = false; seen[key] = true; } ' +
      `set_property("${flag}", ok);`,
  );
  return get(flag, false);
}
