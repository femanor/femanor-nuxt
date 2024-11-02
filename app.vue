<template>
  <UApp :toaster="{ position: 'bottom-right', duration: 3000 }">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </UApp>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - ${runtimeConfig.public.appName}` : runtimeConfig.public.appName
  }
})
</script>

<style>
@import 'tailwindcss';
@import '@nuxt/ui';
</style>
