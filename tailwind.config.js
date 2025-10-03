/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    // Transition and animation classes
    {pattern: /^transition-/},
    {pattern: /^duration-/},
    {pattern: /^ease-/},
    {pattern: /^delay-/},
    {pattern: /^animate-/},
    'gradient-text',
    'card-hover',
    'glass',
    'btn-hover'
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-custom': 'pulse 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
