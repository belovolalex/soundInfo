import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import artist from './modules/artist'
import search from './modules/search'
import topArtist from './modules/topArtist'
import topTracks from './modules/topTracks'
import menu from './modules/menu'
import user from './modules/user'


const baseUrl = 'http://ws.audioscrobbler.com'

export const store = new Vuex.Store({
  modules: {
    menu,
    artist,
    topArtist,
    topTracks,
    search,
    user
  },
  actions: {
    getData(store, apiMethod) {
      return axios({
        baseURL: baseUrl,
        method: 'get',
        url: `/2.0/?method=${apiMethod}&api_key=2f65f21d079483ae8e31777aad6c7a6e&format=json`
      })
        .catch( (error) => console.log('error - ', error))
    }
  }
})
