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
        className="hero-section flex flex-col items-center justify-center text-center min-h-screen py-32 px-6 overflow-hidden relative"
        style={{
          animation: 'fadeIn 1s ease-in-out'
        }}
      >
        {/* Контент */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.35)' }}
        >
          Турецкий с магистрами турецкого языка
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-white"
          style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.35)' }}
        >
          Учи турецкий эффективно и прямо из дома с командой профессионалов
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a 
            href="#learning-options"
            className="px-6 py-3 bg-white text-[#009FE3] border border-white rounded-lg font-semibold text-lg hover:bg-[#009FE3] hover:text-white transition-all duration-300"
          >
            Список курсов
          </a>
          <button 
            className="px-8 py-4 bg-[#009FE3] text-white rounded-lg font-semibold text-lg hover:bg-[#0084C1] transition-all duration-300 shadow-lg"
            data-form-button
            data-section="Hero"
          >
            Записаться на консультацию
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

      <div id="reviews">
        <ReviewsSection />
      </div>

      <FinalCTASection />

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </div>
  )
}









