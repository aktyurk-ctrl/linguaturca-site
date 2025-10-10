'use client'
import { motion } from "framer-motion"

export default function AdvantagesSection() {
  const advantages = [
    "Мини-группы до 6 человек — больше практики разговорной речи",
    "Записи занятий и домашка с проверкой",
    "Система уровней A1–B2 и дорожная карта прогресса",
    "Гибкий график: утро/день/вечер, будни и выходные",
    "Подготовка к переезду, работе и экзаменам",
  ]

  return (
    <section className="relative bg-[#FFF9F4] py-24 px-8 md:px-16 overflow-hidden">
      {/* Верхняя волна */}
      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 0 120 1200 0z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Контент */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-brand-blue mb-12 text-center"
        >
          Преимущества
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 text-brand-gray leading-relaxed hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Нижняя волна — плавный переход к “Преподавателям” */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 0 120 1200 0z" fill="#FFF9F2"></path>
        </svg>
      </div>
    </section>
  )
}


