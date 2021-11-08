import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'tailwindcss/tailwind.css'
import '@/assets/style/index.less' // 全局样式
import $message from 'components/notification/Message/message'
import 'utils/registerPlugins' // 注册全局插件
import 'utils/registerComponent' // 注册全局组件
import i18n from './i18n'
Vue.config.productionTip = false
// message组件挂载到Vue构造函数上
Vue.prototype.$message = $message

console.log(process.env.NODE_ENV)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
