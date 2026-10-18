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
} from "kolmafia";
import {
  $familiar,
  $item,
  $items,
  $location,
  $stat,
  CombatLoversLocket,
  get,
  have,
  PeridotOfPeril,
} from "libram";

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

/** Whether the seb_debug preference asks for the run's routine narration. */
export function debugMode(): boolean {
  return get("seb_debug", false);
}

/**
 * Routine narration (what the run is about to do, what it measured), with
 * the "SEB:" prefix the original printed as "UTS:". Silent unless seb_debug
 * is set: mafia already logs every turn, item and skill the run spends.
 */
export function debug(message: string): void {
  if (debugMode()) print(`SEB: ${message}`, "blue");
}

/** Usable without a pull: inventory, closet, worn, or worn by a familiar. */
export function haveItem(item: Item): boolean {
  if (availableAmount(item) > 0) return true;
  return Familiar.all().some(
    (familiar) => haveFamiliar(familiar) && familiarEquippedEquipment(familiar) === item,
  );
}

/** Owned at all, Hagnk's included: for ownership checks and deciding what to pull. */
export function ownItem(item: Item): boolean {
  return haveItem(item) || storageAmount(item) > 0;
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
  if (CombatLoversLocket.have()) n += CombatLoversLocket.reminiscesLeft();
  if (have($familiar`Chest Mimic`)) n += Math.floor($familiar`Chest Mimic`.experience / 200);
  return n;
}

/** Whether the Peridot of Peril has already been spent in this zone today. */
export function gotPeriled(location: Location): boolean {
  return PeridotOfPeril.periledToday(location);
}

// ─── BANG POTIONS ─────────────────────────────────────────────────────────────

export const BANG_POTIONS = $items`milky potion, swirly potion, bubbly potion, smoky potion, cloudy potion, effervescent potion, fizzy potion, dark potion, murky potion`;

/** What mafia has learned a bang potion does ("inebriety", "detection", ...), or "". */
export function bangPotionEffect(potion: Item): string {
  return get(`lastBangPotion${toInt(potion)}`, "");
}

/** The bang potions on hand that mafia hasn't identified yet. */
export function unknownBangPotions(): Item[] {
  return BANG_POTIONS.filter((potion) => availableAmount(potion) > 0 && !bangPotionEffect(potion));
}

/** The booze potion is known, so every other unknown one is safe to drink. */
export function bangAlcoholKnown(): boolean {
  return BANG_POTIONS.some((potion) => bangPotionEffect(potion).includes("inebriety"));
}

/** The potion of detection, once identified; Object Detection shows every sparkle in a mine. */
export function detectionPotion(): Item | undefined {
  return BANG_POTIONS.find((potion) => bangPotionEffect(potion).includes("detection"));
}
