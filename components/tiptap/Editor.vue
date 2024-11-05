<template>
  <div>
    <TiptapTabBar :editor="editor" v-if="editor" />
    <TiptapEditorContent :editor="editor" class="h-full" />
  </div>
</template>

<script setup>
import Placeholder from '@tiptap/extension-placeholder'

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    TiptapStarterKit.configure({}),
    Placeholder.configure({
      // Use a placeholder:
      placeholder: 'Write something …'
      // Use different placeholders depending on the node type:
      // placeholder: ({ node }) => {
      //   if (node.type.name === 'heading') {
      //     return 'What’s the title?'
      //   }

      //   return 'Can you add some further context?'
      // },
    })
  ],
  autofocus: true
})

onBeforeUnmount(() => {
  unref(editor).destroy()
})
</script>
