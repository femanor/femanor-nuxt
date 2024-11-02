<template>
  <div class="container mx-auto px-4 py-8 max-w-[1200px]">
    <div class="space-y-4">
      <div class="flex items-center gap-4">
        <!-- <div class="grid gap-2">
          <USkeleton class="h-4 w-[250px]" />
          <USkeleton class="h-4 w-[200px]" />
          <USkeleton class="h-4 w-[500px]" />
          <USkeleton class="h-4 w-[100px]" />
        </div> -->
      </div>
      <UCard class="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1] cursor-pointer" v-for="item in bloglist">
        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
          <div class="text-2xl font-bold">{{ item.title }}</div>
          <div class="text-muted-foreground transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center space-x-2">
            <UBadge class="font-bold rounded-full" variant="soft">{{ item.category }}</UBadge>
            <span class="text-sm text-muted-foreground">{{ item.author }}</span>
          </div>
          <UIcon name="lucide:chevron-right" />
        </div>
        <p class="text-muted-foreground">{{ item.summary }}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <UButton icon="lucide:thumbs-up" color="neutral" variant="ghost" size="lg" class="cursor-pointer">22</UButton>
            <UButton icon="lucide:star" color="neutral" variant="ghost" size="lg" class="cursor-pointer">22</UButton>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const bloglist = reactive([
  {
    id: 1,
    title: 'Getting Started with Next.js',
    date: '2023-05-15',
    author: 'Alice Johnson',
    category: 'Frontend',
    summary: 'Learn the basics of Next.js and how to set up your first project.',
    likes: 42
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    date: '2023-05-20',
    author: 'Bob Smith',
    category: 'React',
    summary: 'Dive deep into React Hooks and how they can simplify your code.',
    likes: 38
  },
  {
    id: 3,
    title: 'Mastering CSS Grid',
    date: '2023-05-25',
    author: 'Charlie Brown',
    category: 'CSS',
    summary: 'Explore the power of CSS Grid and create complex layouts with ease.',
    likes: 55
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    date: '2023-05-30',
    author: 'Diana Ross',
    category: 'TypeScript',
    summary: 'Learn the best practices for writing clean and efficient TypeScript code.',
    likes: 47
  }
])
</script>
