"use client";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  const reviews = [
    {
      quote: "«Качество, организованность, актуальность!»",
      text: "Занятия проходят живо, с интересом, Дарья всегда на связи и вдохновляет учиться.",
    },
    {
      quote: "«Шикарные презентации!»",
      text: "Все темы объяснены чётко, с примерами. Никогда не думала, что смогу говорить по-турецки так быстро!",
    },
    {
      quote: "«Любить учителя — любить занятия»",
      text: "С Дарьей хочется учить, смеяться и говорить! Атмосфера уюта и поддержки.",
    },
  ];

  return (
    <section className="section text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-brand-violet mb-12"
      >
        Отзывы учеников
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="card text-left"
          >
            <p className="text-brand-violet font-semibold mb-2">{r.quote}</p>
            <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
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
        <button className="btn-primary text-lg">
          Хочу занять место!
        </button>
      </motion.div>
    </section>
  );
}