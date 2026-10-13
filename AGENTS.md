# AGENTS.md

Personal art portfolio for **traced.it.bye**. A static Vite + React + TypeScript
single-page site, styled with Tailwind and plain CSS, deployed on Vercel.

## Facts

- **Stack:** Vite 5, React 18, react-router-dom 6, TypeScript (strict), Tailwind 3, lucide-react icons.
- **No backend.** There is no API, database, auth, payment or environment variable. The commission
  form in `src/pages/Home.tsx` only opens a prepared `mailto:` email.
- **Routes** (`src/App.tsx`): `/`, `/work/:slug`, `/daybook`. `vercel.json` rewrites the last two to
  `/` so deep links work. A new top-level route also needs a rewrite there.
- **All content data** lives in `src/data/portfolio.ts`: portraits, Work collections (id, name,
  slug, pigment colour, artworks), Sketchbook pages, Daybook entries.
- **Images** are served from `public/assets/`. Artwork copies live in
  `public/assets/portfolio/organiser/` with their original file names, referenced through
  `artworkPath()` / `workArtwork()` in `portfolio.ts`.
- **Originals** are in `OneDrive\Desktop\portfolio` (`C:\Users\vaish\OneDrive\Desktop\portfolio`).
  The mapping exported by the organiser is `OneDrive\Desktop\artwork-mapping.json`.
- **Artwork organiser** (`tools/artwork-organiser/`) is a standalone local browser tool that drafts
  image assignments and exports `artwork-mapping.json`. It never edits the site.
- **`dist/` is committed.** Each site change has historically been committed together with its
  rebuilt `dist/` output.
- **Commands:** `npm run dev` (http://localhost:5173), `npm run build`, `npm run preview`,
  `npx tsc --noEmit -p .` (type check). There is no lint or test script.
- **Fonts:** Inter and Playfair Display load from Google Fonts. The accent font Tempting is not in
  the project and isn't on Google Fonts. To use it, add a licensed `public/assets/fonts/Tempting.woff2`
  and register it with `@font-face` in `src/index.css`; until then, the accent uses the serif fallback.
- **Remote:** `origin` = github.com/1nt22ee108vaishnavi-art/traceditybeportfolio, branch `main`.

## Rules

- Never modify, move, rename or delete the original images in OneDrive. Copy only.
- Never redo or second-guess the owner's artwork selections. Apply the exported mapping as is,
  and report anything it does not cover instead of guessing.
- Do not change the organiser tool, or site content unrelated to the request.
- Commit, push and deploy only when the owner asks. Pushing `main` can publish the live site.
- Keep collection `slug` values stable: they are public URLs (`/work/<slug>`).
- Run `python .claude/skills/deploy-app/scripts/validate.py` before any commit that touches `src/`,
  `public/` or `vercel.json`.

## Style guide

- **Code:** TypeScript function components, 2-space indent, single quotes, no semicolons. Match the
  surrounding file. Keep content in `portfolio.ts`, not hard-coded in components.
- **Copy:** warm, first-person, British spelling ("colour", "organiser"). Short sentences.
- **Images:** every image needs meaningful `alt` text. Use `position` (CSS `object-position`) to
  adjust crops rather than editing image files.
- **Commits:** short imperative subject, e.g. "Adjust About Me heading spacing".

## Skills

- `.claude/skills/deploy-app/`: validate, build and deploy to Vercel, verify, roll back.
- `.claude/skills/update-artwork/`: apply an organiser `artwork-mapping.json` to the site.
