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


def mapping_slots(mapping):
    """Yield (slot, image) for every destination in an organiser v2 mapping."""
    yield 'homepage hero', mapping['homepage']['heroImage']
    yield 'About portrait', mapping['about']['portrait']
    for category in mapping['work']['categories']:
        for artwork in category['artworks']:
            yield f"{category['name']} artwork {artwork['order']}", artwork['image']
    for item in mapping['sketchbook']:
        yield f"Sketchbook sheet {item['order']}", item['image']
    yield 'Daybook cover', mapping['daybook']['coverImage']
    for item in mapping['daybook']['gallery']:
        yield f"Daybook photo {item['order']}", item['image']


def check_images():
    mapping = json.loads((ROOT / 'src/data/artwork-mapping.json').read_text(encoding='utf-8'))
    slots = list(mapping_slots(mapping))
    unassigned = [slot for slot, image in slots if not image]
    missing = [f"{slot}: public/assets/portfolio/organiser/{image['file']}"
               for slot, image in slots if image and not (ROOT / 'public/assets/portfolio/organiser' / image['file']).is_file()]
    report(not unassigned, f'Every mapping slot has an image ({len(slots)} slots)', '; '.join(unassigned))
    report(not missing, 'Every mapped image exists in public/', 'missing: ' + '; '.join(missing) if missing else '')
    extras_path = ROOT / 'src/data/extra-artwork.json'
    if extras_path.exists():
        extras = json.loads(extras_path.read_text(encoding='utf-8'))
        files = [f for group in extras.get('work', {}).values() for f in group] + extras.get('daybook', [])
        absent = [f for f in files if not (ROOT / 'public/assets/portfolio/organiser' / f).is_file()]
        report(not absent, f'Every extra artwork exists in public/ ({len(files)})', '; '.join(absent))
    # Other images referenced directly by path in the data file.
    source = (ROOT / 'src/data/portfolio.ts').read_text(encoding='utf-8')
    direct = [unquote(p) for p in re.findall(r"src:\s*'/([^']+)'", source)]
    absent = [p for p in direct if not (ROOT / 'public' / p).is_file()]
    report(not absent, f'Direct image paths in portfolio.ts ({len(direct)})', '; '.join(absent))


def check_rewrites():
    # Route paths may be absolute ("/daybook") or nested ("daybook"); dynamic segments are skipped.
    paths = re.findall(r'path="([^"*]+)"', (ROOT / 'src/App.tsx').read_text(encoding='utf-8'))
    routes = ['/' + p.strip('/') for p in paths if ':' not in p]
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
