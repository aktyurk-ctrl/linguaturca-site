"""Crop browser screenshots using recorded DOM section bounds; assemble review boards."""
from pathlib import Path
import json
import math
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent
EVIDENCE = ROOT / 'evidence'
records = json.loads((EVIDENCE / 'layout.json').read_text())
for row in records:
    side, width = row['side'], row['width']
    source = Image.open(EVIDENCE / f'{side}-{width}-full.jpg').convert('RGB')
    assert source.width == width, (side, width, source.size)
    for i, name in enumerate(['hero', 'formats', 'language', 'school']):
        section = row['sections'][i]
        top = 0 if i == 0 else math.floor(section['top'])
        bottom = math.ceil(section['bottom'])
        source.crop((0, top, width, bottom)).save(EVIDENCE / f'{side}-{width}-{name}.png')
    source.crop((0, 0, width, math.ceil(row['sections'][-1]['bottom']))).save(EVIDENCE / f'{side}-{width}-all.png')

font_path = ROOT.parent / 'prototype/fonts/onest-Onest[wght].ttf'
font = ImageFont.truetype(str(font_path), 20)
small = ImageFont.truetype(str(font_path), 12)
for width, label in [(1440, 'desktop'), (390, 'mobile')]:
    for section in ['hero', 'language', 'all']:
        shots = [Image.open(EVIDENCE / f'{side}-{width}-{section}.png').convert('RGB') for side in ['before', 'after']]
        target_width = 720 if width == 1440 else 390
        shots = [im.resize((target_width, round(im.height * target_width / im.width)), Image.Resampling.LANCZOS) for im in shots]
        board = Image.new('RGB', (target_width * 2 + 60, max(im.height for im in shots) + 118), '#eee8db')
        draw = ImageDraw.Draw(board)
        for i, (title, im) in enumerate(zip(['БЫЛО · Blue Core', 'НОВОЕ · Bosphorus Blue'], shots)):
            x = 20 + i * (target_width + 20)
            draw.text((x, 18), title, fill='#09234b', font=font)
            board.paste(im, (x, 56))
        draw.text((20, board.height - 40), 'Паром: Tarik Kaan Muslu · Wikimedia Commons · CC BY-SA 4.0', fill='#54647c', font=small)
        draw.text((20, board.height - 22), 'Кадрирование при показе · ссылки на источник и лицензию в README и preview', fill='#54647c', font=small)
        board.save(EVIDENCE / f'comparison-{label}-{section}.png')
print('Created section screenshots and six before/after boards.')
