/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- чтобы Tailwind видел твои React-файлы
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
