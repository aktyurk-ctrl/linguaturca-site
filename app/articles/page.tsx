import { Breadcrumbs } from '@/components/Breadcrumbs';
import { pageMetadata } from '@/seo/site'
import Link from 'next/link'

export const metadata = pageMetadata("Статьи о турецком языке — LinguaTurca", "Полезные статьи и руководства по изучению турецкого языка. Советы для начинающих, типичные ошибки и турецкий для путешествий.", '/articles', false);

const articles = [
  {
    slug: 'kak-vyuchit-turetskiy',
    title: 'Как выучить турецкий язык с нуля — пошаговый план',
    description: 'Разбираем, как выучить турецкий язык с нуля: сколько времени нужно, с чего начать, частые ошибки и самый эффективный формат обучения.',
  },
  {
    slug: 'turetskiy-yazyk-s-nulya',
    title: 'Турецкий язык с нуля — как начать обучение и не бросить',
    description: 'Турецкий язык с нуля: с чего начать обучение, какие шаги пройти новичку и как быстрее выйти на разговорный уровень без перегруза.',
  },
  {
    slug: 'turetskiy-dlya-pereezda',
    title: 'Турецкий язык для переезда в Турцию — что нужно знать',
    description: 'Турецкий язык для переезда: какие темы нужны в первую очередь, сколько времени требуется и как подготовиться к жизни в Турции.',
  },
]

export default function ArticlesPage() {
  return (
    <div className="content-page">
      <div className="content-container">
        <Breadcrumbs items={[{"name": "Главная", "path": "/"}, {"name": "Статьи о турецком языке", "path": "/articles"}]} />
        {/* Заголовок страницы */}
        <h1 
          className="text-4xl font-bold mb-6"
          style={{ color: 'var(--link)' }}
        >
          Статьи о турецком языке
        </h1>
        
        <p className="text-lg mb-12" style={{ color: 'var(--ink)', opacity: 0.8 }}>
          Полезные материалы и руководства для изучения турецкого языка
        </p>
        
        {/* Список статей */}
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: '#FFFFFF',
                borderColor: 'var(--line)'
              }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--link)' }}>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mb-4" style={{ color: 'var(--ink)', opacity: 0.8 }}>
                {article.description}
              </p>
              <Link
                href={`/articles/${article.slug}`}
                className="inline-block font-semibold hover:underline"
                style={{ color: 'var(--link)' }}
              >
                Читать статью →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
