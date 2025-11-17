This repository is a small, single-page static portfolio site (plain HTML + CSS). The goal of this file is to give an AI coding agent just the focused, actionable context it needs to be productive in this codebase.

- Quick facts
  - Key files: `index.html`, `style.css`, `README.md` (root).
  - No build tools, package manager, or server-side code found — changes are static and can be previewed by opening `index.html` or serving the folder with a static server.

- Big picture (what to know before editing)
  - `index.html` is the single page. Main logical sections: header (profile + navigation), main with sections id home and id creations, and an empty `.periodic_table` placeholder.
  - `style.css` contains a resume-style grid layout (classes such as `.resume-contents`, `.left-section`, `.right-section`) that does not fully match the current `index.html` markup — watch for mismatches before applying broad CSS refactors.

- Project-specific conventions and gotchas
  - Class naming is mixed Portuguese/English and includes what looks like a typo: `pefil` (probably meant `perfil`). Examples: `.pefil`, `.nome`, `.informacao`, `.sobre_min`, `.planet_photo` in `index.html`.
  - `style.css` appears sourced from a different resume template (many selectors unused by `index.html`). Avoid large-scale renames; prefer adding small, local styles or aligning markup to the chosen stylesheet after confirming intent.
  - Image tags in `index.html` have empty `src` attributes. Use a stable assets folder (`assets/` or `images/`) with relative paths and fill meaningful `alt` text.

- Concrete editing guidance (do these when changing code)
  - If you add or change classes, update both `index.html` and `style.css`. Example: if you change `pefil` -> `perfil`, update HTML and any CSS selectors or add a compatibility selector `.pefil, .perfil { ... }` first, then remove the old name after the PR is reviewed.
  - Preserve global resets in `style.css` (the `* { ... }` block). Many visual dependences rely on these base styles.
  - Keep navigation anchors consistent with section IDs: the anchor fragment for the home section must match the element id 'home'.
  - Add Google Fonts (Roboto is referenced in CSS) by adding the `<link href="https://fonts.googleapis.com/..." rel="stylesheet">` in the head if typography changes are required.

- How to preview and validate locally
  - Quick preview: open `index.html` in any browser (no build required).
  - Lightweight static server (PowerShell):

```powershell
# serve current folder on http://localhost:8000
python -m http.server 8000
```

  - Optionally use VS Code Live Server extension to preview with automatic reloads.

- What to avoid / edge cases
  - Don't assume JS or build tooling will be present; adding tooling is fine but mention it in the PR and add minimal docs (README) for new workflows.
  - Avoid sweeping renames of class names or converting the project to a framework without explicit approval from the repo owner — the stylesheet and HTML are loosely coupled and may reflect different templates.

- Useful file references (examples to inspect before edits)
  - `index.html`: header structure (profile + navigation), main with ids home, creations, and `.periodic_table` placeholders.
  - `style.css`: grid-based resume layout and many responsive media queries (may be partly unused).

If anything above is unclear or you want me to align markup and stylesheet (for example, unify class names and remove unused CSS), tell me whether you prefer to: (A) adapt HTML to the existing CSS, or (B) pare down `style.css` to match the current HTML. I can prepare a focused PR for either choice.
