import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor
} from '@material/material-color-utilities'
import { addPlugin, addTemplate, createResolver, defineNuxtModule } from 'nuxt/kit'
import { defu } from 'defu'
import { ModuleOptions } from '@nuxt/schema'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'theme',
    configKey: 'theme',
    version: '0.0.1',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    options: {
      dark: true,
      tones: []
    },
    colors: {
      primary: '#265ea8',
      secondary: undefined,
      tertiary: undefined,
      neutral: undefined,
      neutralVariant: undefined,
      error: undefined
    },
    customColors: []
  },
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({
        path: resolve('./runtime/components'),
        prefix: '',
      })
    },
    'imports:dirs'(dirs) {
      dirs.push(resolve('./runtime/composables'))
      dirs.push(resolve('./runtime/utils'))
    }
  },
  setup: function(options, nuxt) {
    const moduleOptions = defu(nuxt.options.appConfig.theme ?? {}, options)
    // add option to support theme generation from image
    const { colors } = moduleOptions
    const t = themeFromSourceColor(argbFromHex(colors.primary))
    Object.keys(colors)
      .filter((c) => !colors[c as keyof typeof colors])
      .forEach((color) => {
        const c = color as keyof typeof colors
        colors[c] = hexFromArgb(t.palettes[c].tone(50))
      })
    nuxt.options.appConfig.theme = moduleOptions
    nuxt.options.runtimeConfig.public.theme = moduleOptions
    addPlugin(resolve('./runtime/plugin'))


    // Generating types to be injected
    addTemplate({
      filename: 'theme.d.ts',
      getContents: () => {
        return `
        interface ThemeNitroRules {
          theme?: { 
            options: {
              dark: boolean;
            } 
          }
        }
        declare module 'nitropack' {
          interface NitroRouteRules extends ThemeNitroRules {}
          interface NitroRouteConfig extends ThemeNitroRules {}
        }
        export {}`
      },
    })
    // Injecting previously generated types
    nuxt.hooks.hook('prepare:types', ({ references }) => {
      references.push({ path: resolve(nuxt.options.buildDir, 'theme.d.ts') })
    })
  }
})
