import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import SlidePage from './views/SlidePage.vue'
import FormContact from './views/FormContact.vue'
import BeaeCollection from './views/BeaeCollection.vue'
import LiquidAdmin from './views/LiquidAdmin.vue'

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
  },
  {
    path: '/beae-collection',
    name: 'beae-collection',
    component: BeaeCollection
  },
  {
    path: '/liquid-admin',
    name: 'liquid-admin',
    component: LiquidAdmin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
