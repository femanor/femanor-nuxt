<template>
  <div @click="handleLogin" class="text-orange-400 text-2xl">登录</div>
</template>

<script setup lang="ts">
useHead({
  title: '登录'
})
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
