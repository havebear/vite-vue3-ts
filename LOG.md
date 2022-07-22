# LOG

## 创建项目

```
yarn create vite project-name --template vue-ts
```

## 配置环境，规范

## 集成 pinia

新建 src/store/index.ts

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
