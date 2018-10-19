<template lang="pug">
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
  },
  mounted() {
    
  }
}
</script>

<style scoped lang="stylus">
.container
  padding-top 50px
.artist:hover
  transition 0.2s
  shadow-strong()
.artist
  transition 0.2s
  color $light
  margin 10px
  padding 0 9px
  padding-left 39px
  display inline-block
  background-color $blue
  font-weight bold
  position relative
  border-radius 30px
  line-height 34px
  img
    position absolute
    top 0
    left -1px
    border-radius 50%
</style>
