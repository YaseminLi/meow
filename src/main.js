import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'amfe-flexible'

// 引入全局基本样式
import 'common/stylus/base.styl';

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
