"use client";

import { motion } from "framer-motion";

export default function IndividualPricing() {
  const plans = [
    {
      title: "Индивидуальная консультация",
      description: "Определение уровня и составление программы обучения лично для вас",
      price: "Бесплатно",
      button: "Попробовать",
      isHighlighted: false,
    },
    {
      title: "Индивидуальный курс",
      description: "Абонемент на 5 занятий с преподавателем школы",
      price: "8200 руб",
      button: "Записаться",
      isHighlighted: true,
    },
  ];

  return (
    <section className="section text-center relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-heading rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-secondary rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-brand-primary rounded-full blur-3xl"></div>
      </div>

      {/* Декоративные элементы */}
      <motion.div
        className="absolute top-10 right-20 w-8 h-8 bg-brand-secondary rounded-full flex items-center justify-center"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-lg">⭐</span>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-20 w-6 h-6 bg-brand-heading rounded-full flex items-center justify-center"
        animate={{ 
          x: [0, 5, 0],
          y: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <span className="text-sm">💎</span>
      </motion.div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-heading mb-2">
            Стоимость обучения индивидуально
          </h2>
          <div className="h-1 w-32 bg-brand-secondary mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-12 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: plan.isHighlighted ? "0 20px 50px rgba(232, 93, 117, 0.25)" : "0 15px 35px rgba(0, 0, 0, 0.12)" }}
              className={`bg-brand-card rounded-2xl p-6 flex flex-col flex-1 transition-all duration-300 ${
                plan.isHighlighted 
                  ? "border-2 border-brand-primary shadow-xl" 
                  : "border border-gray-200 shadow-md"
              }`}
            >
              <h3 className="text-xl font-bold mb-6 uppercase text-brand-heading tracking-wide">{plan.title}</h3>
              <p className="text-brand-text mb-8 text-base leading-relaxed flex-grow">{plan.description}</p>
              <div className="mb-6">
                <p className="text-2xl font-bold text-brand-heading">{plan.price}</p>
              </div>
              <button className="w-full bg-brand-primary text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-brand-heading transition-all duration-300 shadow-soft hover:shadow-hover mt-auto">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 italic">
            * Индивидуальные занятия проходят в удобное для вас время
          </p>
        </motion.div>
      </div>
    </section>
  );
}
