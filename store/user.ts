export const useUser = defineStore('user', {
  state: () => ({
    isLogin: false,
    hello: false,
    userName: '小熊'
  }),
  actions: {
    login() {
      this.isLogin = true
    },
    logout() {
      this.isLogin = false
      this.hello = false
    }
  },
  persist: true
})
