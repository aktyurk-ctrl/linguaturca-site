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
import { Footer } from '@/components/Footer'

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
          Онлайн-школа турецкого языка от магистров турецкой филологии.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-white">
            Пройти тест
          </button>
          <button className="btn-main">
            Записаться на курс
          </button>
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

      <Footer />
    </div>
  )
}



