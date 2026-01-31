'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HowWeTeachSection() {
  return (
    <section id="learning-options" className="py-8 md:py-20 bg-white">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[22px] md:text-3xl font-semibold text-gray-800 mb-6 md:mb-10 flex items-center justify-center gap-2 leading-[1.3] md:leading-normal"
        >
          <span>💬</span> Выберите, как вам удобнее учиться
        </motion.h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Карточка 1 — мини-группы */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col md:flex-row bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[300px]"
          >
            <div className="md:w-1/2 relative h-[200px] md:h-auto overflow-hidden">
              <Image
                src="/images/class1-optimized.webp"
                alt="Уроки в мини-группах"
                fill
                sizes="50vw"
                className="object-cover md:rounded-l-3xl"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-left">
              <h3 className="text-[15px] md:text-xl font-medium text-gray-800 mb-3 leading-relaxed">
                Уроки в мини-группах — больше общения, больше практики, больше мотивации.
              </h3>
              <a 
                href="#groups"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-6 py-2.5 md:px-8 md:py-3 mt-2 md:mt-3 transition-all duration-200 active:scale-95 inline-block text-center text-[15px] md:text-base"
              >
                Присоединиться
              </a>
            </div>
          </motion.div>

          {/* Карточка 2 — индивидуальные */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col md:flex-row bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[300px]"
          >
            <div className="md:w-1/2 relative h-[200px] md:h-auto overflow-hidden">
              <Image
                src="/images/class2-optimized.webp"
                alt="Индивидуальные занятия"
                fill
                sizes="50vw"
                className="object-cover md:rounded-l-3xl"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-left">
              <h3 className="text-[15px] md:text-xl font-medium text-gray-800 mb-3 leading-relaxed">
                Индивидуальные занятия — в своём темпе и по персональной программе.
              </h3>
              <a 
                href="#individual"
                className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full px-6 py-2.5 md:px-8 md:py-3 mt-2 md:mt-3 transition-all duration-200 active:scale-95 inline-block text-center text-[15px] md:text-base"
              >
                Начать
              </a>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden space-y-4 max-w-md mx-auto">
          {/* Карточка 1 — мини-группы */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-[180px] overflow-hidden">
              <Image
                src="/images/class1-optimized.webp"
                alt="Уроки в мини-группах"
                fill
                sizes="100vw"
                className="object-cover"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-4 text-left">
              <h3 className="text-[15px] font-medium text-gray-800 mb-3 leading-relaxed">
                Уроки в мини-группах — больше общения, больше практики, больше мотивации.
              </h3>
              <a 
                href="#groups"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-6 py-2.5 mt-2 transition-all duration-200 active:scale-95 inline-block text-center text-[15px]"
              >
                Присоединиться
              </a>
            </div>
          </motion.div>

          {/* Карточка 2 — индивидуальные */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-[180px] overflow-hidden">
              <Image
                src="/images/class2-optimized.webp"
                alt="Индивидуальные занятия"
                fill
                sizes="100vw"
                className="object-cover"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center p-4 text-left">
              <h3 className="text-[15px] font-medium text-gray-800 mb-3 leading-relaxed">
                Индивидуальные занятия — в своём темпе и по персональной программе.
              </h3>
              <a 
                href="#individual"
                className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full px-6 py-2.5 mt-2 transition-all duration-200 active:scale-95 inline-block text-center text-[15px]"
              >
                Начать
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}