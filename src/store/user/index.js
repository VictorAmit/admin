import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    user: null,
  },
  mutations: {
    updateUser(state, { user }) {
      state.user = user
    },
  },
  actions: {},
  getters: {
    user: state => state.user,
  },
}
