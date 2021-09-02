import { createRouter, createWebHashHistory } from 'vue-router'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import home from '../views/Home.vue'
const routes = [
  {
    path:'/',
    name: 'Home',
    component: home
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
