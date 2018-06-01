<template>
  <div class="summary-route">

    <page-title :title="title" :color="'#FFFFFF'"></page-title>

    <div class="my-content">
      <div>
        <p class="is-size-5 has-text-weight-bold">Name of the route</p>
        <p class="is-size-7 has-text-weight-light">{{route.name}}</p>
      </div>

      <div>
        <p class="is-size-5 has-text-weight-bold">Kilometers walked</p>
        <p class="is-size-7 has-text-weight-light">{{showDistanceFromMeterToKilometer}}</p>
      </div>

      <div>
        <p class="is-size-5 has-text-weight-bold">Time walked</p>
        <p class="is-size-7 has-text-weight-light">{{showTimeWalkedInHoursAndMinutes}}</p>
      </div>

      <div>
        <p class="is-size-5 has-text-weight-bold">Did you like this route? Then rate us!</p>
        <star-rating
          @rating-selected="setRating"
          v-model="rating"
          v-bind:show-rating="false">
        </star-rating>
      </div>
    </div>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 @click="goToMainMenu" class="title has-text-centered">
            <a class="button is-success is-rounded">Back to main menu</a>
          </h1>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import StarRating from 'vue-star-rating'

  export default {
    name: 'SummaryOfRoute',
    components: {
      StarRating
    },
    data() {
      return {
        title: 'Summary of the route',
//        name: 'Culture & Architecture',
        distance: 250,//meters
        time: 208, //minutes
        rating: 1 //how many stars colored
      }
    },
    methods: {
      setRating: function (rating) {
        this.rating = rating;
        console.log("we have rerated too " + rating)
      },
      goToMainMenu: function(){
        this.$router.push({name: 'main'})
      }
    },
    computed: {
      showDistanceFromMeterToKilometer: function () {
        return (this.distance / 1000).toFixed(1) + " km";
      },
      showTimeWalkedInHoursAndMinutes: function () {
        const hours = Math.floor(this.time / 60);
        const minutes = this.time % 60;
        return hours + ' hours and ' + minutes + ' minutes';
      },
      route: function(){
        return this.$store.state.routes.selectedRoute;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .summary-route {
    min-height: 100vh;
    background-color: $green;
    color: $text_white;
    font-family: 'Francois One', sans-serif;
    font-size: 1.2em;

    .title {
      color: $text_white !important;
    }

    .my-content {
      padding: 2em;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  /*.page-title{*/
  /*font-size: 1.8em;*/
  /*}*/

</style>
