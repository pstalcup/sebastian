import { cliExecute } from "kolmafia";

// Bridge to the original ASH helpers that have not been ported yet. Each call
// imports UnderTheSeaGlobals.ash from the installed Astro3207/UnderTheSea
// checkout and runs one statement, so a helper can move into TypeScript later
// without its callers changing.

const GLOBALS = "UnderTheSeaGlobals.ash";

/** Run one ASH statement with the original globals imported. */
export function callGlobals(statement: string): boolean {
  return cliExecute(`ash import <${GLOBALS}>; ${statement}`);
}

/** The original checkout's helpers this port still leans on. */
export const ashHelpers = {
  /** Empties every Eternity Codpiece slot so the gems can be worn. */
  clearCodpiece: () => callGlobals('codpiece("none");'),
  /** Learns the dreadscroll answers the current seed gives away. */
  dreadSeedCheck: () => callGlobals("dreadSeedCheck();"),
  /** Sends the autumn-aton out, upgrading where it can. */
  useAutumnaton: () => callGlobals("useAutumnaton();"),
  /** Reconfigures the model train set at the end of each loop. */
  trainset: () => callGlobals("trainset();"),
  /** Rolls sushi for Fishy when nothing cheaper is left. */
  eatSushi: () => callGlobals("eatSushi();"),
  /** Sets up the baseball diamond's pitching order once nine players are in. */
  baseballD: () => callGlobals("baseballD();"),
  /** Furnishes the Leprecondo with the given furniture ids. */
  leprecondo: (furniture: string) => callGlobals(`leprecondo("${furniture}");`),
  /** Installs duplicate.edu in the Source Terminal and claims the day's embers. */
  sourceEducate: () => callGlobals("sourceEducate();"),
  /** Re-fights the zone's wanted monster with the Time-Spinner. */
  timeSpinnerRefight: (location: string) =>
    callGlobals(`timeSpinnerRefight($location[${location}]);`),
};
