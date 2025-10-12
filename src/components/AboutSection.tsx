'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="section relative border-t border-brand-gray"
    >
      {/* Decorative seagulls */}
      <svg
        className="pointer-events-none absolute -top-6 right-8 w-10 h-10 opacity-70 transition-transform duration-300 hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M10 34c10-8 18-6 22 0m22-2c-10-8-18-6-22 0" stroke="#39C7E5" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <svg
        className="pointer-events-none absolute top-8 left-10 w-8 h-8 opacity-60 transition-transform duration-300 hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M8 28c8-6 14-5 18 0m18-2c-8-6-14-5-18 0" stroke="#FFB69E" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <div className="grid md:grid-cols-2 gap-12 items-center px-8 md:px-16">
        <div className="flex justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[700px] md:max-w-[800px] lg:max-w-[900px] mx-auto"
          >
            <Image
              src="/images/founder.jpg"
              alt="Дарья Колосова — основатель LinguaTurca"
              width={800}
              height={600}
              className="object-cover w-full h-auto rounded-3xl shadow-lg"
              priority
            />
            <p className="mt-3 text-sm text-brand-text/70 text-center">
              Дарья Колосова — лингвист, магистр турецкого языка, основатель LinguaTurca
            </p>
          </motion.div>
        </div>
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-brand-heading mb-4"
          >
            Merhaba! <span className="align-middle">🇹🇷</span>
          </motion.h2>
          <div className="space-y-4 text-brand-text leading-relaxed">
            <p>
              Я Дарья, в 2018 году создала школу турецкого языка LinguaTurca.
            </p>
            <p>
              Как лингвист с высшим образованием и опытом преподавания более 10 лет, я знаю, как быстро и грамотно обучить турецкому.
            </p>
            <p>
              Поэтому я собрала команду тюркологов и создала собственные материалы, чтобы сделать турецкий понятным и лёгким для каждого!
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}


