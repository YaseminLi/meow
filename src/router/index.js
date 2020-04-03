import Vue from 'vue'
import VueRouter from 'vue-router'

// 模块懒加载
const Record = () => import(/* webpackChunkName: "record" */ '../views/Record.vue')
const Stock = () => import(/* webpackChunkName: "stock" */ '../views/Stock.vue')
const EditMessage = () => import(/* webpackChunkName: "editMessage" */ '../views/EditMessage.vue')
const EditEvent = () => import(/* webpackChunkName: "editEvent" */ '../views/EditEvent.vue')
const EditStock = () => import(/* webpackChunkName: "editStock" */ '../views/EditStock.vue')
const SetRate = () => import(/* webpackChunkName: "setRate" */ '../views/SetRate.vue')
// const CustomizeRate = () => import(/* webpackChunkName: "customizeRate" */ '../views/CustomizeRate.vue')
const SetRemindType = () => import(/* webpackChunkName: "setRemindType" */ '../views/SetRemindType.vue')
const CustomizeRemindType = () => import(/* webpackChunkName: "customizeRemindType" */ '../views/CustomizeRemindType.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    alias: '/record',// 别名
    name: 'record',
    component: Record,
    children: [{
      path: 'editMessage',
      component: EditMessage
    },
    {
      path: 'editEvent',
      component: EditEvent,
      name: "editEvent",
      children: [{
        path: 'setRate',
        component: SetRate
        // children: [{
        //   path: 'customizeRate',
        //   component: CustomizeRate,
        //   name: "customizeRate"
        // }]
      }, {
        path: 'setRemindType',
        component: SetRemindType,
        children: [{
          path: "customizeRemindType",
          name: "customizeRemindType",
          component: CustomizeRemindType
        }]
      }]
    }
    ]
  },
  {
    path: '/stock',
    name: 'stock',
    component: Stock,
    children: [
      {
        path: 'editStock',
        component: EditStock
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
