<script setup>
const prisma = usePrismaClient()
const user = await prisma.user.findFirst()
</script>

<template>
  <p>{{ user.name }}</p>
</template>
