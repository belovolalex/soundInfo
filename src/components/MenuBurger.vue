<template lang="pug">
  .wrapper-hamburger(@click="showMenu")
    .hamburger(:class="[show ? 'show' : '']")
      span
      span
      span
      span
      span
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    show() {
      return this.$store.getters['menu/getShow']
    } 
  },
  methods: {
    showMenu() {
      this.$store.commit('menu/changeShow')
    }
  }
}
</script>

<style scoped>
  .wrapper-hamburger {
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 17px;
    width: 20px;
    right: 0;
    position: relative;
  }
  .hamburger span {
    transform-origin: left;
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: #0d1b38;
    transition: all 0.5s ease;
  }
  .hamburger span:nth-of-type(1), .hamburger span:nth-of-type(5) {
    opacity: 0;
  }
  .hamburger span:nth-of-type(2) {
    position: absolute;
    top: 0;
  }
  .hamburger span:nth-of-type(3) {
    transition-delay: 0.1s;
  }
  .hamburger span:nth-of-type(4) {
    transition-delay: 0.2s;
    position: absolute;
    bottom: 0;
  }
  .show span {
    width: 0;
  }
  .show span:nth-of-type(1) {
    width: 100%;
    animation: hamburgerAnimTop 0.8s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  .show span:nth-of-type(5) {
    width: 100%;
    animation: hamburgerAnimBottom 0.8s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  @keyframes hamburgerAnimTop {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(45deg);
      opacity: 1;
    }
  }
  @keyframes hamburgerAnimBottom {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
@media(min-width: 768px) {
  .wrapper-hamburger {
    right: 15px;
  } 
}
@media(min-width: 992px) {
  .wrapper-hamburger {
    display: none;
  } 
}
</style>
