import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// 创建 vue 实例
const app = createApp(App)

// 挂载 pinia
app.use(store)

// 挂载 router
app.use(router)

app.mount('#app')
