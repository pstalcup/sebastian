import {
  availableChoiceOptions,
  buy,
  chew,
  cliExecute,
  equip,
  faxbot,
  getCampground,
  getLocketMonsters,
  getProperty,
  handlingChoice,
  haveEffect,
  haveFamiliar,
  haveSkill,
  itemAmount,
  lastChoice,
  Location,
  Monster,
  myBasestat,
  myHash,
  pullsRemaining,
  runChoice,
  runCombat,
  storageAmount,
  toInt,
  totalFreeRests,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $skill,
  $slot,
  $stat,
  ChestMimic,
  get,
  have,
} from "libram";
import { pickFamiliar } from "./familiar";
import { gotPeriled, haveItem, inAftercore, inSeaPath, step } from "./state";
import { pulledToday, pullSequence } from "./pulls";

// Daily resources and one-shot IOTM helpers. Ported from the "REMAINING SHARED
// HELPERS" sections of UnderTheSeaGlobals.ash and summon() in UnderTheSea.ash.

/** Source Terminal items.enh, re-upped wherever +item setup happens. */
export function sourceEnhance(): void {
  if (!getCampground()[$item`Source terminal`.name]) return;
  if (haveEffect($effect`items.enh`) > 0) return;
  if (get("_sourceTerminalEnhanceUses") >= 3) return;
  cliExecute("terminal enhance items.enh");
}

/** Kremlin's Greatest Briefcase +item tab buff, through Ezandora's Briefcase script. */
export function briefcase(): void {
  if (!haveItem($item`Kremlin's Greatest Briefcase`)) return;
  if (haveEffect($effect`Items Are Forever`) > 0) return;
  // An unopened case has no tabs to read, and opening it is a two-day job.
  if (!get("_kgbOpened")) return;
  if (get("_kgbClicksUsed") >= 22) return;
  cliExecute("briefcase buff item");
}

/** Cargo Cultist Shorts pocket 494. */
export function cargoPocket(): void {
  if (`,${getProperty("cargoPocketsEmptied")},`.includes(",494,")) return;
  if (!haveItem($item`Cargo Cultist Shorts`)) return;
  step("Cargo shorts: opening pocket 494");
  cliExecute("cargo pocket 494");
}

/** January's Garbage Tote: the broken champagne bottle. */
export function garbageTote(): void {
  if (!haveItem($item`January's Garbage Tote`)) return;
  if (haveItem($item`broken champagne bottle`)) return;
  if (get("garbageChampagneCharge") <= 0) return;
  step("Garbage tote: fetching the broken champagne bottle");
  visitUrl(`inv_use.php?whichitem=${toInt($item`January's Garbage Tote`)}&pwd=${myHash()}`);
  // mafia may already have answered it; only answer a live choice.
  if (!handlingChoice()) {
    step("Tote choice was auto-resolved or never opened; skipping");
    return;
  }
  const options = Object.entries(availableChoiceOptions());
  const grab = options.find(([, text]) => text.includes("champagne"));
  const leave = options.find(([, text]) => text.includes("Ignore the garbage"));
  // Never leave the run parked inside a choice we could not read.
  const pick = grab ?? leave;
  if (pick) runChoice(Number(pick[0]));
}

/** Sept-Ember Censer: Septapus summoning charms, up to three. */
export function censer(): void {
  if (!haveItem($item`Sept-Ember Censer`)) return;
  if (!get("_septEmberBalanceChecked")) visitUrl("shop.php?whichshop=september");
  const wanted = Math.min(
    3 - itemAmount($item`Septapus summoning charm`),
    Math.floor(get("availableSeptEmbers") / 2),
  );
  if (wanted > 0) buy($coinmaster`Sept-Ember Censer`, wanted, $item`Septapus summoning charm`);
}

export function pillKeeper(pill: string): void {
  if (!haveItem($item`Eight Days a Week Pill Keeper`)) return;
  if (get("_freePillKeeperUsed")) return;
  step(`Pill keeper: ${pill}`);
  cliExecute(`pillkeeper ${pill}`);
}

/** Noncombat forcer charges left, counting two for the pulls fallback. */
export function ncForceEstimate(): number {
  let force = 2;
  if (haveItem($item`Apriling band tuba`)) force += Math.max(0, 3 - get("_aprilBandTubaUses"));
  if (haveItem($item`McHugeLarge left ski`)) {
    force += Math.max(0, 3 - get("_mcHugeLargeAvalancheUses"));
  }
  if (haveItem($item`Cincho de Mayo`)) {
    force += Math.min(3, 1 + Math.floor(Math.max(0, totalFreeRests() - get("timesRested")) / 2));
  }
  if (haveItem($item`Jurassic Parka`)) force += Math.max(0, 5 - get("_spikolodonSpikeUses"));
  return force;
}

/** Spend the cheapest available noncombat forcer charge. */
export function ncForce(): void {
  if (get("noncombatForcerActive")) return;
  if (
    haveItem($item`Apriling band helmet`) &&
    get("_aprilBandTubaUses") < 3 &&
    haveItem($item`Apriling band tuba`)
  ) {
    cliExecute("aprilband play tuba");
  } else if (
    haveItem($item`Cincho de Mayo`) &&
    (get("_cinchUsed") <= 40 || get("timesRested") < totalFreeRests())
  ) {
    while (get("_cinchUsed") > 40 && get("timesRested") < totalFreeRests()) {
      // The helmet sweetens the rest but is optional.
      if (haveItem($item`Apriling band helmet`)) {
        cliExecute("unequip hat; equip apriling band helmet");
      }
      cliExecute("camp rest free");
    }
    if (get("_cinchUsed") <= 40) {
      equip($slot`acc3`, $item`Cincho de Mayo`);
      useSkill($skill`Cincho: Fiesta Exit`);
    }
  } else if (haveItem($item`Eight Days a Week Pill Keeper`) && !get("_freePillKeeperUsed")) {
    // Sneakisol forces a noncombat for free, so it comes before any pull.
    pillKeeper("free noncombat");
  } else if (
    !haveItem($item`McHugeLarge duffel bag`) &&
    !haveItem($item`Jurassic Parka`) &&
    !haveItem($item`allied radio backpack`)
  ) {
    for (const item of [$item`Handheld Allied radio`, $item`Clara's bell`, $item`stench jelly`]) {
      if (pulledToday(item)) continue;
      if (item === $item`Clara's bell` && storageAmount(item) === 0) continue;
      if (pullsRemaining() === 0) return;
      pullSequence(item);
      if (item === $item`Clara's bell`) use(item);
      else if (item === $item`Handheld Allied radio`) cliExecute("alliedradio misc sniper");
      else chew(item);
      return;
    }
  }
}

export function mapReady(): boolean {
  return (
    haveSkill($skill`Map the Monsters`) && get("_monstersMapped") < 3 && !get("mappingMonsters")
  );
}

/** Map the Monsters, but only once the Peridot is spent in this zone. */
export function mapMonster(location: Location): void {
  if (!mapReady()) return;
  if (haveItem($item`Peridot of Peril`) && !gotPeriled(location)) return;
  step(`Map the Monsters armed for ${location}`);
  useSkill($skill`Map the Monsters`);
}

/** All three Sheriff props in hand, so Assert your Authority can be cast. */
export function sheriffOutfit(): boolean {
  return [$item`Sheriff moustache`, $item`Sheriff badge`, $item`Sheriff pistol`].every((item) =>
    haveItem(item),
  );
}

export function baseballPlayers(): number {
  return getProperty("baseballTeam")
    .split(",")
    .filter((s) => s !== "").length;
}

/** Substats a Blood Cubic Zirconia skill's next cast costs. */
export function bczCost(skill: string): number {
  let cast = toInt(getProperty(`_bcz${skill}`));
  if (cast === 12) return 420000;
  if (cast > 12) cast -= 1;
  const floor = Math.floor(cast / 3);
  const modulo = cast % 3;
  const base = [11, 23, 37][modulo];
  return base * 10 ** (cast < 12 || (cast > 12 && modulo === 0) ? floor : floor + 1);
}

export function bczSweatReady(): boolean {
  return myBasestat($stat`submoxie`) - 22500 > bczCost("SweatBulletsCasts");
}

/** The Mom quest and CyberRealm route: eagle, server room key and both skills. */
export function momNCyber(): boolean {
  return (
    haveFamiliar($familiar`Patriotic Eagle`) &&
    haveItem($item`server room key`) &&
    haveSkill($skill`Overclock(10)`) &&
    haveSkill($skill`Just the Facts`)
  );
}

/** Lassos can be trained in the shadow rift. */
export function lassoShadow(): boolean {
  return haveItem($item`Monodent of the Sea`) && haveItem($item`closed-circuit pay phone`);
}

/** Swim trunks (or the SCUBA tank after the prism) so the sea pages load. */
export function equipSwimTrunks(): void {
  if (haveEffect($effect`Driving Waterproofly`) > 0) return;
  if (inSeaPath()) equip($item`really, really nice swimming trunks`);
  else if (inAftercore()) equip($item`Elf Guard SCUBA tank`);
}

/**
 * Fight a monster from the locket, a fax, a mimic egg or a pocket wish, in
 * that order. False when none of them is available.
 */
export function summon(monster: Monster, wishGear?: () => void): boolean {
  const fought = getProperty("_locketMonstersFought");
  if (
    getLocketMonsters()[monster.name] &&
    !fought.split(",").includes(`${monster.id}`) &&
    fought.split(",").filter((s) => s !== "").length < 3
  ) {
    return cliExecute(`reminisce ${monster}`);
  }
  if (haveItem($item`combat lover's locket`)) equip($slot`acc3`, $item`combat lover's locket`);
  if (
    !get("_photocopyUsed") &&
    haveItem($item`Clan VIP Lounge key`) &&
    (faxbot(monster) || faxbot(monster) || faxbot(monster))
  ) {
    use($item`photocopied monster`);
    runCombat();
  } else if ($familiar`Chest Mimic`.experience > 200) {
    if (ChestMimic.differentiableQuantity(monster) === 0) ChestMimic.receive(monster);
    if (!ChestMimic.differentiate(monster)) {
      throw new Error(
        `Couldn't hatch a ${monster} from a mimic egg. Rerun, and if it happens again ping FS.`,
      );
    }
    // A Force cast during the egg fight can strand the session in choice 1387.
    if (handlingChoice() && lastChoice() === 1387) runChoice(3);
  } else if (itemAmount($item`pocket wish`) > 0) {
    wishGear?.();
    cliExecute(`genie monster ${monster}`);
    runCombat();
  } else {
    return false;
  }
  return true;
}

/** Big Brother's black glass, which the Caliginous Abyss needs. */
export function blackGlass(): void {
  const familiar = pickFamiliar("itdrop");
  if (familiar) useFamiliar(familiar);
  equip($item`really, really nice swimming trunks`);
  visitUrl("monkeycastle.php?who=1");
  if (!have($item`black glass`)) buy($coinmaster`Big Brother`, 1, $item`black glass`);
}
