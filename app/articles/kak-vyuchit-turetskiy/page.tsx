import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Как выучить турецкий язык с нуля — пошаговый план — LinguaTurca',
  description: 'Разбираем, как выучить турецкий язык с нуля: сколько времени нужно, с чего начать, частые ошибки и самый эффективный формат обучения.',
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
          Как выучить турецкий язык с нуля
        </h1>
        
        {/* Основной контент */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4 text-lg leading-relaxed">
            Турецкий язык кажется сложным только на старте. На практике он логичен, регулярный и при правильном подходе осваивается быстрее многих европейских языков. Ниже — проверенный план, который подходит и новичкам, и тем, кто уже пробовал учить турецкий, но бросал.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Сколько времени нужно, чтобы выучить турецкий
          </h2>
          
          <p className="mb-4">
            В среднем:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li><strong>базовый уровень (A1–A2)</strong> — 3–4 месяца</li>
            <li><strong>разговорный уровень (B1)</strong> — 6–8 месяцев</li>
            <li><strong>уверенное владение</strong> — 12 месяцев и больше</li>
          </ul>
          
          <p className="mb-4">
            Срок зависит не от «способностей», а от:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>регулярности занятий</li>
            <li>правильной методики</li>
            <li>наличия практики</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            С чего начать изучение турецкого языка
          </h2>
          
          <p className="mb-4">
            Новичкам важно не начинать с хаоса. Оптимальный порядок:
          </p>
          
          <ol className="mb-4 ml-6 space-y-2">
            <li>Алфавит и произношение</li>
            <li>Базовая грамматика (падежи, аффиксы, порядок слов)</li>
            <li>Частотная лексика</li>
            <li>Простые диалоги и аудирование</li>
          </ol>
          
          <p className="mb-4">
            ❌ <strong>Ошибка</strong> — сразу учить сложные времена и редкие конструкции.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Самостоятельно или с преподавателем
          </h2>
          
          <p className="mb-4">
            <strong>Самостоятельно:</strong>
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>дешево</li>
            <li>долго</li>
            <li>высокий риск бросить</li>
          </ul>
          
          <p className="mb-4">
            <strong>С преподавателем:</strong>
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>быстрее</li>
            <li>меньше ошибок</li>
            <li>есть структура и контроль</li>
          </ul>
          
          <p className="mb-4">
            Оптимальный вариант — занятия с преподавателем + самостоятельная практика.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Частые ошибки при изучении турецкого
          </h2>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>зубрёжка слов без контекста</li>
            <li>игнорирование разговорной речи</li>
            <li>отсутствие системы</li>
            <li>редкие занятия</li>
          </ul>
          
          <p className="mb-4">
            Турецкий требует частоты, а не героизма.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Самый эффективный формат обучения
          </h2>
          
          <p className="mb-4">
            По опыту школы:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>занятия 2–3 раза в неделю</li>
            <li>мини-группы или индивидуально</li>
            <li>акцент на разговор</li>
            <li>постоянная обратная связь</li>
          </ul>
          
          <p className="mb-4">
            Именно так ученики начинают говорить, а не просто «знать правила».
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Как быстрее начать говорить по-турецки
          </h2>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>не бояться ошибок</li>
            <li>использовать язык с первых занятий</li>
            <li>слушать живую речь</li>
            <li>говорить даже простыми фразами</li>
          </ul>
          
          <p className="mb-4">
            Язык учится через использование, а не через идеальность.
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
            Хотите выучить турецкий язык быстрее и без хаоса?
          </p>
          <p className="text-lg mb-4" style={{ color: '#031E33' }}>
            Запишитесь на онлайн-занятия в школе LinguaTurca — подберём формат обучения под ваш уровень и цель.
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
