import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

function _resolve(dir: string) {
  return resolve(__dirname, dir)
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': _resolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/mixin.scss";'
      }
    }
  }
})
