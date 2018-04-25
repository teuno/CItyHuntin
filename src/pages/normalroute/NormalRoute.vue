<template>
  <div class="normalRoute columns is-multiline is-marginless">

    <page-title :title="title"></page-title>


    <carousel-3d ref="carousel" :controls-visible="false" :clickable="false" :width="300" :height="320">
      <slide v-for="(route, i) in routes" :key="i" :index="i">
        <figure @click="printDing(route.name)">
          <div class="container">
            <img :src="route.image">
            <div class="center">{{route.name}}</div>
          </div>
        </figure>
      </slide>
    </carousel-3d>


    <div class="controls">
      <a v-on:click="left" class="button">
        <i class="fa fa-caret-left"></i>
      </a>
      <button v-on:click="goToRouteSummary" class="button is-rounded">Choose route</button>
      <a v-on:click="right" class="button">
        <i class="fa fa-caret-right"></i>
      </a>
    </div>

  </div>
</template>

<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d';

  export default {
    name: 'NormalRoute',
    components: {
      Carousel3d,
      Slide,
    },
    data() {
      return {
        title: ' Walk the route',
        routes: [
          {image: "static/img/route_1_religious.jpeg", name: 'level 1'},
          {image: "static/img/route_2_culture.jpeg", name: 'level 2'},
          {image: "static/img/route_3_outside_of_city_center.jpeg", name: 'level 3'},
          {image: "static/img/hunt_1.jpeg", name: 'level 4'},
          {image: "static/img/hunt_2.jpeg", name: 'level 5'},
          {image: "static/img/hunt_3.jpeg", name: 'level 6'}
        ]
      }
    },
    methods: {
      ding: function () {
        console.log(this.$refs.carousel.currentIndex);
      },
      printDing: function (name) {
        console.log(name);
      },
      left: function () {
        this.$refs.carousel.goPrev();
      },
      right: function () {
        this.$refs.carousel.goNext();
      },
      goToRouteSummary: function () {
        this.$router.push({name: 'morerouteinfo'})
      }
    },
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .normalRoute {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $green;
    color: $text_white;

    h1 {
      font-family: 'Francois One', sans-serif;
      font-size: 2.5em;
      color: $text_white;
    }

    .controls {
      flex: 1;

      button {
        color: $text_deep_gray;
        font-weight: bold;
      }
    }
  }

  img {
    border-radius: 50%;
    border: 0.2em solid white;
  }

  .center {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3em;
  }

  .carousel-3d-slide {
    flex: 1;
    border-color: $green;
    background-color: $green;

    .center {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3em;
    }
  }
</style>
