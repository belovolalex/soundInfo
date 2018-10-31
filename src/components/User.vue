<template lang="pug">
  section.user-page
    .container
      h1 hello {{name}}
      p.logout(@click="logout") выход
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.params.name
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/signOut')
    }
  }
}
</script>

<style lang="stylus">
.user-page
  height "calc(100vh - %s)" % $height-header
  min-height 100%
  padding-block()
.logout:hover
  border-bottom 1px solid $tomato
  transition 0.3s

.logout
  transition 0.3s
  display inline-block
  cursor pointer
  border-bottom 1px solid $blue
  margin 10px
</style>
