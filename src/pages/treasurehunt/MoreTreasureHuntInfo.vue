<template>
  <div class="MoreRouteInfo">

    <div class="container">
      <img :src="route.image" alt="Norway">
      <div class="center">{{route.name}}</div>
    </div>

    <label>{{route.description}}</label>

    <button class="button is-rounded" @click="goToHuntMapSummary">Start treasure hunt</button>

  </div>
</template>
<script>
  export default {
    name: 'MoreTreasureHuntInfo',
    components: {},
    data() {
      return {
      }
    },
    methods: {
      goToHuntMapSummary: function () {
        this.$store.commit('pickHunt');
        console.log(this.$store.state.treasurehunts.selectedHuntData);
//        this.$router.push({name: 'normalroutemap'})
      }
    },
    computed: {
      route() {
        return this.$store.state.treasurehunts.selectedHunt;
      }
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

    .container{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      img {
        border-radius: 50%;
        height: auto;
        width: 80%;
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
    button {
      color: $text_deep_gray;
      width: 50%;
      font-weight: bold;
    }
  }
</style>
