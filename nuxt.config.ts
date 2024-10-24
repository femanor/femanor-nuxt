// https://nuxt.com/docs/api/configuration/nuxt-config
// 覆盖或扩展 Nuxt 配置
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@element-plus/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          'defineStore',
          'storeToRefs'
        ]
      }
    ],
    'pinia-plugin-persistedstate/nuxt'
  ],
  ui: {
    fonts: false
  },
  css: ['~/assets/css/main.css']
})
