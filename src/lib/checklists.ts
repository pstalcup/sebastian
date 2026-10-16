import {
  Familiar,
  getCampground,
  getInventory,
  getPermedSkills,
  getWorkshed,
  haveFamiliar,
  haveSkill,
  isTradeable,
  Item,
  print,
  Skill,
  storageAmount,
} from "kolmafia";
import { $familiars, $item, $items, $skill, $skills } from "libram";
import { haveItem } from "./state";

// Run-start checklists, also printed by "sebastian sim". Ported from
// iotmChecklist(), skillChecklist() and pullChecklist() in UnderTheSeaGlobals.ash.
// Purely informational: every use in the run is ownership-guarded anyway.

function tick(have: boolean, label: string): boolean {
  print(`${have ? "✓" : "✗"} ${label}`, have ? "blue" : "red");
  return have;
}

export function iotmChecklist(): void {
  const items = $items`Monodent of the Sea, The Eternity Codpiece, closed-circuit pay phone, 2002 Mr. Store Catalog, cursed monkey's paw, august scepter, Fourth of May Cosplay Saber, Peridot of Peril, blood cubic zirconia, baseball diamond, Heartstone, backup camera, Jurassic Parka, spring shoes, Everfull Dart Holster, Mayam Calendar, Leprecondo, Cincho de Mayo, McHugeLarge duffel bag, Apriling band helmet, April Shower Thoughts shield, bat wings, server room key, Time-Spinner, January's Garbage Tote, Powerful Glove, combat lover's locket, Lil' Doctor™ bag, mumming trunk, Kremlin's Greatest Briefcase, Cargo Cultist Shorts, Eight Days a Week Pill Keeper, Sept-Ember Censer, vampyric cloake, Unwrapped knock-off retro superhero cape, roman candelabra, miniature crystal ball, latte lovers member's mug, V for Vivala mask, designer sweatpants, tearaway pants, autumn-aton, cosmic bowling ball, Clan VIP Lounge key`;
  // The passive, not its combat skills: mafia only learns those from a fight page.
  const skills = $skills`Just the Facts, Map the Monsters, Meteor Lore, Feel Nostalgic`;
  const familiars = $familiars`Grouper Groupie, Red-Nosed Snapper, Jill-of-All-Trades, Chest Mimic, Patriotic Eagle, Sword of S Words, Peace Turkey, Disgeist, Jumpsuited Hound Dog, Glover, Foul Ball, Space Jellyfish, Pocket Professor, Tiny Plastic Santa Claus Skeleton`;

  print("IOTM check — supported IOTMs:");
  const results = [
    ...items.map((item: Item) => tick(haveItem(item), `${item}`)),
    ...skills.map((skill: Skill) => tick(haveSkill(skill), `${skill}`)),
    ...familiars.map((familiar: Familiar) => tick(haveFamiliar(familiar), `${familiar}`)),
    tick(
      getWorkshed() !== $item.none ||
        $items`Asdon Martin keyfob (on ring), model train set, portable Mayo Clinic, TakerSpace letter of Marque`.some(
          (item) => haveItem(item),
        ),
      "a workshed",
    ),
    tick(!!getCampground()[$item`Source terminal`.name], "Source Terminal"),
  ];
  const owned = results.filter((r) => r).length;
  print(`IOTM check: ${owned} of ${results.length} supported IOTMs owned.`);
}

/** 2 required, 1 big turn saver, 0 optional. */
type Tier = 0 | 1 | 2;

const DROP_BUFF = "Cast while the run is hunting a specific item drop.";
const NONCOMBAT = "Fewer combats, so the noncombats the run wants arrive sooner.";
const COMBAT = "More combats, for the zones the run needs to fight through.";
const RES = "Elemental resistance for the underwater boss fights.";
const COLOSSEUM = "Buff for the Mer-kin Colosseum fights.";
const FREE_KILL = "Kills a monster for free, saving a turn.";
const THRALL = "Pastamancer thrall for a little extra damage. Any one of the three is enough.";

const ROUTE_SKILLS: [Skill, Tier, string][] = [
  [
    $skill`Saucegeyser`,
    2,
    "Kills most of what you fight. Without this or Saucestorm the run stops.",
  ],
  [$skill`Cannelloni Cocoon`, 2, "In-run healing."],
  [$skill`Empathy of the Newt`, 2, "Cast before fighting Shub-Jigguwatt."],
  [$skill`Deep Dark Visions`, 2, "The only way to learn the third dreadscroll answer."],

  [
    $skill`Steely-Eyed Squint`,
    1,
    "A big once-a-day item drop boost, used to force the drops the run needs.",
  ],
  [
    $skill`Unaccompanied Miner`,
    1,
    "Five free trips into the mine each day, so you need not pull a lodestone for the teflon ore.",
  ],
  [
    $skill`Transcendent Olfaction`,
    1,
    "Makes the Neptune flytrap, giant squid and Mer-kin tippler turn up far more often.",
  ],
  [$skill`Holiday Multitasking`, 1, "Three crafts a day that cost no adventure."],
  [$skill`Tongue of the Walrus`, 1, "Clears Beaten Up without spending turns resting."],
  [
    $skill`Overclock(10)`,
    1,
    "Your first ten CyberRealm fights each day are free; used for the Mom quest and to recharge the eagle screech.",
  ],
  [
    $skill`Garbage Nova`,
    1,
    "Extra damage against the school of many. Without it that fight just takes longer.",
  ],

  [$skill`Saucestorm`, 0, "Backup finisher if you have no Saucegeyser. You need one of the two."],
  [$skill`Snokebomb`, 0, "Banishes a monster you would rather not fight."],
  [$skill`Shattering Punch`, 0, FREE_KILL],
  [$skill`Gingerbread Mob Hit`, 0, FREE_KILL],
  [$skill`Perpetrate Mild Evil`, 0, "Extra damage against the shadow slab."],
  [$skill`Raise Backup Dancer`, 0, "Extra damage in the Naughty Sorceress fight."],
  [$skill`Summon Kokomo Resort Pass`, 0, "A free daily summon, picked up during daily setup."],
  [$skill`The Ode to Booze`, 0, "More adventures from every drink."],
  [
    $skill`Ambidextrous Funkslinging`,
    0,
    "Throws two potions at once, halving the fights spent identifying the murky potions.",
  ],
  [
    $skill`Double-Fisted Skull Smashing`,
    0,
    "Lets you wield a weapon in each hand, for better equipment.",
  ],
  [
    $skill`Gallapagosian Mating Call`,
    0,
    "Another way to make a monster reappear, and the only one that works on the black crayon golem.",
  ],
  [$skill`Stuffed Mortar Shell`, 0, "Extra damage while finishing fights without Saucegeyser."],
  [$skill`Bind Spice Ghost`, 0, THRALL],
  [$skill`Bind Vermincelli`, 0, THRALL],
  [$skill`Bind Angel Hair Wisp`, 0, THRALL],

  [$skill`Fat Leon's Phat Loot Lyric`, 0, DROP_BUFF],
  [$skill`The Ballad of Richie Thingfinder`, 0, DROP_BUFF],
  [$skill`Singer's Faithful Ocelot`, 0, DROP_BUFF],
  [$skill`Leash of Linguini`, 0, DROP_BUFF],
  [$skill`Who's Going to Pay This Drunken Sailor?`, 0, DROP_BUFF],
  [$skill`Sauce Contemplation`, 0, DROP_BUFF],
  [$skill`Donho's Bubbly Ballad`, 0, DROP_BUFF],
  [$skill`The Sonata of Sneakiness`, 0, NONCOMBAT],
  [$skill`Hide From Seekers`, 0, NONCOMBAT],
  [$skill`Smooth Movement`, 0, NONCOMBAT],
  [$skill`Carlweather's Cantata of Confrontation`, 0, COMBAT],
  [$skill`Musk of the Moose`, 0, COMBAT],
  [$skill`Attract Snakes`, 0, COMBAT],
  [$skill`Astral Shell`, 0, RES],
  [$skill`Elemental Saucesphere`, 0, RES],
  [$skill`Scarysauce`, 0, RES],
  [$skill`Carol of the Hells`, 0, COLOSSEUM],
  [$skill`Elron's Explosive Etude`, 0, COLOSSEUM],
  [$skill`Get Big`, 0, COLOSSEUM],
  [$skill`The Magical Mojomuscular Melody`, 0, COLOSSEUM],
  [$skill`Manicotti Meditation`, 0, COLOSSEUM],
  [$skill`Moxie of the Mariachi`, 0, COLOSSEUM],
];

/**
 * A skill held only through the current class is gone next ascension, so an
 * owned but unpermed skill is flagged. The permed list is empty until a
 * charsheet parse fills it, and then nothing is flagged.
 */
function printSkillTier(tier: Tier, label: string): void {
  const permed = getPermedSkills();
  const anyPermed = Object.keys(permed).length > 0;
  print(`Skill check — ${label}:`);
  for (const [skill, skillTier, why] of ROUTE_SKILLS) {
    if (skillTier !== tier) continue;
    if (!haveSkill(skill)) print(`✗ ${skill} — ${why}`, "red");
    else if (anyPermed && !permed[skill.name]) print(`✓ ${skill} (not permed) — ${why}`, "blue");
    else print(`✓ ${skill} — ${why}`, "blue");
  }
}

export function skillChecklist(): void {
  const owned = ROUTE_SKILLS.filter(([skill]) => haveSkill(skill)).length;
  const missingRequired = ROUTE_SKILLS.filter(
    ([skill, tier]) => tier === 2 && !haveSkill(skill),
  ).length;
  printSkillTier(2, "required");
  printSkillTier(1, "big turn savers");
  printSkillTier(0, "optional");
  const missing = missingRequired > 0 ? `, ${missingRequired} REQUIRED missing` : "";
  print(`Skill check: ${owned} of ${ROUTE_SKILLS.length} permable skills owned${missing}.`);
}

export function pullChecklist(): void {
  const pulls = $items`Mer-kin sneakmask, sea lasso, shark jumper, scale-mail underwear, Congressional Medal of Insanity, Flash Liquidizer Ultra Dousing Accessory, Mer-kin digpick, lodestone, comb jelly, Elf Guard SCUBA tank, rusty rivet, sea cowbell, Mer-kin prayerbeads, Mer-kin healscroll, Mer-kin killscroll, Mer-kin worktea, Mer-kin knucklebone, Mer-kin cheatsheet, Mer-kin hallpass, Mer-kin hidepaint, pro skateboard, software glitch, pulled yellow taffy, stuffed yam stinkbomb, waffle, skate blade, null-day exploit, New Age healing crystal, soggy used band-aid, damp old wallet, fish sauce, Aldebaran sardines, pie man was not meant to eat, Handheld Allied radio, Clara's bell, stench jelly, peppermint parasol, ink bladder, Mer-kin pinkslip, Louder Than Bomb, anchor bomb`;
  const inventory = getInventory();
  const catalogMakes = $items`pro skateboard, software glitch`;
  print("Pull check — Hagnk's stock:");
  for (const item of pulls) {
    // Catalog credits make these in-run; only worth stocking without it.
    if (haveItem($item`2002 Mr. Store Catalog`) && catalogMakes.includes(item)) continue;
    const stocked = storageAmount(item) > 0 || (inventory[item.name] ?? 0) > 0;
    if (item === $item`Congressional Medal of Insanity` && !stocked) {
      print(
        `✗ ${item} — Currently not optional, just too expensive to have the script buy on its own`,
        "red",
      );
    } else if (stocked) {
      print(`✓ ${item}`, "blue");
    } else if (isTradeable(item)) {
      print(`✗ ${item} — will be mall-bought if the route needs it`, "red");
    } else {
      print(`✗ ${item} — NOT mall-buyable, acquire before it's needed`, "red");
    }
  }
}
