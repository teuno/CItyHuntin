<template>
  <div class="profile">

    <page-title :title="title" :color="'#FFFFFF'"></page-title>


    <!--do we want no buttons???
    doesn't how does the user then know if this gets saved or not?-->
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
                    <input class="input" type="tel" placeholder="Your username">
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
    methods: {}
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";

  .profile {
    min-height: 100vh;
    width: 100vw;
    background-color: $navy_blue;
  }


</style>
