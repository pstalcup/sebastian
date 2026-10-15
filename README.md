# sebastian

Automates the Kingdom of Loathing underwater quests in KoLmafia. It is a TypeScript port of
[TheSea.ash](https://kolmafia.us/threads/thesea-ash-automated-underwater-quests.8708/) (v1.6.4, by
Theraze and contributors) onto [grimoire](https://github.com/loathers/grimoire) and
[libram](https://github.com/loathers/libram).

## Usage

```
sebastian help
sebastian monkees=5 skate=1 boot=5 sushimat=2
```

Every option can also be saved as a `sebastian_<option>` preference to change its default, the
same way TheSea.ash used `seafloor_*` zlib variables.

| Option             | TheSea.ash setting          | Default |
| ------------------ | --------------------------- | ------- |
| `monkees`          | `seafloor_monkeeQuest`      | 5       |
| `faxNeptune`       | `seafloor_faxNeptune`       | false   |
| `unlockTrophyfish` | `seafloor_unlockTrophyfish` | false   |
| `abyssEquipment`   | `seafloor_abyssEquipment`   | 1       |
| `skate`            | `seafloor_skateQuest`       | 0       |
| `buySkateMap`      | `seafloor_buySkateMap`      | false   |
| `buySkateBoard`    | `seafloor_buySkateBoard`    | false   |
| `boot`             | `seafloor_bootQuest`        | 0       |
| `buyBoot`          | `seafloor_buyBoot`          | false   |
| `sushiMat`         | `seafloor_getSushiMat`      | 0       |
| `helmet`           | `seafloor_getHelmet`        | 0       |
| `closetMeat`       | `seafloor_closetMeat`       | -1      |
| `modifier`         | `seafloor_maximizeString`   | ""      |
| `ccs`              | (new) combat script to use  | yours   |

Like the original, surviving combat is up to you: fights use your own custom combat script unless
you pass `ccs`. You also need a way to breathe underwater. The script will put on breathing gear you
already own (an aerated diving helmet, a Mer-kin mask or SCUBA gear) but never buys any.

## Port status

Ported:

- Hey Hey, Find The Monkees (Little Brother through Mom), using KoLmafia's `questS02Monkees`
  tracking instead of scraping the castle
- An Old Guy and The Ocean (the damp old boot and its rewards)
- Skate Park unlock and the Skate Park war
- Sushi-rolling mat and aerated diving helmet

Not yet ported:

- The Mer-kin outfit quests (`seafloor_outfitQuest`): stashbox and currents, seahorse taming,
  gladiator training and the Colosseum, the scholar vocabulary, dreadscroll and Yog-Urt fight
- `seafloor_outfit` (wear a named outfit; use `modifier` instead)

## Development

```
npm install
npm run build   # writes dist/scripts/sebastian/sebastian.js
npm run check   # typecheck
npm run lint
```

Copy `dist/scripts/sebastian` into your KoLmafia `scripts` folder to run it.
