<template lang="pug">
  form(@submit.prevent="onSubmit")
    input.input-search(type="text" placeholder="поиск исполнителей")
    button искать
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log('sss')
    }
  }
}
</script>

<style lang="stylus" scoped>
form
  display flex
  justify-content space-between
.input-search
  width 80%
  border-radius 30px
  padding 18px 10px
  padding-left 30px
  font-weight bold
  color $blue
  background-color $light
  font-size 1rem
  shadow-strong()
button:hover
  background-color $blue
  transition 0.2s
  border 2px solid $blue
  color $light-grey
button
  font-weight bold
  color $light
  font-size 1rem
  width 15%
  transition 0.2s
  border-radius 30px
  background-repeat no-repeat
  background-position center center
  background-color transparent
  border 2px solid $light
  // background-color $blue
  // background-image: linear-gradient(to left top, #f85a53, #ce4372, #93407e, #533d72, #203152)
  // background-size 30px
  // gradient()
  // +xs()
    // background-size 40px
</style>
