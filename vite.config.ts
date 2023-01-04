import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import vue from '@vitejs/plugin-vue'
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
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/languages/**'
      ),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
