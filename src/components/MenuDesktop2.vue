<template lang="pug">
  .menu(v-if="userLink")
    router-link.menu__el(v-for="(item, idx) in list"
                        :key="idx"
                        :to="item.url"
                        active-class="active-link"
                        ) {{ item.text }}
    router-link.menu__el(
      active-class="active-link"
      :to="userLink") {{ userLink }}
</template>

<script>
import {mapGetters} from 'vuex'
import LogoComp from './LogoComp'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('menu', {
      list: 'getList',
      userLink: 'getUserLink'
    })
  }
}
</script>

<style lang="stylus" scoped>
.active-link
  background-color $light-grey
  color $light
.menu
  display none
  +md()
    display flex
    align-items center
    &__el
      z-index 1
      position relative
      transition 0.3s
      padding 0 40px
      color $blue
      height $height-header
      display flex
      align-items center
      &:hover
        color $light-grey
        &:after
          height 100%
      &:after
        content ''
        position absolute
        bottom 0
        left 0
        width 100%
        height 0
        background $blue
        transition 0.3s
        z-index -1
</style>
