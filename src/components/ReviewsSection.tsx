"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLeadModal } from "@/contexts/LeadModalContext";
import ImageModal from "./ImageModal";

export default function ReviewsSection() {
  const { openModal } = useLeadModal();
  const [selectedScreenshot, setSelectedScreenshot] = useState<{ src: string; alt: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Марина П.",
      avatar: "/images/review-avatar-1.jpg",
      quote: "«Качество, организованность, актуальность!»",
      text: "Занятия проходят живо, с интересом, Дарья всегда на связи и вдохновляет учиться.",
      level: "Уровень A2",
      format: "Мини-группа",
      screenshot: "/images/review-screenshot-1.jpg",
    },
    {
      name: "Марина П.",
      avatar: "/images/review-avatar-1.jpg",
      quote: "«Шикарные презентации!»",
      text: "Все темы объяснены чётко, с примерами. Никогда не думала, что смогу говорить по-турецки так быстро!",
      level: "Уровень B1",
      format: "Индивидуально",
      screenshot: "/images/review-screenshot-2.jpg",
    },
    {
      name: "Марина П.",
      avatar: "/images/review-avatar-1.jpg",
      quote: "«Любить учителя — любить занятия»",
      text: "С Дарьей хочется учить, смеяться и говорить! Атмосфера уюта и поддержки.",
      level: "Уровень A1",
      format: "Мини-группа",
      screenshot: "/images/review-screenshot-3.jpg",
    },
  ];

  const handleScreenshotClick = (screenshot: string, name: string) => {
    setSelectedScreenshot({ src: screenshot, alt: `Скриншот отзыва от ${name}` });
  };

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
      const clampedIndex = Math.max(0, Math.min(newIndex, reviews.length - 1));
      
      if (clampedIndex !== currentIndex) {
        setCurrentIndex(clampedIndex);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, reviews.length]);

  return (
    <section className="section text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-[22px] md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-12 leading-[1.3] md:leading-normal"
      >
        Что говорят наши студенты 💬
      </motion.h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col h-full"
          >
            {/* Аватар и имя */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-sky-500 overflow-hidden flex-shrink-0">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                  quality={70}
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm truncate">{r.name}</p>
                <p className="text-xs text-gray-500 truncate">{r.level} • {r.format}</p>
              </div>
            </div>

            {/* Цитата */}
            <p className="text-sky-600 font-bold mb-2 text-sm leading-tight">
              {r.quote}
            </p>

            {/* Текст отзыва */}
            <p 
              className="text-gray-700 text-sm leading-relaxed mb-4 flex-1"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {r.text}
            </p>

            {/* Кнопка скриншота */}
            {r.screenshot && (
              <button
                onClick={() => handleScreenshotClick(r.screenshot!, r.name)}
                className="flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-sky-600 transition-colors mt-auto pt-3 border-t border-gray-100"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>Скриншот отзыва</span>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden relative px-6">
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
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 snap-center"
              style={{ width: '90%', minWidth: '90%', maxWidth: '90%' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col h-full"
              >
                {/* Аватар и имя */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-full border-2 border-sky-500 overflow-hidden flex-shrink-0">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                      quality={70}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{r.name}</p>
                    <p className="text-xs text-gray-500 truncate">{r.level} • {r.format}</p>
                  </div>
                </div>

                {/* Цитата */}
                <p className="text-sky-600 font-bold mb-2 text-sm leading-tight">
                  {r.quote}
                </p>

                {/* Текст отзыва */}
                <p 
                  className="text-gray-700 text-sm leading-relaxed mb-4 flex-1"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {r.text}
                </p>

                {/* Кнопка скриншота */}
                {r.screenshot && (
                  <button
                    onClick={() => handleScreenshotClick(r.screenshot!, r.name)}
                    className="flex items-center justify-center gap-2 text-xs text-gray-600 hover:text-sky-600 transition-colors mt-auto pt-3 border-t border-gray-100"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Скриншот отзыва</span>
                  </button>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Предыдущий отзыв"
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
          disabled={currentIndex === reviews.length - 1}
          aria-label="Следующий отзыв"
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all ${
            currentIndex === reviews.length - 1 
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
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Перейти к отзыву ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex 
                  ? 'bg-sky-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <button 
          className="btn-main text-lg"
          onClick={() => openModal({
            title: "Записаться на занятие",
            subtitle: "Оставьте контакты, и мы свяжемся с вами в течение 15 минут",
            source: "reviews"
          })}
        >
          Хочу занять место!
        </button>
      </motion.div>

      {/* Модальное окно для скриншота */}
      {selectedScreenshot && (
        <ImageModal
          isOpen={!!selectedScreenshot}
          imageSrc={selectedScreenshot.src}
          alt={selectedScreenshot.alt}
          onClose={() => setSelectedScreenshot(null)}
        />
      )}
    </section>
  );
}
