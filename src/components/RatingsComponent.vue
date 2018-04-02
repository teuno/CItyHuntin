<template>
  <div class="ratings">

    <span class="star-icon full">&#9734</span>
    <span class="star-icon full">&#9734</span>
    <span class="star-icon full">&#9734</span>
    <span class="star-icon">&#9734</span>
    <span class="star-icon">&#9734</span>
  </div>
</template>

<script>
  export default {
    name: 'Ratings',
    methods: {

    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

 .star-icon{
   color: #ddd;
   font-size: 34px;
   position: relative;

   .full:before{
     color: #FDE16D;
     content: '\2605'; /*full star in utf-8*/
     position: absolute;
     left: 0;
     text-shadow: 0 0 2px rgba(0,0,0,0.7);
   }
 }
</style>
