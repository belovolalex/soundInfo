export default {
  namespaced: true,
  state: {
    name: '',
    methods: {
      info: 'artist.getinfo&artist=',
      tags: 'artist.gettoptags&artist=',
    },
    artist: {

    }
  },
  getters: {
    getMethodInfo(state) {
      return state.methods.info + state.name
    },
    getInfo(state) {
      return state.artist
    },
    getTags(state) {
      return state.tags
    }
  },
  mutations: {
    name(state, name) {
      state.name = name
    },
    info(state, data) {
      state.artist = data
    },
    clear(state) {
      state.artist = {}
    }
  }
}