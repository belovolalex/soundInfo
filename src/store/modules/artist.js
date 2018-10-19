export default {
  namespaced: true,
  state: {
    name: '',
    type: 'artist.getinfo&artist=',
    artist: {}
  },
  getters: {
    getType(state) {
      return state.type + state.name
    },
    getArtist(state) {
      return state.artist
    }
  },
  mutations: {
    name(state, name) {
      state.name = name
    },
    artist(state, data) {
      state.artist = data
    },
    clear(state) {
      state.artist = {}
    }
  },
  actions: {

  }
}