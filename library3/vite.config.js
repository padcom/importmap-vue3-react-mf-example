import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'library3',
      fileName: 'index',
      formats: [ 'es' ],
    },
  },
  plugins: [vue()]
})
