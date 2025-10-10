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
        card: "0 4px 24px rgba(0,0,0,0.06)",
        soft: "0 10px 30px rgba(0, 86, 164, 0.08)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config


