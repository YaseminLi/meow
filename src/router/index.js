import Vue from 'vue'
import VueRouter from 'vue-router'

// 模块懒加载
const Record = () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
const Stock = () => import(/* webpackChunkName: "stock" */ '../views/Stock.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Record',
    component: Record
  },
  {
    path: '/stock',
    name: 'Stock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Stock
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
