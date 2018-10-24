export default {
  namespaced: true,
  state: {
    artists: {},
    type: 'chart.gettopartists'
  },
  getters: {
    getType: (state) => state.type,
    getArtists: (state) => state.artists
  },
  mutations: {
    artists(state, data) {
      state.artists = data
    }
  },
  actions: {

  }
}