<template lang="pug">
  .wrapper-top-artists
    .container
      router-link.artist(:to="`/top-artists/${item.name.toLowerCase()}`"
                        v-for="(item, idx) in artists"
                        :key="idx"
                        ) {{ item.name }}
        img(:src="item.image[0]['#text']")
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('topArtist', {
      type: 'getType',
      artists: 'getArtists'
    })
  },
  created() {
    this.$store.dispatch('getData', this.type)
      .then(data => {
        this.$store.commit('topArtist/artists', data.data.artists.artist)
      })
      .catch((error) => error)
  }
}
</script>

<style scoped lang="stylus">
.wrapper-top-artists
  // gradient()
  min-height "calc(100vh - %s)" % $height-header
  height 100%
.container
  padding-top 50px
.artist:hover
  transition 0.2s
  shadow-strong()
  background-color $light-grey
.artist
  transition 0.2s
  color $blue
  margin 10px
  padding 0 9px
  padding-left 39px
  display inline-block
  background-color $light
  position relative
  border-radius 30px
  line-height 34px
  img
    position absolute
    top 0
    left -1px
    border-radius 50%
</style>
