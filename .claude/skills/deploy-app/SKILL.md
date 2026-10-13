---
name: deploy-app
description: Validate, build and deploy the portfolio to Vercel, then verify the live site and roll back if needed. Use when asked to deploy, publish, release, ship or push the site live, or to check that the site is ready to deploy.
---

# Deploy the portfolio

The site is a static Vite build hosted on Vercel. There is no API or backend to deploy.
Only deploy when the owner explicitly asks.

## 1. Check

```bash
python .claude/skills/deploy-app/scripts/validate.py
```

It runs the TypeScript check and a production build, and confirms that:
- every image referenced in `src/data/portfolio.ts` exists under `public/`;
- `vercel.json` has a rewrite for every route in `src/App.tsx`;
- no secret-looking files (`.env*`, `*.pem`, `*.key`, `.vercel/`) are tracked in git.

Fix every FAIL before going on. `--no-build` skips the build (it rewrites the tracked `dist/`).

## 2. Deploy

Choose the route that matches how the project is set up (see `references/POLICY_FAQ.md`):

- **Git integration (default):** commit the source changes together with the rebuilt `dist/`, then
  push `main`. Vercel builds and publishes automatically.
- **Vercel CLI:** `bash .claude/skills/deploy-app/scripts/deploy.sh` makes a preview deployment.
  Add `--prod` for production. The script runs `validate.py` first and stops on failure.

## 3. Verify

Open the deployment URL and check:
- `/`, `/daybook` and one `/work/<slug>` page load directly (not only via in-app links);
- artwork images load, with no 404s in the browser network tab;
- the commission form opens an email draft.

## 4. Roll back

- In the Vercel dashboard, open **Deployments**, choose the last good one and click **Promote to Production**.
- Or with the CLI: `npx vercel rollback` (or `npx vercel rollback <deployment-url>`).
- Then fix forward: `git revert <bad-commit>` and push. Do not force-push `main`.

Settings to fill in for a CLI deploy are in `assets/config-template.json`.
