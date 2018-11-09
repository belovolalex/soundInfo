<template lang="pug">
  section.top-artists
    .container
      router-link.artist(:to="`/top-artists/${item.name.toLowerCase()}`"
                        v-for="(item, idx) in artists"
                        :key="idx"
                        )
        .artist-wrapper-img
          img.artist__img(:src="item.image[2]['#text']")
          span.artist__name {{ item.name }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      name: '',
    }
  },
  computed: {
    ...mapGetters('topArtist', {
      type: 'getType',
      artists: 'getArtists',
    }),
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

<style lang="stylus" scoped>
.container:after
  content ""
  flex: auto
.container
  position relative
  display flex
  flex-wrap wrap
.top-artists
  min-height "calc(100vh - %s)" % $height-header
  height 100%
  padding-block()
.artist-wrapper-img
  position relative
  display inline-block
  cursor pointer
.artist-wrapper-img:hover .artist__img
  transition .3s
  box-shadow none
.artist-wrapper-img:hover .artist__name
  background-color rgba(0, 0, 0, 0.52)
  transition .3s
  color $light
.artist
  cursor default
  padding 10px 5px
  text-align center
  position relative
  transition 0.2s
  color $blue
  margin 10px 0
  display inline-block
  background-color transparent
  position relative
  width 50%
  +xs()
    width 33.3%
  +sm()
    width 25%
  +lg()
    width 20%
  &__name
    transition 0.3s
    width 100%
    left 0
    color $tomato
    background-color rgba(238, 240, 242, 0.86)
    padding 10px 0
    text-align center
    position absolute
    bottom 3px
    +sm()
      padding 15px 0
      bottom 4px
  .artist__img
    width 100%
    shadow-light()
.input-search
  top 15px
  position absolute
  right 78px
  placeholder()
  border-bottom 1px solid $blue
  background-color transparent
</style>
