"use client"
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Логотип + текст */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="LinguaTurca логотип"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-[#1F1F1F] tracking-tight">
            LinguaTurca
          </span>
        </div>

        {/* Навигация */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
          <a href="#hero">Главная</a>
          <a href="#about">О школе</a>
          <a href="#how-we-teach">Как мы учим</a>
          <a href="#courses">Курсы</a>
          <a href="#pricing">Тарифы</a>
          <a href="#schedule">Расписание</a>
          <a href="#reviews">Отзывы</a>
        </nav>

        <a href="/contact" className="hidden md:block header-cta" data-form-button data-section="Header">
          Записаться
        </a>

        {/* Мобильное меню - бургер */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <span className={`block h-0.5 w-6 bg-sky-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-sky-500 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-sky-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="px-6 py-6 flex flex-col gap-4">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Главная</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">О школе</a>
            <a href="#how-we-teach" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Как мы учим</a>
            <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Курсы</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Тарифы</a>
            <a href="#schedule" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Расписание</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium py-2">Отзывы</a>
            <a href="/contact" className="mt-4 header-cta text-center" onClick={() => setIsMobileMenuOpen(false)} data-form-button data-section="Header">
              Записаться
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}


