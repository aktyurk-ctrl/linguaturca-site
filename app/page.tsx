'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AboutSection } from '@/components/AboutSection'
// import TeachersSection from '@/components/TeachersSection'
import HowWeTeachSection from '@/components/HowWeTeachSection'
import CourseMiniGroupSection from '@/components/CourseMiniGroupSection'
import PricingSection from '@/components/PricingSection'
import IndividualPricing from '@/components/IndividualPricing'
import FreeConsultationSection from '@/components/FreeConsultationSection'
import ScheduleSection from '@/components/ScheduleSection'
import ReviewsSection from '@/components/ReviewsSection'
import FinalCTASection from '@/components/FinalCTASection'
import HeroForm from '@/components/HeroForm'
import HeroFormButton from '@/components/HeroFormButton'

const sectionClass = "container py-20 md:py-28 max-w-6xl"

export default function HomePage() {
  return (
    <div>
      <section
        id="hero"
        className="hero-section min-h-screen px-6 overflow-hidden relative flex items-center justify-center"
        style={{
          animation: 'fadeIn 1s ease-in-out',
          paddingTop: 'clamp(80px, 12vh, 120px)',
          paddingBottom: 'clamp(80px, 12vh, 120px)'
        }}
      >
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 text-white leading-tight"
                style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
              >
                Школа турецкого языка LinguaTurca
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mb-6 space-y-4"
              >
                <p className="text-base md:text-lg leading-relaxed text-white/95 font-medium" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)' }}>
                  Учи турецкий эффективно и прямо из дома с командой профессионалов
                </p>
                <div className="inline-flex items-center rounded-full border border-white/60 bg-white/15 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-md backdrop-blur-sm">
                  С нуля до B2
                </div>
              </motion.div>

              {/* Feature chips - glass effect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                className="mb-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                  {[
                    { icon: "🎓", text: "Профильные специалисты" },
                    { icon: "💻", text: "Живые уроки в Zoom" },
                    { icon: "💬", text: "Поддержка в чате" },
                    { icon: "📚", text: "Авторские материалы" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-sm md:text-base text-white shadow-lg border border-white/25"
                      style={{
                        background: 'rgba(255, 255, 255, 0.25)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                      }}
                    >
                      <span className="text-lg flex-shrink-0">{item.icon}</span>
                      <span className="leading-snug font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Small link to focus form */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-4"
              >
                <HeroFormButton />
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Form card (desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <HeroForm />
            </motion.div>
          </div>

          {/* Form card (mobile - below text) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:hidden mt-8"
          >
            <HeroForm />
          </motion.div>
        </div>
      </section>

      <AboutSection />

      {/* <TeachersSection /> */}

      <HowWeTeachSection />

      <div id="courses">
        <div id="mini-group">
          <CourseMiniGroupSection />
        </div>
      </div>

      <div id="groups">
        <PricingSection />
      </div>

      <FreeConsultationSection />

      <div id="individual">
        <IndividualPricing />
      </div>

      <div id="schedule">
        <ScheduleSection />
      </div>

      <div id="reviews">
        <ReviewsSection />
      </div>

      <FinalCTASection />
    </div>
  )
}









