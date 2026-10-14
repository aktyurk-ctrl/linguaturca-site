import { SITE_URL } from '@/seo/site';
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', ...data }).replace(
          /</g,
          '\\u003c'
        ),
      }}
    />
  );
}
export function ArticleData({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return (
    <StructuredData
      data={{
        '@type': 'Article',
        headline: title,
        description,
        inLanguage: 'ru',
        mainEntityOfPage: `${SITE_URL}${path}`,
        publisher: { '@id': `${SITE_URL}/#school` },
      }}
    />
  );
}
