<template>
  <div class="settings">
    <h1>settings</h1>

    <div class="settings-menu">
      <a class="button is-large">
  <span class="icon is-medium">
  <i class="fas fa-user"></i>
  </span>
        <span>Profile</span>
      </a>

      <a class="button is-large">
  <span class="icon is-medium">
  <i class="fas fa-volume-up"></i>
  </span>
        <span>Language</span>
      </a>

      <a class="button is-large">
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


    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

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
</style>
