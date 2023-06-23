/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'default-116px': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
}

