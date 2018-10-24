export default {
  namespaced: true,
  state: {
    tracks: [],
    type: 'chart.gettoptracks'
  },
  getters: {
    getType(state) {
      return state.type
    },
    getTracks(state) {
      return state.tracks
    }
  },
  mutations: {
    tracks(state, data) {
      state.tracks = data
    }
  }
}