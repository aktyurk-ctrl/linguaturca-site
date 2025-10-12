'use client'
import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative py-0 bg-gradient-to-br from-brand-bg to-brand-mint">
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
          <div className="mt-8 flex flex-col md:flex-row gap-3 w-full max-w-md md:max-w-none">
            <Link href="/contact" className="btn-primary w-full md:w-auto text-center">
              Бесплатная консультация
            </Link>
            <Link href="/free-lesson" className="btn-outline w-full md:w-auto text-center">
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
        <div className="card">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="font-manrope text-2xl font-semibold tracking-tight">Записаться на бесплатную консультацию</h3>
              <p className="text-gray-700 mt-1">Оставьте контакт — подберём курс и расписание.</p>
            </div>
            <Link href="/contact" className="mt-4 md:mt-0 btn-primary">
              Записаться
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


