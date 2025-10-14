"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndividualPricing() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Изображение */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/images/teacher1.jpg"
              alt="Индивидуальное обучение турецкому"
              width={500}
              height={500}
              className="rounded-2xl shadow-md object-cover hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        </motion.div>

        {/* Текстовая часть */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Индивидуальные занятия
          </h2>
          <p className="text-lg italic mb-6 text-gray-600">Персональный подход к изучению турецкого</p>
          
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md">
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>– Индивидуальные занятия с преподавателем</li>
              <li>– Гибкое расписание</li>
              <li>– Персональная программа</li>
              <li>– Фокус на ваших целях</li>
              <li>– Быстрый прогресс</li>
              <li>– Поддержка между занятиями</li>
              <li>– Абонемент на 5 занятий — 8200 руб</li>
            </ul>
          </div>

          <div className="mt-6">
            <button className="btn-outline">
              Записаться на индивидуальные занятия
            </button>
            <p className="text-sm text-gray-600 mt-2">
              в удобное время и в своём темпе
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
