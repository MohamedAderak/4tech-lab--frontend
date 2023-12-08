export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'project-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js' },
        { src: 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js' },
        { src: 'https://cdn.tailwindcss.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css' },

    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'http://localhost:8000',
    credential: true,
    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['axios'],
  }
}
