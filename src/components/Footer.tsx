import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: '#0B2239' }}
    >
        <div 
          className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.13)' }}
        >
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
            <p className="mt-2" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Онлайн-школа турецкого языка
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-base">Контакты</div>
            <ul className="mt-2 space-y-2 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <li>📧 hello@linguaturca.com</li>
              <li>📱 Telegram: @linguaturca</li>
              <li>📷 Instagram: @linguaturca</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-base">Навигация</div>
            <ul className="mt-2 space-y-2 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <li><Link href="#about" className="hover:text-white transition-colors">О школе</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Тарифы</Link></li>
              <li><Link href="#schedule" className="hover:text-white transition-colors">Расписание</Link></li>
              <li><Link href="#reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-base">Мы в соцсетях</div>
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
        <div 
          className="py-6 text-center"
          style={{ 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          LinguaTurca © 2025
        </div>
      </footer>
  )
}


