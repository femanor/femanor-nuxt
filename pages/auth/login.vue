<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-100 via-pink-100 to-cyan-100 p-4 sm:p-8">
    <UCard class="w-full max-w-md">
      <div class="flex flex-col justify-center items-center">
        <div class="text-center text-xl mb-2">欢迎登录【前端庄园技术社区】</div>
        <USeparator size="sm" icon="lucide:heart" class="mb-2" />
        <UButton icon="ri:github-fill" label="Github 登录" class="w-[150px] flex justify-center cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-110" @click="signIn('github')"> </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login'
})

const { status, data, signOut, signIn } = useAuth()
</script>

<style scoped></style>
