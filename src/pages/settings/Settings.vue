<template>
  <div class="settings">

    <page-title :title="title" :color="'#FFFFFF'"></page-title>


    <div class="is-column-centered">

      <a v-on:click="profile" class="button is-large  ">
  <span class="icon is-medium">
  <i class="fas fa-user"></i>
  </span>
        <span>Profile</span>
      </a>

      <a v-on:click="language" class="button is-large">
  <span class="icon is-medium">
  <i class="fas fa-volume-up"></i>
  </span>
        <span>Language</span>
      </a>

      <a @click="termsAndConditions" class="button is-large">
    <span class="icon is-medium">
      <i class="fas fa-search"></i>
    </span>
        <span>Terms and conditions</span>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',

    data() {
      return {
        title: 'settings'
      }
    },
    methods: {
      profile: function () {
        this.$router.push({name: 'profile'})
      },
      language: function () {
        this.$router.push({name: 'language'})
      },
      termsAndConditions: function () {
        this.$router.push({name: 'termsAndConditions'})
      },
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .settings {
    min-height: 100vh;
    width: 100vw;
    background-color: $navy_blue;

    h1 {
      flex: 1;
      font-family: $francois_one;
      font-size: 2.5em;
      color: $text_white;
    }

    a {
      margin: 0.4em;
      width: 70vw;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .is-large{
    justify-content: flex-start;
  }

</style>
