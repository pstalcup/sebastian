import {
  bufferToFile,
  fileToBuffer,
  getAllProperties,
  myAscensions,
  myDaycount,
  myMeat,
  myName,
  myTurncount,
  print,
  timeToString,
  todayToString,
} from "kolmafia";
import { get } from "libram";

// The mini log: one line per task the run executes, with the turn it started
// on and what it spent, kept in one file per KoL day in mafia's data folder.
// The relay page (src/relay.ts) reads it back and shows it turn by turn.
//
// What a task spent is the difference in the day's counters across it: the
// daily (underscore) properties mafia keeps for every limited resource, the
// day's pulls, turns and meat. Counters this file knows go under a heading;
// any other daily counter that moved is listed by its property name, so a
// resource nobody thought to name still shows up.

/** A resource heading, and the daily properties that count it. */
const CATEGORIES: Record<string, string[]> = {
  "Free kills": [
    "_shatteringPunchUsed",
    "_gingerbreadMobHitUsed",
    "_chestXRayUsed",
    "_missileLauncherUsed",
    "_firedJokestersGun",
    "_shadowBricksUsed",
    "_assertYourAuthorityCast",
    "_clubEmTimeUsed",
    "_bczSweatBulletsCasts",
    "_saberForceUses",
  ],
  "Free runs and banishes": [
    "_navelRunaways",
    "_banderRunaways",
    "_feelHatredUsed",
    "_snokebombUsed",
    "_latteBanishUsed",
    "_reflexHammerUsed",
    "_kgbTranquilizerDartUses",
    "_cosmicBowlingSkillsUsed",
    "_springKickUsed",
    "_mcHugeLargeAvalancheUses",
  ],
  "Summons and wishes": [
    "_photocopyUsed",
    "_genieFightsUsed",
    "_genieWishesUsed",
    "_monkeyPawWishesUsed",
    "_backUpUses",
    "_mimicEggsObtained",
    "_monsterHabitatsFightsLeft",
  ],
};

const CATEGORY_OF = new Map(
  Object.entries(CATEGORIES).flatMap(([heading, names]) =>
    names.map((name): [string, string] => [name, heading]),
  ),
);

/** Daily properties that move on their own and spend nothing. */
function ignored(name: string): boolean {
  return /^_seb|^_lastScript|turn|last|concoction|refresh/i.test(name);
}

type Counters = Record<string, number>;

/** Every counter the log compares, as it stands now. */
function counters(): Counters {
  const result: Counters = {
    Turns: myTurncount(),
    Meat: myMeat(),
    Pulls: get("_roninStoragePulls").split(",").filter(Boolean).length,
  };
  for (const name of Object.keys(getAllProperties("_", false))) {
    if (!name.startsWith("_") || ignored(name)) continue;
    const value: unknown = get(name);
    if (typeof value === "number") result[name] = value;
    else if (typeof value === "boolean") result[name] = value ? 1 : 0;
  }
  return result;
}

/** What one task spent, by heading, then by counter. */
export type Spent = Record<string, Record<string, number>>;

export type LogEntry = {
  /** The turn count when the task started. */
  turn: number;
  task: string;
  /** Wall-clock time the task finished, HH:MM:SS. */
  time: string;
  spent: Spent;
  /** The error the task threw, if it threw. */
  error?: string;
};

function spentBetween(before: Counters, after: Counters): Spent {
  const spent: Spent = {};
  const add = (heading: string, name: string, amount: number) => {
    spent[heading] ??= {};
    spent[heading][name] = amount;
  };
  for (const name of Object.keys(after)) {
    const delta = after[name] - (before[name] ?? 0);
    if (delta === 0) continue;
    if (name === "Turns" || name === "Pulls") add(name, name, delta);
    else if (name === "Meat") add("Meat", "Meat", delta);
    else add(CATEGORY_OF.get(name) ?? "Other daily counters", name, delta);
  }
  return spent;
}

/** The KoL day a log covers: the ascension and its day count. */
export function logDay(): string {
  return `${myAscensions()}-${myDaycount()}`;
}

/** The log file for a day, in mafia's data folder. */
export function logFile(day: string): string {
  return `sebastian_minilog_${myName()}_${day}.txt`;
}

/** The file listing the days that have a log, oldest first. */
function indexFile(): string {
  return `sebastian_minilog_${myName()}_days.txt`;
}

/** The days with a log, newest first, each with the date it was written. */
export function loggedDays(): { day: string; date: string }[] {
  return fileToBuffer(indexFile())
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [day, date] = line.split("\t");
      return { day, date: date ?? "" };
    })
    .reverse();
}

/** A day's entries, in the order they ran. Lines that don't parse are skipped. */
export function readLog(day: string): LogEntry[] {
  const entries: LogEntry[] = [];
  for (const line of fileToBuffer(logFile(day)).split("\n")) {
    if (!line) continue;
    try {
      entries.push(JSON.parse(line) as LogEntry);
    } catch {
      // A line cut off mid-write.
    }
  }
  return entries;
}

function append(entry: LogEntry): void {
  const day = logDay();
  const file = logFile(day);
  const existing = fileToBuffer(file);
  if (!existing) {
    const index = fileToBuffer(indexFile());
    if (!index.split("\n").some((line) => line.split("\t")[0] === day)) {
      bufferToFile(`${index}${day}\t${todayToString()}\n`, indexFile());
    }
  }
  bufferToFile(`${existing}${JSON.stringify(entry)}\n`, file);
}

/**
 * Run an action and log what it spent. A failure to write the log is printed
 * and otherwise ignored, so the log can never stop a run; the action's own
 * error is logged and rethrown.
 */
export function logged<T>(task: string, action: () => T): T {
  let before: Counters | undefined;
  let turn = 0;
  try {
    before = counters();
    turn = before.Turns;
  } catch (e) {
    print(`SEB: couldn't read counters for the mini log: ${e}`, "red");
  }
  let error: string | undefined;
  try {
    return action();
  } catch (e) {
    error = `${e}`;
    throw e;
  } finally {
    if (before) {
      try {
        append({
          turn,
          task,
          time: timeToString(),
          spent: spentBetween(before, counters()),
          error,
        });
      } catch (e) {
        print(`SEB: couldn't write the mini log: ${e}`, "red");
      }
    }
  }
}
