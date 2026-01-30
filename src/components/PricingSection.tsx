"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLeadModal } from "@/contexts/LeadModalContext";

export default function PricingSection() {
  const { openModal } = useLeadModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tariffs = [
    {
      title: "Тариф базовый",
      features: [
        "📘 Занятия в группе, учебные материалы",
        "💬 Обратная связь от преподавателя",
      ],
      price: "7590 руб",
      isHighlighted: false,
    },
    {
      title: "Тариф комфорт",
      features: [
        "📘 Занятия в группе, учебные материалы",
        "💬 Обратная связь от преподавателя",
        "📖 Лекция о турецком менталитете или истории Турции",
        "🕊 «Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
      ],
      bonus: "🎁 Рабочая тетрадь с упражнениями + памятка «Такие похожие слова»",
      price: "9200 ₽ 8600 ₽",
      isHighlighted: true,
    },
    {
      title: "Тариф бизнес",
      features: [
        "📘 Занятия в группе, учебные материалы",
        "💬 Обратная связь от преподавателя",
        "📖 Лекция о турецком менталитете или истории Турции",
        "🕊 «Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
        "👩‍🏫 Дополнительный урок с преподавателем каждую неделю (30 мин индивидуально)",
      ],
      bonus: "🎁 Курс по произношению в подарок",
      price: "15200 ₽ 13000 ₽",
      isHighlighted: false,
    },
  ];

  // Carousel navigation functions
  const scrollToIndex = useCallback((index: number, updateState: boolean = true) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.9; // 90% of container
      const gap = 16;
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      if (updateState) {
        setCurrentIndex(index);
      }
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < tariffs.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  }, [currentIndex, scrollToIndex, tariffs.length]);

  // Track scroll position to update current index
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.9;
      const gap = 16;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(newIndex, tariffs.length - 1));
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [tariffs.length, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section id="pricing" className="section bg-white">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-3xl font-bold text-gray-800 mb-6 md:mb-12 leading-[1.3] md:leading-normal"
        >
          Тарифы обучения
        </motion.h2>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tariffs.map((tariff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
              className={`relative flex flex-col justify-between bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all p-4 md:p-8 min-h-[400px] md:min-h-[500px] ${
                tariff.isHighlighted ? "border-2 border-sky-500" : ""
              }`}
            >
              {tariff.isHighlighted && (
                <span className="absolute top-0 right-6 bg-sky-500 text-white text-xs px-3 py-1 rounded-b-md shadow">
                  Популярный
                </span>
              )}
              
              <div>
                <h3 className="text-xl font-bold text-sky-600 mb-6 uppercase">
                  {tariff.title}
                </h3>
                
                <ul className="text-gray-700 space-y-3 text-left">
                  {tariff.features.map((feature, j) => (
                    <li key={j}>
                      {feature.includes("Лекция") || 
                       feature.includes("Турецкая гостиная") || 
                       feature.includes("Дополнительный урок") ? (
                        <span className="font-semibold text-sky-700">
                          {feature}
                        </span>
                      ) : (
                        feature
                      )}
                    </li>
                  ))}
                </ul>

                {tariff.bonus && (
                  <div className="bg-sky-50 rounded-2xl p-4 mt-6 text-gray-700 text-sm flex items-center justify-center gap-2">
                    {tariff.bonus}
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="text-lg font-semibold text-gray-900">
                  Полный курс — <span className="text-sky-600 text-2xl font-bold">
                    {tariff.price?.includes('₽') && tariff.price?.split('₽').length > 2 ? (
                      <>
                        <span className="line-through text-gray-400 mr-2 text-lg sm:text-2xl">{tariff.price?.split('₽')[0]?.trim()} ₽</span>
                        <span className="text-xl sm:text-2xl">{tariff.price?.split('₽')[1]?.trim()} ₽</span>
                      </>
                    ) : (
                      tariff.price ?? ''
                    )}
                  </span>
                </p>
                <button 
                  className="mt-6 btn-main w-full"
                  onClick={() => openModal({
                    title: "Записаться на курс",
                    subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                    defaultFormat: "Мини-группа",
                    source: "pricing"
                  })}
                >
                  Записаться
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          {/* Carousel Container */}
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
            {tariffs.map((tariff, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center"
                style={{ 
                  width: '90%',
                  minWidth: '90%',
                  maxWidth: '90%'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col justify-between bg-gray-50 rounded-2xl shadow-md transition-all p-4 min-h-[400px] ${
                    tariff.isHighlighted ? "border-2 border-sky-500" : ""
                  }`}
                >
                  {tariff.isHighlighted && (
                    <span className="absolute top-0 right-4 bg-sky-500 text-white text-xs px-3 py-1 rounded-b-md shadow">
                      Популярный
                    </span>
                  )}
                  
                  <div>
                    <h3 className="text-lg font-bold text-sky-600 mb-4 uppercase">
                      {tariff.title}
                    </h3>
                    
                    <ul className="text-gray-700 space-y-2 text-left text-sm">
                      {tariff.features.map((feature, j) => (
                        <li key={j}>
                          {feature.includes("Лекция") || 
                           feature.includes("Турецкая гостиная") || 
                           feature.includes("Дополнительный урок") ? (
                            <span className="font-semibold text-sky-700">
                              {feature}
                            </span>
                          ) : (
                            feature
                          )}
                        </li>
                      ))}
                    </ul>

                    {tariff.bonus && (
                      <div className="bg-sky-50 rounded-2xl p-3 mt-4 text-gray-700 text-xs flex items-center justify-center gap-2">
                        {tariff.bonus}
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <p className="text-base font-semibold text-gray-900">
                      Полный курс — <span className="text-sky-600 text-xl font-bold">
                        {tariff.price?.includes('₽') && tariff.price?.split('₽').length > 2 ? (
                          <>
                            <span className="line-through text-gray-400 mr-2 text-base">{tariff.price?.split('₽')[0]?.trim()} ₽</span>
                            <span className="text-lg">{tariff.price?.split('₽')[1]?.trim()} ₽</span>
                          </>
                        ) : (
                          tariff.price ?? ''
                        )}
                      </span>
                    </p>
                    <button 
                      className="mt-4 btn-main w-full text-sm py-2.5"
                      onClick={() => openModal({
                        title: "Записаться на курс",
                        subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
                        defaultFormat: "Мини-группа",
                        source: "pricing"
                      })}
                    >
                      Записаться
                    </button>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
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
            onClick={handleNext}
            disabled={currentIndex === tariffs.length - 1}
            aria-label="Следующий тариф"
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
              currentIndex === tariffs.length - 1 
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
            {tariffs.map((_, i) => (
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
      </div>
    </section>
  );
}