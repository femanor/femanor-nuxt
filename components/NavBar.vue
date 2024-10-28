<template>
  <div class="border-b-1 border-zinc-200">
    <div class="flex justify-between items-center max-w-[1200px] m-auto h-[60px]">
      <div class="h-[40px] flex items-center cursor-pointer">
        <img src="/assets/images/logo.png" class="w-full h-full" />
      </div>
      <div class="pr-2 flex items-center">
        <UButton icon="lucide:sun" size="xl" variant="ghost" class="cursor-pointer" color="neutral" @click="handleLight" />
        <UButton icon="lucide:moon" size="xl" variant="ghost" class="cursor-pointer" color="neutral" @click="handleDark" />
        <UButton icon="ion:extension-puzzle-outline" size="xl" variant="ghost" class="cursor-pointer" color="neutral" />
        <UButton icon="ion:notifications" size="xl" variant="ghost" class="cursor-pointer" color="neutral" />
        <UButton icon="logos:github-icon" size="xl" variant="ghost" class="cursor-pointer" color="neutral" to="https://www.baidu.com" target="_black" />

        <UDropdownMenu :items="items" class="w-48">
          <UAvatar src="https://foruda.gitee.com/avatar/1677152235246657276/8845783_w857669126_1640567606.png" class="ml-3 cursor-pointer" />

          <template #profile="{ item }">
            <div class="flex items-center flex-1" @click="console.log('11222333')">
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
const colorMode = useColorMode()
const currentMode = ref('')
currentMode.value = colorMode.preference
// colorMode.value = 'light'
console.log('colorMode', colorMode)

const handleLight = () => {
  colorMode.preference = 'light'
  colorMode.value = 'light'
}

const handleDark = () => {
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
}

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
</script>
