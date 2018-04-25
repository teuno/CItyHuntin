<template>
  <div class="profile">
    <page-title :title="title" :color="'#FFFFFF'"></page-title>

    <div class="is-column-centered">
      <a v-on:click="" class="button is-large">
  <span class="icon is-medium">
  <i class="fas fa-language"></i>
  </span>
        <span>Dutch</span><!-- app is english, so so should the dutch name-->
      </a>

      <a v-on:click="" class="button is-large">
  <span class="icon is-medium">
  <i class="fas fa-language"></i>
  </span>
        <span>English</span>
      </a>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Language',

    data() {
      return {
        title: 'Language'
      }
    },
    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .profile {
    min-height: 100vh;
    width: 100vw;
    background-color: $navy_blue;
  }

  a {
    margin: 0.4em;
    width: 70vw;
  }
</style>
