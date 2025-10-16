"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ReviewsSection() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col relative"
          >
            {/* Аватар и имя */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-full border-2 border-sky-500 overflow-hidden flex-shrink-0">
                <Image
                  src={r.avatar}
                  alt={r.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-base">{r.name}</p>
                <p className="text-sm text-gray-600">{r.level} • {r.format}</p>
              </div>
            </div>

            {/* Цитата и текст отзыва */}
            <div className="mb-4 flex-grow">
              <p className="text-sky-600 font-semibold mb-2 text-base">{r.quote}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </div>

            {/* REVIEW SCREENSHOT BLOCK START */}
            {r.screenshot && (
              <>
                {/* Разделитель */}
                <div 
                  className="mt-3"
                  style={{ 
                    height: '1px', 
                    backgroundColor: '#E6E6E6' 
                  }}
                ></div>

                {/* Область скриншота */}
                <div className="flex flex-col items-center pb-4">
                  <p 
                    className="mt-1 text-center"
                    style={{ 
                      fontSize: '12px', 
                      color: '#6B7280',
                      fontWeight: '400',
                      letterSpacing: '0.2px'
                    }}
                  >
                    📸 Скриншот отзыва
                  </p>
                  
                  <div
                    className="cursor-pointer w-full max-w-[90%] md:max-w-[90%] mt-1.5"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      borderRadius: '10px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      overflow: 'hidden',
                      maxHeight: '180px'
                    }}
                  >
                    <Image
                      src={r.screenshot}
                      alt="Скриншот отзыва"
                      width={400}
                      height={300}
                      className="object-contain transition-transform duration-250 ease-in-out hover:scale-102"
                      style={{
                        width: '100%',
                        maxHeight: '180px'
                      }}
                    />
                  </div>
                </div>
              </>
            )}
            {/* REVIEW SCREENSHOT BLOCK END */}
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
        <button className="btn-main text-lg">
          Хочу занять место!
        </button>
      </motion.div>
    </section>
  );
}