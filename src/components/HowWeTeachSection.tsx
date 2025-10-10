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

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-violet mb-4">
            🇹🇷 Как мы учим турецкому
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Мы показываем язык как логичную систему, даём мотивацию и помогаем говорить на турецком с первого урока.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Карточка 1: Мини-группы */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/images/class1.jpg"
                    alt="Урок в мини-группе"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Уроки в мини-группах — больше общения, больше практики, больше мотивации.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-center pulse-cta"
                >
                  Хочу в мини-группу
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Карточка 2: Индивидуально */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/images/class2.jpg"
                    alt="Индивидуальное занятие"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  Индивидуальные занятия — в своём темпе и по персональной программе.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-pink-400 text-black font-semibold rounded-full hover:bg-pink-500 transition-colors text-center pulse-cta"
                >
                  Выбрать индивидуально
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
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#F97362] to-[#FF8C66] rounded-2xl shadow-lg py-10 px-8 mt-16 text-center text-white"
        >
          <p className="text-lg font-medium mb-4">
            Не знаешь, что подойдёт тебе? Пройди мини-тест уровня и получи консультацию.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#F97362] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition hover:scale-[1.05] transition-transform duration-300 ease-out pulse-cta">
              Пройти тест
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
