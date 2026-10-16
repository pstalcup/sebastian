import {
  availableAmount,
  Familiar,
  familiarEquippedEquipment,
  haveFamiliar,
  Item,
  Location,
  myPath,
  myPrimestat,
  print,
  Stat,
  storageAmount,
  toInt,
  toLocation,
} from "kolmafia";
import { $familiar, $item, $location, $stat, get, have } from "libram";

// Account state and small lookups shared by the whole script. Ported from the
// GLOBALS and "Account states" sections of UnderTheSeaGlobals.ash.

/** 11,037 Leagues Under the Sea. */
export const SEA_PATH = 55;

export function inSeaPath(): boolean {
  return myPath().id === SEA_PATH;
}

/** Running the sea outside the path, after the prism has broken. */
export function inAftercore(): boolean {
  return myPath().id === 0;
}

/** Progress tracker, printed in the same "UTS:" style as the original. */
export function step(message: string): void {
  print(`UTS: ${message}`, "blue");
}

/** Owned anywhere: inventory, closet, storage, or worn by a familiar. */
export function haveItem(item: Item): boolean {
  if (availableAmount(item) > 0 || storageAmount(item) > 0) return true;
  return Familiar.all().some(
    (familiar) => haveFamiliar(familiar) && familiarEquippedEquipment(familiar) === item,
  );
}

/** Free fights are worth more to aftercore farming than to the run. */
export function highShiny(): boolean {
  return get("garbo_valueOfFreeFight", 0) > get("valueOfAdventure");
}

/** None of the big three wish-ish IOTMs, so pulls are precious. */
export function lowShiny(): boolean {
  return (
    !haveItem($item`2002 Mr. Store Catalog`) &&
    !haveItem($item`cursed monkey's paw`) &&
    !haveItem($item`august scepter`)
  );
}

const PEARL_RES: Record<string, string> = {
  Mysticality: "hot res",
  Moxie: "sleaze res",
  Muscle: "spooky res",
};

/** The resistance that farms pearls (and survives) in your mainstat's zone. */
export function pearlRes(stat: Stat = myPrimestat()): string {
  return PEARL_RES[stat.toString()];
}

/** The zone Grandpa hides in for your mainstat; it also drops your pearl. */
export function pearlLoc(stat: Stat = myPrimestat()): Location {
  switch (stat) {
    case $stat`Mysticality`:
      return $location`The Marinara Trench`;
    case $stat`Moxie`:
      return $location`The Dive Bar`;
    default:
      return $location`Anemone Mine`;
  }
}

/** The guild test quest for your mainstat. */
export function questProp(stat: Stat = myPrimestat()): string {
  switch (stat) {
    case $stat`Mysticality`:
      return "questG07Myst";
    case $stat`Moxie`:
      return "questG08Moxie";
    default:
      return "questG09Muscle";
  }
}

/** Where the guild test quest for your mainstat is done. */
export function questLoc(stat: Stat = myPrimestat()): Location {
  switch (stat) {
    case $stat`Mysticality`:
      return $location`The Haunted Pantry`;
    case $stat`Moxie`:
      return $location`The Sleazy Back Alley`;
    default:
      return $location`The Outskirts of Cobb's Knob`;
  }
}

/** Fax, locket and chest mimic summons left today. */
export function countSummons(): number {
  let n = 0;
  if (!get("_photocopyUsed") && haveItem($item`Clan VIP Lounge key`)) n += 1;
  if (availableAmount($item`combat lover's locket`) > 0) {
    n +=
      3 -
      get("_locketMonstersFought")
        .split(",")
        .filter((s) => s !== "").length;
  }
  if (have($familiar`Chest Mimic`)) n += Math.floor($familiar`Chest Mimic`.experience / 200);
  return n;
}

/** Whether the Peridot of Peril has already been spent in this zone today. */
export function gotPeriled(location: Location): boolean {
  return get("_perilLocations")
    .split(",")
    .filter((s) => s !== "")
    .some((id) => toLocation(toInt(id)) === location);
}
