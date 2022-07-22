import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 创建 vue 实例
const app = createApp(App)

// 挂载 pinia
app.use(store)

app.mount('#app')
