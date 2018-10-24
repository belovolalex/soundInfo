import firebase from 'firebase'
export default {
  namespaced: true,
  state: {
    user: {
      isAuth: false,
      uid: null
    },
    errorSignUp: '',
    errorSignIn: ''
  },
  getters: {
    getErrorSignUp: (state) => state.errorSignUp,
    getErrorSignIn: (state) => state.errorSignIn,
    getIsAuth: (state) => state.user.isAuth,

  },
  mutations: {
    errorSignUp(state, error) {
      state.errorSignUp = error
    },
    errorSignIn(state, error) {
      state.errorSignIn = error
    },
    // logout(state) {
    //   state.user = {
    //     isAuth: false,
    //     uid: null
    //   }
    // },
    setId(state, uid) {
      state.user.uid = uid
    },
    activeStateUser(state, val) {
      state.user.isAuth = val
    }
  },
  actions: {
    signUp(store, peyload) {
      firebase.auth().createUserWithEmailAndPassword(peyload.email, peyload.password)
      .then(user => console.log('user', user))
      .catch(function(error) {
        var errorMessage = error.message;
        store.commit('errorSignUp', errorMessage)
        console.log('errorMessage', errorMessage)
      })
    },
    signIn(store, peyload) {
      firebase.auth().signInWithEmailAndPassword(peyload.email, peyload.password)
      .then(user => {
        // store.commit('setId', user.uid)
        // store.commit('activeStateUser', true)
      })
      .catch(function(error) {
        let errorMessage = error.message
        store.commit('errorSignIn', errorMessage)
      });
    },
    signOut(store) {
      firebase.auth().signOut().then(function() {
        store.commit('activeStateUser', false)
      }).catch(function(error) {
        // An error happened.
      });
    },
    stateAuthorization(store, payload) {
      if(payload) {
        store.commit('activeStateUser', true)
        store.commit('setId', payload)
      }
      else {
        store.commit('activeStateUser', false)
      }
    }
  }
}