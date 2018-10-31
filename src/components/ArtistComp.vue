<template lang="pug">
  .container
    .artist
      p.artist__name {{ artist.name }}
      img.artist__img(
          v-if="artist.image"
          :src="artist.image[5]['#text']"
          )
      .atrtist-tags(v-if="artist.tags")
        a.artist__tag(href="" v-for="item in artist.tags.tag") {{ item.name }}
      p.tomato БИОГРАФИЯ
      //- p.artist__bio(
                    v-if="artist.bio"
                    ) {{ artist.bio.content }}
      p.tomato ПОХОЖИЕ ИСПОЛНИТЕЛИ
      ul.similar-artists(
                        v-if="artist.similar"
                      )
        li.similar-artist(v-for="item in artist.similar.artist")
          .similar-artist-wrapper-img
            img.similar-artist__img( :src="item.image[2]['#text']")
          span.similar-artist__name {{ item.name }}
          a.similar-artist__link(href="")
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.commit('artist/clear')
    let name = this.$route.params.name
    this.$store.commit('artist/name', name)
    let methodInfo = this.$store.getters['artist/getMethodInfo']
    this.$store.dispatch('getData', methodInfo)
      .then(data => {
        console.log('data', data)
        this.$store.commit('artist/info', data.data.artist)
      })
      .catch((error) => error)
  },
  computed: {
    ...mapGetters('artist', {
      artist: 'getInfo'
    })
  }
}
</script>
 
<style lang="stylus" scoped>
.tomato
  color $tomato
.artist
  padding-block()
  &__img
    max-width 100%
  &__name
    color $tomato
    font-size 2rem
    margin-bottom 30px
  &__bio
    color $blue
    font-size 1.1rem
.similar-artists
  font-size 0
.similar-artist-wrapper-img:before
  position absolute
  content ''
  width 100%
  height 100%
  top 0
  left 0
  background-color rgba(0, 0, 0, 0.22)
.similar-artist:hover
  background-color red
.similar-artist:hover .similar-artist-wrapper-img:before
  background-color transparent
.similar-artist:hover .similar-artist__name:before
  z-index -1
  position absolute
  content ''
  background-color rgba(0, 0, 0, 0.52)
  width 100%
  height 100%
  transition 0.3s
  left 0
  top 0
.similar-artist-wrapper-img
  position relative
.similar-artist
  display inline-block
  position relative
  font-size 0
  &__img
    width 100%
  &__link
    z-index 3
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  &__name
    color white
    font-size 1rem
    position absolute
    bottom 0
    left 0
    width 100%
    padding 10px
    transition 1s
    z-index 1
.artist__tag:last-child:before
  content ''
.artist__tag:before
  position absolute
  right -2px
  top 2px
  content '.'
  width 5px
  height 5px
.artist__tag:hover
  color $tomato
  transition 0.3s
  &:before
    color $blue
.artist__tag
  transition 0.3s
  color $blue
  display inline-block
  padding 5px
  cursor pointer
  position relative
</style>
