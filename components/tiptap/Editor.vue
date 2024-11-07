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
  onUpdate: ({ editor }) => {
    const data = editor.getJSON()
    console.log(JSON.stringify(data))
    // handleUpdate(JSON.stringify(data))
    // updateCharacterCount()
  },
  extensions: [
    TiptapStarterKit.configure({}),
    Placeholder.configure({
      // Use a placeholder:
      placeholder: '请输入内容...'
      // Use different placeholders depending on the node type:
      // placeholder: ({ node }) => {
      //   if (node.type.name === 'heading') {
      //     return 'What’s the title?'
      //   }
      //   return 'Can you add some further context?'
      // },
    })
  ],
  // @tailwindcss/typography
  // URL_ADDRESS  // https://tailwindcss.com/docs/typography-plugin
  editorProps: {
    attributes: {
      class: 'prose dark:prose-invert lg:prose-lg focus:outline-none min-h-96'
    }
  },

  autofocus: true
})

onBeforeUnmount(() => {
  unref(editor).destroy()
})
</script>
