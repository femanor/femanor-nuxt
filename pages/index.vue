<template>
  <div>Index Page</div>
  <NuxtLink to="/mine" class="text-4xl font-bold text-yellow-700">个人中心</NuxtLink>
  <div @click="handleExit">退出登录</div>
</template>

<script setup lang="ts">
useHead({
  title: '首页'
})

const ins = getCurrentInstance()
const router = useRouter()
const store = useUser()
const { isLogin, hello, userName } = storeToRefs(store)
const appConfig = useAppConfig()

if (!isLogin.value) {
  navigateTo('/login')
}
if (!hello.value) {
  ins?.proxy?.$toast('你好' + userName.value, appConfig.helloMessage)
  hello.value = true
}

const handleExit = () => {
  store.logout()
  router.push('/login')
  ins?.proxy?.$toast('退出登录成功', '', 'info')
}
</script>
