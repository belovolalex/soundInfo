export default {
  namespaced: true,
  state: {
    userLink: '',
    show: false,
    menuList: [
      {
        url: '/top-artists',
        text: 'Топ исполнители'
      },
      {
        url: '/top-tracks',
        text: 'Топ песни'
      }
    ] 
  },
  getters: {
    getList: (state) => state.menuList,
    getShow: (state) => state.show,
    getUserLink: (state) => state.userLink
  },
  mutations: {
    userLink(state, stateUser) {
      console.log('stateUser', stateUser)
      stateUser ? state.userLink = '/home' : state.userLink = '/authorization'

    },
    changeShow(state) {
      state.show = !state.show
    },
    hideOverlay(state) {
      let app = document.querySelector('#app')
      app.addEventListener('click', function(event) {
        if(event.target.className == 'fixed') {
          state.show = false
        }
      })
    },
    resize(state) {
      window.addEventListener('resize', function() {
        if(window.innerWidth > 992) {
          state.show = false
        }
      })
    },
    hide(state) {
      state.show = false
    }
  },
  actions: {
    stateAuthorization({commit}, store) {
      // console.log('store', store.getters['user/getStateUser'])
      commit('userLink', store.getters['user/getStateUser'])
      // console.log('store.getters[user/getStateUser]', store.getters['user/getStateUser'])
      // console.log('store', store.getters)
    }
  }
}