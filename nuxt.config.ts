// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"]
  },
  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/athomsll/image/upload/'
    }
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image-edge",
  ],
  pinia: {
    autoImports: [
      "defineStore",
    ]
  },
  piniaPersistedstate: {
    debug: true,
    storage: 'localStorage',
  },
})
