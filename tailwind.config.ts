import { withTV } from 'tailwind-variants/transformer'
import { Config } from 'tailwindcss'
import pluginContainerQueries from '@tailwindcss/container-queries'
import pluginTypography from '@tailwindcss/typography'
import pluginScrollbar from 'tailwind-scrollbar'
import plugin from 'tailwindcss/plugin'

const pluginInlineSize =  plugin(({ addUtilities, addComponents, e, config }) => {
  addUtilities({
    '.inline-size-full': {
      'inline-size': '100%',
    },
    '.block-size-full': {
      'block-size': '100%',
    },
    '.min-inline-size-full': {
      'min-inline-size': '100%',
    },
    '.min-block-size-full': {
      'min-block-size': '100%',
    },
    '.max-inline-size-full': {
      'max-inline-size': '100%',
    },
    '.max-block-size-full': {
      'max-block-size': '100%',
    },
  })
})

export default withTV({
  plugins: [
    pluginContainerQueries,
    pluginTypography,
    pluginScrollbar({ nocompatible: true }),
    pluginInlineSize
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{.vue,js,ts}',
    './modules/**/*.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    colors: {
      'primary': {
        DEFAULT: 'rgb(var(--md-sys-color-primary-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-primary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-primary-dark-rgb) / <alpha-value>)'
      },
      'on-primary': {
        DEFAULT: 'rgb(var(--md-sys-color-on-primary-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-on-primary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-primary-dark-rgb) / <alpha-value>)'
      },
      'primary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-primary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-primary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-primary-container-dark-rgb) / <alpha-value>)'
      },
      'on-primary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-primary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-primary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-primary-container-dark-rgb) / <alpha-value>)'
      },
      secondary: {
        DEFAULT: 'rgb(var(--md-sys-color-secondary-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-secondary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-secondary-dark-rgb) / <alpha-value>)'
      },
      'on-secondary': {
        DEFAULT: 'rgb(var(--md-sys-color-on-secondary-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-secondary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-secondary-dark-rgb) / <alpha-value>)'
      },
      'secondary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-secondary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-secondary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-secondary-container-dark-rgb) / <alpha-value>)'
      },
      'on-secondary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-secondary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-secondary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-secondary-container-dark-rgb) / <alpha-value>)'
      },
      tertiary: {
        DEFAULT: 'rgb(var(--md-sys-color-tertiary-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-tertiary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-tertiary-dark-rgb) / <alpha-value>)'
      },
      'on-tertiary': {
        DEFAULT: 'rgb(var(--md-sys-color-on-tertiary-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-on-tertiary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-tertiary-dark-rgb) / <alpha-value>)'
      },
      'tertiary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-tertiary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-tertiary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-tertiary-container-dark-rgb) / <alpha-value>)'
      },
      'on-tertiary-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-tertiary-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-tertiary-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark-rgb) / <alpha-value>)'
      },
      surface: {
        DEFAULT: 'rgb(var(--md-sys-color-surface-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-surface-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-dark-rgb) / <alpha-value>)'
      },
      'on-surface': {
        DEFAULT: 'rgb(var(--md-sys-color-on-surface-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-on-surface-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-surface-dark-rgb) / <alpha-value>)'
      },
      background: {
        DEFAULT: 'rgb(var(--md-sys-color-background-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-background-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-background-dark-rgb) / <alpha-value>)'
      },
      'on-background': {
        DEFAULT: 'rgb(var(--md-sys-color-on-background-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-background-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-background-dark-rgb) / <alpha-value>)'
      },
      'surface-variant': {
        DEFAULT: 'rgb(var(--md-sys-color-surface-variant-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-variant-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-variant-dark-rgb) / <alpha-value>)'
      },
      'on-surface-variant': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-surface-variant-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-surface-variant-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-surface-variant-dark-rgb) / <alpha-value>)'
      },
      error: {
        DEFAULT: 'rgb(var(--md-sys-color-error-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-error-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-error-dark-rgb) / <alpha-value>)'
      },
      'on-error': {
        DEFAULT: 'rgb(var(--md-sys-color-on-error-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-on-error-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-error-dark-rgb) / <alpha-value>)'
      },
      'error-container': {
        DEFAULT: 'rgb(var(--md-sys-color-error-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-error-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-error-container-dark-rgb) / <alpha-value>)'
      },
      'on-error-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-error-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-error-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-error-container-dark-rgb) / <alpha-value>)'
      },
      'inverse-primary': {
        DEFAULT: 'rgb(var(--md-sys-color-inverse-primary-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-inverse-primary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-inverse-primary-dark-rgb) / <alpha-value>)'
      },
      'on-inverse-primary': {
        DEFAULT:
          'rgb(var(--md-sys-color-on-inverse-primary-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-on-inverse-primary-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-inverse-primary-dark-rgb) / <alpha-value>)'
      },
      outline: {
        DEFAULT: 'rgb(var(--md-sys-color-outline-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-outline-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-outline-dark-rgb) / <alpha-value>)'
      },
      'outline-variant': {
        DEFAULT: 'rgb(var(--md-sys-color-outline-variant-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-outline-variant-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-outline-variant-dark-rgb) / <alpha-value>)'
      },
      scrim: {
        DEFAULT: 'rgb(var(--md-sys-color-scrim-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-scrim-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-scrim-dark-rgb) / <alpha-value>)'
      },
      // Fixed Colors

      // Surface Levels
      'surface-level-1': {
        DEFAULT: 'var(--md-sys-color-surface-level1)',
        light: 'var(--md-sys-color-surface-level1-light)',
        dark: 'var(--md-sys-color-surface-level1-dark)'
      },

      'surface-level-2': {
        DEFAULT: 'var(--md-sys-color-surface-level2)',
        light: 'var(--md-sys-color-surface-level2-light)',
        dark: 'var(--md-sys-color-surface-level2-dark)'
      },

      'surface-level-3': {
        DEFAULT: 'var(--md-sys-color-surface-level3)',
        light: 'var(--md-sys-color-surface-level3-light)',
        dark: 'var(--md-sys-color-surface-level3-dark)'
      },

      'surface-level-4': {
        DEFAULT: 'var(--md-sys-color-surface-level4)',
        light: 'var(--md-sys-color-surface-level4-light)',
        dark: 'var(--md-sys-color-surface-level4-dark)'
      },

      'surface-level-5': {
        DEFAULT: 'var(--md-sys-color-surface-level5)',
        light: 'var(--md-sys-color-surface-level5-light)',
        dark: 'var(--md-sys-color-surface-level5-dark)'
      },

      'surface-dim': {
        DEFAULT: 'rgb(var(--md-sys-color-surface-dim-rgb) / <alpha-value>)',
        light: 'rgb(var(--md-sys-color-surface-dim-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-dim-dark-rgb) / <alpha-value>)'
      },
      'surface-bright': {
        DEFAULT: 'rgb(var(--md-sys-color-surface-bright-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-bright-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-bright-dark-rgb) / <alpha-value>)'
      },
      'surface-container-lowest': {
        DEFAULT:
          'rgb(var(--md-sys-color-surface-container-lowest-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-container-lowest-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-container-lowest-dark-rgb) / <alpha-value>)'
      },
      'surface-container-low': {
        DEFAULT:
          'rgb(var(--md-sys-color-surface-container-low-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-container-low-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-container-low-dark-rgb) / <alpha-value>)'
      },
      'surface-container': {
        DEFAULT:
          'rgb(var(--md-sys-color-surface-container-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-container-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-container-dark-rgb) / <alpha-value>)'
      },
      'surface-container-high': {
        DEFAULT:
          'rgb(var(--md-sys-color-surface-container-high-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-container-high-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-container-high-dark-rgb) / <alpha-value>)'
      },
      'surface-container-highest': {
        DEFAULT:
          'rgb(var(--md-sys-color-surface-container-highest-rgb) / <alpha-value>)',
        light:
          'rgb(var(--md-sys-color-surface-container-highest-light-rgb) / <alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-container-highest-dark-rgb) / <alpha-value>)'
      },
      
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
    },
    extend: {
      width: {
        'd-screen': '100dvw'
      },
      height: {
        'd-screen': '100dvh'
      },
      screens: {},
      fontSize: {
        'display-large': [
          '57px',
          {
            letterSpacing: '-0.25px',
            lineHeight: '64px',
            fontWeight: '400'
          }
        ],
        'display-medium': [
          '45px',
          {
            letterSpacing: '0px',
            lineHeight: '52px',
            fontWeight: '400'
          } 
        ],
        'display-small': [
          '36px',
          {
            letterSpacing: '0px',
            lineHeight: '44px',
            fontWeight: '400'
          }
        ],

        'headline-large': [
          '32px',
          {
            letterSpacing: '0px',
            lineHeight: '40px',
            fontWeight: '400'
          }
        ],
        'headline-medium': [
          '28px',
          {
            letterSpacing: '0px',
            lineHeight: '36px',
            fontWeight: '400'
          }
        ],
        'headline-small': [
          '24px',
          {
            letterSpacing: '0px',
            lineHeight: '32px',
            fontWeight: '400'
          }
        ],
        'title-large': [
          '22px',
          {
            letterSpacing: '0px',
            lineHeight: '28px',
            fontWeight: '400'
          }
        ],
        'title-medium': [
          '16px',
          {
            letterSpacing: '0.15000000596046448px',
            lineHeight: '24px',
            fontWeight: '500'
          }
        ],
        'title-small': [
          '14px',
          {
            letterSpacing: '0.10000000149011612px',
            lineHeight: '20px',
            fontWeight: '500'
          }
        ],
        'label-large': [
          '14px',
          {
            letterSpacing: '0.10000000149011612px',
            lineHeight: '20px',
            fontWeight: '500'
          }
        ],
        'label-medium': [
          '12px',
          {
            letterSpacing: '0.5px',
            lineHeight: '16px',
            fontWeight: '500'
          }
        ],
        'label-small': [
          '11px',
          {
            letterSpacing: '0.5px',
            lineHeight: '16px',
            fontWeight: '500'
          }
        ],
        'body-large': [
          '16px',
          {
            letterSpacing: '0.5px',
            lineHeight: '24px',
            fontWeight: '400'
          }
        ],
        'body-medium': [
          '14px',
          {
            letterSpacing: '0.25px',
            lineHeight: '20px',
            fontWeight: '400'
          }
        ],
        'body-small': [
          '12px',
          {
            letterSpacing: '0.4000000059604645px;',
            lineHeight: '16px',
            fontWeight: '400'
          }
        ]
      }
    },
  }
} satisfies Config)