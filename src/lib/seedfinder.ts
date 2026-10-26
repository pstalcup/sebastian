import {
  ascensionSeedProperties,
  estimatedAscensionSeedPossibilities,
  possibleAscensionSeeds,
} from "kolmafia";
import { get, set } from "libram";

import { debug } from "./state";

// The dreadscroll answers come from the ascension seed, which mafia solves from
// the clues found so far (bang potions, the Daily Dungeon, the scroll itself
// and the other seeded prefs).

// possibleAscensionSeeds() stops at this many, so a list this long is cut short.
const MAX_SEEDS = 1000;
const ANY_SEED = 1_000_000;
const SCROLLS = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * Whether the clues are enough for a seed search to come back complete. Until
 * then possibleAscensionSeeds() would scan every seed only to hit its cap, so
 * the checks below return early without it.
 */
export function dreadCluesFound(): boolean {
  return estimatedAscensionSeedPossibilities() < MAX_SEEDS;
}

/** Every seed the clues allow, or null if there are too many to list. */
function seedsLeft(): number[] | null {
  if (!dreadCluesFound()) return null;
  const seeds = Object.values(possibleAscensionSeeds());
  return seeds.length < MAX_SEEDS ? seeds : null;
}

function dreadScroll(seed: number, n: number): number {
  return Number(ascensionSeedProperties(seed)[`dreadScroll${n}`]);
}

const CHECKED = "_sebDreadSeedChecked";

/** Every pref mafia predicts from the seed, so a change shows a new search is worth running. */
function clueState(): string {
  return Object.keys(ascensionSeedProperties(ANY_SEED))
    .sort()
    .map((pref) => get(pref, ""))
    .join("|");
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
  const seeds = seedsLeft();
  if (seeds === null) return;
  const filled = [];
  if (seeds.length > 0) {
    const answers = seeds.map((seed) => ascensionSeedProperties(seed));
    for (const n of SCROLLS) {
      if (get(`dreadScroll${n}`, 0) !== 0) continue;
      const answer = Number(answers[0][`dreadScroll${n}`]);
      if (answer > 0 && answers.every((props) => Number(props[`dreadScroll${n}`]) === answer)) {
        set(`dreadScroll${n}`, answer);
        filled.push(n);
      }
    }
  }
  debug(`${seeds.length} possible seeds; dreadscroll filled: ${filled.join(" ") || "none"}`);
  // Recorded after the fill, so answers the search just set don't re-run it.
  set(CHECKED, clueState());
}

/**
 * Whether no two seeds left share their scroll 4 and 7 answers (the
 * knucklebone and sushi clues), so those two hints alone pin the seed and the
 * school can be skipped. False with no seeds at all.
 */
export function isKBandSushiEnough(): boolean {
  const seeds = seedsLeft();
  if (seeds === null || seeds.length === 0) return false;
  const keys = seeds.map((seed) => `${dreadScroll(seed, 4)}:${dreadScroll(seed, 7)}`);
  return new Set(keys).size === keys.length;
}
