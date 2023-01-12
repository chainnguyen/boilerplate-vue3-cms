import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO: Config outputDir and configureWebpack
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    https: false,
  },
  plugins: [
    vue({
      // https://vuejs.org/guide/extras/reactivity-transform.html
      reactivityTransform: true,
    }),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/languages/**'),
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
