<template>
  <div class="normalRoute columns is-multiline is-marginless">

    <page-title :title="title"></page-title>

    <carousel-3d ref="carousel" :controls-visible="false" :clickable="false" :width="windowWidth"
                 :height="windowHeight">
      <slide v-for="(route, i) in routes" :key="i" :index="i">
        <figure>
          <div class="container" @click="goToMoreRouteInfo">
            <img :src="route.image">
            <div class="center">{{route.name}}</div>
          </div>
        </figure>
      </slide>
    </carousel-3d>


    <div class="controls">
      <a @click="left" class="button is-rounded">
        <i class="fa fa-caret-left"></i>
      </a>
      <button @click="goToMoreRouteInfo" class="button is-rounded">Choose route</button>
      <a @click="right" class="button is-rounded">
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
        windowHeight: 0,
        windowWidth: 0,
      }
    },
    methods: {
      left: function () {
        this.$refs.carousel.goPrev();
      },
      right: function () {
        this.$refs.carousel.goNext();
      },
      goToMoreRouteInfo: function () {
        let index = this.$refs.carousel.currentIndex;
        this.$store.commit('selectRoute', index);
        this.$router.push({name: 'morerouteinfo'})
      }
    },
    mounted() {
      this.$refs.carousel.currentIndex = this.$store.state.routes.selectedRouteIndex;
      let that = this;
      this.$nextTick(function () {
        if (window.innerHeight < 660) {
          that.windowHeight = 320;
          that.windowWidth = 300;
        }
        else if (window.innerHeight < 760) {
          that.windowHeight = 400;
          that.windowWidth = 330;
        }
        else if (window.innerHeight < 860) {
          that.windowHeight = 450;
          that.windowWidth = 370;
        }
        else {
          that.windowHeight = 550;
          that.windowWidth = 320;
        }
      });
    },
    computed: {
      routes() {
        return this.$store.state.routes.routesSummary;
      }
    }
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
