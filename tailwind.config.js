/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: { jf: { DEFAULT: '#1f6e99', deep: '#0b2a4a', brand: '#0a3d91', light: '#64CEFB' } },
    },
  },
  plugins: [],
}
