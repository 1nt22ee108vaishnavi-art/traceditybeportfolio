# Deploy policy and FAQ

**Who deploys?**
Only the site owner, or an agent the owner has explicitly asked to deploy in the current
conversation. Approval to deploy once does not carry over to later changes.

**How does a deploy happen?**
This repo has no `.vercel/` link folder, so it is most likely connected through Vercel's Git
integration: pushing `main` triggers a production build. Treat any push to `main` as a deploy.
The CLI route (`scripts/deploy.sh`) needs a one-time `npx vercel link` first.

**Why is `dist/` committed?**
That is the project's history: each change has been committed with its rebuilt `dist/`. Vercel
builds from source anyway, so `dist/` in git is a snapshot, not what Vercel serves.
Keep it in step with the source when committing.

**Payments?**
There are none. The commission form only opens a `mailto:` draft, so there is nothing to pause.
To take the form offline, remove or hide it in `src/pages/Home.tsx` and deploy.

**Cache headers?**
Vercel's defaults apply: hashed files under `/assets/index-*.js|css` are cached long-term,
and `index.html` is revalidated. Images in `public/` keep their names, so if you replace
an image while keeping the same file name, visitors may see the old one for a while. Use a new file name
for a replacement image instead.

**A deep link shows a 404.**
Add a rewrite for the route to `vercel.json`. `validate.py` checks for this.

**Recovery**
1. Promote the last good deployment in the Vercel dashboard (or `npx vercel rollback`).
2. `git revert` the bad commit and push it so `main` matches production again.
3. Images can always be re-copied from `OneDrive\Desktop\portfolio`. Never edit those originals.
