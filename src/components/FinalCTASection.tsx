"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function FinalCTASection() {
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
    <section 
      className="w-full text-center relative overflow-hidden"
      style={{
        backgroundColor: '#00AEEF',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="font-bold mb-4 text-white"
            style={{ 
              fontSize: 'clamp(24px, 4vw, 32px)', 
              fontWeight: '700',
              lineHeight: '1.2'
            }}
          >
            Хочешь начать учить турецкий?
          </h2>
          
          <p 
            className="mb-8 text-white"
            style={{ 
              fontSize: 'clamp(16px, 3vw, 18px)', 
              lineHeight: '1.6',
              fontWeight: '400',
              opacity: 0.9
            }}
          >
            Запишись на бесплатную консультацию — мы подберём формат и уровень именно для тебя.
          </p>
          
          <motion.button 
            className="px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 ease-in-out text-sm md:text-lg"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#00AEEF',
              fontWeight: '600'
            }}
            onClick={() => handleOpenModal("hero", "signup")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.borderColor = '#FFFFFF';
              e.currentTarget.style.borderWidth = '2px';
              e.currentTarget.style.borderStyle = 'solid';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#00AEEF';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.borderWidth = '0px';
            }}
          >
            Записаться на консультацию
          </motion.button>
        </motion.div>
      </div>

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </section>
  );
}
