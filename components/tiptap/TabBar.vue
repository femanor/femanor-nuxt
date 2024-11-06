<template>
  <div class="flex items-center">
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('bold') ? 'soft' : 'ghost'" icon="ri:bold" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('italic') ? 'soft' : 'ghost'" icon="ri:italic" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('strike') ? 'soft' : 'ghost'" icon="ri:strikethrough" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('code') ? 'soft' : 'ghost'" icon="ri:code-fill" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()"></UButton>

    <!-- <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('bold') ? 'soft' : 'ghost'" @click="editor.chain().focus().unsetAllMarks().run()">clear marks</UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('bold') ? 'soft' : 'ghost'" @click="editor.chain().focus().clearNodes().run()">clear nodes</UButton> -->
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('paragraph') ? 'soft' : 'ghost'" icon="ri:paragraph" @click="editor.chain().focus().setParagraph().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 1 }) ? 'soft' : 'ghost'" icon="ri:h-1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 2 }) ? 'soft' : 'ghost'" icon="ri:h-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 3 }) ? 'soft' : 'ghost'" icon="ri:h-3" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 4 }) ? 'soft' : 'ghost'" icon="ri:h-4" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 5 }) ? 'soft' : 'ghost'" icon="ri:h-5" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('heading', { level: 6 }) ? 'soft' : 'ghost'" icon="ri:h-6" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('bulletList') ? 'soft' : 'ghost'" icon="ri:list-unordered" @click="editor.chain().focus().toggleBulletList().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('orderedList') ? 'soft' : 'ghost'" icon="ri:list-ordered-2" @click="editor.chain().focus().toggleOrderedList().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('codeBlock') ? 'soft' : 'ghost'" icon="ri:code-s-slash-fill" @click="editor.chain().focus().toggleCodeBlock().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" :variant="editor.isActive('blockquote') ? 'soft' : 'ghost'" icon="ri:double-quotes-l" @click="editor.chain().focus().toggleBlockquote().run()"></UButton>

    <UButton class="cursor-pointer" size="xl" color="neutral" variant="ghost" @click="editor.chain().focus().setHorizontalRule().run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" variant="ghost" @click="editor.chain().focus().setHardBreak().run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" variant="ghost" icon="material-symbols:undo" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()"></UButton>
    <UButton class="cursor-pointer" size="xl" color="neutral" variant="ghost" icon="material-symbols:redo" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()"></UButton>
  </div>
</template>

<script setup lang="ts">
const { editor } = defineProps(['editor'])
</script>
