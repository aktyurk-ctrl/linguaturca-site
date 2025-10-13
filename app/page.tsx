'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutSection } from '@/components/AboutSection'
import WhyUsSection from '@/components/WhyUsSection'
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
      <section
        id="hero"
        className="hero-section flex flex-col items-center justify-center text-center min-h-screen py-32 px-6 overflow-hidden"
      >
        {/* Контент */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Турецкий с магистрами турецкого языка
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Учи турецкий эффективно и прямо из дома с командой профессионалов
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="bg-[#39C7E5] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#1D8BA3] transition-all duration-200"
          >
            Бесплатная консультация
          </a>
          <a
            href="#courses"
            className="border-2 border-[#39C7E5] text-[#39C7E5] font-semibold py-3 px-8 rounded-full hover:bg-[#39C7E5] hover:text-white transition-all duration-200"
          >
            Пройти мини-урок
          </a>
        </motion.div>
      </section>

      <AboutSection />

      <div id="how-we-teach">
        <WhyUsSection />
      </div>

      <HowWeTeachSection />

      <div id="courses">
        <div id="mini-group">
          <CourseMiniGroupSection />
        </div>
      </div>

      <div id="pricing">
        <PricingSection />
        <div id="individual">
          <IndividualPricing />
        </div>
      </div>

      <div id="teachers">
        <ScheduleSection />
      </div>

      <div id="reviews">
        <ReviewsSection />
      </div>

      <section id="contacts" className={`${sectionClass}`}>
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



