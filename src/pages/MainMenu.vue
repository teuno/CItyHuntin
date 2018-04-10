<template>
  <div>
    <div v-on:click="toTreasureHunt" class="columns height-25 treasureHunt">

      <div>
        <i class="fas fa-lock-open"></i>
        <h1>Treasure hunt</h1>
      </div>

    </div>

    <div v-on:click="toNormalRoute" class="columns height-25 normalRoute">
      <div>
        <i class="fas fa-lock-open"></i>
        <h1>Walk the route</h1>
      </div>
    </div>

    <div v-on:click="toAchievements" class="columns height-25 achievements">
      <div>
        <i class="fas fa-lock-open"></i>
        <h1>Achievements</h1>
      </div>
    </div>

    <div v-on:click="toSettings" class="columns height-25 settings">
      <div>
        <i class="fas fa-lock-open"></i>
        <h1>Settings</h1>
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

  div {
    margin: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-self: center;

    color: $text_white;
    font-family: 'Francois One', sans-serif;

    font-size: 1.5em;

    .height-25 {
      min-height: 25vh;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      div {
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }

  div .height-25 h1 {
    margin: 0;
  }

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
</style>
