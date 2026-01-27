import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { LeadModalProvider } from '@/contexts/LeadModalContext'
import LeadModal from '@/components/LeadModal'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'LinguaTurca — Школа турецкого языка',
  description:
    'Уроки турецкого онлайн: мини-группы, индивидуально, определение уровня и консультации.',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'manifest',
        url: '/favicon/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-inter`}>
        <LeadModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <LeadModal />
          <Analytics />
        </LeadModalProvider>
      </body>
    </html>
  )
}


