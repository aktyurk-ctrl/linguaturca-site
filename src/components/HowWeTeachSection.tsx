'use client'
import { motion } from 'framer-motion'

export default function HowWeTeachSection() {
  return (
    <section id="learning-options" className="py-20 bg-white">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-10 flex items-center justify-center gap-2"
        >
          <span>💬</span> Выберите, как вам удобнее учиться
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Карточка 1 — мини-группы */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col md:flex-row bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[300px]"
          >
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/class1.jpg"
                alt="Уроки в мини-группах"
                className="object-cover w-full h-full md:rounded-l-3xl"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-8 text-left">
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-3">
                Уроки в мини-группах — больше общения, больше практики, больше мотивации.
              </h3>
              <button 
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full px-8 py-3 mt-3 transition-all duration-200 active:scale-95"
                data-form-button
                data-section="Как мы учим"
              >
                Присоединиться
              </button>
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
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="/images/class2.jpg"
                alt="Индивидуальные занятия"
                className="object-cover w-full h-full md:rounded-l-3xl"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center p-8 text-left">
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-3">
                Индивидуальные занятия — в своём темпе и по персональной программе.
              </h3>
              <button 
                className="bg-rose-400 hover:bg-rose-500 text-white font-semibold rounded-full px-8 py-3 mt-3 transition-all duration-200 active:scale-95"
                data-form-button
                data-section="Как мы учим"
              >
                Начать
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}