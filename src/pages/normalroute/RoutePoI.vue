<template>
  <div class="">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-parent">

              <div class="tile is-child box">
                <img :src="PoI.image_url">
              </div>

              <div class="tile is-child box">
                <h1>{{PoI.name}}</h1>
              </div>


              <div class="tile is-child box">
                <p>{{PoI.description}}</p>
              </div>

              <div @click="backToRoute" class="tile is-child has-text-centered">
                <a class="button is-success is-rounded">Back to route</a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'RoutePoI',
    components: {},
    methods: {
      backToRoute() {
        console.log(this.$store.state.routes.selectedPoI);
        this.$router.go(-1);
      }
    },
    computed: {
      PoI() {
        console.log(this.$store.state.routes.selectedPoI);
        return this.$store.state.routes.selectedPoI;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";


</style>
