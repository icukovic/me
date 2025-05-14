// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  app: {
    baseURL: "/me/",
    buildAssetsDir: "assets"
  }
})