import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import firebaseConfig from './config/firebase'

import {store} from './store'
import {router} from './routes.js'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.$store.dispatch('user/stateAuthorization', user.uid)
      }
    });
  }
}).$mount('#app')
