import {
  availableAmount,
  availableChoiceOptions,
  haveEffect,
  itemAmount,
  lastChoice,
  myLocation,
  print,
  runChoice,
  setLocation,
  setProperty,
  toInt,
  visitUrl,
  waitq,
} from "kolmafia";
import { $effect, $item, $location, get } from "libram";

import { zoneTarget } from "./lib/iotm";

// The choice adventure script. Ported from UnderTheSea_Choice.ash; mafia
// calls main() for every choice while the run has it set as
// choiceAdventureScript.

const SIMPLE: Record<number, number> = {};
for (const choice of [299, 303, 403, 701, 1468, 1471, 1472, 1473, 1475, 1556, 1564, 1565, 1566]) {
  SIMPLE[choice] = 1;
}
for (const choice of [804, 1469, 1470, 1474, 1494, 1497]) SIMPLE[choice] = 2;
for (const choice of [1340, 1387, 1467]) SIMPLE[choice] = 3;
SIMPLE[705] = 4;
for (const choice of [1312, 1599]) SIMPLE[choice] = 5;

/** Try the stashbox spots in priority order, skipping the ones already checked. */
function stashboxCheck(priority: number[]): void {
  const checked = get("stashboxChecked");
  const option = priority.find((opt) => !checked.includes(`${opt}`));
  if (option === undefined) return;
  runChoice(option);
  setProperty("stashboxChecked", checked === "" ? `${option}` : `${checked},${option}`);
  if (itemAmount($item`Mer-kin stashbox`) > 0) setProperty("stashboxFound", `${option}`);
}

/** Pick the first option whose text contains the keyword. */
function pickChoice(keyword: string): boolean {
  for (const [option, text] of Object.entries(availableChoiceOptions())) {
    if (text.includes(keyword)) {
      runChoice(Number(option));
      return true;
    }
  }
  return false;
}

/** The school noncombats seen, the last five, so the lounge's place in the cycle is known. */
function queueElementary(): void {
  const queue = get("elementaryQueue") || "000, 000, 000, 000, 000";
  setProperty("elementaryQueue", `${queue}, ${lastChoice()}`.slice(5));
}

function dreadScrollPuzzle(): void {
  const scroll = (n: number) => get(`dreadScroll${n}`, 0);
  const prefix = [1, 2, 3, 4, 5, 6].map(scroll).join("");
  const suffix = scroll(8);
  const guesses = get("dreadScrollGuesses");
  let scroll7 = toInt(scroll(7));
  if (scroll7 === 0) {
    scroll7 = [4, 3, 2, 1].find((c) => !guesses.includes(`${prefix}${c}${suffix}`)) ?? 0;
  }
  const answers = [1, 2, 3, 4, 5, 6, 7, 8]
    .map((n) => `pro${n}=${n === 7 ? scroll7 : scroll(n)}`)
    .join("&");
  runChoice(1, answers);
  waitq(3);
  if (haveEffect($effect`Deep-Tainted Mind`) === 0) setProperty("dreadScroll7", `${scroll7}`);
}

/** The Mer-kin catalog: spade an unknown card, and note which card gave each clue. */
function dreadCard(): void {
  const options = availableChoiceOptions();
  if (get("catalogChecked") === "false") {
    setProperty("catalogChecked", "true");
    for (const [option, text] of Object.entries(options)) setProperty(`cardChoice${option}`, text);
  }
  const catalog = get("merkinCatalogChoices");
  const unknown = Object.entries(options).find(([option, text]) =>
    catalog.includes(`${text.slice(0, text.indexOf(":"))}:${option}:unknown`),
  );
  // No unknown card left to spade: the first option rather than none at all.
  const dread = unknown ? Number(unknown[0]) : 1;
  const choice = options[dread];
  runChoice(dread);
  for (const n of [1, 6, 8]) {
    if (get(`DS${n}`) === "true" || toInt(get(`dreadScroll${n}`)) === 0) continue;
    setProperty(`DS${n}`, "true");
    for (let x = 1; x <= 10; x++) {
      if (get(`cardChoice${x}`) === choice) {
        setProperty(`cardChoice${x}`, `${n}:${get(`cardChoice${x}`)}`);
      }
    }
    break;
  }
}

const MOBIUS_KEYWORDS: Record<number, string> = {
  1: "arch-nemesis",
  2: "trifecta",
  3: "Go back and write a best-seller",
  4: "Replace your novel with AI drivel",
};

export function main(choice: number, page: string): void {
  void page;
  if (SIMPLE[choice]) {
    runChoice(SIMPLE[choice]);
    return;
  }
  const intenseCurrents = get("intenseCurrents");
  switch (choice) {
    case 312:
      if (intenseCurrents) runChoice(3);
      break;
    // Stashbox searches, in a different order per lock monster.
    case 313:
      stashboxCheck([1, 3, 2]); // burglar
      break;
    case 314:
      stashboxCheck([1, 2, 3]); // raider
      break;
    case 315:
      if (!intenseCurrents) {
        stashboxCheck([3, 1, 2]); // healer
      } else if (availableAmount($item`Mer-kin prayerbeads`) < 3) {
        runChoice(3);
      } else if (availableAmount($item`Mer-kin killscroll`) === 0 && get("dreadScroll5") === 0) {
        runChoice(1);
      } else if (availableAmount($item`Mer-kin healscroll`) === 0 && get("dreadScroll2") === 0) {
        runChoice(2);
      } else {
        // Nothing needed, but still answer, or mafia drops to manual control.
        runChoice(3);
      }
      break;

    // The Mer-kin school.
    case 396:
    case 397:
    case 398:
      queueElementary();
      break;
    case 399:
    case 400:
      queueElementary();
      setProperty("NCtoC", "true");
      runChoice(1);
      break;
    case 401:
      queueElementary();
      runChoice(2);
      break;

    case 703:
      dreadScrollPuzzle();
      break;
    case 704:
      dreadCard();
      break;
    case 1059:
      if (get("choiceAdventure1059") === "") runChoice(1);
      break;

    // Map the Monsters: the zone's wanted monster, or let mafia resolve it.
    case 1435: {
      const target = zoneTarget(myLocation());
      if (target > 0) runChoice(1, `heyscriptswhatsupwinkwink=${target}`);
      break;
    }
    case 1483:
      runChoice(1);
      runChoice(3);
      break;
    case 1500:
      if (haveEffect($effect`Shadow Waters`) > 0 && !get("_shadowForestLooted")) {
        runChoice(3);
      } else {
        runChoice(2);
      }
      break;

    // The Everfull Dart Holster's perks.
    case 1525:
      for (const [option, text] of Object.entries(availableChoiceOptions())) {
        print(`${option}: ${text}`);
      }
      if (!["impress", "better", "targeting", "Butt"].some((perk) => pickChoice(perk))) {
        runChoice(1);
      }
      break;

    // The Peridot of Peril, from the same table as Map the Monsters.
    case 1557: {
      setProperty("NCtoC", "true");
      const here = myLocation();
      const target = zoneTarget(here);
      if (target > 0) {
        runChoice(1, `bandersnatch=${target}`);
        if (here === $location`The Coral Corral`) runChoice(2);
      }
      break;
    }

    // The Möbius strip.
    case 1562: {
      const keyword = MOBIUS_KEYWORDS[toInt(get("_mobiusStripEncounters"))];
      if (keyword) pickChoice(keyword);
      else if (!pickChoice("investment tips")) pickChoice("from your future self");
      break;
    }

    // The Eternity Codpiece.
    case 1588:
      visitUrl("main.php");
      break;

    // The spade.
    case 1596:
      if (!availableChoiceOptions()[3]) {
        setLocation($location`An Octopus's Garden`);
        runChoice(4);
      } else {
        runChoice(3);
      }
      break;
  }
}
