<template>
  <div class="">个人中心</div>
  <ClientOnly fallback-tag="span">
    <div>1122</div>
    <template #fallback>
      <!-- this will be rendered on server side -->
      <p>Loading comments...</p>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts"></script>
