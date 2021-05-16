/*
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-05-10 22:49:41
 */
import { createApp } from 'vue'
import App from './App.vue'
import VueNativeSock from "vue-native-websocket-vue3"
import store from './store'

const app = createApp(App)

app.mount('#app')

app.use(
  VueNativeSock,
  'ws://127.0.0.1:18080',
  {
    // 启用Vuex集成
    store:store,
    // 数据发送/接收使用使用json
    format: "json",
    // 开启手动调用 connect() 连接服务器
    connectManually: false,
    // 开启自动重连
    reconnection: true,
    // 尝试重连的次数
    reconnectionAttempts: 5,
    // 重连间隔时间
    reconnectionDelay: 3000
  }
);

export default app;