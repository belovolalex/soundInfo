export default {
  namespaced: true,
  state: {
    show: false,
    menuList: [
      {
        url: '/top-artists',
        text: 'Топ исполнители'
      },
      {
        url: '/top-tracks',
        text: 'Топ песни'
      },
      {
        url: '',
        text: ''  
      }
    ]
  },
  getters: {
    getShow: (state) => state.show,
    getList: (state) => state.menuList
  },
  mutations: {
    setUserLink(state, payload) {
      let userLink = state.menuList[state.menuList.length - 1]
      payload == 'null' || payload === undefined ? (userLink.url = '/authorization', userLink.text = 'login')
                                                 : (userLink.url = '/home', userLink.text = 'home')
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
  
  }
}