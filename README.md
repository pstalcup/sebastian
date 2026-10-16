# sebastian

> A TypeScript port of [UnderTheSea](https://github.com/Astro3207/UnderTheSea).

sebastian is a KoLmafia script that plays the Kingdom of Loathing challenge path **11,037 Leagues
Under the Sea**. It starts at the beginning of the ascension and stops once the prism is broken. It
can also run the same sea quests in aftercore. It is built on [grimoire](https://github.com/loathers/grimoire)
and [libram](https://github.com/loathers/libram).

## What it does

One `sebastian` command plays the whole path:

1. **Setup.** Checks your mafia version and settings. Prints checklists of the IOTMs, skills and
   Hagnk's pulls the route can use. Then does the day's setup: dailies, the workshed, Mayam Calendar
   and Leprecondo, Apriling band instruments, Mr. Store credits, the Source Terminal, and so on. It
   pulls the core items (Mer-kin sneakmask, sea lasso, shark jumper, scale-mail underwear and others)
   from storage. Any that are missing and tradeable are mall-bought. If the Sheriff outfit is
   missing, it borrows the props from a clan photo booth so it can use the outfit's free kills.
2. **The early quest.** Lassos a sea cowboy with the Sword of S Words. Finishes the guild test for
   your mainstat. Then runs Sea Monkees: the Neptune flytrap, Little Brother, the Wreck of the Edgar
   Fitzsimmons, Big Brother and Grandpa.
3. **The outpost.** Gets the Mer-kin stashbox, the prayerbeads and the Old Guy's quest.
4. **The seahorse.** Takes whichever route your account supports to reach and tame the seahorse:
   the diving helmet, the abyss and the corral. It trains the sea lasso, getting teflon ore from the
   Anemone Mine or a shadow rift, and farms sea cowbells.
5. **The temple.** Collects the dreadscroll clues from the library, the school, sushi, the
   knucklebone, the scrolls and Deep Dark Visions, and solves the scroll. It kills Yog-Urt, then
   fights through the Mer-kin Colosseum to Shub-Jigguwatt.
6. **The finish.** Beats the Naughty Sorceress, cleans up the path (sand pennies, the council
   visit), then runs any postloop steps you've turned on.

Each step checks the game's own state to see whether it is done. Where the game doesn't track
something, the step uses a `_seb*` daily property instead. This means the script can be rerun at
any point. After an abort, fix whatever caused it and run `sebastian` again. It continues from where
it stopped.

Combat is handled by a dedicated combat script that every fight consults through the `seb_grimoire`
CCS. A dedicated choice adventure script handles choices. Each script picks its action based on the
monster or choice and the current goal, such as a forced drop, a banish, a free kill or a boss
strategy.

### Shiny tiers

The route depends on how much the account owns:

- **High shiny**: your `garbo_valueOfFreeFight` is greater than your `valueOfAdventure`. The script
  saves free fights and similar resources for aftercore farming and accepts spending a few more
  turns.
- **Low shiny**: you own none of the 2002 Mr. Store Catalog, cursed monkey's paw or august scepter.
  Pulls are scarce, so the script uses them more conservatively.
- **Mid shiny**: everyone else.

### Aftercore

If you run `sebastian` outside the path, it does the sea quests in aftercore. It asks which boss to
fight: Yog-Urt, Shub-Jigguwatt or Dad Sea Monkee. Then it does only the work that boss needs.

## Requirements

- A KoLmafia revision newer than 29057.
- `autoSatisfyWithNPCs` set to `true`.
- A **Congressional Medal of Insanity** in Hagnk's storage or inventory. The script won't buy one.
- **Saucegeyser** or **Saucestorm**, **Cannelloni Cocoon**, **Empathy of the Newt** and **Deep Dark
  Visions**.
- [seedfinder](https://github.com/VeeArrKoL/seedfinder), which is used to solve the dreadscroll.

Everything else is optional. `sebastian sim` lists what you have, what's missing, and what each
missing item or skill would save. It also flags items in the pull list that can't be mall-bought.
If you pick a familiar that gives no +item, the script asks before it continues.

## Installation

```
git checkout pstalcup/sebastian release
git checkout VeeArrKoL/seedfinder
```

## Usage

```
sebastian          # the whole run, from setup through the prism
sebastian sim      # print the IOTM, skill and pull checklists and stop; spends nothing
sebastian postloop # only the postloop steps
sebastian help     # list the commands
```

### Preferences

These are per-account settings. Set them in the mafia CLI, for example `set seb_usePilsners = true`.

| Preference                      | Effect                                                                                                                                                                                                                     |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `seb_godRunGuard`               | On a run fast enough for a very low turncount (17 turns or fewer at the temple), eat sushi for the dreadscroll clue rather than spending turns on it, and abort if no Mer-kin worktea is on hand.                          |
| `seb_usePilsners`               | After the prism, drink your astral pilsners under Ode to Booze.                                                                                                                                                            |
| `seb_postLoopFarmPearls`        | If an unblemished pearl's mall price is more than ten adventures are worth to you (`valueOfAdventure`), farm each open zone's daily pearl.                                                                                 |
| `seb_postLoopRunOutEagleBanish` | _Experimental._ Use the Patriotic Eagle in the pearl zones until its screech recharges, then screech at the Smut Orc Logging Camp. This moves the run's leftover construct banish onto orcs, so garbo's crate setup works. |
| `seb_postLoopCloverFishy`       | Spend a Lucky! on The Brinier Deepers to get 20 turns of Fishy for postloop sea farming.                                                                                                                                   |
| `seb_postLoopPrepCodpiece`      | Put five unblemished pearls into The Eternity Codpiece for your next run.                                                                                                                                                  |
| `seb_postloopCommand`           | A CLI command to run as the last step, for example `garbo`.                                                                                                                                                                |

Postloop steps run only after the council visit that ends the path, or when you use
`sebastian postloop`.

## Layout

- `src/main.ts` parses the arguments, writes the CCS, runs setup, and runs the grimoire engine
  over every quest in route order.
- `src/initialization.ts` contains the once-a-day setup, dailies and storage pulls.
- `src/tasks` describes the whole run as grimoire quests: `monkees.ts` (lasso and Sea Monkees),
  `guild.ts`, `outpost.ts`, `seahorse.ts` (seahorse routes, teflon, taming), `temple.ts` (the
  dreadscroll, Yog-Urt, the Colosseum, Shub-Jigguwatt, the final boss) and `postloop.ts`.
  `zones.ts` defines how each zone is farmed, and several tasks share it.
- `src/combat.ts` builds the combat consult script `sebastian_combat.js`. `src/choice.ts` builds
  the choice adventure script `sebastian_choice.js`. Each is bundled separately.
- `src/lib` holds the shared helpers: gear, familiars, moods, pulls, resources, IOTM helpers,
  progress checks and the checklists. `src/lib/seedfinder.ts` is the only code that calls ASH.

## Development

The project follows the [loathers.net TypeScript guide](https://loathers.net/scripting/ts-script-setup/)
and uses Yarn through corepack:

```
yarn install
yarn run build          # writes the three scripts to dist/scripts/sebastian
yarn run install-mafia  # symlinks the build into your KoLmafia folder
yarn run watch          # rebuilds on save
yarn run check          # typecheck
yarn run lint           # eslint, with libram's name checks, and prettier
yarn run format
```

Each push to `main` builds the scripts and publishes them to the `release` branch.
