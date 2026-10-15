import { create, faxbot, use, visitUrl } from "kolmafia";
import { step } from "grimoire-kolmafia";
import { $effect, $item, $location, $monster, $skill, get, have, set } from "libram";
import { args } from "../args";
import { at, SeaQuest } from "../engine";
import {
  askGrandpa,
  castNoncombatBuffs,
  getsome,
  grandpaZone,
  SAND_DOLLAR,
  visitCastle,
} from "../lib";

const MONKEES = "questS02Monkees";

/** Topics TheSea.ash asks Grandpa about once, which unlock his shop items. */
const GRANDPA_TOPICS = [
  "Wizardfish",
  "avius ticklium",
  "Eel",
  "Neptune flytrap",
  "Octopus",
  "Wreck",
  "Diver",
  "Reef",
  "Belle",
  "Fisherfish",
  "Mine",
  "Clownfish",
  "Lounge lizardfish",
  "Nurse shark",
  "Scales",
  "Groupie",
];

/**
 * Hey Hey, Find The Monkees.
 *
 * TheSea.ash tracked its own progress in seafloor_monkeeStep and scraped the
 * castle for anchors like #littlebrother. KoLmafia now tracks the quest in
 * questS02Monkees, so each task here keys off that instead:
 *
 *   unstarted  find the castle (wriggling flytrap pellet)
 *   started    meet Little Brother
 *   step1      rescue Big Brother from the Wreck
 *   step2-3    talk to the brothers
 *   step4      find Grandpa
 *   step5      ask Grandpa about Grandma
 *   step6-7    collect Grandma's note and the yarn, show Grandpa the note
 *   step8      rescue Grandma from the Outpost
 *   step9-11   talk to the brothers, buy the black glass
 *   step12     find Mom in the Caliginous Abyss
 */
export const MonkeesQuest: SeaQuest = {
  name: "Monkees",
  ready: () => args.monkees > 0,
  tasks: [
    {
      name: "Talk to the Old Man",
      completed: () => step("questS01OldGuy") >= 0,
      do: () => visitUrl("place.php?whichplace=sea_oldman&action=oldman_oldman"),
      limit: { tries: 1 },
    },
    {
      name: "Fax Neptune Flytrap",
      after: ["Talk to the Old Man"],
      ready: () => args.faxNeptune && !get("_photocopyUsed"),
      completed: () => step(MONKEES) >= 0 || have($item`wriggling flytrap pellet`),
      do: () => {
        if (!faxbot($monster`Neptune flytrap`))
          throw new Error("Faxbot failed! Try the script again later.");
        use($item`photocopied monster`);
      },
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Wriggling Flytrap Pellet",
      after: ["Talk to the Old Man"],
      completed: () => step(MONKEES) >= 0 || have($item`wriggling flytrap pellet`),
      ...at($location`An Octopus's Garden`),
      outfit: { modifier: "item" },
      limit: { soft: 30 },
    },
    {
      name: "Find the Castle",
      after: ["Wriggling Flytrap Pellet"],
      completed: () => step(MONKEES) >= 0,
      do: () => use($item`wriggling flytrap pellet`),
      limit: { tries: 1 },
    },
    {
      name: "Little Brother",
      after: ["Find the Castle"],
      completed: () => step(MONKEES) >= 1,
      do: () => visitCastle(1),
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Big Brother",
      after: ["Little Brother"],
      ready: () => args.monkees >= 2,
      completed: () => step(MONKEES) >= 2,
      prepare: castNoncombatBuffs,
      ...at($location`The Wreck of the Edgar Fitzsimmons`),
      outfit: { modifier: "-combat" },
      choices: { 299: 1 },
      limit: { soft: 30 },
    },
    {
      name: "Talk to the Brothers",
      after: ["Big Brother"],
      completed: () => step(MONKEES) >= 4,
      do: () => {
        visitCastle(2);
        visitCastle(1);
      },
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Grandpa",
      after: ["Talk to the Brothers"],
      ready: () => args.monkees >= 3,
      completed: () => step(MONKEES) >= 5,
      prepare: castNoncombatBuffs,
      do: grandpaZone,
      underwater: true,
      outfit: { modifier: "-combat" },
      limit: { soft: 30 },
    },
    {
      name: "Chat with Grandpa",
      after: ["Grandpa"],
      completed: () => get("sebastian_grandpaChat", false),
      do: () => {
        GRANDPA_TOPICS.forEach(askGrandpa);
        set("sebastian_grandpaChat", true);
      },
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Ask Grandpa about the Trophyfish",
      after: ["Grandpa"],
      ready: () => args.unlockTrophyfish,
      completed: () => get("grandpaUnlockedTrophyFish"),
      do: () => askGrandpa("Trophyfish"),
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Ask Grandpa about Grandma",
      after: ["Chat with Grandpa"],
      completed: () => step(MONKEES) >= 6,
      do: () => askGrandpa("Grandma"),
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Grandma's Note",
      after: ["Ask Grandpa about Grandma"],
      ready: () => args.monkees >= 4,
      completed: () =>
        step(MONKEES) >= 8 ||
        (have($item`Grandma's Note`) &&
          have($item`Grandma's Chartreuse Yarn`) &&
          have($item`Grandma's Fuchsia Yarn`)),
      ...at($location`The Mer-kin Outpost`),
      outfit: { modifier: "item" },
      limit: { soft: 40 },
    },
    {
      name: "Show Grandpa the Note",
      after: ["Grandma's Note"],
      completed: () => step(MONKEES) >= 8,
      do: () => askGrandpa("note"),
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Grandma",
      after: ["Show Grandpa the Note"],
      completed: () => step(MONKEES) >= 9,
      prepare: castNoncombatBuffs,
      ...at($location`The Mer-kin Outpost`),
      outfit: { modifier: "-combat" },
      limit: { soft: 30 },
    },
    {
      name: "Black Glass",
      after: ["Grandma"],
      ready: () => args.monkees >= 5,
      completed: () => step(MONKEES) >= 12 || have($item`black glass`),
      do: () => {
        // Little Brother then Big Brother advance the quest to step11, at which
        // point Big Brother will sell us the black glass.
        visitCastle(1);
        visitCastle(2);
        if (!getsome(13, SAND_DOLLAR))
          throw new Error("We need 13 sand dollars to buy the black glass.");
        create($item`black glass`); // bought from Big Brother's coinmaster
      },
      underwater: true,
      limit: { tries: 1 },
    },
    {
      name: "Mom",
      after: ["Black Glass"],
      completed: () => step(MONKEES) >= 999,
      prepare: () => {
        if (args.abyssEquipment === 0) return;
        const allowBuying = args.abyssEquipment === 2;
        const comb = $item`comb jelly`;
        if (!have($effect`Jelly Combed`) && (have(comb) || (allowBuying && getsome(1, comb)))) {
          use(comb);
        }
      },
      ...at($location`The Caliginous Abyss`),
      outfit: () => {
        const allowBuying = args.abyssEquipment === 2;
        const wanted = [$item`black glass`];
        if (args.abyssEquipment > 0) {
          const underwear = $item`scale-mail underwear`;
          if (have(underwear) || (allowBuying && getsome(1, underwear))) wanted.push(underwear);
          const jumper = $item`shark jumper`;
          if (
            have($skill`Torso Awareness`) &&
            (have(jumper) || (allowBuying && getsome(1, jumper)))
          ) {
            wanted.push(jumper);
          }
        }
        return { equip: wanted };
      },
      limit: { soft: 15 },
    },
  ],
};
