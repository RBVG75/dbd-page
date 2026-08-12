const EDITOR_STORAGE_KEY = 'dbd_data_editor_v1';
const DETAIL_FIELDS = ['speed', 'height', 'difficulty', 'terrorRadius', 'powerName', 'powerDescription', 'playstyle', 'notes'];

let editorState = {
    details: {},
    powers: {},
    images: {},
    selected: null,
    filter: 'all',
    query: ''
};

function cloneData(value) {
    return JSON.parse(JSON.stringify(value));
}

function emptyDetail() {
    return {
        speed: '',
        height: '',
        difficulty: '',
        terrorRadius: '',
        powerName: '',
        powerDescription: '',
        playstyle: '',
        notes: ''
    };
}

function loadBaseData() {
    const details = {};
    const powers = {};
    const images = {};

    KILLERS.forEach(killer => {
        const base = (typeof KILLER_DETAILS !== 'undefined' && KILLER_DETAILS[killer.name]) || emptyDetail();
        details[killer.name] = { ...emptyDetail(), ...base };
        const power = (typeof KILLER_POWER_DATA !== 'undefined' && KILLER_POWER_DATA[killer.name]) || {};
        powers[killer.name] = {
            name: power.name || base.powerName || '',
            description: power.description || base.powerDescription || ''
        };
        images[killer.name] = ((typeof KILLER_POWER_IMAGES !== 'undefined' && KILLER_POWER_IMAGES[killer.name]) || []).slice();
    });

    return { details, powers, images };
}

function loadEditorState() {
    const base = loadBaseData();
    try {
        const stored = JSON.parse(localStorage.getItem(EDITOR_STORAGE_KEY) || 'null');
        if (stored) {
            editorState.details = { ...base.details, ...(stored.details || {}) };
            editorState.powers = { ...base.powers, ...(stored.powers || {}) };
            editorState.images = { ...base.images, ...(stored.images || {}) };
            editorState.selected = stored.selected || KILLERS[0]?.name || null;
            return;
        }
    } catch (_) {}
    editorState.details = base.details;
    editorState.powers = base.powers;
    editorState.images = base.images;
    editorState.selected = KILLERS[0]?.name || null;
}

function saveEditorState() {
    localStorage.setItem(EDITOR_STORAGE_KEY, JSON.stringify({
        details: editorState.details,
        powers: editorState.powers,
        images: editorState.images,
        selected: editorState.selected
    }));
}

function getCompletion(name) {
    const detail = editorState.details[name] || emptyDetail();
    const power = editorState.powers[name] || {};
    const images = editorState.images[name] || [];
    const values = [
        detail.speed,
        detail.height,
        detail.difficulty,
        detail.terrorRadius,
        detail.powerName || power.name,
        detail.powerDescription || power.description,
        detail.playstyle,
        detail.notes,
        images.join(',')
    ];
    const filled = values.filter(value => String(value || '').trim()).length;
    if (filled === 0) return 'empty';
    if (filled >= 7) return 'complete';
    return 'partial';
}

function showEditorToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2800);
}

function renderStats() {
    const statuses = KILLERS.map(killer => getCompletion(killer.name));
    document.getElementById('editorTotal').textContent = KILLERS.length;
    document.getElementById('editorComplete').textContent = statuses.filter(status => status === 'complete').length;
    document.getElementById('editorPartial').textContent = statuses.filter(status => status === 'partial').length;
    document.getElementById('editorEmpty').textContent = statuses.filter(status => status === 'empty').length;
}

function renderKillerList() {
    const list = document.getElementById('editorKillerList');
    const query = editorState.query.trim().toLowerCase();
    list.innerHTML = KILLERS.filter(killer => {
        const status = getCompletion(killer.name);
        if (editorState.filter !== 'all' && status !== editorState.filter) return false;
        if (!query) return true;
        const display = (typeof tKiller === 'function' ? tKiller(killer.name) : killer.name).toLowerCase();
        return killer.name.toLowerCase().includes(query) || display.includes(query) || String(killer.id).includes(query);
    }).map(killer => {
        const status = getCompletion(killer.name);
        const active = killer.name === editorState.selected ? 'active' : '';
        const display = typeof tKiller === 'function' ? tKiller(killer.name) : killer.name;
        return `<button type="button" class="editor-killer-item ${active}" data-name="${killer.name}">
            <img src="${killer.image}" alt="">
            <span><strong>${display}</strong><small>#${killer.id} · ${killer.name}</small></span>
            <span class="editor-status ${status}" title="${status}"></span>
        </button>`;
    }).join('') || '<div class="editor-sidebar-head"><p style="color:var(--hub-muted);font-size:12px">Sin resultados.</p></div>';
}

function parseImages(value) {
    return String(value || '')
        .split(/[\n,]/)
        .map(item => item.trim())
        .filter(Boolean);
}

function renderImagePreview(files) {
    const box = document.getElementById('editorImagePreview');
    if (!files.length) {
        box.innerHTML = '';
        return;
    }
    box.innerHTML = files.map(file =>
        `<img src="assets/images/poderes_killers/${file}" alt="${file}" title="${file}" onerror="this.style.opacity='.25'">`
    ).join('');
}

function fillForm(name) {
    const killer = KILLERS.find(item => item.name === name);
    if (!killer) return;
    const detail = editorState.details[name] || emptyDetail();
    const power = editorState.powers[name] || {};
    const images = editorState.images[name] || [];
    const form = document.getElementById('editorForm');

    document.getElementById('editorPortrait').src = killer.image;
    document.getElementById('editorInternalName').textContent = `#${killer.id} · ${killer.name}`;
    document.getElementById('editorDisplayName').textContent = typeof tKiller === 'function' ? tKiller(killer.name) : killer.name;
    document.getElementById('editorPreview').href = `killer.html?id=${killer.id}`;

    form.speed.value = detail.speed || '';
    form.height.value = detail.height || '';
    form.difficulty.value = detail.difficulty || '';
    form.terrorRadius.value = detail.terrorRadius || '';
    form.powerName.value = detail.powerName || power.name || '';
    form.powerDescription.value = detail.powerDescription || power.description || '';
    form.powerImages.value = images.join('\n');
    form.playstyle.value = detail.playstyle || '';
    form.notes.value = detail.notes || '';
    renderImagePreview(images);
}

function readForm() {
    const form = document.getElementById('editorForm');
    const images = parseImages(form.powerImages.value);
    return {
        detail: {
            speed: form.speed.value.trim(),
            height: form.height.value.trim(),
            difficulty: form.difficulty.value.trim(),
            terrorRadius: form.terrorRadius.value.trim(),
            powerName: form.powerName.value.trim(),
            powerDescription: form.powerDescription.value.trim(),
            playstyle: form.playstyle.value.trim(),
            notes: form.notes.value.trim()
        },
        power: {
            name: form.powerName.value.trim(),
            description: form.powerDescription.value.trim()
        },
        images
    };
}

function saveCurrent(showToast = true) {
    if (!editorState.selected) return;
    const data = readForm();
    editorState.details[editorState.selected] = data.detail;
    editorState.powers[editorState.selected] = data.power;
    editorState.images[editorState.selected] = data.images;
    saveEditorState();
    renderStats();
    renderKillerList();
    renderExport();
    renderImagePreview(data.images);
    if (showToast) showEditorToast('Killer guardado localmente', 'success');
}

function resetCurrent() {
    if (!editorState.selected) return;
    const base = loadBaseData();
    editorState.details[editorState.selected] = base.details[editorState.selected];
    editorState.powers[editorState.selected] = base.powers[editorState.selected];
    editorState.images[editorState.selected] = base.images[editorState.selected];
    saveEditorState();
    fillForm(editorState.selected);
    renderStats();
    renderKillerList();
    renderExport();
    showEditorToast('Valores restaurados desde el archivo base', 'info');
}

function escapeJs(value) {
    return String(value || '')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\r?\n/g, '\\n');
}

function buildDetailsObject() {
    const lines = KILLERS.map(killer => {
        const detail = editorState.details[killer.name] || emptyDetail();
        const compact = DETAIL_FIELDS.map(field => `${field}: "${escapeJs(detail[field])}"`).join(', ');
        return `    "${killer.name}": { ${compact} }`;
    });
    return `const KILLER_DETAILS = {\n${lines.join(',\n')}\n};`;
}

function buildPowerObject() {
    const lines = KILLERS.map(killer => {
        const power = editorState.powers[killer.name] || {};
        const name = power.name || '';
        const description = power.description || '';
        if (!name && !description) return null;
        return `    "${killer.name}": { name: "${escapeJs(name)}", description: "${escapeJs(description)}" }`;
    }).filter(Boolean);
    return `const KILLER_POWER_DATA = {\n${lines.join(',\n')}\n};`;
}

function buildImagesObject() {
    const lines = KILLERS.map(killer => {
        const images = editorState.images[killer.name] || [];
        if (!images.length) return null;
        return `    "${killer.name}": [${images.map(file => `"${escapeJs(file)}"`).join(', ')}]`;
    }).filter(Boolean);
    return `const KILLER_POWER_IMAGES = {\n${lines.join(',\n')}\n};`;
}

function buildExport() {
    return `/*
 * Rellena este archivo para completar las fichas de cada asesino.
 * No cambies las claves entre comillas: son los nombres internos del juego.
 * Generado desde data-editor.html
 */
${buildDetailsObject()}

// Poderes contrastados con la web oficial y la wiki de Dead by Daylight.
// Fuentes: https://deadbydaylight.com/game/characters/ y https://deadbydaylight.wiki.gg/wiki/Killers
${buildPowerObject()}

${buildImagesObject()}
`;
}

function renderExport() {
    document.getElementById('editorExport').value = buildExport();
}

async function copyExport() {
    saveCurrent(false);
    const text = buildExport();
    try {
        await navigator.clipboard.writeText(text);
        showEditorToast('JS copiado al portapapeles', 'success');
    } catch (_) {
        const box = document.getElementById('editorExport');
        box.focus();
        box.select();
        document.execCommand('copy');
        showEditorToast('JS copiado al portapapeles', 'success');
    }
}

function downloadExport() {
    saveCurrent(false);
    const blob = new Blob([buildExport()], { type: 'text/javascript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'killer-details-data.js';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showEditorToast('Archivo descargado', 'success');
}

function setupEditor() {
    if (typeof KILLERS === 'undefined') {
        showEditorToast('No se pudo cargar el roster de killers', 'error');
        return;
    }

    loadEditorState();
    renderStats();
    renderKillerList();
    if (editorState.selected) fillForm(editorState.selected);
    renderExport();

    document.getElementById('editorKillerList').addEventListener('click', event => {
        const item = event.target.closest('[data-name]');
        if (!item) return;
        if (editorState.selected) saveCurrent(false);
        editorState.selected = item.dataset.name;
        saveEditorState();
        fillForm(editorState.selected);
        renderKillerList();
    });

    document.getElementById('editorSearch').addEventListener('input', event => {
        editorState.query = event.target.value;
        renderKillerList();
    });

    document.querySelectorAll('.editor-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.editor-chip').forEach(item => item.classList.remove('active'));
            chip.classList.add('active');
            editorState.filter = chip.dataset.filter;
            renderKillerList();
        });
    });

    document.getElementById('editorForm').addEventListener('input', () => {
        const images = parseImages(document.getElementById('editorForm').powerImages.value);
        renderImagePreview(images);
    });

    document.getElementById('editorSaveCurrent').addEventListener('click', () => saveCurrent(true));
    document.getElementById('editorResetCurrent').addEventListener('click', resetCurrent);
    document.getElementById('editorCopy').addEventListener('click', copyExport);
    document.getElementById('editorDownload').addEventListener('click', downloadExport);

    window.addEventListener('beforeunload', () => {
        if (editorState.selected) saveCurrent(false);
    });
}

document.addEventListener('DOMContentLoaded', setupEditor);
