<template lang="pug">
  div#app
    header-comp
    router-view
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'app',
  components: {
    MainComp,
    HeaderComp
  }
}
</script>

<style lang="stylus">

</style>
