<template lang="pug">
  .missing-page
    .wrapper
      p Page not found
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.missing-page
  background-color $blue
.wrapper
  background url("../assets/vinul2.png")
  background-position center
  background-repeat no-repeat
  background-size cover
  height "calc(100vh - %s)" % $height-header
  display flex
  position relative
  +xs()
    background-size contain
    background-position -30% 50%

p
  z-index 1
  font-size 1.5rem
  margin auto
  color $light
  text-align center
</style>
