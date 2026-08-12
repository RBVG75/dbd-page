# Contexto Vivo · La Niebla

Última actualización: 2026-08-07

Este documento es la memoria operativa del proyecto. Debe actualizarse en la misma sesión y justo después de cada cambio relevante.

## Estado Actual

La aplicación es un sitio estático de Dead by Daylight hecho con HTML, CSS y JavaScript vanilla. No hay backend ni sistema de build. El estado de los retos se guarda en `localStorage`.

La dirección visual es editorial/horror: fondo negro cálido, rojo coral, papel claro, líneas finas, tipografía `Unbounded` para títulos y `Share Tech Mono` para información técnica.

## Páginas Activas

### `index.html`

Hub principal de La Niebla.

- Ruleta de killer y cuatro perks.
- Progreso persistente, victorias y derrotas.
- Buscador de killers.
- Sección `#archivo-killers` con todos los killers del roster.
- Sección `#efectos` con estados interactivos.
- Retos rápidos y manual de campo.
- Header y selector `ES-ES` / `ES-LATAM`.

### `killer.html?id=...`

Página individual reutilizable para cualquier killer. El ID se obtiene desde la lista `KILLERS` y se muestra con la plantilla de `killer-detail.js`.

Muestra:

- Imagen y nombre traducido.
- Velocidad, altura, dificultad y radio de terror.
- Poder y descripción.
- Galería de imágenes del poder.
- Estilo de juego y notas.
- Perks únicas con iconos.

### `unique-killer.html`

Randomiza un killer y permite jugar con perks random o con sus perks únicas. Conserva historial local y permite consultar la página individual del killer.

### `random-perks.html`

Ruleta independiente de cuatro perks para killer o superviviente. Incluye selección de slot, reroll, historial y configuración de animación.

### `killer-routes.html`

Permite crear rutas de killers, elegir restricciones de perks, reordenar killers con drag & drop y jugar la ruta paso a paso.

### `data-editor.html`

Panel interno para editar datos de killers sin tocar el código fuente.

- Lista de todos los killers con búsqueda y filtros (vacíos / parciales / completos).
- Formulario de velocidad, altura, dificultad, radio, poder, imágenes, estilo y notas.
- Guardado automático en `localStorage` (`dbd_data_editor_v1`).
- Exportación del archivo completo `killer-details-data.js` (copiar o descargar).
- Marcado `noindex` para no indexarlo en buscadores.

Flujo recomendado:

1. Editar en `data-editor.html`.
2. Exportar JS.
3. Reemplazar el contenido de `assets/js/killer-details-data.js`.
4. Verificar una ficha en `killer.html?id=...`.

## Scripts Clave

### `assets/js/app.js`

Motor principal de la ruleta. Contiene el roster interno `KILLERS`, la lista `PERKS`, `KILLER_UNIQUE_PERKS`, el mapa de iconos y la persistencia del reto.

No cambiar los nombres internos de `KILLERS` sin actualizar también sus referencias en `KILLER_UNIQUE_PERKS`, detalles, imágenes y traducciones.

### `assets/js/killer-details-data.js`

Archivo principal para completar información de killers.

Cada entrada de `KILLER_DETAILS` usa:

```js
"The Trapper": {
    speed: "4.6",
    height: "Alto",
    difficulty: "",
    terrorRadius: "32",
    powerName: "Trampas para osos",
    powerDescription: "",
    playstyle: "",
    notes: ""
}
```

Los decimales usan punto, por ejemplo `4.6`.

`KILLER_POWER_DATA` contiene descripciones investigadas de poderes oficiales.

`KILLER_POWER_IMAGES` relaciona cada killer con una lista de archivos. Se pueden añadir varias imágenes:

```js
"The Demogorgon": [
    "IconPowers_ofTheAbyss.webp",
    "T_UI_iconPowers_EnterUpsideDown.webp"
]
```

Las imágenes viven en `assets/images/poderes_killers/`.

### `assets/js/killer-detail.js`

Lee `?id=...`, busca el killer y combina los datos editables con los poderes investigados. Si un campo editable está vacío, muestra el dato investigado o `POR COMPLETAR`.

### `assets/js/killer-lore.js`

Gestiona los clicks sobre killers y los convierte en enlaces a `killer.html?id=...`. También genera el archivo de killers de la portada.

### `assets/js/status-lore.js`

Gestiona las fichas emergentes de estados como Celeridad, Vulnerabilidad, Noqueo, Agotamiento, Hemorragia, Ceguera, Inconsciente y Expuesto.

### `assets/js/i18n.js`

Centraliza:

- `KILLER_NAMES_ES`.
- `KILLER_NAMES_LATAM`.
- `PERK_NAMES_ES`.
- Persistencia de idioma en `localStorage` con la clave `dbd_language`.

Las claves internas permanecen en inglés para no romper el código. Solo se traduce lo que ve el usuario.

### `assets/js/unique-killer.js`, `random-perks.js`, `killer-routes.js`

Controladores de sus herramientas respectivas. Algunas listas históricas están duplicadas en estos archivos. Si se añade un killer o perk nuevo, revisar todas las copias antes de darlo por integrado.

## Assets

- `assets/images/killers/`: retratos.
- `assets/images/perks_killers/`: iconos de perks.
- `assets/images/poderes_killers/`: iconos y capturas de poderes.
- `assets/css/styles.css`: sistema visual global y portada.
- `assets/css/hub-tools.css`: capa visual final de páginas secundarias y página individual.

## Navegación De Killers

Los elementos que tienen `data-killer-id` se pueden pulsar. `killer-lore.js` convierte el click en una navegación a:

```text
killer.html?id=ID
```

La página individual no necesita una página HTML por killer. Una sola plantilla sirve para todo el roster.

## Historial De Cambios

### 2026-08-10 · Pool personalizable de random perks

- Añadida configuración de pool en `random-perks.html` para excluir perks individualmente por bando.
- Actualizada `assets/js/random-perks.js` para persistir exclusiones, aplicarlas a tiradas y rerolls, y mantener un mínimo de cuatro perks.
- Añadidos controles responsive y accesibles en `assets/css/random-perks.css`.

### 2026-08-07 · Editor interactivo de datos

- Creado `data-editor.html` como panel accesible para rellenar killers.
- Añadidos `assets/js/data-editor.js` y `assets/css/data-editor.css`.
- Permite editar detalles, poderes e imágenes sin abrir el JS a mano.
- Incluye autosave local, filtros por completitud, preview de imágenes y exportación del archivo final.
- Enlazado desde la navegación del hub y documentado en README y contexto vivo.

### 2026-08-06 · Galería de poderes

- Detectada la carpeta correcta `assets/images/poderes_killers/`.
- Añadido `KILLER_POWER_IMAGES` en `assets/js/killer-details-data.js`.
- Relacionados los iconos de poderes con los killers oficiales disponibles.
- Añadidas múltiples imágenes para el Demogorgon.
- Añadida galería responsive en `killer.html`.
- Los poderes sin imagen muestran un placeholder sin romper la página.
- Reducido el tamaño visual de las imágenes de poderes.

### 2026-08-06 · Descripciones de poderes

- Añadido `KILLER_POWER_DATA` con descripciones en español.
- Fuentes anotadas en el propio JS: web oficial de Dead by Daylight y wiki oficial.
- Los personajes no oficiales o personalizados quedan pendientes de completar.

### 2026-08-06 · Datos editables de killers

- Creado `assets/js/killer-details-data.js`.
- Añadidos campos homogéneos para todos los killers del roster.
- Añadidos campos para velocidad, altura, dificultad, radio, poder, estilo y notas.
- La plantilla individual usa datos editables antes de los fallbacks automáticos.

### 2026-08-06 · Localización

- Añadido `assets/js/i18n.js`.
- Traducidos nombres visibles de killers y perks.
- Añadido selector de español de España y español latinoamericano.
- Normalizados los headers de las páginas.

### 2026-08-06 · Archivo y estados

- Añadida la sección de archivo completo de killers.
- Los killers navegan a páginas individuales.
- Añadidas fichas interactivas para estados del juego.
- Eliminado el texto destacado de las tarjetas del archivo.

### 2026-08-06 · Retirada de tierlist

- Eliminados `tierlist.html`, `assets/css/tierlist.css` y `assets/js/tierlist.js`.
- Eliminados enlaces, referencias del sitemap y mención del archivo de ideas.

### 2026-08-06 · Rediseño del hub

- Creada la identidad visual La Niebla.
- Rediseñadas portada, random perks, killer único y rutas.
- Añadida navegación común, footer, filtros y layout responsive.
- Añadido drag & drop para ordenar rutas.

## Checklist Para Cada Cambio

1. Actualizar primero el archivo de datos o lógica correspondiente.
2. Si cambia una UI, revisar desktop y móvil.
3. Si cambia un nombre, revisar `i18n.js` y las listas internas.
4. Si cambia un asset, comprobar que la ruta y extensión coincidan exactamente.
5. Ejecutar `node --check` sobre los JS modificados.
6. Ejecutar `git diff --check`.
7. Añadir una entrada inmediata a `Historial De Cambios` con fecha y archivos afectados.

## Pendientes Conocidos

- Completar datos técnicos de los killers en `KILLER_DETAILS`.
- Completar poderes e imágenes de personajes personalizados que no tienen fuente oficial.
- Unificar definitivamente las listas duplicadas de killers y perks en un único archivo de datos.
- Añadir supervivientes al archivo cuando se defina su estructura.
