/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Sage Green
        green: {
          50: '#f0f5f0',
          100: '#d4e5d4',
          200: '#b8d4b8',
          300: '#9cb89b',
          400: '#7a9a79',
          500: '#5a7c59',
        },
        // Secondary - Warm Neutrals
        cream: '#faf8f5',
        beige: '#f5f0e8',
        taupe: '#c4a484',
        brown: '#8b7355',
        // Accents - Pastels
        pastel: {
          mint: '#c5e0c5',
          sage: '#d4e2d4',
          ivory: '#fffef9',
        },
        // Text
        text: {
          primary: '#4a5a4a',
          secondary: '#6b7b6b',
          muted: '#8a9a8a',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'Dancing Script', 'cursive'],
        sans: ['Poppins', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
