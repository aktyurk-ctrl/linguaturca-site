import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <>
      {/* CTA перед футером */}
      <section className="section bg-sky-500 text-white text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Хочешь начать? Пройди тест и выбери формат обучения.
          </h3>
          <button className="btn-white">
            Пройти тест
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white">
        <div className="container py-12 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image 
                src="/logo.png" 
                alt="LinguaTurca" 
                width={40} 
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div className="font-bold text-lg text-white">LinguaTurca</div>
            </div>
            <p className="mt-2 text-gray-300">Онлайн-школа турецкого языка</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Контакты</div>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li>📧 hello@linguaturca.com</li>
              <li>📱 Telegram: @linguaturca</li>
              <li>📷 Instagram: @linguaturca</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Навигация</div>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="#about" className="hover:text-sky-400 transition-colors">О школе</Link></li>
              <li><Link href="#pricing" className="hover:text-sky-400 transition-colors">Тарифы</Link></li>
              <li><Link href="#schedule" className="hover:text-sky-400 transition-colors">Расписание</Link></li>
              <li><Link href="#reviews" className="hover:text-sky-400 transition-colors">Отзывы</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Мы в соцсетях</div>
            <div className="mt-2 flex gap-4">
              <a href="https://t.me/linguaturca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all duration-200">
                <span className="text-lg">📱</span>
              </a>
              <a href="https://instagram.com/linguaturca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transition-all duration-200">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 text-center text-xs text-gray-400">
          LinguaTurca © 2025
        </div>
      </footer>
    </>
  )
}


