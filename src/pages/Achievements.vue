<template>
  <div class="achievements">
    <h1>achievements</h1>
    <div v-for="achievement in achievements">
      <achievement :title="achievement.title" :description="achievement.description"
                   :progress="achievement.progress"></achievement>
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
    min-height: 100vh; //nessecary for less then full screen achievement color
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $blue;

    h1 {
      color: $text_white;
    }

    .achievement {
      /*width: 70vw;*/
      margin: 0.4em;
    }
  }
</style>
