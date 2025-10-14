"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndividualPricing() {
  return (
    <section 
      className="py-16"
      style={{
        background: 'linear-gradient(180deg, #F8FCFF, #FFFFFF)'
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: '#072635' }}
          >
            Индивидуальные занятия
          </h2>
          <div 
            className="w-16 h-1 mx-auto mb-8"
            style={{ backgroundColor: '#00AEEF' }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#4F6372' }}
          >
            Персональный подход к изучению турецкого языка с фокусом на ваши цели и темп обучения.
          </p>
        </motion.div>

        {/* Основной контент - двухколоночная компоновка */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          
          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
            style={{ maxWidth: '45%' }}
          >
            <div className="relative">
              <Image
                src="/images/class2.jpg"
                alt="Индивидуальное обучение турецкому"
                width={500}
                height={500}
                className="rounded-2xl object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Особенности */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
            style={{ maxWidth: '50%' }}
          >
            <ul className="space-y-3 leading-relaxed" style={{ color: '#1C2A38' }}>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Индивидуальные занятия с преподавателем</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Гибкое расписание под ваши возможности</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Персональная программа обучения</span>
              </li>
              <li className="flex items-center mt-6">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Фокус на ваших конкретных целях</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Быстрый прогресс и результат</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span className="text-lg">Поддержка между занятиями</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Ценовые карточки */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 mb-16"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-4xl mx-auto">
            
            {/* Карточка 1 - Одно занятие */}
            <div className="flex-1 bg-white border border-gray-300 rounded-xl shadow-sm p-8 min-h-[380px] flex flex-col justify-between">
              <div className="text-center">
                <h3 
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', fontWeight: '700', color: '#0B2239' }}
                >
                  1 занятие
                </h3>
                <p 
                  className="font-bold mt-4"
                  style={{ 
                    fontSize: '27px', 
                    fontWeight: '700', 
                    color: '#007EA7'
                  }}
                >
                  1900 ₽
                </p>
                <p 
                  className="mt-4 text-gray-600"
                  style={{ fontSize: '16px' }}
                >
                  60 минут индивидуальной работы с преподавателем (в Zoom)
                </p>
              </div>
              
              <button 
                className="w-full px-6 py-3 rounded-full font-semibold transition-all duration-200"
                style={{ 
                  border: '2px solid #00AEEF', 
                  color: '#00AEEF',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAF7FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Записаться
              </button>
            </div>

            {/* Карточка 2 - Абонемент на 5 занятий */}
            <div className="flex-1 rounded-xl shadow-md relative p-8 min-h-[380px] flex flex-col justify-between" style={{ backgroundColor: '#EAF7FF' }}>
              {/* Бейдж */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span 
                  className="px-3 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: '#00AEEF' }}
                >
                  💙 Выгоднее
                </span>
              </div>
              
              <div className="text-center">
                <h3 
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', fontWeight: '700', color: '#0B2239' }}
                >
                  Абонемент на 5 занятий
                </h3>
                
                {/* Цена в капсуле */}
                <div 
                  className="inline-block mt-4"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    padding: '4px 12px', 
                    borderRadius: '6px'
                  }}
                >
                  <p 
                    className="font-bold"
                    style={{ 
                      fontSize: '27px', 
                      fontWeight: '700', 
                      color: '#007EA7'
                    }}
                  >
                    8200 ₽
                  </p>
                </div>
                
                <p 
                  className="mt-4 text-gray-600"
                  style={{ fontSize: '16px' }}
                >
                  + можно добавить 1 урок за 1900 ₽
                </p>
                <p 
                  className="mt-2"
                  style={{ fontSize: '14px', color: '#6C757D' }}
                >
                  1 занятие = 1640 ₽ вместо 1900 ₽
                </p>
              </div>
              
              <button 
                className="w-full px-6 py-3 rounded-full text-white font-semibold transition-all duration-200"
                style={{ backgroundColor: '#00AEEF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0095D8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00AEEF'}
              >
                Записаться
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}