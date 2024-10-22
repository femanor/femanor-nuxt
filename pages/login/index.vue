<template>
  <div @click="handleLogin">登录</div>
</template>

<script setup lang="ts">
import { useUser } from '~/store/user'

const router = useRouter()
const store = useUser()
const { isLogin } = storeToRefs(store)
const handleLogin = () => {
  store.login()
  router.push('/')
}
if (isLogin.value) {
  router.push('/')
}
</script>
