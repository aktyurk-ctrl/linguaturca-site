'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutSection } from '@/components/AboutSection'
import HowWeTeachSection from '@/components/HowWeTeachSection'
import CourseMiniGroupSection from '@/components/CourseMiniGroupSection'
import PricingSection from '@/components/PricingSection'
import IndividualPricing from '@/components/IndividualPricing'
import ScheduleSection from '@/components/ScheduleSection'
import ReviewsSection from '@/components/ReviewsSection'

const sectionClass = "container py-20 md:py-28 max-w-6xl"

export default function HomePage() {
  return (
    <div>
      <section className="relative py-0 bg-gradient-to-br from-brand-beige to-brand-soft">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="Изучайте турецкий онлайн" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container max-w-6xl h-[90vh] flex flex-col justify-center items-start px-8 md:px-16 relative z-10">
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-md">
            Турецкий с магистрами турецкого языка
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl">
            Учите турецкий эффективно и с удовольствием — с преподавателями, окончившими турецкие университеты.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-full bg-brand-coral hover:bg-[#CF5D3E] text-white font-semibold shadow-md transition">
              Бесплатная консультация
            </Link>
            <Link href="/free-lesson" className="px-6 py-3 rounded-full bg-white border border-brand-blue text-brand-blue hover:bg-brand-soft transition">
              Пройти мини-урок
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />

      <HowWeTeachSection />

      <CourseMiniGroupSection />

      <PricingSection />

      <IndividualPricing />

      <ScheduleSection />

      <ReviewsSection />

      <section className={`${sectionClass} bg-brand-bg`}>
        <div className="rounded-xl bg-brand-beige p-8 border border-brand-soft">
          <h3 className="font-manrope text-2xl font-semibold tracking-tight text-brand-blue">
            Преподаватели — магистры турецкого языка
          </h3>
          <div className="w-16 h-1 bg-brand-coral rounded mt-2" />
          <p className="text-brand-gray mt-4 max-w-3xl">
            Команда LinguaTurca — выпускники ведущих университетов Турции. Они преподают на родном языке и знают, как объяснять сложное просто.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-2xl overflow-hidden ring-4 ring-brand-soft shadow-sm"
            >
              <div className="relative h-40">
                <Image src="/images/teacher1.jpg" alt="Преподаватель LinguaTurca" fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold text-brand-blue">Айше К.</div>
                <div className="text-sm text-brand-gray">Магистр турецкого языка, 6+ лет опыта</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-brand-bg`}>
        <div className="card p-8 md:p-12">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h2 className="font-manrope text-3xl font-semibold tracking-tight text-brand-blue">Попробуйте бесплатно: мини-урок + тест уровня</h2>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Видео-мини-урок (10 мин)</li>
                <li>Авто-проверка теста</li>
                <li>Рекомендации по курсу</li>
              </ul>
            </div>
            <Link href="/free-lesson" className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-brand-coral hover:bg-[#CF5D3E] text-white font-semibold shadow-md transition">
              Начать сейчас
            </Link>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-brand-bg`}>
        <div className="flex items-center justify-between">
          <h2 className="font-manrope text-3xl font-semibold tracking-tight text-brand-blue">Курсы</h2>
          <Link href="/courses" className="text-brand-blue hover:text-brand-coral">Все курсы</Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { level: 'A1', desc: 'с нуля: алфавит, базовые фразы, чтение, простые диалоги' },
            { level: 'A2', desc: 'расширяем словарь, времена, бытовые ситуации' },
            { level: 'B1', desc: 'уверенное общение, сложные времена, работа/учёба' },
            { level: 'B2', desc: 'быстрая речь, нюансы грамматики, деловая коммуникация' },
          ].map((c) => (
            <div key={c.level} className={`${c.level==='A1'?'bg-[#F9EDE1]':c.level==='A2'?'bg-[#E4EDF2]':c.level==='B1'?'bg-[#FFF3E9]':'bg-[#EAF3EC]'} rounded-2xl p-6 shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-brand-blue">Курс {c.level}</div>
                  <div className="text-brand-gray text-sm">{c.desc}</div>
                </div>
                <Link href={`/courses/${c.level.toLowerCase()}`} className="text-brand-blue hover:text-brand-coral">Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={`${sectionClass} bg-brand-bg`}>
        <div className="card p-6">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="font-manrope text-2xl font-semibold tracking-tight">Записаться на бесплатную консультацию</h3>
              <p className="text-gray-700 mt-1">Оставьте контакт — подберём курс и расписание.</p>
            </div>
            <Link href="/contact" className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-brand-blue text-white hover:shadow-soft transition shadow-md">
              Записаться
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


