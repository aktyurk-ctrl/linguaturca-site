"""Crop browser screenshots using recorded DOM section bounds; requires Pillow.

Capture full-{width}.jpg and layout.json through the browser first.
This script only crops/composes screenshots, never fabricates page content.
"""
import json
import math
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).parent / 'evidence'
layouts = json.loads((ROOT / 'layout.json').read_text())

for path in ROOT.glob('*.jpg'):
    with Image.open(path) as source:
        if source.format != 'JPEG':
            source.convert('RGB').save(path, format='JPEG', quality=94)

for layout in layouts:
    width = layout['requested']
    source = Image.open(ROOT / f'full-{width}.jpg')
    assert source.width == width
    sections = {}
    for section in layout['sections']:
        top = 0 if section['id'] == 'hero' else math.floor(section['top'])
        bottom = min(source.height, math.ceil(section['bottom']))
        section_image = source.crop((0, top, width, bottom))
        sections[section['id']] = section_image
        if width in (390, 1440):
            section_image.save(ROOT / f"{section['id']}-{width}.jpg", quality=93)
    if width in (320, 768, 1024):
        parts = []
        names = ('hero', 'formats', 'pricing', 'signup')
        for name in names:
            part = sections[name].copy()
            part.thumbnail((480, 2100))
            parts.append(part)
        board = Image.new('RGB', (sum(p.width for p in parts) + 50,
                                 max(p.height for p in parts) + 40), '#e8e5df')
        x = 10
        for name, part in zip(names, parts):
            ImageDraw.Draw(board).text((x, 10), f'{width}px - {name}', fill='#282e30')
            board.paste(part, (x, 30))
            x += part.width + 10
        board.save(ROOT / f'qa-{width}.jpg', quality=93)

desktop = next(x for x in layouts if x['requested'] == 1440)
source = Image.open(ROOT / 'full-1440.jpg')
bounds = [0] + [math.floor(s['top']) for s in desktop['sections']
                if s['id'] in ('teachers', 'reviews')] + [source.height]
parts = []
for top, bottom in zip(bounds, bounds[1:]):
    part = source.crop((0, top, 1440, bottom))
    parts.append(part.resize((792, round(part.height * .55))))
board = Image.new('RGB', (2416, max(p.height for p in parts) + 50), '#e8e5df')
for index, part in enumerate(parts):
    board.paste(part, (8 + index * 800, 40))
    ImageDraw.Draw(board).text((16 + index * 800, 12),
                              f'Desktop 1440 - {index + 1}/3', fill='#282e30')
board.save(ROOT / 'desktop-overview.jpg', quality=93)
