/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // TikTok brand colors
        'tiktok-black': '#000000',
        'tiktok-red': '#FE2C55',
        'tiktok-blue': '#25F4EE',
      },
    },
  },
  plugins: [],
}
