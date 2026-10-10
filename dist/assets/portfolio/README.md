# Portfolio image replacements

Replace or add local image files at the paths configured in `src/data/portfolio.ts`.
All artwork paths are kept together in that file so the collections and Sketchbook
can be customised without changing their components.

- `portraits/home-portrait.jpg` — photo beside the homepage headline
- `portraits/about-portrait.jpg` — photo in the About Me spread
- `daybook/01.jpg` — homepage Daybook preview and first gallery photograph
- `daybook/02.jpg` through `08.jpg` — Daybook gallery photographs
- `sketchbook/sheet-01.jpg` through `sheet-04.jpg` — Sketchbook pages
- `categories/charcoal/01.jpg` and `02.jpg` — Cobalt collection
- `categories/watercolor/01.jpg` and `02.jpg` — Moss collection
- `categories/ink-and-watercolor/01.jpg` and `02.jpg` — Terracotta collection
- `categories/acrylic/01.jpg` and `02.jpg` — Ochre collection
- `categories/sketches-and-doodles/01.jpg` and `02.jpg` — Rose collection
- `categories/other-creations/01.jpg` and `02.jpg` — Plum collection

The category colours, pigment values, artwork paths, and crop positions are
editable in `src/data/portfolio.ts`. Keep the current slugs to preserve existing
collection URLs when changing their colours.

The Daybook preview and gallery photograph paths are also editable in
`src/data/portfolio.ts`. The homepage uses one preview image; the dedicated
`/daybook` page uses all entries in `daybookEntries`. Replace the example paths
with your own local photographs and update their alt text to describe each image.

Tempting was not present in the project and is not offered through Google Fonts.
Add a licensed copy as `public/assets/fonts/Tempting.woff2` and register that
file in an `@font-face` rule in `src/index.css` to load it. Until then, the
accent uses the editorial serif fallback rather than another script font.
Inter is loaded from Google Fonts.
