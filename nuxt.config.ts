import axios from 'axios'

export default defineNuxtConfig({
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
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwinds.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    exposeLevel: 1,
    config: {},
    injectPosition: 'first',
    viewer: true,
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
