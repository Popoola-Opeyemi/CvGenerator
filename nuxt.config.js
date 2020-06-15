
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */

  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },

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
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/style.scss",
    "@node_modules/@mdi/font/css/materialdesignicons.css",
    'codemirror/lib/codemirror.css',
    'codemirror/theme/base16-dark.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // 
    { src: "@/plugins/vueScroll", ssr: false },
    { src: "@/plugins/youtubeEmbedd", ssr: false },
    { src: "@/plugins/VueScreenSize", ssr: false },
    { src: "@/plugins/vueCodeMirror", ssr: false },
    { src: "@/plugins/jsonlint", ssr: false },
  ],

  // 
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    'vue-scrollto/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    credentials: true
  },

  proxy: {
    "/api": "http://127.0.0.1:3000",
    "/public": "http://127.0.0.1:3000",
    "/static": "http://127.0.0.1:3000"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
