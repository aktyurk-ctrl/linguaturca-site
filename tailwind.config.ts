import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#3E2B8F',   // основной фиолетово-синий
          pink: '#FF6F91',     // акцент — дружелюбный, женственный
          yellow: '#FFD84D',   // вторичный — солнечный, позитивный
          mint: '#C5E4D6',     // дополнительный — спокойный, сбалансированный
          bg: '#FFF9F7',       // фон всех секций
          text: '#1C1C1C',     // основной текст
          // Старые цвета для совместимости
          blue: '#1E5D8C',
          coral: '#E46B4B',
          beige: '#FFF9F2',
          gray: '#4B4B4B',
          soft: '#E4EDF2',
          green: '#89B78C',
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1200px",
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: '0 8px 20px rgba(62, 43, 143, 0.08)',
        glow: '0 0 25px rgba(255, 111, 145, 0.25)',
        card: "0 4px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config


