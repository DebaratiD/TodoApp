/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}','./index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "primary-color-2":  "var(--primary-color-2)"
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
    },
  },
  plugins: [],
}

