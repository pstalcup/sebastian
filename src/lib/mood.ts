import {
  cliExecute,
  Effect,
  haveEffect,
  haveSkill,
  Item,
  itemAmount,
  numericModifier,
  print,
  toItem,
  toSkill,
} from "kolmafia";
import { $effect, $effects, $item, $skill, AprilingBandHelmet, get } from "libram";

import { briefcase, sourceEnhance } from "./resources";
import { haveItem, highShiny, lowShiny } from "./state";

// Buffs before an adventure. Ported from mood(string) in UnderTheSea.ash.

export type Mood =
  | "superitdrop"
  | "itdrop"
  | "-combat"
  | "combat"
  | "hotres"
  | "spookyres"
  | "stenchres"
  | "sleazeres"
  | "coldres"
  | "colosseum"
  | "shub";

/** The item an effect's default action consumes, if it is an item. */
export function effectToItem(effect: Effect): Item {
  const action = effect.default;
  for (const verb of ["drink 1 ", "chew 1 ", "eat 1 ", "use 1 "]) {
    if (action.startsWith(verb)) return toItem(action.slice(verb.length));
  }
  return $item.none;
}

function needsMissingSkill(effect: Effect): boolean {
  const skill = toSkill(effect);
  return skill !== $skill.none && !haveSkill(skill);
}

function photoBoothSpent(): boolean {
  return get("_photoBoothEffects") >= 3 || !haveItem($item`Clan VIP Lounge key`);
}

function aprilBandWaiting(): boolean {
  return !AprilingBandHelmet.canChangeSong();
}

function getEffect(effect: Effect): void {
  if (AprilingBandHelmet.MARCHING_SONG_EFFECTS.includes(effect)) {
    AprilingBandHelmet.changeSong(effect);
  } else {
    cliExecute(effect.default);
  }
}

/** The pearl-zone resistance mood for a "hot res" style modifier name. */
export function resMood(res: string): Mood {
  return res.replace(" ", "") as Mood;
}

export function mood(mode: Mood): void {
  switch (mode) {
    case "superitdrop":
    case "itdrop": {
      const wanted = [
        ...(mode === "superitdrop"
          ? $effects`Hustlin', Steely-Eyed Squint, Party Soundtrack, Best Pals`
          : []),
        ...$effects`Who's Going to Pay This Drunken Sailor?, Fat Leon's Phat Loot Lyric, Lubricating Sauce, Thoughtful Empathy, Singer's Faithful Ocelot, Leash of Linguini, Empathy, Donho's Bubbly Ballad, The Ballad of Richie Thingfinder`,
      ];
      for (const effect of wanted) {
        if (needsMissingSkill(effect)) continue;
        if (effect === $effect`Party Soundtrack` && !haveItem($item`Cincho de Mayo`)) continue;
        if (
          (effect === $effect`Thoughtful Empathy` || effect === $effect`Lubricating Sauce`) &&
          !haveItem($item`April Shower Thoughts shield`)
        ) {
          continue;
        }
        if (haveEffect(effect) === 0) getEffect(effect);
      }
      // Both are guarded inside, so this only tops the buffs back up.
      sourceEnhance();
      briefcase();
      print(`Item drop is ${numericModifier("Item Drop")}`);
      return;
    }
    case "-combat": {
      for (const effect of $effects`The Sonata of Sneakiness, Ultra-Soft Steps, Wild and Westy!, Hiding From Seekers, Life Goals, Smooth Movements, Apriling Band Patrol Beat, Silent Running, Feeling Lonely`) {
        if (haveEffect(effect) > 0) continue;
        if (effect === $effect`Ultra-Soft Steps` && itemAmount($item`ultra-soft ferns`) === 0)
          continue;
        if (effect === $effect`Life Goals` && itemAmount($item`Life Goals Pamphlet`) === 0)
          continue;
        if (effect === $effect`Wild and Westy!` && photoBoothSpent()) continue;
        if (effect === $effect`Apriling Band Patrol Beat` && aprilBandWaiting()) continue;
        if (needsMissingSkill(effect)) continue;
        getEffect(effect);
      }
      print(`Combat rate is ${numericModifier("Combat Rate")}`);
      return;
    }
    case "combat": {
      for (const effect of $effects`Carlweather's Cantata of Confrontation, Fresh Breath, Musk of the Moose, Crunchy Steps, Apriling Band Battle Cadence, Towering Muscles, Attracting Snakes, Bloodbathed`) {
        if (haveEffect(effect) > 0) continue;
        if (effect === $effect`Crunchy Steps` && itemAmount($item`crunchy brush`) === 0) continue;
        if (effect === $effect`Towering Muscles` && (!get("yogUrtDefeated") || photoBoothSpent()))
          continue;
        if (effect === $effect`Fresh Breath` && (get("_aug6Cast") || highShiny())) continue;
        if (effect === $effect`Bloodbathed` && lowShiny()) continue;
        if (effect === $effect`Apriling Band Battle Cadence` && aprilBandWaiting()) continue;
        if (needsMissingSkill(effect)) continue;
        getEffect(effect);
      }
      print(`Combat rate is ${numericModifier("Combat Rate")}`);
      return;
    }
    case "hotres":
    case "spookyres":
    case "stenchres":
    case "sleazeres":
    case "coldres": {
      const effects = $effects`Astral Shell, Minor Invulnerability, Elemental Saucesphere`;
      if (mode === "sleazeres" || mode === "coldres") effects.push($effect`Scarysauce`);
      for (const effect of effects) {
        if (
          effect === $effect`Minor Invulnerability` &&
          itemAmount($item`scroll of minor invulnerability`) === 0
        ) {
          continue;
        }
        if (needsMissingSkill(effect)) continue;
        if (haveEffect(effect) === 0) getEffect(effect);
      }
      return;
    }
    case "colosseum": {
      for (const effect of $effects`Ultraheart, Carol of the Hells, Elron's Explosive Etude, Big, Favored by Lyle, The Magical Mojomuscular Melody, Tubes of Universal Meat, Mariachi Moisture, Everybody Calls Him Gorgon`) {
        if (needsMissingSkill(effect)) continue;
        if (effect === $effect`Ultraheart` && !get("heartstoneBuffUnlocked")) continue;
        if (
          effect === $effect`Everybody Calls Him Gorgon` &&
          (!lowShiny() || !haveItem($item`Clan VIP Lounge key`))
        ) {
          continue;
        }
        if (
          (effect === $effect`Tubes of Universal Meat` || effect === $effect`Mariachi Moisture`) &&
          !haveItem($item`April Shower Thoughts shield`)
        ) {
          continue;
        }
        if (haveEffect(effect) === 0) getEffect(effect);
      }
      return;
    }
    case "shub": {
      for (const effect of $effects`Ruthlessly Efficient, Juiced Out, Juiced, Starry-Eyed, Gummiheart, Carol of the Bulls, Song of Bravado, Quiet Desperation, Stevedave's Shanty of Superiority, Rage of the Reindeer`) {
        if (needsMissingSkill(effect)) continue;
        const item = effectToItem(effect);
        if (item !== $item.none && itemAmount(item) === 0) continue;
        if (effect === $effect`Starry-Eyed` && get("telescopeUpgrades") === 0) continue;
        if (haveEffect(effect) === 0) getEffect(effect);
      }
      return;
    }
  }
}
