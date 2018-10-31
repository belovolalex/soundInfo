<template lang="pug">
  .wrapper-header
    section.header
      .container
        logo-comp
        menu-burger
        menu-desktop
    menu-mobile
</template>

<script>
import {mapGetters} from 'vuex'
import LogoComp from './LogoComp'
import MenuDesktop from './MenuDesktop'
import MenuBurger from './MenuBurger'
import MenuMobile from './MenuMobile'
export default {
  components: {
    LogoComp,
    MenuDesktop,
    MenuBurger,
    MenuMobile
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  position relative
  height $height-header
  background-color $light
  z-index 5
  shadow()
.container
  position relative
  display flex
  justify-content space-between
</style>
