import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//全局进度条的配置
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: 'body', //指定进度条的父容器
})

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
      title: '切换主题',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/demo/VueUse.vue')
  },
  {
    path: '/demo/change-theme',
    name: 'ChangeTheme',
    meta: {
      title: 'VueUse',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/demo/ChangeTheme.vue')
  },
  {
    path: '/demo/lodash',
    name: 'Lodash',
    meta: {
      title: 'Lodash',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/demo/Lodash.vue')
  },
  {
    path: '/demo/antd',
    name: 'Antd',
    meta: {
      title: 'Antd',
      keepAlive: false,
      requireAuth: false
    },
    component: () => import('@/views/demo/Antd.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async () => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
