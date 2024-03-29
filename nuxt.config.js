const routerBase = process.env.DEPLOY_ENV === 'production' ? '/mdash/' : '/'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  router: {
    mode: 'hash',
    base: routerBase,
    routerNameSplitter: '/',
    middleware: ['router']
  },
  env: {
    baseUrl: 'https://nexiot.nexiss.cloud/api/v1',
    localUrl: 'http://localhost:8080/api/v1'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NextIoT Dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/axios',
    '~/plugins/filters',
    '~/mixins/mixins.js',
    '~/plugins/vuepersistence.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],
  toast: {
    position: 'top-right',
    duration: 5000,
    theme: 'bubble',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  icon: {
    iconSrc: '/static/icon.png'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? '/assets/' : '',
    postcss: {
      plugins: {
      },
      preset: {
      }
    },
    terser: {
      extractComments: false, // default was LICENSES
      // https://github.com/terser/terser#compress-options
      // Disable console log in production
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
