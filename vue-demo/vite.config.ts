import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src')
    }
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
