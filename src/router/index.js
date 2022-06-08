import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '/@/views/home.vue'
import Detail from '/@/views/detail.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router