import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false,
    status: null,
    bottomNav: 0,
    baseURL: 'http://192.168.137.130:8081/alfresco/api/-default-/public/'
  },
  mutations: {
  },
  actions: {
  }
})
