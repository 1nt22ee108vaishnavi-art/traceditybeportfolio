---
name: update-artwork
description: Apply an artwork-mapping.json exported by the artwork organiser to the portfolio by copying the chosen images into the project and updating src/data/portfolio.ts. Use when the owner has new or changed artwork selections, mentions artwork-mapping.json or the organiser, or reports that images are missing on the site.
---

# Apply an artwork mapping

The owner chooses images in `tools/artwork-organiser/` and exports `artwork-mapping.json`.
Your job is to apply that file exactly. Do not reselect, reorder or "improve" the choices.

## Locations

- Originals: `C:\Users\vaish\OneDrive\Desktop\portfolio` (includes the `MS PAINT\` subfolder).
  These are OneDrive files that may be online-only. Reading them downloads them, which is fine.
- Mapping: `C:\Users\vaish\OneDrive\Desktop\artwork-mapping.json`. If missing, look in
  `C:\Users\vaish\Downloads` for `artwork-mapping*.json` and use the newest by `exportedAt`.
- Site copies: `public/assets/portfolio/organiser/<same relative path>`.

## Steps

1. Read the mapping and identify its format: `version` 1 or 2 (see `references/mapping-format.md`).
2. Copy each referenced file from the originals folder into `public/assets/portfolio/organiser/`,
   keeping the file name and any subfolder. Copy only: never move or edit originals. Confirm
   that each copy has the same hash as its original.
3. Update `src/data/portfolio.ts`:
   - Work artworks use `workArtwork('<relative path>', alt, position)`; others use
     `artworkPath('<relative path>')`. Relative paths use `/`, e.g. `MS PAINT/WhatsApp Image ….jpeg`.
   - Keep existing `alt` text and `position` crops for slots that already exist.
   - Keep the slugs unchanged. Only add a new collection if the mapping defines one, and ask
     the owner for its slug and colour if those are missing.
   - Leave targets the mapping does not cover unchanged, and list them in your report.
4. Back up `portfolio.ts` to the scratchpad before editing it.
5. Run `python .claude/skills/deploy-app/scripts/validate.py --no-build`: every image must exist.
6. Run `npm run dev` and give the owner http://localhost:5173 to review.

Do not commit, push or deploy unless asked.
