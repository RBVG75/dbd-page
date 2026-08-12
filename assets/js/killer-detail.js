function getDetailKiller() {
    const id = new URLSearchParams(window.location.search).get('id');
    try { return KILLERS.find(killer => String(killer.id) === id) || KILLERS[0]; } catch (_) { return null; }
}

function renderKillerDetail() {
    const killer = getDetailKiller();
    if (!killer) return;
    const lore = KILLER_LORE[killer.name] || [killer.name, 'Amenaza de la Niebla', 'Información pendiente de ampliar.'];
    const fields = KILLER_DETAILS[killer.name] || { speed: '', height: '', difficulty: '', terrorRadius: '', powerName: '', powerDescription: '', playstyle: '', notes: '' };
    const researchedPower = KILLER_POWER_DATA[killer.name] || {};
    const valueOrPlaceholder = value => value || 'POR COMPLETAR';
    document.title = `${killer.name} | Archivo de La Niebla`;
    document.getElementById('killerDetailImage').src = killer.image;
    document.getElementById('killerDetailImage').alt = killer.name;
    document.getElementById('killerDetailId').textContent = `FILE / ${String(killer.id).padStart(2, '0')}`;
    document.getElementById('killerDetailName').textContent = tKiller(killer.name);
    document.getElementById('killerDetailRole').textContent = lore[1];
    document.getElementById('killerDetailDescription').textContent = lore[2];
    document.getElementById('killerDetailDifficulty').textContent = `DIFICULTAD / ${valueOrPlaceholder(fields.difficulty)}`;
    document.getElementById('killerSpeed').textContent = valueOrPlaceholder(fields.speed);
    document.getElementById('killerHeight').textContent = valueOrPlaceholder(fields.height);
    document.getElementById('killerDifficulty').textContent = valueOrPlaceholder(fields.difficulty);
    document.getElementById('killerTerrorRadius').textContent = valueOrPlaceholder(fields.terrorRadius);
    document.getElementById('killerPowerName').textContent = fields.powerName || researchedPower.name || `PODER DE ${tKiller(killer.name).toUpperCase()}`;
    document.getElementById('killerPowerText').textContent = fields.powerDescription || researchedPower.description || 'Descripción del poder pendiente de completar.';
    const powerImages = KILLER_POWER_IMAGES[killer.name] || [];
    const gallery = document.getElementById('killerPowerGallery');
    gallery.innerHTML = powerImages.length
        ? powerImages.map((file, index) => `<figure class="power-image-card"><img src="assets/images/poderes_killers/${file}" alt="${researchedPower.name || 'Poder'} ${index + 1}" loading="lazy"><figcaption>${powerImages.length > 1 ? `IMAGEN ${index + 1}` : 'ICONO DEL PODER'}</figcaption></figure>`).join('')
        : '<div class="detail-placeholder">IMÁGENES DEL PODER · PENDIENTES DE CARGA</div>';
    document.getElementById('killerStyleText').textContent = fields.playstyle || 'Estilo de juego pendiente de completar.';
    document.getElementById('killerNotes').textContent = fields.notes || 'Notas pendientes de completar.';
    const perks = typeof KILLER_UNIQUE_PERKS !== 'undefined' ? KILLER_UNIQUE_PERKS[killer.name] || [] : [];
    const perksList = document.getElementById('killerDetailPerks');
    if (perks.length) perksList.innerHTML = perks.map(perk => `<div class="detail-perk-item"><span class="detail-perk-icon">${getPerkIcon(perk)}</span><strong>${tPerk(perk)}</strong><small>PERK ÚNICA</small></div>`).join('');
}

document.addEventListener('DOMContentLoaded', renderKillerDetail);
