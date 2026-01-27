"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useLeadModal } from "@/contexts/LeadModalContext";
import ImageModal from "./ImageModal";

export default function ReviewsSection() {
  const { openModal } = useLeadModal();
  const [selectedScreenshot, setSelectedScreenshot] = useState<{ src: string; alt: string } | null>(null);

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

  return (
    <section className="section text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12"
      >
        Что говорят наши студенты 💬
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12 max-w-7xl mx-auto">
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
                  className="object-cover"
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
