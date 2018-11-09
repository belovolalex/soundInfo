export default {
  namespaced: true,
  state: {
    artists: {},
    type: 'chart.gettopartists',
    search: '',
    filterArtists: {}
  },
  getters: {
    getType: (state) => state.type,
    getArtists: (state) => {
      return state.search ? state.filterArtists : state.artists
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