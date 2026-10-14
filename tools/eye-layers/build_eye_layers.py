"""Builds the moving-iris layers for the Work section eyes from the flat painting.
The irises travel from corner to corner (maxOffset in the geometry JSON).

Usage:
  python tools/eye-layers/build_eye_layers.py "C:/Users/vaish/OneDrive/Desktop/portfolio/painted-eyes.jpeg"

Reads the eye positions from src/data/eye-geometry.json and writes, without touching the source:
  public/assets/eyes/painted-eyes-base.jpg  the painting with each iris replaced by eye white blended
                                             from either side, so a moving iris never uncovers a smudge
  public/assets/eyes/hair-mask.png         where the hair strands sway (white = moves), used by the
                                             animated SVG filter in src/components/PaintedEyes.tsx
  public/assets/eyes/iris-<id>.png          each iris as a full disc: the part hidden under the lid is
                                             filled from the iris itself, so no eyelid moves with it
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public/assets/eyes'


def polygon_mask(size, points):
    mask = Image.new('L', size, 0)
    ImageDraw.Draw(mask).polygon([tuple(p) for p in points], fill=255)
    return np.array(mask) > 0


def distance_from(size, cx, cy):
    yy, xx = np.mgrid[0:size[1], 0:size[0]]
    return np.hypot(xx - cx, yy - cy)


def harmonic_fill(region, hole, iterations=3000):
    """Each hole pixel becomes the average of its neighbours until it settles."""
    for _ in range(iterations):
        average = (np.roll(region, 1, 0) + np.roll(region, -1, 0) + np.roll(region, 1, 1) + np.roll(region, -1, 1)) / 4
        region[hole] = average[hole]
    return region


def main(source):
    geometry = json.loads((ROOT / 'src/data/eye-geometry.json').read_text(encoding='utf-8'))
    painting = Image.open(source).convert('RGB')
    assert painting.size == (geometry['width'], geometry['height']), f'Expected {geometry["width"]}x{geometry["height"]}, got {painting.size}'
    OUT.mkdir(parents=True, exist_ok=True)

    original = np.asarray(painting, dtype=np.float64)
    pixels = original.copy()
    rng = np.random.default_rng(7)
    for eye in geometry['eyes']:
        iris = eye['iris']
        cx, cy, r = iris['cx'], iris['cy'], iris['r']
        distance = distance_from(painting.size, cx, cy)
        aperture = polygon_mask(painting.size, eye['aperture'])

        # Behind the iris: each row is blended between the eye white just left and right of it,
        # so the gap carries the painting's own shading instead of the brown of the iris and lid.
        hole = (distance <= r + 6) & aperture
        for y in np.unique(np.nonzero(hole)[0]):
            xs = np.nonzero(hole[y])[0]
            xa, xb = xs.min(), xs.max()
            left = np.median(original[y, xa - 24:xa - 2], axis=0)
            right = np.median(original[y, xb + 3:xb + 25], axis=0)
            t = ((xs - xa) / max(1, xb - xa))[:, None]
            pixels[y, xs] = left * (1 - t) + right * t
        # Blur the fill so it reads as one soft curve of eye white rather than streaks, then add a
        # little grain to match the brushwork. The irises travel across the whole eye, so all of it shows.
        soft = np.asarray(Image.fromarray(np.clip(pixels, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(9)), dtype=np.float64)
        grain = np.asarray(Image.fromarray(rng.normal(128, 30, pixels.shape[:2]).astype(np.uint8)).filter(ImageFilter.GaussianBlur(.8)), dtype=np.float64) - 128
        # Lift it a touch towards the brightest painted white beside it, so it isn't greyer than the rest.
        side = aperture & (distance > r + 8) & (distance < r + 60)
        bright = np.percentile(original[side], 85, axis=0)
        pixels[hole] = soft[hole] * 0.85 + bright * 0.15 + grain[hole][:, None] * 0.3

        # Iris disc: pixels covered by the lid or lashes are filled from the visible iris.
        pad = 4
        box = (cx - r - pad, cy - r - pad, cx + r + pad, cy + r + pad)
        crop = original[box[1]:box[3], box[0]:box[2]].copy()
        local = distance_from((crop.shape[1], crop.shape[0]), r + pad, r + pad)
        inside_opening = aperture[box[1]:box[3], box[0]:box[2]]
        visible_iris = inside_opening & (local <= r - 2)
        missing = (local <= r + pad) & ~visible_iris
        crop[missing] = original[box[1]:box[3], box[0]:box[2]][visible_iris].mean(axis=0) * 0.8
        crop = harmonic_fill(crop, missing, 1500)
        crop[missing] += rng.normal(0, 3, (missing.sum(), 1))
        alpha = np.clip((r + 0.75 - local) / 1.5, 0, 1) * 255
        cutout = np.dstack([np.clip(crop, 0, 255), alpha]).astype(np.uint8)
        Image.fromarray(cutout, 'RGBA').save(OUT / f"iris-{eye['id']}.png", optimize=True)
        print(f"iris-{eye['id']}.png  box {box}")

    hair_mask(original, geometry)
    base = Image.fromarray(np.clip(pixels, 0, 255).astype(np.uint8))
    base.save(OUT / 'painted-eyes-base.jpg', quality=92, optimize=True, progressive=True)
    print('painted-eyes-base.jpg')


def hair_mask(original, geometry):
    """The dark strands down both sides and across the top corners, spread a little so the skin they
    move over goes with them. The eyes are kept still."""
    h, w = original.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w]
    sides = np.maximum(np.clip((345 - xx) / 85, 0, 1), np.clip((xx - 1275) / 85, 0, 1))
    corners = np.clip((60 - yy) / 40, 0, 1) * np.maximum(np.clip((520 - xx) / 120, 0, 1), np.clip((xx - 1100) / 120, 0, 1))
    region = np.maximum(sides, corners)
    luminance = original.mean(axis=2)
    dark = np.clip((150 - luminance) / 70, 0, 1)
    dark = np.asarray(Image.fromarray((dark * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.GaussianBlur(6)), dtype=np.float64) / 255
    still = np.zeros((h, w), dtype=np.uint8)
    for eye in geometry['eyes']:
        still = np.maximum(still, polygon_mask((w, h), eye['aperture']).astype(np.uint8) * 255)
    still = np.asarray(Image.fromarray(still).filter(ImageFilter.MaxFilter(41)).filter(ImageFilter.GaussianBlur(10)), dtype=np.float64) / 255
    alpha = np.clip(region * dark * (1 - still), 0, 1) * 255
    rgba = np.dstack([np.full((h, w, 3), 255, np.uint8), alpha.astype(np.uint8)])
    Image.fromarray(rgba, 'RGBA').save(OUT / 'hair-mask.png', optimize=True)
    print('hair-mask.png')


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
