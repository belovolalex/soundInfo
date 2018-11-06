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
    new Promise (resolve  => {
      console.log('localStorage', localStorage.user)
      firebase.auth().onAuthStateChanged(function(user) {
        console.log('user-', user)
        localStorage.user == "null" ? vm.$store.dispatch('user/setUser', JSON.parse(localStorage.user)) 
                                    : vm.$store.dispatch('user/setUser', localStorage.user)
        resolve()
                                    
      })
    })
    .then(() => vm.$store.dispatch('menu/stateAuthorization', store))
  }
}).$mount('#app')
