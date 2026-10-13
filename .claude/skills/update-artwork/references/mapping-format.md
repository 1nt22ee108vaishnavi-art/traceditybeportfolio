# artwork-mapping.json formats

Both formats have `"format": "artwork-organiser-mapping"`. File paths are relative to the
folder chosen in the organiser (normally `portfolio`).

## Version 1 (older organiser)

A flat `assignments` list. Only assigned slots appear.

```json
{ "version": 1, "assignments": [
  { "targetId": "work:charcoal:01", "section": "work", "file": "WhatsApp Image ….jpeg" }
] }
```

| `targetId`              | `portfolio.ts` field                                  |
|-------------------------|-------------------------------------------------------|
| `daybook:preview`       | `portfolioImages.daybookPreview.src`                   |
| `daybook:entry-NN`      | `daybookEntries[NN-1]`                                 |
| `work:<categoryId>:NN`  | `workCategories` item with that `id`, `artworks[NN-1]` |

Order comes from `NN`, not from the order in the list. The only v1 export seen so far
(13 Oct 2026) had no hero, About or Sketchbook targets. If another `targetId` appears, map it
by its `targetLabel` and confirm with the owner.

## Version 2 (current organiser)

The structure mirrors the site:

- `homepage.heroImage` → `portfolioImages.homePortrait`
- `about.portrait` → `portfolioImages.aboutPortrait`
- `work.categories[]` (`id`, `name`, `slug`, `pigment`, `order`, `artworks[].image`) → `workCategories`
- `sketchbook[].image` → `sketchbookPages`
- `daybook.coverImage` → `portfolioImages.daybookPreview`; `daybook.gallery[].image` → `daybookEntries`

Each `image` is `null` or an object with a relative `path`. An `importKey` is organiser-only
and is never a website path. `validation` lists slots that were left unassigned when exported:
report them to the owner and don't fill them yourself.
