export default {
  namespaced: true,
  state: {
    artists: {},
    type: 'chart.gettopartists'
  },
  getters: {
    getType(state) {
      return state.type
    },
    getArtists(state) {
      return state.artists
    }
  },
  mutations: {
    artists(state, data) {
      state.artists = data
    }
  },
  actions: {

  }
}