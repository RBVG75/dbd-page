# La Niebla · DBD Challenge Hub

Hub estático de **Dead by Daylight** construido con HTML, CSS y JavaScript vanilla. Incluye retos, randomizadores, archivo de killers, páginas individuales y documentación de estados del juego.

## Contexto Vivo

La documentación completa del proyecto está en [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md).

Ese archivo contiene:

- Historial de cambios recientes.
- Mapa de páginas y scripts.
- Lugares donde editar killers, perks, poderes e imágenes.
- Funcionamiento de cada herramienta.
- Convenciones para mantener el proyecto entre sesiones.

## Páginas

- `index.html`: hub principal, ruleta de killers/perks, archivo de killers, estados y retos rápidos.
- `killer.html?id=1`: plantilla individual reutilizable para cualquier killer.
- `unique-killer.html`: killer aleatorio con perks random o perks únicas.
- `random-perks.html`: ruleta independiente de perks de killer y superviviente.
- `killer-routes.html`: creación y ejecución de rutas personalizadas.

La tierlist fue eliminada del proyecto.

## Editor De Datos

Usa `data-editor.html` para rellenar killers sin tocar código:

1. Abre `data-editor.html`.
2. Selecciona un killer.
3. Completa velocidad, altura, dificultad, radio, poder, estilo y notas.
4. Pulsa **GUARDAR** (se guarda en el navegador).
5. Pulsa **COPIAR JS** o **DESCARGAR .JS**.
6. Pega el resultado en `assets/js/killer-details-data.js`.

## Datos Editables

- `assets/js/killer-details-data.js`: datos técnicos, poderes, descripciones, notas e imágenes de poderes.
- `assets/js/i18n.js`: nombres de killers, nombres de perks y variantes `ES-ES` / `ES-LATAM`.
- `assets/js/app.js`: roster principal, perks, perks únicas y lógica de la ruleta.
- `assets/images/poderes_killers/`: imágenes de poderes; un poder puede tener varias.
- `assets/images/perks_killers/`: iconos de perks.

## Ejecución

Abrir `index.html` directamente en un navegador o servir la carpeta con cualquier servidor estático. No requiere build, backend ni dependencias de npm.

## Regla De Mantenimiento

Cada modificación funcional, visual, de datos o de assets debe registrarse inmediatamente en [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md), dentro de `Historial de Cambios`, incluyendo fecha, archivos afectados y una descripción breve.
