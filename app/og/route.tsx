import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
export const dynamic = 'force-static';
export async function GET() {
  const font = await readFile(join(process.cwd(), 'src/styles/fonts/onest-og.ttf'));
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: '#faf8f3',
          color: '#282e30',
          padding: 70,
          fontFamily: 'Onest',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36 }}>Linguaturca · школа турецкого языка</div>
        <div style={{ display: 'flex', fontSize: 86, lineHeight: 1.1 }}>
          Турецкий, на котором говорят.
        </div>
        <div
          style={{ display: 'flex', fontSize: 30, borderTop: '10px solid #00d2f2', paddingTop: 26 }}
        >
          Онлайн · мини-группы · индивидуально
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: 'Onest', data: font, style: 'normal', weight: 400 }],
    }
  );
}
