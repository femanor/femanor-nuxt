// 配置公共变量，运行时配置
export default defineAppConfig({
  title: 'Hello Nuxt',
  helloMessage: '欢迎回来，前端庄园技术社区',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  },
  ui: {
    button: {
      variants: {
        size: {
          xl: {
            base: 'px-3 py-2 text-xl gap-2'
          }
        }
      }
    }
  }
})
