'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HowWeTeachSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Анимированная чайка */}
      <motion.img
        src="/images/seagull.svg"
        alt="Чайка"
        initial={{ x: -200, y: 0, opacity: 0 }}
        animate={{ x: [ -200, 1100 ], opacity: [0, 1, 0] }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-16 h-auto pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text mb-3">
            📘 Форматы обучения
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            💬 Выберите, как вам удобнее учиться
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-16">
          {/* Карточка 1: Мини-группы */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
            className="bg-brand-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row min-h-[340px]">
              <div className="md:w-1/2 h-64 md:h-auto">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/class1.jpg"
                    alt="Урок в мини-группе"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between h-full">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Уроки в мини-группах — больше общения, больше практики, больше мотивации.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 bg-brand-primary text-white font-semibold rounded-full shadow-sm hover:bg-brand-hover hover:shadow-md transition-all duration-200 mt-6"
                >
                  Присоединиться
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Карточка 2: Индивидуально */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
            className="bg-brand-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row min-h-[340px]">
              <div className="md:w-1/2 h-64 md:h-auto">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/class2.jpg"
                    alt="Индивидуальное занятие"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between h-full">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Индивидуальные занятия — в своём темпе и по персональной программе.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center min-h-[52px] px-6 py-3 bg-brand-accent text-white font-semibold rounded-full shadow-sm hover:bg-[#F39C7F] hover:shadow-md transition-all duration-200 mt-6"
                >
                  Начать
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA внизу */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-brand-primary to-brand-hover rounded-2xl shadow-card hover:shadow-hover transition-shadow duration-300 py-10 px-8 mt-16 text-center text-white"
        >
          <p className="text-lg font-medium mb-4">
            Не знаешь, что подойдёт тебе? Пройди мини-тест уровня и получи консультацию.
          </p>
          <Link href="/contact">
            <button className="bg-brand-card text-brand-primary font-semibold px-8 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
              Пройти тест
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
