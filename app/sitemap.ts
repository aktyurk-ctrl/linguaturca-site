import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/seo/site';
export default function sitemap(): MetadataRoute.Sitemap {
  // Legal documents retain noindex; no invented publication/modification dates.
  return [
    '/',
    '/articles',
    '/articles/kak-vyuchit-turetskiy',
    '/articles/turetskiy-dlya-pereezda',
    '/articles/turetskiy-yazyk-s-nulya',
  ].map((path) => ({ url: `${SITE_URL}${path}` }));
}
