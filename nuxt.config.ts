const IMAGEKIT_URL = 'https://ik.imagekit.io/g0dlexrqu' as const

export default defineNuxtConfig({
    experimental: {
        viewTransition: true
    },
    css: [
        '@/assets/css/main.css'
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark',
    },
    modules: [
        '@nuxtjs/device',
        '@nuxtjs/color-mode',
        '@nuxtjs/google-fonts',
        '@nuxtjs/supabase',
        '@nuxt/image-edge',
        '@vite-pwa/nuxt',
        '@vueuse/nuxt',
        'nuxt-icon',
        '~/modules/theme/index.ts'
    ],
    googleFonts: {
        preload: true,
        families: {
            Roboto: true,
            OpenSans: true
        }
    },
    components: {
        dirs: [
            '~/components'
        ]
    },
    appConfig: {
        theme: {
            options: {
                dark: true
            },
            colors: {
                primary: '#ff8800',
            },
        }
    },
    image: {
        provider: 'imagekit',
        imagekit: {
            baseURL: `${IMAGEKIT_URL}`,
            urlEndpoint: `${IMAGEKIT_URL}`
        }
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: 'SoundCloud Clone',
            short_name: 'SoundCloud',
            theme_color: '#ff8800',
            icons: [
                {
                    src: 'assets/icons/icon-72-72.png',
                    sizes: '72x72',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-96-96.png',
                    sizes: '96x96',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-144-144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-192-192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-512-512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
                {
                    src: 'assets/icons/icon-512-512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable'
                }
            ]
        },
        workbox: {
            navigateFallback: '/'
        },
        client: {
            installPrompt: true
        }
    }
})
