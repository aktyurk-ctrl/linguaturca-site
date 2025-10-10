'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HowWeTeachSection() {
  return (
    <section className="bg-[#FFF8F5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E3A8A] mb-4">
            🇹🇷 Как мы учим турецкому
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Мы показываем язык как логичную систему, даём мотивацию и помогаем говорить на турецком с первого урока.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Карточка 1: Мини-группы */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
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
                  className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition-colors text-center"
                >
                  Хочу в мини-группу
                </Link>
              </div>
            </div>
          </div>

          {/* Карточка 2: Индивидуально */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
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
                  className="inline-block px-6 py-3 bg-pink-400 text-black font-semibold rounded-full hover:bg-pink-500 transition-colors text-center"
                >
                  Выбрать индивидуально
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA внизу */}
        <div className="text-center">
          <p className="text-gray-700 text-lg mb-6">
            Не знаешь, что подойдёт тебе? Пройди мини-тест уровня и получи консультацию.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#F97362] text-white font-semibold rounded-full hover:bg-[#E85A4F] transition-colors"
          >
            Пройти тест
          </Link>
        </div>
      </div>
    </section>
  )
}
