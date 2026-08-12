const KILLERS = [
    { id: 1, name: "The Trapper", image: "assets/images/killers/K01_TheTrapper_Portrait.webp" },
    { id: 2, name: "The Wraith", image: "assets/images/killers/K02_TheWraith_Portrait.webp" },
    { id: 3, name: "The Hillbilly", image: "assets/images/killers/K03_TheHillbilly_Portrait.webp" },
    { id: 4, name: "The Nurse", image: "assets/images/killers/K04_TheNurse_Portrait.webp" },
    { id: 5, name: "The Shape", image: "assets/images/killers/K05_TheShape_Portrait.webp" },
    { id: 6, name: "The Hag", image: "assets/images/killers/K06_TheHag_Portrait.webp" },
    { id: 7, name: "The Doctor", image: "assets/images/killers/K07_TheDoctor_Portrait.webp" },
    { id: 8, name: "The Huntress", image: "assets/images/killers/K08_TheHuntress_Portrait.webp" },
    { id: 9, name: "The Cannibal", image: "assets/images/killers/K09_TheCannibal_Portrait.webp" },
    { id: 10, name: "The Nightmare", image: "assets/images/killers/K10_TheNightmare_Portrait.webp" },
    { id: 11, name: "The Pig", image: "assets/images/killers/K11_ThePig_Portrait.webp" },
    { id: 12, name: "The Clown", image: "assets/images/killers/K12_TheClown_Portrait.webp" },
    { id: 13, name: "The Spirit", image: "assets/images/killers/K13_TheSpirit_Portrait.webp" },
    { id: 14, name: "The Legion", image: "assets/images/killers/K14_TheLegion_Portrait.webp" },
    { id: 15, name: "The Plague", image: "assets/images/killers/K15_ThePlague_Portrait.webp" },
    { id: 16, name: "The Ghost Face", image: "assets/images/killers/K16_TheGhostFace_Portrait.webp" },
    { id: 17, name: "The Demogorgon", image: "assets/images/killers/K17_TheDemogorgon_Portrait.webp" },
    { id: 18, name: "The Oni", image: "assets/images/killers/K18_TheOni_Portrait.webp" },
    { id: 19, name: "The Deathslinger", image: "assets/images/killers/K19_TheDeathslinger_Portrait.webp" },
    { id: 20, name: "The Executioner", image: "assets/images/killers/K20_TheExecutioner_Portrait.webp" },
    { id: 21, name: "The Blight", image: "assets/images/killers/K21_TheBlight_Portrait.webp" },
    { id: 22, name: "The Twins", image: "assets/images/killers/K22_TheTwins_Portrait.webp" },
    { id: 23, name: "The Trickster", image: "assets/images/killers/K23_TheTrickster_Portrait.webp" },
    { id: 24, name: "The Nemesis", image: "assets/images/killers/K24_TheNemesis_Portrait.webp" },
    { id: 25, name: "The Cenobite", image: "assets/images/killers/K25_TheCenobite_Portrait.webp" },
    { id: 26, name: "The Artist", image: "assets/images/killers/K26_TheArtist_Portrait.webp" },
    { id: 27, name: "The Onryō", image: "assets/images/killers/K27_TheOnryo_Portrait.webp" },
    { id: 28, name: "The Dredge", image: "assets/images/killers/K28_TheDredge_Portrait.webp" },
    { id: 29, name: "The Mastermind", image: "assets/images/killers/K29_TheMastermind_Portrait.webp" },
    { id: 30, name: "The Knight", image: "assets/images/killers/K30_TheKnight_Portrait.webp" },
    { id: 31, name: "The Skull Merchant", image: "assets/images/killers/K31_TheSkullMerchant_Portrait.webp" },
    { id: 32, name: "The Singularity", image: "assets/images/killers/K32_TheSingularity_Portrait.webp" },
    { id: 33, name: "The Xenomorph", image: "assets/images/killers/K33_TheXenomorph_Portrait.webp" },
    { id: 34, name: "The Good Guy", image: "assets/images/killers/K34_TheGoodGuy_Portrait.webp" },
    { id: 35, name: "The Unknown", image: "assets/images/killers/K35_TheUnknown_Portrait.webp" },
    { id: 36, name: "The Lich", image: "assets/images/killers/K36_TheLich_Portrait.webp" },
    { id: 37, name: "The Dark Lord", image: "assets/images/killers/K37_TheDarkLord_Portrait.webp" },
    { id: 38, name: "The Houndmaster", image: "assets/images/killers/K38_TheHoundmaster_Portrait.webp" },
    { id: 39, name: "The Ghoul", image: "assets/images/killers/K39_TheGhoul_Portrait.webp" },
    { id: 40, name: "The Animatronic", image: "assets/images/killers/K40_TheAnimatronic_Portrait.webp" },
    { id: 41, name: "The Krasue", image: "assets/images/killers/K41_TheKrasue_Portrait.webp" },
    { id: 42, name: "The First", image: "assets/images/killers/K42_TheFirst_Portrait.webp" },
    { id: 43, name: "Jason Voorhees", image: "assets/images/killers/K43_TheSlasher_Portrait.webp" },
    { id: 44, name: "The Judgment", image: "assets/images/killers/K44_TheJudgment_Portrait.webp" }
];

const PERKS = [
    { id: 1, name: "A Nurse's Calling", icon: "👁️" },
    { id: 2, name: "Agitation", icon: "🚨" },
    { id: 3, name: "Alien Instinct", icon: "👽" },
    { id: 4, name: "Awakened Awareness", icon: "🧠" },
    { id: 5, name: "Bamboozle", icon: "🎪" },
    { id: 6, name: "Barbecue & Chili", icon: "🔥" },
    { id: 7, name: "Batteries Included", icon: "🔋" },
    { id: 8, name: "Beast of Prey", icon: "🐾" },
    { id: 9, name: "Bitter Murmur", icon: "💬" },
    { id: 10, name: "Blood Echo", icon: "🩸" },
    { id: 11, name: "Blood Favor", icon: "🩸" },
    { id: 12, name: "Blood Warden", icon: "🚪" },
    { id: 13, name: "Bloodhound", icon: "🐺" },
    { id: 14, name: "Brutal Strength", icon: "💪" },
    { id: 15, name: "Call of Brine", icon: "🌊" },
    { id: 17, name: "Corrupt Intervention", icon: "🚫" },
    { id: 18, name: "Coulrophobia", icon: "🤡" },
    { id: 19, name: "Coup de Grâce", icon: "🏆" },
    { id: 20, name: "Dark Arrogance", icon: "🌑" },
    { id: 21, name: "Dark Devotion", icon: "🖤" },
    { id: 22, name: "Dead Man's Switch", icon: "🚂" },
    { id: 23, name: "Deadlock", icon: "🔒" },
    { id: 24, name: "Deathbound", icon: "💀" },
    { id: 25, name: "Deerstalker", icon: "🦌" },
    { id: 26, name: "Discordance", icon: "👥" },
    { id: 27, name: "Dissolution", icon: "🫠" },
    { id: 28, name: "Distressing", icon: "😨" },
    { id: 29, name: "Dragon's Grip", icon: "🐉" },
    { id: 30, name: "Dying Light", icon: "💡" },
    { id: 31, name: "Enduring", icon: "🛡️" },
    { id: 32, name: "Eruption", icon: "🌋" },
    { id: 33, name: "Fire Up", icon: "🔥" },
    { id: 34, name: "Forced Hesitation", icon: "⏳" },
    { id: 35, name: "Forced Penance", icon: "⚔️" },
    { id: 36, name: "Friends 'Til the End", icon: "🤝" },
    { id: 37, name: "Furtive Chase", icon: "🏃" },
    { id: 38, name: "Game Afoot", icon: "👣" },
    { id: 39, name: "Gearhead", icon: "⚙️" },
    { id: 40, name: "Genetic Limits", icon: "🧬" },
    { id: 41, name: "Grim Embrace", icon: "🫂" },
    { id: 42, name: "Hangman's Trick", icon: "🪢" },
    { id: 43, name: "Hex: Blood Favor", icon: "🩸" },
    { id: 44, name: "Hex: Crowd Control", icon: "🚪" },
    { id: 45, name: "Hex: Devour Hope", icon: "🦴" },
    { id: 46, name: "Hex: Face the Darkness", icon: "🌑" },
    { id: 47, name: "Hex: Haunted Ground", icon: "🕯️" },
    { id: 48, name: "Hex: Huntress Lullaby", icon: "🎵" },
    { id: 49, name: "Hex: No One Escapes Death", icon: "⚡" },
    { id: 50, name: "Hex: Pentimento", icon: "🔥" },
    { id: 51, name: "Hex: Plaything", icon: "🎲" },
    { id: 52, name: "Hex: Retribution", icon: "🗡️" },
    { id: 53, name: "Hex: Ruin", icon: "☠️" },
    { id: 54, name: "Hex: The Third Seal", icon: "🔏" },
    { id: 55, name: "Hex: Thrill of the Hunt", icon: "🎯" },
    { id: 56, name: "Hoarder", icon: "📦" },
    { id: 57, name: "Hubris", icon: "👑" },
    { id: 58, name: "Hysteria", icon: "😵" },
    { id: 59, name: "I'm All Ears", icon: "👂" },
    { id: 60, name: "Infectious Fright", icon: "😱" },
    { id: 61, name: "Insidious", icon: "👤" },
    { id: 62, name: "Iron Grasp", icon: "✊" },
    { id: 63, name: "Jolt", icon: "⚡" },
    { id: 64, name: "Knock Out", icon: "🥊" },
    { id: 65, name: "Languid Touch", icon: "🖐️" },
    { id: 66, name: "Leverage", icon: "📈" },
    { id: 67, name: "Lethal Pursuer", icon: "🎯" },
    { id: 68, name: "Lightborn", icon: "☀️" },
    { id: 69, name: "Machine Learning", icon: "🤖" },
    { id: 70, name: "Mad Grit", icon: "😤" },
    { id: 71, name: "Make Your Choice", icon: "❓" },
    { id: 72, name: "Merciless Storm", icon: "⛈️" },
    { id: 73, name: "Mindbreaker", icon: "🧠" },
    { id: 74, name: "Monitor & Abuse", icon: "👁️" },
    { id: 75, name: "Nemesis", icon: "🤬" },
    { id: 76, name: "No Way Out", icon: "🚪" },
    { id: 77, name: "Noed", icon: "⚡" },
    { id: 78, name: "Nowhere to Hide", icon: "🙈" },
    { id: 79, name: "Oppression", icon: "⛓️" },
    { id: 80, name: "Overcharge", icon: "🔋" },
    { id: 81, name: "Overwhelming Presence", icon: "📢" },
    { id: 82, name: "Pain Resonance", icon: "🪝" },
    { id: 83, name: "Play With Your Food", icon: "🍽️" },
    { id: 84, name: "Pop Goes the Weasel", icon: "🎈" },
    { id: 85, name: "Predator", icon: "🦅" },
    { id: 86, name: "Rapid Brutality", icon: "⚔️" },
    { id: 87, name: "Rancor", icon: "🎯" },
    { id: 88, name: "Remember Me", icon: "🧠" },
    { id: 89, name: "Save the Best for Last", icon: "🌟" },
    { id: 90, name: "Septic Touch", icon: "🧪" },
    { id: 91, name: "Shadowborn", icon: "👁️" },
    { id: 92, name: "Shattered Hope", icon: "💥" },
    { id: 93, name: "Sloppy Butcher", icon: "🔪" },
    { id: 94, name: "Spies from the Shadows", icon: "🦅" },
    { id: 95, name: "Spirit Fury", icon: "😤" },
    { id: 96, name: "Starstruck", icon: "⭐" },
    { id: 97, name: "Stridor", icon: "📢" },
    { id: 98, name: "Superior Anatomy", icon: "🦴" },
    { id: 99, name: "Surge", icon: "⚡" },
    { id: 100, name: "Surveillance", icon: "📷" },
    { id: 101, name: "Terminus", icon: "🩸" },
    { id: 102, name: "Territorial Imperative", icon: "📍" },
    { id: 103, name: "Thanatophobia", icon: "💀" },
    { id: 104, name: "Thrilling Tremors", icon: "🫨" },
    { id: 105, name: "Tinkerer", icon: "🔧" },
    { id: 106, name: "Trail of Torment", icon: "👣" },
    { id: 107, name: "Ultimate Weapon", icon: "🗡️" },
    { id: 108, name: "Unbound", icon: "🔓" },
    { id: 109, name: "Unforeseen", icon: "🌫️" },
    { id: 110, name: "Unnerving Presence", icon: "😵" },
    { id: 111, name: "Unrelenting", icon: "😤" },
    { id: 112, name: "Whispers", icon: "🤫" },
    { id: 113, name: "Zanshin Tactics", icon: "🗺️" },
    { id: 114, name: "Hex: Scared to Death", icon: "😱" },
    { id: 115, name: "Rampage", icon: "🪓" },
    { id: 116, name: "Silent Shadow", icon: "🌑" },
    { id: 117, name: "Celestial Witness", icon: "⭐" },
    { id: 118, name: "Hex: Under Your Thumb", icon: "👎" },
    { id: 119, name: "Lay Waste", icon: "💀" }
];

const PERK_IMAGE_MAP = {
    "A Nurse's Calling":"IconPerks_aNursesCalling","Agitation":"IconPerks_agitation","Alien Instinct":"AlienInstinct",
    "All-Shaking Thunder":"AllShakingThunder","Awakened Awareness":"AwakenedAwarenesss","Bamboozle":"Bamboozle",
    "Barbecue & Chili":"BBQAndChili","Batteries Included":"BatteriesIncluded","Beast of Prey":"BeastOfPrey",
    "Bitter Murmur":"IconPerks_bitterMurmur","Blood Echo":"BloodEcho","Blood Favor":"IconPerks_hexBloodFavour",
    "Blood Warden":"BloodWarden","Bloodhound":"IconPerks_bloodhound","Turn Back the Clock":"TurnBackTheClock",
    "Brutal Strength":"IconPerks_brutalStrength","Call of Brine":"CallOfBrine","Corrupt Intervention":"CorruptIntervention",
    "Coulrophobia":"Coulrophobia","Coup de Grâce":"CoupDeGrace","Cruel Limits":"CruelLimits","Dark Arrogance":"DarkArrogance",
    "Dark Devotion":"DarkDevotion","Darkness Revealed":"DarknessRevelated","Dead Man's Switch":"DeadManSwitch",
    "Deadlock":"Deadlock","Deathbound":"Deathbound","Deerstalker":"IconPerks_deerstalker","Discordance":"Discordance",
    "Dissolution":"Dissolution","Distressing":"IconPerks_distressing","Dominance":"Dominance","Dragon's Grip":"DragonsGrip",
    "Dying Light":"DyingLight","Enduring":"IconPerks_enduring","Eruption":"Eruption","Fire Up":"FireUp",
    "Floods of Rage":"FloodOfRage","Forced Hesitation":"ForcedHesitation","Forced Penance":"ForcedPenance",
    "Forever Entwined":"ForeverEntwined","Franklin's Demise":"FranklinsLoss","Friends 'Til the End":"FriendsTillTheEnd",
    "Furtive Chase":"FurtiveChase","Game Afoot":"GameAfoot","Gearhead":"GearHead","Genetic Limits":"GeneticLimits",
    "Grim Embrace":"GrimEmbrace","Hangman's Trick":"HangmansTrick","Haywire":"Haywire","Help Wanted":"HelpWanted",
    "Hex: Blood Favor":"HexBloodFavor","Hex: Crowd Control":"HexCrowdControl","Hex: Devour Hope":"DevourHope",
    "Hex: Face the Darkness":"HexFaceTheDarkness","Hex: Haunted Ground":"HauntedGround",
    "Hex: Hive Mind":"IconsPerks_HexHiveMind","Hex: Huntress Lullaby":"HuntressLullaby",
    "Hex: No One Escapes Death":"IconPerks_hexNoOneEscapesDeath","Hex: Nothing But Misery":"NothingButMisery",
    "Hex: Overture of Doom":"HexOvertureOfDoom","Hex: Pentimento":"HexPentimento","Hex: Plaything":"HexPlaything",
    "Hex: Retribution":"HexRetribution","Hex: Ruin":"Ruin","Hex: The Third Seal":"TheThirdSeal",
    "Hex: Thrill of the Hunt":"ThrillOfTheHunt","Hex: Wretched Fate":"HexWretchedFate","Hoarder":"Hoarder","Hubris":"Hubris",
    "Human Greed":"HumanGreed","Hysteria":"Hysteria","I'm All Ears":"ImAllEars","Infectious Fright":"InfectiousFright",
    "Insidious":"IconPerks_insidious","Iron Grasp":"IconPerks_ironGrasp","Iron Maiden":"IronMaiden",
    "Jolt":"Surge","Knock Out":"KnockOut","Languid Touch":"LanguidTouch","Lethal Pursuer":"LethalPursuer",
    "Leverage":"Leverage","Lightborn":"IconPerks_lightborn","Machine Learning":"IconPerks_machineLearning",
    "Mad Grit":"MadGrit","Make Your Choice":"MakeYourChoice","Merciless Storm":"MercilessStorm","Mindbreaker":"MindBreaker",
    "Monitor & Abuse":"MonitorAndAbuse","Nemesis":"Nemesis","No Quarter":"NoQuarter","No Way Out":"NoWayOut",
    "Noed":"IconPerks_hexNoOneEscapesDeath","None Are Free":"NoneAreFree","Nowhere to Hide":"NowhereToHide",
    "Oppression":"Oppression","Overcharge":"Overcharge","Overwhelming Presence":"OverwhelmingPresence",
    "Pain Resonance":"PainResonance","Phantom Fear":"PhantomFear","Play With Your Food":"PlayWithYourFood",
    "Pop Goes the Weasel":"PopGoesTheWeasel","Predator":"IconPerks_predator","Rancor":"Rancor",
    "Rapid Brutality":"RapidBrutality","Ravenous":"Ravenous","Remember Me":"RememberMe",
    "Save the Best for Last":"SaveTheBestForLast","Scourge Hook: Gift of Pain":"ScourgeHookGiftOfPain",
    "Scourge Hook: Jagged Compass":"ScourgeHookJaggedCompass","Scourge Hook: Pain Resonance":"PainResonance",
    "Secret Project":"IconsPerks_SecretProject","Septic Touch":"SepticTouch","Shadowborn":"IconPerks_shadowborn",
    "Shattered Hope":"ShatteredHope","Sloppy Butcher":"IconPerks_sloppyButcher","Spies from the Shadows":"IconPerks_spiesFromTheShadows",
    "Spirit Fury":"SpiritFury","Starstruck":"Starstruck","Stridor":"IconPerks_stridor","Superior Anatomy":"SuperiorAnatomy",
    "Surge":"Surge","Surveillance":"Surveillance","Terminus":"Terminus","Territorial Imperative":"TerritorialImperative",
    "Thanatophobia":"IconPerks_thanatophobia","Thrilling Tremors":"ThrillingTremors","Thwack!":"Thwack",
    "Tinkerer":"IconPerks_tinkerer","Trail of Torment":"TrailOfTorment","Two Can Play":"TwoCanPlay",
    "Ultimate Weapon":"UltimateWeapon","Unbound":"Unbound","Undone":"Undone","Unforeseen":"Unforeseen","Undying":"HexUndying",
    "Unnerving Presence":"IconPerks_unnervingPresence","Unrelenting":"IconPerks_unrelenting","Weave Attunement":"WeaveAttunement",
    "Wandering Eye":"WanderingEye","Whispers":"IconPerks_whispers","Zanshin Tactics":"ZanshinTactics",
    "Hex: Scared to Death":"HexScaredToDeath","Rampage":"Rampage","Silent Shadow":"SilentShadow",
    "Celestial Witness":"CelestialWitness","Hex: Under Your Thumb":"HexUnderYourThumb","Lay Waste":"LayWaste"
};

const KILLER_UNIQUE_PERKS = {
    "The Trapper": ["Unnerving Presence", "Brutal Strength", "Agitation"],
    "The Wraith": ["Predator", "Bloodhound", "Shadowborn"],
    "The Hillbilly": ["Enduring", "Lightborn", "Tinkerer"],
    "The Nurse": ["Stridor", "Thanatophobia", "A Nurse's Calling"],
    "The Shape": ["Save the Best for Last", "Play With Your Food", "Dying Light"],
    "The Hag": ["Hex: Ruin", "Hex: Devour Hope", "Hex: The Third Seal"],
    "The Doctor": ["Overwhelming Presence", "Monitor & Abuse", "Overcharge"],
    "The Huntress": ["Beast of Prey", "Territorial Imperative", "Hex: Huntress Lullaby"],
    "The Cannibal": ["Knock Out", "Barbecue & Chili", "Franklin's Demise"],
    "The Nightmare": ["Fire Up", "Remember Me", "Blood Warden"],
    "The Pig": ["Hangman's Trick", "Surveillance", "Make Your Choice"],
    "The Clown": ["Bamboozle", "Coulrophobia", "Pop Goes the Weasel"],
    "The Spirit": ["Spirit Fury", "Hex: Haunted Ground", "Rancor"],
    "The Legion": ["Discordance", "Mad Grit", "Iron Maiden"],
    "The Plague": ["Corrupt Intervention", "Infectious Fright", "Dark Devotion"],
    "The Ghost Face": ["I'm All Ears", "Thrilling Tremors", "Furtive Chase"],
    "The Demogorgon": ["Surge", "Cruel Limits", "Mindbreaker"],
    "The Oni": ["Zanshin Tactics", "Blood Echo", "Nemesis"],
    "The Deathslinger": ["Gearhead", "Dead Man's Switch", "Hex: Retribution"],
    "The Executioner": ["Forced Penance", "Trail of Torment", "Deathbound"],
    "The Blight": ["Dragon's Grip", "Hex: Blood Favor", "Undying"],
    "The Twins": ["Hoarder", "Oppression", "Coup de Grâce"],
    "The Trickster": ["Starstruck", "Hex: Crowd Control", "No Way Out"],
    "The Nemesis": ["Lethal Pursuer", "Hysteria", "Eruption"],
    "The Cenobite": ["Deadlock", "Hex: Plaything", "Scourge Hook: Gift of Pain"],
    "The Artist": ["Grim Embrace", "Hex: Pentimento", "Scourge Hook: Pain Resonance"],
    "The Onryō": ["Call of Brine", "Merciless Storm", "Floods of Rage"],
    "The Dredge": ["Dissolution", "Darkness Revealed", "Septic Touch"],
    "The Mastermind": ["Superior Anatomy", "Awakened Awareness", "Terminus"],
    "The Knight": ["Nowhere to Hide", "Hex: Face the Darkness", "Hubris"],
    "The Skull Merchant": ["Game Afoot", "Leverage", "Thwack!"],
    "The Singularity": ["Genetic Limits", "Forced Hesitation", "Machine Learning"],
    "The Xenomorph": ["Alien Instinct", "Ultimate Weapon", "Rapid Brutality"],
    "The Good Guy": ["Batteries Included", "Friends 'Til the End", "Two Can Play"],
    "The Unknown": ["Unbound", "Unforeseen", "Undone"],
    "The Lich": ["Dark Arrogance", "Languid Touch", "Weave Attunement"],
    "The Dark Lord": ["Human Greed", "Hex: Wretched Fate", "Dominance"],
    "The Houndmaster": ["All-Shaking Thunder", "No Quarter", "Scourge Hook: Jagged Compass"],
    "The Ghoul": ["Forever Entwined", "None Are Free", "Hex: Nothing But Misery"],
    "The Animatronic": ["Haywire", "Help Wanted", "Phantom Fear"],
    "The Krasue": ["Hex: Overture of Doom", "Ravenous", "Wandering Eye"],
    "The First": ["Hex: Hive Mind", "Secret Project", "Turn Back the Clock"],
    "Jason Voorhees": ["Hex: Scared to Death", "Rampage", "Silent Shadow"],
    "The Judgment": ["Celestial Witness", "Hex: Under Your Thumb", "Lay Waste"]
};

// =====================================================
// RUTAS POR DEFECTO (de fábrica)
// Añade aquí las tuyas siguiendo la misma estructura.
// challengeType: 'perks_random' | 'perks_unique' | 'all_random' | 'no_restriction'
// killers: [{ id: NUMERO_DEL_KILLER }]
// =====================================================
const DEFAULT_ROUTES = [
    {
        name: "Ruta Clásicos",
        challengeType: 'perks_unique',
        killers: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    },
    {
        name: "Ruta Infierno",
        challengeType: 'perks_unique',
        killers: [{ id: 1 }, { id: 7 }, { id: 11 }, { id: 6 }, {id: 9}, {id: 16}, {id: 31}]
    },
    {
        name: "Ruta Dash (expertos)",
        challengeType: 'perks_unique',
        killers : [{id: 41}, {id:37}, {id:39}, {id:34}, {id:29}, {id:22},{id:21}, {id:18}, {id:17}, {id:11}, {id:3}]
    },
    {
        name: "Ruta Dash (random)",
        challengeType: 'perks_unique',
        killers : [{id: 41}, {id:37}, {id:39}, {id:34}, {id:29}, {id:22},{id:21}, {id:18}, {id:17}, {id:11}, {id:3}]
    },
    {
        name: "Ruta M1 (expertos)",
        challengeType: 'perks_unique',
        killers : [{id: 1},{id: 2},{id: 5},{id: 6},{id: 7},{id: 10},{id: 11},{id: 12},{id: 14},{id: 15},{id: 16},{id: 25},{id: 26},{id: 27},{id: 31},{id: 32},{id: 38},{id: 13}]
    },
    {
        name: "Ruta M1 (random)",
        challengeType: 'perks_random',
        killers : [{id: 1},{id: 2},{id: 5},{id: 6},{id: 7},{id: 10},{id: 11},{id: 12},{id: 14},{id: 15},{id: 16},{id: 25},{id: 26},{id: 27},{id: 31},{id: 32},{id: 38},{id: 13}]
    },
    {
        name: "Ruta Insta-Down (expertos)",
        challengeType: "perks_unique",
        killers: [{id: 3},{id: 9},{id: 16},{id: 18},{id: 5}]
    },
    {
        name: "Ruta Insta-Down (random)",
        challengeType: "perks_random",
        killers: [{id: 3},{id: 9},{id: 16},{id: 18},{id: 5}]
    },
    {
        name: "Ruta TP (expertos)",
        challengeType: "perks_unique",
        killers: [{id: 4},{id: 6},{id: 10},{id: 17},{id: 25},{id: 27},{id: 28},{id: 32},{id: 35},{id: 37},{id: 40}]
    },
    {
        name: "Ruta TP (random)",
        challengeType: "perks_random",
        killers: [{id: 4},{id: 6},{id: 10},{id: 17},{id: 25},{id: 27},{id: 28},{id: 32},{id: 35},{id: 37},{id: 40}]
    }
];

function perkNameToImageFile(name) {
    return PERK_IMAGE_MAP[name] || null;
}

function getPerkIcon(name) {
    const file = perkNameToImageFile(name);
    if (file) return `<img src="assets/images/perks_killers/${file}.png" alt="${name}" class="perk-image" onerror="this.outerHTML='<span class=\'perk-fallback\'>❓</span>'">`;
    const perkObj = PERKS.find(p => p.name === name);
    return perkObj ? perkObj.icon : '❓';
}

const CHALLENGE_TYPES = {
    perks_random: 'PERKS ALEATORIAS',
    perks_unique: 'PERKS ÚNICAS',
    all_random: 'TODO ALEATORIO',
    no_restriction: 'SIN RESTRICCIÓN'
};

const KR_STORAGE_KEY = 'dbd_killer_routes_v1';

let krState = {
    routes: [],
    currentRouteId: null,
    soundEnabled: true
};

let createState = {
    name: '',
    challengeType: 'perks_random',
    selectedPerks: [],
    selectedKillerIds: [],
    isRandomizing: false
};

let audioCtx = null;

function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
    if (!krState.soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const now = audioCtx.currentTime;
        switch (type) {
            case 'cycle':
                osc.type = 'square';
                osc.frequency.setValueAtTime(400 + Math.random() * 300, now);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.05);
                osc.start(now); osc.stop(now + 0.05);
                break;
            case 'select':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.linearRampToValueAtTime(1200, now + 0.2);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.3);
                osc.start(now); osc.stop(now + 0.3);
                break;
            case 'win':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(523, now);
                osc.frequency.setValueAtTime(659, now + 0.15);
                osc.frequency.setValueAtTime(784, now + 0.3);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.5);
                osc.start(now); osc.stop(now + 0.5);
                break;
            case 'lose':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(400, now);
                osc.frequency.linearRampToValueAtTime(150, now + 0.4);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.4);
                osc.start(now); osc.stop(now + 0.4);
                break;
            case 'advance':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.setValueAtTime(660, now + 0.1);
                osc.frequency.setValueAtTime(880, now + 0.2);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.4);
                osc.start(now); osc.stop(now + 0.4);
                break;
        }
    } catch (e) {}
}

function saveState() {
    try {
        localStorage.setItem(KR_STORAGE_KEY, JSON.stringify({
            routes: krState.routes,
            soundEnabled: krState.soundEnabled
        }));
    } catch (e) {}
}

function loadState() {
    try {
        const stored = localStorage.getItem(KR_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            krState.routes = parsed.routes || [];
            krState.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : true;

            const storedIds = new Set(krState.routes.map(r => r.name));
            DEFAULT_ROUTES.forEach(dr => {
                if (!storedIds.has(dr.name)) {
                    krState.routes.push({
                        id: generateId(),
                        name: dr.name,
                        challengeType: dr.challengeType,
                        killers: dr.killers,
                        progress: dr.killers.map(() => 'pending'),
                        activeKiller: null,
                        activePerks: null
                    });
                }
            });
        } else {
            krState.routes = DEFAULT_ROUTES.map(dr => ({
                id: generateId(),
                name: dr.name,
                challengeType: dr.challengeType,
                killers: dr.killers,
                progress: dr.killers.map(() => 'pending'),
                activeKiller: null,
                activePerks: null
            }));
            krState.soundEnabled = true;
            saveState();
        }
    } catch (e) {}
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 3000);
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function getRandomPerks() {
    const shuffled = [...PERKS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
}

function getPerksForStep(route, stepIndex) {
    const step = route.killers[stepIndex];
    const killer = KILLERS.find(k => k.id === step.id);
    if (!killer) return [];

    switch (route.challengeType) {
        case 'perks_random':
            return getRandomPerks().map(p => p.name);
        case 'perks_unique':
            return KILLER_UNIQUE_PERKS[killer.name] || [];
        case 'all_random': {
            const shuffledKillers = [...KILLERS].sort(() => Math.random() - 0.5);
            const rk = shuffledKillers.find(sk => sk.id !== step.id) || shuffledKillers[0];
            return KILLER_UNIQUE_PERKS[rk.name] || getRandomPerks().map(p => p.name);
        }
        case 'no_restriction':
            return [];
        default:
            return getRandomPerks().map(p => p.name);
    }
}

function showView(viewName) {
    document.getElementById('krListView').style.display = viewName === 'list' ? '' : 'none';
    document.getElementById('krCreateView').style.display = viewName === 'create' ? '' : 'none';
    document.getElementById('krPlayView').style.display = viewName === 'play' ? '' : 'none';
}

function renderRoutesList() {
    const grid = document.getElementById('krRoutesGrid');
    if (krState.routes.length === 0) {
        grid.innerHTML = '<div class="kr-empty">Aún no hay rutas creadas</div>';
        return;
    }

    grid.innerHTML = krState.routes.map(route => {
        const completed = route.killers.filter((k, i) => route.progress[i] === 'completed').length;
        const total = route.killers.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        const currentStep = route.progress.findIndex(s => s !== 'completed');
        const isActive = currentStep !== -1 && currentStep < total;

        const killerPreviews = route.killers.slice(0, 10).map((k, i) => {
            const killer = KILLERS.find(k2 => k2.id === k.id);
            if (!killer) return '';
            let cls = 'kr-route-card-killer';
            if (route.progress[i] === 'completed') cls += ' completed';
            else if (i === currentStep && isActive) cls += ' current';
            return `<div class="${cls}"><img src="${killer.image}" alt="${tKiller(killer.name)}" title="${tKiller(killer.name)}"></div>`;
        }).join('');

        const moreCount = total > 10 ? total - 10 : 0;

        return `<div class="kr-route-card" data-route-id="${route.id}">
            <div class="kr-route-card-name">${route.name.toUpperCase()}</div>
            <div class="kr-route-card-type">${CHALLENGE_TYPES[route.challengeType] || route.challengeType}</div>
            <div class="kr-route-card-killers">
                ${killerPreviews}
                ${moreCount > 0 ? `<div style="font-family:var(--font-retro);font-size:8px;color:#888;display:flex;align-items:center;padding:4px">+${moreCount}</div>` : ''}
            </div>
            <div class="kr-route-card-progress">
                <div class="kr-route-card-bar">
                    <div class="kr-route-card-bar-fill" style="width:${percent}%"></div>
                </div>
                <span class="kr-route-card-count">${completed}/${total}</span>
            </div>
            <button class="kr-route-card-delete" data-route-id="${route.id}" title="Eliminar ruta">✕</button>
        </div>`;
    }).join('');
}

function renderCreateView() {
    const selector = document.getElementById('killerSelector');
    selector.innerHTML = KILLERS.map(killer => {
        const isSelected = createState.selectedKillerIds.includes(killer.id);
        const fb = killer.id === 43 ? '🔪' : '?';
        return `<div class="kr-killer-select-item ${isSelected ? 'selected' : ''}" data-killer-id="${killer.id}">
             <img src="${killer.image}" alt="${tKiller(killer.name)}" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\' style=\\'width:100%;height:100%;font-size:32px;\\'>${fb}</div>'">
             <span class="kr-ks-name">${tKiller(killer.name).toUpperCase()}</span>
        </div>`;
    }).join('');

    renderRouteOrder();
    renderPerksSelector();
}

function renderPerksSelector() {
}

function renderRouteOrder() {
    const orderEl = document.getElementById('routeOrder');
    if (createState.selectedKillerIds.length === 0) {
        orderEl.innerHTML = '<div class="kr-route-order-empty">Selecciona killers para agregar</div>';
        return;
    }

    orderEl.innerHTML = createState.selectedKillerIds.map((kid, index) => {
        const killer = KILLERS.find(k => k.id === kid);
        if (!killer) return '';
        return `<div class="kr-order-item" data-killer-id="${kid}" draggable="true">
            <span class="kr-order-num">${index + 1}</span>
             <img src="${killer.image}" alt="${tKiller(killer.name)}">
             <span class="kr-order-name">${tKiller(killer.name).toUpperCase()}</span>
            <button class="kr-order-remove" data-killer-id="${kid}" title="Quitar">✕</button>
        </div>`;
    }).join('');
}

function renderPlayView() {
    const route = krState.routes.find(r => r.id === krState.currentRouteId);
    if (!route) { showView('list'); return; }

    document.getElementById('krRouteTitle').textContent = route.name.toUpperCase();
    document.getElementById('krRouteMeta').textContent = CHALLENGE_TYPES[route.challengeType] || '';

    const completed = route.killers.filter((k, i) => route.progress[i] === 'completed').length;
    const total = route.killers.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    document.getElementById('krProgressFill').style.width = `${percent}%`;
    document.getElementById('krProgressText').textContent = `${completed} / ${total} completados`;

    const currentStep = route.progress.findIndex(s => s !== 'completed');
    const isComplete = currentStep === -1 || currentStep >= total;

    const btnStart = document.getElementById('btnStartRoute');

    if (isComplete && completed === total) {
        document.getElementById('krCurrentChallenge').style.display = 'none';
        btnStart.style.display = 'none';
    } else if (completed > 0) {
        btnStart.style.display = '';
        btnStart.disabled = true;
    } else {
        btnStart.style.display = '';
        btnStart.disabled = false;
    }

    renderPathSteps(route, currentStep);
    renderCurrentChallenge(route, currentStep);
}

function renderPathSteps(route, currentStep) {
    const container = document.getElementById('krRoutePaths');
    let html = '<div class="kr-path-steps-container">';

    route.killers.forEach((step, i) => {
        const killer = KILLERS.find(k => k.id === step.id);
        if (!killer) return;
        const status = route.progress[i] || 'pending';
        let nodeCls = 'kr-path-node';
        if (status === 'completed') nodeCls += ' completed';
        else if (i === currentStep) nodeCls += ' current';
        else nodeCls += ' pending';

        const perksHtml = getPerksDisplayForStep(route, i);

        html += `<div class="${nodeCls}" data-killer-id="${killer.id}">
            <div class="kr-path-node-circle">
                <img src="${killer.image}" alt="${tKiller(killer.name)}">
                <span class="kr-path-node-num">${i + 1}</span>
            </div>
            <div class="kr-path-node-name">${tKiller(killer.name).toUpperCase()}</div>
            <div class="kr-path-node-perks">${perksHtml}</div>
        </div>`;

        if (i < route.killers.length - 1) {
            let connCls = 'kr-path-connector';
            if (status === 'completed') connCls += ' completed';
            else if (i === currentStep) connCls += ' current';
            html += `<div class="${connCls}"></div>`;
        }
    });

    html += '</div>';
    container.innerHTML = html;
}

function getPerksDisplayForStep(route, stepIndex) {
    if (route.challengeType === 'no_restriction') return '<span class="perk-label">LIBRE</span>';

    if (route.challengeType === 'perks_unique') {
        const killer = KILLERS.find(k => k.id === route.killers[stepIndex].id);
        if (!killer) return '';
        const uniquePerks = KILLER_UNIQUE_PERKS[killer.name] || [];
        return uniquePerks.map(name => {
            const icon = getPerkIcon(name);
            return `<span title="${tPerk(name)}">${icon}</span>`;
        }).join('');
    }

    if (route.challengeType === 'perks_random' || route.challengeType === 'all_random') {
        return '<span class="perk-label">?</span>';
    }

    return '';
}

function renderCurrentChallenge(route, currentStep) {
    const challengeEl = document.getElementById('krCurrentChallenge');
    const portrait = document.getElementById('krPortrait');
    const nameEl = document.getElementById('krKillerName');
    const perksEl = document.getElementById('krChallengePerks');
    const btnWin = document.getElementById('btnRouteWin');
    const btnLose = document.getElementById('btnRouteLose');

    if (currentStep === -1 || currentStep >= route.killers.length) {
        challengeEl.style.display = 'none';
        return;
    }

    challengeEl.style.display = '';

    const step = route.killers[currentStep];
    const killer = KILLERS.find(k => k.id === step.id);
    challengeEl.dataset.killerId = killer.id;

    if (!route.activeKiller) {
        portrait.classList.remove('active');
        portrait.innerHTML = '<span class="killer-placeholder-icon">?</span>';
        nameEl.textContent = 'Presiona INICIAR DESAFÍO';
        perksEl.innerHTML = '';
        btnWin.disabled = true;
        btnLose.disabled = true;
        return;
    }

    portrait.classList.add('active');
    const fb = killer.id === 43 ? '🔪' : '?';
    portrait.innerHTML = `<img src="${killer.image}" alt="${tKiller(killer.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:14px" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\'>${fb}</div>'">`;
    nameEl.textContent = tKiller(killer.name);

    const perks = route.activePerks || [];
    if (perks.length > 0) {
        perksEl.innerHTML = perks.map(name => {
            const icon = getPerkIcon(name);
            return `<div class="perk-slot filled" title="${tPerk(name)}">${icon}<span class="perk-slot-name">${tPerk(name)}</span></div>`;
        }).join('');
    } else if (route.challengeType === 'no_restriction') {
        perksEl.innerHTML = '<div style="font-family:var(--font-retro);font-size:9px;color:#888">SIN RESTRICCIÓN DE PERKS</div>';
    } else if (route.challengeType === 'perks_unique') {
        perksEl.innerHTML = '<div style="font-family:var(--font-retro);font-size:9px;color:var(--color-gold)">PERKS ÚNICAS DEL KILLER</div>';
    } else {
        perksEl.innerHTML = '<div style="font-family:var(--font-retro);font-size:9px;color:#888">PERKS POR ASIGNAR</div>';
    }

    btnWin.disabled = false;
    btnLose.disabled = false;
}

function startChallenge() {
    const route = krState.routes.find(r => r.id === krState.currentRouteId);
    if (!route || createState.isRandomizing) return;

    const currentStep = route.progress.findIndex(s => s !== 'completed');
    if (currentStep === -1 || currentStep >= route.killers.length) return;

    const step = route.killers[currentStep];
    const killer = KILLERS.find(k => k.id === step.id);

    playSound('select');

    const perks = getPerksForStep(route, currentStep);
    route.activeKiller = killer.id;
    route.activePerks = perks;
    saveState();

    const portrait = document.getElementById('krPortrait');
    portrait.classList.add('active');
    const fb = killer.id === 43 ? '🔪' : '?';
    portrait.dataset.killerId = killer.id;
    portrait.innerHTML = `<img src="${killer.image}" alt="${tKiller(killer.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:14px" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\'>${fb}</div>'">`;
    document.getElementById('krKillerName').textContent = tKiller(killer.name);

    renderPlayView();
    showToast(`${tKiller(killer.name).toUpperCase()} - Desafío iniciado`, 'info');
}

function markRouteWin() {
    const route = krState.routes.find(r => r.id === krState.currentRouteId);
    if (!route || !route.activeKiller) return;

    const currentStep = route.progress.findIndex(s => s !== 'completed');
    if (currentStep === -1) return;

    route.progress[currentStep] = 'completed';

    const completed = route.killers.filter((k, i) => route.progress[i] === 'completed').length;
    const total = route.killers.length;

    saveState();

    if (completed === total) {
        route.activeKiller = null;
        route.activePerks = null;
        saveState();
        playSound('win');
        showToast('RUTA COMPLETADA', 'success');
        renderPlayView();
        renderRoutesList();
        return;
    }

    const nextStep = route.progress.findIndex(s => s !== 'completed');
    const nextStepData = route.killers[nextStep];
    const nextKiller = KILLERS.find(k => k.id === nextStepData.id);

    route.activeKiller = nextKiller.id;
    route.activePerks = getPerksForStep(route, nextStep);
    saveState();

    playSound('advance');
    showToast(`Avanzando al siguiente paso: ${tKiller(nextKiller.name).toUpperCase()}`, 'success');

    renderPlayView();
    renderRoutesList();
}

function markRouteLose() {
    const route = krState.routes.find(r => r.id === krState.currentRouteId);
    if (!route || !route.activeKiller) return;

    playSound('lose');

    route.progress = route.killers.map(() => 'pending');
    route.activeKiller = null;
    route.activePerks = null;

    const mainEl = document.querySelector('.app-container');
    mainEl.classList.add('reset-flash');
    setTimeout(() => mainEl.classList.remove('reset-flash'), 600);

    saveState();

    showToast('DERROTA - Ruta reiniciada al inicio', 'error');
    renderPlayView();
    renderRoutesList();
}

function setupCreateViewListeners() {
    document.getElementById('btnCreateRoute').addEventListener('click', () => {
        createState = { name: '', challengeType: 'perks_random', selectedPerks: [], selectedKillerIds: [], isRandomizing: false };
        document.getElementById('routeNameInput').value = '';
        showView('create');
        renderCreateView();
    });

    document.getElementById('btnCancelCreate').addEventListener('click', () => {
        showView('list');
    });

    document.getElementById('routeNameInput').addEventListener('input', (e) => {
        createState.name = e.target.value;
    });

    document.querySelectorAll('.kr-challenge-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.kr-challenge-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            createState.challengeType = btn.dataset.type;
            renderPerksSelector();
        });
    });

    document.getElementById('killerSelector').addEventListener('click', (e) => {
        const item = e.target.closest('.kr-killer-select-item');
        if (!item) return;
        const kid = parseInt(item.dataset.killerId);
        const idx = createState.selectedKillerIds.indexOf(kid);
        if (idx === -1) {
            createState.selectedKillerIds.push(kid);
        } else {
            createState.selectedKillerIds.splice(idx, 1);
        }
        renderCreateView();
    });

    document.getElementById('routeOrder').addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.kr-order-remove');
        if (!removeBtn) return;
        const kid = parseInt(removeBtn.dataset.killerId);
        createState.selectedKillerIds = createState.selectedKillerIds.filter(id => id !== kid);
        renderRouteOrder();
    });

    const routeOrder = document.getElementById('routeOrder');
    routeOrder.addEventListener('dragstart', (e) => {
        const item = e.target.closest('.kr-order-item');
        if (item) e.dataTransfer.setData('text/plain', item.dataset.killerId);
    });
    routeOrder.addEventListener('dragover', (e) => e.preventDefault());
    routeOrder.addEventListener('drop', (e) => {
        e.preventDefault();
        const target = e.target.closest('.kr-order-item');
        const draggedId = Number(e.dataTransfer.getData('text/plain'));
        if (!target || !draggedId) return;
        const targetId = Number(target.dataset.killerId);
        const from = createState.selectedKillerIds.indexOf(draggedId);
        const to = createState.selectedKillerIds.indexOf(targetId);
        if (from === -1 || to === -1 || from === to) return;
        createState.selectedKillerIds.splice(from, 1);
        createState.selectedKillerIds.splice(to, 0, draggedId);
        renderRouteOrder();
    });

    document.getElementById('btnSaveRoute').addEventListener('click', () => {
        if (!createState.name.trim()) {
            showToast('Ingresa un nombre para la ruta', 'error');
            return;
        }
        if (createState.selectedKillerIds.length < 2) {
            showToast('La ruta debe tener al menos 2 killers', 'error');
            return;
        }

        const newRoute = {
            id: generateId(),
            name: createState.name.trim(),
            challengeType: createState.challengeType,
            killers: createState.selectedKillerIds.map(kid => ({ id: kid })),
            progress: createState.selectedKillerIds.map(() => 'pending'),
            activeKiller: null,
            activePerks: null
        };

        krState.routes.push(newRoute);
        saveState();
        showView('list');
        renderRoutesList();
        showToast(`Ruta "${newRoute.name}" creada`, 'success');
    });
}

function setupPlayViewListeners() {
    document.getElementById('krRoutesGrid').addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.kr-route-card-delete');
        if (deleteBtn) {
            e.stopPropagation();
            const routeId = deleteBtn.dataset.routeId;
            const route = krState.routes.find(r => r.id === routeId);
            document.getElementById('deleteRouteText').textContent = `¿Estás seguro de eliminar "${route.name}"? Se perderá todo el progreso.`;
            document.getElementById('btnConfirmDeleteRoute').onclick = () => {
                krState.routes = krState.routes.filter(r => r.id !== routeId);
                saveState();
                renderRoutesList();
                document.getElementById('deleteRouteModal').classList.remove('active');
                showToast('Ruta eliminada', 'info');
            };
            document.getElementById('deleteRouteModal').classList.add('active');
            return;
        }

        const card = e.target.closest('.kr-route-card');
        if (!card) return;
        const routeId = card.dataset.routeId;
        krState.currentRouteId = routeId;
        showView('play');
        renderPlayView();
    });

    document.getElementById('btnBackToList').addEventListener('click', () => {
        krState.currentRouteId = null;
        showView('list');
        renderRoutesList();
    });

    document.getElementById('btnStartRoute').addEventListener('click', startChallenge);
    document.getElementById('btnRouteWin').addEventListener('click', markRouteWin);
    document.getElementById('btnRouteLose').addEventListener('click', markRouteLose);

    document.getElementById('btnResetRoute').addEventListener('click', () => {
        document.getElementById('resetRouteModal').classList.add('active');
    });

    document.getElementById('btnConfirmResetRoute').addEventListener('click', () => {
        const route = krState.routes.find(r => r.id === krState.currentRouteId);
        if (route) {
            route.progress = route.killers.map(() => 'pending');
            route.activeKiller = null;
            route.activePerks = null;
            saveState();
            renderPlayView();
            showToast('Ruta reiniciada', 'info');
        }
        document.getElementById('resetRouteModal').classList.remove('active');
    });

    document.getElementById('btnCancelResetRoute').addEventListener('click', () => {
        document.getElementById('resetRouteModal').classList.remove('active');
    });

    document.getElementById('btnCancelDeleteRoute').addEventListener('click', () => {
        document.getElementById('deleteRouteModal').classList.remove('active');
    });

    document.getElementById('configBtn').addEventListener('click', () => {
        krState.soundEnabled = !krState.soundEnabled;
        updateConfigBtn();
        saveState();
    });
}

function updateConfigBtn() {
    const btn = document.getElementById('configBtn');
    btn.textContent = krState.soundEnabled ? '🔊' : '🔇';
}

function init() {
    loadState();
    updateConfigBtn();

    setupCreateViewListeners();
    setupPlayViewListeners();
    setupLockedNav();

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    renderRoutesList();
}

function setupLockedNav() {
    document.querySelectorAll('[data-locked]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('🚧 En construcción — disponible próximamente', 'warning');
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
