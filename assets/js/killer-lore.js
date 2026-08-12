const KILLER_LORE = {
    "The Trapper": ["El trampero", "Control de territorio", "Cierra bucles y rutas con trampas. Piensa dos pasos por delante: una trampa bien colocada vale más que una persecución larga."],
    "The Wraith": ["El Espectro", "Sigilo y emboscada", "Usa la campana para desaparecer del radar, reposicionarte y golpear cuando el superviviente ya ha gastado su recurso."],
    "The Hillbilly": ["El Pueblerino", "Movilidad explosiva", "Su motosierra convierte el mapa en una autopista. Domina los giros, la distancia y la amenaza constante de un derribo instantáneo."],
    "The Nurse": ["La Enfermera", "Teletransporte y lectura", "Ignora la geometría del mapa con sus blinks. Es difícil de dominar, pero cada lectura correcta rompe las reglas del chase."],
    "The Shape": ["La Forma", "Acecho y escalada", "Empieza invisible y termina siendo una amenaza de un golpe. Administra el acecho para que cada tier llegue en el momento correcto."],
    "The Hag": ["La Bruja", "Trampas y defensa", "Construye una red de teletransportes alrededor de objetivos importantes. No persigue el mapa: hace que el mapa venga a ella."],
    "The Doctor": ["El Doctor", "Locura e información", "El shock interrumpe, revela y desgasta. Su partida consiste en convertir cada interacción en ruido, errores y decisiones precipitadas."],
    "The Huntress": ["La Cazadora", "Proyectiles y precisión", "Cada ventana tiene un ángulo y cada pasillo una amenaza. Aprende las líneas de tiro para castigar rutas que otros killers no pueden tocar."],
    "The Cannibal": ["El Caníbal", "Derribo y zona", "Su motosierra domina los espacios cerrados. Fuerza a los supervivientes a abandonar recursos antes de comprometerte con el golpe."],
    "The Nightmare": ["La Pesadilla", "Sueño y presión global", "El mapa nunca está realmente lejos. Usa la presión del sueño para cortar rotaciones y hacer que cada generador cueste tiempo."],
    "The Pig": ["La Cerda", "Ritmo y trampas", "Las cajas y las trampas ralentizan el trial. Tu objetivo no es solo derribar: es obligar al equipo a mirar hacia abajo."],
    "The Clown": ["El Payaso", "Control de persecución", "Sus botellas cambian la velocidad y la ruta de un chase. Combínalas con las estructuras para convertir loops fuertes en callejones."],
    "The Spirit": ["El Espíritu", "Fase y lectura sonora", "Desaparece para aparecer donde más duele. El sonido, las huellas y el timing son tus ojos cuando el mundo se vuelve silencioso."],
    "The Legion": ["La Legión", "Presión en cadena", "Corre entre objetivos y fuerza heridas constantes. No busques un chase perfecto: busca que nadie tenga tiempo de recuperarse."],
    "The Plague": ["La Plaga", "Contaminación y castigo", "Contamina recursos y decide cuándo convertir esa infección en poder. El mapa se vuelve una elección incómoda para el equipo."],
    "The Ghost Face": ["Ghost Face", "Sigilo y exposición", "Elige cuándo ser visto. Un buen acecho no es el más largo, sino el que deja al superviviente expuesto en el peor lugar."],
    "The Demogorgon": ["El Demogorgon", "Portales y embestida", "Conecta objetivos con portales y usa la embestida para borrar distancia. Su fuerza aparece cuando preparas el mapa antes del caos."],
    "The Oni": ["El Oni", "Sangre y snowball", "Cada golpe alimenta una fase de furia que puede decidir el trial. Convierte el primer minuto en una inversión para el segundo."],
    "The Deathslinger": ["El Deathslinger", "Disparo y precisión", "El rifle acorta el loop desde fuera de la lógica habitual. Paciencia, ángulos y un disparo limpio son más valiosos que la velocidad."],
    "The Executioner": ["El Verdugo", "Castigo a través del mapa", "Sus líneas de tormento niegan zonas y convierten los errores en jaulas. Amenaza incluso cuando no estás en el mismo lado del muro."],
    "The Blight": ["La Plaga", "Movilidad y rebotes", "Rebota con intención. La velocidad no sirve si no sabes dónde quieres terminar: cada rush debe cerrar una ruta o crear una nueva."],
    "The Twins": ["Las Gemelas", "Presión dividida", "Victor abre heridas mientras Charlotte protege el mapa. Alternar cuerpos con propósito transforma una persecución en dos problemas."],
    "The Trickster": ["El Trickster", "Proyectiles y cadencia", "Llena el espacio de cuchillos y obliga a los supervivientes a elegir entre correr recto o regalar una línea de tiro."],
    "The Nemesis": ["Némesis", "Tentáculos y contaminación", "Mejora el tentáculo mientras contaminas. Los zombis son presión gratuita: aprende a jugar con el ruido que generan."],
    "The Cenobite": ["El Cenobita", "Cadenas y objetivo extra", "La caja es un quinto generador. Mantén el puzzle en tu radar y usa las cadenas para transformar una rotación en una parada."],
    "The Artist": ["La Artista", "Cuervos y zonas", "Sus aves convierten líneas y ventanas en preguntas peligrosas. Ataca desde lejos y deja que el mapa trabaje por ti."],
    "The Onryō": ["La Onryō", "Televisión y condena", "Aparece donde el equipo cree estar seguro. Gestiona las televisiones para que la condena sea una amenaza real, no solo una barra."],
    "The Dredge": ["The Dredge", "Oscuridad y casilleros", "Viaja por los casilleros y crea noches que borran información. El miedo funciona mejor cuando el equipo ya está separado."],
    "The Mastermind": ["Wesker", "Impulso y contagio", "Su carrera atraviesa el mapa y castiga obstáculos. Usa el virus para crear urgencia mientras tú controlas la ruta de escape."],
    "The Knight": ["El Caballero", "Guardias y bloqueo", "Envía guardias para reclamar zonas y dividir decisiones. La presión está en hacer que cada camino tenga un precio."],
    "The Skull Merchant": ["La Mercader de Calaveras", "Drones y vigilancia", "Lee el territorio con sus drones y usa sus zonas para negar objetivos. Su juego premia la preparación y el control paciente."],
    "The Singularity": ["La Singularidad", "Biopods y teletransporte", "Convierte el mapa en una red de cámaras. Marca, observa y aparece donde la información demuestra que el equipo está más débil."],
    "The Xenomorph": ["El Xenomorfo", "Túneles y emboscada", "Sus túneles dan lectura y velocidad. La cola castiga loops, pero el verdadero poder está en llegar antes que el superviviente."],
    "The Good Guy": ["Chucky", "Sigilo y embestida", "Su tamaño cambia las reglas de la visión. Agáchate, desaparece de la lectura y usa la embestida para cerrar la última esquina."],
    "The Unknown": ["The Unknown", "Alucinaciones y distancia", "Las alucinaciones llenan el mapa de amenazas. Mantén la duda viva y castiga a quien crea haber entendido tu ruta."],
    "The Lich": ["Vecna", "Hechizos y versatilidad", "Cuatro hechizos, cuatro respuestas. La clave es elegir el hechizo correcto para el momento, no lanzarlos todos por reflejo."],
    "The Dark Lord": ["Drácula", "Formas y dominio", "Cambia de forma para resolver cada situación. Su poder premia leer el contexto: persecución, mapa o engaño, siempre hay una respuesta."],
    "The Houndmaster": ["La Maestra de Sabuesos", "Perro y control", "Envía al sabueso para cortar rutas y enlazar acciones. La persecución es una coreografía entre distancia, olfato y paciencia."],
    "The Ghoul": ["El Ghoul", "Salto y presión", "Usa la velocidad y los ángulos para aparecer encima de los supervivientes. Su amenaza crece cuando el mapa deja de tener zonas tranquilas."],
    "The Animatronic": ["La Animatrónica", "Terror mecánico", "Combina vigilancia y ataques inesperados para crear un trial incómodo. La información es el combustible de cada emboscada."],
    "The Krasue": ["La Krasue", "Presión sobrenatural", "Su presencia convierte las rotaciones en riesgos. Juega alrededor de la incertidumbre y obliga al equipo a agruparse mal."],
    "The First": ["The First", "Control de la Entidad", "Un killer experimental para partidas impredecibles. Su identidad se construye alrededor de negar certezas y castigar hábitos."],
    "Jason Voorhees": ["Jason Voorhees", "Caza implacable", "Una presencia de slasher puro: encuentra, separa y no dejes que el equipo recupere el ritmo. Cada pausa es una oportunidad." ]
};

function killerCatalog() {
    try { return KILLERS; } catch (_) { return []; }
}

function killerByTarget(target) {
    const catalog = killerCatalog();
    const id = target?.dataset?.killerId;
    const name = target?.dataset?.killerName || (target?.classList.contains('uk-portrait') ? document.getElementById('ukKillerName')?.textContent : '');
    return catalog.find(k => String(k.id) === String(id) || k.name === name);
}

function openKillerLore(killer) {
    if (killer) window.location.href = `killer.html?id=${encodeURIComponent(killer.id)}`;
}

function renderKillerArchive() {
    const grid = document.getElementById('killerArchiveGrid');
    if (!grid) return;
    grid.innerHTML = killerCatalog().map(killer => `<a class="archive-killer-card" href="killer.html?id=${encodeURIComponent(killer.id)}" data-killer-id="${killer.id}"><img src="${killer.image}" alt="" loading="lazy"><span>${tKiller(killer.name)}</span></a>`).join('');
}

function initKillerLore() {
    renderKillerArchive();
    document.addEventListener('click', event => {
        if (event.target.closest('.kr-order-remove')) return;
        const target = event.target.closest('[data-killer-id], [data-killer-name], .uk-portrait, .kr-challenge-killer');
        if (target) openKillerLore(killerByTarget(target));
    });
}

document.addEventListener('DOMContentLoaded', initKillerLore);
