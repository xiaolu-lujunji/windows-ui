import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from two levels up to the project root
      allow: ['../../'],
    },
  },
  resolve: {
    alias: {
      '@wui/core': path.resolve(process.cwd(), '../../packages/wui-core/src'),
      '@wui/animation': path.resolve(process.cwd(), '../../packages/wui-animation/src'),
      '@wui/hooks': path.resolve(process.cwd(), '../../packages/wui-hooks/src'),
      '@wui/utils': path.resolve(process.cwd(), '../../packages/wui-utils/src'),
    },
  },
})
