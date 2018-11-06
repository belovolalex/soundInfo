<template lang="pug">
.wrapper-authorization
  .container
    form
      p.error-title(v-if="!registration") {{ errorSignIn }}
      p.error-title(v-if="registration") {{ errorSignUp }}
      input(type="text" v-model="email" placeholder="email")
      input(type="text" v-model="password" placeholder="password")
      button(@click.prevent="signIn" v-if="!registration") войти
      button(@click.prevent="signUp" v-if="registration") зарегистрироваться
      .wrapper-registration-title
        p.registration-title(
                            v-if="!registration"
                            @click="checkIn"
                            ) зарегистрироваться
        p.registration-title(
                            v-if="registration"
                            @click="checkIn"
                            ) войти
    //- form(:class="[registration ? 'rotate' : '']")
    //-   p.error-title(v-if="!registration") {{ errorSignIn }}
    //-   input( type="text" v-model="signInEmail" v-if="!registration" placeholder="email")
    //-   input( type="password" v-model="signInPassword" v-if="!registration" placeholder="password")
    //-   button(@click.prevent="signIn" v-if="!registration") войти
      
    //-   p.error-title(v-if="setName") specify name
    //-   p.error-title(v-if="registration") {{ errorSignUp }}
    //-   input(type="text" v-model="name" placeholder="name" v-if="registration")
    //-   input( type="text" v-model="signUpEmail" v-if="registration" placeholder="email")
    //-   input( type="password" v-model="signUpPassword" v-if="registration" placeholder="password")
    //-   button(@click.prevent="signUp" v-if="registration") зарегистрироваться
    //-   .wrapper-registration-title
    //-     p.registration-title(
    //-                         v-if="!registration"
    //-                         @click="checkIn"
    //-                         ) зарегистрироваться
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      // setName: false,
      // name: '',
      // email: '',
      // password: '',
      // signInEmail: '',
      // signUpEmail: '',
      // signUpPassword: '',
      // signInPassword: '',
      // registration: false
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('user', {
      errorSignUp: 'getErrorSignUp',
      errorSignIn: 'getErrorSignIn',
      getIsAuth: 'getIsAuth'
    })
  },
  methods:{
    signUp() {
      if(this.signUpPassword && this.signUpEmail && !this.name) {
        this.setName = true
        this.errorSignUp = ''
      } else {
        this.$store.dispatch('user/signUp', {
          email: this.signUpEmail,
          password: this.signUpPassword,
          name: this.name
        })
      }
    },
    signIn() {
      this.$store.dispatch('user/signIn', {
        email: this.signInEmail,
        password: this.signInPassword,
      })
    },
    logout() {
      this.$store.dispatch('user/signOut')
    },
    checkIn() {
      this.registration = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    text-align center
    margin auto
  .rotate
    transition 2s
    transform rotateY(360deg)
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
    +xs()
      max-width 315px
    p
      color $light-grey
      font-weight normal
  .error-title
    position absolute
    color $tomato
    top 10px
    font-size .9rem
    text-align left
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


</style>
