import axios from 'axios'

export default ({
  app: {
    head: {
      title: 'Islam',
      meta: [
        { name: 'description', content: 'Everything about - Nuxt-3' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt','@hypernym/nuxt-gsap'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwinds.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    exposeLevel: 1,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  env: {
    API_SURAH: process.env.API_SURAH || "https://quran-api-id.vercel.app/surahs",
  },
  // plugins: [
  //   '~/plugins/axios',
  // ],
  runtimeConfig: {
    Axios: {
      baseURL: process.env.API_SURAH,
    },
  },
});
