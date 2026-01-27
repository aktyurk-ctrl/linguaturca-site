import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: '#031E33' }}
    >
        <div 
          className="container py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10"
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
              <li>📧 study@linguaturca.ru</li>
              <li>📱 Telegram: @Daria_Kolosova</li>
              {/* Instagram скрыт от пользователей */}
              {/* <li>📷 Instagram: @linguaturca</li> */}
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
            <div className="font-semibold text-white mb-3 text-base">Юридическая информация</div>
            <ul className="mt-2 space-y-2 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <li><Link href="/legal" className="hover:text-white transition-colors">Публичная оферта</Link></li>
              <li><Link href="/policy" className="hover:text-white transition-colors">Политика в отношении обработки персональных данных</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3 text-base">Полезное</div>
            <ul className="mt-2 space-y-2 text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              <li><Link href="/articles/kak-vyuchit-turetskiy" className="hover:text-white transition-colors">Как выучить турецкий</Link></li>
              <li><Link href="/articles/turetskiy-yazyk-s-nulya" className="hover:text-white transition-colors">Турецкий язык с нуля</Link></li>
              <li><Link href="/articles/turetskiy-dlya-pereezda" className="hover:text-white transition-colors">Турецкий для переезда</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Разделительная линия */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
        
        <div 
          className="py-6 text-center"
          style={{ 
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}
        >
          © LinguaTurca 2025
        </div>
      </footer>
  )
}


