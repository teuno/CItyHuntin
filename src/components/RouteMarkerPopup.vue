<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{name}}</p>
        </div>
      </div>

      <div class="content">
        {{description}}
        <br>
        <time datetime="2016-1-1">{{date_build}}</time>
        <!--<button @click="$emit('getSecondPopUp')">Get second popup</button>-->
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'RouteMarkerPopup',
    props: {
      name: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      date_build: {
        type: String,
        default: ''
      }
    },
    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main";

</style>
