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
              <h1>{{PoI.name}}</h1>
            </div>



            <div class="tile is-child box">
              <p>{{PoI.description}}</p>
            </div>


            <div @click="toQuestion" class="tile is-child has-text-centered">
              <a class="button is-success is-rounded">To question</a>
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
        this.$router.go(-1);
      },
      toQuestion(){
        this.$router.push({name: 'huntquestion'})
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
