import {
  canEquip,
  cliExecute,
  Item,
  Location,
  mallPrice,
  maximize,
  myAdventures,
  myPrimestat,
  print,
  retrieveItem,
  toSkill,
  turnsPerCast,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $effects, $item, $items, $location, $skill, $stat, have, PropertiesManager } from "libram";

/** Effects that let you adventure underwater without breathing gear. */
const BREATHING_EFFECTS = $effects`Driving Waterproofly, Hyperoxygenated Blood, Mer-kinny Flavor, Oxygenated Blood, Pneumatic, Pumped Stomach, Really Deep Breath`;

/** Gear that lets you adventure underwater, best first. */
const BREATHING_GEAR = $items`aerated diving helmet, Mer-kin gladiator mask, Mer-kin scholar mask, crappy Mer-kin mask, old SCUBA tank, makeshift SCUBA gear`;

/**
 * The piece of gear we will wear to breathe underwater, or null if an effect
 * already covers it.
 *
 * TheSea.ash left breathing entirely to the player; this keeps that spirit
 * (we never buy anything) but will put on gear you already own.
 */
export function breathingGear(): Item | null {
  if (BREATHING_EFFECTS.some((effect) => have(effect))) return null;
  const gear = BREATHING_GEAR.find((item) => have(item) && canEquip(item));
  if (!gear) {
    throw new Error(
      "You'll need to figure out how you're going to breathe underwater first... (no breathing effect or gear found)",
    );
  }
  return gear;
}

/** The zone Grandpa is hiding in, which is free to enter for your mainstat. */
export function grandpaZone(): Location {
  switch (myPrimestat()) {
    case $stat`Muscle`:
      return $location`Anemone Mine`;
    case $stat`Mysticality`:
      return $location`The Marinara Trench`;
    default:
      return $location`The Dive Bar`;
  }
}

/**
 * Cast every -combat skill the maximizer suggests, enough times to cover the
 * rest of the day, and shrug any effect it suggests removing.
 *
 * Ported from the `foreach it,entry in maximize("-combat, -tie", ...)` lines in
 * TheSea.ash, which run before each noncombat-heavy zone.
 */
export function castNoncombatBuffs(): void {
  const suggestions = maximize("-combat, -tie", 0, 0, true, false).filter(
    (entry) => entry.score > 0,
  );
  for (const { skill } of suggestions) {
    if (skill !== $skill`none` && turnsPerCast(skill) > 0) {
      useSkill(Math.max(1, Math.ceil(myAdventures() / turnsPerCast(skill))), skill);
    }
  }
  for (const { command, effect } of suggestions) {
    if (command.startsWith("uneffect ") && turnsPerCast(toSkill(effect)) > 0) {
      cliExecute(command);
    }
  }
}

/**
 * Retrieve items, buying from NPCs or the mall at no more than the current
 * mall price. Ported from `getsome` in TheSea.ash.
 */
export function getsome(amount: number, item: Item): boolean {
  if (have(item, amount)) return true;
  const manager = new PropertiesManager();
  try {
    manager.set({
      autoBuyPriceLimit: mallPrice(item),
      autoSatisfyWithMall: true,
      autoSatisfyWithNPCs: true,
    });
    return retrieveItem(amount, item);
  } finally {
    manager.resetAll();
  }
}

export function visitCastle(who?: number): string {
  return visitUrl(who === undefined ? "monkeycastle.php" : `monkeycastle.php?who=${who}`);
}

export function askGrandpa(topic: string): string {
  print(`Talking to Grandpa about ${topic}.`, "blue");
  return visitUrl(`monkeycastle.php?action=grandpastory&topic=${encodeURIComponent(topic)}`);
}

export const SAND_DOLLAR = $item`sand dollar`;
