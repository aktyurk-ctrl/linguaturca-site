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
          // Новая фирменная палитра (без красного)
          primary: '#39C7E5',  // голубой-бирюзовый для CTA
          accent: '#FFB69E',   // персиково-коралловый
          secondary: '#FFE9B3',// песочный для акцентов
          text: '#2B2B2B',     // графитовый текст
          hover: '#2183A2',    // глубокий лазурный для hover
          bg: '#FAFAF8',       // молочный белый фон
          card: '#FFFFFF',     // белый для карточек
          // Обратная совместимость
          heading: '#39C7E5',
          violet: '#39C7E5',
          pink: '#FFB69E',
          yellow: '#FFE9B3',
          blue: '#39C7E5',
          coral: '#FFB69E',
          mint: '#C5E4D6',
          beige: '#FAFAF8',
          soft: '#E4EDF2',
          green: '#89B78C',
          white: '#FFFFFF',
          gray: '#E5E5E5',
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
        soft: '0 6px 16px rgba(0, 0, 0, 0.05)',
        glow: '0 0 20px rgba(57, 199, 229, 0.4)',
        card: '0 6px 16px rgba(0, 0, 0, 0.05)',
        hover: '0 10px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config


