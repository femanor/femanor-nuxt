<template>
  <div>Index Page</div>
  <NuxtLink to="/mine">个人中心</NuxtLink>
  <div @click="handleExit">退出登录</div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { useUser } from '~/store/user'

const router = useRouter()
const store = useUser()
const { isLogin, hello, userName } = storeToRefs(store)
console.log('object', isLogin.value)
if (!isLogin.value) {
  navigateTo('/login')
}
if (!hello.value) {
  ElNotification({
    title: '你好' + userName.value,
    message: '欢迎光临，前端庄园技术社区'
  })
  hello.value = true
}

const handleExit = () => {
  store.logout()
  router.push('/login')
}
</script>
