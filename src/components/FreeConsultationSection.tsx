"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function FreeConsultationSection() {
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
      className="w-full py-20 text-center"
      style={{
        background: 'linear-gradient(180deg, #EAF8FF)'
      }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="font-bold mb-6"
            style={{ fontSize: '24px', color: '#0B2239' }}
          >
            Индивидуальная консультация
          </h2>
          
          <p 
            className="mb-8 leading-relaxed"
            style={{ fontSize: '18px', color: '#3A4754' }}
          >
            Начните с бесплатной встречи — определим уровень и подберём формат под ваши цели.
          </p>
          
          <div 
            className="mb-8 flex flex-wrap justify-center gap-4 text-sm"
            style={{ color: '#6B7280' }}
          >
            <span>🕒 10–15 минут онлайн</span>
            <span>•</span>
            <span>💬 Без обязательств</span>
            <span>•</span>
            <span style={{ color: '#00AEEF', fontWeight: '600' }}>Бесплатно</span>
          </div>
          
          <motion.button 
            className="px-10 py-4 rounded-full text-white font-semibold transition-all duration-300 ease-in-out"
            style={{ 
              backgroundColor: '#00AEEF',
              fontSize: '18px'
            }}
            onClick={() => handleOpenModal("consultation", "signup")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(0, 174, 239, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0095D8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00AEEF';
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