<template>
  <div>
    <gmap-map
      ref="gmap"
      :center="center"
      :zoom="12"
      style="width:100%;  height: 100vh;"
    >

      <gmap-marker
        :key="index"
        v-for="(m, index) in PointsOfInterest"
        :position="m.position"
        @click="goToPoI(index)"
      >
      </gmap-marker>
    </gmap-map>

    <section class="hero is-small is-column-centered">
      <div class="hero-body">
        <div class="container">
          <a @click="completeRoute" class="button is-success is-rounded">Complete the route</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'NormalRouteMap',
    components: {},
    data: function () {
      return {
        //needed for something, cuz else errors
        center: {lat: 45.508, lng: -73.587},
        //the map
        map: null,
      }
    },
    mounted() {
      //set bounds of the map
      this.$refs.gmap.$mapPromise.then((map) => {
        const bounds = new google.maps.LatLngBounds()
        for (let m of this.PointsOfInterest) {
          bounds.extend(m.position)
        }
        map.fitBounds(bounds);
      });
    },
    methods: {
      completeRoute() {
        this.$router.push({name: 'summaryofroute'})
      },
      goToPoI(index) {
        this.$store.commit('selectPoI', index);
        this.$store.commit('visitPoI', index);
        this.$router.push({name: 'routePoI'});
      },
    },
    computed: {
      PointsOfInterest() {
        return this.$store.state.routes.selectedRouteData;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";
</style>
