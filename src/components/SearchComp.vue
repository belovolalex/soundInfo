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
.shadow-dark
  shadow-strong()
.shadow-light
  shadow-white()
  
.not-found
  margin-top 30px
  color white
  font-size 2rem
form
  display flex
  justify-content space-between
.input-search
  width 80%
  border-radius 30px
  padding 18px 10px
  padding-left 30px
  color $blue
  background-color $light
  font-size 1rem
button:hover
  shadow-white()
  background-color $blue
  transition 0.3s
  border 2px solid $blue
  color $light-grey
button
  color $light
  font-size 1rem
  width 15%
  transition 0.3s
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
