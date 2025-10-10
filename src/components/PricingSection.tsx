"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
  const tariffs = [
    {
      title: "Тариф Базовый",
      color: "bg-white",
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
      color: "bg-[#FFF2F5]",
      features: [
        "занятия в группе, материалы",
        "обратная связь от преподавателя",
        "лекция о турецком менталитете или истории Турции на выбор",
        "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
      ],
      bonus: "🎁 Рабочая тетрадь с упражнениями + памятка «Такие похожие слова»",
      price: "8600 руб",
      oldPrice: "9200 руб",
    },
    {
      title: "Тариф Бизнес",
      color: "bg-[#E5F0FA]",
      features: [
        "занятия в группе, материалы",
        "обратная связь от преподавателя",
        "лекция о турецком менталитете или истории Турции на выбор",
        "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити",
        "дополнительный урок с преподавателем каждую неделю (30 мин индивидуально)",
      ],
      bonus: "🎁 Курс по произношению в подарок",
      price: "13000 руб",
      oldPrice: "15 200 руб",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF9F7] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#4A007E] mb-2">
          Стоимость обучения в мини-группе
        </h2>
        <div className="h-1 w-32 bg-[#FFD84D] mx-auto mb-12 rounded-full"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-6 md:px-12 max-w-6xl mx-auto">
        {tariffs.map((tariff, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`flex-1 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 ${tariff.color} border border-gray-100`}
          >
            <h3 className="text-lg font-bold mb-4 uppercase text-[#4A007E]">{tariff.title}</h3>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-2 mb-4">
              {tariff.features.map((f, j) => (
                <li key={j} className="text-sm leading-relaxed">{f}</li>
              ))}
            </ul>
            {tariff.bonus && (
              <div className="bg-[#4A007E]/5 p-3 rounded-lg mb-4">
                <p className="text-[#4A007E] font-medium text-sm">{tariff.bonus}</p>
              </div>
            )}
            <div className="mb-4">
              {tariff.oldPrice && (
                <p className="text-gray-400 line-through text-sm mb-1">{tariff.oldPrice}</p>
              )}
              <p className="text-2xl font-bold text-[#4A007E]">{tariff.price}</p>
            </div>
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
          className="bg-[#FF70A6] hover:bg-[#FF5893] text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
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
