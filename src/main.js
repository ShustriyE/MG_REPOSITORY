import { createApp } from 'vue'
import './styles.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.use(pinia)
app.mount('#app')