// src/seo/default.ts
import { type DefaultSeoProps } from 'next-seo'

const defaultSEO: DefaultSeoProps = {
  titleTemplate: 'LinguaTurca | %s',
  defaultTitle: 'LinguaTurca — Школа турецкого языка онлайн',
  description:
    'Онлайн-уроки турецкого языка: мини-группы, индивидуально, бесплатный мини-урок и тест уровня.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://linguaturca.ru',
    site_name: 'LinguaTurca',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'LinguaTurca' },
    ],
  },
  twitter: {
    handle: '@linguaturca',
    site: '@linguaturca',
    cardType: 'summary_large_image',
  },
}

export default defaultSEO
