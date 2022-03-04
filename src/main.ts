import { createApp } from 'vue'
import './index.css'
import router from './router'
import App from './App.vue'
import { createStore } from 'vuex'
import { store } from './store'

const app = createApp(App)
app.use(router, store).mount('#app')

console.log(store.state.count)
