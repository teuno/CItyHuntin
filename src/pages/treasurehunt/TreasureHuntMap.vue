<template>
  <div>
    <!--<button @click="getLocation">click</button>-->
    <!--<label>{{text}}</label>-->
    <!--<button v-if="routeFinishable" @click="completeRoute">Complete the route</button>-->


    <h1 v-if="this.$store.state.treasurehunts.answeredQuestion">
      {{$store.state.treasurehunts.selectedPoI.challengeCompleteHint}}</h1>

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

    <section v-if="routeFinishable" class="hero is-small is-column-centered">
      <div class="hero-body">
        <div class="container">
          <a @click="completeHunt" class="button is-success is-rounded">Complete the treasure hunt</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'TreasureHuntMap',
    components: {},
    data: function () {
      return {
        activeMarker: '',
        text: "",

        //needed for something, cuz else errors
        center: {lat: 45.508, lng: -73.587},
        //the map
        map: null,

        routeFinishable: false,


        //test for geolocation
        currentLocation: {lat: 0, lng: 0},
        finishable: false,
        geoLocationOptions: {
          /*All needed for it to work an a android device*/
          /*higher then how long ago we send request*/maximumAge: 30000,
          timeout: 5000,
          enableHighAccuracy: true
        },
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
      this.AllLocationsAreFinished();
    },
    methods: {
      completeHunt() {
        this.$router.push({name: 'summaryoftreasurehunt'})
      },
      goToPoI(index) {
        //when we will check the location to see if you are allowed to view the route we need to use this.
        this.setCurrentLocation();

        this.$store.commit('selectPoIHunt', index);

        //uncomment to get the location check back
//        this.IsAtPoI();
//        if (this.finishable) {
          this.$store.commit('visitPoIHunt', index);
          this.$router.push({name: 'huntPoI'})
//        }
      },

      //geolocation methods

      getLocation: function () {
        console.log("in get Location");
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.checkLocationSharing, this.checkLocationSharing, this.geoLocationOptions);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      },

      checkLocationSharing: function (position) {
        if (position.code === 2) {
          console.log(position.message);
        }
        else if (position.code === 3) {
          alert("plz turn on you location sharing under instellingen->safety and protection-> location.");
          console.log("plz turn on you location sharing under instellingen->safety and protection-> location.");
        } else {

          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(this.currentLocation);
//          this.distance_from(position);
        }
      },

      distance_from: function (position) {
        console.log(position);
        const errorRange = 0.1;
        this.text = 'hoi';

        if ((position.coords.latitude + errorRange ) >= this.currentLocation.lat &&
          (position.coords.latitude - errorRange ) <= this.currentLocation.lat &&
          (position.coords.longitude + errorRange ) >= this.currentLocation.lng &&
          (position.coords.longitude - errorRange ) <= this.currentLocation.lng) {
          console.log("You finished the run");
          this.finishable = true;
        }
      },

      AllLocationsAreFinished: function () {
        this.routeFinishable = this.PointsOfInterest.every(x => x.visited === true);
      },

      setCurrentLocation: function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.checkLocationSharing, this.checkLocationSharing, this.geoLocationOptions);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      },

      IsAtPoI: function () {
        const errorRange = 0.0002; //22m from the PoI's location

        console.log(this.$store.state.treasurehunts.selectedPoI.position);
        if ((this.$store.state.treasurehunts.selectedPoI.position.lat + errorRange ) >= this.currentLocation.lat &&
          (this.$store.state.treasurehunts.selectedPoI.position.lat - errorRange ) <= this.currentLocation.lat &&
          (this.$store.state.treasurehunts.selectedPoI.position.lng + errorRange ) >= this.currentLocation.lng &&
          (this.$store.state.treasurehunts.selectedPoI.position.lng - errorRange ) <= this.currentLocation.lng) {
          this.finishable = true;
          console.log("You finished the run");
        }
        else {
          this.finishable = false;
          console.log("ur not there");
        }
      }
    },
    computed: {
      PointsOfInterest() {
        return this.$store.state.treasurehunts.selectedHuntData;
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../assets/sass/main";
</style>
