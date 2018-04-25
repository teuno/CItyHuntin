<template>
  <div class="profile">
    <page-title :title="title" :color="'#FFFFFF'"></page-title>




  </div>
</template>

<script>
  export default {
    name: 'Settings',

    data() {
      return {
        title: 'Terms and Conditions'
      }
    },
    methods: {

    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .profile {
    min-height: 100vh;
    width: 100vw;
    background-color: $navy_blue;
  }

</style>
