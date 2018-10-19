import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ArtistComp from './components/ArtistComp'
import TopArtists from './components/TopArtists'
import E404 from './components/E404'
import MainComp from './components/MainComp'
const routes = [
  {
    path: '/top-artists/:name',
    component: ArtistComp
  },
  {
    path: '',
    component: MainComp
  },
  {
    path: '/top-artists',
    component: TopArtists
  },
  {
    path: '*',
    component: E404
  },
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})