'use strict';

var kolmafia = require('kolmafia');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toArray(r) {
  return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, e) {
  if ("object" != typeof t || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "retryFailedNetworkRequests", "saveSettingsOnSet", "separateTitleAndMenuBar", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSellingShorts", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasInterestingCoin", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "heartstoneBanishUnlocked", "heartstoneBuffUnlocked", "heartstoneKillUnlocked", "heartstoneLuckUnlocked", "heartstonePalsUnlocked", "heartstoneStunUnlocked", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "includeCodpieceGemsInOutfits", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerAscension12293", "itemBoughtPerAscension12298", "itemBoughtPerAscension12299", "itemBoughtPerAscension12300", "itemBoughtPerAscension12301", "itemBoughtPerAscension12303", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsReplicaFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "permitScriptNotify", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_adjustedJokestersWig", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_bastilleRewardsCollected", "_blackRoseGardenToday", "_blessingShieldColdReceived", "_blessingShieldHotReceived", "_blessingShieldPhysicalReceived", "_blessingShieldSleazeReceived", "_blessingShieldSpookyReceived", "_blessingShieldStenchReceived", "_brandishMossMedalCast", "_beachCombing", "_bearlyHeard", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_clanRumpusSpot1Visited", "_clanRumpusSpot2Visited", "_clanRumpusSpot3Visited", "_clanRumpusSpot4Visited", "_clanRumpusSpot5Visited", "_clanRumpusSpot7Visited", "_clanRumpusSpot9Visited", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_eleventRestEffectGained", "_elfGuardHangoverCureUsed", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_faradayCageRestEffectGained", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_fleekMascaraUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_giantGnawingBoneUsed", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadHouseRestEffectGained", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_heartstoneLuckUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_interestingCoinHeads", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kneecappingOrdered", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_legendaryNoodlesSpleen", "_legendaryPastaWaveCast", "_legendarySpiceGhostFood", "_licenseToChillUsed", "_lightningRodCast", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_mobiusRingPrimed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_mushroomHouseRestEffectGained", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_porkElfMedicineCabinetUsed", "_porkElfNetiPotUsed", "_porkElfSinkUsed", "_porkElfToiletriesKitUsed", "_porkElfToiletUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_pumpkinRestEffectGained", "_punchingMirrorUsed", "_rainCoatCast", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_residenceCubeRestEffectGained", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_snowFortRestEffectGained", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_thunderDownUnderwearCast", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_waterBalloonBuffGranted", "_waterBalloonHeldByEnemy", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "outputBufferLength", "pingDefaultTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "adventurerMeatsWorldPoints", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "blessingShieldColdTier", "blessingShieldHotTier", "blessingShieldPhysicalTier", "blessingShieldSleazeTier", "blessingShieldSpookyTier", "blessingShieldStenchTier", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dietingPillCharges", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "exerciseLiquidityCharges", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "faxbotTimeout", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "handfulOfTipsMeat", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "intangibleAssetCharges", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "legendaryNoodlesAmygdala", "legendaryNoodlesSkin", "legendaryNoodlesStomach", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "mechanicalSongbirdProgress", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "soybeanFuturesEaten", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "toxicAssetCharges", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_archSpadeDigs", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_baseballInnings", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_bastilleLockedInScore", "_bastilleVoucherGames", "_bastilleVouchersUsed", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cupOf13sCharges", "_cupOf13sDrops", "_cupOf13sJewels", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_ensorcelUsed", "_expertCornerCutterUsed", "_experienceSafariUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fitnessTrackingSteps", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_heartstoneBanishUsed", "_heartstoneBuffUsed", "_heartstoneKillUsed", "_heartstonePalsUsed", "_heartstoneStunUsed", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hoboFortRestEffectsGained", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_itemBoughtPerDay12292", "_itemBoughtPerDay12294", "_itemBoughtPerDay12295", "_itemBoughtPerDay12305", "_itemBoughtPerDay12306", "_itemBoughtPerDay12307", "_itemBoughtPerDay12308", "_itemBoughtPerDay12310", "_itemBoughtPerDay12311", "_itemBoughtPerDay12312", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_laughingStockCharges", "_laughingStockFruitDropped", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legendaryLasagmbieMana", "_legendaryPastaWandCrafting", "_legendaryVermincelliFreeRats", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_luckyGoldRingBeachBuck", "_luckyGoldRingBit", "_luckyGoldRingCoinspiracy", "_luckyGoldRingFreddy", "_luckyGoldRingFunFunds", "_luckyGoldRingHoboNickel", "_luckyGoldRingMeat", "_luckyGoldRingRubee", "_luckyGoldRingSandDollar", "_luckyGoldRingVolcoino", "_luckyGoldRingWalmart", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_meatCuteUsed", "_meatLoafUsed", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusRingPrimedTurn", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_partialTombstonesUsed", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_pyramidRestEffectsGained", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_swordOfSWordsKills", "_swordOfSWordsMonsterChanged", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waterBalloonTossStreak", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat207", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "lastBlueVsRedNCMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "swordOfSWordsMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_beanballMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_curveballMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_screwballMonster", "_skullballMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = ["lastBlueVsRedNCMonster", "swordOfSWordsMonster"];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_citizenZone", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_seadentWaveZone", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "gitConflictPriority", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "baseballTeam", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "blueVsRedTeam", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "dailyDungeonRooms", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "heartstoneAttunementMods", "heartstoneAttunementWord", "heartstoneLetters", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "stockCertificateTurns", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "tavernLayout", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "walfordBucketItem", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleOptionsTaken", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_curveballFightsLeft", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591", "choiceAdventure1604", "choiceAdventure1605", "choiceAdventure1606", "choiceAdventure1607", "choiceAdventure1608", "choiceAdventure1609", "choiceAdventure1610", "choiceAdventure1611", "choiceAdventure1612", "choiceAdventure1613", "choiceAdventure1614", "choiceAdventure1615", "choiceAdventure1616", "choiceAdventure1617", "choiceAdventure1618", "choiceAdventure1619", "choiceAdventure1620", "choiceAdventure1621", "choiceAdventure1622", "choiceAdventure1623", "choiceAdventure1624", "choiceAdventure1625", "choiceAdventure1626", "choiceAdventure1627", "choiceAdventure1628", "choiceAdventure1629", "choiceAdventure1630", "choiceAdventure1631", "choiceAdventure1632", "choiceAdventure1633", "choiceAdventure1634", "choiceAdventure1635", "choiceAdventure1636"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
/**
 * Determine whether a property has an Item value
 *
 * @param property Property to check
 * @returns Whether the supplied property has an Item value
 */
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

var createPropertyGetter = transform => (property, default_) => {
  var value = kolmafia.getProperty(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(value => value);
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getFamiliar = createMafiaClassPropertyGetter(kolmafia.Familiar, kolmafia.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(kolmafia.Item, kolmafia.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(kolmafia.Location, kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(kolmafia.Monster, kolmafia.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(kolmafia.Phylum, kolmafia.toPhylum);
var getStat = createMafiaClassPropertyGetter(kolmafia.Stat, kolmafia.toStat);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function get(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    return getBoolean(property, _default) ?? false;
  } else if (isNumericProperty(property)) {
    return getNumber(property, _default) ?? 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== undefined ? _default : value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof kolmafia.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof kolmafia.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof kolmafia.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof kolmafia.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof kolmafia.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof kolmafia.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  kolmafia.setProperty(property, stringValue);
  return value;
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);
    _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = kolmafia.propertyExists(propertyName) ? get(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices({
        [choiceToSet]: value
      });
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];
        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          kolmafia.removeProperty(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
}();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Split an array into chunkSize sized chunks
 *
 * @param array Array to split
 * @param chunkSize Size of chunk
 * @returns Split array
 */
function chunk(array, chunkSize) {
  var result = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}

var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => acc + literal + (placeholders[i] ?? ""), "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    kolmafia.print("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    kolmafia.print(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Bounty, kolmafia.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Class, kolmafia.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Coinmaster, kolmafia.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var $effect = createSingleConstant(kolmafia.Effect, kolmafia.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(kolmafia.Element, kolmafia.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var $familiar = createSingleConstant(kolmafia.Familiar, kolmafia.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var $item = createSingleConstant(kolmafia.Item, kolmafia.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var $items = createPluralConstant(kolmafia.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(kolmafia.Location, kolmafia.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
var $locations = createPluralConstant(kolmafia.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Modifier, kolmafia.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(kolmafia.Monster, kolmafia.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(kolmafia.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Path, kolmafia.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
var $phylum = createSingleConstant(kolmafia.Phylum, kolmafia.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Servant, kolmafia.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var $skill = createSingleConstant(kolmafia.Skill, kolmafia.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
var $skills = createPluralConstant(kolmafia.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(kolmafia.Slot, kolmafia.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(kolmafia.Stat, kolmafia.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Thrall, kolmafia.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Thrall);

var _templateObject2$4, _templateObject3$5, _templateObject4$4, _templateObject5$3, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$3, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18$2, _templateObject19$4, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$2, _templateObject24$3, _templateObject25$3, _templateObject26$3, _templateObject27$2, _templateObject28$2, _templateObject29$2, _templateObject30$2, _templateObject31$2, _templateObject32$2, _templateObject33$2, _templateObject34$2, _templateObject35$2, _templateObject48$1, _templateObject49$1, _templateObject50$2, _templateObject51$2, _templateObject52$1, _templateObject53$2, _templateObject54$2;
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function have$2(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof kolmafia.Effect) {
    return kolmafia.haveEffect(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Familiar) {
    return kolmafia.haveFamiliar(thing);
  }
  if (thing instanceof kolmafia.Item) {
    return kolmafia.availableAmount(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Servant) {
    return kolmafia.haveServant(thing);
  }
  if (thing instanceof kolmafia.Skill) {
    return kolmafia.haveSkill(thing);
  }
  if (thing instanceof kolmafia.Thrall) {
    var thrall = kolmafia.myThrall();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
[Wanderer.Digitize, Wanderer.Portscan];
var banishSource = banisher => {
  switch (banisher.toLowerCase()) {
    case "saber force":
      return $skill(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["Use the Force"])));
    case "nanorhino":
      return $skill(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["Unleash Nanites"])));
    case "sea *dent":
      return $skill(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])));
  }
  var item = kolmafia.toItem(banisher);
  if ($items(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["none, training scroll:  Snokebomb, tomayohawk-style reflex hammer"]))).includes(item)) {
    return kolmafia.toSkill(banisher);
  }
  return item;
};
/**
 * Translate mafia's multi-dimensional array prefs into a multi-dimensional array
 * @param prop The name of the mafia string property to process
 * @param outerDelimiter The "outer" delimiter, which separates tuples from eachother
 * @param innerDelimiter The "inner" delimieter, which separates the elements of tuples from eachother
 * @param mappers An array of string => whatever mapping functions that turn this into the actual objects we want
 * @returns An array of typed tuples, based on the given inputs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function multiSplit(prop, outerDelimiter, innerDelimiter, mappers) {
  var initialSplit = get(prop).split(outerDelimiter).filter(Boolean);
  var multiDimensionalArray = outerDelimiter === innerDelimiter ? chunk(initialSplit, mappers.length) : initialSplit.map(entry => entry.split(innerDelimiter));
  return multiDimensionalArray.map(tup => mappers.map((func, index) => func(tup[index])));
}
/**
 * Get a map of banished monsters keyed by what banished them
 *
 * @category General
 * @returns Map of banished monsters
 */
function getBanishedMonsters() {
  return new Map(multiSplit("banishedMonsters", ":", ":", [kolmafia.toMonster, banishSource, Number]).map(_ref7 => {
    var _ref8 = _slicedToArray(_ref7, 2),
      monster = _ref8[0],
      source = _ref8[1];
    return [source, monster];
  }));
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return kolmafia.holiday().split("/").flatMap(holiday => holidayWanderers.get(holiday) ?? []);
}
new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["Moxie"])))]]);
new Map([["people, all of whom appear to be on fire", $element(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19$4 || (_templateObject19$4 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24$3 || (_templateObject24$3 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25$3 || (_templateObject25$3 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoke rising from deeper within the maze", $element(_templateObject26$3 || (_templateObject26$3 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27$2 || (_templateObject27$2 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28$2 || (_templateObject28$2 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29$2 || (_templateObject29$2 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30$2 || (_templateObject30$2 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["with lava slowly oozing out of it", $element(_templateObject31$2 || (_templateObject31$2 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32$2 || (_templateObject32$2 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33$2 || (_templateObject33$2 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34$2 || (_templateObject34$2 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35$2 || (_templateObject35$2 = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Calculate the total weight of a given familiar, including soup & modifiers
 * @param familiar The familiar to use--defaults to your current one
 * @param considerAdjustment Whether to include your `weightAdjustment` in the calculation
 * @returns The total weight of the given familiar
 */
function totalFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myFamiliar();
  var considerAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return clamp(clamp(kolmafia.familiarWeight(familiar), have$2($effect(_templateObject48$1 || (_templateObject48$1 = _taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, Infinity) + familiar.soupWeight + (considerAdjustment ? kolmafia.weightAdjustment() : 0) + (familiar.feasted ? 10 : 0), 1, Infinity);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
new Set(regularFamiliarTags);
new Map([[$familiar(_templateObject49$1 || (_templateObject49$1 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject50$2 || (_templateObject50$2 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject51$2 || (_templateObject51$2 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject52$1 || (_templateObject52$1 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject53$2 || (_templateObject53$2 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject54$2 || (_templateObject54$2 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = new Set(["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"]);
var overlappingSkillNames = new Set(["Lightning Bolt", "Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "Static Shock", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Punt", "Howl", "Cleave", "Boil", "Slice", "Rainbow"]);

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var query = "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value");
  var macroText = kolmafia.visitUrl("account_combatmacros.php");
  var macroMatches = kolmafia.xpath(macroText, query);
  if (macroMatches.length === 0) {
    kolmafia.visitUrl("account_combatmacros.php?action=new");
    var newMacroText = kolmafia.visitUrl("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = kolmafia.xpath(newMacroText, query);
  }
  if (macroMatches.length === 0) {
    // We may have hit the macro cap
    if (kolmafia.xpath(macroText, '//select[@name="macroid"]/option').length >= 100) {
      throw new InvalidMacroError("Please delete at least one existing macro to make some space for Libram");
    }
    // Otherwise who knows why it failed
    throw new InvalidMacroError("Could not find or create macro ".concat(name));
  }
  return parseInt(macroMatches[0], 10);
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? kolmafia.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.has(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    if (itemOrItems[0] === itemOrItems[1]) return "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0]));
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return kolmafia.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.has(skill.name) ? skill.name : skill.id;
}
/**
 * Reduces a list of items into pairs to funksling.
 *
 * @param items - The items to be reduced.
 * @returns The reduced list of items or item pairs.
 */
function funkslingReduce() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.reduce((acc, item, i, arr) => i % 2 === 0 ? acc.concat(i + 1 < arr.length ? [[item, arr[i + 1]]] : [item]) : acc, []);
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  function InvalidMacroError() {
    _classCallCheck(this, InvalidMacroError);
    return _callSuper(this, InvalidMacroError, arguments);
  }
  _inherits(InvalidMacroError, _Error);
  return _createClass(InvalidMacroError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);
    _defineProperty(this, "components", []);
    _defineProperty(this, "name", MACRO_NAME);
  }
  return _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len2 = arguments.length, nextSteps = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextSteps[_key2] = arguments[_key2];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, _toConsumableArray(nextStepsStrings.filter(Boolean)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return kolmafia.visitUrl("fight.php?action=macro&macrotext=".concat(kolmafia.urlEncode(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if (kolmafia.getAutoAttack() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&name=").concat(kolmafia.urlEncode(this.name), "&macrotext=").concat(kolmafia.urlEncode(this.toString()), "&action=save"), true, true);
      kolmafia.visitUrl("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "strict",
    value:
    /**
     * Add a "strict" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function strict() {
      return this.step("strict");
    }
    /**
     * Add a "strict" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "lenient",
    value:
    /**
     * Add a "lenient" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function lenient() {
      return this.step("lenient");
    }
    /**
     * Add a "lenient" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "scrollWhenDone",
    value:
    /**
     * Add a "scrollwhendone" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function scrollWhenDone() {
      return this.step("scrollwhendone");
    }
    /**
     * Add a "scrollwhendone" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "icon",
    value:
    /**
     * Add an "icon [image]" step to this macro.
     *
     * @param item The item to use for the image.
     * @returns {Macro} This object itself.
     */
    function icon(item) {
      return this.step("icon ".concat(item.image.replace(/\.[^.]+$/, "")));
    }
    /**
     * Add an "icon [image]" step to this macro.
     *
     * @param item The item to use for the image.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue, ifFalse) {
      this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue);
      if (ifFalse) {
        this.step("else").step(ifFalse);
      }
      return this.step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the negated condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue, ifFalse) {
      return this.if_("!".concat(Macro.makeBALLSPredicate(condition)), ifTrue, ifFalse);
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the negated condition is true.
     * @param ifFalse Optional else-branch for the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(Macro.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @param condition The BALLS condition for the repeat statement, optional.
     * @returns {Macro} This object itself.
     */
    function repeat(condition) {
      return condition === undefined ? this.step("repeat") : this.step("repeat ".concat(Macro.makeBALLSPredicate(condition)));
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len5 = arguments.length, skills = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        skills[_key5] = arguments[_key5];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill).repeat(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "itemQueue",
    value:
    /**
     * Create a new macro with one or more item queue steps.
     * Items will be funkslinged if available.
     *
     * @param items Items to use.
     * @param condition The BALLS condition for the usequeue statement, optional.
     * @param single Whether we should refrain from funkslinging: `true` if you want to avoid funkslinging, defaults to `false`.
     * @returns {Macro} This object itself.
     */
    function itemQueue(items, condition) {
      var single = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (items.length === 0) return this;
      return this.step("".concat(single ? "usesinglequeue" : "usequeue", " ").concat(condition ? "until ".concat(Macro.makeBALLSPredicate(condition), " :: ") : "").concat(items.slice(0, 20).map(itemOrItemsBallsMacroName).join(", "))).itemQueue(items.slice(20), condition);
    }
    /**
     * Create a new macro with one or more item queue steps.
     * Items will be funkslinged if available.
     *
     * @param items Items to use.
     * @param condition The BALLS condition for the usequeue statement, optional.
     * @param single Whether we should refrain from funkslinging: `true` if you want to avoid funkslinging, defaults to `false`.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len7 = arguments.length, items = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        items[_key7] = arguments[_key7];
      }
      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), Macro.item(item));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function funkslingItem() {
      return this.item.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryFunkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function tryFunkslingItem() {
      return this.tryItem.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "jiggle",
    value:
    /**
     * Add a "jiggle" step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function jiggle() {
      return this.step("jiggle");
    }
    /**
     * Create a new macro with a jiggle step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }, {
    key: "beginif",
    value:
    /**
     * Create a longer if...elif block, starting with this if statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns A MacroIfBlock that holds this macro on it, and will return to this macro upon calling either .else() or .endif()
     */
    function beginif(condition, ifTrue) {
      return new MacroIfBlock(this, condition, ifTrue);
    }
    /**
     * Create a Macro that begins with longer if...elif block, starting with this if statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns A MacroIfBlock that holds this macro on it, and will return to this macro upon calling either .else() or .endif()
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray(get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      kolmafia.removeProperty(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var id = Macro.cachedMacroIds.get(name) ?? getMacroId(name);
          kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "strict",
    value: function strict() {
      return new this().strict();
    }
  }, {
    key: "lenient",
    value: function lenient() {
      return new this().lenient();
    }
  }, {
    key: "scrollWhenDone",
    value: function scrollWhenDone() {
      return new this().scrollWhenDone();
    }
  }, {
    key: "icon",
    value: function icon(item) {
      return new this().icon(item);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      if (condition instanceof kolmafia.Monster) {
        return "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        if (condition[0] instanceof kolmafia.Item) return itemOrItemsBallsMacroPredicate(condition);
        return "(".concat(condition.map(entry => Macro.makeBALLSPredicate(entry)).join(" || "), ")");
      } else if (condition instanceof kolmafia.Effect) {
        return "haseffect ".concat(condition.id);
      } else if (condition instanceof kolmafia.Skill) {
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      } else if (condition instanceof kolmafia.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof kolmafia.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof kolmafia.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof kolmafia.Stat) {
        return "".concat(condition.toString().toLowerCase(), "class");
      } else if (condition instanceof kolmafia.Phylum) {
        return "monsterphylum ".concat(condition);
      } else if (condition instanceof kolmafia.Element) {
        return "monsterelement ".concat(condition);
      } else if (["indoor", "outdoor", "underground", "underwater", "none"].includes(condition)) {
        return "environment ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue, ifFalse) {
      return new this().if_(condition, ifTrue, ifFalse);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue, ifFalse) {
      return new this().ifNot(condition, ifTrue, ifFalse);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "itemQueue",
    value: function itemQueue(items, condition) {
      var single = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return new this().itemQueue(items, condition, single);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this8;
      return (_this8 = new this()).funkslingItem.apply(_this8, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this9;
      return (_this9 = new this()).tryFunkslingItem.apply(_this9, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "jiggle",
    value: function jiggle() {
      return new this().jiggle();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }, {
    key: "beginif",
    value: function beginif(condition, ifTrue) {
      return new this().beginif(condition, ifTrue);
    }
  }]);
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty(Macro, "cachedMacroIds", new Map());
_defineProperty(Macro, "cachedAutoAttacks", new Map());
var MacroIfBlock = /*#__PURE__*/function () {
  function MacroIfBlock(macro, condition, ifTrue) {
    _classCallCheck(this, MacroIfBlock);
    _defineProperty(this, "root", void 0);
    _defineProperty(this, "components", []);
    _defineProperty(this, "baseClass", void 0);
    this.root = macro;
    this.baseClass = this.root.constructor;
    this.append(this.baseClass.if_(condition, ifTrue));
    this.components.pop(); // Remove "endif";
  }
  return _createClass(MacroIfBlock, [{
    key: "append",
    value: function append() {
      var _this$components2;
      for (var _len13 = arguments.length, components = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        components[_key13] = arguments[_key13];
      }
      (_this$components2 = this.components).push.apply(_this$components2, _toConsumableArray(components.flatMap(component => component instanceof Macro ? component.components : component)));
      return this;
    }
    /**
     * Append an elif statement to this if block.
     * @param condition The condition for the elif statement.
     * @param macro The macro within the elif statement.
     * @returns This same MacroIfBlock; call endif() or else() to return to your macro.
     */
  }, {
    key: "elseIf",
    value: function elseIf(condition, macro) {
      return this.append("elif ".concat(this.baseClass.makeBALLSPredicate(condition)), macro);
    }
    /**
     * End the elif block, and return to your initial macro.
     * @returns The macro that started this elif block, with all steps appended and the `if` statement closed.
     */
  }, {
    key: "endif",
    value: function endif() {
      var _this$root;
      return (_this$root = this.root).step.apply(_this$root, _toConsumableArray(this.components)).step("endif");
    }
    /**
     * End your elif block with a final `else`, and return to your initial macro.
     * @param macro The macro to pass into the `else` block.
     * @returns The macro that started this elif block, with all steps appended and the `if` statement closed.
     */
  }, {
    key: "else",
    value: function _else(macro) {
      return this.append("else", macro).endif();
    }
  }]);
}();

var _templateObject$7;
var familiar$1 = $familiar(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["Pair of Stomping Boots"])));
/**
 * @returns whether the player has the Pair of Stomping Boots in their terrarium
 */
function have$1() {
  return have$2(familiar$1);
}
/**
 * @returns number of free runaways that have already been used today
 * @see Bandersnatch with which the Stomping Boots shares a counter
 */
function getRunaways() {
  return get("_banderRunaways");
}
/**
 * @param considerWeightAdjustment Include familiar weight modifiers
 * @returns total number of free runaways that the player can get from their Stomping Boots
 */
function getMaxRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.floor(totalFamiliarWeight(familiar$1, considerWeightAdjustment) / 5);
}
/**
 * @param considerWeightAdjustment Whether to consider weight adjustment in free run calculation
 * @returns the number of remaining free runaways the player can get from their Stomping Boots
 */
function getRemainingRunaways() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return Math.max(0, getMaxRunaways(considerWeightAdjustment) - getRunaways());
}
/**
 * @param considerWeightAdjustment Include familiar weight modifiers
 * @returns whether the player could use their Stomping Boots to get a free run in theory
 */
function couldRunaway() {
  var considerWeightAdjustment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return have$1() && getRemainingRunaways(considerWeightAdjustment) > 0;
}

var _templateObject$6, _templateObject2$3, _templateObject3$4;
var familiar = $familiar(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["Pocket Professor"])));
/**
 * @returns Whether you `have` the Pocket Professor
 */
function have() {
  return have$2(familiar);
}
/**
 * Calculate the total number of lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The total number of lectures you're able to deliver, including ones you've already delivered today
 */
function totalAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(familiar);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kolmafia.haveEquipped($item(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return (includeChip ? 2 : 0) + Math.floor(Math.sqrt(weight - 1));
}
/**
 * @returns The number of Pocket Professor lectures you've delivered today
 */
function lecturesDelivered() {
  return get("_pocketProfessorLectures");
}
/**
 * Calculate the number of unused lectures available to you given a particular familiar weight and chip-equipped status
 * @param weight The weight to calculate at--defaults to your current total familiar weight
 * @param includeChip Whether or not to include the memory chip--defaults to whether or not it's currently equipped
 * @returns The number of lectures you're able to deliver, accounting for any you've already delivered today
 */
function currentlyAvailableLectures() {
  var weight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : totalFamiliarWeight(familiar);
  var includeChip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kolmafia.haveEquipped($item(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["Pocket Professor memory chip"]))));
  return totalAvailableLectures(weight, includeChip) - lecturesDelivered();
}

var _templateObject$5;
$item(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["Everfull Dart Holster"])));
/**
 * @returns An array consisting of the current dart perks you have unlocked
 */
function currentPerks() {
  return get("everfullDartPerks").split(",");
}
function makePerkFunction(perkOrPerks, formula) {
  var current = currentPerks();
  if (Array.isArray(perkOrPerks)) {
    return () => formula(perkOrPerks.filter(perk => current.includes(perk)).length);
  }
  return () => formula(current.filter(perk => perk === perkOrPerks).length);
}
var BULLSEYE_ACCURACY_PERKS = ["25% Better bullseye targeting", "25% better chance to hit bullseyes", "25% More Accurate bullseye targeting"];
/**
 * @returns The chance of landing a bullseye
 */
makePerkFunction(BULLSEYE_ACCURACY_PERKS, perks => clamp(0.25 * (1 + perks), 0, 1));
var BULLSEYE_COOLDOWN_PERKS = ["You are less impressed by bullseyes", "Bullseyes do not impress you much"];
/**
 * @returns The current number of turns of Everything Looks Red you'll receive on a bullseye
 */
makePerkFunction(BULLSEYE_COOLDOWN_PERKS, perks => clamp(50 - 10 * perks, 30, 50));
/**
 * @returns The total number of darts you can have available based on your current perks
 */
makePerkFunction("Expand your dart capacity by 1", perks => 1 + perks);

var _templateObject2$2, _templateObject3$3, _templateObject4$3, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$2, _templateObject0$2, _templateObject1$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$3, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23$1, _templateObject24$2, _templateObject25$2, _templateObject26$2;
/**
 * @param skill The BCZ skill to check.
 * @param castNumber The number of times you've cast the skill
 * @returns The subtat cost to cast the skill.
 */
function skillCost(skill) {
  var castNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : timesCast(skill);
  if (castNumber <= 11) {
    var cycle = Math.floor(castNumber / 3);
    var position = castNumber % 3;
    return [11, 23, 37][position] * 10 ** cycle;
  } else if (castNumber === 12) {
    return 420_000;
  } else {
    var _cycle = Math.floor((castNumber - 13) / 3);
    var _position = (castNumber + 2) % 3;
    return [11, 23, 37][_position] * 10 ** (_cycle + 5);
  }
}
new Map([[$skill(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["BCZ: Blood Geyser"]))), $stat(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), $stat(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), $stat(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["SubMoxie"])))], [$skill(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["BCZ: Blood Bath"]))), $stat(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject0$2 || (_templateObject0$2 = _taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), $stat(_templateObject1$2 || (_templateObject1$2 = _taggedTemplateLiteral(["SubMoxie"])))], [$skill(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), $stat(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["SubMuscle"])))], [$skill(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), $stat(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), $stat(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["SubMysticality"])))], [$skill(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["BCZ: Sweat Equity"]))), $stat(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["SubMoxie"])))]]);
var PREFS = new Map([[$skill(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["BCZ: Blood Geyser"]))), "_bczBloodGeyserCasts"], [$skill(_templateObject19$3 || (_templateObject19$3 = _taggedTemplateLiteral(["BCZ: Refracted Gaze"]))), "_bczRefractedGazeCasts"], [$skill(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))), "_bczSweatBulletsCasts"], [$skill(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["BCZ: Blood Bath"]))), "_bczBloodBathCasts"], [$skill(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["BCZ: Dial it up to 11"]))), "_bczDialitupCasts"], [$skill(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["BCZ: Sweat Equity"]))), "_bczSweatEquityCasts"], [$skill(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["BCZ: Create Blood Thinner"]))), "_bczBloodThinnerCasts"], [$skill(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["BCZ: Prepare Spinal Tapas"]))), "_bczSpinalTapasCasts"], [$skill(_templateObject26$2 || (_templateObject26$2 = _taggedTemplateLiteral(["BCZ: Craft a Pheromone Cocktail"]))), "_bczPheromoneCocktailCasts"]]);
/**
 * @param skill The BCZ skill to check.
 * @returns The number of casts of the skill already used, parsing the pref.
 */
function timesCast(skill) {
  var pref = PREFS.get(skill);
  if (!pref) return 0;
  return get(pref, 0);
}

var _templateObject$4, _templateObject2$1, _templateObject3$2, _templateObject19$2;

/** Whether the seb_debug preference asks for the run's routine narration. */
function debugMode() {
  return get("seb_debug", false);
}

/**
 * Routine narration (what the run is about to do, what it measured), with
 * the "SEB:" prefix the original printed as "UTS:". Silent unless seb_debug
 * is set: mafia already logs every turn, item and skill the run spends.
 */
function debug(message) {
  if (debugMode()) kolmafia.print("SEB: ".concat(message), "blue");
}

/** Usable without a pull: inventory, closet, worn, or worn by a familiar. */
function haveItem(item) {
  if (kolmafia.availableAmount(item) > 0) return true;
  return kolmafia.Familiar.all().some(familiar => kolmafia.haveFamiliar(familiar) && kolmafia.familiarEquippedEquipment(familiar) === item);
}

/** Free fights are worth more to aftercore farming than to the run. */
function highShiny() {
  return get("garbo_valueOfFreeFight", 0) > get("valueOfAdventure");
}

/** None of the big three wish-ish IOTMs, so pulls are precious. */
function lowShiny() {
  return !haveItem($item(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["2002 Mr. Store Catalog"])))) && !haveItem($item(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["cursed monkey's paw"])))) && !haveItem($item(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["august scepter"]))));
}

// ─── BANG POTIONS ─────────────────────────────────────────────────────────────

var BANG_POTIONS = $items(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["milky potion, swirly potion, bubbly potion, smoky potion, cloudy potion, effervescent potion, fizzy potion, dark potion, murky potion"])));

/** What mafia has learned a bang potion does ("inebriety", "detection", ...), or "". */
function bangPotionEffect(potion) {
  return get("lastBangPotion".concat(kolmafia.toInt(potion)), "");
}

/** The bang potions on hand that mafia hasn't identified yet. */
function unknownBangPotions() {
  return BANG_POTIONS.filter(potion => kolmafia.availableAmount(potion) > 0 && !bangPotionEffect(potion));
}

var _templateObject$3;

// Familiar choices. Ported from use_familiar(string) in UnderTheSea.ash, but
// pure: it names the familiar and the task's outfit puts it on.

// Newer than eslint-plugin-libram's data, so it is named once, here.
// eslint-disable-next-line libram/verify-constants
var swordOfSWords = $familiar(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["Sword of S Words"])));

var _templateObject$2, _templateObject3$1, _templateObject4$2, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject0$1, _templateObject1$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1, _templateObject19$1;

// What the run still needs. Ported from the "Account states" and Force budget
// helpers in UnderTheSeaGlobals.ash.

function divingHelmet() {
  return $items(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["Mer-kin gladiator mask, Mer-kin scholar mask, crappy Mer-kin mask, aerated diving helmet, Elf Guard SCUBA tank"]))).find(item => have$2(item)) ?? $item.none;
}
function diverPartsComplete() {
  // The craft consumes all three, so an assembled helmet is the done state.
  if (have$2($item(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["rusty diving helmet"]))))) return true;
  return kolmafia.availableAmount($item(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["rusty rivet"])))) >= 8 && kolmafia.availableAmount($item(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["rusty porthole"])))) > 0 && have$2($item(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["rusty broken diving helmet"]))));
}
function diverHuntActive() {
  return !diverPartsComplete() && kolmafia.toSlot(divingHelmet()) !== $slot(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["hat"])));
}
function seaCowNeeded() {
  var leather = kolmafia.availableAmount($item(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["sea leather"])))) + (have$2($item(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["sea chaps"])))) ? 1 : 0) + (have$2($item(_templateObject0$1 || (_templateObject0$1 = _taggedTemplateLiteral(["sea cowboy hat"])))) ? 1 : 0);
  return leather < 2 || kolmafia.availableAmount($item(_templateObject1$1 || (_templateObject1$1 = _taggedTemplateLiteral(["sea cowbell"])))) < 3;
}
function prayerbeadsShort() {
  return !have$2($item(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["Mer-kin prayerbeads"]))), 3);
}

/** Use the Force charges left on the saber today. */
function saberChargesLeft() {
  if (!haveItem($item(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))))) return 0;
  return 5 - get("_saberForceUses");
}

/** Charges left after the two the unholy diver hunt claims. */
function forcesAfterDiver() {
  return saberChargesLeft() - (diverHuntActive() ? 2 : 0);
}
function diverForceReady() {
  return diverHuntActive() && saberChargesLeft() > 0;
}

/** Charges left after the diver's two and the healer's one. */
function forcesAfterHealer() {
  return forcesAfterDiver() - (prayerbeadsShort() ? 1 : 0);
}

/** Charges no planned Force has claimed. */
function saberForcesFree() {
  return forcesAfterHealer() - (seaCowNeeded() ? 1 : 0);
}

/** Enough lassos thrown or in hand for the twenty training throws plus taming. */
function doneWithCowboy() {
  return get("lassoTrainingCount") + 3 * kolmafia.availableAmount($item(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["sea lasso"])))) >= 23;
}
function doneWithSeaCow() {
  return !seaCowNeeded();
}
function cheatsheetsNeeded() {
  return kolmafia.availableAmount($item(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) < 9 && get("merkinVocabularyMastery") === 0;
}

/** Items that lower Yog-Urt's and Shub's stats, one kind each. */
function delevelers() {
  return $items(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell"]))).filter(item => kolmafia.availableAmount(item) > 0).length;
}

/** Healings Yog-Urt's fight needs, by prayerbeads worn (0 to 3). */
var YOG_HEALINGS_NEEDED = [21, 5, 3, 1];

var _templateObject37$2, _templateObject38$2;
function bczSweatReady() {
  return kolmafia.myBasestat($stat(_templateObject37$2 || (_templateObject37$2 = _taggedTemplateLiteral(["submoxie"])))) - 22500 > skillCost($skill(_templateObject38$2 || (_templateObject38$2 = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))));
}

var _templateObject$1, _templateObject4$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1, _templateObject34$1, _templateObject35$1, _templateObject36$1, _templateObject37$1, _templateObject38$1, _templateObject39$1, _templateObject45$1, _templateObject46$1, _templateObject50$1, _templateObject51$1, _templateObject53$1, _templateObject54$1, _templateObject55$1, _templateObject56$1, _templateObject57$1, _templateObject58$1, _templateObject60$1;

// IOTM and game-mechanic helpers. Ported from UnderTheSeaGlobals.ash.

// ─── SMALL CHECKS ─────────────────────────────────────────────────────────────

/**
 * Monsters that give a free fight: whatever mafia's monster data tags FREE
 * (the Kramco's goblins, Black Crayon monsters, trick-or-treat kids, Witchess,
 * Eldritch Tentacles...), plus the time cop, which mafia leaves untagged.
 */
function freeMonster(monster) {
  return monster === $monster(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["time cop"]))) || /(^|\s)FREE(\s|$)/.test(monster.attributes);
}

/** The low roll of one Saucegeyser cast. */
function geyserLowRoll() {
  var flat = kolmafia.numericModifier("Spell Damage") + Math.max(kolmafia.numericModifier("Hot Spell Damage"), kolmafia.numericModifier("Cold Spell Damage"));
  var base = 60 + Math.floor(0.4 * kolmafia.myBuffedstat($stat(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["Mysticality"]))))) + flat;
  return Math.floor(base * (1 + kolmafia.numericModifier("Spell Damage Percent") / 100));
}

// ─── WANTED MONSTERS ──────────────────────────────────────────────────────────

/** The monster the Peridot, Map the Monsters and the Time-Spinner pick in each zone. */
new Map([[$location(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["An Octopus's Garden"]))), 740], [$location(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"]))), 745], [$location(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["The Sleazy Back Alley"]))), 159], [$location(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["The Haunted Pantry"]))), 145], [$location(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["The Overgrown Lot"]))), 1752], [$location(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["The Coral Corral"]))), 775], [$location(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["The Marinara Trench"]))), 762], [$location(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["Anemone Mine"]))), 765], [$location(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["The Dive Bar"]))), 768], [$location(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["Cyberzone 1"]))), 2458], [$location(_templateObject34$1 || (_templateObject34$1 = _taggedTemplateLiteral(["Mer-kin Library"]))), 840], [$location(_templateObject35$1 || (_templateObject35$1 = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))), 773], [$location(_templateObject36$1 || (_templateObject36$1 = _taggedTemplateLiteral(["The Caliginous Abyss"]))), 1373], [$location(_templateObject37$1 || (_templateObject37$1 = _taggedTemplateLiteral(["Mer-kin Elementary School"]))), 838], [$location(_templateObject38$1 || (_templateObject38$1 = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob"]))), 152], [$location(_templateObject39$1 || (_templateObject39$1 = _taggedTemplateLiteral(["Madness Bakery"]))), 1750]]);
function cloakeReady() {
  return haveItem($item(_templateObject45$1 || (_templateObject45$1 = _taggedTemplateLiteral(["vampyric cloake"])))) && get("_vampyreCloakeFormUses") < 10;
}

/** Only the zones ground purely for a drop. */
function cloakeZone(location) {
  return $locations(_templateObject46$1 || (_templateObject46$1 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons, An Octopus's Garden, The Coral Corral, Mer-kin Library, Mer-kin Elementary School"]))).includes(location);
}
function gloveReady() {
  return haveItem($item(_templateObject50$1 || (_templateObject50$1 = _taggedTemplateLiteral(["Powerful Glove"])))) && get("_powerfulGloveBatteryPowerUsed") <= 90;
}
function macroReady() {
  return kolmafia.haveSkill($skill(_templateObject51$1 || (_templateObject51$1 = _taggedTemplateLiteral(["Macrometeorite"])))) && get("_macrometeoriteUses") < 10;
}

// ─── POCKET PROFESSOR ─────────────────────────────────────────────────────────

function professorReady() {
  return have() && currentlyAvailableLectures() > 0;
}

// ─── BANISHES ─────────────────────────────────────────────────────────────────

var BANISH_SOURCES = [[$item(_templateObject53$1 || (_templateObject53$1 = _taggedTemplateLiteral(["spring shoes"]))), $skill(_templateObject54$1 || (_templateObject54$1 = _taggedTemplateLiteral(["Spring Kick"])))], [$item(_templateObject55$1 || (_templateObject55$1 = _taggedTemplateLiteral(["Monodent of the Sea"]))), $skill(_templateObject56$1 || (_templateObject56$1 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])))], [$item(_templateObject57$1 || (_templateObject57$1 = _taggedTemplateLiteral(["Heartstone"]))), $skill(_templateObject58$1 || (_templateObject58$1 = _taggedTemplateLiteral(["Heartstone: %banish"])))]];

/** The monster a banish skill is holding. */
function banished(banisher) {
  return getBanishedMonsters().get(banisher) ?? $monster.none;
}

/** Whether any banish is holding the monster. */
function isBanished(monster) {
  return _toConsumableArray(getBanishedMonsters().values()).includes(monster);
}

/** Whether the banisher was spent on a monster that lives where you are. */
function banishUsedAtYourLocation(banisher) {
  var monster = banished(banisher);
  if (monster === $monster.none) return false;
  return monster.name in kolmafia.getLocationMonsters(kolmafia.myLocation());
}

/** The banish skill of the first worn banish item whose target no longer shows up here. */
function combatBan() {
  var _iterator4 = _createForOfIteratorHelper(BANISH_SOURCES),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = _slicedToArray(_step4.value, 2),
        item = _step4$value[0],
        skill = _step4$value[1];
      if (item === $item(_templateObject60$1 || (_templateObject60$1 = _taggedTemplateLiteral(["Heartstone"]))) && !get("heartstoneBanishUnlocked")) continue;
      var rate = kolmafia.appearanceRates(kolmafia.myLocation())[banished(skill).name] ?? 0;
      if (kolmafia.haveEquipped(item) && rate === 0) {
        kolmafia.print("Banish item being considered ".concat(item, " parsed banished monster is ").concat(banished(skill), " and the calculated appearance rate at current location is ").concat(rate));
        return skill;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return $skill.none;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186, _templateObject187, _templateObject188, _templateObject189, _templateObject190, _templateObject191, _templateObject192, _templateObject193, _templateObject194, _templateObject195, _templateObject196, _templateObject197, _templateObject198, _templateObject199, _templateObject200, _templateObject201, _templateObject202, _templateObject203, _templateObject204, _templateObject205, _templateObject206, _templateObject207, _templateObject208, _templateObject209, _templateObject210, _templateObject211, _templateObject212, _templateObject213, _templateObject214, _templateObject215, _templateObject216, _templateObject217, _templateObject218, _templateObject219, _templateObject220, _templateObject221, _templateObject222, _templateObject223, _templateObject224, _templateObject225, _templateObject226, _templateObject227, _templateObject228, _templateObject229, _templateObject230, _templateObject231, _templateObject232, _templateObject233, _templateObject234, _templateObject235, _templateObject236, _templateObject237, _templateObject238, _templateObject239, _templateObject240, _templateObject241, _templateObject242, _templateObject243, _templateObject244, _templateObject245, _templateObject246, _templateObject247, _templateObject248, _templateObject249, _templateObject250, _templateObject251, _templateObject252, _templateObject253, _templateObject254, _templateObject255, _templateObject256, _templateObject257, _templateObject258, _templateObject259, _templateObject260, _templateObject261, _templateObject262, _templateObject263, _templateObject264, _templateObject265, _templateObject266, _templateObject267, _templateObject268, _templateObject269, _templateObject270, _templateObject271, _templateObject272, _templateObject273, _templateObject274, _templateObject275, _templateObject276, _templateObject277, _templateObject278, _templateObject279, _templateObject280, _templateObject281, _templateObject282, _templateObject283, _templateObject284, _templateObject285, _templateObject286, _templateObject287, _templateObject288, _templateObject289, _templateObject290, _templateObject291, _templateObject292, _templateObject293, _templateObject294, _templateObject295, _templateObject296, _templateObject297, _templateObject298, _templateObject299, _templateObject300, _templateObject301, _templateObject302, _templateObject303, _templateObject304, _templateObject305, _templateObject306, _templateObject307, _templateObject308, _templateObject309, _templateObject310, _templateObject311, _templateObject312, _templateObject313, _templateObject314, _templateObject315, _templateObject316, _templateObject317, _templateObject318, _templateObject319, _templateObject320, _templateObject321, _templateObject322, _templateObject323, _templateObject324, _templateObject325, _templateObject326, _templateObject327, _templateObject328, _templateObject329, _templateObject330, _templateObject331, _templateObject332, _templateObject333, _templateObject334, _templateObject335, _templateObject336, _templateObject337, _templateObject338, _templateObject339;

// The combat consult script. Ported from UnderTheSeaCCS.ash and the fight
// helpers of UnderTheSeaGlobals.ash onto libram macros; the run's CCS is
// "consult sebastian_combat.js".
//
// Each pass plans the rest of the fight from what is known now (the monster,
// the zone, gear, properties) and submits it as one macro. Checks the
// original made on the fight page ("is this skill offered?") are made here
// in JS, where the plan can see the answer (owned, daily uses left, the
// monster), so a spent resource never reaches the macro. The fight simply
// stops running steps once it is over. Anything that swaps the monster (a
// re-roll, a backup, a waffle) ends the pass, and the next pass plans for
// the new monster, as the original re-entered itself through run_combat().
// Yog-Urt and Shub's deleveling react to HP and stats round by round, so
// those submit one round's macro at a time.

/**
 * Stops the run from inside a fight, recording why for halfloop first. A throw
 * here would end only this consult, so this one still aborts.
 */
function stop(why) {
  _set("_lastScriptError", why);
  return kolmafia.abort(why);
}
var saber = $item(_templateObject || (_templateObject = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])));
var curveballOn = monster => get("_curveballMonster") === monster && get("_curveballFightsLeft", 0) > 0;
var someFishCurveball = () => curveballOn($monster(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["some fish"]))));

/** The monster the pass is planning for. */
var foe = $monster.none;

/** A pass's macro, and whether it ends on something that swaps the monster. */
var Plan = /*#__PURE__*/function (_Macro) {
  function Plan() {
    var _this;
    _classCallCheck(this, Plan);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Plan, [].concat(args));
    _defineProperty(_this, "swapped", false);
    return _this;
  }
  _inherits(Plan, _Macro);
  return _createClass(Plan, [{
    key: "swap",
    value: /** Cast and end the pass: the next pass plans for the new monster. */
    function swap(step) {
      this.step(step);
      this.swapped = true;
      return this;
    }

    /**
     * Fish won't call over some fish, so Talk to Some Fish drops out against
     * the fish phylum. The talk itself turns the monster into some fish, so a
     * later talk in the same macro still needs the in-fight check.
     */
  }, {
    key: "trySkill",
    value: function trySkill() {
      for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        skills[_key2] = arguments[_key2];
      }
      for (var _i = 0, _skills = skills; _i < _skills.length; _i++) {
        var skill = _skills[_i];
        if (skill !== talkToFish) _superPropGet(Plan, "trySkill", this)([skill]);else if (foe.phylum !== $phylum(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["fish"])))) this.ifNot($phylum(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["fish"]))), Macro.trySkill(skill));
      }
      return this;
    }
  }]);
}(Macro); // ─── READY CHECKS ─────────────────────────────────────────────────────────────
// KoL aborts a macro once it has run 69 lines without an action, and lines
// stepped over inside a false if count. A try that can't fire still costs
// its if, its cast and its endif, so the long try-lists below leave out
// everything JS can already tell is spent. BALLS keeps only what can change
// in the fight: MP, the monster after a swap, items thrown earlier.
/** Owned, and with a use left today, as far as mafia's properties tell. */
function skillReady(skill) {
  if (!kolmafia.haveSkill(skill)) return false;
  switch (skill) {
    case $skill(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Spring Away"]))):
      return kolmafia.haveEffect($effect(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Everything Looks Green"])))) === 0;
    case $skill(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Bowl a Curveball"]))):
      return kolmafia.itemAmount($item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["cosmic bowling ball"])))) > 0;
    case $skill(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["Creepy Grin"]))):
      return !get("_vmaskBanisherUsed");
    case $skill(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["Throw Latte on Opponent"]))):
      return !get("_latteBanishUsed");
    case $skill(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["Feel Hatred"]))):
      return get("_feelHatredUsed") < 3;
    case $skill(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["Snokebomb"]))):
      return get("_snokebombUsed") < 3;
    case $skill(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Spit jurassic acid"]))):
      return kolmafia.haveEquipped($item(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Jurassic Parka"])))) && get("parkaMode") === "dilophosaur" && kolmafia.haveEffect($effect(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Everything Looks Yellow"])))) === 0;
    case $skill(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Assert your Authority"]))):
      return get("_assertYourAuthorityCast") < 3;
    case $skill(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Club 'Em Back in Time"]))):
      return get("_clubEmTimeUsed") < 5;
    case $skill(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Darts: Aim for the Bullseye"]))):
      return kolmafia.haveEquipped($item(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Everfull Dart Holster"])))) && kolmafia.haveEffect($effect(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Everything Looks Red"])))) === 0;
    case $skill(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["BCZ: Sweat Bullets"]))):
      return bczSweatReady();
    case $skill(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["Chest X-Ray"]))):
      return kolmafia.haveEquipped($item(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) && get("_chestXRayUsed") < 3;
    case $skill(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Shattering Punch"]))):
      return get("_shatteringPunchUsed") < 3;
    case $skill(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Gingerbread Mob Hit"]))):
      return !get("_gingerbreadMobHitUsed");
    case $skill(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["Launch spikolodon spikes"]))):
      return get("_spikolodonSpikeUses") < 5;
    case $skill(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["McHugeLarge Avalanche"]))):
      return get("_mcHugeLargeAvalancheUses") < 3;
    default:
      return true;
  }
}

/**
 * A try-list skill, left out of the macro when it can't fire. The cast keeps
 * its hasskill guard: when JS is wrong, a skill KoL doesn't offer must not
 * end the macro.
 */
function trySkillIfReady(skill) {
  return Macro.externalIf(skillReady(skill), Macro.trySkill(skill));
}

/** A try-list item, left out of the macro when none is in inventory. */
function itemIfHeld(item) {
  return Macro.externalIf(kolmafia.itemAmount(item) > 0, Macro.item(item));
}

// ─── FREE KILLS AND RUNS ──────────────────────────────────────────────────────

/** The day's darts, as many throws as are left. */
function darts() {
  var macro = new Macro();
  if (!kolmafia.haveEquipped($item(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Everfull Dart Holster"]))))) return macro;
  var skill = $skill(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Darts: Throw at %part1"])));
  if (currentPerks().includes("Butt awareness")) {
    var match = /(\d+):butt/.exec(get("_currentDartboard"));
    if (!match) return macro;
    skill = kolmafia.Skill.get(Number(match[1]));
  }
  for (var i = 0; i < get("_dartsLeft"); i++) macro.trySkill(skill);
  return macro;
}

/** Attempt a free kill. With drop, skip the ones that hurt item drops. */
function freeKill(drop) {
  var macro = new Macro();
  if (freeMonster(foe)) return macro;
  var colosseum = kolmafia.myLocation() === $location(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Mer-kin Colosseum"])));
  if (highShiny()) {
    if (!colosseum) {
      for (var i = 0; i < get("_dartsLeft"); i++) {
        macro.step(trySkillIfReady($skill(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Darts: Aim for the Bullseye"])))));
      }
      macro.step(trySkillIfReady($skill(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["Spit jurassic acid"])))));
    }
    return macro;
  }
  if (curveballOn(foe)) return macro;
  var _iterator = _createForOfIteratorHelper($skills(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Spit jurassic acid, Assert your Authority, Club 'Em Back in Time, Darts: Aim for the Bullseye, BCZ: Sweat Bullets, Chest X-Ray, Shattering Punch, Gingerbread Mob Hit"])))),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      var club = skill === $skill(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Club 'Em Back in Time"])));
      if (colosseum && !club) continue;
      if (club && (!colosseum && !lowShiny() || drop)) continue;
      macro.step(trySkillIfReady(skill));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper($items(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["shadow brick, groveling gravel"])))),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      if (item === $item(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["groveling gravel"]))) && drop) continue;
      if (item === $item(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["shadow brick"]))) && get("_shadowBricksUsed") === 13) continue;
      if (colosseum) continue;
      macro.step(itemIfHeld(item));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (saberForcesFree() > 0 && kolmafia.haveEquipped(saber)) {
    macro.if_($skill(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Use the Force"]))), Macro.skill($skill(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["Use the Force"])))));
  }
  return macro;
}

/** Attempt a free run. With banish, banishing runs are allowed. */
function freeRunAny(banish) {
  var macro = new Macro();
  if (curveballOn(foe)) return macro;
  var navel = get("_navelRunaways");
  if (kolmafia.haveEquipped($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Greatest American Pants"])))) && (navel < 3 || navel < 10 && highShiny())) {
    macro.runaway();
  }
  if (kolmafia.myFamiliar() === $familiar(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Pair of Stomping Boots"]))) && couldRunaway()) {
    macro.runaway();
  }
  var banishers = $skills(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["Snokebomb, Bowl a Curveball, Feel Hatred, Throw Latte on Opponent"])));
  var _iterator3 = _createForOfIteratorHelper($skills(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Spring Away, Bowl a Curveball, Creepy Grin, Throw Latte on Opponent, Release the Boots, Feel Hatred, Snokebomb"])))),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var skill = _step3.value;
      if (!banish && banishers.includes(skill)) continue;
      var snokebomb = skill === $skill(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["Snokebomb"])));
      if (banish && snokebomb && banishUsedAtYourLocation($skill(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Snokebomb"]))))) continue;
      if (snokebomb && $locations(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry"]))).includes(kolmafia.myLocation())) {
        return macro;
      }
      if (!skillReady(skill)) continue;
      // Spring Kick banishes first, then Spring Away runs.
      var cast = banish && skill === $skill(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["Spring Away"]))) ? trySkillIfReady($skill(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["Spring Kick"])))).skill(skill) : Macro.skill(skill);
      macro.if_(skill, cast);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var banishItems = $items(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["anchor bomb, stuffed yam stinkbomb, handful of split pea soup"])));
  var _iterator4 = _createForOfIteratorHelper($items(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["glob of Blank-Out, peppermint parasol, anchor bomb, stuffed yam stinkbomb, handful of split pea soup, Mer-kin pinkslip, ink bladder"])))),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;
      if (!banish && banishItems.includes(item)) continue;
      if (item === $item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["peppermint parasol"]))) && get("parasolUsed") >= 3) continue;
      if (item !== $item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Mer-kin pinkslip"])))) macro.step(itemIfHeld(item));
      // A Talk to Some Fish earlier in the macro can turn a mer-kin into some
      // fish, so the phylum is checked in the fight as well.
      else if (foe.phylum === $phylum(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["mer-kin"]))) && kolmafia.itemAmount(item) > 0) {
        macro.if_($phylum(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["mer-kin"]))), Macro.item(item));
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return macro;
}

/** freeRunAny, skipped for free fights. */
function freeRun(banish) {
  return freeMonster(foe) ? new Macro() : freeRunAny(banish);
}
function bczGazeReady() {
  if (get("NCtoC", false)) return false;
  return kolmafia.myBasestat($stat(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["submysticality"])))) - 40000 > skillCost($skill(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["BCZ: Refracted Gaze"]))));
}

// ─── FINISHING ────────────────────────────────────────────────────────────────

/**
 * Ends a live free fight: Saucestorm while affordable, then attacks for as
 * long as HP is safe. A free run source is the last resort only, since
 * spending one on a fight that costs no turn buys nothing. Aborts if the
 * fight is still live.
 */
function finishFreeFight() {
  var saucestorm = $skill(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Saucestorm"])));
  var safeHp = Math.ceil(kolmafia.expectedDamage()) + 1;
  var macro = new Macro();
  if (kolmafia.haveSkill(saucestorm)) {
    macro.while_("hasskill ".concat(saucestorm.id, " && !mpbelow ").concat(kolmafia.mpCost(saucestorm)), Macro.skill(saucestorm));
  }
  // Out of MP is the usual way here, and a free fight dies to the weapon
  // fine; the old three swings left most of them for the free run below.
  macro.while_("!hpbelow ".concat(safeHp, " && !pastround 20"), Macro.attack());
  macro.step(freeRunAny(false));
  for (var i = 0; i < 3; i++) macro.if_("!hpbelow ".concat(safeHp), Macro.runaway());
  return macro.abortWithWarning("Could not finish or escape ".concat(foe, ". Finish the fight by hand."));
}

/** Finish the enemy with Saucegeyser while MP lasts. */
function cleanUp() {
  var macro = new Macro();
  // A shadow rift can be underwater or not, so that stays a fight check.
  macro.externalIf(kolmafia.itemAmount($item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["pulled red taffy"])))) > 0, Macro.if_("underwater", Macro.item($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["pulled red taffy"]))))));
  var yog = $monster(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Yog-Urt, Elder Goddess of Hatred"])));
  var geyser = kolmafia.haveSkill($skill(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["Saucegeyser"])))) && foe !== yog;
  var spell = geyser ? $skill(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["Saucegeyser"]))) : $skill(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Saucestorm"])));
  // A skill line KoL can't pay for does nothing, so a macro of only those
  // ends with no action and the fight sits at the same round.
  var castable = "hasskill ".concat(spell.id, " && !mpbelow ").concat(kolmafia.mpCost(spell));
  var round = geyser ? Macro.if_(castable, Macro.skill(spell)) : trySkillIfReady($skill(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Stuffed Mortar Shell"])))).if_(castable, Macro.skill(spell));
  // One cast, then more while there's MP for them.
  if (kolmafia.haveSkill(spell)) macro.step(round).while_(castable, round);
  // Out of MP with a free fight still live: finish it without a banish.
  if (freeMonster(foe)) macro.step(finishFreeFight());
  // Out of MP otherwise: a swing still spends the round, and the next
  // consult casts again once MP is back.
  return macro.attack();
}

// ─── FIGHT OPENERS ────────────────────────────────────────────────────────────

var force = $skill(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Use the Force"])));

/** The mimic egg, capped at 11 a day and 50 familiar experience. */
function layMimicEgg() {
  if (kolmafia.myFamiliar() !== $familiar(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["Chest Mimic"]))) || get("_mimicEggsObtained") >= 11 || $familiar(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Chest Mimic"]))).experience < 50) {
    return new Macro();
  }
  return Macro.trySkill($skill(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["%fn, lay an egg"]))));
}

/** A Force that ends the fight, where one is planned for this monster. */
function forceOn(target, ready, why) {
  var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Macro();
  if (foe !== target || !ready || !kolmafia.haveEquipped(saber)) return new Macro();
  debug("Use the Force planned -> ".concat(why));
  return Macro.if_("".concat(Macro.makeBALLSPredicate(target), " && ").concat(Macro.makeBALLSPredicate(force)), first.skill(force));
}

/** The planned Forces: the diver (with its insurance egg), the healer, the sea cow, the researcher. */
function forces() {
  var seaCowReady = seaCowNeeded() && forcesAfterHealer() > 0 && !(kolmafia.haveEquipped($item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["pro skateboard"])))) && !get("_epicMcTwistUsed")) && !($location(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["The Coral Corral"]))).turnsSpent <= 1 && kolmafia.availableAmount($item(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["sea leather"])))) === 0 && kolmafia.availableAmount($item(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["sea cowboy hat"])))) === 0);
  var researcherReady = (kolmafia.availableAmount($item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["Mer-kin killscroll"])))) === 0 || kolmafia.availableAmount($item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["Mer-kin healscroll"])))) === 0) && saberForcesFree() > 0;
  return new Macro().step(forceOn($monster(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["unholy diver"]))), diverForceReady(), "unholy diver (rivets ".concat(kolmafia.availableAmount($item(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["rusty rivet"])))), "/8)"), layMimicEgg())).step(forceOn($monster(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Mer-kin healer"]))), prayerbeadsShort() && forcesAfterDiver() > 0, "Mer-kin healer (prayerbeads)")).step(forceOn($monster(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["sea cow"]))), seaCowReady, "sea cow")).step(forceOn($monster(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Mer-kin researcher"]))), researcherReady, "Mer-kin researcher (scrolls)"));
}

/** +50% item drops for the fight, in the zones ground purely for a drop. */
function becomeBat() {
  return Macro.externalIf(cloakeReady() && cloakeZone(kolmafia.myLocation()) && kolmafia.haveEquipped($item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["vampyric cloake"])))), Macro.ifNot($effect(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Bat-Adjacent Form"]))), Macro.trySkill($skill(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Become a Bat"]))))));
}

/** +200% item on the diver itself, three a day, before anything ends the fight. */
function otoscope() {
  if (diverForceReady() && kolmafia.haveEquipped(saber) || get("_otoscopeUsed") >= 3 || !kolmafia.haveEquipped($item(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))) || diverPartsComplete() || foe !== $monster(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["unholy diver"])))) {
    return new Macro();
  }
  return Macro.trySkill($skill(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["Otoscope"]))));
}

/** Stench jelly off any stench monster, for one forced noncombat. */
function extractJelly() {
  var stench = "".concat(foe.attackElement) === "stench" || "".concat(foe.defenseElement) === "stench";
  if (kolmafia.myFamiliar() !== $familiar(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Space Jellyfish"]))) || !stench) return new Macro();
  if (kolmafia.availableAmount($item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["stench jelly"])))) > 0) return new Macro();
  return Macro.trySkill($skill(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Extract Jelly"]))));
}

/** At the wreck, re-roll anything but the diver while its parts are owed. */
function replaceEnemy() {
  if (kolmafia.myLocation() !== $location(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])))) return undefined;
  if (freeMonster(foe) || foe === $monster(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["unholy diver"]))) || diverPartsComplete()) return undefined;
  if (macroReady() && kolmafia.haveSkill($skill(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Macrometeorite"]))))) {
    debug("Macrometeorite: re-rolling the monster");
    return Macro.skill($skill(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["Macrometeorite"]))));
  }
  if (gloveReady() && kolmafia.haveEquipped($item(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["Powerful Glove"]))))) {
    debug("CHEAT CODE: re-rolling the monster");
    return Macro.skill($skill(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["CHEAT CODE: Replace Enemy"]))));
  }
  return undefined;
}

/** Chain a free copy of the diver or the sea cow while their drops are owed. */
function lectureOnRelativity() {
  if (!professorReady() || kolmafia.myFamiliar() !== $familiar(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Pocket Professor"])))) return new Macro();
  // The skill refuses to fire below 2 adventures, even against a free fight.
  if (kolmafia.myAdventures() < 2) return new Macro();
  var wanted = [].concat(_toConsumableArray(diverPartsComplete() ? [] : [$monster(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["unholy diver"])))]), _toConsumableArray(seaCowNeeded() ? [$monster(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["sea cow"])))] : []));
  if (!wanted.includes(foe)) return new Macro();
  return Macro.trySkill($skill(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["lecture on relativity"]))));
}

/** Feel Nostalgic, on a fight being won, for a copied table still owed something. */
function feelNostalgic() {
  if (!kolmafia.haveSkill($skill(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Feel Nostalgic"])))) || get("_feelNostalgicUsed") >= 3) return new Macro();
  // A Force would forfeit the win and the charge with it.
  if (saberForcesFree() > 0 && kolmafia.haveEquipped(saber)) return new Macro();
  var copied = get("lastCopyableMonster");
  var wanted = copied === $monster(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["unholy diver"]))) && !diverPartsComplete() || copied === $monster(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["sea cow"]))) && seaCowNeeded() || copied === $monster(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["Mer-kin monitor"]))) && cheatsheetsNeeded();
  if (!wanted || !copied) return new Macro();
  return Macro.ifNot(copied, Macro.trySkill($skill(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Feel Nostalgic"])))));
}

// ─── YOG-URT AND SHUB ─────────────────────────────────────────────────────────

var DELEVELERS = $items(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["Mer-kin mouthsoap, crayon shavings, table tennis ball, sea lasso, sea cowbell"])));
var YOG_HEALING = $items(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["sea gel, Mer-kin healscroll, waterlogged scroll of healing, soggy used band-aid, New Age healing crystal"])));
var elixir = $item(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["Doc Galaktik's Homeopathic Elixir"])));
var unguent = $item(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["Doc Galaktik's Pungent Unguent"])));

/** _lastCombatActions lists throws as "it<id>;". */
function itemUsedThisCombat(item) {
  return get("_lastCombatActions").includes("it".concat(item.id, ";"));
}

/** None when no deleveler is needed; aborts when one is needed and none is left. */
function yogDeleveler() {
  // Null Afternoon zeroes enemy Attack and Defense; mafia's stats don't show it.
  if (kolmafia.haveEffect($effect(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["Null Afternoon"])))) > 0) return $item.none;
  if (kolmafia.myBasestat($stat(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["Moxie"])))) + 10 > kolmafia.monsterAttack() && kolmafia.myBasestat($stat(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["Muscle"])))) - 30 > kolmafia.monsterDefense()) {
    return $item.none;
  }
  var found = DELEVELERS.find(item => kolmafia.availableAmount(item) > 0 && !itemUsedThisCombat(item));
  if (!found) stop("Yog-Urt needs a deleveler and none is left.");
  return found ?? $item.none;
}

/** None when every full heal has been used. */
function yogHealing() {
  return YOG_HEALING.find(item => kolmafia.availableAmount(item) > 0 && !itemUsedThisCombat(item)) ?? $item.none;
}
function yogDocPair() {
  return [elixir, unguent].every(item => kolmafia.availableAmount(item) > 0 && !itemUsedThisCombat(item));
}

/** One round under More Like a Suckrament. Nothing thrown may damage Yog-Urt. */
function yogSuckramentRound(needHeal) {
  var heal = yogHealing();
  if (needHeal && heal !== $item.none) {
    var deleveler = yogDeleveler();
    return deleveler !== $item.none ? Macro.item([deleveler, heal]) : Macro.item(heal);
  }
  if (!needHeal && yogDeleveler() !== $item.none) return Macro.item(yogDeleveler());
  if (yogDocPair()) return Macro.item([elixir, unguent]);
  if (heal !== $item.none) return Macro.item(heal);
  return stop("Yog-Urt: nothing harmless left to throw under More Like a Suckrament. Finish the fight by hand.");
}

/** Heal through More Like a Suckrament without touching Yog-Urt, then kill her. One round per macro. */
function yogUrtFight() {
  var beads = Math.min(kolmafia.equippedAmount($item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))), 3);
  var stuck = 0;
  while (kolmafia.currentRound() > 0 && kolmafia.haveEffect($effect(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["More Like a Suckrament"])))) > 0) {
    if (kolmafia.currentRound() > 12) {
      stop("Yog-Urt: More Like a Suckrament is still up past round 12. Finish the fight by hand.");
    }
    if (stuck >= 3) stop("Yog-Urt: throws are not advancing the round. Finish the fight by hand.");
    var round = kolmafia.currentRound();
    // She hits first each round; past the counted heals the action only fills the round.
    yogSuckramentRound(round <= YOG_HEALINGS_NEEDED[beads]).submit();
    stuck = kolmafia.currentRound() === round ? stuck + 1 : 0;
  }
  var mortared = false;
  var mortar = $skill(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["Stuffed Mortar Shell"])));
  var saucestorm = $skill(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["Saucestorm"])));
  for (var guard = 0; kolmafia.currentRound() > 0 && guard < 40; guard++) {
    // Her own hits run up to about 11 once the effect is gone.
    var _round = void 0;
    if (kolmafia.myHp() < 15 && yogDocPair()) {
      _round = Macro.item([elixir, unguent]);
    } else if (kolmafia.myHp() < 15 && yogHealing() !== $item.none) {
      _round = Macro.item(yogHealing());
    } else if (!mortared && kolmafia.haveSkill(mortar) && kolmafia.myMp() >= kolmafia.mpCost(mortar)) {
      // Its damage lands next round; a recast while it is pending does nothing.
      _round = Macro.skill(mortar);
      mortared = true;
    } else if (kolmafia.haveSkill(saucestorm) && kolmafia.myMp() >= kolmafia.mpCost(saucestorm)) {
      _round = Macro.skill(saucestorm);
    } else {
      _round = Macro.attack();
    }
    _round.submit();
  }
}

/** Every ordered pair of delevelers, for Shub's double throws. */
var DELEVELER_PAIRS = DELEVELERS.flatMap(a => DELEVELERS.map(b => [a, b]));

/** Shub-Jigguwatt: delevel with pairs of throws until her stats are in reach, then swing. */
function shubFight() {
  var lasso = $item(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["sea lasso"])));
  var statsTooHigh = () => kolmafia.myBasestat($stat(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["Moxie"])))) + 10 < kolmafia.monsterAttack() || kolmafia.myBasestat($stat(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["Muscle"])))) - 30 < kolmafia.monsterDefense();
  if (kolmafia.haveEffect($effect(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["Null Afternoon"])))) === 0) {
    if (kolmafia.availableAmount($item(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["crayon shavings"])))) >= 8) {
      var shavings = [$item(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["crayon shavings"]))), $item(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["crayon shavings"])))];
      Macro.item(shavings, shavings, shavings, shavings).submit();
    } else {
      while (kolmafia.currentRound() > 0 && delevelers() > 0 && statsTooHigh()) {
        var pair = DELEVELER_PAIRS.find(_ref => {
          var _ref2 = _slicedToArray(_ref, 2),
            a = _ref2[0],
            b = _ref2[1];
          return kolmafia.availableAmount(a) > 0 && kolmafia.availableAmount(b) > 0 && !(a === b && (kolmafia.availableAmount(a) < 2 || b === lasso)) && !((a === lasso || b === lasso) && itemUsedThisCombat(lasso));
        });
        if (pair) Macro.item(pair).submit();
        var lassoSpent = kolmafia.availableAmount(lasso) > 0 && itemUsedThisCombat(lasso);
        if (delevelers() === 1 || lassoSpent && delevelers() === 2) {
          var singles = $items(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["Mer-kin mouthsoap, crayon shavings, table tennis ball, sea cowbell"]))).filter(item => kolmafia.availableAmount(item) === 1);
          if (singles.length > 0) Macro.item.apply(Macro, _toConsumableArray(singles)).submit();
          if (delevelers() === 1 && kolmafia.availableAmount(lasso) > 0) break;
        }
        if (!pair) break;
      }
    }
  }
  if (kolmafia.currentRound() > 0) Macro.while_("!pastround 30", Macro.attack()).submit();
}

// ─── ZONES ────────────────────────────────────────────────────────────────────

// The Sword of S Words skill, newer than eslint-plugin-libram's data.
// eslint-disable-next-line libram/verify-constants
var killALot = $skill(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["%fn, kill a lot of these guys"])));
var talkToFish = $skill(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Sea *dent: Talk to Some Fish"])));
var lightningBolt = $skill(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"])));
var gaze = $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["BCZ: Refracted Gaze"])));
var mcTwist = $skill(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["Do an epic McTwist!"])));
var backUp = $skill(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["Back-Up to your Last Enemy"])));
var screech = $skill(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["%fn, Release the Patriotic Screech!"])));
var recallHabitats = $skill(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["Recall Facts: Monster Habitats"])));
var clubBattlefield = $skill(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["Club 'Em Across the Battlefield"])));
var sniffs = $skills(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["Transcendent Olfaction, Gallapagosian Mating Call, McHugeLarge Slash"])));
var someFish = $monster(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["some fish"])));

/** The scroll hints the dreadscroll wants, thrown at mer-kin. */
function throwScrollHints() {
  var heal = $item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["Mer-kin healscroll"])));
  var kill = $item(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["Mer-kin killscroll"])));
  // The while keeps its item check: each throw spends one.
  var throwAll = scroll => Macro.while_("".concat(Macro.makeBALLSPredicate(scroll), " && !pastround 20"), Macro.item(scroll));
  // These come before anything that could swap the monster, so foe is the one fought.
  return new Macro().externalIf(get("dreadScroll2") === 0 && kolmafia.itemAmount(heal) > 0, throwAll(heal)).externalIf(get("dreadScroll5") === 0 && foe.phylum === $phylum(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["mer-kin"]))) && kolmafia.itemAmount(kill) > 0, throwAll(kill));
}
function knobAlleyPantry(plan) {
  if (someFishCurveball()) plan.trySkill(talkToFish).step(cleanUp());
  if (!freeMonster(foe)) {
    plan.step(freeRun(false));
    if (kolmafia.haveEquipped($item(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["Greatest American Pants"])))) || kolmafia.haveEquipped($item(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["navel ring of navel gazing"]))))) {
      plan.runaway();
    }
  }
  plan.trySkill(talkToFish, $skill(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["Prepare to reanimate your Foe"])))).step(darts()).step(cleanUp());
}
function madnessBakery(plan) {
  if (!kolmafia.haveSkill(screech)) stop("Need patriotic eagle");
  plan.trySkill(screech, talkToFish).step(freeKill(false)).step(cleanUp());
}
function shadowRift(plan) {
  if (kolmafia.myPrimestat() === $stat(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["Moxie"])))) plan.step("pickpocket");
  // The wave makes the rift underwater, but a rift turn can turn up a monster
  // from a dry zone, where the lasso does nothing and the round never ends.
  plan.externalIf(get("_seadentWaveUsed") && get("lassoTrainingCount") < 20, Macro.if_("underwater", Macro.tryItem($item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["sea lasso"]))))));
  if (foe === $monster(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["shadow slab"])))) {
    plan.tryItem($item(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["Septapus summoning charm"]))));
    plan.trySkill($skill(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["Swoop like a Bat"]))), $skill(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["Perpetrate Mild Evil"]))));
    // Douse Foe exists only while the Liquidizer is worn.
    if (kolmafia.haveEquipped($item(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["Flash Liquidizer Ultra Dousing Accessory"])))) && !get("_douseFoeSuccess")) {
      for (var i = get("_douseFoeUses"); i < 3; i++) {
        plan.if_("!pastround 24", Macro.trySkill($skill(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["Douse Foe"])))));
      }
    }
  }
  // Talk to the fish once the pickpocket is spent, or while scales are short.
  if (kolmafia.myPrimestat() !== $stat(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["Moxie"]))) || kolmafia.availableAmount($item(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["pristine fish scale"])))) < 6) {
    plan.trySkill(talkToFish);
  }
  plan.step(darts()).step(cleanUp());
}
function octopusGarden(plan) {
  var eagle = $familiar(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["Patriotic Eagle"])));
  plan.externalIf(kolmafia.myFamiliar() === eagle && !highShiny(), Macro.ifNot($effect(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["Citizen of a Zone"]))), Macro.trySkill($skill(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["%fn, let's pledge allegiance to a Zone"]))))));
  if (foe === $monster(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["Neptune flytrap"])))) {
    plan.externalIf(kolmafia.myFamiliar() === eagle, Macro.ifNot($effect(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["Everything Looks Red, White and Blue"]))), Macro.trySkill($skill(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["%fn, fire a Red, White and Blue Blast"]))))));
    if (kolmafia.myFamiliar() === swordOfSWords) plan.trySkill(killALot);
    plan.step(darts());
    if ((kolmafia.haveEquipped($item(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["McHugeLarge left pole"])))) || kolmafia.availableAmount($item(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["McHugeLarge left pole"])))) === 0) && !get("trackedMonsters").includes("Neptune flytrap")) {
      plan.trySkill.apply(plan, _toConsumableArray(sniffs));
    }
    plan.step(freeKill(true)).step(cleanUp());
  } else if (!freeMonster(foe)) {
    if (kolmafia.haveEquipped($item(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["spring shoes"])))) && !banishUsedAtYourLocation($skill(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["Spring Kick"])))) && highShiny()) {
      plan.trySkill($skill(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["Spring Kick"]))), talkToFish);
    } else {
      plan.step(freeRun(true));
    }
  }
  plan.step(cleanUp());
}
function wreck(plan) {
  var diver = $monster(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["unholy diver"])));
  if (foe !== diver && !freeMonster(foe)) {
    plan.step(freeRun(true));
    plan.if_($monster(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["Mer-kin scavenger"]))), Macro.trySkill(kolmafia.haveEquipped($item(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["spring shoes"])))) ? $skill(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["Spring Kick"]))) : lightningBolt).ifNot($phylum(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["fish"]))), Macro.trySkill(talkToFish)));
    plan.if_($monster(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["mine crab"]))), Macro.trySkill($skill(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["Heartstone: %banish"]))), lightningBolt));
  }
  if (foe === diver) {
    if (get("beGregariousCharges") > 0 && get("beGregariousMonster") !== $monster(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["unholy diver"])))) {
      plan.trySkill($skill(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["Be Gregarious"]))));
    }
    if (kolmafia.myFamiliar() === $familiar(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["Melodramedary"])))) plan.trySkill($skill(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["%fn, spit on them!"]))));
    if (kolmafia.haveEquipped($item(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["pro skateboard"]))))) plan.trySkill(mcTwist);
    if (kolmafia.haveEquipped(saber)) plan.trySkill(force);
  }
  plan.step(feelNostalgic()).step(darts()).step(freeKill(true)).step(cleanUp());
}
function pearlZone(plan) {
  // Lasso training only counts with both trainer pieces worn.
  if (kolmafia.haveEquipped($item(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["sea cowboy hat"])))) && kolmafia.haveEquipped($item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["sea chaps"]))))) {
    plan.tryItem($item(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["sea lasso"]))));
  }
  var miner = $monster(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["Mer-kin miner"])));
  var squid = $monster(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["giant squid"])));
  var tippler = $monster(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["Mer-kin tippler"])));
  plan.if_(miner, Macro.step("pickpocket").trySkill($skill(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["Swoop like a Bat"])))));
  // Sniffing feeds the step-4 pearl hunt, which is over once the corral has started.
  var tracked = get("trackedMonsters");
  if ((foe === squid && !tracked.includes("giant squid") || foe === tippler && !tracked.includes("Mer-kin tippler")) && $location(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["The Coral Corral"]))).turnsSpent === 0) {
    plan.trySkill.apply(plan, _toConsumableArray(sniffs));
  }
  if (freeMonster(foe)) plan.trySkill(gaze).step(cleanUp());
  plan.externalIf(highShiny(), Macro.if_($monster(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["Anemone combatant"]))), Macro.trySkill(lightningBolt)));
  if (someFishCurveball()) plan.trySkill(talkToFish).step(cleanUp());
  if ((foe !== squid || kolmafia.availableAmount($item(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["comb jelly"])))) > 0) && foe !== tippler && (foe !== miner || kolmafia.availableAmount($item(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["Mer-kin digpick"])))) > 0)) {
    if (haveItem($item(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["cosmic bowling ball"]))))) plan.step(freeRun(true));
    plan.trySkill(talkToFish).step(darts()).step(freeRun(true)).step(cleanUp());
  } else {
    plan.step(freeKill(true));
  }
  plan.step(cleanUp());
}
function outpost(plan) {
  if (kolmafia.myPath().id === 0 && get("lassoTrainingCount") < 20) plan.tryItem($item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["sea lasso"]))));
  if (foe === $monster(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["time cop"])))) {
    plan.step(darts()).step(cleanUp());
    return;
  }
  var fightsLeft = get("_monsterHabitatsFightsLeft");
  var recalled = get("_monsterHabitatsRecalled");
  if (foe === $monster(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["Black Crayon Golem"])))) {
    if (fightsLeft === 0 && recalled === 2) {
      plan.ifNot($effect(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["Everything Looks Purple"]))), Macro.trySkill($skill(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral(["Blow the Purple Candle!"])))));
    } else if (fightsLeft === 0 && recalled < 2) {
      plan.trySkill(recallHabitats);
    }
    if (fightsLeft === 0 && recalled >= 2 && kolmafia.myFamiliar() === $familiar(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral(["Patriotic Eagle"])))) {
      plan.trySkill(screech);
    }
    plan.step(darts()).step(cleanUp());
    return;
  }
  var scaleHunt = kolmafia.myFamiliar() !== swordOfSWords && (highShiny() || !haveItem($item(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral(["closed-circuit pay phone"])))) || lowShiny()) && kolmafia.availableAmount($item(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral(["pristine fish scale"])))) < 6 && !freeMonster(foe);
  var healer = $monster(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral(["Mer-kin healer"])));
  var thief = foe === $monster(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral(["Mer-kin burglar"]))) || foe === $monster(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral(["Mer-kin raider"])));
  var backupReady = get("_backUpUses") < 7 && kolmafia.haveEquipped($item(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral(["backup camera"]))));
  if ($location(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))).turnsSpent < 24 || get("merkinLockkeyMonster") !== null) {
    // Back up to the Black Crayon Golem if available; the next pass fights it.
    // Never over a fight that is already free, or over the lockkey monster
    // whose drop the hunt is waiting for: neither swap saves a turn.
    if (!freeMonster(foe) && foe !== get("merkinLockkeyMonster") && fightsLeft === 0 && recalled >= 2 && backupReady && get("lastCopyableMonster") === $monster(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral(["Black Crayon Golem"])))) {
      plan.swap(Macro.skill(backUp));
      return;
    }
    if (scaleHunt) plan.trySkill(talkToFish).step(freeKill(true)).step(cleanUp());
    if (foe === healer && kolmafia.availableAmount($item(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) < 2) {
      if (kolmafia.haveEquipped($item(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral(["Baseball Diamond"])))) || someFishCurveball()) plan.trySkill(talkToFish);
      plan.step(freeKill(true));
      if (backupReady) {
        plan.swap(Macro.skill(backUp));
        return;
      }
      plan.step(freeRun(false)).step(cleanUp());
    } else if (thief) {
      if ((highShiny() || !haveItem($item(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral(["closed-circuit pay phone"]))))) && kolmafia.myFamiliar() === swordOfSWords && !banishUsedAtYourLocation($skill(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral(["Sea *dent: Throw a Lightning Bolt"]))))) {
        plan.trySkill(lightningBolt);
      }
      plan.step(freeRun(true));
    }
    plan.step(freeKill(false)).step(cleanUp());
  } else {
    if (scaleHunt) plan.trySkill(talkToFish).step(freeKill(true)).step(cleanUp());
    if (thief) plan.step(freeRun(true));
    plan.step(freeKill(foe === healer && kolmafia.availableAmount($item(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) < 2)).step(cleanUp());
  }
}
function cyberzone(plan) {
  if ($monsters(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral(["eye in the darkness, slithering thing"]))).includes(foe)) {
    plan.trySkillRepeat($skill(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral(["Throw Cyber Rock"]))));
  } else {
    plan.trySkill(lightningBolt);
  }
}
function banishOrRun() {
  var ban = combatBan();
  return ban !== $skill.none ? Macro.trySkill(ban) : freeRun(true);
}
function corral(plan) {
  var seahorse = $monster(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral(["wild seahorse"])));
  var rustler = $monster(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral(["Mer-kin rustler"])));
  var cow = $monster(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral(["sea cow"])));
  var cowboy = $monster(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral(["sea cowboy"])));
  // A free wanderer (the Kramco's goblins burn delay here) is just killed:
  // no run, banish, waffle, backup, McTwist or club charge spent on it.
  if (freeMonster(foe)) {
    plan.step(cleanUp());
    return;
  }
  var readyToTame = kolmafia.availableAmount($item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral(["sea cowbell"])))) >= 3 && kolmafia.availableAmount($item(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral(["sea lasso"])))) >= 1 && get("lassoTrainingCount") === 20;
  if (foe === seahorse && readyToTame) {
    plan.item([$item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral(["sea cowbell"]))), $item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral(["sea cowbell"])))], [$item(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral(["sea cowbell"]))), $item(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral(["sea lasso"])))]).abortWithWarning("For some reason seahorse wasn't tamed, check that out");
    return;
  }
  if (highShiny() && get("swordOfSWordsMonster") !== $monster(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral(["sea cow"]))) && kolmafia.myFamiliar() === swordOfSWords && foe === cow) {
    plan.trySkill(killALot).step(cleanUp());
  }
  if (!get("_epicMcTwistUsed") && kolmafia.haveEquipped($item(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral(["pro skateboard"]))))) {
    if (kolmafia.haveEquipped($item(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral(["backup camera"]))))) {
      plan.if_(rustler, Macro.trySkill($skill(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral(["Spring Kick"])))));
      plan.trySkill(backUp, gaze, mcTwist);
    } else if (foe.phylum !== $phylum(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral(["fish"])))) {
      plan.if_(rustler, Macro.trySkill($skill(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral(["Spring Kick"])))));
      plan.trySkill(talkToFish, gaze, mcTwist).tryItem($item(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral(["pulled yellow taffy"]))));
    } else if (foe === seahorse) {
      plan.runaway();
    } else {
      plan.if_($item(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral(["software glitch"]))), Macro.item($item(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral(["software glitch"])))).ifNot($monster(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral(["bugged bugbear"]))), Macro.abortWithWarning("Software glitch failed")).trySkill(gaze, mcTwist).tryItem($item(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral(["pulled yellow taffy"])))));
    }
    plan.step(freeKill(true)).step(cleanUp());
  } else if (readyToTame) {
    plan.if_($phylum(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral(["plant"]))), Macro.trySkill($skill(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral(["Tear Away your Pants!"])))));
    if (get("seahorseName") === "") {
      var cowGone = isBanished($monster(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral(["sea cow"]))));
      var cowboyGone = isBanished($monster(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral(["sea cowboy"]))));
      var rustlerGone = isBanished($monster(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral(["Mer-kin rustler"]))));
      // Fewer than two of the three banished: run from or banish this one.
      if (!cowGone && !cowboyGone || !rustlerGone && !cowboyGone || !cowGone && !rustlerGone) {
        if (foe === rustler && someFishCurveball()) {
          plan.trySkill(talkToFish).if_(someFish, cleanUp());
        }
        plan.step(freeRun(true));
        if (foe === rustler) {
          if (kolmafia.haveSkill($skill(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral(["Heartstone: %banish"])))) && get("heartstoneBanishUnlocked")) {
            plan.trySkill($skill(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral(["Heartstone: %banish"]))));
          }
        } else if (foe === cowboy || foe === cow) {
          plan.trySkill(lightningBolt);
        }
      }
    }
    if (kolmafia.availableAmount($item(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral(["waffle"])))) > 0 && !get("_lastCombatActions").includes("it11311")) {
      // The waffle swaps the monster; the next pass plans for the new one.
      plan.swap(Macro.item($item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral(["waffle"])))));
      return;
    }
    if (someFishCurveball()) plan.trySkill(talkToFish).if_(someFish, cleanUp());
    plan.step(freeRun(false)).step(freeKill(false)).step(cleanUp());
  } else {
    if (foe === seahorse) plan.runaway();else if (foe === rustler) plan.step(banishOrRun());else if (foe === cow && doneWithSeaCow()) plan.step(banishOrRun());else if (foe === cowboy && doneWithCowboy()) plan.step(banishOrRun());
    // The fight is being killed from here on: the one safe moment for a
    // Feel Nostalgic charge on the cow's table.
    plan.step(feelNostalgic());
    // Club 'Em Across the Battlefield does nothing once a noncombat has
    // already been forced into a combat.
    if (kolmafia.haveEquipped($item(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral(["legendary seal-clubbing club"])))) && get("_clubEmBattlefieldUsed") < 5 && !get("NCtoC", false)) {
      plan.trySkill(clubBattlefield);
    }
    plan.step(cleanUp());
  }
}
function abyss(plan) {
  var _Macro$trySkill;
  if ((highShiny() || !haveItem($item(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral(["closed-circuit pay phone"]))))) && kolmafia.availableAmount($item(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral(["sea lasso"])))) > 1 && get("lassoTrainingCount") < 20 && kolmafia.haveEquipped($item(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral(["sea cowboy hat"]))))) {
    plan.tryItem($item(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral(["sea lasso"]))));
  }
  if (foe === $monster(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral(["Peanut"]))) && get("lastColosseumRoundWon") < 15) {
    var waffles = kolmafia.availableAmount($item(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral(["waffle"]))));
    if (haveItem($item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral(["august scepter"])))) && haveItem($item(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral(["2002 Mr. Store Catalog"])))) && kolmafia.haveSkill($skill(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral(["Just the Facts"])))) && kolmafia.haveFamiliar($familiar(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral(["Patriotic Eagle"])))) && (waffles > 1 || waffles === 1 && get("seahorseName") !== "")) {
      plan.swap(Macro.item($item(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral(["waffle"])))));
    } else {
      plan.step(cleanUp());
    }
    return;
  }
  if (freeMonster(foe)) {
    plan.step(cleanUp());
    return;
  }
  var habitats = $monsters(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral(["slithering thing, eye in the darkness"])));
  plan.externalIf(get("spookyVHSTapeMonster") === null && get("momSeaMonkeeProgress") < 36, Macro.if_([].concat(_toConsumableArray(habitats), [$monster(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral(["school of many"])))]), Macro.tryItem($item(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral(["Spooky VHS Tape"]))))));
  plan.externalIf(get("_monsterHabitatsRecalled") !== 3 && get("_monsterHabitatsFightsLeft") === 0 && !highShiny() && (haveItem($item(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral(["server room key"])))) || $location(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral(["The Mer-Kin Outpost"]))).turnsSpent < 29), Macro.if_(habitats, Macro.trySkill(recallHabitats)));
  plan.if_($monster(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral(["school of many"]))), (_Macro$trySkill = Macro.trySkill(lightningBolt)).trySkill.apply(_Macro$trySkill, _toConsumableArray(Array(4).fill($skill(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral(["Garbage Nova"])))))));
  plan.step(freeKill(false)).step(cleanUp());
}
function school(plan) {
  var club = kolmafia.haveEquipped($item(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral(["legendary seal-clubbing club"])))) && get("_clubEmBattlefieldUsed") < 5;
  var forced = get("NCtoC", false);
  if (freeMonster(foe)) {
    if (!forced) plan.trySkill(gaze);
    if (club && !forced) plan.trySkill(clubBattlefield);else plan.step(cleanUp());
  } else if ($monsters(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral(["Mer-kin teacher, Mer-kin punisher, Mer-kin monitor"]))).includes(foe)) {
    if (kolmafia.haveEquipped($item(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral(["spring shoes"])))) && !banishUsedAtYourLocation($skill(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral(["Spring Kick"])))) && (foe === $monster(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral(["Mer-kin teacher"]))) && kolmafia.availableAmount($item(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral(["Mer-kin bunwig"])))) > 0 || foe === $monster(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral(["Mer-kin punisher"]))) && kolmafia.availableAmount($item(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral(["Mer-kin mouthsoap"])))) > 0)) {
      plan.trySkill($skill(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral(["Spring Kick"]))));
    }
    // Backing up throws this monster away, so only when its drop is no
    // longer wanted: the same bunwig and mouthsoap test as the Spring Kick,
    // and the monitor while cheatsheets are owed.
    var wanted = foe === $monster(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral(["Mer-kin teacher"]))) && kolmafia.availableAmount($item(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral(["Mer-kin bunwig"])))) === 0 || foe === $monster(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral(["Mer-kin punisher"]))) && kolmafia.availableAmount($item(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral(["Mer-kin mouthsoap"])))) === 0 || foe === $monster(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral(["Mer-kin monitor"]))) && cheatsheetsNeeded();
    if (!wanted && freeMonster(get("lastCopyableMonster") ?? $monster.none) && get("_backUpUses") < 11 && kolmafia.haveEquipped($item(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral(["backup camera"]))))) {
      // The original followed the backup with the gaze and the club against
      // the copy; the next pass plans the copy's fight instead.
      plan.swap(Macro.skill(backUp));
      return;
    }
  }
  // The kill path from here on: the safe spot for a Feel Nostalgic charge
  // on the monitor's cheatsheet table.
  plan.step(feelNostalgic());
  if (bczGazeReady() && !forced) {
    plan.trySkill(talkToFish);
    if (kolmafia.availableAmount($item(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral(["Mer-kin cheatsheet"])))) < 10) plan.trySkill(gaze);
  }
  plan.step(freeKill(true)).step(cleanUp());
}
function library(plan) {
  if (freeMonster(foe)) {
    if (bczGazeReady()) plan.trySkill(gaze);
    plan.step(cleanUp());
  }
  var short = item => kolmafia.availableAmount(item) === 0;
  if (get("merkinVocabularyMastery") >= 90) {
    plan.step(throwScrollHints());
    if (freeMonster(foe)) {
      if (bczGazeReady()) plan.trySkill(gaze);
    } else {
      if (short($item(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral(["Mer-kin knucklebone"]))))) {
        if (bczGazeReady()) plan.trySkill(talkToFish, gaze);
      } else if (foe === $monster(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral(["Mer-kin alphabetizer"])))) {
        plan.trySkill($skill(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral(["Spring Kick"]))));
      } else if (foe === $monster(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral(["Mer-kin drifter"])))) {
        plan.step(freeRun(true));
      }
      plan.step(freeKill(true)).step(cleanUp());
    }
  } else if (
  // Not over a fight that is already free: that swap saves no turn.
  !freeMonster(foe) && freeMonster(get("lastCopyableMonster") ?? $monster.none) && get("_backUpUses") < 11 && kolmafia.haveEquipped($item(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral(["backup camera"]))))) {
    plan.swap(Macro.skill(backUp));
    return;
  } else {
    if (bczGazeReady() && $items(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral(["Mer-kin killscroll, Mer-kin healscroll, Mer-kin worktea, Mer-kin knucklebone"]))).some(short)) {
      plan.trySkill(talkToFish, gaze);
    }
    plan.step(freeKill(true)).step(cleanUp());
  }
  plan.step(cleanUp());
}
function gymnasium(plan) {
  plan.step(throwScrollHints());
  // Only the skate park war's gym turn wants the next adventure forced to a
  // noncombat; every other gym task is there for the fight.
  if (get("_sebGymForce", false)) {
    plan.step(trySkillIfReady($skill(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral(["Launch spikolodon spikes"]))))).step(trySkillIfReady($skill(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral(["McHugeLarge Avalanche"])))));
  }
  // While a scroll hint is owed the fight is fought out, not run from.
  var hintOwed = get("dreadScroll2") === 0 || get("dreadScroll5") === 0;
  if (freeMonster(foe)) {
    if (bczGazeReady()) plan.trySkill(gaze);
  } else {
    if (!hintOwed) plan.step(freeRun(true));
    plan.step(freeKill(false));
  }
  plan.step(cleanUp());
}

/**
 * Colosseum rounds need wins, so this drains free kills and never Uses the
 * Force. A champion's specials take hold from round 2, so one Saucegeyser
 * must kill it; when it can't, leave rather than lose.
 */
function colosseum(plan) {
  if (foe.boss && kolmafia.haveSkill($skill(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral(["Saucegeyser"]))))) {
    // championCheck() reads _sebChampionRanEst to stop a rerun before the turn.
    // The round count lets it tell a cast that killed from one that didn't.
    var ranEst = "".concat(geyserLowRoll(), ":").concat(get("lastColosseumRoundWon"));
    if (geyserLowRoll() < kolmafia.monsterHp()) {
      _set("_sebChampionRanEst", ranEst);
      var why = "SEB: ".concat(foe, " has ").concat(kolmafia.monsterHp(), " HP and one Saucegeyser is estimated at ") + "".concat(geyserLowRoll(), ". Raise Mysticality or spell damage, or fight it by hand, then rerun.");
      freeRunAny(false).runaway().submit();
      if (kolmafia.currentRound() > 0) why += " The fight is still in progress: finish it by hand.";
      kolmafia.print(why, "red");
      stop(why);
    }
    // Recorded before the cast: a kill ends the fight and the run moves on.
    _set("_sebChampionRanEst", ranEst);
    plan.skill($skill(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral(["Saucegeyser"]))));
  } else {
    plan.step(freeKill(false));
  }
  if (get("lastColosseumRoundWon") < 15) plan.step(cleanUp());
}

/** The old single-door temple, for aftercore bosses. */
function temple(plan) {
  if (foe === $monster(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral(["Yog-Urt, Elder Goddess of Hatred"])))) {
    if (kolmafia.myMaxhp() > 311) {
      stop("Too much HP to beat Yogurt (need < 312 after debuff) — check what's granting HP");
    }
    var opener = kolmafia.availableAmount($item(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral(["crayon shavings"])))) >= 9 ? $item(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral(["crayon shavings"]))) : $item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral(["table tennis ball"])));
    plan.item([opener, $item(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral(["Mer-kin healscroll"])))], [$item(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral(["Mer-kin mouthsoap"]))), $item(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral(["waterlogged scroll of healing"])))], $item(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral(["sea gel"]))));
    if (kolmafia.equippedAmount($item(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) < 3) plan.item($item(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral(["New Age healing crystal"]))));
    if (kolmafia.equippedAmount($item(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral(["Mer-kin prayerbeads"])))) < 2) plan.item($item(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral(["soggy used band-aid"]))));
    plan.step(cleanUp()).attack().attack().attack();
  }
  if (foe === $monster(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral(["Shub-Jigguwatt, Elder God of Violence"])))) {
    var shavings = [$item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral(["crayon shavings"]))), $item(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral(["crayon shavings"])))];
    plan.item(shavings, shavings, shavings, shavings).while_("!pastround 30", Macro.attack());
  }
  if (foe === $monster(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral(["Dad Sea Monkee"])))) {
    kolmafia.cliExecute("dad");
    stop("execute spells in the above order, can use shrap instead of toynado and volcanometeor instead of awesome balls of fire");
  }
}
function byLocation(plan) {
  var location = kolmafia.myLocation();
  if (location === $location(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral(["The Skeleton Store"])))) {
    plan.step(cleanUp());
  } else if ($locations(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob, The Sleazy Back Alley, The Haunted Pantry"]))).includes(location)) {
    knobAlleyPantry(plan);
  } else if (location === $location(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral(["Madness Bakery"])))) {
    madnessBakery(plan);
  } else if (location === $location(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral(["Shadow Rift (The Misspelled Cemetary)"])))) {
    shadowRift(plan);
  } else if (location === $location(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral(["An Octopus's Garden"])))) {
    octopusGarden(plan);
  } else if (location === $location(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])))) {
    wreck(plan);
  } else if ($locations(_templateObject301 || (_templateObject301 = _taggedTemplateLiteral(["The Marinara Trench, The Dive Bar, Anemone Mine"]))).includes(location)) {
    pearlZone(plan);
  } else if (location === $location(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral(["The Mer-Kin Outpost"])))) {
    outpost(plan);
  } else if (location === $location(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral(["The Skate Park"])))) {
    plan.attack().attack().step(cleanUp());
  } else if (location === $location(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral(["Cyberzone 1"])))) {
    cyberzone(plan);
  } else if (location === $location(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral(["The Coral Corral"])))) {
    corral(plan);
  } else if (location === $location(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral(["The Caliginous Abyss"])))) {
    abyss(plan);
  } else if (location === $location(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral(["Mer-kin Elementary School"])))) {
    school(plan);
  } else if (location === $location(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral(["Mer-kin Library"])))) {
    library(plan);
  } else if (location === $location(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral(["Mer-kin Gymnasium"])))) {
    gymnasium(plan);
  } else if (location === $location(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral(["Mer-kin Colosseum"])))) {
    colosseum(plan);
  } else if (location === $location(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral(["Mer-kin Temple (Center Door)"])))) {
    // Raise Backup Dancer is a Pastamancer skill and only a damage boost here.
    plan.trySkill($skill(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral(["Raise Backup Dancer"]))), $skill(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral(["Raise Backup Dancer"])))).step(cleanUp());
  } else if (location === $location(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral(["Mer-kin Temple"])))) {
    temple(plan);
  }
}
function byMonster(plan) {
  if (foe === $monster(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral(["Black Crayon Golem"])))) {
    if (get("_monsterHabitatsFightsLeft") === 0 && get("_monsterHabitatsRecalled") < 3) {
      plan.trySkill(recallHabitats);
    }
    // trackedMonsters records mafia's own capitalisation, so compare lowercased.
    if (!get("trackedMonsters").toLowerCase().includes("black crayon golem:mchugelarge slash")) {
      plan.trySkill($skill(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral(["Gallapagosian Mating Call"]))), $skill(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral(["McHugeLarge Slash"]))), $skill(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral(["Club 'Em Into Next Week"]))));
    }
    // In-place summons reach this case with no location logic to finish the fight.
    plan.step(cleanUp());
  } else if (foe === $monster(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral(["unholy diver"])))) {
    plan.step(killDiver());
  } else if (foe === $monster(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral(["sea cowboy"])))) {
    plan.trySkill(killALot).step(freeKill(true)).step(cleanUp());
  } else if ($monsters(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral(["rotten dolphin thief, kid who is too old to be Trick-or-Treating, suburban security civilian, vandal kid"]))).includes(foe)) {
    plan.step(cleanUp());
  }
}

/** The diver's own kill, shared by the copy guard and the monster switch. */
function killDiver() {
  return layMimicEgg().tryItem($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral(["spitball"])))).step(freeKill(true)).step(cleanUp());
}

/**
 * Whether this fight can spend its first rounds on bang potions: a free
 * fight, some fish, or one whose monster can't hurt much over those rounds.
 * Never a boss or a Colosseum round, nor a fight whose opener must land
 * first (a Force, the Otoscope, a lecture) or that owes a fish talk.
 */
function bangPotionFight(rounds, openerPlanned) {
  if (openerPlanned || foe.boss) return false;
  if ($locations(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral(["Mer-kin Colosseum, Mer-kin Temple, Mer-kin Temple (Center Door), Mer-kin Temple (Left Door), Mer-kin Temple (Right Door)"]))).includes(kolmafia.myLocation())) {
    return false;
  }
  if ($monsters(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral(["unholy diver, sea cowboy, Dad Sea Monkee"]))).includes(foe)) return false;
  if (foe === $monster(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral(["some fish"])))) return true;
  if (someFishCurveball()) return false;
  if (freeMonster(foe)) return true;
  // Easy: what it hits for over the throws leaves well over half our HP.
  return kolmafia.expectedDamage(foe) * (rounds + 1) < kolmafia.myHp() / 2;
}

/**
 * Every unknown bang potion on hand, two a round with Funkslinging, in the
 * first rounds of a fight that can spare them. Each one identified narrows
 * seedfinder, which fills every dreadscroll answer once the seed is pinned
 * down: six known before the seahorse is tamed is usually enough.
 */
function bangPotions(openerPlanned) {
  // Only what's in inventory can be thrown.
  var unknown = unknownBangPotions().filter(potion => kolmafia.itemAmount(potion) > 0);
  var throws = [];
  for (var i = 0; i < unknown.length; i += 2) {
    var _unknown$slice = unknown.slice(i, i + 2),
      _unknown$slice2 = _slicedToArray(_unknown$slice, 2),
      a = _unknown$slice2[0],
      b = _unknown$slice2[1];
    if (b && kolmafia.haveSkill($skill(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral(["Ambidextrous Funkslinging"]))))) throws.push([a, b]);else throws.push.apply(throws, [a].concat(_toConsumableArray(b ? [b] : [])));
  }
  // Decided here, not in BALLS: a false if's lines count toward KoL's
  // no-action limit. Planned before anything that could swap the monster,
  // so foe is the one fought.
  if (throws.length === 0 || !bangPotionFight(throws.length, openerPlanned)) return new Macro();
  var macro = new Macro();
  for (var _i2 = 0, _throws = throws; _i2 < _throws.length; _i2++) {
    var pair = _throws[_i2];
    macro.item(pair);
  }
  return macro;
}

/**
 * KoL leaves the screech out of the skill list while it recharges. Records
 * and returns "true" or "false"; "" without the eagle or a skill list.
 */
function noteScreechReady(page) {
  if (kolmafia.myFamiliar() !== $familiar(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral(["Patriotic Eagle"]))) || kolmafia.currentRound() < 1) return "";
  var start = page.indexOf("<select name=whichskill>");
  if (start < 0) start = page.indexOf('<select name="whichskill">');
  if (start < 0) return "";
  var stop = page.indexOf("</select>", start);
  if (stop < 0) return "";
  var ready = page.slice(start, stop).includes('value="7451"') ? "true" : "false";
  _set("_sebScreechReady", ready);
  return ready;
}

/** The postloop's Patriotic Screech re-aim at the Smut Orc Logging Camp. */
function screechReaim(page, plan) {
  // Only the zone's natives are safe to banish. A result left unset tells
  // the caller no cast was attempted.
  var orc = foe.phylum === $phylum(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral(["orc"])));
  if (get("_sebScreechFired") === "" && orc && noteScreechReady(page) === "false") {
    _set("_sebScreechFired", "unready");
  } else if (get("_sebScreechFired") === "" && orc) {
    var result = Macro.skill(screech).submit();
    // The line mafia itself reads to register the banish.
    _set("_sebScreechFired", result.includes("releases an ear shattering screech") ? "true" : "false");
  }
  plan.step(freeKill(false)).step(cleanUp());
}

// ─── THE NO-ACTION LIMIT ──────────────────────────────────────────────────────

/** KoL aborts a macro that runs this many lines without an action. */
var NO_ACTION_LIMIT = 69;
/** The safety net's cap, with room for the lines KoL counts that this doesn't see. */
var LINE_CAP = 60;
var ACTIONS = ["attack", "skill", "use", "runaway", "pickpocket", "steal", "jiggle"];

/**
 * Lines before the macro's first sure action: one outside any if or while,
 * or inside ifs that only test hasskill or hascombatitem, which JS has
 * already checked before writing them. A false if's lines count toward
 * KoL's limit, so a long run of guarded tries before this point can end
 * the macro without a single action.
 */
function linesBeforeAction(macro) {
  var lines = macro.toString().split(";").map(line => line.trim()).filter(line => line !== "");
  var owned = /^(hasskill|hascombatitem|hastwocombatitems)\b/;
  // For each open if or while: whether its test only checks what's owned.
  var open = [];
  var _iterator5 = _createForOfIteratorHelper(lines.entries()),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = _slicedToArray(_step5.value, 2),
        i = _step5$value[0],
        line = _step5$value[1];
      var _line$split = line.split(" "),
        _line$split2 = _toArray(_line$split),
        word = _line$split2[0],
        rest = _arrayLikeToArray(_line$split2).slice(1);
      var keyword = word.toLowerCase();
      if (keyword === "if" || keyword === "while") {
        var terms = rest.join(" ").split("&&");
        open.push(keyword === "if" && terms.every(term => owned.test(term.trim())));
      } else if (keyword === "endif" || keyword === "endwhile") {
        open.pop();
      } else if (ACTIONS.includes(keyword) && open.every(sure => sure)) {
        return i;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return lines.length;
}

/** The finisher alone: Saucegeyser while MP lasts, then attacks. */
function finisher() {
  foe = kolmafia.lastMonster();
  return new Plan().step(cleanUp());
}

/** KoL's abort for a macro that ran out of lines with no action taken. */
function tookNoAction(page) {
  var message = "without any actions being taken";
  return get("lastMacroError").includes(message) || page.includes(message);
}

// ─── ONE PASS ─────────────────────────────────────────────────────────────────

/** Plan the rest of the fight against the current monster, from the original's main(). */
function plan(page) {
  foe = kolmafia.lastMonster();
  var plan = new Plan();
  if (get("_sebScreechReaim", false)) {
    screechReaim(page, plan);
    return plan;
  }
  if (get("_sebPearlFarm", false)) {
    noteScreechReady(page);
    return plan.step(freeKill(false)).step(cleanUp());
  }
  var force = forces();
  var scope = otoscope();
  plan.step(force).step(becomeBat()).step(scope).step(extractJelly());
  var reroll = replaceEnemy();
  if (reroll) return plan.swap(reroll);
  var lecture = lectureOnRelativity();
  var openerPlanned = [force, scope, lecture].some(macro => macro.components.length > 0);
  plan.step(lecture).step(bangPotions(openerPlanned));
  plan.externalIf((highShiny() || !haveItem($item(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral(["closed-circuit pay phone"]))))) && kolmafia.availableAmount($item(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral(["sea lasso"])))) > 5 && get("lassoTrainingCount") < 6, Macro.if_("underwater", Macro.tryItem($item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral(["sea lasso"]))))));
  // A copied diver surfaces wherever the route is adventuring, and that
  // zone's logic would spend it on its own target. While the helmet chain is
  // short, kill it as a diver. The wreck has its own diver logic.
  if (foe === $monster(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral(["unholy diver"]))) && diverHuntActive() && kolmafia.myLocation() !== $location(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral(["The Wreck of the Edgar Fitzsimmons"])))) {
    // Bounded at 20: taming spends a lasso at exactly that count.
    if (kolmafia.haveEquipped($item(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral(["sea cowboy hat"])))) && kolmafia.haveEquipped($item(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral(["sea chaps"])))) && get("lassoTrainingCount") < 20) {
      plan.tryItem($item(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral(["sea lasso"]))));
    }
    return plan.step(killDiver());
  }
  byLocation(plan);
  if (plan.swapped) return plan;
  byMonster(plan);
  return plan;
}
function main(round, monster, page) {
  // Yog-Urt and Shub react round by round. Any stray opener under More Like
  // a Suckrament costs a heal round or kills.
  if (kolmafia.lastMonster() === $monster(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral(["Yog-Urt, Elder Goddess of Hatred"])))) {
    if (kolmafia.myLocation() === $location(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral(["Mer-kin Temple (Right Door)"])))) {
      yogUrtFight();
      return;
    }
  }
  if (kolmafia.myLocation() === $location(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral(["Mer-kin Temple (Left Door)"])))) {
    shubFight();
    return;
  }

  // Each pass is one macro; a pass that swaps the monster is followed by a
  // pass planned for the new one. A pass whose macro took no action at all
  // is followed by the finisher alone, never the same macro again.
  var stalled = false;
  for (var pass = 0; kolmafia.currentRound() > 0 && pass < 6; pass++) {
    var macro = stalled ? finisher() : plan(page);
    var lead = linesBeforeAction(macro);
    if (lead > LINE_CAP) {
      kolmafia.print("SEB: the macro vs ".concat(foe, " runs ").concat(lead, " lines before a sure action, past KoL's ") + "limit of ".concat(NO_ACTION_LIMIT, ". Finishing the fight with Saucegeyser and attacks instead."), "orange");
      debug("Dropped macro vs ".concat(foe, ": ").concat(macro));
      macro = finisher();
    }
    debug("Macro vs ".concat(foe, ": ").concat(macro));
    var swapped = macro.swapped;
    _set("lastMacroError", "");
    page = macro.submit();
    if (tookNoAction(page)) {
      if (stalled) break;
      kolmafia.print("SEB: the macro vs ".concat(foe, " took no action. Retrying with the finisher only."), "orange");
      stalled = true;
    }
    if (!swapped && kolmafia.currentRound() > 0) {
      // The plan ran out with the fight still on; the next pass tries again
      // from where it stands, as mafia would have re-consulted the script.
      page = kolmafia.visitUrl("fight.php");
    }
  }
  if (kolmafia.currentRound() > 0) stop("The fight against ".concat(kolmafia.lastMonster(), " is still going. Finish it by hand."));
}

exports.main = main;
