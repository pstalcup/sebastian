// The ascension seed functions arrived in KoLmafia r29389. The kolmafia types
// that declare them are newer than yarn's minimum package age, so they are
// declared here until the dependency is bumped past 5.29389.0.
import "kolmafia";

declare module "kolmafia" {
  export function ascensionSeedProperties(seed: number): { [key: string]: string };
  export function estimatedAscensionSeedPossibilities(): number;
  export function possibleAscensionSeeds(): { [key: number]: number };
}
