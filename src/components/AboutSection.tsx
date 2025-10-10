'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative border-t border-brand-blue/10"
      style={{
        backgroundImage: 'radial-gradient(1200px 400px at 0% 0%, #FFF7E8, #FFFFFF)',
      }}
    >
      {/* Decorative seagulls */}
      <svg
        className="pointer-events-none absolute -top-6 right-8 w-10 h-10 opacity-70 transition-transform duration-300 hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M10 34c10-8 18-6 22 0m22-2c-10-8-18-6-22 0" stroke="#0056A4" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <svg
        className="pointer-events-none absolute top-8 left-10 w-8 h-8 opacity-60 transition-transform duration-300 hover:scale-105"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M8 28c8-6 14-5 18 0m18-2c-8-6-14-5-18 0" stroke="#E46B4B" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <div
        className={[
          'grid md:grid-cols-2 gap-12 items-center py-24 px-8 md:px-16',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          'transition-all duration-700 ease-out',
        ].join(' ')}
      >
        <div>
          <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-card">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-blue/5 to-brand-coral/5" />
            <div className="relative h-72 md:h-[420px]">
              <Image
                src="/images/founder.jpg"
                alt="Дарья Колосова — основатель LinguaTurca"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            Дарья Колосова — лингвист, магистр турецкого языка, основатель LinguaTurca
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-brand-blue mb-4">
            Merhaba! <span className="align-middle">🇹🇷</span>
          </h2>
          <div className="space-y-4 text-gray-700">
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
    </section>
  )
}


