<template>
  <div class="">
    <BlogList />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '首页'
})

const ins = getCurrentInstance()
const store = useUser()
const { isLogin, hello, userName } = storeToRefs(store)
const appConfig = useAppConfig()

// if (!isLogin.value) {
//   navigateTo('/login')
// }

if (!hello.value && isLogin.value) {
  hello.value = true
  ins?.proxy?.$toast('你好' + userName.value, appConfig.helloMessage, 'success')
}
</script>
