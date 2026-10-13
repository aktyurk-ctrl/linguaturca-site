"""Verify design font character coverage and contrast without third-party packages."""
from pathlib import Path
import struct,json,hashlib
ROOT=Path(__file__).resolve().parents[1]
chars='АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяÇĞİÖŞÜçğıöşü₽'
def coverage(p):
 b=p.read_bytes();u16=lambda o:struct.unpack_from('>H',b,o)[0];u32=lambda o:struct.unpack_from('>I',b,o)[0]
 tables={b[12+i*16:16+i*16].decode('ascii'):u32(20+i*16) for i in range(u16(4))};base=tables['cmap'];codes=set()
 for i in range(u16(base+2)):
  record=base+4+i*8;platform=u16(record);encoding=u16(record+2);pos=base+u32(record+4);fmt=u16(pos)
  if platform not in (0,3):continue
  if fmt==12:
   for j in range(u32(pos+12)):
    start,end,glyph=struct.unpack_from('>III',b,pos+16+12*j)
    codes.update(range(start+(glyph==0),end+1))
  elif fmt==4:
   n=u16(pos+6)//2;endbase=pos+14;startbase=endbase+n*2+2;deltabase=startbase+n*2;rangebase=deltabase+n*2
   for j in range(n):
    start=u16(startbase+2*j);end=u16(endbase+2*j);delta=u16(deltabase+2*j);offset=u16(rangebase+2*j)
    for c in range(start,end+1):
     glyph=(c+delta)%65536 if offset==0 else u16(rangebase+2*j+offset+2*(c-start))
     if glyph:codes.add(c)
 return {'font':p.name,'sha256':hashlib.sha256(b).hexdigest(),'tested':chars,'missing':[c for c in chars if ord(c) not in codes]}
fonts=[coverage(p) for p in (ROOT/'prototype/fonts').glob('*.ttf')]
(ROOT/'evidence/font-coverage.json').write_text(json.dumps(fonts,ensure_ascii=False,indent=2))
def lum(s):
 rgb=[int(s[i:i+2],16)/255 for i in (1,3,5)];rgb=[v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4 for v in rgb];return sum(a*b for a,b in zip(rgb,[.2126,.7152,.0722]))
pairs=[('A body','#143B3A','#F7F5EF'),('A muted','#526562','#F7F5EF'),('A button','#FFFFFF','#006B65'),('A hover','#FFFFFF','#00544F'),('A active','#FFFFFF','#003F3B'),('A cyan','#143B3A','#39C7E5'),('A lime','#143B3A','#DCE898'),('A mint','#143B3A','#DCEBE3'),('A coral','#143B3A','#F2B5A0'),('A secondary on mint','#526562','#DCEBE3'),('A inverse annotation','#BECFC8','#143B3A'),('B body','#402131','#F5EEE3'),('B muted','#725460','#F5EEE3'),('B button','#FFFFFF','#752C43'),('B hover','#FFFFFF','#5B2033'),('B active','#FFFFFF','#461727'),('B accent','#402131','#ECD872'),('B mint','#402131','#E9DDE8'),('B secondary on mint','#725460','#E9DDE8'),('Current cyan on white','#39C7E5','#FFFFFF'),('Current sky button','#FFFFFF','#0EA5E9'),('Current article headings','#008CFF','#F7FAFC')]
result=[]
for label,fg,bg in pairs:
 l1,l2=sorted([lum(fg),lum(bg)]);ratio=(l2+.05)/(l1+.05);result.append({'role':label,'foreground':fg,'background':bg,'ratio':round(ratio,2),'normal_text_AA':ratio>=4.5})
(ROOT/'evidence/contrast.json').write_text(json.dumps(result,indent=2));print(json.dumps({'fonts':fonts,'contrast':result},ensure_ascii=False,indent=2))
assert all(not f['missing'] for f in fonts)
