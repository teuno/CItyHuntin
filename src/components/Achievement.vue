<template>
  <div class="achievement tile is-ancestor">
    <div class="tile is-parent" v-if="progress < 100">
      <i class="icon fas fa-lock-open"></i>
    </div>
    <div class="tile is-parent" v-else>
      <i class="icon fas fa-lock"></i>
    </div>
    <div class="tile is-vertical is-parent">
      <p class="tile is-child my-title">{{title}}</p>
      <p class="tile is-child">{{description}}</p>
      <progress :value="progress" max="100" class="tile is-child"></progress>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Achievement',
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      fullfilled: {
        type: Boolean,
        default: false
      },
      progress: {
        type: Number,
        default: 0
      }
    },
    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

  .achievement {
    font-family: 'Francois One', sans-serif;
    font-weight: lighter;
    background: $text_white;
    padding: 0.5em;
    display: flex;
    flex-direction: row;
  }

  .my-title{
    font-weight: bold;
  }

  .icon {
    justify-content: center;
  }
</style>
