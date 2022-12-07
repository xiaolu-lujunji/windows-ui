import { defineConfig } from 'cypress'
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
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
          },
        },
      },
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
    },
  },
})
