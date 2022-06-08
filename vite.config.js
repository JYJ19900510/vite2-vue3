import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' //支持Jsx
import path from 'path' //路径别名
import { viteMockServe } from 'vite-plugin-mock' // mock




// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [vue(), vueJsx(), viteMockServe({ supportTs: false })]
})
