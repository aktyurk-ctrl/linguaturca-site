import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Турецкий язык с нуля — как начать обучение и не бросить — LinguaTurca',
  description: 'Турецкий язык с нуля: с чего начать обучение, какие шаги пройти новичку и как быстрее выйти на разговорный уровень без перегруза.',
}

export default function ArticlePage() {
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
          Турецкий язык с нуля: пошаговое руководство для начинающих
        </h1>
        
        {/* Основной контент */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4 text-lg leading-relaxed">
            Начать изучение турецкого языка с нуля проще, чем кажется. Турецкий — логичный и структурный язык, в котором почти нет исключений. Главная сложность для новичков — не язык, а неправильный старт.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
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
            backgroundColor: '#E6F3FF',
            border: '1px solid #B3E5FC'
          }}
        >
          <p className="text-lg mb-4 font-semibold" style={{ color: '#031E33' }}>
            Хотите начать изучать турецкий язык с нуля и не бросить?
          </p>
          <p className="text-lg mb-4" style={{ color: '#031E33' }}>
            В школе LinguaTurca мы выстраиваем обучение с нуля — понятно, структурно и с упором на разговорную практику.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#008CFF] text-white rounded-lg font-semibold hover:bg-[#0077CC] transition-colors"
          >
            Перейти на главную страницу →
          </Link>
        </div>
      </div>
    </div>
  )
}
