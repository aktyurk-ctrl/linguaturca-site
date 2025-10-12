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
      <section className="relative py-0 bg-gradient-to-br from-brand-bg via-brand-secondary/30 to-brand-primary/20">
        <div className="absolute inset-0">
          <Image src="/images/hero.jpg" alt="Изучайте турецкий онлайн" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-hover/60 via-black/40 to-brand-primary/30" />
        </div>
        <div className="container max-w-6xl h-[90vh] flex flex-col justify-center items-start px-8 md:px-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
            Турецкий с магистрами турецкого языка
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/95 max-w-2xl drop-shadow-md">
            Учите турецкий эффективно и с удовольствием — с преподавателями, окончившими турецкие университеты.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 w-full max-w-md md:max-w-none">
            <Link href="/contact" className="btn-primary w-full md:w-auto text-center pulse-cta">
              Бесплатная консультация
            </Link>
            <Link href="/free-lesson" className="btn-outline bg-white/95 border-white text-brand-primary hover:bg-white hover:text-brand-hover w-full md:w-auto text-center">
              Пройти мини-урок
            </Link>
          </div>
        </div>
      </section>

      <AboutSection />

      <HowWeTeachSection />

      <div id="courses">
        <CourseMiniGroupSection />
      </div>

      <div id="pricing">
        <PricingSection />
        <IndividualPricing />
      </div>

      <div id="teachers">
        <ScheduleSection />
      </div>

      <div id="reviews">
        <ReviewsSection />
      </div>

      <section id="contacts" className={`${sectionClass} bg-brand-bg`}>
        <div className="card">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="font-manrope text-2xl font-semibold tracking-tight text-brand-text">Записаться на бесплатную консультацию</h3>
              <p className="text-brand-text mt-1">Оставьте контакт — подберём курс и расписание.</p>
            </div>
            <Link href="/contact" className="mt-4 md:mt-0 btn-primary pulse-cta">
              Записаться
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


