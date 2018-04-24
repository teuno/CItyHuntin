<template>
  <div class="columns is-multiline is-marginless">
    <div v-on:click="toTreasureHunt" class="column is-paddingless is-12 is-incenter treasureHunt">
      <div class="is-incenter is-half">
        <i class="far fa-map"></i>
        <h1>Treasure hunt</h1>
      </div>
    </div>
    <div v-on:click="toNormalRoute" class="column is-paddingless is-12 is-incenter normalRoute">
      <div class="is-incenter is-half">
        <i class="fas fa-map-marker-alt"></i>
        <h1>normalroute</h1>
      </div>
    </div>
    <div v-on:click="toAchievements" class="column is-paddingless is-12 is-incenter achievements">
      <div class="is-incenter is-half">
        <i class="fas fa-lock"></i>
        <h1>achievements</h1>
      </div>
    </div>
    <div v-on:click="toSettings" class="column is-paddingless is-12 is-incenter settings">
      <div class="is-incenter is-half">
        <i class="fas fa-sliders-h"></i>
        <h1>settings</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu',

    methods: {
      toTreasureHunt: function () {
        this.$router.push({name: 'treasurehunt'})
      },
      toNormalRoute: function () {
        this.$router.push({name: 'normalroute'})
      },
      toAchievements: function () {
        this.$router.push({name: 'achievements'})
      },
      toSettings: function () {
        this.$router.push({name: 'settings'})
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

  .treasureHunt {
    background-color: $mint_green;
  }

  .normalRoute {
    background-color: $green;
  }

  .achievements {
    background-color: $blue;
  }

  .settings {
    background-color: $navy_blue;
  }

  .columns{
    color: $text_white;
    font-family: 'Francois One', sans-serif;

    font-size: 1.5em;
  }

  .is-half{
    min-width: 50%;

    h1{
      margin-left:1em;
      margin-right: auto;
    }
  }

  .is-incenter {
    min-height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
