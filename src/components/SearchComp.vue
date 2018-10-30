<template lang="pug">
  div
    form(@submit.prevent="onSubmit")
      input.input-search(
                        type="text"
                        placeholder="поиск исполнителей"
                        v-model="name"
                        @focus="changeBlur"
                        :class="[ isShadow ? 'shadow-light' : 'shadow-dark' ]"
                        @blur="isShadow = !isShadow"
                        )
      button искать
    p.not-found(v-if="error") по вашемо запросу ничего не найдено попробуйте еще раз
</template>

<script>
export default {
  data() {
    return {
      name: '',
      url: '',
      error: false,
      isShadow: false
    }
  },
  methods: {
    onSubmit() {
      this.$store.commit('search/name', this.name)
      let methodSearch = this.$store.getters['search/getSearchMethod']
      this.$store.dispatch('getData', methodSearch)
        .then(data => window.location.href = data.data.results.artistmatches.artist[0].url)
        // .then(data => window.open(data.data.results.artistmatches.artist[0].url, '_blank'))
        .catch((error) => {
          this.error = true
        })
    },
    changeBlur() {
      this.isShadow = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.not-found
  margin-top 30px
  color white
  font-size 2rem
form
  display flex
  justify-content space-between
.input-search:focus
  background-color #26385c
  transition 0.3s
  padding-left 20px
  padding-right 20px
.input-search
  font-weight normal
  transition 0.3s
  width 70%
  padding 18px 10px
  padding-left 0px
  color $light-grey
  background-color $blue
  font-size 1rem
  border-bottom 1px solid $light-blue
  +sm()
    width 80%
button:hover:after
  +md()
    height 100%
    transition 0.3s
    color $light-grey
button
  z-index 1
  position relative
  font-weight normal
  color $light-grey
  font-size 1rem
  background-color transparent
  border 1px solid $light-blue
  width 26%
  +sm()
    width 15%

button:after
  content ''
  position absolute
  bottom 0
  left 0
  width 100%
  height 0
  background #26385c
  transition 0.3s
  z-index -1
placeholder()

</style>
