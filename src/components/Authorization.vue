<template lang="pug">
.wrapper-authorization
  .container
    p Регистрация
    form
      //- label(for="name") name: 
      //-   input(id="name" type="text" v-model="name")
      label(for="email") e-mail: 
        input(id="email" type="text" v-model="email")
      label(for="password") password: 
        input(id="password" type="text" v-model="password")
      button(@click.prevent="signUp") зарегистрироваться
      p {{ errorSignUp }}
    p Войти
    form
      label(for="signInemail") e-mail: 
        input(id="signInemail" type="text" v-model="signInEmail")
      label(for="signInpassword") password: 
        input(id="signInpassword" type="text" v-model="signInPassword")
      button(@click.prevent="signIn") войти
      p {{ errorSignIn }}
    p(@click="logout") выход
    p(v-if="getIsAuth") here
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      signInEmail: '',
      signInPassword: ''
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
      this.$store.dispatch('user/signUp', {
        email: this.email,
        password: this.password
      })
    },
    signIn() {
      this.$store.dispatch('user/signIn', {
        email: this.signInEmail,
        password: this.signInPassword
      })
    },
    logout() {
      this.$store.dispatch('user/signOut')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper-authorization
    padding 30px
  form
    max-width 315px
    margin 20px 0
    display inline-block
    padding 20px
    border 1px solid $light-grey
  label
    width 270px
    display flex
    justify-content space-between
    margin 10px 0
  button:hover
    color $light
    background-color $blue
    transition 0.3s
  input
    padding 0 5px
  button
    transition 0.3s
    border 1px solid $light-grey
    background-color $light
    color $blue
    padding 8px
    width 100%
</style>
