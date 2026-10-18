import {
  cliExecute,
  Familiar,
  haveFamiliar,
  myFamiliar,
  print,
  useFamiliar,
  availableAmount,
} from "kolmafia";
import { $effect, $familiar, $item, $monster, get, have, MummingTrunk } from "libram";

import { haveItem, highShiny } from "./state";

// Familiar choices. Ported from use_familiar(string) in UnderTheSea.ash, but
// pure: it names the familiar and the task's outfit puts it on.

// Newer than eslint-plugin-libram's data, so it is named once, here.
// eslint-disable-next-line libram/verify-constants
export const swordOfSWords = $familiar`Sword of S Words`;

export type FamiliarRole = "-combat" | "combat" | "exp" | "itdrop";

/** Pinned item familiar, the original's chosenFamiliar. Unset by default. */
export const chosenFamiliar: Familiar = $familiar.none;

/** Space Jellyfish is only picked for its stench jelly, which NCforce() can chew. */
export function jellyfishReady(): boolean {
  return have($familiar`Space Jellyfish`);
}

/**
 * The familiar a role wants, or undefined to keep the current one when the
 * fallback Grouper Groupie is missing, as the original did.
 */
export function pickFamiliar(role: FamiliarRole): Familiar | undefined {
  const firstOwned = (familiars: Familiar[]) => familiars.find((f) => haveFamiliar(f));
  let familiar: Familiar | undefined;
  switch (role) {
    case "-combat":
      familiar = firstOwned([$familiar`Peace Turkey`, $familiar`Disgeist`]);
      break;
    case "combat":
      familiar = firstOwned([$familiar`Jumpsuited Hound Dog`]);
      break;
    case "exp":
      // Bosses give some exp, but only to a familiar that does not attack.
      familiar =
        firstOwned([
          $familiar`Chest Mimic`,
          $familiar`Melodramedary`,
          $familiar`Cooler Yeti`,
          $familiar`Cookbookbat`,
        ]) ?? $familiar.none;
      break;
    case "itdrop":
      if (chosenFamiliar !== $familiar.none) familiar = chosenFamiliar;
      else if (haveFamiliar($familiar`Red-Nosed Snapper`)) familiar = $familiar`Red-Nosed Snapper`;
      else if (have($effect`Driving Waterproofly`) && haveFamiliar($familiar`Jill-of-All-Trades`))
        familiar = $familiar`Jill-of-All-Trades`;
      else if (jellyfishReady()) familiar = $familiar`Space Jellyfish`;
      break;
  }
  familiar ??= $familiar`Grouper Groupie`;
  if (familiar !== $familiar.none && !haveFamiliar(familiar)) {
    print(`No ${familiar} to switch to; keeping ${myFamiliar()}.`, "red");
    return undefined;
  }
  return familiar;
}

/** Prince George on whichever familiar the item setup settled on, once a day. */
export function mummery(): void {
  if (!haveItem($item`mumming trunk`)) return;
  const costumes = [...MummingTrunk.currentCostumes().values()];
  if (costumes.some(([modifier]) => modifier === "Item Drop")) return;
  if (myFamiliar() === $familiar.none) return;
  cliExecute("mummery item");
}

/** Sword of S Words is set on the sea cowboy and lassos are still short. */
export function doSWord(): boolean {
  if (!have(swordOfSWords) || get("swordOfSWordsMonster") !== $monster`sea cowboy`) return false;
  const lassos = availableAmount($item`sea lasso`);
  if (highShiny() && lassos < 7) return true;
  return !haveItem($item`closed-circuit pay phone`) && lassos < 4;
}

/** use_familiar(string) from the original: switch now, Prince George on item setups. */
export function useRole(role: FamiliarRole): void {
  const familiar = pickFamiliar(role);
  if (familiar) useFamiliar(familiar);
  if (role === "itdrop") mummery();
}
