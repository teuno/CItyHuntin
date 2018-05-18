<template>
  <div class="profile">
    <page-title :title="title" :color="'#FFFFFF'"></page-title>

    <section class="section">
      <div class="container">
        <form>
          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control ">
                    <a class="button is-static">
                      Name
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Your username">
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Email
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" type="email" placeholder="Your email">
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
              <div class="field is-expanded">
                <div class="field has-addons">
                  <p class="control">
                    <a class="button is-static">
                      Password
                    </a>
                  </p>
                  <p class="control is-expanded">
                    <input class="input" type="email" placeholder="Your password">
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-grouped is-grouped-centered">
            <p @click="save" class="control">
              <a class="button is-link">
                Save
              </a>
            </p>
            <p @click="cancel" class="control">
              <a  class="button">
                Cancel
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>

  </div>
</template>

<script>

  export default {
    name: 'Profile',
    components: {},
    data() {
      return {
        title: 'Profile'
      }
    },
    methods:{
      save: function () {
        console.log("save");
      },
      cancel: function () {
        this.$router.go(-1);
      },
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .profile {
    min-height: 100vh;
    width: 100vw;
    background-color: $navy_blue;

    .input{
      width: 90%
    }
  }
</style>
