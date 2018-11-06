import {router} from '../../routes'
import firebase from 'firebase'
export default {
  namespaced: true,
  state: {
    user: null,
    authorization: ['login', 'registration'],
    error: null
  },
  getters: {
    stateUser: (state) => state.user != null,
    getActiveStateAuthorization: (state) => state.authorization[0],
    getError: (state) => state.error,
    getStateAuthorization: (state) => state.authorization,
  },
  mutations: {
    changeStateAuthorization(state) {
      state.error = null
      state.authorization = state.authorization.reverse()
    },
    setError(state, payload) {
      state.error = payload.message
    },
    setUser(state, payload) {
      state.error = null
      localStorage.user = payload
      state.user = localStorage.getItem('user')
      router.push('/')
    }
  },
  actions: {
    authorization({getters, commit}, payload) {
      let auth = getters.getActiveStateAuthorization === 'login' ? firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                                                                 : firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      auth
        .then(user => {
          commit('setUser', user.user.uid)
          commit('menu/setUserLink', localStorage.user, {root: true})
        })
        .catch(error => {
          commit('setError', error)
          console.log(error)
        })
      },
      logOut({commit}) {
        firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          commit('menu/setUserLink', localStorage.user, {root: true})
        })
        .catch(error => {
          commit('setError', error)
          console.log(error)
        })
    }
  }
}