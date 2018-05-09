<template>
  <div class="treasureHunt columns is-multiline is-marginless">

    <page-title :title="title"></page-title>


    <carousel-3d ref="carousel" :controls-visible="false" :clickable="false" :width="windowWidth" :height="windowHeight">
      <slide v-for="(route, i) in routes" :key="i" :index="i">
        <figure @click="printDing(route.name)">
          <div class="container">
            <img :src="route.image">->
            <div class="center">{{route.name}}</div>
          </div>
        </figure>
      </slide>
    </carousel-3d>

    <div class="controls">
      <a v-on:click="left" class="button">
        <i class="fa fa-caret-left"></i>
      </a>
      <button v-on:click="goToTreasureHuntSummary" class="button is-rounded">Choose treasure hunt</button>
      <a v-on:click="right" class="button">
        <i class="fa fa-caret-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import data from '../../assets/json/routesData'
  import {Carousel3d, Slide} from 'vue-carousel-3d';

  export default {
    name: 'TreasureHunt',
    components: {
      Carousel3d,
      Slide
    },
    data() {
      return {
        title: 'treasure hunt',
        routes: data,
        windowHeight: 0,
        windowWidth: 0,
      }
    },
    methods: {
      goToTreasureHuntSummary: function () {
        this.$router.push({name: 'moretreasurehuntinfo'})
      },
      printDing: function (name) {
        console.log(name);
      },
      left: function () {
        this.$refs.carousel.goPrev();
      },
      right: function () {
        this.$refs.carousel.goNext();
      }
    },
    mounted() {
      let that = this;
      this.$nextTick(function() {
        window.addEventListener('mouseover', function(e) {
//          console.log("width: "+ window.innerWidth+" height: "+ window.innerHeight);
          if(window.innerHeight < 660){
            that.windowHeight = 320;
            that.windowWidth = 300;
          }
          else if(window.innerHeight < 760){
            that.windowHeight = 400;
            that.windowWidth = 330;
          }
          else if(window.innerHeight < 860){
            that.windowHeight = 450;
            that.windowWidth = 370;
          }
          else{
            that.windowHeight = 550;
            that.windowWidth = 320;
          }
        });
      });
      dispatchEvent(new Event('mouseover'));
    },
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .treasureHunt {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $mint_green;
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
    border-color: $mint_green;
    background-color: $mint_green;

    .center {
      position: absolute;
      top: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1.3em;
    }
  }

</style>
