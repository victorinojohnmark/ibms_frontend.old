import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification'
import toastConfig from './toast'


import 'vue-toastification/dist/index.css'
import './assets/index.css'

import './axios'
import App from './App.vue'
import router from './router'
import toast from './toast'

const app = createApp(App)
const pinia  = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(Toast, toastConfig)


app.mount('#app')
