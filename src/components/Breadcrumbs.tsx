import Link from 'next/link';
import { StructuredData } from './StructuredData';
import { SITE_URL } from '@/seo/site';
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <ol>
          {items.map((item, index) => (
            <li key={item.path}>
              {index === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <StructuredData
        data={{
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
          })),
        }}
      />
    </>
  );
}
