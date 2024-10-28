<template>
  <div>Index Page</div>
  <NuxtLink to="/mine">个人中心</NuxtLink>
  <div @click="handleExit">退出登录</div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
// import { useUser } from '~/store/user'

useHead({
  title: '首页'
})

const router = useRouter()
const store = useUser()
const { isLogin, hello, userName } = storeToRefs(store)
const appConfig = useAppConfig()

if (!isLogin.value) {
  navigateTo('/login')
}
if (!hello.value) {
  ElNotification({
    title: '你好' + userName.value,
    message: appConfig.helloMessage
  })
  hello.value = true
}

const handleExit = () => {
  store.logout()
  router.push('/login')
}
</script>
