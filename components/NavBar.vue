<template>
  <div class="border-b-1 border-zinc-200">
    <div class="flex justify-between items-center max-w-[1200px] m-auto h-[60px]">
      <div class="h-[40px] flex items-center cursor-pointer">
        <img v-if="$colorMode.preference == 'dark'" src="/assets/images/logo.png" class="w-full h-full" />
        <img v-else src="/assets/images/logo1.png" class="w-full h-full" />
      </div>
      <div class="pr-2 flex items-center">
        <UButton :icon="!isDarkMode ? 'lucide:sun' : 'lucide:moon'" variant="ghost" class="cursor-pointer text-[22px] mr-1" color="neutral" @click="toggleTheme" />
        <!-- <UPopover>
          <UButton icon="i-heroicons-swatch" size="xl" variant="ghost" class="cursor-pointer mr-1" color="neutral" />
          <template #content>
            <Placeholder class="size-48 m-4 inline-flex" />
          </template>
        </UPopover> -->
        <UChip :text="5" size="3xl" inset color="error">
          <UButton icon="ion:notifications" variant="ghost" class="cursor-pointer text-[22px]" color="neutral" />
        </UChip>
        <UButton icon="uiw:github" variant="ghost" class="cursor-pointer text-[22px] ml-2 mr-2" color="neutral" :to="appConfig.github" target="_black" />
        <UButton class="cursor-pointer" icon="i-heroicons-rocket-launch" color="success" v-if="!isLogin" @click="handleLogin">登录</UButton>

        <UDropdownMenu :items="items" class="w-48" v-else>
          <UAvatar src="https://github.com/benjamincanac.png" class="ml-3 cursor-pointer" />
          <!-- icon="lucide:user-round" -->
          <template #profile="{ item }">
            <div class="flex items-center flex-1" @click="handleExit">
              <UIcon name="i-heroicons-arrow-right-on-rectangle" class="mr-2 text-[var(--ui-text-muted)] hover:text-black" />
              <div class="self-start">{{ item.label }}</div>
            </div>
          </template>
        </UDropdownMenu>
      </div>
    </div>
  </div>
</template>

<script setup>
const ins = getCurrentInstance()
const colorMode = useColorMode()
const isDarkMode = ref(false)
const appConfig = useAppConfig()
const router = useRouter()
const store = useUser()

const { isLogin, hello, userName } = storeToRefs(store)

const items = ref([
  [
    {
      label: 'Profile',
      icon: 'i-heroicons-user'
    },
    {
      label: 'Billing',
      icon: 'i-heroicons-credit-card'
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog',
      kbds: [',']
    },
    {
      label: 'Keyboard shortcuts',
      icon: 'i-heroicons-computer-desktop'
    }
  ],
  [
    {
      label: 'Team',
      icon: 'i-heroicons-users'
    },
    {
      label: 'Invite users',
      icon: 'i-heroicons-user-plus',
      children: [
        [
          {
            label: 'Email',
            icon: 'i-heroicons-envelope'
          },
          {
            label: 'Message',
            icon: 'i-heroicons-chat-bubble-left'
          }
        ],
        [
          {
            label: 'More',
            icon: 'i-heroicons-plus-circle'
          }
        ]
      ]
    },
    {
      label: 'New team',
      icon: 'i-heroicons-plus',
      kbds: ['meta', 'n']
    }
  ],
  // [
  //   {
  //     label: 'GitHub',
  //     icon: 'i-simple-icons-github',
  //     to: 'https://github.com/nuxt/ui',
  //     target: '_blank'
  //   },
  //   {
  //     label: 'Support',
  //     icon: 'i-heroicons-lifebuoy',
  //     to: '/components/dropdown-menu'
  //   },
  //   {
  //     label: 'API',
  //     icon: 'i-heroicons-cloud',
  //     disabled: true
  //   }
  // ],
  [
    {
      label: '退出登录',
      icon: 'i-heroicons-arrow-right-on-rectangle',
      slot: 'profile'
    }
  ]
])

onMounted(() => {
  // 在客户端设置颜色模式，避免SSR不一致的问题
  isDarkMode.value = colorMode.preference === 'dark'
})

const toggleTheme = () => {
  colorMode.preference = isDarkMode.value ? 'light' : 'dark'
  isDarkMode.value = !isDarkMode.value
}

const handleLogin = () => {
  router.push('/login')
}

const handleExit = () => {
  store.logout()
  router.push('/login')
  ins?.proxy?.$toast('退出登录成功', '', 'error')
}
</script>

<style></style>
