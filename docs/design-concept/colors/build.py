"""Build three isolated color variants from the unchanged approved-layout prototype.
Run with Python + Pillow. Source HTML, CSS, JS, photo files and logo are not modified.
"""
from pathlib import Path
from collections import Counter
import json, hashlib, re
from PIL import Image
ROOT=Path(__file__).resolve().parent
SOURCE=ROOT.parent/'prototype'
logo=ROOT.parents[2]/'public/logo.png'
im=Image.open(logo).convert('RGBA')
counts=Counter(tuple(p[:3]) for p in im.getdata() if p[3]>=250)
opaque=sum(counts.values())
def rgb(h):return tuple(int(h[i:i+2],16) for i in (1,3,5))
chosen=[('#00D2F2','Основной голубой фон'),('#0057D8','Синий в одежде'),('#004FC6','Тёмный синий в одежде'),('#F1FAFE','Светлое оперение'),('#DDF3FE','Голубая тень оперения'),('#F62222','Красный фески и флага'),('#D60B0B','Тень красного'),('#FFEF7F','Жёлтый клюва'),('#F0C948','Золотистая тень'),('#000000','Контур')]
extracted={'source':'public/logo.png','sha256':hashlib.sha256(logo.read_bytes()).hexdigest(),'size':im.size,'method':'Exact RGB histogram of pixels with alpha >= 250; no quantization. Percentages refer to this opaque-pixel subset, not the full rectangular image.','opaque_pixels':opaque,'colors':[{'hex':h,'role':role,'pixels':counts[rgb(h)],'percent':round(100*counts[rgb(h)]/opaque,2)} for h,role in chosen],'derivations':{'navy':'#09234B = round(20% #0057D8 + 80% #0B1628), RGB channel blend','secondary':'#EBF2FC = round(8% #0057D8 + 92% #FFFFFF), RGB channel blend','warm':'#F7C0BC = round(25% #F62222 + 75% #F7F5EF), RGB channel blend','pressed':'#0046AD = round(80% #0057D8 + 20% #000000), RGB channel blend'}}
(ROOT/'evidence/logo-colors.json').write_text(json.dumps(extracted,ensure_ascii=False,indent=2)+'\n')
common={'primary':'#0057D8','dark-primary':'#09234B','accent':'#00D2F2','background':'#F7F5EF','secondary-background':'#EBF2FC','text':'#09234B','muted-text':'#54647C','border':'#C8D1DE','control-border':'#7183A0','cta':'#0057D8','cta-text':'#FFFFFF','hover':'#004FC6','hover-text':'#FFFFFF','pressed':'#0046AD','focus':'#0057D8','focus-dark':'#00D2F2','disabled-bg':'#E1E5EC','disabled-text':'#59657A','dark-muted':'#C0D0E8','dark-border':'#61799D','wash':'#EFEDE8','display':'#0057D8','note':'#00D2F2','note-text':'#09234B','small-accent':'#DDF3FE','inverse-accent':'#00D2F2','method-bg':'#EBF2FC','method-line':'#B9CBE4','final-bg':'#DDF3FE','link':'#0057D8'}
palettes={
 'a':dict(common,name='Blue Core',description='Точный синий логотипа, ink-navy и тёплая бумага. Cyan — узнаваемая небольшая деталь.'),
 'b':dict(common,name='Blue + Warm Accent',description='Та же синяя основа. Один мягкий коралловый акцент — на приветствии, стрелках и коротких выделениях.',accent='#F7C0BC',note='#F7C0BC',**{'small-accent':'#F7C0BC','inverse-accent':'#F7C0BC'}),
 'c':dict(common,name='Blue / Cyan Editorial',description='Голубой логотипа выходит на крупные смысловые поверхности. Глубокий синий держит текст и композицию.',primary='#00D2F2',accent='#0057D8',cta='#00D2F2',hover='#00BCD8',pressed='#00A8C2',**{'cta-text':'#09234B','hover-text':'#09234B','secondary-background':'#DDF3FE','method-bg':'#00D2F2','method-line':'#0088A5','final-bg':'#00D2F2','small-accent':'#DDF3FE','wash':'#F1FAFE'}),
}
(ROOT/'palettes.json').write_text(json.dumps(palettes,ensure_ascii=False,indent=2)+'\n')
source=(SOURCE/'index.html').read_text()
for key,palette in palettes.items():
 html=source.replace('<title>Linguaturca — концепция A / B</title>',f'<title>{key.upper()} · {palette["name"]} — Linguaturca</title>').replace('href="style.css"','href="../prototype/style.css"')
 html=html.replace('</head>','<link rel="stylesheet" href="palettes.css" />\n</head>').replace('<body>',f'<body data-palette="{key}">')
 html=html.replace('КОНЦЕПЦИЯ · 13.10.2026',f'{key.upper()} / {palette["name"]}')
 html=html.replace('A → B: сменить палитру','Сравнить A / B / C').replace('href="styleguide.html"','href="index.html#tokens"').replace('Дизайн-система ↗','Палитры ↗')
 html=html.replace('src="prototype.js"','src="variant.js"')
 (ROOT/f'{key}.html').write_text(html)
js=(SOURCE/'prototype.js').read_text()
start=js.index("const theme = document.querySelector('#theme');")
end=js.index("const enroll =",start)
js=js[:start]+"document.querySelector('#theme').addEventListener('click', () => { window.location.href = 'index.html'; });\n"+js[end:]
(ROOT/'variant.js').write_text(js)
css=['/* Color overrides only. All layout and typography come from ../prototype/style.css. */']
for key,p in palettes.items():
 css.append(f'body[data-palette="{key}"] {{')
 for role,value in p.items():
  if value.startswith('#'):css.append(f'  --color-{role}: {value};')
 css.append('}')
css.append('''
body[data-palette] {
 --paper:var(--color-background); --ink:var(--color-text); --muted:var(--color-muted-text);
 --teal:var(--color-link); --hover:var(--color-hover); --press:var(--color-pressed);
 --cyan:var(--color-note); --mint:var(--color-secondary-background); --lime:var(--color-small-accent);
 --coral:var(--color-accent); --line:var(--color-border); --dark:var(--color-dark-primary);
 --on-dark:var(--color-background); --wash:var(--color-wash); --focus:var(--color-focus);
}
body[data-palette] .button {background:var(--color-cta);color:var(--color-cta-text)}
body[data-palette] .button:hover {background:var(--color-hover);color:var(--color-hover-text)}
body[data-palette] .button:active {background:var(--color-pressed);color:var(--color-hover-text)}
body[data-palette] button:disabled {background:var(--color-disabled-bg);color:var(--color-disabled-text)}
body[data-palette] h1 span {color:var(--color-display)}
body[data-palette] .status-dot {background:var(--color-primary)}
body[data-palette] .hello {background:var(--color-note);color:var(--color-note-text)}
body[data-palette] .method {background:var(--color-method-bg)}
body[data-palette] .method-list article {border-bottom-color:var(--color-method-line)}
body[data-palette] .school h2 em,
body[data-palette] .role,
body[data-palette] .team-pending>span {color:var(--color-inverse-accent)}
body[data-palette] .annotation.inverse,
body[data-palette] .team-pending small {color:var(--color-dark-muted)}
body[data-palette] .team-strip,
body[data-palette] .team-pending {border-color:var(--color-dark-border)}
body[data-palette] .final-cta {background:var(--color-final-bg)}
body[data-palette] input {border-color:var(--color-control-border)}
body[data-palette] dialog::backdrop {background:rgba(9,35,75,.60)}
body[data-palette] .school :focus-visible,
body[data-palette] .hero-portrait :focus-visible,
body[data-palette] .reviewbar :focus-visible {outline-color:var(--color-focus-dark)}
body[data-palette="c"] .method-list p {color:var(--color-text)}
body[data-palette="c"] .final-cta .button {background:var(--color-dark-primary);color:#fff}
body[data-palette="c"] .final-cta .button:hover {background:#004FC6}
body[data-palette="c"] .final-cta .button:active {background:#0046AD}
body[data-palette="c"] .final-cta .button:focus-visible {outline-color:var(--color-text)}
''')
(ROOT/'palettes.css').write_text('\n'.join(css))
def luminance(h):
 vs=[v/255 for v in rgb(h)];vs=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in vs]
 return sum(a*b for a,b in zip(vs,[.2126,.7152,.0722]))
def ratio(a,b):
 l,h=sorted([luminance(a),luminance(b)]);return round((h+.05)/(l+.05),2)
contrast={}
for key,p in palettes.items():
 pairs=[('body','text','background',4.5),('muted','muted-text','background',4.5),('muted surface','muted-text','secondary-background',4.5),('button','cta-text','cta',4.5),('hover','hover-text','hover',4.5),('pressed','hover-text','pressed',4.5),('note','note-text','note',4.5),('school','background','dark-primary',4.5),('school accent','inverse-accent','dark-primary',4.5),('school muted','dark-muted','dark-primary',4.5),('final','text','final-bg',4.5),('focus light','focus','background',3),('focus dark','focus-dark','dark-primary',3),('control border','control-border','background',3),('disabled (target, exempt)','disabled-text','disabled-bg',4.5),('focus method','focus','method-bg',3)]
 contrast[key]=[dict(role=label,foreground=p[fg],background=p[bg],ratio=ratio(p[fg],p[bg]),target=minratio,pass_=ratio(p[fg],p[bg])>=minratio) for label,fg,bg,minratio in pairs]
contrast['reference']=[{'role':'Actual logo cyan on warm paper','ratio':ratio('#00D2F2','#F7F5EF'),'use':'Not for small text on paper'},{'role':'Logo blue on warm paper','ratio':ratio('#0057D8','#F7F5EF')},{'role':'C final inverse button','ratio':ratio('#FFFFFF','#09234B')}]
(ROOT/'evidence/contrast.json').write_text(json.dumps(contrast,ensure_ascii=False,indent=2)+'\n')
print('Extracted colors:',extracted['colors'])
print('Contrast failures:',[(k,v) for k,vals in contrast.items() if k!='reference' for v in vals if not v['pass_']])
# Demonstrate that only reviewer chrome, links to color resources, and body theme differ.
def site_content(s):
 return s[s.index('<header class="header">'):s.index('<script src=')]
assert all(site_content((ROOT/f'{k}.html').read_text())==site_content(source) for k in palettes)
(ROOT/'evidence/source-preservation.json').write_text(json.dumps({'base':'../prototype/index.html','main_and_header_footer_dialogs_identical':True,'source_sha256':hashlib.sha256(source.encode()).hexdigest(),'variants':['a.html','b.html','c.html'],'production_modified':False},indent=2)+'\n')
