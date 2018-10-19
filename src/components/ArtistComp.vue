<template lang="pug">
  .container
    .artist
      p.artist__name {{ artist.name }}
      img(
        v-if="artist.image"
        :src="artist.image[5]['#text']")
      p БИОГРАФИЯ
      p ПОХОЖИЕ ИСПОЛНИТЕЛИ
      //- p.artist__bio(
      //-   v-if="artist.bio"
      //- ) {{ artist.bio.content }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      url: ''
    }
  },
  created() {
    this.$store.commit('artist/clear')
    let name = this.$route.params.name
    this.$store.commit('artist/name', name)
    let url = this.$store.getters['artist/getType']

    this.$store.dispatch('getData', url)    
      .then(data => {
        this.$store.commit('artist/artist', data.data.artist)
      })
      .catch((error) => error)
  },
  computed: {
    ...mapGetters('artist', {
      artist: 'getArtist'
    })
  }
}
</script>
 
<style lang="stylus" scoped>
.artist
  margin-top 30px
  padding 30px
  border-radius 15px
  +md()
    margin-top 60px
  &__name
    color $tomato
    font-weight bold
    font-size 2rem
    margin-bottom 30px
  &__bio
    color $light
    font-size 1.1rem

</style>
