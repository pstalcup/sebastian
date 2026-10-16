# sebastian

Runs the Kingdom of Loathing path 11,037 Leagues Under the Sea in KoLmafia. It is a TypeScript port
of [UnderTheSea](https://github.com/Astro3207/UnderTheSea) onto
[grimoire](https://github.com/loathers/grimoire) and [libram](https://github.com/loathers/libram).

## Usage

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
```

Everything in UnderTheSea's README still applies: the hard requirements, `autoSatisfyWithNPCs`, the
high, mid and low "shiny" tiers, and its per-account preferences (`uts_godRunGuard`,
`uts_usePilsners`, `uts_postloopCommand`, `uts_postLoopRunOutEagleBanish`, `uts_postLoopFarmPearls`,
`uts_postLoopCloverFishy`, `uts_postLoopPrepCodpiece`), which you still set with the mafia CLI.

## Layout

- `src/main.ts` runs the grimoire engine over the quests in `src/tasks`, in the order the original's
  `seaMonkees()` ran them.
- `src/tasks` holds the whole run as grimoire tasks: the early quest (the S Word lasso, the guild,
  Sea Monkees, the outpost), the seahorse branch, the temple bosses, the path cleanup and the
  postloop steps. Each task reads its state from the game (or from a `_uts*` daily property where
  the game keeps none), so rerunning after an abort picks up where the last run stopped.
  `src/tasks/zones.ts` holds how each zone is farmed, shared by the tasks that farm it.
- `src/combat.ts` is the combat consult script (`sebastian_combat.js`) and `src/choice.ts` the
  choice adventure script (`sebastian_choice.js`), each its own bundle.
- `src/lib` holds the shared helpers: gear, familiars, moods, pulls, IOTM helpers and progress
  checks. `src/lib/seedfinder.ts` is the only bridge to ASH.

## Development

```
npm install
npm run build   # writes the three scripts to dist/scripts/sebastian
npm run check   # typecheck
npm run lint
```

Copy `dist/scripts/sebastian` into your KoLmafia `scripts` folder to run it.
