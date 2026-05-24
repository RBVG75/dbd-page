const TIER_COLORS = {
    S: { bg: "#ff2d2d", text: "#1a1a1a", label: "S" },
    A: { bg: "#ff8c00", text: "#1a1a1a", label: "A" },
    B: { bg: "#ffd700", text: "#1a1a1a", label: "B" },
    C: { bg: "#4caf50", text: "#1a1a1a", label: "C" },
    D: { bg: "#607d8b", text: "#1a1a1a", label: "D" }
};

const KILLER_STATS = {
    "The Trapper":          { mapPressure: 20, chase: 20, easeOfUse: 80, adaptability: 10, addons: 60, mobility: 10 },
    "The Wraith":           { mapPressure: 40, chase: 60, easeOfUse: 100, adaptability: 30, addons: 70, mobility: 60 },
    "The Hillbilly":        { mapPressure: 95, chase: 90, easeOfUse: 15, adaptability: 90, addons: 80, mobility: 100 },
    "The Nurse":            { mapPressure: 95, chase: 100, easeOfUse: 5, adaptability: 95, addons: 70, mobility: 80 },
    "The Shape":            { mapPressure: 40, chase: 80, easeOfUse: 75, adaptability: 40, addons: 75, mobility: 10 },
    "The Hag":              { mapPressure: 25, chase: 20, easeOfUse: 60, adaptability: 15, addons: 40, mobility: 10 },
    "The Doctor":           { mapPressure: 55, chase: 75, easeOfUse: 75, adaptability: 20, addons: 55, mobility: 10 },
    "The Huntress":         { mapPressure: 50, chase: 65, easeOfUse: 15, adaptability: 65, addons: 30, mobility: 10 },
    "The Cannibal":         { mapPressure: 20, chase: 70, easeOfUse: 40, adaptability: 10, addons: 40, mobility: 20 },
    "The Nightmare":        { mapPressure: 75, chase: 75, easeOfUse: 70, adaptability: 85, addons: 65, mobility: 70 },
    "The Pig":              { mapPressure: 30, chase: 40, easeOfUse: 80, adaptability: 30, addons: 70, mobility: 15 },
    "The Clown":            { mapPressure: 35, chase: 85, easeOfUse: 70, adaptability: 25, addons: 75, mobility: 30 },
    "The Spirit":           { mapPressure: 79, chase: 95, easeOfUse: 20, adaptability: 80, addons: 80, mobility: 85 },
    "The Legion":           { mapPressure: 30, chase: 45, easeOfUse: 85, adaptability: 25, addons: 78, mobility: 27 },
    "The Plague":           { mapPressure: 65, chase: 70, easeOfUse: 65, adaptability: 45, addons: 100, mobility: 5 },
    "The Ghost Face":       { mapPressure: 25, chase: 35, easeOfUse: 77, adaptability: 27, addons: 73, mobility: 15 },
    "The Demogorgon":       { mapPressure: 30, chase: 80, easeOfUse: 65, adaptability: 40, addons: 30, mobility: 30 },
    "The Oni":              { mapPressure: 78, chase: 80, easeOfUse: 19, adaptability: 87, addons: 30, mobility: 80 },
    "The Deathslinger":     { mapPressure: 25, chase: 75, easeOfUse: 28, adaptability: 20, addons: 45, mobility: 10 },
    "The Executioner":      { mapPressure: 10, chase: 70, easeOfUse: 40, adaptability: 15, addons: 20, mobility: 10 },
    "The Blight":           { mapPressure: 90, chase: 90, easeOfUse: 20, adaptability: 85, addons: 90, mobility: 100 },
    "The Twins":            { mapPressure: 75, chase: 80, easeOfUse: 20, adaptability: 78, addons: 90, mobility: 65 },
    "The Trickster":        { mapPressure: 30, chase: 40, easeOfUse: 67, adaptability: 32, addons: 60, mobility: 5 },
    "The Nemesis":          { mapPressure: 25, chase: 60, easeOfUse: 70, adaptability: 20, addons: 30, mobility: 10 },
    "The Cenobite":         { mapPressure: 40, chase: 72, easeOfUse: 34, adaptability: 55, addons: 60, mobility: 18 },
    "The Artist":           { mapPressure: 85, chase: 72, easeOfUse: 24, adaptability: 60, addons: 65, mobility: 10 },
    "The Onryō":            { mapPressure: 70, chase: 40, easeOfUse: 28, adaptability: 30, addons: 25, mobility: 40 },
    "The Dredge":           { mapPressure: 65, chase: 55, easeOfUse: 35, adaptability: 20, addons: 60, mobility: 60 },
    "The Mastermind":       { mapPressure: 70, chase: 85, easeOfUse: 60, adaptability: 75, addons: 75, mobility: 80 },
    "The Knight":           { mapPressure: 55, chase: 40, easeOfUse: 70, adaptability: 60, addons: 60, mobility: 40 },
    "The Skull Merchant":   { mapPressure: 10, chase: 25, easeOfUse: 85, adaptability: 15, addons: 35, mobility: 20 },
    "The Singularity":      { mapPressure: 80, chase: 80, easeOfUse: 17, adaptability: 60, addons: 80, mobility: 70 },
    "The Xenomorph":        { mapPressure: 40, chase: 45, easeOfUse: 80, adaptability: 35, addons: 25, mobility: 65 },
    "The Good Guy":         { mapPressure: 25, chase: 65, easeOfUse: 40, adaptability: 50, addons: 60, mobility: 25 },
    "The Unknown":          { mapPressure: 45, chase: 55, easeOfUse: 35, adaptability: 60, addons: 45, mobility: 55 },
    "The Lich":             { mapPressure: 55, chase: 70, easeOfUse: 32, adaptability: 55, addons: 60, mobility: 40 },
    "The Dark Lord":        { mapPressure: 80, chase: 85, easeOfUse: 20, adaptability: 90, addons: 70, mobility: 75 },
    "The Houndmaster":      { mapPressure: 30, chase: 68, easeOfUse: 20, adaptability: 40, addons: 5, mobility: 40 },
    "The Ghoul":            { mapPressure: 85, chase: 75, easeOfUse: 75, adaptability: 80, addons: 75, mobility: 80 },
    "The Animatronic":      { mapPressure: 50, chase: 70, easeOfUse: 60, adaptability: 45, addons: 55, mobility: 50 },
    "The Krasue":           { mapPressure: 40, chase: 70, easeOfUse: 80, adaptability: 65, addons: 70, mobility: 65 },
    "The First":            { mapPressure: 75, chase: 75, easeOfUse: 20, adaptability: 78, addons: 45, mobility: 40 }
};

const TIERLIST_KILLERS = {
    S: ["The Nurse","The Blight", "The Hillbilly"],
    A: ["The Dark Lord", "The Spirit", "The Ghoul", "The Twins", "The Mastermind","The Oni", "The Singularity", "The Nightmare","The First"],
    B: ["The Krasue", "The Wraith", "The Artist", "The Plague", "The Animatronic", "The Unknown","The Dredge", "The Knight", "The Lich", "The Clown"],
    C: ["The Cenobite", "The Shape", "The Good Guy", "The Huntress", "The Doctor", "The Demogorgon", "The Xenomorph", "The Onryō", "The Legion", "The Houndmaster", "The Pig", "The Ghost Face","The Deathslinger", "The Trickster", "The Cannibal", "The Nemesis", "The Executioner","The Hag"],
    D: ["The Trapper", "The Skull Merchant"]
};

const TIERLIST_KILLER_PERKS = {
    S: [
        "Barbecue & Chili", "Corrupt Intervention", "Hex: No One Escapes Death",
        "Pain Resonance", "Pop Goes the Weasel", "Lethal Pursuer",
        "Nowhere to Hide", "Scourge Hook: Pain Resonance", "Deadlock"
    ],
    A: [
        "A Nurse's Calling", "Bamboozle", "Brutal Strength", "Dead Man's Switch",
        "Discordance", "Enduring", "Eruption", "Hex: Devour Hope",
        "Hex: Ruin", "Jolt", "Make Your Choice", "Mindbreaker",
        "Monitor & Abuse", "Save the Best for Last", "Sloppy Butcher",
        "Spirit Fury", "Hex: Plaything", "Hex: Pentimento", "No Way Out",
        "Starstruck", "Ultimate Weapon", "Grim Embrace", "Friends 'Til the End"
    ],
    B: [
        "Agitation", "Alien Instinct", "Batteries Included", "Blood Warden",
        "Call of Brine", "Coulrophobia", "Dark Devotion", "Dragon's Grip",
        "Dying Light", "Fire Up", "Forced Hesitation", "Forced Penance",
        "Furtive Chase", "Gearhead", "Hex: Blood Favor", "Hex: Crowd Control",
        "Hex: Haunted Ground", "Hex: Huntress Lullaby", "Hex: Retribution",
        "Hex: The Third Seal", "Hex: Thrill of the Hunt", "Hoarder",
        "Hubris", "I'm All Ears", "Infectious Fright", "Iron Grasp",
        "Iron Maiden", "Knock Out", "Leverage", "Lightborn",
        "Mad Grit", "Merciless Storm", "Nemesis", "Oppression",
        "Overcharge", "Overwhelming Presence", "Play With Your Food",
        "Rancor", "Rapid Brutality", "Remember Me", "Scourge Hook: Gift of Pain",
        "Septic Touch", "Shadowborn", "Superior Anatomy", "Surge",
        "Surveillance", "Terminus", "Thanatophobia", "Thrilling Tremors",
        "Tinkerer", "Trail of Torment", "Undone", "Wandering Eye",
        "Zanshin Tactics", "Dark Arrogance", "Dissolution", "Game Afoot",
        "Hex: Face the Darkness", "Hysteria", "Machine Learning",
        "No Quarter", "Phantom Fear", "Ravenous", "Shattered Hope",
        "Thwack!", "Two Can Play", "Unbound", "Unforeseen",
        "Weave Attunement", "Hex: Wretched Fate", "None Are Free",
        "All Shaking Thunder", "Forever Entwined", "Help Wanted",
        "Hex: Overture of Doom", "No Holds Barred", "Human Greed",
        "Darkness Revealed", "Awakened Awareness", "Languid Touch",
        "Coup de GrÃ¢ce", "Dominance", "Weeping Wounds", "Scourge Hook: Jagged Compass"
    ],
    C: [
        "Beast of Prey", "Bitter Murmur", "Blood Echo", "Blood Favor",
        "Bloodhound", "Cruel Limits", "Deerstalker", "Distressing",
        "Franklin's Demise", "Hangman's Trick", "Insidious", "Predator",
        "Self-Aware", "Spies from the Shadows", "Stridor",
        "Territorial Imperative", "Unnerving Presence", "Unrelenting",
        "Whispers", "Flood of Rage", "Haywire", "ImAllEars",
        "Genetic Limits", "Nothing But Misery"
    ],
    D: [
        "Deathbound", "Fire Up (old)", "Monstrous Shrine", "Prove Thyself (killer)",
        "Self-Care (killer)", "Small Game (killer)"
    ]
};

const TIERLIST_SURVIVOR_PERKS = {
    S: [
        "Adrenaline", "Dead Hard", "Decisive Strike", "Lithe",
        "Sprint Burst", "Unbreakable", "Windows of Opportunity",
        "Boon: Circle of Healing", "Iron Will", "Off the Record"
    ],
    A: [
        "Balanced Landing", "Bond", "Borrowed Time", "Deja Vu",
        "Distortion", "Empathy", "Head On", "Inner Strength",
        "Kindred", "Made for This", "Prove Thyself",
        "Quick & Quiet", "Reassurance", "Resilience",
        "Self-Care", "Small Game", "Spine Chill",
        "We're Gonna Live Forever", "Wiretap", "Blast Mine",
        "Chemical Trap", "Dramaturgy", "Finesse", "Hardened"
    ],
    B: [
        "Alert", "Any Means Necessary", "Appraisal", "Autodidact",
        "Babysitter", "Background Player", "Better Than New",
        "Bite the Bullet", "Blood Rush", "Botany Knowledge",
        "Breakout", "Built to Last", "Calm Spirit", "Champion of Light",
        "Clairvoyance", "Corrective Action", "Cut Loose",
        "Dance With Me", "Dark Sense", "Deadline",
        "Deliverance", "Desperate Measures", "Detective's Hunch",
        "Diversion", "Empathic Connection", "Fast Track",
        "Flashbang", "Flip-Flop", "Fogwise", "Hope",
        "Inner Focus", "Lucky Break", "Lucky Star",
        "Mettle of Man", "Overcome", "Overzealous",
        "Parental Guidance", "Pharmacy", "Plunderer's Instinct",
        "Poised", "Potential Energy", "Power Struggle",
        "Quick Gambit", "Renewal", "Residual Manifest",
        "Saboteur", "Scene Partner", "Self-Preservation",
        "Smash Hit", "Solidarity", "Soul Guard",
        "Stake Out", "Streetwise", "Teamwork: Collective Stealth",
        "Teamwork: Power of Two", "Technician", "Tenacity",
        "Troubleshooter", "Up the Ante", "Urban Evasion",
        "Wake Up!", "We'll Make It", "Boon: Dark Theory",
        "Boon: Exponential", "Boon: Illumination", "Boon: Shadow Step",
        "Reactive Healing", "Scavenger", "Specialist", "Light-Footed",
        "Mirrored Illusion", "Still Sight", "Bardic Inspiration",
        "Exultation", "Eyes of Belmont", "Hyperfocus"
    ],
    C: [
        "Ace in the Hole", "Aftercare", "Better Together",
        "Buckle Up", "Camaraderie", "Counterforce",
        "Fixated", "Left Behind", "Lightweight",
        "No Mither", "No One Left Behind", "Object of Obsession",
        "Open-Handed", "Premonition", "Red Herring",
        "Repressed Alliance", "Resurgence", "Rookie Spirit",
        "Second Wind", "Slippery Meat", "Sole Survivor",
        "This Is Not Happening", "Vigil", "Visionary",
        "Low Profile", "For the People", "Plot Twist",
        "Wicked", "Strength in Shadows",
        "Invocation: Weaving Spiders"
    ],
    D: [
        "Blood Pact", "Breakdown", "Hope (old)",
        "Leader (old)", "Premonition (old)", "We'll Make It (old)"
    ]
};

const TIERS = ["S", "A", "B", "C", "D"];

const STAT_LABELS = {
    mapPressure: "Presion en Mapa",
    chase: "Chase",
    easeOfUse: "Facilidad de Uso",
    adaptability: "Adaptabilidad",
    addons: "Accesorios",
    mobility: "Movilidad"
};

let currentSortStat = null;
let currentSortOrder = "desc";
let selectedTiers = new Set(["S", "A", "B", "C", "D"]);

function renderSorter() {
    const container = document.getElementById("tlSorter");
    if (!container) return;

    const statOpts = Object.entries(STAT_LABELS).map(([k, v]) =>
        `<option value="${k}"${currentSortStat === k ? ' selected' : ''}>${v}</option>`
    ).join("");

    let chipsHTML = "";
    chipsHTML += `<button class="tl-tier-chip tl-tier-chip--all${selectedTiers.size === 5 ? ' tl-tier-chip--active' : ''}" data-tier="all">TODAS</button>`;
    TIERS.forEach(t => {
        chipsHTML += `<button class="tl-tier-chip${selectedTiers.has(t) ? ' tl-tier-chip--active' : ''}" data-tier="${t}">${t}</button>`;
    });

    container.innerHTML = `
        <div class="tl-sorter-inner">
            <span class="tl-sorter-label">Ordenar:</span>
            <select class="tl-sorter-select" id="tlSortStat">
                <option value="">Sin ordenar</option>
                ${statOpts}
            </select>
            <button class="tl-sorter-order" id="tlSortOrder" title="${currentSortOrder === 'desc' ? 'Descendente' : 'Ascendente'}">
                ${currentSortOrder === 'desc' ? '▼' : '▲'}
            </button>
            <span class="tl-sorter-label">Tiers:</span>
            <div class="tl-tier-chips" id="tlTierChips">
                ${chipsHTML}
            </div>
        </div>
    `;

    document.getElementById("tlSortStat").addEventListener("change", (e) => {
        currentSortStat = e.target.value || null;
        renderTierlist(currentType);
    });
    document.getElementById("tlSortOrder").addEventListener("click", () => {
        currentSortOrder = currentSortOrder === "desc" ? "asc" : "desc";
        renderTierlist(currentType);
    });
    document.getElementById("tlTierChips").addEventListener("click", (e) => {
        const chip = e.target.closest(".tl-tier-chip");
        if (!chip) return;
        const tier = chip.dataset.tier;
        if (tier === "all") {
            if (selectedTiers.size === 5) selectedTiers.clear();
            else { selectedTiers.clear(); TIERS.forEach(t => selectedTiers.add(t)); }
        } else {
            if (selectedTiers.has(tier)) selectedTiers.delete(tier);
            else selectedTiers.add(tier);
            if (selectedTiers.size === 0) TIERS.forEach(t => selectedTiers.add(t));
        }
        renderTierlist(currentType);
    });
}

function sortKillerItems(items) {
    if (!currentSortStat) return items;
    return [...items].sort((a, b) => {
        const sa = KILLER_STATS[a] ? (KILLER_STATS[a][currentSortStat] || 0) : 0;
        const sb = KILLER_STATS[b] ? (KILLER_STATS[b][currentSortStat] || 0) : 0;
        return currentSortOrder === "desc" ? sb - sa : sa - sb;
    });
}

let currentType = "killers";

function renderTierlist(type) {
    const container = document.getElementById("tlContent");
    const sorter = document.getElementById("tlSorter");
    let data;

    switch (type) {
        case "killers":
            data = TIERLIST_KILLERS;
            sorter.classList.add("tl-sorter--visible");
            renderSorter();
            break;
        case "perks_killer":
            data = TIERLIST_KILLER_PERKS;
            sorter.classList.remove("tl-sorter--visible");
            break;
        case "perks_survivor":
            data = TIERLIST_SURVIVOR_PERKS;
            sorter.classList.remove("tl-sorter--visible");
            break;
    }

    let html = "";

    TIERS.forEach(tier => {
        if (!selectedTiers.has(tier) && type === "killers") return;
        const items = data[tier] || [];
        const sortedItems = type === "killers" ? sortKillerItems(items) : items;
        const colors = TIER_COLORS[tier];

        html += `
            <div class="tl-tier">
                <div class="tl-tier-header" style="background: ${colors.bg}; color: ${colors.text};">
                    <span class="tl-tier-label">${colors.label}</span>
                    <span class="tl-tier-count">${sortedItems.length}</span>
                </div>
                <div class="tl-tier-items">
                    ${sortedItems.map(item => renderTierItem(item, type)).join("")}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    attachTooltipEvents();
}

function renderTierItem(item, type) {
    if (type === "killers") {
        const killer = KILLERS.find(k => k.name === item);
        const image = killer ? killer.image : "";
        const isNurse = item === "The Nurse";
        return `
            <div class="tl-item tl-item-killer${isNurse ? ' tl-item-nurse' : ''}" data-killer-name="${item}">
                ${isNurse ? '<span class="tl-crown" title="Chase superior - Top Tier">👑</span>' : ''}
                <img src="${image}" alt="${item}" class="tl-killer-portrait" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <span class="tl-item-fallback">${item.substring(0,2).toUpperCase()}</span>
                <span class="tl-item-name">${item}</span>
            </div>
        `;
    } else {
        const file = PERK_IMAGE_MAP ? PERK_IMAGE_MAP[item] : null;
        const imgPath = type === "perks_killer"
            ? `assets/images/perks_killers/${file}.png`
            : null;
        if (file) {
            return `
                <div class="tl-item tl-item-perk">
                    <img src="${imgPath}" alt="${item}" class="tl-perk-icon" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                    <span class="tl-item-fallback">P</span>
                    <span class="tl-item-name">${item}</span>
                </div>
            `;
        }
        const icon = type === "perks_killer"
            ? (PERKS.find(p => p.name === item) ? PERKS.find(p => p.name === item).icon : "ðŸ”®")
            : "ðŸ”·";
        return `
            <div class="tl-item tl-item-perk">
                <span class="tl-perk-emoji">${icon}</span>
                <span class="tl-item-name">${item}</span>
            </div>
        `;
    }
}

function initTierlist() {
    currentType = new URLSearchParams(window.location.search).get("type") || "killers";
    document.getElementById("tlTabKillers").classList.toggle("active", currentType === "killers");
    document.getElementById("tlTabPerksKiller").classList.toggle("active", currentType === "perks_killer");
    document.getElementById("tlTabPerksSurvivor").classList.toggle("active", currentType === "perks_survivor");
    renderTierlist(currentType);

    document.getElementById("tlTabKillers").addEventListener("click", () => {
        setActiveTab("killers");
    });
    document.getElementById("tlTabPerksKiller").addEventListener("click", () => {
        setActiveTab("perks_killer");
    });
    document.getElementById("tlTabPerksSurvivor").addEventListener("click", () => {
        setActiveTab("perks_survivor");
    });
}

function setActiveTab(type) {
    currentType = type;
    document.querySelectorAll(".tl-tab").forEach(t => t.classList.remove("active"));
    document.getElementById(
        type === "killers" ? "tlTabKillers" :
        type === "perks_killer" ? "tlTabPerksKiller" : "tlTabPerksSurvivor"
    ).classList.add("active");
    window.history.replaceState(null, "", `?type=${type}`);
    renderTierlist(type);
}

let tooltipVisible = false;

function positionTooltip(e) {
    const tip = document.getElementById("tlKillerTooltip");
    if (!tip) return;
    const rect = tip.getBoundingClientRect();
    let x = e.clientX + 16;
    let y = e.clientY - rect.height / 2;
    if (x + rect.width > window.innerWidth - 16) x = e.clientX - rect.width - 16;
    if (y < 8) y = 8;
    if (y + rect.height > window.innerHeight - 8) y = window.innerHeight - rect.height - 8;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
}

function showKillerTooltip(e, killerName) {
    const tip = document.getElementById("tlKillerTooltip");
    if (!tip) return;
    const stats = KILLER_STATS[killerName];
    if (!stats) return;
    const killer = KILLERS.find(k => k.name === killerName);
    const image = killer ? killer.image : "";

    const labels = {
        mapPressure: "Presion en Mapa",
        chase: "Chase",
        easeOfUse: "Facilidad de Uso",
        adaptability: "Adaptabilidad",
        addons: "Accesorios",
        mobility: "Movilidad"
    };

    const barColor = (v) => {
        if (v >= 80) return "#ff2d2d";
        if (v >= 60) return "#ff8c00";
        if (v >= 40) return "#ffd700";
        if (v >= 20) return "#4caf50";
        return "#607d8b";
    };

    let barsHTML = "";
    for (const [key, label] of Object.entries(labels)) {
        const val = stats[key] || 1;
        const isMax = val >= 100;
        const isNurseChase = killerName === "The Nurse" && key === "chase";
        barsHTML += `
            <div class="tl-stat-row${isMax ? ' tl-stat-row--max' : ''}${isNurseChase ? ' tl-stat-row--nurse-chase' : ''}">
                <span class="tl-stat-label">${label}${isMax ? ' <span class="tl-stat-max-badge">MAX</span>' : ''}</span>
                <div class="tl-stat-bar-track">
                    <div class="tl-stat-bar-fill${isMax ? ' tl-stat-bar-fill--max' : ''}" style="width:${val}%;background:${barColor(val)}"></div>
                </div>
            </div>
        `;
    }

    tip.innerHTML = `
        <div class="tl-tooltip-header">
            <img src="${image}" alt="${killerName}" class="tl-tooltip-portrait" onerror="this.style.display='none'">
            <span class="tl-tooltip-name">${killerName}</span>
        </div>
        <div class="tl-tooltip-stats">
            ${barsHTML}
        </div>
    `;

    tip.style.display = "block";
    tooltipVisible = true;
    positionTooltip(e);
}

function hideKillerTooltip() {
    const tip = document.getElementById("tlKillerTooltip");
    if (tip) tip.style.display = "none";
    tooltipVisible = false;
}

function attachTooltipEvents() {
    const container = document.getElementById("tlContent");
    if (!container) return;

    container.addEventListener("mouseenter", (e) => {
        const item = e.target.closest(".tl-item-killer");
        if (!item) return;
        const killerName = item.dataset.killerName;
        if (killerName) showKillerTooltip(e, killerName);
    }, true);

    container.addEventListener("mouseleave", (e) => {
        const item = e.target.closest(".tl-item-killer");
        if (!item) return;
        hideKillerTooltip();
    }, true);

    container.addEventListener("mousemove", (e) => {
        if (!tooltipVisible) return;
        const item = e.target.closest(".tl-item-killer");
        if (!item) return;
        positionTooltip(e);
    });
}

document.addEventListener("DOMContentLoaded", initTierlist);
