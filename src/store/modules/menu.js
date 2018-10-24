export default {
  namespaced: true,
  state: {
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
        url: '/authorization',
        text: 'login'
      }
    ] 
  },
  getters: {
    getList(state) {
      return state.menuList
    }
  }
}