<template>
  <div class="summary-route">
    <h1 class="page-title">Summary of the route</h1>

    <div>
      <p>Name of the route</p>
      <p>{{name}}</p>
    </div>

    <div>
      <p>Kilometers walked</p>
      <p>{{showDistanceFromMeterToKilometer}}</p>
    </div>

    <div>
      <p>Time walked</p>
      <p>{{showTimeWalkedInHoursAndMinutes}}</p>
    </div>

    <div>
      <p>Did you like this route? Then rate us!</p>
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
  @import "../assets/sass/main.scss";
  .summary-route{
    margin: 0;
    width: 100vw;
    min-height: 100vh;

    background-color: $green;
    color: $text_white;
    font-family: $coolvetica_1;
    font-size: 1.5em;
  }

</style>
