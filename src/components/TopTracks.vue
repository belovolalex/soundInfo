<template lang="pug">
  section.section-top-tracks
    .container
      .wrapper-top-tracks(v-if="tracksLength")
        a.track(
                :href="item.url"
                v-for="(item, idx) in tracks"
                )
          span.track__number {{ idx+1 }}
          img.track__img(
                        :src="item.image[1]['#text']"
                        )
          .track-wrap-name
            p.track__artist-name {{item.artist.name }} 
            P.track__name {{ item.name }}
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('topTracks', {
      type: 'getType',
      tracks: 'getTracks'
    }),
    tracksLength() {
      return this.tracks.length
    }
  },
  created() {
    this.$store.dispatch('getData', this.type)
    .then(data => {
      this.$store.commit('topTracks/tracks', data.data.tracks.track)
    })
    .catch((error) => error)
  }
}
</script>

<style lang="stylus">
.section-top-tracks
  background-color $light
  padding-block()
  min-height "calc(100vh - %s)" % $height-header
  height 100%
.wrapper-top-tracks
  display flex
  flex-wrap wrap
  justify-content space-between
  position relative
  &:after
    +sm()
      flex-basis: auto
      content ""
      flex-basis: 48%
    +lg()
      flex-basis: 31.7%
.track:hover
  box-shadow none
  transition 0.3s
  background-color $blue
.track:hover .track__artist-name,
.track:hover .track__name,
.track:hover .track__number
  transition 0.3s
  color $tomato
.track
  transition 0.3s
  position relative
  display flex
  align-items center
  padding 30px 20px
  width 100%
  background-color $light-grey
  margin 15px 0
  shadow-light()
  +sm()
    width 48%
  +lg()
    width 31.7%
  &__img
    margin-right 8px
    border-radius 50%
    border 2px solid $blue
    padding 2px
    +xs()
      margin-right 15px
  &__number
    flex none
    width 25px
    color $blue
    transition .3s
    +xs()
      margin-right 5px
    +lg()
      margin-right 10px
  &__name
    color $blue
    transition .3s
    font-size 0.9rem
    font-style oblique
  &__artist-name
    transition .3s
    color $blue
    white-space nowrap
</style>
