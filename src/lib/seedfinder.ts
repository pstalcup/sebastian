import { cliExecute, setProperty } from "kolmafia";
import { get } from "libram";

// The one ASH dependency left: seedfinder, which solves the dreadscroll from
// the clues found so far. It is an ASH library with no TypeScript port, so it
// is called through a one-statement ASH bridge, as the original imported it.

const SEEDFINDER = "seedfinder/seedfinder.ash";

function seedfinder(statement: string): boolean {
  return cliExecute(`ash import <${SEEDFINDER}>; ${statement}`);
}

/** Fill in every dreadscroll answer once the clues pin down a single seed. */
export function dreadSeedCheck(): void {
  seedfinder(
    "SeedData[int] s = find_seeds(); " +
      'if (count(s) == 1) { foreach i, seed in s for x from 1 to 8 if (get_property("dreadScroll" + x) == "0") set_property("dreadScroll" + x, seed.dreadscroll[x - 1]); } ' +
      'else print(count(s) + " possible seeds right now");',
  );
}

/**
 * Whether the seeds left all agree on scrolls 4 and 7 (the knucklebone and
 * sushi clues), so the school can be skipped. False with no seeds at all.
 */
export function isKBandSushiEnough(): boolean {
  const flag = "_sebKBandSushiEnough";
  setProperty(flag, "false");
  seedfinder(
    "SeedData[int] s = find_seeds(); boolean ok = count(s) > 0; boolean [string] seen; " +
      'foreach i, seed in s { string key = seed.dreadscroll[3] + ":" + seed.dreadscroll[6]; if (seen contains key) ok = false; seen[key] = true; } ' +
      `set_property("${flag}", ok);`,
  );
  return get(flag) === "true";
}
