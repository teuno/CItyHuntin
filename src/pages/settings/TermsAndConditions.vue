<template>
  <div class="profile">
    <page-title :title="title" :color="'#FFFFFF'"></page-title>

    <section class="section">
      <div class="container is-column-centered">


        <div class="scroll-block child" :v-scroll-stop.h="isScrollStop">
          <p>
            {{termsAndConditions}}
          </p>
        </div>

      </div>
    </section>


  </div>
</template>

<script>
  import VueScrollStop from 'vue-scroll-stop'
  import data from '../../assets/json/t_and_c'

  export default {
    name: 'TermsAndConditions',
    components: {
      VueScrollStop
    },
    data() {
      return {
        title: 'Terms and Conditions',
        termsAndConditions: '',
       //for plugin
        isScrollStop: true
      }
    },
    mounted(){
      this.termsAndConditions = data;

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

  .child-wrap {
    width: 300px;
    height: 300px;
  }

  .scroll-block {
    overflow: scroll;
    background-color: #fafafa;
    padding: 1em;

    &.child {
      width: 80vw;
      height: 50vh;
    }
    &::-webkit-scrollbar-track {
      border: 1px solid #ccc;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
    }
  }
</style>
