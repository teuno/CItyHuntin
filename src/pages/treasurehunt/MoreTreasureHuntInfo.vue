<template>
  <div class="MoreRouteInfo">

    <div class="container">
      <img src="https://www.w3schools.com/css/trolltunga.jpg" alt="Norway" width="1000" height="300">>
      <div class="center">{{route.name}}</div>
    </div>

    <label>{{route.description}}</label>

    <button class="button is-rounded">Start treasure hunt</button>

  </div>
</template>
<script>
  export default {
    name: 'MoreTreasureHuntInfo',
    components: {

    },
    data() {
      return {
        route: { image: "", name: 'treasure hunt 1', description: 'description of the treasure hunt' }
      }
    },
    methods: {
    }
  }</script>

<style lang="scss" scoped>

  @import "../../assets/sass/main";

  .MoreRouteInfo {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: $mint_green;
    color: $text_white;
    img

  {
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
</style>
