#!/usr/bin/env bash
# Validate, then deploy the portfolio with the Vercel CLI.
# Usage: bash .claude/skills/deploy-app/scripts/deploy.sh [--prod]
# Without --prod this makes a preview deployment only.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"
cd "$ROOT"

python .claude/skills/deploy-app/scripts/validate.py

if [[ "${1:-}" == "--prod" ]]; then
  echo "Deploying to PRODUCTION..."
  npx vercel deploy --prod
else
  echo "Deploying a preview..."
  npx vercel deploy
fi
