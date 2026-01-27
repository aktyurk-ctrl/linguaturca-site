import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Турецкий язык для переезда в Турцию — что нужно знать — LinguaTurca',
  description: 'Турецкий язык для переезда: какие темы нужны в первую очередь, сколько времени требуется и как подготовиться к жизни в Турции.',
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
          Турецкий язык для переезда в Турцию
        </h1>
        
        {/* Основной контент */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="mb-4 text-lg leading-relaxed">
            Переезд в Турцию без знания турецкого языка возможен, но сильно усложняет жизнь. Даже базовый уровень языка экономит время, деньги и нервы в первые месяцы после переезда.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Нужен ли турецкий для жизни в Турции
          </h2>
          
          <p className="mb-4">
            В туристических районах можно обойтись английским, но:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>в госучреждениях — только турецкий</li>
            <li>у врачей и в школах — турецкий</li>
            <li>при аренде жилья — турецкий</li>
          </ul>
          
          <p className="mb-4">
            Минимальный уровень языка даёт самостоятельность.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Какой уровень турецкого нужен для переезда
          </h2>
          
          <p className="mb-4">
            Для старта достаточно:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li><strong>A1</strong> — бытовое общение</li>
            <li>понимание базовых фраз</li>
            <li>умение объяснить проблему</li>
          </ul>
          
          <p className="mb-4">
            Уровень <strong>B1</strong> позволяет:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>решать большинство вопросов</li>
            <li>работать</li>
            <li>общаться без переводчика</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Какие темы важны в первую очередь
          </h2>
          
          <p className="mb-4">
            Для переезда важно учить:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>бытовые диалоги</li>
            <li>аренду и жильё</li>
            <li>медицину</li>
            <li>банки и документы</li>
            <li>работу и сервис</li>
          </ul>
          
          <p className="mb-4">
            Редкая грамматика на старте не нужна.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Сколько времени готовиться к переезду
          </h2>
          
          <p className="mb-4">
            При регулярных занятиях:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li><strong>2–3 месяца</strong> — базовое выживание</li>
            <li><strong>6 месяцев</strong> — уверенный быт</li>
            <li><strong>9–12 месяцев</strong> — комфортная жизнь</li>
          </ul>
          
          <p className="mb-4">
            Главное — практика и разговор.
          </p>
          
          <h2 className="text-2xl font-bold mb-4 mt-8" style={{ color: '#008CFF' }}>
            Самостоятельно или с преподавателем
          </h2>
          
          <p className="mb-4">
            Для переезда преподаватель:
          </p>
          
          <ul className="mb-4 ml-6 space-y-2">
            <li>ускоряет обучение</li>
            <li>объясняет культурный контекст</li>
            <li>помогает с реальными ситуациями</li>
          </ul>
          
          <p className="mb-4">
            Это снижает стресс после переезда.
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
            Планируете переезд в Турцию и хотите чувствовать себя уверенно?
          </p>
          <p className="text-lg mb-4" style={{ color: '#031E33' }}>
            В LinguaTurca мы готовим к жизни в Турции с упором на реальную речь и бытовые ситуации.
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
