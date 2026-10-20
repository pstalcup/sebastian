import {
  availableChoiceOptions,
  buy,
  chew,
  cliExecute,
  currentRound,
  equip,
  faxbot,
  handlingChoice,
  haveEffect,
  haveFamiliar,
  haveSkill,
  lastChoice,
  Location,
  Monster,
  myBasestat,
  myHash,
  print,
  pullsRemaining,
  runChoice,
  runCombat,
  storageAmount,
  totalFreeRests,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  availableAmount,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $skill,
  $slot,
  $stat,
  AprilingBandHelmet,
  BloodCubicZirconia,
  Cartography,
  ChestMimic,
  CinchoDeMayo,
  CombatLoversLocket,
  get,
  have,
  set,
  SourceTerminal,
} from "libram";

import { pickFamiliar } from "./familiar";
import { pulledToday, pullSequence } from "./pulls";
import {
  debug,
  faxAvailable,
  genieFightsLeft,
  gotPeriled,
  haveItem,
  inAftercore,
  inSeaPath,
} from "./state";

// Daily resources and one-shot IOTM helpers. Ported from the "REMAINING SHARED
// HELPERS" sections of UnderTheSeaGlobals.ash and summon() in UnderTheSea.ash.

/** Source Terminal items.enh, re-upped wherever +item setup happens. */
export function sourceEnhance(): void {
  if (!SourceTerminal.have() || haveEffect($effect`items.enh`) > 0) return;
  if (SourceTerminal.enhanceUsesRemaining() <= 0) return;
  SourceTerminal.enhance($effect`items.enh`);
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
  if (`,${get("cargoPocketsEmptied")},`.includes(",494,")) return;
  if (!haveItem($item`Cargo Cultist Shorts`)) return;
  debug("Cargo shorts: opening pocket 494");
  cliExecute("cargo pocket 494");
}

/** January's Garbage Tote: the broken champagne bottle. */
export function garbageTote(): void {
  if (!haveItem($item`January's Garbage Tote`)) return;
  if (haveItem($item`broken champagne bottle`)) return;
  if (get("garbageChampagneCharge") <= 0) return;
  debug("Garbage tote: fetching the broken champagne bottle");
  visitUrl(`inv_use.php?whichitem=${$item`January's Garbage Tote`.id}&pwd=${myHash()}`);
  // mafia may already have answered it; only answer a live choice.
  if (!handlingChoice()) {
    debug("Tote choice was auto-resolved or never opened; skipping");
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
    3 - availableAmount($item`Septapus summoning charm`),
    Math.floor(get("availableSeptEmbers") / 2),
  );
  if (wanted > 0) buy($coinmaster`Sept-Ember Censer`, wanted, $item`Septapus summoning charm`);
}

export function pillKeeper(pill: string): void {
  if (!haveItem($item`Eight Days a Week Pill Keeper`)) return;
  if (get("_freePillKeeperUsed")) return;
  debug(`Pill keeper: ${pill}`);
  cliExecute(`pillkeeper ${pill}`);
}

/** Noncombat forcer charges left, counting two for the pulls fallback. */
export function ncForceEstimate(): number {
  let force = 2;
  if (haveItem($item`Apriling band tuba`)) force += Math.max(0, 3 - get("_aprilBandTubaUses"));
  if (haveItem($item`McHugeLarge left ski`)) {
    force += Math.max(0, 3 - get("_mcHugeLargeAvalancheUses"));
  }
  if (CinchoDeMayo.have()) {
    force += Math.min(3, Math.floor(CinchoDeMayo.totalAvailableCinch() / 60));
  }
  if (haveItem($item`Jurassic Parka`)) force += Math.max(0, 5 - get("_spikolodonSpikeUses"));
  return force;
}

/** Spend the cheapest available noncombat forcer charge. */
export function ncForce(): void {
  if (get("noncombatForcerActive")) return;
  if (AprilingBandHelmet.canPlay($item`Apriling band tuba`)) {
    AprilingBandHelmet.play($item`Apriling band tuba`);
  } else if (
    CinchoDeMayo.have() &&
    (CinchoDeMayo.currentCinch() >= 60 || get("timesRested") < totalFreeRests())
  ) {
    while (CinchoDeMayo.currentCinch() < 60 && get("timesRested") < totalFreeRests()) {
      // The helmet sweetens the rest but is optional.
      if (AprilingBandHelmet.have()) equip($slot`hat`, $item`Apriling band helmet`);
      cliExecute("camp rest free");
    }
    if (CinchoDeMayo.currentCinch() >= 60) {
      equip($slot`acc3`, $item`Cincho de Mayo`);
      useSkill($skill`Cincho: Fiesta Exit`);
    }
  } else if (haveItem($item`Eight Days a Week Pill Keeper`) && !get("_freePillKeeperUsed")) {
    // Sneakisol forces a noncombat for free, so it comes before any pull.
    pillKeeper("free noncombat");
  } else if (
    !haveItem($item`McHugeLarge duffel bag`) &&
    !haveItem($item`Jurassic Parka`) &&
    !haveItem($item`Allied Radio Backpack`)
  ) {
    for (const item of [$item`handheld Allied radio`, $item`Clara's bell`, $item`stench jelly`]) {
      if (pulledToday(item)) continue;
      if (item === $item`Clara's bell` && storageAmount(item) === 0) continue;
      if (pullsRemaining() === 0) return;
      pullSequence(item);
      if (item === $item`Clara's bell`) use(item);
      else if (item === $item`handheld Allied radio`) cliExecute("alliedradio misc sniper");
      else chew(item);
      return;
    }
  }
}

export function mapReady(): boolean {
  return Cartography.have() && Cartography.availableMaps() > 0 && !Cartography.currentlyMapping();
}

/** Map the Monsters, but only once the Peridot is spent in this zone. */
export function mapMonster(location: Location): void {
  if (!mapReady()) return;
  if (haveItem($item`Peridot of Peril`) && !gotPeriled(location)) return;
  debug(`Map the Monsters armed for ${location}`);
  useSkill($skill`Map the Monsters`);
}

/** All three Sheriff props in hand, so Assert your Authority can be cast. */
export function sheriffOutfit(): boolean {
  return [$item`Sheriff moustache`, $item`Sheriff badge`, $item`Sheriff pistol`].every((item) =>
    haveItem(item),
  );
}

export function baseballPlayers(): number {
  return get("baseballTeam")
    .split(",")
    .filter((s) => s !== "").length;
}

export function bczSweatReady(): boolean {
  return (
    myBasestat($stat`submoxie`) - 22500 > BloodCubicZirconia.skillCost($skill`BCZ: Sweat Bullets`)
  );
}

/** The Mom quest and CyberRealm route: eagle, server room key and both skills. */
export function momNCyber(): boolean {
  return (
    haveFamiliar($familiar`Patriotic Eagle`) &&
    haveItem($item`server room key`) &&
    haveSkill($skill`OVERCLOCK(10)`) &&
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
 * Answer a choice the game is parked in, from its choiceAdventure setting.
 * The Force's follow-up (1387) is the usual one: mafia answers it after a
 * fight it starts itself, like a locket reminisce, but not after one run by
 * runCombat(), and grimoire's choiceFollowsFight() check misses it. Any other
 * choice that can't be answered or walked away from stops the run, since
 * every request after it would be refused.
 */
export function leaveChoice(): void {
  if (!handlingChoice()) return;
  const choice = lastChoice();
  const option = Number(get(`choiceAdventure${choice}`, ""));
  if (option > 0) runChoice(option);
  // Some choices can be walked away from.
  if (handlingChoice()) visitUrl("main.php");
  if (handlingChoice()) {
    throw new Error(`Stuck in choice ${lastChoice()}; answer it by hand and rerun.`);
  }
}

/**
 * Fight the monster a summon just set up, and answer the choice it leaves.
 * A genie wish can leave the fight for the next page load, and runCombat()
 * does nothing until mafia has seen the fight page, so load it first.
 */
export function fightSummon(): void {
  if (currentRound() === 0) visitUrl("main.php");
  runCombat();
  leaveChoice();
}

/** A fax from OnlyFax; EasyFax, mafia's default bot, is gone. */
const fax = (monster: Monster) => faxbot(monster, "OnlyFax");

/**
 * Fight a monster from the locket, a fax, a mimic egg or a genie wish, in
 * that order. A fax that doesn't arrive marks the fax as failed for the day
 * and falls through to the next source. False when none of them is available.
 */
export function summon(monster: Monster, wishGear?: () => void): boolean {
  if (
    CombatLoversLocket.canReminisce(monster) &&
    !CombatLoversLocket.monstersReminisced().includes(monster)
  ) {
    const fought = CombatLoversLocket.reminisce(monster);
    leaveChoice();
    return fought;
  }
  if (CombatLoversLocket.have()) equip($slot`acc3`, $item`combat lover's locket`);
  if (faxAvailable()) {
    if (fax(monster) || fax(monster)) {
      use($item`photocopied monster`);
      fightSummon();
      return true;
    }
    print(`Couldn't fax a ${monster}; trying other summons and skipping the fax today.`, "red");
    set("_sebFaxFailed", true);
  }
  if ($familiar`Chest Mimic`.experience > 200) {
    if (ChestMimic.differentiableQuantity(monster) === 0) ChestMimic.receive(monster);
    if (!ChestMimic.differentiate(monster)) {
      throw new Error(
        `Couldn't hatch a ${monster} from a mimic egg. Rerun, and if it happens again ping FS.`,
      );
    }
    leaveChoice();
  } else if (genieFightsLeft() > 0) {
    wishGear?.();
    const fights = get("_genieFightsUsed");
    cliExecute(`genie monster ${monster}`);
    if (get("_genieFightsUsed") === fights) return false;
    fightSummon();
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
