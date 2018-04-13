<template>
  <div class="summary-route">
    <h1 class="page-title">Summary of the route</h1>

    <div>
      <p class="is-size-5 has-text-weight-bold">Name of the route</p>
      <p class="is-size-7 has-text-weight-light">{{name}}</p>
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
        @rating-selected ="setRating"
        v-model="rating"
        v-bind:show-rating="false">
      </star-rating>
    </div>


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
        name: 'Culture & Architecture',
        distance: 250,//meters
        time: 208, //minutes
        rating: 1 //how many stars colored
      }
    },
    methods: {
      setRating: function(rating){
        this.rating= rating;
        console.log("we have rerated too " + rating)
      }
    },
    computed:{
      showDistanceFromMeterToKilometer: function () {
        return (this.distance / 1000).toFixed(1) + " km";
      },
      showTimeWalkedInHoursAndMinutes:function(){
        const hours = Math.floor(this.time / 60);
        const minutes = this.time % 60;
        return hours + ' hours and '+ minutes + ' minutes';
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";
  .summary-route{
    padding: 2em;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    background-color: $green;
    color: $text_white;
    font-family: 'Francois One', sans-serif;
    font-size: 1.2em;
  }

  .page-title{
    font-size: 1.8em;
  }

</style>
