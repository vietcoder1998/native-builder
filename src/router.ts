import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import FormContact from './views/FormContact.vue'
import SlidePage from './views/SlidePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/form-contact',
    name: 'FormContact',
    component: FormContact
  },
  {
    path: '/slider',
    name: 'SlidePage',
    component: SlidePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
