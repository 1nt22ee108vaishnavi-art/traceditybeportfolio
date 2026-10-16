# AGENTS.md

Personal art portfolio for **traced.it.bye**. A static Vite + React + TypeScript
single-page site, styled with Tailwind and plain CSS, deployed on Vercel.

## Facts

- **Stack:** Vite 5, React 18, react-router-dom 6, TypeScript (strict), Tailwind 3, lucide-react icons.
- **No backend.** There is no API, database, auth, payment or environment variable. The commission
  form in `src/pages/Home.tsx` posts to FormSubmit (formsubmit.co), which emails it to vonthegoo@gmail.com.
- **Routes** (`src/App.tsx`): `/`, `/work/:slug`, `/daybook`. `vercel.json` rewrites the last two to
  `/` so deep links work. A new top-level route also needs a rewrite there.
- **Artwork data:** `src/data/portfolio.ts` builds every image list from two files:
  `src/data/artwork-mapping.json` (an unedited organiser export, v2) and
  `src/data/extra-artwork.json` (artwork in the folder that the mapping misses, sorted by medium;
  the owner's added MS Paint collection, which takes the mapping's Acrylic pieces; and the Work
  order: Acrylic, Charcoal, MS Paint, then the rest; Plum (`other-creations`) is merged into Acrylic
  via `mergedInto`, and its old URL opens Acrylic). No display limits. The Sketchbook section was
  removed from the homepage at the owner's request; its data is unused.
- **Images** are served from `public/assets/`. Artwork copies live in
  `public/assets/portfolio/organiser/` with their original file names.
- **Image display:** collection artwork shows whole at its own proportions, with no paper cards,
  shadows or torn-edge clipping; `src/components/ArtworkPreview.tsx` opens a zoomable preview for
  any `<img data-preview>`.
- **Originals** are in `OneDrive\Desktop\portfolio` (`C:\Users\vaish\OneDrive\Desktop\portfolio`).
  `OneDrive\Desktop\artwork-mapping.json` is an older v1 export; the current mapping is in `src/data/`.
- **Backup:** the eye-homepage experiments are kept in the git stash "Eye redesign and later work".
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
