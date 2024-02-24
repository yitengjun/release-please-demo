// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'ytng-please-release-demo',
      fileName: 'ytng-please-release-demo'
    },
  },
})
