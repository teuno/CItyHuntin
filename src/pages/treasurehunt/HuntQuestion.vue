<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">

            <div class="tile is-child box">
              <img :src="PoI.image_url">
            </div>

            <div class="tile is-child box">
              <h1>{{PoI.challengeTitle}}</h1>
            </div>


            <div class="tile is-child box">
              <p>{{PoI.challengeQuestion}}</p>
            </div>

            <div @click="backToRoute" class="tile is-child has-text-centered">
              <a class="button is-success is-rounded">Challenge complete</a> <!--what to do with errors-->
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'HuntPoI',
    components: {},
    methods: {
      backToRoute() {
        this.$store.commit('completePoIHunt');
        this.$router.go(-2);
      }
    },
    computed: {
      PoI() {
        return this.$store.state.treasurehunts.selectedPoI;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";


</style>
