import type { Metadata } from 'next';

// Existing public domain, also named in the school's legal documents.
export const SITE_URL = 'https://linguaturca.ru';
export const SITE_NAME = 'Linguaturca';
export const HOME_TITLE = 'Linguaturca — Школа турецкого языка';
export const HOME_DESCRIPTION =
  'Уроки турецкого онлайн: мини-группы, индивидуально, определение уровня и консультации.';
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  article = false
): Metadata {
  const image = {
    url: '/og',
    width: 1200,
    height: 630,
    alt: 'Linguaturca — школа турецкого языка',
  };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'ru_RU',
      type: article ? 'article' : 'website',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
