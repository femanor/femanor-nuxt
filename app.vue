<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
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
