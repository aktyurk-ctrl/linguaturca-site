"use client"
import Link from 'next/link'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Главная' },
  { href: '/courses', label: 'Курсы' },
  { href: '/teachers', label: 'Преподаватели' },
  { href: '/pricing', label: 'Цены' },
  { href: '/reviews', label: 'Отзывы/Кейсы' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Блог' },
  { href: '/about', label: 'О нас' },
  { href: '/contact', label: 'Контакты' },
]

export function Header() {
  return (
    <header className={cn('sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-blue-50')}> 
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-manrope font-bold text-xl tracking-tight text-brand-violet">LinguaTurca</Link>
        <nav className="hidden md:flex gap-6 text-[15px]">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-brand-pink transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/free-lesson" className="px-5 py-2.5 rounded-full bg-brand-blue text-white hover:shadow-soft transition shadow-md">
            Бесплатная консультация
          </Link>
        </div>
      </div>
    </header>
  )
}


