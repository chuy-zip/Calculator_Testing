import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Calculator_Testing/',
  resolve : {
    alias: {
      '@assets':'/src/assets',
      '@components':'/src/components',
      '@styles':'/src/styles',
      '@views':'/src/views',
      '@scripts':'/src/Scripts'
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './setupTests.js'
  }
})
