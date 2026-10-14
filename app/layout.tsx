import './globals.css';
import '@/styles/legacy-content.css';
import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { SITE_URL, HOME_TITLE, HOME_DESCRIPTION, pageMetadata } from '@/seo/site';
import { StructuredData } from '@/components/StructuredData';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

const manrope = localFont({
  src: '../src/styles/fonts/manrope.woff2',
  variable: '--font-living-manrope',
  weight: '200 800',
  display: 'swap',
});
const onest = localFont({
  src: '../src/styles/fonts/onest.woff2',
  variable: '--font-living-onest',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(HOME_TITLE, HOME_DESCRIPTION, '/'),
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${onest.variable}`}>
        <StructuredData
          data={{
            '@graph': [
              {
                '@type': 'EducationalOrganization',
                '@id': `${SITE_URL}/#school`,
                name: 'Linguaturca',
                url: SITE_URL,
                logo: `${SITE_URL}/logo.png`,
                email: 'study@linguaturca.ru',
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                name: 'Linguaturca',
                url: SITE_URL,
                inLanguage: 'ru',
                publisher: { '@id': `${SITE_URL}/#school` },
              },
            ],
          }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
