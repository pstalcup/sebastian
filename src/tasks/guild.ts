import { equip, itemAmount, myFamiliar, myPrimestat, visitUrl } from "kolmafia";
import { $familiar, $item, $phylum, $stat, get, have, Snapper } from "libram";

import { SebQuest } from "../engine";
import { doSWord, swordOfSWords } from "../lib/familiar";
import { Gear } from "../lib/gear";
import { mood } from "../lib/mood";
import { pullSequence } from "../lib/pulls";
import { haveItem, highShiny, inSeaPath, questLoc, questProp } from "../lib/state";

// Opening the guild so the shadow brick is reachable with the pay phone.
// Ported from unlockGuild() in UnderTheSea.ash.

function guildWanted(): boolean {
  return (
    get("questG03Ego") === "unstarted" &&
    itemAmount($item`closed-circuit pay phone`) > 0 &&
    inSeaPath() &&
    !highShiny()
  );
}

const testState = () => get(questProp());
const tearawayShortcut = () => myPrimestat() === $stat`Moxie` && haveItem($item`tearaway pants`);

function testGear(): Gear {
  const gear = new Gear("item drop", questLoc());
  if (doSWord()) gear.fam(swordOfSWords);
  else if (have($familiar`Artistic Goth Kid`)) gear.fam($familiar`Artistic Goth Kid`);
  else if (have($familiar`Red-Nosed Snapper`)) gear.forRole("itdrop");
  else gear.forRole("-combat");
  gear
    .need($item`Monodent of the Sea`)
    .ifEquip($item`Möbius ring`, $item`Everfull Dart Holster`, $item`toy Cupid bow`);
  if (haveItem($item`Greatest American Pants`)) {
    gear.ifEquip($item`Greatest American Pants`);
  } else if (haveItem($item`navel ring of navel gazing`)) {
    gear.ifEquip($item`navel ring of navel gazing`);
  } else {
    gear.ifEquip($item`designer sweatpants`);
  }
  return gear.delay();
}

export const GuildQuest: SebQuest = {
  name: "Guild",
  tasks: [
    {
      name: "Challenge",
      ready: () => guildWanted() && testState() !== "started",
      completed: () => testState() === "finished",
      do: () => {
        // Moxie can skip the grind in tearaway pants.
        if (tearawayShortcut()) equip($item`tearaway pants`);
        visitUrl("guild.php?place=challenge");
      },
      limit: { tries: 3 },
    },
    {
      name: "Test",
      ready: () => guildWanted() && testState() === "started" && !tearawayShortcut(),
      completed: () => testState() !== "started",
      before: () => {
        if (
          haveItem($item`Greatest American Pants`) &&
          itemAmount($item`Greatest American Pants`) === 0
        ) {
          pullSequence($item`Greatest American Pants`);
        }
      },
      outfit: () => testGear().outfit(),
      prepare: () => {
        if (myFamiliar() === $familiar`Red-Nosed Snapper`) Snapper.trackPhylum($phylum`fish`);
        mood("itdrop");
      },
      do: () => questLoc(),
      // The original spends these turns with adv1(), skipping post_adv().
      postAdventure: false,
    },
    {
      name: "Open the Ego quest",
      ready: () => guildWanted() && testState() === "finished",
      completed: () => get("questG03Ego") !== "unstarted",
      do: () => {
        visitUrl("guild.php?place=ocg");
        visitUrl("guild.php?place=ocg");
      },
      limit: { tries: 1 },
    },
  ],
};
