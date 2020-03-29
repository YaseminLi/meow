import Vue from 'vue'
import VueRouter from 'vue-router'

// 模块懒加载
const Record = () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
const Stock = () => import(/* webpackChunkName: "stock" */ '../views/Stock.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/record',// 别名
    name: 'record',
    component: Record
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
