"use client";

import { motion } from "framer-motion";

interface Feature {
  text: string;
  bold: boolean;
}

interface Tariff {
  title: string;
  isHighlighted: boolean;
  features: Feature[];
  price: string;
  oldPrice: string | null;
  bonus: string | null;
}

export default function PricingSection() {
  const tariffs: Tariff[] = [
    {
      title: "Тариф Базовый",
      isHighlighted: false,
      features: [
        { text: "занятия в группе, материалы", bold: false },
        { text: "обратная связь от преподавателя", bold: false },
      ],
      price: "7590 руб",
      oldPrice: null,
      bonus: null,
    },
    {
      title: "Тариф Комфорт",
      isHighlighted: true,
      features: [
        { text: "занятия в группе, материалы", bold: false },
        { text: "обратная связь от преподавателя", bold: false },
        { text: "лекция о турецком менталитете или истории Турции на выбор", bold: true },
        { text: "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити", bold: true },
      ],
      bonus: "Рабочая тетрадь с упражнениями + памятка «Такие похожие слова»",
      price: "8600 руб",
      oldPrice: "9200 руб",
    },
    {
      title: "Тариф Бизнес",
      isHighlighted: false,
      features: [
        { text: "занятия в группе, материалы", bold: false },
        { text: "обратная связь от преподавателя", bold: false },
        { text: "лекция о турецком менталитете или истории Турции на выбор", bold: true },
        { text: "«Турецкая гостиная» — групповой созвон с Дарьей, чат поддержки и коммьюнити", bold: true },
        { text: "дополнительный урок с преподавателем каждую неделю (30 мин индивидуально)", bold: true },
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
        <div className="h-1 w-32 bg-brand-primary mx-auto mb-12 rounded-full"></div>
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
                  <span className={f.bold ? "font-semibold text-[#1b1b1b]" : ""}>
                    {f.text}
                  </span>
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
            
            <div className="text-center space-y-2 mb-6">
              {tariff.oldPrice && (
                <p className="text-gray-400 line-through text-sm">{tariff.oldPrice}</p>
              )}
              <p className="text-lg font-semibold text-gray-900">
                Полный курс — <span className="text-brand-primary font-bold text-2xl">{tariff.price}</span>
              </p>
              <p className="text-sm text-gray-600">
                (10 уроков — {Math.round(parseInt(tariff.price.replace(/\s/g, '')) / 10)} ₽ за урок)
              </p>
            </div>
            
            <button className="w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-hover hover:shadow-md active:scale-95 transition-all duration-200 shadow-sm mt-auto focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
              Хочу занять место
            </button>
            <p className="text-xs text-gray-500 italic mt-2 text-center">
              Оплата возможна в 2 частях
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-gray-600">
          Не можете определиться? <a href="/contact" className="text-brand-primary hover:text-brand-hover font-semibold underline">Получите бесплатную консультацию</a>
        </p>
      </motion.div>
    </section>
  );
}
