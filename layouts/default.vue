<template>
  <div class="min-w-[800px]">
    <!-- <NavBar></NavBar> -->
    <slot />
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
// console.log(appConfig)
</script>
