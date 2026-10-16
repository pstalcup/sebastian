import { Args } from "grimoire-kolmafia";

// Commands. The original's per-account settings (uts_godRunGuard,
// uts_usePilsners, uts_postloopCommand and the uts_postLoop* switches) are
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
      help: "Run only the postloop steps. Not ported yet; this hands off to UnderTheSea.ash.",
      setting: "",
      default: false,
    }),
    handoff: Args.boolean({
      help: "When the ported phases are done, run UnderTheSea.ash for the rest of the run.",
      default: true,
    }),
  },
);
