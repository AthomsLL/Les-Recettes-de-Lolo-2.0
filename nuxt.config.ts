// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"]
  },
  css: [
    "vuetify/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css"
  ],
  googleFonts: {
    display: "swap",
    families: {
      Roboto: true,
      Poppins: [100, 200, 300, 400, 500, 600, 700],
      "Libre+Baskerville": [400, 700]
    },
    preconnect: true
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/athomsll/image/upload/'
    }
  },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
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
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  }
})
