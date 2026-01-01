# Repository-specific Copilot instructions

This small repo contains a static loading page and a tiny Java example. The guidance below is concise and focused on what an AI coding agent needs to be immediately productive.

Key structure
- `Pantalladecarga/paginadecarga.html` — single static HTML loading screen. Links to `estilo.css` and `funciones.js` (note: stylesheet is linked after the `</body>` tag).
- `Pantalladecarga/estilo.css` and `barra_Carga.css` — CSS for the same UI. Expect duplicate selectors (`.progress-container`, `.progress-bar`, keyframes) and minor differences in colors/animation names.
- `Pantalladecarga/funciones.js` — currently empty; intended place for interactive behavior or to wire up the progress bar.
- `Pantalladecarga/analisisdeseñales/holamundo.java` — placeholder Java file; currently contains invalid syntax (`import.util.*;`).

What to do first (high-value, low-risk)
- Normalize CSS: prefer a single source of truth for the progress UI. If asked to modify visuals, update `Pantalladecarga/estilo.css` and remove or consolidate duplicate rules in `barra_Carga.css`.
- Move the `<link rel="stylesheet" href="estilo.css">` into the `<head>` of `paginadecarga.html` when adding scripts that depend on computed styles.
- Implement simple JS in `funciones.js` to set `.progress-bar` width or listen for `animationend` if you need to navigate away after loading.
- Fix Java file only if Java execution is required; otherwise treat it as an unused placeholder.

Developer workflows & quick commands (Windows PowerShell)
- Open the HTML in a browser by double-clicking `Pantalladecarga/paginadecarga.html` or run:
  - Start-Process "Pantalladecarga\paginadecarga.html"
- Compile the Java placeholder (only after fixing syntax and adding a public class):
  - javac "Pantalladecarga\analisisdeseñales\holamundo.java"; java -cp "Pantalladecarga\analisisdeseñales" HolaMundo

Repo-specific conventions and examples
- Styling and animation: look at `.progress-container`, `.progress-bar`, `@keyframes progressFill` and `toroRun` in `estilo.css` for examples of how animations are constructed here.
- Image assets (e.g., `bull (1).gif`, `logo_tecnm.png`) are referenced locally; keep paths relative to `paginadecarga.html`.
- Minimal JS pattern: use `document.querySelector('.progress-bar').style.width = '100%';` or `addEventListener('animationend', ...)` to trigger post-load behavior.

Integration points and gotchas
- Duplicate CSS rules: edits that change animation names, timings, or selector specificity may need changes in both CSS files.
- The HTML currently links the CSS after the `</body>` tag. If adding dynamic JS that measures layout, place the CSS link in `<head>` to avoid race conditions.
- The Java file is not wired into any build system; there is no `pom.xml`/`build.gradle` present, so Java code is standalone.

When you edit or add files
- Keep changes minimal and local to `Pantalladecarga/` unless instructed otherwise.
- Preserve file encoding (UTF-8) and Spanish comments where present.

Examples to reference in PRs
- To demonstrate adding interactive behavior, implement a 1-file change: update `funciones.js` to advance `.progress-bar` and then call `window.location` after 6s. Reference `estilo.css` animation duration when timing JS.

If anything is unclear, ask for:
- Which file should be considered the authoritative CSS (if you want consolidation).
- Whether the Java code should be fixed and included in a build setup.

End of instructions.
