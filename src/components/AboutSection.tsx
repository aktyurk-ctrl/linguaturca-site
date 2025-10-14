'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[#f9f6f3]"
    >
      {/* Фото Дарьи */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col items-center"
      >
        <Image
          src="/images/founder.jpg"
          alt="Дарья Колосова — основатель LinguaTurca"
          width={500}
          height={600}
          className="rounded-2xl shadow-lg object-cover max-w-md w-full"
        />
        <p className="mt-4 text-gray-600 text-sm text-center">
          Дарья Колосова — преподаватель, магистр турецкой филологии.
        </p>
      </motion.div>

      {/* Текст */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-600 mb-6">
          Merhaba! 🇹🇷
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
        Я Дарья, основатель и куратор онлайн-школы турецкого языка <strong>LinguaTurca</strong>.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
        Как лингвист с высшим образованием и опытом преподавания более 10 лет я знаю, что нужно, чтобы быстро и грамотно обучить турецкому.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed mb-6">
        Поэтому я собрала команду тюркологов и создала свои учебные материалы, чтобы сделать турецкий понятным и легким для каждого!
        </p>
        <a href="#about" className="btn-outline">
          Подробнее о преподавателе
        </a>
      </motion.div>
    </section>
  )
}


