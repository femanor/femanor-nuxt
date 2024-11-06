import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: [
    require('@tailwindcss/typography')
    // ...
  ]
}
