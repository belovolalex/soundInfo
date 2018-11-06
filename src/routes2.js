import Vue from 'vue'
import VueRouter from 'vue-router'
import {store} from './store'
Vue.use(VueRouter)

import ArtistComp from './components/ArtistComp'
import TopTracks from './components/TopTracks'
import TopArtists from './components/TopArtists'
import User from './components/User'
import E404 from './components/E404'
import MainComp from './components/MainComp'
import Authorization from './components/Authorization'
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
    path: '/authorization',
    component: Authorization,
    beforeEnter: (to, from, next) => {
      store.getters['user/getStateUser'] ? next('/') : next()
    }

    //  setTimeout(function() {
    //   console.log('store', store.getters['user/getStateUser'])
    //  },3000)
      // console.log(localStorage.user)
      // JSON.parse(localStorage.user) ? next('/') : next()
    // }
  },
  {
    path: '/top-tracks',
    component: TopTracks
  },
  {
    path: '/top-artists',
    component: TopArtists
  },
  {
    path: '*',
    component: E404
  },
  {
    path: '/home',
    component: User,
    beforeEnter: (to, from, next) => {
      store.getters['user/getStateUser'] ? next() : next('/')
    }
  },
  // {
  //   path: '/user/:name',
  //   component: User
  // },
]
export const router = new VueRouter({
  routes,
  mode: 'history'
})