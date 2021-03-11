import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"",
    token:null,
  },
  mutations: {
    SET_USER_DATA:(state, data)=>{
      state.username = data.username;
      state.token = data.token;
    }
  },
  actions: {
    setUserData: ({commit}, data)=>{
      commit('SET_USER_DATA',data);
    }
  },
  modules: {
  }
})
