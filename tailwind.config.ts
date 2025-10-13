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
          // Финальная палитра в стиле логотипа чайки
          primary: '#39C7E5',  // бирюзовый для CTA
          accent: '#FFB8A5',   // персиковый
          secondary: '#A1E4F2',// светло-голубой
          text: '#1F1F1F',     // тёмный текст
          hover: '#1D8BA3',    // насыщенный голубой для hover
          bg: '#FAFAFA',       // светлый фон
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
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
        glow: '0 4px 12px rgba(57, 199, 229, 0.3)',
        card: '0 4px 16px rgba(0, 0, 0, 0.05)',
        hover: '0 8px 20px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config


