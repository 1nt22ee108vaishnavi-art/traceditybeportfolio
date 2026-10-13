"""Pre-deploy checks for the portfolio.

Usage: python .claude/skills/deploy-app/scripts/validate.py [--no-build]

Exits non-zero if any check fails.
"""
import json
import re
import subprocess
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[4]
SECRET_PATTERNS = [r'(^|/)\.env(\..*)?$', r'\.pem$', r'\.key$', r'(^|/)\.vercel/']

results = []


def report(ok, name, detail=''):
    results.append(ok)
    print(f"{'PASS' if ok else 'FAIL'}  {name}{f' - {detail}' if detail else ''}")


def run(cmd):
    return subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, shell=sys.platform == 'win32')


def check_types():
    proc = run(['npx', 'tsc', '--noEmit', '-p', '.'])
    report(proc.returncode == 0, 'TypeScript check', (proc.stdout + proc.stderr).strip()[-800:])


def check_build():
    proc = run(['npm', 'run', 'build'])
    report(proc.returncode == 0, 'Production build', '' if proc.returncode == 0 else (proc.stdout + proc.stderr).strip()[-800:])


def check_images():
    source = (ROOT / 'src/data/portfolio.ts').read_text(encoding='utf-8')
    paths = []
    for name in re.findall(r"(?:artworkPath|workArtwork)\('([^']+)'", source):
        paths.append('assets/portfolio/organiser/' + name)
    for path in re.findall(r"src:\s*'/([^']+)'", source):
        paths.append(unquote(path))
    missing = sorted({p for p in paths if not (ROOT / 'public' / p).is_file()})
    report(not missing, f'Images referenced in portfolio.ts ({len(set(paths))})',
           'missing: ' + '; '.join(missing) if missing else '')


def check_rewrites():
    routes = re.findall(r'path="(/[^"*]+)"', (ROOT / 'src/App.tsx').read_text(encoding='utf-8'))
    rewrites = {r['source'] for r in json.loads((ROOT / 'vercel.json').read_text(encoding='utf-8')).get('rewrites', [])}
    missing = [r for r in routes if r != '/' and r not in rewrites]
    report(not missing, 'vercel.json rewrites cover app routes', 'missing: ' + ', '.join(missing) if missing else '')


def check_secrets():
    tracked = run(['git', 'ls-files']).stdout.splitlines()
    found = [f for f in tracked if any(re.search(p, f) for p in SECRET_PATTERNS)]
    report(not found, 'No secret files tracked in git', ', '.join(found))


if __name__ == '__main__':
    check_images()
    check_rewrites()
    check_secrets()
    check_types()
    if '--no-build' not in sys.argv:
        check_build()
    failed = results.count(False)
    print(f"\n{len(results) - failed} passed, {failed} failed")
    sys.exit(1 if failed else 0)
