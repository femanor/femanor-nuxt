<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-cyan-100 via-pink-100 to-cyan-100 p-4 sm:p-8">
    <UCard class="w-full max-w-md">
      <div class="flex justify-center">
        <UButton icon="ri:github-fill" label="登录" class="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 ease-in-out transform hover:scale-105" @click="signIn('github')"> </UButton>
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
