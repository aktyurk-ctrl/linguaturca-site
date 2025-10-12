"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const nav = [
  { href: '#courses', label: 'Курсы' },
  { href: '#teachers', label: 'Преподаватели' },
  { href: '#pricing', label: 'Цены' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm'
      )}
    > 
      <div className="container flex items-center justify-between py-3 px-6">
        {/* Логотип - иконка */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
          <Image 
            src="/logo.png" 
            alt="LinguaTurca" 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden lg:flex gap-6 text-[15px]">
          {nav.map((n) => (
            <a 
              key={n.href} 
              href={n.href} 
              onClick={(e) => handleNavClick(e, n.href)}
              className="text-brand-text hover:text-brand-primary transition-colors duration-300 font-medium cursor-pointer"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA кнопка */}
        <div className="hidden lg:flex items-center gap-3">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#39C7E5] to-[#2183A2] text-white font-semibold hover:shadow-glow transition-all duration-300 shadow-md"
          >
            Записаться
          </Link>
        </div>

        {/* Мобильное меню - кнопка бургера */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <span className={cn(
            'block h-0.5 w-6 bg-brand-primary transition-all duration-300',
            isMobileMenuOpen && 'rotate-45 translate-y-2'
          )}></span>
          <span className={cn(
            'block h-0.5 w-6 bg-brand-primary transition-all duration-300',
            isMobileMenuOpen && 'opacity-0'
          )}></span>
          <span className={cn(
            'block h-0.5 w-6 bg-brand-primary transition-all duration-300',
            isMobileMenuOpen && '-rotate-45 -translate-y-2'
          )}></span>
        </button>
      </div>

      {/* Мобильное меню - выезжающий блок */}
      <div 
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-t border-gray-200',
          isMobileMenuOpen ? 'max-h-[80vh]' : 'max-h-0'
        )}
      >
        <nav className="container px-6 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <a 
              key={n.href} 
              href={n.href} 
              onClick={(e) => handleNavClick(e, n.href)}
              className="text-brand-text hover:text-brand-primary transition-colors duration-300 font-medium text-base py-2 cursor-pointer"
            >
              {n.label}
            </a>
          ))}
          <Link 
            href="/contact" 
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#39C7E5] to-[#2183A2] text-white font-semibold text-center hover:shadow-glow transition-all duration-300 shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Записаться
          </Link>
        </nav>
      </div>
    </header>
  )
}


