/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        'banner': '16/5',
        'thumbnail': '413/310',
        'thumbnail-banner': '413/220',
        'thumbnail-sm': "413/100"
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        'active': '#E53638',
        'smoke': '#eff0f6',
      },
    },
  },
  plugins: [],
}