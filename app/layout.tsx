import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['cyrillic', 'latin'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['cyrillic', 'latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'LinguaTurca — Школа турецкого языка',
  description:
    'Уроки турецкого онлайн: мини-группы, индивидуально, бесплатный мини-урок и тест уровня.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${manrope.variable} font-inter`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}


