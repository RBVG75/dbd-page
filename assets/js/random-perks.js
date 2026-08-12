const RP_STORAGE_KEY = 'dbd_random_perks_only_v1';

const RP_DEFAULT_STATE = {
    soundEnabled: true,
    animationsEnabled: true,
    rollCount: 0,
    history: [],
    lastSide: null,
    currentPerks: [],
    excludedPerks: { killer: [], survivor: [] }
};

let rpState = {};
let rpAudioCtx = null;
let rpActiveSide = 'killer';
let rpIsRolling = false;
let rpSelectedSlot = null;

const KILLER_COLOR = 'var(--color-blood-bright)';
const SURVIVOR_COLOR = 'var(--color-toxic-bright)';

function getRpStoredState() {
    try {
        const stored = localStorage.getItem(RP_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return { ...RP_DEFAULT_STATE, ...parsed };
        }
    } catch (e) {
        console.error('Error loading rp state:', e);
    }
    return { ...RP_DEFAULT_STATE };
}

function saveRpState() {
    try {
        localStorage.setItem(RP_STORAGE_KEY, JSON.stringify(rpState));
    } catch (e) {
        console.error('Error saving rp state:', e);
    }
}

function initRpAudio() {
    if (!rpAudioCtx) {
        rpAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (rpAudioCtx.state === 'suspended') rpAudioCtx.resume();
}

function rpPlaySound(type) {
    if (!rpState.soundEnabled) return;
    try {
        initRpAudio();
        const osc = rpAudioCtx.createOscillator();
        const gain = rpAudioCtx.createGain();
        osc.connect(gain);
        gain.connect(rpAudioCtx.destination);
        const now = rpAudioCtx.currentTime;

        switch (type) {
            case 'randomize':
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(180, now);
                osc.frequency.linearRampToValueAtTime(600, now + 0.18);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.2);
                osc.start(now);
                osc.stop(now + 0.2);
                break;
            case 'cycle':
                osc.type = 'square';
                osc.frequency.setValueAtTime(380 + Math.random() * 300, now);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
                break;
            case 'perk':
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(520 + Math.random() * 400, now);
                gain.gain.setValueAtTime(0.06, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
                break;
            case 'tab':
                osc.type = 'sine';
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.linearRampToValueAtTime(500, now + 0.1);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.15);
                osc.start(now);
                osc.stop(now + 0.15);
                break;
        }
    } catch (e) {}
}

function getActivePool() {
    return getPoolForSide(rpActiveSide);
}

function getPoolForSide(side) {
    const pool = side === 'killer' ? KILLER_PERKS : SURVIVOR_PERKS;
    const excluded = rpState.excludedPerks?.[side] || [];
    return pool.filter(perk => !excluded.includes(perk.name));
}

function getActiveColor() {
    return rpActiveSide === 'killer' ? KILLER_COLOR : SURVIVOR_COLOR;
}

function pickRandomPerkNames(count) {
    const pool = getActivePool().slice();
    const result = [];
    for (let i = 0; i < count && pool.length > 0; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0].name);
    }
    return result;
}

function updatePoolCounts() {
    document.getElementById('killerPerksCount').textContent = getPoolForSide('killer').length;
    document.getElementById('survivorPerksCount').textContent = getPoolForSide('survivor').length;
}

function renderPoolList() {
    const side = rpActiveSide;
    const pool = side === 'killer' ? KILLER_PERKS : SURVIVOR_PERKS;
    const excluded = rpState.excludedPerks[side];
    const query = document.getElementById('poolSearch').value.trim().toLowerCase();
    const list = document.getElementById('poolList');
    const visiblePerks = pool.filter(perk => perk.name.toLowerCase().includes(query));

    document.getElementById('poolLegend').textContent = `${side === 'killer' ? 'KILLER' : 'SUPERVIVIENTE'} · ${getPoolForSide(side).length} disponibles`;
    list.innerHTML = visiblePerks.map(perk => {
        const inputId = `pool-${side}-${perk.id}`;
        const checked = !excluded.includes(perk.name);
        return `<label class="rp-pool-option" for="${inputId}">
            <input type="checkbox" id="${inputId}" name="pool-perk" value="${perk.name}" ${checked ? 'checked' : ''}>
            <span class="rp-pool-check" aria-hidden="true">${perk.icon}</span>
            <span>${perk.name}</span>
        </label>`;
    }).join('');
    list.querySelectorAll('input').forEach(input => input.addEventListener('change', () => togglePoolPerk(input)));
}

function togglePoolPerk(input) {
    const side = rpActiveSide;
    const excluded = rpState.excludedPerks[side];
    if (!input.checked && getPoolForSide(side).length <= 4) {
        input.checked = true;
        showRpToast('Debes dejar al menos 4 perks disponibles.', 'warning');
        return;
    }
    if (input.checked) {
        rpState.excludedPerks[side] = excluded.filter(name => name !== input.value);
    } else if (!excluded.includes(input.value)) {
        excluded.push(input.value);
    }
    saveRpState();
    updatePoolCounts();
    document.getElementById('poolLegend').textContent = `${side === 'killer' ? 'KILLER' : 'SUPERVIVIENTE'} · ${getPoolForSide(side).length} disponibles`;
}

function resetActivePool() {
    rpState.excludedPerks[rpActiveSide] = [];
    saveRpState();
    updatePoolCounts();
    renderPoolList();
    showRpToast('Pool restaurada.', 'info');
}

function openPoolModal() {
    document.getElementById('poolModal').classList.add('active');
    document.getElementById('poolSearch').value = '';
    renderPoolList();
}

function renderPerkSlot(slotEl, perkName) {
    if (!perkName) {
        slotEl.classList.remove('filled', 'spinning');
        slotEl.classList.add('empty');
        slotEl.innerHTML = '<span class="rp-perk-spinner">?</span>';
        return;
    }
    slotEl.classList.remove('empty', 'spinning');
    slotEl.classList.add('filled');
    const icon = getPerkIcon(perkName);
    slotEl.innerHTML = `
        <div class="rp-perk-icon">${icon}</div>
        <div class="rp-perk-name">${perkName.toUpperCase()}</div>
    `;
}

function renderEmptyArena() {
    const grid = document.getElementById('rpPerksGrid');
    grid.querySelectorAll('.rp-perk-slot').forEach(slot => {
        slot.classList.remove('filled');
        slot.classList.add('empty');
        slot.innerHTML = '<span class="rp-perk-spinner">?</span>';
    });
}

function setActiveSide(side) {
    if (rpActiveSide === side || rpIsRolling) return;
    rpActiveSide = side;
    document.querySelectorAll('.rp-tab').forEach(t => {
        const isActive = t.dataset.side === side;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    const label = document.getElementById('rpSideLabel');
    label.textContent = side === 'killer' ? 'KILLER' : 'SURVIVOR';
    label.dataset.side = side;
    document.getElementById('rpCurrentSide').textContent = side === 'killer' ? 'KILLER' : 'SURVIVOR';
    rpPlaySound('tab');
    renderEmptyArena();
    rpState.currentPerks = [];
    rpSelectedSlot = null;
    rpState.lastSide = side;
    saveRpState();
    updateRpButtons();
}

function updateRpButtons() {
    const rerollBtn = document.getElementById('btnRpReroll');
    rerollBtn.disabled = rpIsRolling || rpSelectedSlot === null;
    document.getElementById('btnRpRandomize').disabled = rpIsRolling;
    document.getElementById('btnRpClear').disabled = rpIsRolling || rpState.currentPerks.length === 0;
}

async function rollAllPerks() {
    if (rpIsRolling) return;
    rpIsRolling = true;
    updateRpButtons();

    const grid = document.getElementById('rpPerksGrid');
    const slots = grid.querySelectorAll('.rp-perk-slot');

    slots.forEach(s => {
        s.classList.remove('filled');
        s.classList.add('empty', 'spinning');
        s.innerHTML = '<span class="rp-perk-spinner">?</span>';
    });

    rpPlaySound('randomize');

    const activePool = getActivePool();
    if (activePool.length < 4) {
        rpIsRolling = false;
        updateRpButtons();
        showRpToast('Deja al menos 4 perks disponibles para girar.', 'warning');
        return;
    }
    const finalPerks = pickRandomPerkNames(4);
    const totalCycles = rpState.animationsEnabled ? 18 + Math.floor(Math.random() * 8) : 0;

    for (let i = 0; i < 4; i++) {
        const slot = slots[i];
        const delay = rpState.animationsEnabled ? 700 + (i * 280) : 0;
        await new Promise(resolve => setTimeout(resolve, delay));

        let cycleCount = 0;
        await new Promise(resolveCycle => {
            function doCycle() {
                if (cycleCount >= totalCycles) {
                    resolveCycle();
                    return;
                }
                const fake = activePool[Math.floor(Math.random() * activePool.length)].name;
                const icon = getPerkIcon(fake);
                slot.innerHTML = `
                    <div class="rp-perk-icon">${icon}</div>
                    <div class="rp-perk-name">${fake.toUpperCase()}</div>
                `;
                rpPlaySound('cycle');
                cycleCount++;
                const cycleDelay = 35 + (cycleCount * 4);
                setTimeout(doCycle, cycleDelay);
            }
            doCycle();
        });

        slot.classList.remove('spinning');
        renderPerkSlot(slot, finalPerks[i]);
        slot.classList.add('just-revealed');
        rpPlaySound('perk');
        setTimeout(() => slot.classList.remove('just-revealed'), 500);
    }

    rpState.currentPerks = finalPerks;
    rpState.lastSide = rpActiveSide;
    rpState.rollCount = (rpState.rollCount || 0) + 1;
    rpState.history.unshift({
        side: rpActiveSide,
        perks: finalPerks.slice(),
        ts: Date.now()
    });
    rpState.history = rpState.history.slice(0, 6);
    saveRpState();
    renderRpHistory();
    updateRpStats();

    rpIsRolling = false;
    rpSelectedSlot = null;
    updateRpButtons();
}

async function rerollSingleSlot() {
    if (rpIsRolling || rpSelectedSlot === null) return;
    rpIsRolling = true;
    updateRpButtons();

    const grid = document.getElementById('rpPerksGrid');
    const slot = grid.querySelector(`.rp-perk-slot[data-index="${rpSelectedSlot}"]`);
    if (!slot) {
        rpIsRolling = false;
        updateRpButtons();
        return;
    }

    slot.classList.add('spinning');
    rpPlaySound('cycle');

    const pool = getActivePool().filter(p => !rpState.currentPerks.includes(p.name));
    const fallbackPool = pool.length >= 1 ? pool : getActivePool();
    if (fallbackPool.length === 0) {
        rpIsRolling = false;
        updateRpButtons();
        showRpToast('No quedan perks disponibles en esta pool.', 'warning');
        return;
    }
    const newPerk = fallbackPool[Math.floor(Math.random() * fallbackPool.length)].name;
    const oldPerk = rpState.currentPerks[rpSelectedSlot];
    let chosen = newPerk;
    if (oldPerk && newPerk === oldPerk && fallbackPool.length > 1) {
        const filtered = fallbackPool.filter(p => p.name !== oldPerk);
        chosen = filtered[Math.floor(Math.random() * filtered.length)].name;
    }

    let cycleCount = 0;
    const totalCycles = 12;
    await new Promise(resolve => {
        function doCycle() {
            if (cycleCount >= totalCycles) {
                resolve();
                return;
            }
            const fake = fallbackPool[Math.floor(Math.random() * fallbackPool.length)].name;
            const icon = getPerkIcon(fake);
            slot.innerHTML = `
                <div class="rp-perk-icon">${icon}</div>
                <div class="rp-perk-name">${fake.toUpperCase()}</div>
            `;
            rpPlaySound('cycle');
            cycleCount++;
            const cycleDelay = 35 + (cycleCount * 5);
            setTimeout(doCycle, cycleDelay);
        }
        doCycle();
    });

    rpState.currentPerks[rpSelectedSlot] = chosen;
    slot.classList.remove('spinning');
    renderPerkSlot(slot, chosen);
    slot.classList.add('just-revealed');
    rpPlaySound('perk');
    setTimeout(() => slot.classList.remove('just-revealed'), 500);

    rpState.history.unshift({
        side: rpActiveSide,
        perks: rpState.currentPerks.slice(),
        ts: Date.now(),
        rerolled: true
    });
    rpState.history = rpState.history.slice(0, 6);
    saveRpState();
    renderRpHistory();

    rpIsRolling = false;
    rpSelectedSlot = null;
    updateRpButtons();
}

function clearSlots() {
    if (rpIsRolling) return;
    rpState.currentPerks = [];
    rpSelectedSlot = null;
    renderEmptyArena();
    updateRpButtons();
    rpPlaySound('cycle');
}

function updateRpStats() {
    document.getElementById('rpRollCount').textContent = rpState.rollCount || 0;
    const last = rpState.lastSide;
    const lastEl = document.getElementById('rpLastSide');
    if (!last) {
        lastEl.textContent = '—';
    } else {
        lastEl.textContent = last === 'killer' ? 'KILLER' : 'SURVIVOR';
        lastEl.dataset.side = last;
    }
}

function renderRpHistory() {
    const section = document.getElementById('rpHistorySection');
    const list = document.getElementById('rpHistoryList');
    if (!rpState.history || rpState.history.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = '';
    list.innerHTML = rpState.history.map((entry, idx) => {
        const sideLabel = entry.side === 'killer' ? 'KILLER' : 'SURVIVOR';
        const rerolledTag = entry.rerolled ? '<span class="rp-history-reroll">REROLL</span>' : '';
        const perkImgs = entry.perks.map(pn => {
            const icon = getPerkIcon(pn);
            return `<span class="rp-history-perk" title="${pn}">${icon}</span>`;
        }).join('');
        return `<div class="rp-history-item" data-side="${entry.side}">
            <span class="rp-history-side">${sideLabel}</span>
            <span class="rp-history-perks">${perkImgs}</span>
            ${rerolledTag}
        </div>`;
    }).join('');
}

function selectSlot(index) {
    if (rpIsRolling) return;
    if (rpState.currentPerks.length === 0) return;
    rpSelectedSlot = index;
    document.querySelectorAll('.rp-perk-slot').forEach((s, i) => {
        s.classList.toggle('selected', i === index);
    });
    updateRpButtons();
    rpPlaySound('tab');
}

function setupRpSlotClicks() {
    document.querySelectorAll('.rp-perk-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const idx = parseInt(slot.dataset.index, 10);
            selectSlot(idx);
        });
    });
}

function setupRpListeners() {
    document.querySelectorAll('.rp-tab').forEach(tab => {
        tab.addEventListener('click', () => setActiveSide(tab.dataset.side));
    });

    document.getElementById('btnRpRandomize').addEventListener('click', rollAllPerks);
    document.getElementById('btnRpReroll').addEventListener('click', rerollSingleSlot);
    document.getElementById('btnRpClear').addEventListener('click', clearSlots);
    document.getElementById('btnRpPool').addEventListener('click', openPoolModal);
    document.getElementById('closePool').addEventListener('click', () => document.getElementById('poolModal').classList.remove('active'));
    document.getElementById('closePoolBottom').addEventListener('click', () => document.getElementById('poolModal').classList.remove('active'));
    document.getElementById('resetPool').addEventListener('click', resetActivePool);
    document.getElementById('poolSearch').addEventListener('input', renderPoolList);

    document.getElementById('configBtn').addEventListener('click', () => {
        document.getElementById('settingsModal').classList.add('active');
        updateSoundToggle();
        updateAnimToggle();
    });

    document.getElementById('closeSettings').addEventListener('click', () => {
        document.getElementById('settingsModal').classList.remove('active');
    });

    document.getElementById('toggleSound').addEventListener('click', () => {
        rpState.soundEnabled = !rpState.soundEnabled;
        updateSoundToggle();
        saveRpState();
    });

    document.getElementById('toggleAnim').addEventListener('click', () => {
        rpState.animationsEnabled = !rpState.animationsEnabled;
        updateAnimToggle();
        saveRpState();
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('active');
        });
    });

    document.querySelectorAll('[data-locked]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            showRpToast('🚧 En construcción — disponible próximamente', 'warning');
        });
    });

    setupRpSlotClicks();

    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(document.activeElement.tagName)) return;
            e.preventDefault();
            if (!rpIsRolling) {
                if (e.shiftKey && rpSelectedSlot !== null) {
                    rerollSingleSlot();
                } else {
                    rollAllPerks();
                }
            }
        } else if (e.key === 'Escape') {
            rpSelectedSlot = null;
            document.querySelectorAll('.rp-perk-slot').forEach(s => s.classList.remove('selected'));
            updateRpButtons();
        } else if (e.key === '1') {
            setActiveSide('killer');
        } else if (e.key === '2') {
            setActiveSide('survivor');
        }
    });
}

function updateSoundToggle() {
    const btn = document.getElementById('toggleSound');
    if (rpState.soundEnabled) {
        btn.textContent = 'ON';
        btn.classList.remove('off');
    } else {
        btn.textContent = 'OFF';
        btn.classList.add('off');
    }
}

function updateAnimToggle() {
    const btn = document.getElementById('toggleAnim');
    if (rpState.animationsEnabled) {
        btn.textContent = 'ON';
        btn.classList.remove('off');
    } else {
        btn.textContent = 'OFF';
        btn.classList.add('off');
    }
}

function showRpToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}

function initRp() {
    rpState = getRpStoredState();
    rpState.excludedPerks = {
        killer: Array.isArray(rpState.excludedPerks?.killer) ? rpState.excludedPerks.killer : [],
        survivor: Array.isArray(rpState.excludedPerks?.survivor) ? rpState.excludedPerks.survivor : []
    };
    rpActiveSide = rpState.lastSide || 'killer';
    updatePoolCounts();
    document.querySelectorAll('.rp-tab').forEach(tab => {
        const active = tab.dataset.side === rpActiveSide;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    document.getElementById('rpSideLabel').textContent = rpActiveSide === 'killer' ? 'KILLER' : 'SURVIVOR';
    document.getElementById('rpSideLabel').dataset.side = rpActiveSide;
    document.getElementById('rpCurrentSide').textContent = rpActiveSide === 'killer' ? 'KILLER' : 'SURVIVOR';
    if (rpState.lastSide === rpActiveSide && rpState.currentPerks.length) {
        document.querySelectorAll('.rp-perk-slot').forEach((slot, index) => renderPerkSlot(slot, rpState.currentPerks[index]));
    }
    updateRpStats();
    renderRpHistory();
    setupRpListeners();
    updateRpButtons();
}

document.addEventListener('DOMContentLoaded', initRp);
