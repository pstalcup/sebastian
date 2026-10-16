import {
  abort,
  availableChoiceOptions,
  autosell,
  buyUsingStorage,
  cliExecute,
  council,
  create,
  equip,
  Familiar,
  familiarEquippedEquipment,
  getFuel,
  getRevision,
  getWorkshed,
  handlingChoice,
  haveFamiliar,
  haveSkill,
  itemAmount,
  lastChoice,
  myClass,
  numericModifier,
  print,
  retrieveItem,
  runChoice,
  setProperty,
  storageAmount,
  takeStorage,
  use,
  useFamiliar,
  userConfirm,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $familiar,
  $item,
  $items,
  $skill,
  $skills,
  AprilingBandHelmet,
  AsdonMartin,
  Clan,
  get,
  have,
  Leprecondo,
  MayamCalendar,
  SongBoom,
  TakerSpace,
} from "libram";

import { iotmChecklist, pullChecklist, skillChecklist } from "./lib/checklists";
import { chosenFamiliar, pickFamiliar, swordOfSWords } from "./lib/familiar";
import { leprecondo, sourceEducate } from "./lib/iotm";
import { pulledToday } from "./lib/pulls";
import {
  blackGlass,
  cargoPocket,
  censer,
  garbageTote,
  sheriffOutfit,
  sourceEnhance,
} from "./lib/resources";
import {
  countSummons,
  haveItem,
  highShiny,
  inAftercore,
  inSeaPath,
  lowShiny,
  step,
} from "./lib/state";

// Once-a-run setup before the first quest step. Ported from initialization()
// in UnderTheSea.ash.

/** The photo booth lives in this clan; the run leaves it again at the end. */
const PHOTO_BOOTH_CLAN = 90485;

function switchFamiliar(familiar: Familiar | undefined): void {
  if (familiar) useFamiliar(familiar);
}

function checkChosenFamiliar(): void {
  if (chosenFamiliar === $familiar.none) return;
  useFamiliar($familiar.none);
  const without = numericModifier("Item Drop");
  useFamiliar(chosenFamiliar);
  if (
    numericModifier("Item Drop") <= without &&
    !userConfirm("Chosen familiar is not +item, would make some RNG worse. Continue?")
  ) {
    abort();
  }
}

function borrowSheriffProps(): void {
  // The borrow counter can fall behind what is in inventory, so possession decides.
  if (!sheriffOutfit() && haveItem($item`Clan VIP Lounge key`)) {
    Clan.join(PHOTO_BOOTH_CLAN);
    for (const item of $items`Sheriff pistol, Sheriff moustache, Sheriff badge`) {
      if (!have(item) && !cliExecute(`photobooth item ${item}`)) {
        print(`Couldn't borrow the ${item} from the photo booth.`, "red");
      }
    }
  }
  if (!sheriffOutfit()) {
    print(
      "No Sheriff outfit -- either its props are not unlocked, or today's three prop borrows are spent. Skipping the Assert your Authority free kills; the run costs up to three more turns.",
      "blue",
    );
  }
}

function dailies(): void {
  if (get("questM05Toot") === "started") {
    council();
    visitUrl("tutorial.php?action=toot");
    council();
  }

  for (const item of $items`letter from King Ralph XI, pork elf goodies sack, sushi-rolling mat, 2002 Mr. Store Catalog`) {
    if (item === $item`2002 Mr. Store Catalog` && get("_2002MrStoreCreditsCollected")) continue;
    if (itemAmount(item) > 0) use(itemAmount(item), item);
  }
  if (haveItem($item`wardrobe-o-matic`)) use($item`wardrobe-o-matic`);
  if (SongBoom.have() && SongBoom.song() !== "Total Eclipse of Your Meat") {
    SongBoom.setSong("Total Eclipse of Your Meat");
  }

  for (const skill of $skills`Aug. 24th: Waffle Day!, Summon Kokomo Resort Pass`) {
    if (skill === $skill`Aug. 24th: Waffle Day!` && highShiny()) continue;
    if (haveSkill(skill)) useSkill(skill);
  }
  if (myClass() === $class`Pastamancer`) {
    // Never the Lasagmbie: its damage spoils the boss fights.
    const thrall = $skills`Bind Spice Ghost, Bind Vermincelli, Bind Angel Hair Wisp`.find((s) =>
      haveSkill(s),
    );
    if (thrall) useSkill(thrall);
  }

  sourceEnhance();
  // duplicate.edu now, so it is in hand for the first fat table the route kills.
  sourceEducate();
  cargoPocket();
  garbageTote();
  censer();

  // One free saber upgrade a day: the familiar weight chip.
  if (haveItem($item`Fourth of May Cosplay Saber`) && get("_saberMod") === 0) {
    step("initialization: saber daily upgrade (choice 1386)");
    setProperty("choiceAdventure1386", "4");
    visitUrl("main.php?action=may4");
    // mafia may already have answered it; only answer a choice still open.
    if (handlingChoice() && lastChoice() === 1386) {
      runChoice(4 in availableChoiceOptions() ? 4 : 5);
    }
  }

  for (const item of $items`hamethyst, baconstone, porquoise, Kokomo Resort Pass`) {
    if (item === $item`porquoise` && haveItem($item`portable pantogram`)) continue;
    autosell(itemAmount(item), item);
  }

  const emilio = $familiar`Tickle-Me Emilio`;
  if (
    itemAmount($item`tiny stillsuit`) > 0 &&
    haveFamiliar(emilio) &&
    familiarEquippedEquipment(emilio) !== $item`tiny stillsuit`
  ) {
    useFamiliar(emilio);
    equip($item`tiny stillsuit`);
  }

  step("initialization: Mayam rings");
  if (MayamCalendar.have() && MayamCalendar.symbolsUsed().length === 0) {
    if (haveFamiliar($familiar`Chest Mimic`)) useFamiliar($familiar`Chest Mimic`);
    else switchFamiliar(pickFamiliar("itdrop"));
    MayamCalendar.submit("vessel yam2 cheese explosion");
    MayamCalendar.submit("fur lightning eyepatch yam4");
    MayamCalendar.submit("eye meat yam3 clock");
  }
  if (Leprecondo.have() && Leprecondo.installedFurniture().every((piece) => piece === "empty")) {
    leprecondo(highShiny() ? "10,11,12,24,4,5,6" : "22,24,12,11,10,4,5,6");
  }
  visitUrl("campground.php?preaction=leaves");
  if (itemAmount($item`S.I.T. Course Completion Certificate`) > 0 && !get("_sitCourseCompleted")) {
    use($item`S.I.T. Course Completion Certificate`);
  }
  if (get("_aprilBandInstruments") === 0 && AprilingBandHelmet.have()) {
    AprilingBandHelmet.joinSection($item`Apriling band tuba`);
    if (highShiny()) {
      AprilingBandHelmet.joinSection($item`Apriling band quad tom`);
    } else if (haveFamiliar($familiar`Chest Mimic`)) {
      useFamiliar($familiar`Chest Mimic`);
      AprilingBandHelmet.joinSection($item`Apriling band piccolo`);
      for (let i = 0; i < 3; i++) AprilingBandHelmet.play($item`Apriling band piccolo`);
    }
  }
  if (haveItem($item`McHugeLarge duffel bag`)) visitUrl("inventory.php?action=skiduffel");
  if (!get("_aprilShowerGlobsCollected") && haveItem($item`April Shower Thoughts shield`)) {
    visitUrl("inventory.php?action=shower");
  }
  if (get("availableMrStore2002Credits") === 3) {
    if (highShiny()) create(3, $item`Spooky VHS Tape`);
    else
      for (const item of $items`pro skateboard, Spooky VHS Tape, Spooky VHS Tape`) create(1, item);
  }

  step("initialization: workshed");
  if (!get("_workshedItemUsed") && getWorkshed() === $item.none) {
    if (highShiny() && haveItem($item`portable Mayo Clinic`)) {
      use($item`portable Mayo Clinic`);
      retrieveItem($item`Mayo Minder™`);
    }
    if (AsdonMartin.have()) {
      use($item`Asdon Martin keyfob (on ring)`);
    } else if (itemAmount($item`portable Mayo Clinic`) > 0) {
      use($item`portable Mayo Clinic`);
    } else if (itemAmount($item`model train set`) === 1) {
      use($item`model train set`);
    } else if (TakerSpace.have()) {
      use($item`TakerSpace letter of Marque`);
      TakerSpace.collect();
      TakerSpace.make($item`anchor bomb`);
    }
  }

  step("initialization: storage pulls");
  for (const item of $items`Mer-kin sneakmask, sea lasso, shark jumper, ten-leaf clover, large box, scale-mail underwear, Congressional Medal of Insanity, Flash Liquidizer Ultra Dousing Accessory`) {
    if (have(item) || pulledToday(item)) continue;
    if (
      item === $item`Flash Liquidizer Ultra Dousing Accessory` &&
      (!haveItem($item`closed-circuit pay phone`) || highShiny())
    ) {
      continue;
    }
    if (
      item === $item`sea lasso` &&
      (lowShiny() || (haveFamiliar(swordOfSWords) && countSummons() >= 3))
    ) {
      continue;
    }
    if (storageAmount(item) === 0) {
      if (item === $item`Congressional Medal of Insanity`) {
        abort("Get yer own CMOI, ya filthy animal!");
      }
      buyUsingStorage(item);
    }
    takeStorage(1, item);
  }
  if (have($item`large box`)) create($item`blessed large box`);
  if (have($item`blessed large box`)) use($item`blessed large box`);
}

export function initialization(): void {
  if (getRevision() < 29057) abort("Please update mafia to newer than 29057");
  // A pearl farm or screech re-aim that aborted mid-loop leaves these set,
  // and the CCS reads them.
  setProperty("_sebPearlFarm", "false");
  setProperty("_sebScreechReaim", "false");

  checkChosenFamiliar();
  if (!get("autoSatisfyWithNPCs")) {
    abort("set autoSatisfyWithNPCs = true, the script isn't going to work if it's false");
  }

  iotmChecklist();
  skillChecklist();
  if (inSeaPath()) pullChecklist();

  if (get("questS01OldGuy") === "unstarted") {
    visitUrl("place.php?whichplace=sea_oldman&action=oldman_oldman");
  }
  if (!have($item`black glass`) && itemAmount($item`sand dollar`) > 13) blackGlass();

  borrowSheriffProps();

  if (inSeaPath()) dailies();

  // Refuel the Asdon Martin with soda bread, only after the prism breaks.
  if (
    inAftercore() &&
    AsdonMartin.installed() &&
    !highShiny() &&
    !get("_missileLauncherUsed") &&
    get("_sebMissileFailed") !== "true" &&
    getFuel() < 100 &&
    retrieveItem(17, $item`loaf of soda bread`)
  ) {
    AsdonMartin.insertFuel($item`loaf of soda bread`, 17);
  }
}
