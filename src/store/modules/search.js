export default {
  namespaced: true,
  state: {
    name: '',
    method: 'artist.search&artist='
  },
  getters: {
    getSearchMethod(state) {
      return state.method + state.name
    }
  },
  mutations: {
    name(state, name) {
      state.name = name
    }
  }
}