"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLeadModal } from "@/contexts/LeadModalContext";

export default function IndividualPricing() {
  const { openModal } = useLeadModal();
  // Default to "1 занятие" (index 1)
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.9;
      const gap = 16;
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }, []);

  // Track scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.9;
      const gap = 16;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(newIndex, 2));
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <section 
      className="py-8 md:py-16"
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
            className="text-[22px] md:text-3xl font-bold mb-2 leading-[1.3] md:leading-normal"
            style={{ color: '#072635' }}
          >
            Индивидуальные занятия
          </h2>
          <div 
            className="w-16 h-1 mx-auto mb-4 md:mb-8"
            style={{ backgroundColor: '#00AEEF' }}
          ></div>
          <p 
            className="text-[15px] md:text-lg max-w-2xl mx-auto"
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-2xl object-cover aspect-square w-full max-h-[220px] md:max-h-none"
                quality={75}
                loading="lazy"
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
          {/* Desktop Grid */}
          <div className="hidden lg:flex flex-row gap-6 max-w-6xl mx-auto">
            
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
                onClick={() => openModal({
                  title: "Бесплатная консультация",
                  subtitle: "Познакомьтесь с преподавателем и узнайте свой уровень",
                  defaultFormat: "Бесплатная консультация",
                  source: "consultation"
                })}
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
                onClick={() => openModal({
                  title: "Записаться на занятие",
                  subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                  defaultFormat: "Индивидуальные занятия",
                  source: "pricing"
                })}
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
                  
                  {/* Текущая цена с бейджем */}
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <p 
                      className="font-bold"
                      style={{ 
                        fontSize: '32px', 
                        fontWeight: '800', 
                        color: '#009DFF',
                        letterSpacing: '0.5px'
                      }}
                    >
                      8200 ₽
                    </p>
                    <span 
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: '#009DFF',
                        color: '#FFFFFF'
                      }}
                    >
                      Выгоднее
                    </span>
                  </div>
                  
                  {/* Мини-бэдж экономии */}
                  <div className="inline-block mb-2">
                    <span 
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ 
                        backgroundColor: '#E0F6FF',
                        color: '#009DFF'
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
                onClick={() => openModal({
                  title: "Записаться на абонемент",
                  subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                  defaultFormat: "Индивидуальные занятия",
                  source: "pricing"
                })}
                className="w-full px-6 py-3 rounded-full text-white font-semibold transition-all duration-200"
                style={{ backgroundColor: '#00AEEF' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0095D8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00AEEF'}
              >
                Записаться
              </button>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative mt-6">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-6 px-6"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Карточка 1 - Бесплатная консультация */}
              <div className="flex-shrink-0 snap-center" style={{ width: '90%', minWidth: '90%', maxWidth: '90%' }}>
                <div className="rounded-[20px] p-6 min-h-[360px] flex flex-col justify-between" style={{ backgroundColor: '#F8FBFF', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                  <div className="text-center">
                    <h3 className="font-bold mb-2 text-[18px]" style={{ fontWeight: '700', color: '#0B1F33' }}>
                      Бесплатная консультация
                    </h3>
                    <p className="mt-3 mb-2 text-[15px]" style={{ color: '#0B1F33' }}>
                      Определим ваш уровень и подберём программу обучения.
                    </p>
                    <p className="mb-3 text-[13px]" style={{ color: '#6B7280' }}>
                      10–15 минут, онлайн, без обязательств.
                    </p>
                    <p className="font-bold text-[24px]" style={{ fontWeight: '700', color: '#00A3FF' }}>
                      💬 Бесплатно
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal({
                      title: "Бесплатная консультация",
                      subtitle: "Познакомьтесь с преподавателем и узнайте свой уровень",
                      defaultFormat: "Бесплатная консультация",
                      source: "consultation"
                    })}
                    className="w-full px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-200 text-[15px]"
                    style={{ backgroundColor: '#00AEEF', minHeight: '44px' }}
                  >
                    Записаться
                  </button>
                </div>
              </div>

              {/* Карточка 2 - Одно занятие */}
              <div className="flex-shrink-0 snap-center" style={{ width: '90%', minWidth: '90%', maxWidth: '90%' }}>
                <div className="bg-white border border-gray-300 rounded-xl shadow-sm p-6 min-h-[360px] flex flex-col justify-between">
                  <div className="text-center">
                    <h3 className="font-bold mb-2 text-[18px]" style={{ fontWeight: '700', color: '#0B2239' }}>
                      1 занятие
                    </h3>
                    <p className="font-bold mt-3 text-[24px]" style={{ fontWeight: '700', color: '#007EA7' }}>
                      1900 ₽
                    </p>
                    <p className="mt-3 text-gray-600 text-[15px]">
                      60 минут индивидуальной работы с преподавателем (в Zoom)
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal({
                      title: "Записаться на занятие",
                      subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                      defaultFormat: "Индивидуальные занятия",
                      source: "pricing"
                    })}
                    className="w-full px-6 py-2.5 rounded-full font-semibold transition-all duration-200 text-[15px]"
                    style={{ border: '2px solid #00AEEF', color: '#00AEEF', backgroundColor: 'transparent', minHeight: '44px' }}
                  >
                    Записаться
                  </button>
                </div>
              </div>

              {/* Карточка 3 - Абонемент на 5 занятий */}
              <div className="flex-shrink-0 snap-center" style={{ width: '90%', minWidth: '90%', maxWidth: '90%' }}>
                <div className="rounded-xl shadow-md relative p-6 min-h-[360px] flex flex-col justify-between" style={{ backgroundColor: '#EAF7FF' }}>
                  <div className="text-center">
                    <h3 className="font-bold mb-2 text-[18px]" style={{ fontWeight: '700', color: '#0B2239' }}>
                      Абонемент на 5 занятий
                    </h3>
                    <div className="mt-3">
                      <p className="mb-1 text-[16px]" style={{ color: '#6B7280', opacity: 0.6, textDecoration: 'line-through' }}>
                        9500 ₽
                      </p>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <p className="font-bold text-[28px]" style={{ fontWeight: '800', color: '#009DFF' }}>
                          8200 ₽
                        </p>
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: '#009DFF', color: '#FFFFFF' }}>
                          Выгоднее
                        </span>
                      </div>
                      <div className="inline-block mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#E0F6FF', color: '#009DFF' }}>
                          экономия 1300 ₽
                        </span>
                      </div>
                      <p className="mt-1 text-[13px]" style={{ color: '#6B7280' }}>
                        за 5 занятий
                      </p>
                    </div>
                    <p className="mt-3 text-gray-600 text-[15px]">
                      60 минут индивидуальной работы с преподавателем (в Zoom)
                    </p>
                    <p className="mt-2 text-[13px]" style={{ color: '#6C757D' }}>
                      1 занятие = 1640 ₽ вместо 1900 ₽
                    </p>
                  </div>
                  <button 
                    onClick={() => openModal({
                      title: "Записаться на абонемент",
                      subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                      defaultFormat: "Индивидуальные занятия",
                      source: "pricing"
                    })}
                    className="w-full px-6 py-2.5 rounded-full text-white font-semibold transition-all duration-200 text-[15px]"
                    style={{ backgroundColor: '#00AEEF', minHeight: '44px' }}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Предыдущий тариф"
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-100 hover:bg-sky-50 text-sky-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === 2}
              aria-label="Следующий тариф"
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
                currentIndex === 2 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'opacity-100 hover:bg-sky-50 text-sky-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Перейти к тарифу ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex 
                      ? 'bg-sky-500 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}