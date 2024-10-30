// plugins/toast.ts
// 给组件声明一个自定义属性
// declare module '@vue/runtime-core' {
//   interface ComponentCustomProperties {
//     $toast: (title: string, description: string, color?: string) => void
//   }
// }

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    vueApp.config.globalProperties.$toast = (title: string, description?: string, color: string = 'success') => {
      const toast = useToast()
      toast.add({ title, description, color: color })
    }
  })
})
