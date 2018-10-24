<template lang="pug">
  router-link(to="/").logo
    | Sound
    span.logo-info Info
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.logo:before
  top 49%
  transform translateY(-50%)
  left 0
  width 20px
  height 20px
  position absolute
  background-size cover
  content ''
  background-image url("../assets/img.png")
  opacity .9
.logo
  font-size 20px
  position relative
  display inline-block
  color $blue
  height 60px
  line-height 60px
  padding-left 24px
  cursor pointer
.logo-info
  color $tomato
</style>
