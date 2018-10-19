const baseUrl = 'http://ws.audioscrobbler.com'
import axios from 'axios'
export default {
  state: {
    // key: '2f65f21d079483ae8e31777aad6c7a6e'
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    getData(store, type) {
      return axios({
        baseURL: baseUrl,
        method: 'get',
        url: `/2.0/?method=${type}&api_key=2f65f21d079483ae8e31777aad6c7a6e&format=json`
      })
    }
  }
}