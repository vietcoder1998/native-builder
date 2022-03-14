import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { createApp } from 'vue'
import 'vue-json-pretty/lib/styles.css'
import App from './App.vue'
import './index.css'
import './mixin.css'
import router from './router'
import { store } from './store'
import { library } from '@fortawesome/fontawesome'
import * as faAdd from '@fortawesome/free-solid-svg-icons'
import AppIcon from './components/ui/Icon.vue'

const app = createApp(App)
app.use('app-icon', AppIcon).use(router).use(store).mount('#app')
