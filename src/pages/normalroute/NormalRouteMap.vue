<template>
  <div>
    <button @click="getLocation">click</button>
    <label>{{text}}</label>
    <button v-if="finishable" v-on:click="">Finish this</button>

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
        @click="toggleInfoWindow(m,index)"
        v-on:getSecondPopUp="getSecondPopUp">
      </gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import data from '../../assets/json/influencial_peopledata'


  export default {
    name: 'NormalRouteMap',
    components: {},
    props: {
      jsonfile: {
        type: String,
        default: ''
      },
    },
    data: function () {
      return {
        activeMarker: '',
        text: "",

        //needed for something, cuz else errors
        center: {lat: 45.508, lng: -73.587},
        //the map
        map: null,
        //infowindows section
        infoContent: "",
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
        PointsOfInterest: data,

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
    },
    methods: {

      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = marker.position;
        this.activeMarker = marker;

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
       <button @click="${this.getSecondPopUp}">Get second popup</button>
    </div>
  </div>
</div>`);
      },

      getSecondPopUp: function () {
        console.log("hoi");
//        marker = this.activeMarker;

//        return (`<div class="card">
//  <div class="card-image">
//    <figure class="image is-4by3">
//      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
//    </figure>
//  </div>
//  <div class="card-content">
//    <div class="media">
//      <div class="media-content">
//        <p class="title is-4">${marker.name}</p>
//      </div>
//    </div>
//
//    <div class="content">
//     this is realy amazin content
//      <br>
//      <time datetime="2016-1-1">${marker.date_build}</time>
//    </div>
//  </div>
//</div>`);
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
        console.log(position);
        if (position.code === 2) {
          console.log(position.message);
        }
        else if (position.code === 3) {
          alert("plz turn on you location sharing under instellingen->safety and protection-> location.");
          console.log("plz turn on you location sharing under instellingen->safety and protection-> location.");
        } else {
          this.distance_from(position);
        }
      },
      distance_from: function (position) {
        console.log(position);
        console.log(position.coords);
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
      AllLocationsAreFinised: function () {
        let finished = {status: false}
        finished.status = this.PointsOfInterest.every(x => x.visited === true)
        return finished;
      }
    },

    setCurrentLocation: function () {
      navigator.geolocation.getCurrentPosition((position, options = this.geoLocationOptions) => {
        this.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },

  }
</script>
