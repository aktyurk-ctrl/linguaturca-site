import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-brand-coral bg-brand-blue">
      <div className="container py-12 grid md:grid-cols-4 gap-10 text-sm text-white/90">
        <div>
          <div className="font-manrope font-bold text-xl text-white">LinguaTurca</div>
          <p className="mt-2">Онлайн-школа турецкого языка</p>
        </div>
        <div>
          <div className="font-semibold">Контакты</div>
          <ul className="mt-2 space-y-1">
            <li>Email: hello@example.com</li>
            <li>Тел: +90 000 000 00 00</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Навигация</div>
          <ul className="mt-2 space-y-1">
            <li><Link href="/privacy" className="hover:text-brand-coral">Политика конфиденциальности</Link></li>
            <li><Link href="/terms" className="hover:text-brand-coral">Пользовательское соглашение</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Мы в соцсетях</div>
          <div className="mt-2 flex gap-3">
            <span>VK</span><span>Telegram</span><span>Instagram</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} LinguaTurca. Все права защищены.
      </div>
    </footer>
  )
}


