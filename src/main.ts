import { createApp } from 'vue'
import './index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'vue-json-pretty/lib/styles.css'
import './mixin.css'
import router from './router'
import App from './App.vue'
import { createStore } from 'vuex'
import { store } from './store'

const app = createApp(App)
app.use(router).use(store).mount('#app')
