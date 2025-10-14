"use client";

import { motion } from "framer-motion";

export default function PricingSection() {
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
      price: "8600 руб",
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
      price: "13000 руб",
      isHighlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Тарифы обучения
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tariffs.map((tariff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
              className={`relative flex flex-col justify-between bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all p-8 min-h-[500px] ${
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
                  Полный курс — <span className="text-sky-600 text-2xl font-bold">{tariff.price}</span>
                </p>
                <button className="mt-6 btn-main w-full">
                  Записаться
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}