<template lang="pug">
  .container
    .artist
      p.artist__name {{ artist.name }}
      .artist-content
        .artist-wrap-img
          img.artist__img(
                            v-if="artist.image"
                            :src="artist.image[5]['#text']"
                          )
          .atrtist-tags(v-if="artist.tags")
            a.artist__tag(:href="item.url" v-for="item in artist.tags.tag") {{ item.name}}
        .artist-wrap-bio
          p.title BIOGRAPHY
          p.artist__bio(
                        v-if="artist.bio"
                        ) {{ artist.bio.content | cut(moreBio) }}
            span.read-more(@click="readMore") {{ showMore }}
      .wrap-similar-artist
        p.title SIMILAR ARTISTS
        ul.similar-artists(
                          v-if="artist.similar"
                        )
          li.similar-artist(v-for="item in artist.similar.artist")
            .similar-artist-wrapper-img
              img.similar-artist__img( :src="item.image[3]['#text']")
            span.similar-artist__name {{ item.name }}
            a.similar-artist__link(:href="item.url")
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  filters: {
    cut: function (value, state) {
      return state ? value.slice(0, 500) + '...' : value
    }
  },
  data() {
    return {
      moreBio: true
    }
  },
  created() {
    this.$store.commit('artist/clear')
    let name = this.$route.params.name
    this.$store.commit('artist/name', name)
    let methodInfo = this.$store.getters['artist/getMethodInfo']
    this.$store.dispatch('getData', methodInfo)
      .then(data => {
        this.$store.commit('artist/info', data.data.artist)
      })
      .catch((error) => error)
  },
  computed: {
    ...mapGetters('artist', {
      artist: 'getInfo'
    }),
    showMore: function() {
      return this.moreBio ? ' read more ' : ' hide '
    }
  },
  methods: {
    readMore() {
      this.moreBio = !this.moreBio
    }
  }
}
</script>
 
<style lang="stylus" scoped>
.title
  color $tomato
  margin-bottom 15px
  +sm()
    margin-bottom 25px
.artist
  padding-block()
  &__img
    max-width 100%
  &__name
    color $tomato
    font-size 2rem
    margin-bottom 15px
    +sm()
      margin-bottom 30px
  &__bio
    color $blue
    font-size 1rem
    font-weight normal
    line-height 1.4
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
    padding 15px
    transition 1s
    z-index 1
.artist
  &__tag:last-child:before
    content ''
  &__tag:before
    position absolute
    right 3px
    top 2px
    content '.'
    width 5px
    height 5px
  &__tag:hover
    color $tomato
    transition 0.3s
    &:before
      color $blue
  &__tag
    transition 0.3s
    color $blue
    display inline-block
    padding 5px 10px 0 0
    cursor pointer
    position relative
.atrtist-tags
  margin 10px 0 5px
  margin-bottom 20px
  +size500()
    margin-bottom 5px

.similar-artist
  width 50%
  +xs()
    width 33.3%
  +sm()
    width 25%
  +md()
    width 20%
.similar-artists
  display flex
  flex-wrap wrap
.read-more
  cursor pointer
.artist-wrap-img
  max-width 300px
  +size500()
    margin-top 2px
    margin-right 30px
    float left
.wrap-similar-artist
  clear both
.artist-content
  margin-bottom 30px
  &:after
    content ''
    display table
    clear both
</style>
