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
function perkNameToImageFile(name) {
    return PERK_IMAGE_MAP[name] || null;
}
function getPerkIcon(name) {
    const file = perkNameToImageFile(name);
    if (file) return `<img src="assets/images/perks_killers/${file}.png" alt="${name}" class="perk-image" onerror="this.outerHTML='<span class=\'perk-fallback\'>❓</span>'">`;
    const perkObj = PERKS.find(p => p.name === name);
    return perkObj ? perkObj.icon : '❓';
}

const KILLER_UNIQUE_PERKS = {
    "The Trapper": [
        "Unnerving Presence",
        "Brutal Strength",
        "Agitation"
    ],
    "The Wraith": [
        "Predator",
        "Bloodhound",
        "Shadowborn"
    ],
    "The Hillbilly": [
        "Enduring",
        "Lightborn",
        "Tinkerer"
    ],
    "The Nurse": [
        "Stridor",
        "Thanatophobia",
        "A Nurse's Calling"
    ],
    "The Shape": [
        "Save the Best for Last",
        "Play With Your Food",
        "Dying Light"
    ],
    "The Hag": [
        "Hex: Ruin",
        "Hex: Devour Hope",
        "Hex: The Third Seal"
    ],
    "The Doctor": [
        "Overwhelming Presence",
        "Monitor & Abuse",
        "Overcharge"
    ],
    "The Huntress": [
        "Beast of Prey",
        "Territorial Imperative",
        "Hex: Huntress Lullaby"
    ],
    "The Cannibal": [
        "Knock Out",
        "Barbecue & Chili",
        "Franklin's Demise"
    ],
    "The Nightmare": [
        "Fire Up",
        "Remember Me",
        "Blood Warden"
    ],
    "The Pig": [
        "Hangman's Trick",
        "Surveillance",
        "Make Your Choice"
    ],
    "The Clown": [
        "Bamboozle",
        "Coulrophobia",
        "Pop Goes the Weasel"
    ],
    "The Spirit": [
        "Spirit Fury",
        "Hex: Haunted Ground",
        "Rancor"
    ],
    "The Legion": [
        "Discordance",
        "Mad Grit",
        "Iron Maiden"
    ],
    "The Plague": [
        "Corrupt Intervention",
        "Infectious Fright",
        "Dark Devotion"
    ],
    "The Ghost Face": [
        "I'm All Ears",
        "Thrilling Tremors",
        "Furtive Chase"
    ],
    "The Demogorgon": [
        "Surge",
        "Cruel Limits",
        "Mindbreaker"
    ],
    "The Oni": [
        "Zanshin Tactics",
        "Blood Echo",
        "Nemesis"
    ],
    "The Deathslinger": [
        "Gearhead",
        "Dead Man's Switch",
        "Hex: Retribution"
    ],
    "The Executioner": [
        "Forced Penance",
        "Trail of Torment",
        "Deathbound"
    ],
    "The Blight": [
        "Dragon's Grip",
        "Hex: Blood Favor",
        "Undying"
    ],
    "The Twins": [
        "Hoarder",
        "Oppression",
        "Coup de Grâce"
    ],
    "The Trickster": [
        "Starstruck",
        "Hex: Crowd Control",
        "No Way Out"
    ],
    "The Nemesis": [
        "Lethal Pursuer",
        "Hysteria",
        "Eruption"
    ],
    "The Cenobite": [
        "Deadlock",
        "Hex: Plaything",
        "Scourge Hook: Gift of Pain"
    ],
    "The Artist": [
        "Grim Embrace",
        "Hex: Pentimento",
        "Scourge Hook: Pain Resonance"
    ],
    "The Onryō": [
        "Call of Brine",
        "Merciless Storm",
        "Floods of Rage"
    ],
    "The Dredge": [
        "Dissolution",
        "Darkness Revealed",
        "Septic Touch"
    ],
    "The Mastermind": [
        "Superior Anatomy",
        "Awakened Awareness",
        "Terminus"
    ],
    "The Knight": [
        "Nowhere to Hide",
        "Hex: Face the Darkness",
        "Hubris"
    ],
    "The Skull Merchant": [
        "Game Afoot",
        "Leverage",
        "Thwack!"
    ],
    "The Singularity": [
        "Genetic Limits",
        "Forced Hesitation",
        "Machine Learning"
    ],
    "The Xenomorph": [
        "Alien Instinct",
        "Ultimate Weapon",
        "Rapid Brutality"
    ],
    "The Good Guy": [
        "Batteries Included",
        "Friends 'Til the End",
        "Two Can Play"
    ],
    "The Unknown": [
        "Unbound",
        "Unforeseen",
        "Undone"
    ],
    "The Lich": [
        "Dark Arrogance",
        "Languid Touch",
        "Weave Attunement"
    ],
    "The Dark Lord": [
        "Human Greed",
        "Hex: Wretched Fate",
        "Dominance"
    ],
    "The Houndmaster": [
        "All-Shaking Thunder",
        "No Quarter",
        "Scourge Hook: Jagged Compass"
    ],
    "The Ghoul": [
        "Forever Entwined",
        "None Are Free",
        "Hex: Nothing But Misery"
    ],
    "The Animatronic": [
        "Haywire",
        "Help Wanted",
        "Phantom Fear"
    ],
    "The Krasue": [
        "Hex: Overture of Doom",
        "Ravenous",
        "Wandering Eye"
    ],
    "The First": [
        "Hex: Hive Mind",
        "Secret Project",
        "Turn Back the Clock"
    ],

    "Jason Voorhees": [
        "Hex: Scared to Death",
        "Rampage",
        "Silent Shadow"
    ],

    "The Judgment": [
        "Celestial Witness",
        "Hex: Under Your Thumb",
        "Lay Waste"
    ]
};

const UK_STORAGE_KEY = 'dbd_unique_killer_challenge_v1';

let ukState = {
    history: [],
    isRandomizing: false,
    soundEnabled: true,
    mode: 'random'
};

let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playSound(type) {
    if (!ukState.soundEnabled) return;
    try {
        initAudio();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        const now = audioCtx.currentTime;

        switch (type) {
            case 'randomize':
                osc.type = 'square';
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.linearRampToValueAtTime(800, now + 0.15);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.15);
                osc.start(now);
                osc.stop(now + 0.15);
                break;
            case 'cycle':
                osc.type = 'square';
                osc.frequency.setValueAtTime(400 + Math.random() * 300, now);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
                break;
            case 'perkReveal':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.setValueAtTime(880, now + 0.1);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.25);
                osc.start(now);
                osc.stop(now + 0.25);
                break;
            case 'select':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.linearRampToValueAtTime(1200, now + 0.2);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.3);
                osc.start(now);
                osc.stop(now + 0.3);
                break;
        }
    } catch (e) {}
}

function saveState() {
    try {
        localStorage.setItem(UK_STORAGE_KEY, JSON.stringify({
            history: ukState.history,
            soundEnabled: ukState.soundEnabled,
            mode: ukState.mode
        }));
    } catch (e) {}
}

function loadState() {
    try {
        const stored = localStorage.getItem(UK_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            ukState.history = parsed.history || [];
            ukState.soundEnabled = parsed.soundEnabled !== undefined ? parsed.soundEnabled : true;
            ukState.mode = parsed.mode === 'experto' ? 'experto' : 'random';
        }
    } catch (e) {}
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}

function renderHistory() {
    const listEl = document.getElementById('ukHistoryList');
    const statsEl = document.getElementById('ukTotalCount');

    if (ukState.history.length === 0) {
        listEl.innerHTML = '<div class="uk-history-empty">Aún no has randomizado</div>';
        statsEl.textContent = '0 killers randomizados';
        return;
    }

    listEl.innerHTML = ukState.history.slice().reverse().map(entry => {
        const killer = KILLERS.find(k => k.id === entry.killerId);
        if (!killer) return '';
        const perks = entry.perks || KILLER_UNIQUE_PERKS[killer.name] || [];
        const perkImages = perks.map(pn => {
            if (pn === SKIP_PERK) {
                return `<span class="uk-history-perk-skip" title="Opcional">✕</span>`;
            }
            const html = getPerkIcon(pn);
            return `<span title="${tPerk(pn)}">${html}</span>`;
        }).join(' ');

        const modeTag = entry.mode === 'random'
            ? '<span class="uk-history-mode uk-history-mode-random">R</span>'
            : '<span class="uk-history-mode uk-history-mode-experto">E</span>';

        return `<div class="uk-history-item" data-killer-id="${killer.id}"
                     onmouseenter="showHistTooltip(event, ${killer.id}, ${JSON.stringify(perks).replace(/"/g, '&quot;')}, '${entry.mode || 'experto'}')"
                     onmouseleave="hideTooltip()">
                    <img src="${killer.image}" alt="${tKiller(killer.name)}" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\' style=\\'width:100%;height:100%;font-size:24px;\\'>🔪</div>'">
                    <span class="uk-history-item-name">${tKiller(killer.name).toUpperCase()}</span>
                    <span class="uk-history-item-perks">${perkImages}</span>
                    ${modeTag}
                </div>`;
    }).join('');

    statsEl.textContent = `${ukState.history.length} killer${ukState.history.length !== 1 ? 's' : ''} randomizado${ukState.history.length !== 1 ? 's' : ''}`;
}

function showHistTooltip(event, killerId, perksOverride, modeOverride) {
    const killer = KILLERS.find(k => k.id === killerId);
    const perks = perksOverride || KILLER_UNIQUE_PERKS[killer.name] || [];
    const mode = modeOverride || 'experto';
    const modeLabel = mode === 'random' ? 'PERKS RANDOM' : 'PERKS ÚNICAS';

    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
        <div class="tooltip-name"><img src="${killer.image}" alt="${tKiller(killer.name)}" style="width:24px;height:24px;border-radius:4px;vertical-align:middle;margin-right:6px">${tKiller(killer.name)}</div>
        <div style="margin-top:6px;font-family:var(--font-retro);font-size:7px;color:#888;letter-spacing:1px;margin-bottom:4px;">${modeLabel}</div>
        ${perks.map(p => {
            if (p === SKIP_PERK) {
                return `<div class="tooltip-stat"><span style="color:#888;font-style:italic;">✕ Opcional (puedes saltar)</span></div>`;
            }
            return `<div class="tooltip-stat"><span style="color:#aaa">${tPerk(p)}</span></div>`;
        }).join('')}
    `;
    tooltip.classList.add('visible');

    const rect = event.target.closest('.uk-history-item').getBoundingClientRect();
    let top = rect.bottom + 8;
    let left = rect.left;
    if (top + 160 > window.innerHeight) top = rect.top - 160;
    if (left + 220 > window.innerWidth) left = window.innerWidth - 230;
    if (left < 10) left = 10;
    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
}

function hideTooltip() {
    document.getElementById('tooltip').classList.remove('visible');
}

const SKIP_PERK = '__SKIP__';
const SKIP_PROBABILITY = 0.05;

function pickRandomPerks(count) {
    const pool = PERKS.slice();
    const result = [];
    for (let i = 0; i < count && pool.length > 0; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0].name);
    }
    if (result.length > 0 && Math.random() < SKIP_PROBABILITY) {
        result[result.length - 1] = SKIP_PERK;
    }
    return result;
}

async function randomizeUniqueKiller() {
    if (ukState.isRandomizing) return;
    ukState.isRandomizing = true;
    document.getElementById('btnRandomizeUnique').disabled = true;

    playSound('randomize');

    const selectedKiller = KILLERS[Math.floor(Math.random() * KILLERS.length)];
    const totalCycles = 18 + Math.floor(Math.random() * 12);
    let cycleCount = 0;

    const portrait = document.getElementById('ukPortrait');
    const nameEl = document.getElementById('ukKillerName');

    portrait.classList.add('active');

    await new Promise(resolve => {
        function doCycle() {
            if (cycleCount >= totalCycles) { resolve(); return; }
            const rk = KILLERS[Math.floor(Math.random() * KILLERS.length)];
            const fb = rk.id === 43 ? '🔪' : '?';
             portrait.innerHTML = `<img src="${rk.image}" alt="${tKiller(rk.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;opacity:0.7" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\' style=\\'opacity:0.7\\'>${fb}</div>'">`;
             nameEl.textContent = tKiller(rk.name);
            playSound('cycle');
            cycleCount++;
            const delay = 40 + (cycleCount * 8);
            setTimeout(doCycle, delay);
        }
        doCycle();
    });

    const selectedFb = selectedKiller.id === 43 ? '🔪' : '?';
    portrait.dataset.killerId = selectedKiller.id;
    portrait.innerHTML = `<img src="${selectedKiller.image}" alt="${tKiller(selectedKiller.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:12px" onerror="this.outerHTML='<div class=\\'killer-placeholder-fallback\\'>${selectedFb}</div>'">`;
    nameEl.textContent = tKiller(selectedKiller.name);

    playSound('select');

    const perks = ukState.mode === 'experto'
        ? (KILLER_UNIQUE_PERKS[selectedKiller.name] || [])
        : pickRandomPerks(4);

    ukState.history.push({
        killerId: selectedKiller.id,
        mode: ukState.mode,
        perks: perks
    });

    renderPerksSection(selectedKiller, perks);
    renderHistory();
    saveState();

    const modeTag = ukState.mode === 'experto' ? 'EXPERTO' : 'RANDOM';
    const hasOptional = perks.includes(SKIP_PERK);
    const realCount = perks.filter(p => p !== SKIP_PERK).length;
    const optionalTag = hasOptional ? ' (1 OPCIONAL)' : '';
    showToast(`${tKiller(selectedKiller.name).toUpperCase()} - ${realCount} perks [${modeTag}]${optionalTag}`, 'success');

    ukState.isRandomizing = false;
    document.getElementById('btnRandomizeUnique').disabled = false;
}

function renderPerksSection(killer, perks) {
    const perksList = document.getElementById('ukPerksList');

    if (!killer) {
        perksList.innerHTML = '<div class="uk-perk-empty">Presiona RANDOMIZAR para comenzar</div>';
        return;
    }

    if (perks.length === 0) {
        perksList.innerHTML = '<div class="uk-perk-empty">Sin perks disponibles</div>';
        return;
    }

    perksList.innerHTML = perks.map(perkName => {
        if (perkName === SKIP_PERK) {
            return `<div class="uk-perk-item uk-perk-item-skip" title="Puedes saltarte esta perk">
                        <span class="uk-perk-icon uk-perk-icon-skip">✕</span>
                        <div class="uk-perk-text">
                            <span class="uk-perk-name uk-perk-name-skip">OPCIONAL - PUEDES SALTAR</span>
                        </div>
                    </div>`;
        }
        const icon = getPerkIcon(perkName);
        return `<div class="uk-perk-item">
                    <span class="uk-perk-icon">${icon}</span>
                    <div class="uk-perk-text">
                        <span class="uk-perk-name">${tPerk(perkName).toUpperCase()}</span>
                    </div>
                </div>`;
    }).join('');
}

function setMode(mode, persist = true) {
    ukState.mode = mode === 'experto' ? 'experto' : 'random';
    const toggle = document.getElementById('ukModeToggle');
    toggle.classList.toggle('experto', ukState.mode === 'experto');

    document.getElementById('ukModeRandom').classList.toggle('active', ukState.mode === 'random');
    document.getElementById('ukModeExperto').classList.toggle('active', ukState.mode === 'experto');
    document.getElementById('ukModeRandom').setAttribute('aria-selected', ukState.mode === 'random');
    document.getElementById('ukModeExperto').setAttribute('aria-selected', ukState.mode === 'experto');

    document.getElementById('ukPerksTitle').textContent =
        ukState.mode === 'experto' ? 'PERKS ÚNICAS' : 'PERKS RANDOM';

    if (persist) saveState();
}

function init() {
    loadState();
    updateSoundBtn();
    setMode(ukState.mode, false);
    renderHistory();
    setupLockedNav();

    const perksList = document.getElementById('ukPerksList');
    perksList.innerHTML = '<div class="uk-perk-empty">Presiona RANDOMIZAR para comenzar</div>';

    document.getElementById('btnRandomizeUnique').addEventListener('click', randomizeUniqueKiller);

    document.getElementById('ukModeRandom').addEventListener('click', () => setMode('random'));
    document.getElementById('ukModeExperto').addEventListener('click', () => setMode('experto'));

    document.getElementById('configBtn').addEventListener('click', () => {
        ukState.soundEnabled = !ukState.soundEnabled;
        updateSoundBtn();
        saveState();
    });
}

function setupLockedNav() {
    document.querySelectorAll('[data-locked]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            showToast('🚧 En construcción — disponible próximamente', 'warning');
        });
    });
}

function updateSoundBtn() {
    const btn = document.getElementById('configBtn');
    btn.textContent = ukState.soundEnabled ? '🔊' : '🔇';
}

document.addEventListener('DOMContentLoaded', init);
