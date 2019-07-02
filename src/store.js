import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store( {
  state: {
    messages: [],
    name: ''
  },

  mutations: {
    pushMessage (state, payload) {
      state.messages.push(payload)
    },
    setUserName (state, payload) {
      state.name = payload
    }
  },

  getters: {
    getMessages: state => {
      return state.messages
    },
    getUserName: state => {
      return state.name
    }
  },

  actions: {
    SOCKET_newMessages (context, payload) {
      context.commit('pushMessage', payload)
    },
    setUserName (context, payload) {
      context.commit('setUserName', payload)
    }
  }
})

