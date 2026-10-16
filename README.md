# sebastian

Runs the Kingdom of Loathing path 11,037 Leagues Under the Sea in KoLmafia. It is a TypeScript port
of [UnderTheSea](https://github.com/Astro3207/UnderTheSea) onto
[grimoire](https://github.com/loathers/grimoire) and [libram](https://github.com/loathers/libram),
being moved over a phase at a time.

## Usage

The original script still has to be installed, because this port hands fights, choices and the
phases it has not ported yet to it:

```
git checkout Astro3207/UnderTheSea
```

Then:

```
sebastian          # the ported phases, then hands off to UnderTheSea for the rest
sebastian sim      # print the IOTM, skill and pull checklists and stop
sebastian postloop # the postloop steps (still run by UnderTheSea.ash)
sebastian handoff=false
```

Everything in UnderTheSea's README still applies: the hard requirements, `autoSatisfyWithNPCs`, the
high, mid and low "shiny" tiers, and its per-account preferences (`uts_godRunGuard`,
`uts_usePilsners`, `uts_postloopCommand`, `uts_postLoopRunOutEagleBanish`, `uts_postLoopFarmPearls`,
`uts_postLoopCloverFishy`, `uts_postLoopPrepCodpiece`), which you still set with the mafia CLI.

## Port status

Ported to TypeScript:

- Startup: the IOTM, skill and pull checklists, daily setup, workshed, storage pulls and the
  Sheriff props
- After-adventure upkeep: lost-combat check, Fishy and the path diet, dolphin whistles, VHS and
  Club 'Em follow-ups, HP and MP recovery targets
- Gear, familiar and mood helpers, the noncombat forcer, Map the Monsters and summons
- Sea Monkees from the start through asking Grandpa about Grandma: the early S Word lasso, the guild
  unlock, the flytrap pellet, Little Brother, the Wreck of the Edgar Fitzsimmons, Big Brother and
  Grandpa

Still run by the original ASH:

- Combat (`UnderTheSeaCCS.ash`, through a CCS that consults it) and choices
  (`UnderTheSea_Choice.ash`)
- A few helpers called through `ash import <UnderTheSeaGlobals.ash>`: the model train set, baseball
  diamond, Leprecondo, autumn-aton, sushi, Source Terminal duplicate, Time-Spinner, the codpiece and
  the dreadscroll seed check
- Everything from the golem recall and the outpost on, and the postloop steps

## Development

```
npm install
npm run build   # writes dist/scripts/sebastian/sebastian.js
npm run check   # typecheck
npm run lint
```

Copy `dist/scripts/sebastian` into your KoLmafia `scripts` folder to run it.
