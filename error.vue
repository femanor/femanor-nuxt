<template>
  <!-- <div class="pt-10">
    <h1 class="text-2xl text-center mb-2">出了点错 - {{ error?.statusCode }}</h1>
    <p class="text-center p-4">{{ error?.message }}</p>
    <div class="text-center">
      <UButton @click="retry" class="mr-2">重试</UButton>
      <UButton @click="handleError">回到首页</UButton>
    </div>
  </div> -->

  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
      <Icon name="lucide:circle-alert" class="text-red-500 mb-4" size="80" />
      <h1 class="text-4xl font-bold text-gray-800 mb-2">{{ error?.statusCode }}</h1>
      <p class="text-xl text-gray-600 mb-8">{{ error?.message }}</p>
      <div>
        <el-button type="warning" plain round @click="retry">重试</el-button>
        <el-button round @click="handleError">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})
console.log(props.error)
const router = useRouter()
const retry = () => (window.location.href = props.error!.url)
const handleError = () => clearError({ redirect: '/' })
</script>
