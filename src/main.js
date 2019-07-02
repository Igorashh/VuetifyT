import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import VueSocketIO from 'vue-socket.io'

Vue.use(Vuetify)
Vue.config.productionTip = false

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'https://chatekk.herokuapp.com/',
//   vuex: {
//     store,
//     actionPrefix: 'SOCKET_',
//     mutationPrefix: 'SOCKET_'
//   }
// }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
