"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLeadModal } from "@/contexts/LeadModalContext";

interface Review {
  name: string;
  level: string;
  screenshot: string;
}

export default function ReviewsCarousel() {
  const { openModal } = useLeadModal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      name: "Марина П.",
      level: "A2 • Мини-группа",
      screenshot: "/images/review-screenshot-1.jpg",
    },
    {
      name: "Марина П.",
      level: "B1 • Индивидуально",
      screenshot: "/images/review-screenshot-2.jpg",
    },
    {
      name: "Марина П.",
      level: "A1 • Мини-группа",
      screenshot: "/images/review-screenshot-3.jpg",
    },
  ];

  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.85; // 85% для лучшего peek
      const gap = 20;
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < reviews.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  }, [currentIndex, scrollToIndex, reviews.length]);

  // Track scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const cardWidth = containerWidth * 0.85;
      const gap = 20;
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
    <section 
      className="section text-center"
      style={{ backgroundColor: '#f8fbff' }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-12 leading-[1.3] md:leading-normal"
        >
          Что говорят наши студенты 💬
        </motion.h2>

        {/* Desktop Grid - 3 iPhones */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* iPhone Mockup */}
              <div className="relative w-[280px] h-[560px] mb-6 mx-auto">
                {/* Screenshot inside */}
                <div className="absolute top-[48px] left-[24px] w-[232px] h-[464px] overflow-hidden rounded-[22px] bg-white z-0">
                  <Image
                    src={review.screenshot}
                    alt={`Отзыв от ${review.name}`}
                    fill
                    className="object-contain"
                    sizes="232px"
                    quality={85}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                
                {/* iPhone Frame - PNG mockup */}
                <Image
                  src="/images/apple-iphone-13-2021-medium.png"
                  alt=""
                  fill
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  sizes="280px"
                  quality={90}
                  priority={i === 0}
                />
              </div>

              {/* Student Info */}
              <div className="text-center">
                <p className="font-bold text-gray-900 text-base mb-1">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600">
                  {review.level}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - 1 iPhone */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 pb-4 -mx-6 px-6"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center flex flex-col items-center"
                style={{ 
                  width: '85%', 
                  minWidth: '85%', 
                  maxWidth: '85%'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {/* iPhone Mockup */}
                  <div className="relative w-[200px] h-[400px] mb-6 mx-auto">
                    {/* Screenshot inside */}
                    <div className="absolute top-[35px] left-[17px] w-[166px] h-[330px] overflow-hidden rounded-[18px] bg-white z-0">
                      <Image
                        src={review.screenshot}
                        alt={`Отзыв от ${review.name}`}
                        fill
                        className="object-contain"
                        sizes="166px"
                        quality={85}
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    
                    {/* iPhone Frame - PNG mockup */}
                    <Image
                      src="/images/apple-iphone-13-2021-medium.png"
                      alt=""
                      fill
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      sizes="200px"
                      quality={90}
                      priority={i === 0}
                    />
                  </div>

                  {/* Student Info */}
                  <div className="text-center">
                    <p className="font-bold text-gray-900 text-base mb-1">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {review.level}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Mobile Only */}
          <button
            onClick={handlePrev}
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
            onClick={handleNext}
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

          {/* Pagination Dots - Mobile Only */}
          <div className="flex justify-center gap-2 mt-6">
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
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
      </div>
    </section>
  );
}
