import { Modes, Outfit } from "grimoire-kolmafia";
import {
  availableAmount,
  cliExecute,
  Familiar,
  familiarWeight,
  haveEffect,
  haveEquipped,
  Item,
  Location,
  myFamiliar,
  myLocation,
  toInt,
  totalTurnsPlayed,
  useFamiliar,
  weightAdjustment,
} from "kolmafia";
import { $effect, $familiar, $item, $items, $location, have, get } from "libram";

import { FamiliarRole, mummery, pickFamiliar, swordOfSWords } from "./familiar";
import {
  champagneZone,
  cloakeReady,
  cloakeZone,
  codpiece,
  gloveReady,
  macroReady,
  saberReady,
  saberZone,
} from "./iotm";
import { diverForceReady, forcesAfterDiver, prayerbeadsShort } from "./progress";
import { baseballPlayers, bczSweatReady, sheriffOutfit } from "./resources";
import { haveItem, highShiny } from "./state";

// Outfits. Ported from tempEquipment() and the if_equip(), bathysphere(),
// freeKill(), freeRun() and delay() string builders in UnderTheSeaGlobals.ash.
// The original built a comma list of items for the maximizer; here the same
// choices go into a grimoire Outfit, first item to claim a slot wins.

/** Gems the Eternity Codpiece may be holding, emptied before they are worn. */
const CODPIECE_GEMS = new Set(
  $items`Baseball Diamond, Peridot of Peril, Heartstone, blood cubic zirconia`,
);

/** Turns between Möbius strip noncombats, by encounters so far today. */
const MOBIUS_GAPS = [
  0, 4, 7, 13, 19, 25, 31, 41, 41, 41, 41, 41, 51, 51, 51, 51, 51, 76, 76, 76, 76,
];

export function mobiusNCReady(): boolean {
  const gap = MOBIUS_GAPS[toInt(get("_mobiusStripEncounters"))] ?? 76;
  return totalTurnsPlayed() > toInt(get("_lastMobiusStripTurn")) + gap;
}

/** "item drop, sea" or "Drops Items, sea", picked once at startup. */
export let dropsItems = "item drop, sea";
export function setDropsItems(value: string): void {
  dropsItems = value;
}

export class Gear {
  readonly items: Item[] = [];
  private readonly required: Item[] = [];
  private modes: Modes = {};
  private role?: FamiliarRole;
  familiar?: Familiar;

  /**
   * @param modifier Maximizer string, as the original passed to tempEquipment().
   * @param location Where the outfit will adventure. The original read
   *   my_location(), which is the previous zone until the turn is spent.
   */
  constructor(
    readonly modifier: string,
    readonly location: Location = myLocation(),
  ) {}

  /** Use the familiar a role picks. */
  forRole(role: FamiliarRole): this {
    this.role = role;
    this.familiar = pickFamiliar(role);
    return this;
  }

  /** Use this familiar. */
  fam(familiar: Familiar): this {
    this.role = undefined;
    this.familiar = familiar;
    return this;
  }

  /** An item the original wore unconditionally; a missing one stops the run. */
  need(...items: Item[]): this {
    this.items.push(...items);
    this.required.push(...items);
    return this;
  }

  /** Wear the item if it is in hand, emptying the codpiece of it first. */
  ifEquip(...items: Item[]): this {
    for (const item of items) {
      if (CODPIECE_GEMS.has(item) && haveItem($item`The Eternity Codpiece`)) {
        codpiece("none");
      }
      if (item !== $item.none && availableAmount(item) > 0) this.items.push(item);
    }
    return this;
  }

  /** The bathysphere when the familiar cannot breathe water, else the given item. */
  bathysphere(item: Item = $item.none): this {
    // No familiar picked means the current one stays on.
    const familiar = this.familiar ?? myFamiliar();
    if (!familiar.underwater && haveEffect($effect`Driving Waterproofly`) === 0) {
      this.items.push($item`little bitty bathysphere`);
      return this;
    }
    return this.ifEquip(item);
  }

  /** The baseball diamond while the team is short. */
  baseball(): this {
    if (baseballPlayers() < 9 && !highShiny()) this.ifEquip($item`Baseball Diamond`);
    return this;
  }

  /** A free kill source to wear. */
  freeKill(): this {
    if (
      haveEffect($effect`Everything Looks Red`) === 0 &&
      availableAmount($item`Everfull Dart Holster`) > 0
    ) {
      return this.ifEquip($item`Everfull Dart Holster`);
    }
    if (
      highShiny() &&
      (this.familiar ?? myFamiliar()) !== swordOfSWords &&
      haveEffect($effect`Everything Looks Yellow`) === 0
    ) {
      this.modes = { ...this.modes, parka: "dilophosaur" };
      return this.ifEquip($item`Jurassic Parka`);
    }
    if (highShiny()) return this;
    if (
      toInt(get("_assertYourAuthorityCast")) < 3 &&
      sheriffOutfit() &&
      [
        $location`An Octopus's Garden`,
        $location`Mer-kin Gymnasium`,
        $location`The Caliginous Abyss`,
      ].includes(this.location)
    ) {
      return this.need($item`Sheriff moustache`, $item`Sheriff badge`, $item`Sheriff pistol`);
    }
    if (toInt(get("_chestXRayUsed")) < 3 && haveItem($item`Lil' Doctor™ bag`)) {
      return this.need($item`Lil' Doctor™ bag`);
    }
    if (bczSweatReady()) return this.ifEquip($item`blood cubic zirconia`);
    return this;
  }

  /** A free run source to wear, or the Stomping Boots, else a free kill. */
  freeRun(): this {
    if (haveEffect($effect`Everything Looks Green`) === 0) {
      return this.ifEquip($item`spring shoes`);
    }
    const navel = toInt(get("_navelRunaways"));
    if (
      availableAmount($item`Greatest American Pants`) > 0 &&
      (navel < 3 || (navel < 10 && highShiny())) &&
      haveEffect($effect`Driving Waterproofly`) > 0
    ) {
      return this.ifEquip($item`Greatest American Pants`);
    }
    if (availableAmount($item`V for Vivala mask`) > 0 && !get("_vmaskBanisherUsed"))
      return this.ifEquip($item`V for Vivala mask`);
    if (availableAmount($item`latte lovers member's mug`) > 0 && !get("_latteBanishUsed")) {
      return this.ifEquip($item`latte lovers member's mug`);
    }
    const boots = $familiar`Pair of Stomping Boots`;
    if (
      have(boots) &&
      Math.round(familiarWeight(boots) + weightAdjustment() / 5) > toInt(get("_banderRunaways"))
    ) {
      return this.fam(boots);
    }
    return this.freeKill();
  }

  /**
   * The saber, so a healer that slips through gets Forced for a guaranteed
   * prayerbead, while there is a charge to spare after the diver's two.
   */
  healerSaber(): this {
    if (prayerbeadsShort() && forcesAfterDiver() > 0) {
      this.ifEquip($item`Fourth of May Cosplay Saber`);
    }
    return this;
  }

  /** Delay burning: the Kramco, then a free run. */
  delay(): this {
    if (haveItem($item`Kramco Sausage-o-Matic™`) && !highShiny()) {
      this.ifEquip($item`Kramco Sausage-o-Matic™`);
    }
    return this.freeRun();
  }

  /** The saber, where a turn-free exit buys something. */
  saber(): this {
    if (saberReady() && saberZone(this.location)) this.ifEquip($item`Fourth of May Cosplay Saber`);
    return this;
  }

  /** The saber for the summoned diver fights, so the Force is castable. */
  diverSaber(): this {
    if (diverForceReady()) this.need($item`Fourth of May Cosplay Saber`);
    return this;
  }

  /** The vampyric cloake, in the zones ground purely for a drop. */
  cloake(): this {
    if (cloakeReady() && cloakeZone(this.location)) this.need($item`vampyric cloake`);
    return this;
  }

  /** The broken champagne bottle, where a fat table is being rolled. */
  champagne(): this {
    if (champagneZone(this.location)) this.ifEquip($item`broken champagne bottle`);
    return this;
  }

  /** The Powerful Glove's re-roll at the wreck, while Macrometeorite is spent. */
  glove(): this {
    if (
      !macroReady() &&
      gloveReady() &&
      this.location === $location`The Wreck of the Edgar Fitzsimmons`
    ) {
      this.ifEquip($item`Powerful Glove`);
    }
    return this;
  }

  /** Set an item mode, like the original's `modes` CLI string. */
  mode(modes: Modes): this {
    this.modes = { ...this.modes, ...modes };
    return this;
  }

  /** Put the gear on now, as tempEquipment() did. */
  dress(): void {
    this.outfit().dress();
  }

  /** The grimoire outfit for this gear. */
  outfit(): Outfit {
    for (const item of this.required) {
      if (availableAmount(item) === 0) throw new Error(`Missing ${item}`);
    }
    const outfit = new Outfit();
    // As the original did: take the SCUBA tank off before the maximizer runs.
    outfit.beforeDress(() => {
      if (haveEquipped($item`Elf Guard SCUBA tank`)) cliExecute("unequip Elf Guard SCUBA tank");
    });
    if (this.familiar === $familiar.none) {
      // No familiar at all: the outfit can't equip "none", so take it off first.
      outfit.beforeDress(() => useFamiliar($familiar.none));
    } else if (this.familiar) {
      outfit.equip(this.familiar);
    }
    for (const item of this.items) outfit.equip(item);
    if (highShiny() && mobiusNCReady()) outfit.equip($item`Möbius ring`);
    outfit.modifier.push(this.modifier);
    outfit.setModes(this.modes);
    if (this.role === "itdrop") outfit.afterDress(() => mummery());
    return outfit;
  }
}
