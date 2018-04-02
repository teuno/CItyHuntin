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

  export default {
    name: 'Achievements',
    components: {
      Achievement
    },
    data() {
      return {
        achievements: [
          {image: "", title: "title 1", description: "description 1", fullfilled: false, progress: 25},
          {image: "", title: "title 2", description: "description 2", fullfilled: false, progress: 55},
          {image: "", title: "title 3", description: "description 3", fullfilled: false, progress: 25},
          {image: "", title: "title 4", description: "description 4", fullfilled: false, progress: 55},
          {image: "", title: "title 5", description: "description 5", fullfilled: false, progress: 25},
          {image: "", title: "title 6", description: "description 6", fullfilled: false, progress: 55},
          {image: "", title: "title 7", description: "description 7", fullfilled: false, progress: 25},
          {image: "", title: "title 8", description: "description 8", fullfilled: false, progress: 55},
          {image: "", title: "title 9", description: "description 9", fullfilled: false, progress: 25},
          {image: "", title: "title 10", description: "description 10", fullfilled: false, progress: 55},
          {image: "", title: "title 11", description: "description 11", fullfilled: false, progress: 25}
        ]
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
