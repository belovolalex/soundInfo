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
      },
      // {
      //   url: '/authorization',
      //   text: 'login'
      // }
    ] 
  },
  getters: {
    getList: (state) => state.menuList,
    getShow: (state) => state.show,
    getUserLink: (state) => state.userLink
  },
  mutations: {
    userLink() {
      return localStorage.name ? `/user/${localStorage.name}` : '/authorization'
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
  }
}