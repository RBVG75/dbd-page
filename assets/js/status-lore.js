const STATUS_LORE = {
    celeridad: ['Celeridad', 'Más velocidad. Menos tiempo para dudar.', 'Aumenta la velocidad de movimiento de quien la recibe durante un periodo determinado. Puede servir para alcanzar una estructura, rotar a otro objetivo o cerrar una persecución.'],
    vulnerabilidad: ['Vulnerabilidad', 'Un golpe puede ser el último.', 'El siguiente ataque que impacte derriba al superviviente aunque estuviera sano. Romper la línea de visión y respetar la distancia se vuelve prioritario.'],
    noqueo: ['Noqueo', 'El suelo también es una estrategia.', 'El superviviente queda derribado. Dependiendo del efecto, puede perder información, comunicación o la capacidad de ser localizado con facilidad.'],
    agotamiento: ['Agotamiento', 'El sprint tiene un precio.', 'Impide activar ventajas de agotamiento mientras dure. El estado se recupera normalmente con el tiempo, salvo que otra acción lo mantenga bloqueado.'],
    hemorragia: ['Hemorragia', 'La sangre cuenta una historia.', 'Aumenta la presión sobre la curación y puede dejar rastros visibles. Si estás herido, cada segundo sin un plan facilita que el killer vuelva a encontrarte.'],
    ceguera: ['Ceguera', 'Juega sin mirar las auras.', 'Reduce o elimina la lectura de auras durante el efecto. La información debe sustituirse por sonido, memoria del mapa y comunicación.'],
    inconsciente: ['Inconsciente', 'El HUD deja de ayudarte.', 'Oculta parte de la información del estado de salud y otros indicadores. Obliga a confiar más en las señales del equipo y en la lectura del entorno.'],
    expuesto: ['Expuesto', 'Un error, una baja.', 'Hace que un golpe básico pueda derribar directamente. Es uno de los estados más peligrosos: abandona zonas abiertas y fuerza al killer a perderte de vista.']
};

function openStatusLore(status) {
    const data = STATUS_LORE[status];
    const modal = document.getElementById('statusLoreModal');
    if (!data || !modal) return;
    modal.querySelector('.status-lore-name').textContent = data[0];
    modal.querySelector('.status-lore-tagline').textContent = data[1];
    modal.querySelector('.status-lore-description').textContent = data[2];
    modal.classList.add('active');
    modal.querySelector('.status-lore-close').focus();
}

function initStatusLore() {
    document.body.insertAdjacentHTML('beforeend', `<div class="modal-overlay status-lore-modal" id="statusLoreModal" role="dialog" aria-modal="true" aria-labelledby="statusLoreName"><article class="status-lore-card"><button class="status-lore-close" type="button" aria-label="Cerrar ficha">×</button><div class="status-lore-symbol">✦</div><div><p class="eyebrow">MANUAL DE ESTADOS</p><h2 class="status-lore-name" id="statusLoreName">Estado</h2><p class="status-lore-tagline"></p><p class="status-lore-description"></p><div class="status-lore-note">Pulsa cualquier estado resaltado para consultar su efecto.</div></div></article></div>`);
    document.addEventListener('click', event => {
        const status = event.target.closest('[data-status]')?.dataset.status;
        if (status) openStatusLore(status);
        if (event.target.closest('.status-lore-close') || event.target.id === 'statusLoreModal') document.getElementById('statusLoreModal').classList.remove('active');
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') document.getElementById('statusLoreModal')?.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', initStatusLore);
