// 配置公共变量
export default defineAppConfig({
  title: 'Hello Nuxt',
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
