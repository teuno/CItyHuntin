<template>
  <div class="summary-route">
    <page-title :title="title" :color="'#FFFFFF'"></page-title>

    <div class="my-content">
      <div>
        <p class="is-size-5 has-text-weight-bold">Name of the hunt</p>
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
        <p class="is-size-5 has-text-weight-bold">Achievements unlocked</p>
        <ul>
          <li class="is-size-7 has-text-weight-light">Achievement #1</li>
          <li class="is-size-7 has-text-weight-light">Achievement #3</li>
        </ul>
      </div>

      <div>
        <p class="is-size-5 has-text-weight-bold">Did you like this hunt? Then rate us!</p>
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
    name: 'SummaryOfTreasureHunt',
    components: {
      StarRating
    },
    data() {
      return {
        title: 'Summary of the hunt',
        name: 'Culture & Architecture',
        distance: this.$store.state.treasurehunts.selectedHunt.km,//meters
        time: this.$store.state.treasurehunts.selectedHunt.duration, //minutes
        rating: 1 //how many stars colored
      }
    },
    methods: {
      setRating: function (rating) {
        this.rating = rating;
        console.log("we have rerated too " + rating)
      },
      goToMainMenu: function () {
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
        if(hours> 0){
          return hours + ' hours and ' + minutes + ' minutes';
        }else{
          return minutes + ' minutes';
        }
      },
      route: function(){
        return this.$store.state.treasurehunts.selectedHunt;
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
</style>
