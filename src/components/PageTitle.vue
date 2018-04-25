<template>
  <section class="hero" :style="{size: this.size}">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered" :style="{color: this.color}">
          {{title}}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'PageTitle',
    props: {
      title: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: '$grey-darker'
      },
      size: {
        type: String,
        default: ''
      },
    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main";


</style>
