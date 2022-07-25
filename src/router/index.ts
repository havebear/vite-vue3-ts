import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/demo/vueuse',
    name: 'VueUse',
    meta: {
      title: 'VueUse',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/demo/VueUse.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
