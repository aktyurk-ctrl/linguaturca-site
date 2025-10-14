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
    },
    {
      name: "Алихан К.",
      avatar: "/images/review-avatar-2.jpg",
      quote: "«Шикарные презентации!»",
      text: "Все темы объяснены чётко, с примерами. Никогда не думала, что смогу говорить по-турецки так быстро!",
      level: "Уровень B1",
      format: "Индивидуально",
    },
    {
      name: "Ирина С.",
      avatar: "/images/review-avatar-3.jpg",
      quote: "«Любить учителя — любить занятия»",
      text: "С Дарьей хочется учить, смеяться и говорить! Атмосфера уюта и поддержки.",
      level: "Уровень A1",
      format: "Мини-группа",
    },
  ];

  return (
    <section className="section text-center bg-sky-50">
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
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
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