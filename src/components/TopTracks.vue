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
                        :src="item.image[1]['#text']"
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
.section-top-tracks
  background-color $blue
.wrapper-top-tracks
  display flex
  flex-wrap wrap
  justify-content space-between
.track:hover .track__artist-name,
.track:hover .track__name
  transition 0.3s
  color $tomato
.track
  transition 0.3s
  position relative
  display flex
  align-items center
  padding 10px 0
  border-bottom 1px solid $light-blue
  width 100%
  +md()
    width 48%
  &__img
    margin-right 15px
    border-radius 50%
    border 3px solid $grey
  &__number
    flex none
    margin-right 15px
    width 25px
    color $tomato
  &__name
    color $grey
    margin-left 10px
  &__artist-name
    color $grey
    white-space nowrap
</style>
