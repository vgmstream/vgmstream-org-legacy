export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - vgmstream',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'vgmstream - software for playing a wide variety of audio formats used in video games.' }
    ],
    script: [
      {
        async: true,
        defer: true,
        src: 'https://buttons.github.io/buttons.js'
      },
      {
        async: true,
        defer: true,
        'data-domain': 'vgmstream.org',
        src: 'https://pl.lopez-snowhill.net/js/plausible.js'
      }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-180x180.png', sizes: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-192x192.png', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'manifest', href: "/manifest.json"},
      { rel: 'stylesheet', href: "https://balde.losno.co/vgs/style.css"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap"}

    ]
  },


  loading: {
    color: '#d44d04',
    height: '15px'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  render: {
    http2: {
      push: true
    }
  },

  sitemap: {
    hostname: 'https://vgmstream.org',
    routes: [
      '/about',
      {
        url: '/downloads',
        changefreq: 'daily',
        priority: 1,
      },
      '/doc',
      '/doc/readme',
      '/doc/dev',
      '/doc/build',
      '/doc/cmake',
      '/doc/txtp',
    ]
  },

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    icons: false
  },



}
