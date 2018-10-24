<template lang="pug">
  section.section-top-tracks
    .container
      //- .wrapper-top-tracks
      .wrapper-top-tracks(v-if="tracksLength")
        a.track(
                :href="item.url"
                v-for="(item, idx) in tracks"
                )
          span.track__number {{ idx+1 }}
          img.track__img(
                        :src="item.image[0]['#text']"
                        )
          span.track__artist-name {{item.artist.name }} - 
          span.track__name {{ item.name }}
      //- .wrong(v-else-if="!tracksLength")
      .wrong(v-else)
        p на данный момент нет данных
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
.wrapper-top-tracks
  display flex
  flex-wrap wrap
  justify-content space-between
.track
  position relative
  display flex
  align-items center
  padding 20px 0
  border-bottom 1px solid grey
  width 100%
  +md()
    width 48%
  &__img
    margin-right 15px
  &__number
    flex none
    margin-right 15px
    width 25px
  &__name
    color #354c79
    margin-left 10px
  &__artist-name
    white-space nowrap
  &__artist-name:after
    display block
    content ''
    border-bottom solid 2px $blue
    transform scaleX(0)
    transition .3s
  &:hover .track__artist-name:after
    +md()
      transform scaleX(1)
      transition .3s

</style>
