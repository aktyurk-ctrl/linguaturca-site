'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-6 md:px-20 py-8 md:py-20 bg-[#f9f6f3]"
    >
      {/* Фото Дарьи */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col items-center"
      >
        <div className="relative w-full max-w-[320px] md:max-w-md aspect-[5/6] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/founder.jpg"
            alt="Дарья Колосова — основатель LinguaTurca"
            fill
            sizes="(max-width: 768px) 320px, 50vw"
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            quality={75}
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-gray-600 text-sm text-center">
        Дарья Колосова — лингвист, специалист по турецкому языку, основатель школы LinguaTurca.
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
        <h2 className="text-[22px] md:text-5xl font-extrabold text-sky-600 mb-4 md:mb-6 leading-[1.3] md:leading-normal">
          Merhaba! 🇹🇷
        </h2>
        <p className="text-gray-800 text-[15px] md:text-lg leading-relaxed mb-3 md:mb-4">
        Я Дарья, основатель и куратор онлайн-школы турецкого языка <strong>LinguaTurca</strong>.
        </p>
        <p className="text-gray-800 text-[15px] md:text-lg leading-relaxed mb-3 md:mb-4">
        Как лингвист с высшим образованием и опытом преподавания более 10 лет я знаю, что нужно, чтобы быстро и грамотно обучить турецкому.
        </p>
        <p className="text-gray-800 text-[15px] md:text-lg leading-relaxed mb-4 md:mb-6">
        Поэтому я собрала команду тюркологов и создала свои учебные материалы, чтобы сделать турецкий понятным и легким для каждого!
        </p>
         {/* <a 
           href="#about" 
           className="btn-outline"
           data-form-button
           data-section="О школе"
         >
           Подробнее о преподавателе
         </a> */}
      </motion.div>
    </section>
  )
}


