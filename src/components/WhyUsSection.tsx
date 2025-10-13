"use client";

import { motion } from "framer-motion";

export default function WhyUsSection() {
  const features = [
    {
      icon: "🎓",
      title: "Магистры турецкого языка",
      description: "Все наши преподаватели — выпускники университетов с профильным образованием в области турецкого языка и лингвистики.",
    },
    {
      icon: "💬",
      title: "Интерактивные уроки и коммьюнити",
      description: "Живые уроки в Zoom, общение с группой, поддержка в чате и регулярные встречи с преподавателем.",
    },
    {
      icon: "🌍",
      title: "Живые культурные примеры",
      description: "Изучаем не только язык, но и культуру Турции - постигаем менталитет и традиции на живых примерах.",
    },
    {
      icon: "📖",
      title: "Авторские материалы",
      description: "Наши ученики наслаждаются яркими презентациями и последовательными материалами, подготовленными дипломированными методистами.",
    }
  ];

  return (
    <section className="section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-4">
            Как мы учим турецкому
          </h2>
          <div className="h-1 w-24 bg-brand-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#FFF3D3] rounded-2xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-hover transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-brand-text mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

