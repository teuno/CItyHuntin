<template>
  <div class="settings">

    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            settings
          </h1>
        </div>
      </div>
    </section>


    <div class="settings-menu">
      <a v-on:click="profile" class="button is-large">
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

      <a v-on:click="termsAndConditions" class="button is-large">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: $navy_blue;

    h1 {
      flex: 1;
      font-family: 'Francois One', sans-serif;
      font-size: 2.5em;
      color: $text_white;
    }

    .settings-menu {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        margin: 0.4em;
        width: 70vw;
      }
    }
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
</style>
