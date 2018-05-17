<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-parent">


            <div class="tile is-child box">
              <img src="https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_1280.jpg">
            </div>

            <div class="tile is-child box">
              <h1>{{PoI.name}}</h1>
            </div>



            <div class="tile is-child box">
              <p>{{PoI.description}}</p>
            </div>

            <div @click="backToRoute" class="tile is-child has-text-centered">
              <a class="button is-success is-rounded">Back to treasure hunt</a>
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
        console.log(this.$store.state.treasurehunts.selectedPoI);
        this.$router.push({name: 'treasurehuntmap'})
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
