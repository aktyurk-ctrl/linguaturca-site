import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Статьи о турецком языке — LinguaTurca',
  description: 'Полезные статьи и руководства по изучению турецкого языка. Советы для начинающих, типичные ошибки и турецкий для путешествий.',
}

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
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: '#F7FAFC',
        color: '#031E33',
        fontFamily: 'Inter, system-ui, sans-serif'
      }}
    >
      <div 
        className="mx-auto"
        style={{ 
          maxWidth: '900px',
          margin: '100px auto',
          padding: '0 20px'
        }}
      >
        {/* Заголовок страницы */}
        <h1 
          className="text-4xl font-bold mb-6"
          style={{ color: '#008CFF' }}
        >
          Статьи о турецком языке
        </h1>
        
        <p className="text-lg mb-12" style={{ color: '#031E33', opacity: 0.8 }}>
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
                borderColor: '#E2E8F0'
              }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: '#008CFF' }}>
                <Link 
                  href={`/articles/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mb-4" style={{ color: '#031E33', opacity: 0.8 }}>
                {article.description}
              </p>
              <Link
                href={`/articles/${article.slug}`}
                className="inline-block font-semibold hover:underline"
                style={{ color: '#008CFF' }}
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
