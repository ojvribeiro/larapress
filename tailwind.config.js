/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './resources/components/**/*.{vue,js,ts}',
    './resources/views/**/*.{vue,js,ts}',
    './resources/pages/**/*.{vue,js,ts}',
    './resources/layouts/**/*.{vue,js,ts}',
    './index.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
