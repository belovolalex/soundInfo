<template lang="pug">
  section.wrapper-header
    .container
      logo-comp
      .menu
        router-link.menu__el(v-for="(item, idx) in list"
                            :key="idx"
                            :to="item.url"
                            active-class="active-link"
                            ) {{ item.text }}
</template>

<script>
import {mapGetters} from 'vuex'
import LogoComp from './LogoComp'
export default {
  components: {
    LogoComp
  },
  computed: {
    ...mapGetters('menu', {
      list: 'getList'
    })
  }
}
</script>

<style lang="stylus" scoped>
.active-link
  background-color $grey
  color $light
.wrapper-header
  height $height-header
  background-color $light
  shadow()
.container
  display flex
  justify-content space-between
.menu
  display flex
  align-items center
.menu__el:hover
  background-color $blue
  transition 0.3s
  color $light-grey
.menu__el
  transition 0.3s
  padding 0 20px
  color $blue
  font-weight bold
  height $height-header
  display flex
  align-items center
</style>
