import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { watch } from 'vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/mapa_pmrn/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true,
      interval: 100
    }
  }, 
})
