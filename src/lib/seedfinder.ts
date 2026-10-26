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

const CHECKED = "_sebDreadSeedChecked";

/** Every clue seedfinder reads, so a change shows a new search is worth running. */
function clueState(): string {
  return [
    ...BANG_POTIONS.map(bangPotionEffect),
    get("dailyDungeonRooms"),
    ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => get(`dreadScroll${n}`, 0)),
  ].join("|");
}

/** Whether the seed has been searched for since the clues last changed. */
export function dreadSeedChecked(): boolean {
  return get(CHECKED, "") === clueState();
}

/**
 * Fill in each dreadscroll answer that every seed left agrees on: all eight
 * once the clues pin down a single seed, and any the candidates share before
 * then. Each answer filled narrows the next search.
 */
export function dreadSeedCheck(): void {
  if (!dreadCluesFound()) return;
  seedfinder(
    "SeedData[int] s = find_seeds(); string filled = ''; " +
      "if (count(s) > 0) for x from 1 to 8 { " +
      'if (get_property("dreadScroll" + x) != "0") continue; ' +
      "int answer = 0; boolean agree = true; " +
      "foreach i, seed in s { if (answer == 0) answer = seed.dreadscroll[x - 1]; else if (answer != seed.dreadscroll[x - 1]) agree = false; } " +
      `if (agree && answer > 0) { set_property("dreadScroll" + x, answer); filled += " " + x; } } ${
        debugMode()
          ? 'print("SEB: " + count(s) + " possible seeds; dreadscroll filled:" + (filled == "" ? " none" : filled), "blue");'
          : ""
      }`,
  );
  // Recorded after the fill, so answers the search just set don't re-run it.
  set(CHECKED, clueState());
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
