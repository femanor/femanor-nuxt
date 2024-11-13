// https://nuxt.com/docs/api/configuration/nuxt-config
// 覆盖或扩展 Nuxt 配置
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  experimental: {
    componentIslands: true
  },
  // 全局配置页头信息
  app: {
    head: {
      title: '前端庄园',
      meta: [
        { name: 'description', content: '前端庄园技术社区，专注于前端技术分享，一个前端垂直类技术社区' },
        { name: 'keywords', content: 'nuxt,vue,react,next,nest,node,html,css,js,ts,vite,webrtc,websocket' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  devtools: { enabled: true },
  // 运行时配置
  runtimeConfig: {
    // 此处的配置会被 .env 文件中的配置覆盖
    // 用于服务端的 keys
    apiUrl: 'URL_ADDRESS',
    // 用于客户端的 keys
    public: {
      apiBase: '/api',
      appName: '前端庄园'
    }
  },
  auth: {
    // 是否启用此模块
    isEnabled: true,
    baseURL: process.env.AUTH_BASE_URL,
    provider: {
      type: 'authjs'
    },
    // 是否添加保护所有页面的全局身份验证中间件
    globalAppMiddleware: {
      isEnabled: false
    }
  },
  // 配置自动导入
  imports: {
    dirs: ['store/*']
  },
  modules: ['@nuxt/ui', '@nuxt/icon', '@element-plus/nuxt', [
    '@pinia/nuxt',
    {
      autoImports: [
        // 自动引入 `defineStore(), storeToRefs()`
        'defineStore',
        'storeToRefs'
      ]
    }
  ], 'pinia-plugin-persistedstate/nuxt', 'nuxt-tiptap-editor', '@sidebase/nuxt-auth', '@nuxt/scripts'],
  tiptap: {
    prefix: 'Tiptap' //prefix for Tiptap imports, composables not included
  },
  ui: {
    fonts: false
  },
  css: ['~/assets/css/main.css', '~/assets/css/editor.css']
})