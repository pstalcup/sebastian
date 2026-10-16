import { Item, itemAmount, toSlot } from "kolmafia";
import { $item, $items, $slot, have, get } from "libram";

import { haveItem } from "./state";

// What the run still needs. Ported from the "Account states" and Force budget
// helpers in UnderTheSeaGlobals.ash.

export function divingHelmet(): Item {
  return (
    $items`Mer-kin gladiator mask, Mer-kin scholar mask, crappy Mer-kin mask, aerated diving helmet, Elf Guard SCUBA tank`.find(
      (item) => have(item),
    ) ?? $item.none
  );
}

export function tailpiece(): Item {
  return (
    $items`Mer-kin gladiator tailpiece, Mer-kin scholar tailpiece, crappy Mer-kin tailpiece, teflon swim fins`.find(
      (item) => have(item),
    ) ?? $item.none
  );
}

export function diverPartsComplete(): boolean {
  // The craft consumes all three, so an assembled helmet is the done state.
  if (have($item`rusty diving helmet`)) return true;
  return (
    itemAmount($item`rusty rivet`) >= 8 &&
    itemAmount($item`rusty porthole`) > 0 &&
    have($item`rusty broken diving helmet`)
  );
}

export function diverHuntActive(): boolean {
  return !diverPartsComplete() && toSlot(divingHelmet()) !== $slot`hat`;
}

export function seaCowNeeded(): boolean {
  const leather =
    itemAmount($item`sea leather`) +
    (have($item`sea chaps`) ? 1 : 0) +
    (have($item`sea cowboy hat`) ? 1 : 0);
  return leather < 2 || itemAmount($item`sea cowbell`) < 3;
}

export function prayerbeadsShort(): boolean {
  return !have($item`Mer-kin prayerbeads`, 3);
}

/** Use the Force charges left on the saber today. */
export function saberChargesLeft(): number {
  if (!haveItem($item`Fourth of May Cosplay Saber`)) return 0;
  return 5 - get("_saberForceUses");
}

/** Charges left after the two the unholy diver hunt claims. */
export function forcesAfterDiver(): number {
  return saberChargesLeft() - (diverHuntActive() ? 2 : 0);
}

export function diverForceReady(): boolean {
  return diverHuntActive() && saberChargesLeft() > 0;
}

/** Charges left after the diver's two and the healer's one. */
export function forcesAfterHealer(): number {
  return forcesAfterDiver() - (prayerbeadsShort() ? 1 : 0);
}

/** Charges no planned Force has claimed. */
export function saberForcesFree(): number {
  return forcesAfterHealer() - (seaCowNeeded() ? 1 : 0);
}

/** Enough lassos thrown or in hand for the twenty training throws plus taming. */
export function doneWithCowboy(): boolean {
  return get("lassoTrainingCount") + 3 * itemAmount($item`sea lasso`) >= 23;
}

export function doneWithSeaCow(): boolean {
  return !seaCowNeeded();
}

export function cheatsheetsNeeded(): boolean {
  return itemAmount($item`Mer-kin cheatsheet`) < 9 && get("merkinVocabularyMastery") === 0;
}

/** Library-ready: the scholar outfit (or its lounge pieces) and the vocabulary done. */
export function libraryReady(): boolean {
  return (
    (haveItem($item`Mer-kin scholar mask`) || haveItem($item`Mer-kin facecowl`)) &&
    (haveItem($item`Mer-kin scholar tailpiece`) || haveItem($item`Mer-kin waistrope`)) &&
    itemAmount($item`Mer-kin wordquiz`) * 10 + get("merkinVocabularyMastery") >= 90
  );
}

/** Items that lower Yog-Urt's and Shub's stats, one kind each. */
export function delevelers(): number {
  return $items`Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell`.filter(
    (item) => itemAmount(item) > 0,
  ).length;
}

/** Healings Yog-Urt's fight needs, by prayerbeads worn (0 to 3). */
export const YOG_HEALINGS_NEEDED = [21, 5, 3, 1];
