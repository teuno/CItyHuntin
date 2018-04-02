<template>
  <div class="treasureHunt">
    <h1>treasure hunt</h1>

    <carousel-3d ref="carousel" :controls-visible="false" :clickable="false">
      <slide v-for="(route, i) in routes" :index="i">
        <figure @click="printDing(route.name)">
          <div class="container">
            <img src="https://www.w3schools.com/css/trolltunga.jpg" alt="Norway" width="1000" height="300">
            <div class="center">{{route.name}}</div>
          </div>
        </figure>
      </slide>
    </carousel-3d>

    <div class="controls">
      <a v-on:click="left" class="button">
        <i class="fa fa-caret-left"></i>
      </a>
      <button v-on:click="ding" class="button is-rounded">Choose city</button>
      <a v-on:click="right" class="button">
        <i class="fa fa-caret-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
  import {Carousel3d, Slide} from 'vue-carousel-3d';

  export default {
    name: 'TreasureHunt',
    components: {
      Carousel3d,
      Slide
    },
    data() {
      return {
        routes: [
          {image: "", name: 'level 1'},
          {image: "", name: 'level 2'},
          {image: "", name: 'level 3'},
          {image: "", name: 'level 4'},
          {image: "", name: 'level 5'},
          {image: "", name: 'level 6'},
          {image: "", name: 'level 7'}
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
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

  .treasureHunt {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: $mint_green;
    color: $text_white;

    h1 {
      flex: 1;
    }

    .carousel-3d-slide {
      flex: 1;
      opacity: 0.00000001;
      border-color: $mint_green;
      background-color: $mint_green;

      .container {

        img {
          border-radius: 50%;
          height: auto;
          border: 0.2em solid white;
        }

        .center {
          position: absolute;
          top: 80%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.3em;
        }
      }
    }

    .controls {
      flex: 1;

      button {
        color: $text_deep_gray;
      }
    }
  }
</style>
