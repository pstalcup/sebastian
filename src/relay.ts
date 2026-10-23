import { formFields, write } from "kolmafia";

import { LogEntry, logDay, loggedDays, readLog, Spent } from "./lib/minilog";
import { RELAY_PAGE, requestStop, stopRequested } from "./lib/stop";

// The relay page behind the stop link: relay_sebastian.js, in the relay
// browser's script menu. It runs in the relay server's thread, so it answers
// while the run is going. Below the stop button it shows a day's mini log
// (src/lib/minilog.ts), one row per turn, each opening to the tasks that ran
// on it and what they spent.

function escape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function button(action: string, label: string): string {
  return `<form method="get" action=""><input type="hidden" name="action" value="${action}"><input type="submit" value="${label}"></form>`;
}

const STYLE = `
:root { --bg: #f6f7f9; --card: #fff; --text: #1d2330; --muted: #6b7385; --line: #e2e5eb;
  --accent: #2f6fde; --chip: #eef2fb; --bad: #c4362c; --badbg: #fdeceb; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #15181e; --card: #1e222a; --text: #e4e7ee; --muted: #9098a8; --line: #2e333d;
    --accent: #7aa7ff; --chip: #26304a; --bad: #ff7a70; --badbg: #3a1f1d; }
}
body { background: var(--bg); color: var(--text); font: 14px/1.45 system-ui, sans-serif; margin: 0; padding: 16px; }
main { max-width: 860px; margin: 0 auto; }
h1 { font-size: 20px; margin: 0 0 12px; }
h2 { font-size: 15px; margin: 20px 0 8px; }
a { color: var(--accent); }
.card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 12px 14px; margin-bottom: 12px; }
.card form { display: inline; }
.muted { color: var(--muted); }
.days a, .days b { margin-right: 10px; white-space: nowrap; }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip { background: var(--chip); border-radius: 999px; padding: 1px 9px; font-size: 12px; white-space: nowrap; }
.chip.bad { background: var(--badbg); color: var(--bad); }
details.turn { background: var(--card); border: 1px solid var(--line); border-radius: 8px; margin-bottom: 6px; }
details.turn > summary { cursor: pointer; padding: 8px 12px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap; list-style: none; }
details.turn > summary::-webkit-details-marker { display: none; }
details.turn > summary::before { content: "\\25B8"; color: var(--muted); }
details.turn[open] > summary::before { content: "\\25BE"; }
.num { font-weight: 600; min-width: 72px; font-variant-numeric: tabular-nums; }
.action { border-top: 1px solid var(--line); padding: 8px 12px 8px 34px; }
.action .head { display: flex; gap: 10px; flex-wrap: wrap; align-items: baseline; margin-bottom: 4px; }
.action .task { font-weight: 600; }
.group { margin: 2px 0; }
.group .label { color: var(--muted); font-size: 12px; margin-right: 6px; }
.error { color: var(--bad); font-size: 12px; margin-top: 4px; white-space: pre-wrap; }
.tools { margin: 8px 0; font-size: 13px; }
.tools a { margin-right: 12px; cursor: pointer; }
`;

/** The headings in the order they read best, then any others. */
const ORDER = ["Turns", "Pulls", "Free kills", "Free runs and banishes", "Summons and wishes"];

function headings(spent: Spent): string[] {
  const rest = Object.keys(spent)
    .filter((heading) => !ORDER.includes(heading))
    .sort();
  return [...ORDER.filter((heading) => heading in spent), ...rest];
}

function total(counts: Record<string, number>): number {
  return Object.values(counts).reduce((sum, n) => sum + n, 0);
}

function signed(n: number): string {
  return n > 0 ? `${n}` : `${n}`.replace("-", "−");
}

/** The spent totals added up across entries. */
function sum(spents: Spent[]): Spent {
  const result: Spent = {};
  for (const spent of spents) {
    for (const [heading, counts] of Object.entries(spent)) {
      result[heading] ??= {};
      for (const [name, n] of Object.entries(counts)) {
        result[heading][name] = (result[heading][name] ?? 0) + n;
      }
    }
  }
  return result;
}

/** The heading as a count's noun: "1 turn", "2 free kills". */
function noun(heading: string, n: number): string {
  const word = heading.toLowerCase();
  return n === 1 && /^(turns|pulls|free kills)$/.test(word) ? word.slice(0, -1) : word;
}

/** One chip per heading: its total, with the counters behind it on hover. */
function summaryChips(spent: Spent, skip: string[] = []): string {
  return headings(spent)
    .filter((heading) => !skip.includes(heading))
    .map((heading) => {
      const counts = spent[heading];
      const detail = Object.entries(counts)
        .map(([name, n]) => `${name}: ${signed(n)}`)
        .join(", ");
      const label =
        heading === "Other daily counters"
          ? `${Object.keys(counts).length} other counters`
          : `${signed(total(counts))} ${noun(heading, total(counts))}`;
      return `<span class="chip" title="${escape(detail)}">${escape(label)}</span>`;
    })
    .join("");
}

/** Every counter an action moved, grouped under its heading. */
function detailGroups(spent: Spent): string {
  const groups = headings(spent).map((heading) => {
    const chips = Object.entries(spent[heading])
      .map(([name, n]) => {
        const text = name === heading ? signed(n) : `${name} ${signed(n)}`;
        return `<span class="chip">${escape(text)}</span>`;
      })
      .join("");
    return `<div class="group chips"><span class="label">${escape(heading)}</span>${chips}</div>`;
  });
  return groups.length ? groups.join("") : `<div class="muted">Nothing spent.</div>`;
}

function actionRow(entry: LogEntry): string {
  return `<div class="action"><div class="head"><span class="task">${escape(entry.task)}</span><span class="muted">${escape(entry.time)}</span></div>${detailGroups(entry.spent)}${
    entry.error ? `<div class="error">${escape(entry.error)}</div>` : ""
  }</div>`;
}

function turnRow(turn: number, entries: LogEntry[]): string {
  const spent = sum(entries.map((entry) => entry.spent));
  const failed = entries.some((entry) => entry.error);
  const count = `${entries.length} action${entries.length === 1 ? "" : "s"}`;
  return `<details class="turn"><summary><span class="num">Turn ${turn}</span><span class="muted">${count}</span><span class="chips">${summaryChips(spent)}${
    failed ? `<span class="chip bad">error</span>` : ""
  }</span></summary>${entries.map(actionRow).join("")}</details>`;
}

function logSection(day: string): string {
  const days = loggedDays();
  const dayLinks = days
    .map(({ day: d, date }) => {
      const [ascension, daycount] = d.split("-");
      const label = `Run ${ascension}, day ${daycount}${date ? ` (${date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")})` : ""}`;
      return d === day
        ? `<b>${escape(label)}</b>`
        : `<a href="/${RELAY_PAGE}?day=${encodeURIComponent(d)}">${escape(label)}</a>`;
    })
    .join("");

  const entries = readLog(day);
  if (!entries.length) {
    return `<h2>Mini log</h2>${dayLinks ? `<div class="card days">${dayLinks}</div>` : ""}<div class="card muted">Nothing logged for this day yet. Each task sebastian runs adds a line here when it finishes.</div>`;
  }

  const byTurn = new Map<number, LogEntry[]>();
  for (const entry of entries) {
    const list = byTurn.get(entry.turn) ?? [];
    list.push(entry);
    byTurn.set(entry.turn, list);
  }
  const turns = [...byTurn.keys()].sort((a, b) => a - b);
  const daySpent = sum(entries.map((entry) => entry.spent));

  return `<h2>Mini log</h2>
<div class="card days">${dayLinks}</div>
<div class="card"><div class="muted" style="margin-bottom:6px">${entries.length} actions over turns ${turns[0]} to ${
    turns[turns.length - 1]
  }. Totals for the day:</div><div class="chips">${summaryChips(daySpent)}</div></div>
<div class="tools"><a onclick="document.querySelectorAll('details.turn').forEach(d=>d.open=true)">Expand all</a><a onclick="document.querySelectorAll('details.turn').forEach(d=>d.open=false)">Collapse all</a><a href="/${RELAY_PAGE}?day=${encodeURIComponent(
    day,
  )}">Refresh</a></div>
${turns.map((turn) => turnRow(turn, byTurn.get(turn) ?? [])).join("\n")}`;
}

export function main(): void {
  const fields = formFields();
  const action = fields["action"];
  if (action === "stop") requestStop(true);
  if (action === "cancel") requestStop(false);
  // The day names a file, so only the ascension-daycount shape is read.
  const day = /^\d+-\d+$/.test(fields["day"] ?? "") ? fields["day"] : logDay();

  const status = stopRequested()
    ? "sebastian will stop before its next task. The task running now finishes first."
    : "No stop is requested. sebastian runs until it is done.";
  write(
    `<html><head><title>sebastian</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>${STYLE}</style></head><body><main><h1>sebastian</h1><div class="card"><p style="margin:0 0 8px">${status}</p>${
      stopRequested()
        ? button("cancel", "Keep running")
        : button("stop", "Stop after the current task")
    }</div>${logSection(day)}</main></body></html>`,
  );
}
