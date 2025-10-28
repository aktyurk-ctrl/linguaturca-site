"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function IndividualPricing() {
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
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mb-16">
          
          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center w-full lg:w-auto"
            style={{ maxWidth: '100%' }}
          >
            <div className="relative w-full max-w-[340px] lg:max-w-none">
              <Image
                src="/images/class2.jpg"
                alt="Индивидуальное обучение турецкому"
                width={500}
                height={500}
                className="rounded-2xl object-cover aspect-square w-full"
              />
            </div>
          </motion.div>

          {/* Особенности */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:w-auto"
            style={{ maxWidth: '100%' }}
          >
            <div className="max-w-[320px] mx-auto lg:max-w-none lg:mx-0">
              <ul className="space-y-2 lg:space-y-2 text-left lg:text-left mb-8" style={{ color: '#1C2A38' }}>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Индивидуальные занятия с преподавателем</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Гибкое расписание под ваши возможности</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Персональная программа обучения</span>
                </li>
                <li className="flex items-start mt-3 lg:mt-4">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Фокус на ваших конкретных целях</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Быстрый прогресс и результат</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-base lg:text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-base lg:text-lg leading-tight lg:leading-relaxed">Поддержка между занятиями</span>
                </li>
              </ul>
              
              {/* Описательный абзац */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-left lg:text-left"
                style={{
                  fontSize: '17px',
                  lineHeight: '1.75',
                  color: '#4A5568',
                  maxWidth: '440px',
                  marginTop: '24px'
                }}
              >
                Мы верим, что изучение языка — это не гонка, а путешествие.<br />
                И нам важно, чтобы каждое занятие приносило радость, не только результат.
              </motion.p>
            </div>
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
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 max-w-6xl mx-auto">
            
            {/* Карточка 1 - Бесплатная консультация */}
            <div 
              className="flex-1 rounded-[20px] p-9 min-h-[380px] flex flex-col justify-between transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1"
              style={{ 
                backgroundColor: '#F8FBFF',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.03)';
              }}
            >
              <div className="text-center">
                <h3 
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', fontWeight: '700', color: '#0B1F33' }}
                >
                  Бесплатная консультация
                </h3>
                <p 
                  className="mt-4 mb-3"
                  style={{ fontSize: '16px', color: '#0B1F33' }}
                >
                  Определим ваш уровень и подберём программу обучения.
                </p>
                <p 
                  className="mb-4"
                  style={{ fontSize: '14px', color: '#6B7280' }}
                >
                  10–15 минут, онлайн, без обязательств.
                </p>
                <p 
                  className="font-bold"
                  style={{ 
                    fontSize: '27px', 
                    fontWeight: '700', 
                    color: '#00A3FF'
                  }}
                >
                  💬 Бесплатно
                </p>
              </div>
              
              <button 
                onClick={() => handleOpenModal("consultation", "signup")}
                className="w-full px-6 py-3 rounded-full text-white font-semibold transition-all duration-200"
                style={{ backgroundColor: '#00AEEF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0095D8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00AEEF'}
              >
                Записаться
              </button>
            </div>

            {/* Карточка 2 - Одно занятие */}
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
                onClick={() => handleOpenModal("pricing", "individual")}
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

            {/* Карточка 3 - Абонемент на 5 занятий */}
            <div className="flex-1 rounded-xl shadow-md relative p-8 min-h-[380px] flex flex-col justify-between" style={{ backgroundColor: '#EAF7FF' }}>
              {/* Бейдж */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{ 
                    backgroundColor: '#E0F6FF',
                    color: '#009DFF',
                    border: '1px solid #B3E5FC'
                  }}
                >
                  💎 Выгоднее
                </span>
              </div>
              
              <div className="text-center">
                <h3 
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', fontWeight: '700', color: '#0B2239' }}
                >
                  Абонемент на 5 занятий
                </h3>
                
                {/* Цена с зачёркнутой ценой и экономией */}
                <div className="mt-4">
                  {/* Зачёркнутая цена */}
                  <p 
                    className="mb-1"
                    style={{ 
                      fontSize: '18px', 
                      fontWeight: '500', 
                      color: '#6B7280',
                      opacity: 0.6,
                      textDecoration: 'line-through'
                    }}
                  >
                    9500 ₽
                  </p>
                  
                  {/* Текущая цена */}
                  <p 
                    className="font-bold mb-2"
                    style={{ 
                      fontSize: '32px', 
                      fontWeight: '800', 
                      color: '#009DFF',
                      letterSpacing: '0.5px'
                    }}
                  >
                    8200 ₽
                  </p>
                  
                  {/* Мини-бэдж экономии */}
                  <div className="inline-block mb-2">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: '#009DFF',
                        color: '#FFFFFF'
                      }}
                    >
                      экономия 1300 ₽
                    </span>
                  </div>
                  
                  <p 
                    className="mt-1"
                    style={{ 
                      fontSize: '14px', 
                      color: '#6B7280'
                    }}
                  >
                    за 5 занятий
                  </p>
                </div>
                
                <p 
                  className="mt-4 text-gray-600"
                  style={{ fontSize: '16px' }}
                >
                  60 минут индивидуальной работы с преподавателем (в Zoom)
                </p>
                <p 
                  className="mt-2"
                  style={{ fontSize: '14px', color: '#6C757D' }}
                >
                  1 занятие = 1640 ₽ вместо 1900 ₽
                </p>
              </div>

              <button 
                onClick={() => handleOpenModal("pricing", "individual")}
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

      {/* Модальное окно */}
      <SignupModal isOpen={isModalOpen} onClose={handleCloseModal} context={modalContext} />
    </section>
  );
}