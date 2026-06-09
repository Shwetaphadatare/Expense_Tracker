/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        'primary-dark': '#064E3B',

        secondary: '#FBBF24',

        background: '#FFFFFF',
        surface: '#F8FAFC',

        text: '#0F172A',
        'text-secondary': '#64748B',

        success: '#22C55E',
        danger: '#EF4444',
      },
    },
  },

  plugins: [],
};
