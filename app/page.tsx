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
import ReviewsCarousel from '@/components/ReviewsCarousel'
import FinalCTASection from '@/components/FinalCTASection'
import HeroForm from '@/components/HeroForm'
import HeroFormButton from '@/components/HeroFormButton'

const sectionClass = "container py-20 md:py-28 max-w-6xl"

export default function HomePage() {
  return (
    <div>
      <section
        id="hero"
        className="hero-section px-6 overflow-hidden relative md:flex md:items-center md:justify-center"
        style={{
          animation: 'fadeIn 1s ease-in-out',
          height: '100vh',
          minHeight: '100vh',
          paddingTop: '95px',
          paddingBottom: '0'
        }}
      >
        <div className="container mx-auto max-w-6xl w-full">
          {/* Desktop/Tablet Layout */}
          <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12 items-center w-full">
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
                className="text-4xl lg:text-5xl font-extrabold mb-5 text-white leading-tight"
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
                <p className="text-lg leading-relaxed text-white/95 font-medium" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)' }}>
                  Учи турецкий эффективно и прямо из дома с командой профессионалов
                </p>
                <div className="inline-flex items-center rounded-full border border-white/60 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-md backdrop-blur-sm">
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
                <div className="grid grid-cols-2 gap-3 max-w-xl">
                  {[
                    { icon: "🎓", text: "Профильные специалисты" },
                    { icon: "💻", text: "Живые уроки в Zoom" },
                    { icon: "💬", text: "Поддержка в чате" },
                    { icon: "📚", text: "Авторские материалы" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-2xl px-4 py-3.5 text-base shadow-lg"
                      style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: 'none'
                      }}
                    >
                      <span className="text-lg flex-shrink-0 text-sky-600">{item.icon}</span>
                      <span className="leading-snug font-medium text-gray-800">{item.text}</span>
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
            >
              <HeroForm />
            </motion.div>
          </div>

          {/* Mobile Layout - Form First */}
          <div className="md:hidden space-y-4 w-full max-w-md mx-auto">
            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[32px] font-extrabold text-white leading-[1.2] text-center"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
            >
              Школа турецкого языка LinguaTurca
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3 text-center"
            >
              <p className="text-[16px] leading-relaxed text-white font-semibold" style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)' }}>
                Учи турецкий эффективно и прямо из дома с командой профессионалов
              </p>
              <div className="inline-flex items-center rounded-full border border-white/60 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
                С нуля до B2
              </div>
            </motion.div>

            {/* Compact Benefits - 2x2 grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-2"
            >
              {[
                { icon: "🎓", text: "Профильные специалисты" },
                { icon: "💻", text: "Живые уроки в Zoom" },
                { icon: "💬", text: "Поддержка в чате" },
                { icon: "📚", text: "Авторские материалы" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-xs shadow-lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: 'none'
                  }}
                >
                  <span className="text-sm flex-shrink-0 text-sky-600">{item.icon}</span>
                  <span className="leading-tight font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Form Card - Mobile Priority */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <HeroForm />
            </motion.div>

            {/* Optional Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <a
                href="#courses"
                className="inline-block text-sm text-white/90 hover:text-white font-medium underline"
              >
                Смотреть курсы
              </a>
            </motion.div>
          </div>
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
        <ReviewsCarousel />
      </div>

      <FinalCTASection />
    </div>
  )
}









