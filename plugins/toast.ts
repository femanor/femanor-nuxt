interface ToastFunction {
  (title: string, description: string, color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'): void
}

// plugins/toast.ts
// 给组件声明一个自定义属性
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: ToastFunction
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', (vueApp) => {
    vueApp.config.globalProperties.$toast = (title, description, color) => {
      const toast = useToast()
      toast.add({ title, description, color })
    }
  })
})
