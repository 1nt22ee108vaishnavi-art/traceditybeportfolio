# Portfolio image replacements

Replace or add local image files at the paths configured in `src/data/portfolio.ts`.
The site keeps a warm paper-toned fallback visible until each file is provided.

- `portraits/home-portrait.jpg` — photo beside the homepage headline
- `portraits/about-portrait.jpg` — photo in the About Me spread
- `sketchbook/sketchbook-feature.jpg` — image on the Sketchbook's right page
- `categories/<category>/thumbnail.jpg` — palette thumbnail
- `categories/<category>/01.jpg` and `02.jpg` — category artwork

The category pigment colours, thumbnail paths, artwork paths, and crop positions
are all editable in `src/data/portfolio.ts`.
