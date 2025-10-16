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

      <div className="container mx-auto px-6 relative z-10">
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
              fontSize: '28px', 
              fontWeight: '700'
            }}
          >
            Хочешь начать учить турецкий?
          </h2>
          
          <p 
            className="mb-8 text-white"
            style={{ 
              fontSize: '18px', 
              lineHeight: '1.6',
              fontWeight: '400'
            }}
          >
            Пройди короткий тест — мы подберём формат и уровень именно для тебя.
          </p>
          
          <motion.button 
            className="px-10 py-4 rounded-full font-semibold transition-all duration-300 ease-in-out"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#007BFF',
              fontSize: '18px',
              fontWeight: '600'
            }}
            onClick={() => handleOpenModal("hero", "signup")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(255, 255, 255, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E6F7FF';
              e.currentTarget.style.color = '#007BFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#007BFF';
            }}
          >
            Пройти тест
          </motion.button>
        </motion.div>
      </div>

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </section>
  );
}
