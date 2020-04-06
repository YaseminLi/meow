import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { introduce } from 'common/data/introduce.js'
export default new Vuex.Store({
  state: {
    introduce: introduce
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
