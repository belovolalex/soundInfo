import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import artist from './modules/artist'
import topArtist from './modules/topArtist'
import globalStore from './modules/globalStore'
import menu from './modules/menu'

export const store = new Vuex.Store({
  modules: {
    menu,
    artist,
    topArtist,
    globalStore
  }
})