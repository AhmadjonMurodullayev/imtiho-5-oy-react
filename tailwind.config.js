/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'border-blue-500',
    'text-blue-600',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


