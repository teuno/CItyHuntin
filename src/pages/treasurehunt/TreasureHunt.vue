<template>
  <div class="treasureHunt">

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            treasure hunt
          </h1>
        </div>
      </div>
    </section>


    <carousel-3d ref="carousel" :controls-visible="false" :clickable="false">
      <slide v-for="(route, i) in routes" :key="i" :index="i">
        <figure @click="printDing(route.name)">
          <div class="container">
            <img :src="route.image">->
            <div class="center">{{route.name}}</div>
          </div>
        </figure>
      </slide>
    </carousel-3d>

    <!--<carousel-3d ref="carousel" :controls-visible="false" :clickable="false">-->
      <!--<slide v-for="(route, i) in routes" :index="i">-->
        <!--<figure @click="printDing(route.name)">-->
          <!--<div class="container">-->

            <!--<img src="https://www.w3schools.com/css/trolltunga.jpg" alt="Norway" width="1000" height="300">-->
            <!--&lt;!&ndash;<img :src="route.image">&ndash;&gt;-->
            <!--<div class="center">{{route.name}}</div>-->
          <!--</div>-->
        <!--</figure>-->
      <!--</slide>-->
    <!--</carousel-3d>-->

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
      goToTreasureHuntSummary: function () {
        this.$router.push({name: 'moretreasurehuntinfo'})
//        console.log(this.$refs.carousel.currentIndex);
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

    .carousel-3d-slide {
      flex: 1;
      height: 430px !important;
      width: 430px !important;
      border-color: $mint_green;
      background-color: $mint_green;

      .container {
        img {
          border-radius: 50%;
          height: auto;
          width: 400px;
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
        font-weight: bold;
      }
    }
  }

  div.carousel-3d-container {
    padding: 0;
    height: 430px !important;
  }

  div.carousel-3d-slide {
    height: 430px !important;
    width: 430px !important;
  }

  div.carousel-3d-slide.current {
    height: 430px !important;
    width: 430px !important;
  }
</style>
