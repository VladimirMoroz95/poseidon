import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/sign-in'
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: () => import('../components/SignIn.vue')
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: () => import('../components/SignUp.vue')
  },
  {
    path: '/devices',
    name: 'devices',
    component: () => import('../components/Devices.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/Dashboard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
