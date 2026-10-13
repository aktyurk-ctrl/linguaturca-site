"""Crop actual browser captures at DOM boundaries and assemble labelled review boards."""
import json
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
EVIDENCE = ROOT / 'evidence'
for row in json.loads((EVIDENCE / 'layout.json').read_text()):
    width = row['width']
    source = Image.open(EVIDENCE / f'after-{width}-full.jpg').convert('RGB')
    assert source.width == width, (source.size, width)
    for name, bounds in zip(['hero', 'formats', 'language', 'school'], row['sections']):
        top = 0 if name == 'hero' else math.floor(bounds['top'])
        source.crop((0, top, width, math.ceil(bounds['bottom']))).save(EVIDENCE / f'after-{width}-{name}.png')
    source.crop((0, 0, width, math.ceil(row['sections'][-1]['bottom']))).save(EVIDENCE / f'after-{width}-all.png')
    if width == 1440:
        raw = EVIDENCE / 'no-photos-1440-full.jpg'
        if raw.exists():
            Image.open(raw).crop((0, 0, width, math.ceil(row['sections'][0]['bottom']))).save(EVIDENCE / 'no-photos-1440-hero.png')

font_path = ROOT.parent / 'prototype/fonts/onest-Onest[wght].ttf'
font = ImageFont.truetype(str(font_path), 18)
small = ImageFont.truetype(str(font_path), 12)
for width, label in [(1440, 'desktop'), (390, 'mobile')]:
    for section in ['hero', 'language', 'all']:
        paths = [ROOT.parent / 'bosphorus/evidence' / f'after-{width}-{section}.png', EVIDENCE / f'after-{width}-{section}.png']
        shots = [Image.open(path).convert('RGB') for path in paths]
        display_width = 720 if width == 1440 else 390
        shots = [im.resize((display_width, round(im.height * display_width / im.width)), Image.Resampling.LANCZOS) for im in shots]
        board = Image.new('RGB', (display_width * 2 + 60, max(im.height for im in shots) + 128), '#e8edf1')
        draw = ImageDraw.Draw(board)
        for i, (title, shot) in enumerate(zip(['БЫЛО · Bosphorus Blue', 'НОВОЕ · Язык на полях жизни'], shots)):
            x = 20 + i * (display_width + 20)
            draw.text((x, 18), title, fill='#09234b', font=font)
            board.paste(shot, (x, 56))
        draw.text((20, board.height - 54), 'Фасад: Turkish delight2 · CC BY 4.0. Паром: Tarik Kaan Muslu · CC BY-SA 4.0.', fill='#54647c', font=small)
        draw.text((20, board.height - 36), 'Кадрирование. Источники и лицензии: README.md и compare.html рядом с evidence.', fill='#54647c', font=small)
        draw.text((20, board.height - 18), 'НЕ УТВЕРЖДЕНО · Учебные объяснения и цитата Дарьи ожидают реальных материалов.', fill='#54647c', font=small)
        board.save(EVIDENCE / f'comparison-{label}-{section}.png')
print('Saved section captures and six comparison boards.')
