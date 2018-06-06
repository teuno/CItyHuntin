<template>
  <div>
    <gmap-map
      ref="gmap"
      :options="mapOptions"
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

      <gmap-info-window
        :position="currentLocation"
      >
        <span class="icon flag-icon flag-icon-ro is-medium "></span>
      </gmap-info-window>

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
        mapOptions: {
          disableDefaultUI: true,
        },

        //geolocation
        currentLocation: this.$store.state.routes.selectedPoI.position,
      }
    },
    mounted() {
      this.setCurrentLocation();

      this.$nextTick(function () {
        window.setInterval(() => {
          this.setCurrentLocation();
        },3000);
      });

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
        this.$store.commit('selectPoIRoute', index);
        this.$store.commit('visitPoIRoute', index);
        this.$router.push({name: 'routePoI'});
      },

      //geolocation methods
      checkLocationSharing: function (position) {
        if (position.code === 2) {
          console.log(position.message);
        }
        else if (position.code === 3 && this.$store.state.treasurehunts.errormessagecode3hasbeenshow === false) {
          alert("plz turn on you location sharing under instellingen->safety and protection-> location.");
          this.$store.commit('setErrorMessagCode3HasBeenShown');
        } else {
          console.log(position.coords);
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        }
      },


      setCurrentLocation: function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.checkLocationSharing, this.checkLocationSharing, this.geoLocationOptions);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
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
