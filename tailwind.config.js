import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto Mono', 'monospace'], // This makes Roboto Mono the default sans font
      },
    },
    colors: {
        'badge-primary': 'oklch(var(--badge-primary) / <alpha-value>)',
        'badge-secondary': 'oklch(var(--badge-secondary) / <alpha-value>)',
    },
  },
}