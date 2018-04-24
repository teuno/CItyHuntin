<template>
  <gmap-map
    ref="gmap"
    :center="center"
    :zoom="12"
    style="width:100%;  height: 100vh;"
  >

    <gmap-info-window
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen=false"
    >
      <div v-html="infoContent"></div>
    </gmap-info-window>

    <gmap-marker
      :key="index"
      v-for="(m, index) in PointsOfInterest"
      :position="m.position"
      @click="toggleInfoWindow(m,index)">
    </gmap-marker>
  </gmap-map>


</template>

<script>
  export default {
    name: 'NormalRouteMap',
    components: {
    },
    data: function () {
      return {
        //needed for something, cuz else errors
        center: {lat: 45.508, lng: -73.587},
        //the map
        map: null,
        //infowindows section
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },

        PointsOfInterest: [
          {
            name: "House of Aleida Greve",
            description: "description 1",
            date_build: "",
            image_url: "",
            position: {lat: 52.512942, lng: 6.089625}
          },
          {
            name: "House of Potgieter",
            description: "description 2",
            date_build: "",
            image_url: "",
            position: {lat: 52.511950, lng: 6.091056}
          },
          {
            name: "House of Johannes Cele",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.511047, lng: 6.091728}
          },
          {
            name: "House of Emmanuel van Twenhuysen",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.510629, lng: 6.092635}
          },
          {
            name: "Hof van Suythem",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.510341, lng: 6.092704}
          },
          {
            name: "House of Rheinvis Feit",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.510138, lng: 6.093540}
          },
          {
            name: "House of Joan van der Capellen",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.511047, lng: 6.091728}
          }, {
            name: "Hof van Ittersum",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.511308, lng: 6.094390}
          },
          {
            name: "House of admiral Jacob Pieter van Braam",
            description: "description 3",
            date_build: "",
            image_url: "",
            position: {lat: 52.512850, lng: 6.089429}
          }
        ],

        //test for geolocation
        currentLocation : { lat : 0, lng : 0},
        geoLocationOptions: { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true },
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
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoContent = this.getInfoWindowContent(marker);

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        }
        //if different marker set infowindow to open and reset current marker index
        else {
          this.infoWinOpen = true;
          this.currentMidx = idx;
        }
      },

      getInfoWindowContent: function (marker) {
        return (`<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${marker.name}</p>
      </div>
    </div>

    <div class="content">
      ${marker.description}
      <br>
      <time datetime="2016-1-1">${marker.date_build}</time>
    </div>
  </div>
</div>`);
      },



      //geolocation methods
      setCurrentLocation : function() {
        navigator.geolocation.getCurrentPosition((position, options = this.geoLocationOptions) => {
          this.currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      },
    }
  }
</script>
