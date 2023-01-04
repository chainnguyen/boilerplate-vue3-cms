// Core
import { createApp } from 'vue'
import App from '@/App.vue'

// Library
import router from '@/router'
import store from '@/shared/store'
import ant from '@/plugins/ant-design'
import i18n from '@/plugins/locale'

// Plugin
import '@/plugins'

// Directive
import '@/shared/directives'

const app = createApp(App)

app.use(ant).use(router).use(store).use(i18n)

router.isReady().then(() => {
  app.mount('#app')
})
