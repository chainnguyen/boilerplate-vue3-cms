import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
// @ts-ignore
import router from './router'
// @ts-ignore
// import store from './shared/store'

// Import Plugins
// import './plugins/validation'
// import './plugins/antdesign'
// import i18n from './plugins/i18n'
import './plugins'

// Import Directive
import './shared/directives'

createApp(App).use(router).mount('#app')
