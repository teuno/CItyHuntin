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
      <ratings></ratings>
    </div>


  </div>
</template>

<script>
  import Ratings from '../components/RatingsComponent'

  export default {
    name: 'SummaryOfRoute',
    components: {
      Ratings
    },
    data() {
      return {
        name: 'Culture & Architecture',
        distance: 250,//meters
        time: 208, //minutes
        rating: 3 //how many stars colored
      }
    },

    methods: {

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

  div {
    margin: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-self: center;

    background-color: $green;
    color: $text_white;
    font-family: $coolvetica_1;
    font-size: 1.5em;

    .page-title{

    }
  }

</style>
