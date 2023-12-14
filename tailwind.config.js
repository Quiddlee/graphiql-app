/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '4xl': '28px',
      },
      fontFamily: {
        readex_pro: ['Readex Pro', 'sans-serif'],
        jetbrains_mono: ['JetBrains Mono', 'sans-serif'],
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.25,1.55,.65,.97)',
      },
      height: {
        screen: '100dvh',
      },
      colors: {
        primary: 'var(--md-sys-color-primary)',
        'primary-text': 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'on-primary-text': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'primary-container-text': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'on-primary-container-text': 'var(--md-sys-color-on-primary-container)',
        'primary-fixed': 'var(--md-sys-color-primary-fixed)',
        'primary-fixed-text': 'var(--md-sys-color-primary-fixed)',
        'on-primary-fixed': 'var(--md-sys-color-on-primary-fixed)',
        'on-primary-fixed-text': 'var(--md-sys-color-on-primary-fixed)',
        'primary-fixed-dim': 'var(--md-sys-color-primary-fixed-dim)',
        'primary-fixed-dim-text': 'var(--md-sys-color-primary-fixed-dim)',
        'on-primary-fixed-variant': 'var(--md-sys-color-on-primary-fixed-variant)',
        'on-primary-fixed-variant-text': 'var(--md-sys-color-on-primary-fixed-variant)',
        secondary: 'var(--md-sys-color-secondary)',
        'secondary-text': 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'on-secondary-text': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        'secondary-container-text': 'var(--md-sys-color-secondary-container)',
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
        'on-secondary-container-text': 'var(--md-sys-color-on-secondary-container)',
        'secondary-fixed': 'var(--md-sys-color-secondary-fixed)',
        'secondary-fixed-text': 'var(--md-sys-color-secondary-fixed)',
        'on-secondary-fixed': 'var(--md-sys-color-on-secondary-fixed)',
        'on-secondary-fixed-text': 'var(--md-sys-color-on-secondary-fixed)',
        'secondary-fixed-dim': 'var(--md-sys-color-secondary-fixed-dim)',
        'secondary-fixed-dim-text': 'var(--md-sys-color-secondary-fixed-dim)',
        'on-secondary-fixed-variant': 'var(--md-sys-color-on-secondary-fixed-variant)',
        'on-secondary-fixed-variant-text': 'var(--md-sys-color-on-secondary-fixed-variant)',
        tertiary: 'var(--md-sys-color-tertiary)',
        'tertiary-text': 'var(--md-sys-color-tertiary)',
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'on-tertiary-text': 'var(--md-sys-color-on-tertiary)',
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'tertiary-container-text': 'var(--md-sys-color-tertiary-container)',
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
        'on-tertiary-container-text': 'var(--md-sys-color-on-tertiary-container)',
        'tertiary-fixed': 'var(--md-sys-color-tertiary-fixed)',
        'tertiary-fixed-text': 'var(--md-sys-color-tertiary-fixed)',
        'on-tertiary-fixed': 'var(--md-sys-color-on-tertiary-fixed)',
        'on-tertiary-fixed-text': 'var(--md-sys-color-on-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--md-sys-color-tertiary-fixed-dim)',
        'tertiary-fixed-dim-text': 'var(--md-sys-color-tertiary-fixed-dim)',
        'on-tertiary-fixed-variant': 'var(--md-sys-color-on-tertiary-fixed-variant)',
        'on-tertiary-fixed-variant-text': 'var(--md-sys-color-on-tertiary-fixed-variant)',
        error: 'var(--md-sys-color-error)',
        'error-text': 'var(--md-sys-color-error)',
        'error-container': 'var(--md-sys-color-error-container)',
        'error-container-text': 'var(--md-sys-color-error-container)',
        'on-error-container': 'var(--md-sys-color-on-error-container)',
        'on-error-container-text': 'var(--md-sys-color-on-error-container)',
        outline: 'var(--md-sys-color-outline)',
        'outline-text': 'var(--md-sys-color-outline)',
        background: 'var(--md-sys-color-background)',
        'background-text': 'var(--md-sys-color-background)',
        'on-background': 'var(--md-sys-color-on-background)',
        'on-background-text': 'var(--md-sys-color-on-background)',
        surface: 'var(--md-sys-color-surface)',
        'surface-text': 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'on-surface-text': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'surface-variant-text': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'on-surface-variant-text': 'var(--md-sys-color-on-surface-variant)',
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',
        'inverse-surface-text': 'var(--md-sys-color-inverse-surface)',
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-on-surface-text': 'var(--md-sys-color-inverse-on-surface)',
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',
        'inverse-primary-text': 'var(--md-sys-color-inverse-primary)',
        shadow: 'var(--md-sys-color-shadow)',
        'shadow-text': 'var(--md-sys-color-shadow)',
        'surface-tint': 'var(--md-sys-color-surface-tint)',
        'surface-tint-text': 'var(--md-sys-color-surface-tint)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
        'outline-variant-text': 'var(--md-sys-color-outline-variant)',
        scrim: 'var(--md-sys-color-scrim)',
        'scrim-text': 'var(--md-sys-color-scrim)',
        'surface-container-highest': 'var(--md-sys-color-surface-container-highest)',
        'surface-container-highest-text': 'var(--md-sys-color-surface-container-highest)',
        'surface-container-high': 'var(--md-sys-color-surface-container-high)',
        'surface-container-high-text': 'var(--md-sys-color-surface-container-high)',
        'surface-container': 'var(--md-sys-color-surface-container)',
        'surface-container-text': 'var(--md-sys-color-surface-container)',
        'surface-container-low': 'var(--md-sys-color-surface-container-low)',
        'surface-container-low-text': 'var(--md-sys-color-surface-container-low)',
        'surface-container-lowest': 'var(--md-sys-color-surface-container-lowest)',
        'surface-container-lowest-text': 'var(--md-sys-color-surface-container-lowest)',
        'surface-bright': 'var(--md-sys-color-surface-bright)',
        'surface-bright-text': 'var(--md-sys-color-surface-bright)',
        'surface-dim': 'var(--md-sys-color-surface-dim)',
        'surface-dim-text': 'var(--md-sys-color-surface-dim)',
      },
    },
  },
  plugins: [],
};
