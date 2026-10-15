import { Args } from "grimoire-kolmafia";

// Settings mirror the zlib variables from TheSea.ash (seafloor_*). Each one can be
// passed on the command line (e.g. `sebastian skate=1 boot=5`) or stored as a
// `sebastian_<key>` preference to become the new default.
export const args = Args.create(
  "sebastian",
  "Automates the underwater quests. A grimoire port of TheSea.ash.",
  {
    monkees: Args.number({
      help: "How many Sea Monkees to find.",
      default: 5,
      options: [
        [0, "Skip"],
        [1, "Little Brother"],
        [2, "Big Brother"],
        [3, "Grandpa"],
        [4, "Grandma"],
        [5, "Mom"],
      ],
    }),
    faxNeptune: Args.flag({
      help: "Fax a Neptune flytrap for the wriggling flytrap pellet instead of adventuring for it.",
      default: false,
    }),
    unlockTrophyfish: Args.flag({
      help: "Ask Grandpa about the Trophyfish once you find him.",
      default: false,
    }),
    abyssEquipment: Args.number({
      help: "Use comb jelly, shark jumper and scale-mail underwear to speed up the Caliginous Abyss.",
      default: 1,
      options: [
        [0, "Skip"],
        [1, "Use what we already have"],
        [2, "Buy anything missing"],
      ],
    }),
    skate: Args.number({
      help: "How to settle the Skate Park war.",
      default: 0,
      options: [
        [0, "Skip"],
        [1, "Side with the Ice skaters"],
        [2, "Side with the Roller skaters"],
        [3, "Skateboard"],
        [4, "Unlock the Skate Park only"],
      ],
    }),
    buySkateMap: Args.flag({
      help: "Buy the sand dollars for the Skate Park map instead of adventuring for them.",
      default: false,
    }),
    buySkateBoard: Args.flag({
      help: "Buy the Skate Park weapon if we don't find it.",
      default: false,
    }),
    boot: Args.number({
      help: "Which reward to take from the Old Man for his boot.",
      default: 0,
      options: [
        [0, "Skip"],
        [1, "Das boot"],
        [2, "Fishy pipe"],
        [3, "Fish meat"],
        [4, "Damp wallet"],
        [5, "Boot, then pipe, then fish meat"],
        [6, "Boot, then pipe, then wallet"],
      ],
    }),
    buyBoot: Args.flag({
      help: "Buy the sand dollars for the damp old boot instead of adventuring for them.",
      default: false,
    }),
    sushiMat: Args.number({
      help: "Get a sushi-rolling mat for your campground.",
      default: 0,
      options: [
        [0, "Skip"],
        [1, "Buy the sand dollars"],
        [2, "Farm the sand dollars"],
      ],
    }),
    helmet: Args.number({
      help: "Get an aerated diving helmet.",
      default: 0,
      options: [
        [0, "Skip"],
        [1, "Buy the rusty diving helmet"],
        [2, "Adventure for the rusty diving helmet"],
        [3, "Fax the unholy diver"],
      ],
    }),
    closetMeat: Args.number({
      help: "Closet all meat above this amount while adventuring (-1 to leave meat alone).",
      default: -1,
    }),
    modifier: Args.string({
      help: "Extra maximizer string to use for underwater adventures. You still need to breathe underwater.",
      default: "",
    }),
    ccs: Args.string({
      help: "Custom combat script to fight with. Defaults to your current one, like TheSea.ash did.",
      default: "",
    }),
  },
);
