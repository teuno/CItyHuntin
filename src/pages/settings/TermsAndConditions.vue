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

  export default {
    name: 'TermsAndConditions',
    components:{
      VueScrollStop
    },
    data() {
      return {
        title: 'Terms and Conditions',
        termsAndConditions: '   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum dignissim venenatis. Proin augue enim, viverra a ligula sed, malesuada varius eros. Sed nec eros ut nulla gravida fringilla at non justo. Cras facilisis libero augue, sit amet sagittis\n' +
        '            leo iaculis in. Donec placerat, nulla blandit suscipit tristique, eros leo mollis mi, et ultrices tellus erat ac dui. Duis imperdiet ex urna, id finibus diam tempus at. Etiam et magna vitae neque eleifend ultrices. In nunc enim, laoreet non\n' +
        '            urna id, vehicula eleifend sem. In hac habitasse platea dictumst. Aenean leo risus, pretium nec rutrum a, luctus at ipsum. Suspendisse elementum eget ex vel lobortis. Quisque feugiat magna sem, non semper arcu vulputate quis. Etiam quis ipsum\n' +
        '            at arcu auctor vulputate. Nulla facilisi. Aliquam velit mi, eleifend a urna non, dapibus viverra mi. Etiam sit amet facilisis ipsum.\n',
        //for plugin
        isScrollStop: true
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

    &::-webkit-scrollbar-thumb{
      background-color: #aaa;
    }
  }
</style>
