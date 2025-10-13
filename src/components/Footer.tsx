import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-brand-primary/20 bg-brand-text">
      <div className="container py-12 grid md:grid-cols-4 gap-10 text-sm text-white/90">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image 
              src="/logo.png" 
              alt="LinguaTurca" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <div className="font-manrope font-bold text-lg text-white">LinguaTurca</div>
          </div>
          <p className="mt-2 text-white/70">Онлайн-школа турецкого языка</p>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Контакты</div>
          <ul className="mt-2 space-y-2 text-white/80">
            <li>📧 hello@linguaturca.com</li>
            <li>📱 +90 000 000 00 00</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Навигация</div>
          <ul className="mt-2 space-y-2 text-white/80">
            <li><Link href="/privacy" className="hover:text-brand-primary transition-colors">Политика конфиденциальности</Link></li>
            <li><Link href="/terms" className="hover:text-brand-primary transition-colors">Пользовательское соглашение</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3">Мы в соцсетях</div>
          <div className="mt-2 flex gap-4">
            <a href="https://t.me/linguaturca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-200">
              <span className="text-lg">📱</span>
            </a>
            <a href="https://instagram.com/linguaturca" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center hover:bg-brand-accent hover:scale-110 transition-all duration-200">
              <span className="text-lg">📷</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} LinguaTurca. Все права защищены.
      </div>
    </footer>
  )
}


