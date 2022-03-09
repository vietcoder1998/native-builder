import { createApp } from 'vue'
import './index.css'
import 'vue-json-pretty/lib/styles.css'
import router from './router'
import App from './App.vue'
import { createStore } from 'vuex'
import { store } from './store'

const app = createApp(App)
app.use(router).use(store).mount('#app')