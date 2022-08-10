import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const resolve = (dir) => { return path.join(__dirname, dir) }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ AntDesignVueResolver() ]
    })
  ],
  resolve: {
    //设置别名
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    // 设置 https 代理
    // proxy: {
    //   '/api': {
    //     target: 'your https address',
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
