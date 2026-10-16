import { buy, itemAmount, storageAmount, use, visitUrl } from "kolmafia";
import { $coinmaster, $item, $location, have, get } from "libram";

import { adv } from "./postAdventure";
import { getLucky, pullSequence } from "./pulls";
import { blackGlass } from "./resources";

// An Old Guy and the Ocean: fifty sand dollars for the damp old boot. Ported
// from getSandDollar() and oldGuy() in UnderTheSea.ash.

export function getSandDollar(): void {
  if (itemAmount($item`Mer-kin thingpouch`) > 0) {
    use(itemAmount($item`Mer-kin thingpouch`), $item`Mer-kin thingpouch`);
  } else if (itemAmount($item`sand penny`) >= 100) {
    buy($coinmaster`Wet Crap For Sale`, 1, $item`water-logged pill`);
  } else if (storageAmount($item`damp old wallet`) > 0 && pullSequence($item`damp old wallet`)) {
    use($item`damp old wallet`);
  } else {
    getLucky();
    adv($location`The Mer-Kin Outpost`);
  }
}

export function oldGuy(): void {
  while (itemAmount($item`sand dollar`) < 50) getSandDollar();
  blackGlass();
  if (!have($item`damp old boot`) && get("questS01OldGuy") === "started") {
    buy($coinmaster`Big Brother`, 1, $item`damp old boot`);
  }
  visitUrl(
    "place.php?whichplace=sea_oldman&action=oldman_oldman&preaction=pickreward&whichreward=6313",
  );
}
