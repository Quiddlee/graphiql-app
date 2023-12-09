/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        readex_pro: ['Readex Pro', 'sans-serif'],
        jetbrains_mono: ['JetBrains Mono', 'sans-serif']
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.25,1.55,.65,.97)',
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        primary: 'var(--md-sys-color-primary)',
      }
    },
  },
  plugins: [],
}
