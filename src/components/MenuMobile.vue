<template lang="pug">
  .mob-menu(:class="[show ? 'show' : '']")
    router-link.menu__el(v-for="(item, idx) in list"
                      :key="idx"
                      :to="item.url"
                      active-class="active-link"
                      )
      span(@click="toMain") {{ item.text }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('menu', {
      show: 'getShow',
      list: 'getList',
    })
  },
  methods: {
    toMain () {
      this.$store.commit('menu/hide')
    }
  },
  mounted() {
    this.$store.commit('menu/hideOverlay')
    this.$store.commit('menu/resize')
  }
}
</script>

<style lang="stylus" scoped>
  .menu
    &__el
      display block
      margin 30px 0
      text-align center
      span
        display block
  .mob-menu
    padding 15px
    overflow auto
    position absolute
    left -81%
    width 80%
    height "calc(100vh - %s)" % $height-header
    top $height-header
    background-color $light
    z-index 3
    transition .3s
    +md()
      display none
  .show
    left 0
    transition .5s
</style>
