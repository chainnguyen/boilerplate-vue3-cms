// Core
import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import * as path from 'path'
// Library & plugin
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// import OptimizationPersist from 'vite-plugin-optimize-persist'
// import PkgConfig from 'vite-plugin-package-config'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const pathResolve = (pathStr: string) => path.resolve(__dirname, pathStr)

export default (): UserConfig => {
  return {
    server: {
      host: 'localhost',
      port: 8080,
      open: true,
      https: false,
    },
    plugins: [
      vue({
        // Docs: https://vuejs.org/guide/extras/reactivity-transform.html
        reactivityTransform: true,
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      VueI18nPlugin({
        include: pathResolve('./src/languages/**'),
      }),
      // Docs: https://www.npmjs.com/package/unplugin-vue-components
      Components({
        dts: true,
        resolvers: [AntDesignVueResolver()],
        include: [/\.vue$/, /\.tsx$/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.dist[\\/]/],
      }),
      // Docs: https://www.npmjs.com/package/vite-plugin-optimize-persist
      // PkgConfig(),
      // OptimizationPersist(),
      vueSetupExtend(),
    ],
    build: {
      // Clear console & debugger
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      sourcemap: false,
      chunkSizeWarningLimit: 650,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendors'
            }
          },
        },
      },
    },
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        {
          find: '@', // convert /@/xxxx => src/xxxx
          replacement: pathResolve('./src') + '/',
        },
      ],
    },
  }
}
