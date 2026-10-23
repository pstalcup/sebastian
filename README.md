# sebastian

Runs the Kingdom of Loathing path 11,037 Leagues Under the Sea in KoLmafia. It is a TypeScript port
of [UnderTheSea](https://github.com/Astro3207/UnderTheSea) onto
[grimoire](https://github.com/loathers/grimoire) and [libram](https://github.com/loathers/libram).

## Installation

```
git checkout pstalcup/sebastian release
```

The one ASH dependency left is [seedfinder](https://github.com/VeeArrKoL/seedfinder), which solves the
dreadscroll, as it was for the original:

```
git checkout VeeArrKoL/seedfinder
```

Then:

```
sebastian          # the whole run, from startup through the prism
sebastian sim      # print the IOTM, skill and pull checklists and stop
sebastian postloop # only the postloop steps (pilsners, pearls, the eagle re-aim, the codpiece)
sebastian boss=Shub # an aftercore sea run for one boss (Yogurt, Shub or Dad)
```

To stop a run cleanly, click the "stop sebastian after the current task" link the run prints when it
starts, or open `relay_sebastian.js` from the relay browser's script menu and press the button. The
task running now finishes, then the run stops with an error saying it stopped at your request, and a
rerun picks up from there. Typing a command in the CLI can't do this: mafia holds every command until
the running script ends. The request is the daily property `_sebStopAfterTask`, which the page can
also take back before the run reaches it.

A run started in the path stops once the council frees the king; it never carries on into the
aftercore sea quest. An aftercore run needs its boss, from `boss=` or `_sebAftercoreBoss`, and stops
with an error when neither is set.

Everything in UnderTheSea's README still applies: the hard requirements, `autoSatisfyWithNPCs`, the
high, mid and low "shiny" tiers, and its per-account preferences, renamed from `uts_` to `seb_`
(`seb_godRunGuard`,
`seb_usePilsners`, `seb_postloopCommand`, `seb_postLoopRunOutEagleBanish`, `seb_postLoopFarmPearls`,
`seb_postLoopCloverFishy`, `seb_postLoopPrepCodpiece`), which you still set with the mafia CLI.
sebastian adds `seb_asdonMeatReserve` (default 1000): the Asdon Martin only gets soda bread bought
for it when the purchase leaves at least that much meat.

A run prints only errors, warnings and a one-line summary of each startup checklist (IOTMs, skills,
pulls), plus any missing required skill or unbuyable pull. `sebastian sim` prints the full
checklists. Set `seb_debug` to `true` (`set seb_debug = true`) for the full checklists at startup and
the run's routine narration (buff levels, resources about to be spent, combat plans).

## Layout

- `src/main.ts` runs the grimoire engine over the quests in `src/tasks`, in the order the original's
  `seaMonkees()` ran them.
- `src/tasks` holds the whole run as grimoire tasks: the early quest (the S Word lasso, the guild,
  Sea Monkees, the outpost), the seahorse branch, the temple bosses, the path cleanup and the
  postloop steps. Each task reads its state from the game (or from a `_seb*` daily property where
  the game keeps none), so rerunning after an abort picks up where the last run stopped.
  `src/tasks/zones.ts` holds how each zone is farmed, shared by the tasks that farm it.
- `src/combat.ts` is the combat consult script (`sebastian_combat.js`) and `src/choice.ts` the
  choice adventure script (`sebastian_choice.js`), each its own bundle. `src/relay.ts` is the relay
  page that asks a running run to stop (`relay/relay_sebastian.js`).
- `src/lib` holds the shared helpers: gear, familiars, moods, pulls, IOTM helpers and progress
  checks. `src/lib/seedfinder.ts` is the only bridge to ASH.

## Development

Set up as in the [loathers.net TypeScript guide](https://loathers.net/scripting/ts-script-setup/),
with Yarn through corepack:

```
yarn install
yarn run build          # writes the three scripts to dist/scripts/sebastian, the stop page to dist/relay
yarn run install-mafia  # symlinks the build into your KoLmafia folder
yarn run watch          # rebuilds on save
yarn run check          # typecheck
yarn run lint           # eslint, with libram's name checks, and prettier
yarn run format
```

Every push to `main` builds the scripts onto the `release` branch.
