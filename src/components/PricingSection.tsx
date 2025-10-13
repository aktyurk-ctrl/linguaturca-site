"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  const tariffs = [
    {
      title: "Тариф Базовый",
      isHighlighted: false,
      features: [
        "занятия в группе, материалы",
        "обратная связь от преподавателя",
      ],
      price: "7590 руб",
      oldPrice: null,
      bonus: null,
    },
    {
      title: "Тариф Комфорт",
      isHighlighted: true,
      features: [
        "занятия в группе, материалы",
        "обратная связь от преподавателя",
        "лекция о турецком менталитете или истории Турции на выбор",
        "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
      ],
      bonus: "Рабочая тетрадь с упражнениями + памятка «Такие похожие слова»",
      price: "8600 руб",
      oldPrice: "9200 руб",
    },
    {
      title: "Тариф Бизнес",
      isHighlighted: false,
      features: [
        "занятия в группе, материалы",
        "обратная связь от преподавателя",
        "лекция о турецком менталитете или истории Турции на выбор",
        "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
        "дополнительный урок с преподавателем каждую неделю (30 мин индивидуально)",
      ],
      bonus: "Курс по произношению в подарок",
      price: "13000 руб",
      oldPrice: "15 200 руб",
    },
  ];

  return (
    <section className="section text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text mb-2">
          Стоимость обучения в мини-группе
        </h2>
        <div className="h-1 w-32 bg-brand-secondary mx-auto mb-12 rounded-full"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-6 md:px-12 max-w-6xl mx-auto">
        {tariffs.map((tariff, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: tariff.isHighlighted ? "0 12px 24px rgba(57, 199, 229, 0.2)" : "0 8px 20px rgba(0, 0, 0, 0.08)" }}
            className={`bg-brand-card rounded-2xl p-6 flex flex-col flex-1 transition-all duration-300 ${
              tariff.isHighlighted 
                ? "border-2 border-brand-primary shadow-xl" 
                : "border border-gray-200 shadow-md"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 uppercase text-brand-primary tracking-wide">{tariff.title}</h3>
            
            <ul className="text-left space-y-3 mb-6 flex-grow">
              {tariff.features.map((f, j) => (
                <li key={j} className="text-base leading-relaxed text-brand-text flex items-start">
                  <span className="text-brand-primary mr-2 flex-shrink-0">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            
            {tariff.bonus && (
              <div className="bg-brand-secondary/20 border border-brand-secondary/40 p-4 rounded-xl mb-6">
                <p className="text-brand-text font-medium text-sm flex items-start gap-2">
                  <span className="text-lg flex-shrink-0">🎁</span>
                  <span>{tariff.bonus}</span>
                </p>
              </div>
            )}
            
            <div className="mb-6">
              {tariff.oldPrice && (
                <p className="text-gray-400 line-through text-base mb-1">{tariff.oldPrice}</p>
              )}
              <p className="text-2xl font-bold text-brand-text">{tariff.price}</p>
            </div>
            
            <button className="w-full bg-brand-primary text-white font-semibold py-3.5 px-6 rounded-full hover:bg-brand-hover hover:shadow-md active:scale-95 transition-all duration-200 shadow-sm mt-auto focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
              Записаться
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <motion.button 
          className="btn-primary text-lg py-4 px-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Хочу занять место!
        </motion.button>
        <p className="text-sm text-gray-500 mt-3 italic">
          *у нас возможна оплата в 2 частях
        </p>
      </motion.div>
    </section>
  );
}
