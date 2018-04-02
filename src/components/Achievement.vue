<template>
    <div class="achievement">
      <div v-if="fullfilled">
        <i class="fas fa-lock-open"></i>
      </div>

      <div v-else>
        <i class="fas fa-lock"></i>
      </div>

      <div>
        <p>{{title}}</p>
        <p>{{description}}</p>
        <progress :value="progress" max="100"></progress>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Achievement',
    props:{
      title:{
        type: String,
        default:''
      },
      description:{
        type: String,
        default:''
      },
      fullfilled:{
        type: Boolean,
        default:false
      },
      progress:{
        type: Number,
        default:''
      }
    },
    methods: {

    }
  }
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main.scss";

  .achievement{
    background: white;
    display: flex;
    padding: 0.5em;
  }
  .achievement div{
    flex-direction: column;
    padding: 0.5em;
  }
</style>
