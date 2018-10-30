<template lang="pug">
  .main-page
    .container
      .wrapper-search
        search-comp
</template>

<script>
import SearchComp from './SearchComp'
export default {
  components: {
    SearchComp
  }
}
</script>

<style lang="stylus" scoped>
.wrapper-search
  width 100%
.main-page
  background-color $blue
  display flex
  min-height "calc(100vh - %s)" % $height-header
  height 100%
.container
  margin auto
</style>
