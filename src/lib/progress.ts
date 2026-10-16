import { getProperty, Item, itemAmount, toInt, toSlot } from "kolmafia";
import { $item, $items, $slot, have } from "libram";
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
  return 5 - toInt(getProperty("_saberForceUses"));
}

/** Charges left after the two the unholy diver hunt claims. */
export function forcesAfterDiver(): number {
  return saberChargesLeft() - (diverHuntActive() ? 2 : 0);
}
