
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/components',
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/firebase',
    '@nuxtjs/pwa',
    [
      'storyblok-nuxt',
      {
        accessToken: 'wUiw4Re6rkphPgi2NiQL6wtt',
        cacheProvider: 'memory'
      }
    ],
  ],

  firebase:  {
    config: {
      apiKey: 'AIzaSyDO8ZYWvJKxfRRFjaUC5KazlvhdLAc7d_s',
      authDomain: 'nuxt-auth-9bf4c.firebaseapp.com',
      projectId: 'nuxt-auth-9bf4c',
      storageBucket: 'nuxt-auth-9bf4c.appspot.com',
      messagingSenderId: '121586752438',
      appId: '1:121586752438:web:c107761699a48c74457f17',
    },
    services: {
      auth: {
        auth: {
          persistence: 'local', // default
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
          },
          ssr: true,
        }
      }
    }
  },

  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts:[
        '/firebase-auth-sw.js'
      ]
    },

    dev: process.env.NODE_ENV === 'development'
  },

  router: {
    middleware: ['auth']
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
