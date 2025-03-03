import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue({
    // script: {
    //   defineModel: true,
    // },
    template: {
      compilerOptions: {
        isCustomElement: (tag) => /^micro-app/.test(tag),
      },
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  }
})
