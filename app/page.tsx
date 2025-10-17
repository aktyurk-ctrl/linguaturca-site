'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AboutSection } from '@/components/AboutSection'
import WhyUsSection from '@/components/WhyUsSection'
import HowWeTeachSection from '@/components/HowWeTeachSection'
import CourseMiniGroupSection from '@/components/CourseMiniGroupSection'
import PricingSection from '@/components/PricingSection'
import IndividualPricing from '@/components/IndividualPricing'
import FreeConsultationSection from '@/components/FreeConsultationSection'
import ScheduleSection from '@/components/ScheduleSection'
import ReviewsSection from '@/components/ReviewsSection'
import FinalCTASection from '@/components/FinalCTASection'
import SignupModal from '@/components/SignupModal'

const sectionClass = "container py-20 md:py-28 max-w-6xl"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState({ section: "", action: "" });

  const handleOpenModal = (section: string, action: string) => {
    setModalContext({ section, action });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContext({ section: "", action: "" });
  };

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
          <button 
            className="btn-white"
            data-form-button
            data-section="Hero"
          >
            Пройти тест
          </button>
          <button 
            className="btn-main"
            data-form-button
            data-section="Hero"
          >
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
      </div>

      <FreeConsultationSection />

      <div id="individual">
        <IndividualPricing />
      </div>

      <div id="teachers">
        <ScheduleSection />
      </div>

      <FinalCTASection />

      <div id="reviews">
        <ReviewsSection />
      </div>

      {/* Финальный CTA блок */}
      <section 
        className="final-cta"
        style={{
          width: '100vw',
          background: 'linear-gradient(180deg, #F8FBFF 0%, #E6F3FF 100%)',
          textAlign: 'center',
          padding: '80px 20px',
          overflowX: 'hidden',
          borderRadius: '0'
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#032B41',
                marginBottom: '8px'
              }}
            >
              🌿 Готовы сделать первый шаг в турецкий?
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'rgba(0,0,0,0.7)',
                marginBottom: '24px'
              }}
            >
              Пройдите короткий тест — мы подберём курс и преподавателя под ваш уровень и цели.
            </p>
          <motion.button
            data-form-button
            data-section="Финальный CTA"
            style={{
              backgroundColor: '#009EFF',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              padding: '14px 36px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.25s ease'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#007ACC';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#009EFF';
            }}
          >
            Пройти тест
          </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </div>
  )
}



