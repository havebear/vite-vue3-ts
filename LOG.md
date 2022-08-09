# LOG

## 创建项目

```
yarn create vite project-name --template vue-ts
```

## 配置环境，规范

## 集成 pinia

安装

``` cmd
yarn add pinia
```

src/store/index.ts

``` ts
import { createPinia } from 'pinia'

const store = createPinia()

export default store
```
src/main.ts

``` ts
import store from './store'

// 挂载 pinia
app.use(store)
```

定义State src/store/user.ts

``` ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id 必填，且唯一
  state: () => {
    return {
      name: '张三'
    }
  },
  actions: {
    updateName (name: string) {
      this.name = name
    }
  }
})
```

使用和修改state

``` ts
<template>
  <div>
    <span>{{ userStore.name }}</span>
    <button>修改 name</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const updateName = () => {
  userStore.updateName('李四')
}
</script>
```

## 集成 vue-router4

安装

``` cmd
yarn add vue-route
```

src/router/index.ts

``` ts
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

```

src/App.vue

```
<template>
  <router-view />
</template>

```

## 集成 [VueUse](https://vueuse.org/)

``` cmd
yarn add @vueuse/core
```

/src/views/demo/VueUse.vue

``` vue
<template>
  <div>
    <h1> 测试 vueUse 的鼠标坐标 </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<style>

</style>
```

## 集成 axios

``` cmd
pnpm i axios
```

## 集成 Less，配置全局变量

## 集成页面加载动画

``` cmd
yarn add nprogress
yarn add @types/nprogress -D
```

## 集成 Lodash

[Lodash和LodashES的区别](https://www.zhihu.com/question/460254104)

``` cmd
yarn add lodash
yarn add @types/lodash-es -D
```