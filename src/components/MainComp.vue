<template lang="pug">
  div.main-page
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
  padding-top 10%
  margin-bottom 60px
.main-page
  gradient()
  min-height 100vh
  height 100%
</style>
