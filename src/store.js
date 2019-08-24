import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

import state from '@/stores/state'
import actions from '@/stores/actions'
import mutations from '@/stores/mutations'

const info = {
  namespaced:true,
  state: {
    matchDate: '01/01/2021',
  },
  getters: {
    teamACount(state,getters,rootState){
      return rootState.teamA.length;
    }
  },
  actions: {},
  mutations: {}
}

//export default
export default new Vuex.Store({
  modules:{
    info: info,
  },
  state,
  mutations,

  actions,

  getters: {
    studentCount(state, getters) {
      return state.students.length;
    }
  }
})
