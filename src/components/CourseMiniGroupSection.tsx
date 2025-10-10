"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CourseMiniGroupSection() {
  return (
    <section className="py-20 md:py-24 bg-brand-bg">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Текстовая часть */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-violet mb-4">
            Что такое курс в мини-группе?
          </h2>
          <p className="text-lg italic mb-6 text-gray-600">5 недель, 10 живых онлайн-уроков</p>
          
          <div className="bg-brand-pink/10 p-6 rounded-2xl shadow-sm border border-brand-pink/30">
            <ul className="space-y-2 text-gray-700 leading-relaxed">
              <li>– 10 занятий в мини-группе в Zoom</li>
              <li>– записи уроков</li>
              <li>– авторские материалы</li>
              <li>– доступ в личный кабинет</li>
              <li>– каждую неделю памятки со словами на тематику недели</li>
              <li>– пожизненный доступ ко всем материалам</li>
              <li>– обучение с нулевого уровня до B2</li>
            </ul>
          </div>

          <motion.div 
            className="mt-6 inline-block rounded-full border-4 border-brand-mint text-brand-text font-semibold px-5 py-2 text-sm shadow-md hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            2–4 человека в группе
            <motion.span
              className="ml-2 inline-block"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              ❤️
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Изображение */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/tea-minigroup.png"
              alt="Чай и разговоры о Турции"
              width={500}
              height={500}
              className="rounded-2xl shadow-md object-cover hover:shadow-lg transition-shadow duration-300"
            />
            {/* Декоративные элементы */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-brand-pink/20 rounded-full flex items-center justify-center"
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-lg">🇹🇷</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-mint rounded-full flex items-center justify-center"
              animate={{ 
                y: [0, 3, 0],
                x: [0, 2, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-sm">☕</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
