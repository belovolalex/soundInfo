import {router} from '../../routes'
import firebase from 'firebase'
export default {
  namespaced: true,
  state: {
    user: {
      isAuth: false,
      uid: null,
      userName: ''
    },
    errorSignUp: '',
    errorSignIn: '',
    storageName: localStorage.name
  },
  getters: {
    getErrorSignUp: (state) => state.errorSignUp,
    getErrorSignIn: (state) => state.errorSignIn,
    getIsAuth: (state) => state.user.isAuth,
    getUserNameLink: (state) => state.storageName != '' ? 'profile' : 'login',
    getUserLink: (state) => state.storageName != '' ? `/user/${localStorage.name}` : '/authorization',
    getStorageName: (state) => state.storageName
  },
  mutations: {
    errorSignUp(state, error) {
      state.errorSignUp = error
    },
    errorSignIn(state, error) {
      state.errorSignIn = error
    },
    setId(state, uid) {
      state.user.uid = uid
    },
    setName(state, name) {
      if(!state.user.userName) {
        state.user.userName = name
      }
    },
    setStorageName(state, name) {
      localStorage.setItem('name', name)
      state.storageName = localStorage.getItem('name')
    },
    cleanStorageName(state) {
      localStorage.setItem('name', '')
      state.storageName = localStorage.getItem('name')
    },
    activeStateUser(state, val) {
      state.user.isAuth = val
    },
    cleanDataUser(state) {
      state.user = {
        isAuth: false,
        uid: null,
        userName: ''
      }
    }
  },
  actions: {
    signUp(store, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        let currentUser = firebase.auth().currentUser
        currentUser.updateProfile({
          displayName: payload.name
        })
      })
      .then(() => {
        store.commit('setName', payload.name)
        store.commit('setStorageName', payload.name)
        router.push('/')
      })
      .catch(function(error) {
        var errorMessage = error.message;
        store.commit('errorSignUp', errorMessage)
      })
    },
    signIn(store, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        store.commit('setStorageName', user.user.displayName)
        router.push('/')
      })
      .catch(function(error) {
        let errorMessage = error.message
        store.commit('errorSignIn', errorMessage)
      });
    },
    signOut(store) {
      firebase.auth().signOut()
        .then(function() {
          store.commit('cleanDataUser')
          store.commit('cleanStorageName')
          router.push('/')
        }).catch(function(error) {
          console.log('error', error)
      })
    },
    stateAuthorization(store, payload) {
      if(payload) {
        store.commit('activeStateUser', true)
        store.commit('setId', payload.uid)
        store.commit('setName', payload.displayName)
      }
      else {
        store.commit('activeStateUser', false)
      }
    }
  }
}