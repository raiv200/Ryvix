/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pressed: {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        pressed: 'pressed 0.3s ease-in',
      },
    },
  },
  plugins: [],
}
