# Artwork Organiser

A standalone local-only helper for drafting image assignments. It does not edit
the portfolio source, copy images, or upload files.

## Open it

1. Double-click `index.html`, or serve this folder locally with
   `python -m http.server 8765 --directory tools/artwork-organiser` and open
   `http://127.0.0.1:8765`.
2. In a current Chrome or Edge browser, choose **Choose image folder** and
   select `OneDrive\Desktop\portfolio`, or choose **Choose image files**.
3. Select images in the collection. Use the section selector to edit the
   homepage hero, About portrait, Work, Sketchbook, or Daybook.
4. Assign images using the dropdowns, or bulk-add selected images to a Work
   category, Sketchbook, or Daybook gallery. Use the up/down controls to set
   image order. An image may be assigned more than once.
5. Check the draft validation, review the complete JSON preview, then select
   **Export complete JSON mapping** when ready.

The browser grants access only to files you choose. Previews use temporary
browser object URLs; source files are not changed. Your draft is stored in
browser local storage on this device. Export downloads `artwork-mapping.json`;
it does not update or publish the website.

The export represents custom categories, unlimited artwork entries and ordered
Sketchbook/Daybook arrays. The current site data has arrays for those entries,
but a new Work category also needs a website data entry, a stable URL slug, and
its desired display colour before that category can appear live. Review the JSON,
copy selected images into `public/assets/portfolio`, then update
`src/data/portfolio.ts` separately when you are ready to change the portfolio.
Each assigned image includes its path relative to the selected folder. An
`importKey` distinguishes files that have the same relative path when selected
individually; it is an organiser-only identifier, not a path on your website.
