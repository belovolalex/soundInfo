<template lang="pug">
  div#app(:class="[fixed ? 'fixed': '']")
    header-comp
    router-view
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    MainComp,
    HeaderComp
  },
  computed: {
    ...mapGetters('menu', {
      fixed: 'getShow'
    })
  }
}
</script>

<style lang="stylus">

</style>
