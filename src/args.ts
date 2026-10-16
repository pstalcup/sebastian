import { Args } from "grimoire-kolmafia";

// Commands. The original's per-account settings (seb_godRunGuard,
// seb_usePilsners, seb_postloopCommand and the seb_postLoop* switches) are
// still read straight from those preferences, so set them with the mafia CLI
// as before; see the README.
export const args = Args.create(
  "sebastian",
  "A grimoire port of UnderTheSea, the 11,037 Leagues Under the Sea run.",
  {
    sim: Args.flag({
      help: "Print the IOTM, skill and pull checklists, then stop. Spends nothing.",
      setting: "",
      default: false,
    }),
    postloop: Args.flag({
      help: "Run only the postloop steps (pilsners, pearls, the eagle re-aim, the codpiece).",
      setting: "",
      default: false,
    }),
  },
);
