<template>
  <div class="achievements columns is-mobile is-multiline">
    <h1 class="column is-8 is-offset-3">achievements</h1>
    <div class="column is-8 is-offset-2 is-achievement" v-for="achievement in achievements">
      <achievement class=""
                   :title="achievement.title"
                   :description="achievement.description"
                   :progress="achievement.progress">
      </achievement>
    </div>
  </div>
</template>

<script>
  import Achievement from '../components/Achievement'
  import data from '../assets/json/achievementdata'

  export default {
    name: 'Achievements',
    components: {
      Achievement
    },
    data() {
      return {
        achievements: data
      }
    },
    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

  .achievements {
    background-color: $blue;

    .is-achievement {
      margin:0.5em;
    }

    h1 {
      font-family: 'Francois One', sans-serif;
      font-size: 2.5em;
      color: $text_white;
    }
  }
</style>
