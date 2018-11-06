<template lang="pug">
.wrapper-authorization
  .container
    form(:class="{spin : spin}"
        ref="form"
        )
      p.error-title {{ error }}
      input(type="text" v-model="email" placeholder="email")
      input(type="password" v-model="password" placeholder="password")
      button(@click.prevent="signIn") {{ stateAuthorization[0] }}
      .wrapper-registration-title
        p.registration-title(
                            @click="changeTypeAuthorization"
                            ) {{ stateAuthorization[1] }}

</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      spin: false
    }
  },
  computed: {
    ...mapGetters('user', {
      stateAuthorization: 'getStateAuthorization',
      activeStateAuthorization: 'getActiveStateAuthorization',
      error: 'getError'
    })
  },
  methods: {
    changeTypeAuthorization() {
      this.email = ''
      this.password = ''
      this.$store.commit('user/changeStateAuthorization')
      this.spin = true
      this.$refs.form.addEventListener('animationend', () => {
        this.spin = false
      })  
    },
    signIn() {
      this.$store.dispatch('user/authorization', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    text-align center
    margin auto
  .wrapper-authorization
    height 100%
    min-height "calc(100vh - %s)" % $height-header
    background-color $blue
    display flex
  form
    position relative
    box-shadow 1px 16px 35px 12px #0b172f
    transition 1s
    background-color $blue
    width 100%
    display inline-block
    padding 50px
    border 1px solid $light-blue
    margin 20px 0
    padding-top 75px
    +xs()
      max-width 315px
    p
      color $light-grey
      font-weight normal
  .error-title
    position absolute
    color $tomato
    top 16px
    font-size .9rem
    text-align left
    padding 0 50px
    left 0
  input:focus
    background-color #26385c
    padding 10px

  input
    border-bottom 1px solid $light-blue
    transition 0.3s
    width 100%
    padding 10px 0
    margin-bottom 15px
    background-color $blue
    color $light-grey
  placeholder()
  button
    background-color transparent
    transition 0.3s
    color $light-grey
    padding 10px
    width 100%
    border 1px solid $light-blue
    margin-bottom 20px
    margin-top 30px
  button:hover
    border 1px solid #26385c
    background-color #26385c
    transition 0.3s
  .wrapper-registration-title
    text-align center
  .registration-title
    position relative
    font-size .8rem
    color $grey
    cursor pointer
    display inline-block
    margin-top 35px
  .registration-title:after
    content ''
    position absolute
    width 100%
    height 1px
    left 0
    bottom -5px
    background-color $light-grey
    transform scale(0)
    transition 0.3s
  .registration-title:hover
    +md()
      color $light-grey
      &:after
        transition 0.3s
        transform scale(1)
  @keyframes spin 
    30%
      transform rotateY(25deg)
    100%
      transform rotateY(0deg)
  .spin
    animation spin .4s ease-out
</style>
