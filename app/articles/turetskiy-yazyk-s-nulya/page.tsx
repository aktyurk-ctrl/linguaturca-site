import { ArticleData } from '@/components/StructuredData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { pageMetadata } from '@/seo/site'
import Link from 'next/link'

export const metadata = pageMetadata("Турецкий язык с нуля — как начать обучение и не бросить — LinguaTurca", "Турецкий язык с нуля: с чего начать обучение, какие шаги пройти новичку и как быстрее выйти на разговорный уровень без перегруза.", '/articles/turetskiy-yazyk-s-nulya', true);

export default function ArticlePage() {
  return (
    <div className="content-page">
      <div className="content-container">
        <Breadcrumbs items={[{"name": "Главная", "path": "/"}, {"name": "Статьи", "path": "/articles"}, {"name": "Турецкий язык с нуля: пошаговое руководство для начинающих", "path": "/articles/turetskiy-yazyk-s-nulya"}]} />
        <ArticleData title={"Турецкий язык с нуля: пошаговое руководство для начинающих"} description={"Турецкий язык с нуля: с чего начать обучение, какие шаги пройти новичку и как быстрее выйти на разговорный уровень без перегруза."} path="/articles/turetskiy-yazyk-s-nulya" />
        {/* Заголовок страницы */}
        <h1 
          className="text-4xl font-bold mb-6"
          style={{ color: 'var(--link)' }}
        >
          Турецкий язык с нуля: пошаговое руководство для начинающих
        </h1>
        
        {/* Основной контент */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4 text-lg leading-relaxed">
            Начать изучение турецкого языка с нуля проще, чем кажется. Турецкий — логичный и структурный язык, в котором почти нет исключений. Главная сложность для новичков — не язык, а неправильный старт.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            Кому подходит обучение турецкому с нуля
          </h2>
          
          <p className="mb-4">
            Изучение турецкого языка с нуля чаще всего начинают:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>для переезда или жизни в Турции</li>
            <li>для работы или бизнеса</li>
            <li>для общения с семьёй и окружением</li>
            <li>из личного интереса к культуре</li>
          </ul>
          
          <p className="mb-4">
            Независимо от цели, базовый подход будет одинаковым.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            С чего начинать турецкий язык новичку
          </h2>
          
          <p className="mb-4">
            Правильный старт выглядит так:
          </p>
          
          <ol className="mb-4 ml-6 space-y-2">
            <li>Алфавит и правила чтения</li>
            <li>Произношение и ударения</li>
            <li>Базовые аффиксы</li>
            <li>Простые фразы для общения</li>
          </ol>
          
          <p className="mb-4">
            ❌ <strong>Ошибка</strong> — начинать с времён и сложной грамматики.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            Как учить слова, чтобы они запоминались
          </h2>
          
          <p className="mb-4">
            Эффективно работают:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>слова в контексте</li>
            <li>короткие диалоги</li>
            <li>частотная лексика</li>
            <li>повторение через речь</li>
          </ul>
          
          <p className="mb-4">
            Зубрёжка списков почти всегда приводит к выгоранию.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            Нужна ли грамматика на старте
          </h2>
          
          <p className="mb-4">
            Грамматика нужна, но:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>дозировано</li>
            <li>на примерах</li>
            <li>без углубления в теорию</li>
          </ul>
          
          <p className="mb-4">
            Цель начального уровня — начать говорить, а не знать все правила.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            Как не бросить обучение
          </h2>
          
          <p className="mb-4">
            Чаще всего бросают из-за:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>перегруза</li>
            <li>отсутствия структуры</li>
            <li>редких занятий</li>
          </ul>
          
          <p className="mb-4">
            Лучший формат:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>занятия 2 раза в неделю</li>
            <li>понятная программа</li>
            <li>поддержка преподавателя</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: 'var(--link)' }}>
            Какой формат обучения самый эффективный
          </h2>
          
          <p className="mb-4">
            По опыту:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li><strong>индивидуальные занятия</strong> — быстрее</li>
            <li><strong>мини-группы</strong> — дешевле и мотивируют</li>
            <li><strong>онлайн</strong> — удобнее и регулярнее</li>
          </ul>
          
          <p className="mb-4">
            Формат подбирается под цель, а не наоборот.
          </p>
        </div>

        {/* Блок конверсии */}
        <div 
          className="mt-12 p-6 rounded-lg"
          style={{ 
            backgroundColor: 'var(--tint)',
            border: '1px solid var(--line)'
          }}
        >
          <p className="text-lg mb-4 font-semibold" style={{ color: 'var(--ink)' }}>
            Хотите начать изучать турецкий язык с нуля и не бросить?
          </p>
          <p className="text-lg mb-4" style={{ color: 'var(--ink)' }}>
            В школе LinguaTurca мы выстраиваем обучение с нуля — понятно, структурно и с упором на разговорную практику.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[var(--link)] text-white rounded-lg font-semibold hover:bg-[#0077CC] transition-colors"
          >
            Перейти на главную страницу →
          </Link>
        </div>
      </div>
    </div>
  )
}
