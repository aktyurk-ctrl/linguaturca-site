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
          <a href="#hero" className="hover:text-[#39C7E5] transition">Главная</a>
          <a href="#courses" className="hover:text-[#39C7E5] transition">Курсы</a>
          <a href="#teachers" className="hover:text-[#39C7E5] transition">Преподаватели</a>
          <a href="#pricing" className="hover:text-[#39C7E5] transition">Цены</a>
          <a href="#reviews" className="hover:text-[#39C7E5] transition">Отзывы</a>
          <a href="#contact" className="hover:text-[#39C7E5] transition">Контакты</a>
        </nav>

        <a href="/contact" className="hidden md:block bg-[#39C7E5] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#1D8BA3] transition">
          Записаться
        </a>

        {/* Мобильное меню - бургер */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <span className={`block h-0.5 w-6 bg-[#39C7E5] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#39C7E5] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#39C7E5] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <nav className="px-6 py-6 flex flex-col gap-4">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Главная</a>
            <a href="#courses" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Курсы</a>
            <a href="#teachers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Преподаватели</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Цены</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Отзывы</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 hover:text-[#39C7E5] transition font-medium py-2">Контакты</a>
            <a href="/contact" className="mt-4 px-6 py-3 rounded-full bg-[#39C7E5] text-white font-semibold text-center hover:bg-[#1D8BA3] transition shadow-md">
              Записаться
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}


