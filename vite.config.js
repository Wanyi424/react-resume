import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 开启局域网访问
    watch: {
      ignored: ['**/~*', '**/*.tmp', '**/node_modules/**', '**/dist/**']
    }
  }
})

