"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section 
      className="w-full py-20 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #EAF7FF, #FFFFFF)'
      }}
    >
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-sky-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="font-bold mb-4"
            style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#072635'
            }}
          >
            Хочешь начать учить турецкий?
          </h2>
          
          <p 
            className="mb-8 leading-relaxed"
            style={{ 
              fontSize: '18px', 
              color: '#4F6372'
            }}
          >
            Пройди короткий тест — мы подберём формат и уровень именно для тебя.
          </p>
          
          <motion.button 
            className="px-10 py-4 rounded-full text-white font-semibold transition-all duration-300 ease-in-out"
            style={{ 
              backgroundColor: '#00AEEF',
              fontSize: '18px'
            }}
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
            Пройти тест
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
