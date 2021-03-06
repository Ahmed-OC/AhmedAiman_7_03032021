import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/forum',
    name : 'Forum',
    component : () => import('../views/Forum.vue')
  },
  {
    path: '/',
    name : 'Home',
    component : () => import('../views/Home.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
    
  },
  {
    path: '/profiles:nickname',
    name: 'Profiles',
    component: () => import('../views/Profiles.vue')
    
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router