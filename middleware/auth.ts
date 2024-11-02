export default defineNuxtRouteMiddleware((to, from) => {
  const store = useUser()
  if (!store.isLogin) {
    return navigateTo('/login')
  }
})
