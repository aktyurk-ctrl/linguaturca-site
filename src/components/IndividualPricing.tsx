"use client";

import { motion } from "framer-motion";

export default function IndividualPricing() {
  const plans = [
    {
      title: "Индивидуальная консультация",
      description: "Определение уровня и составление программы обучения лично для вас",
      price: "Бесплатно",
      button: "Попробовать",
      color: "bg-[#FFF7A5]",
      buttonColor: "bg-brand-pink hover:bg-brand-pink/80",
    },
    {
      title: "Индивидуальный курс",
      description: "Абонемент на 5 занятий с преподавателем школы",
      price: "8200 руб",
      button: "Купить",
      color: "bg-[#D4FFB2]",
      buttonColor: "bg-[#FF904D] hover:bg-[#FF7A33]",
    },
  ];

  return (
    <section className="section text-center relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-violet rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-brand-pink rounded-full blur-3xl"></div>
      </div>

      {/* Декоративные элементы */}
      <motion.div
        className="absolute top-10 right-20 w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center"
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
        className="absolute bottom-10 left-20 w-6 h-6 bg-brand-violet rounded-full flex items-center justify-center"
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-violet mb-2">
            Стоимость обучения индивидуально
          </h2>
          <div className="h-1 w-32 bg-brand-yellow mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-8 px-6 md:px-12 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`card flex-1 ${plan.color} border border-brand-gray`}
            >
              <h3 className="text-lg font-semibold mb-3 text-brand-violet">{plan.title}</h3>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">{plan.description}</p>
              <p className="text-2xl font-extrabold mb-6 text-brand-violet">{plan.price}</p>
              <motion.button
                className={plan.button === "Попробовать" ? "btn-primary" : "btn-secondary"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.button}
              </motion.button>
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
