<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
  import RouteMarkerPopup from '../components/RouteMarkerPopup'

  export default {
    name: 'google-map',
    props: ['name'],
    components: {
      RouteMarkerPopup
    },
    data: function () {
      return {
        mapName: this.name + "-map",
        PointsOfInterest: [{
          name: "House of Aleida Greve",
          description: "description 1",
          date_build: "",
          image_url: "",
          latitude: 52.512942,
          longitude: 6.089625
        }, {
          name: "House of Potgieter",
          description: "description 2",
          date_build: "",
          image_url: "",
          latitude: 52.511950,
          longitude: 6.091056
        }, {
          name: "House of Johannes Cele",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.511047,
          longitude: 6.091728
        }, {
          name: "House of Emmanuel van Twenhuysen",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.510629,
          longitude: 6.092635
        }, {
          name: "Hof van Suythem",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.510341,
          longitude: 6.092704
        }, {
          name: "House of Rheinvis Feit",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.510138,
          longitude: 6.093540
        }, {
          name: "House of Joan van der Capellen",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.511047,
          longitude: 6.091728
        }, {
          name: "Hof van Ittersum",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.511308,
          longitude: 6.094390
        }, {
          name: "House of admiral Jacob Pieter van Braam",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 52.512850,
          longitude: 6.089429
        }
        ],
        map: null,
        bounds: null,
        markers: [],
      }
    },
    mounted: function () {
      this.bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName);
      const mapCentre = this.PointsOfInterest[0];

      const options = {
        center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
      };
      this.map = new google.maps.Map(element, options);

      this.PointsOfInterest.forEach((PoI) => {
        const position = new google.maps.LatLng(PoI.latitude, PoI.longitude);
        const popupWindow = `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">${PoI.name}</p>
      </div>
    </div>

    <div class="content">
      ${PoI.description}
      <br>
      <time datetime="2016-1-1">${PoI.date_build}</time>
    </div>
  </div>
</div>`
        // `<route-marker-popup :name=${PoI.name} :description=${PoI.description}></route-marker-popup>`;

        const infowindow = new google.maps.InfoWindow({
          content: popupWindow
        });

        const marker = new google.maps.Marker({
          position,
          map: this.map
        });

        marker.addListener('click', function () {
          infowindow.open(this.map, marker);
          let oldWindowJSON = localStorage.getItem('window');
          console.log(oldWindowJSON);
          if(oldWindowJSON !== undefined && oldWindowJSON !== null){
            //          let oldWindow = this.computed.getOpenedWindow();
            let oldWindow = JSON.parse(oldWindowJSON);
            oldWindow.close();
          }

          localStorage.setItem('window', JSON.stringify(infowindow));
          console.log(infowindow);
        });

        this.markers.push(marker);
        this.map.fitBounds(this.bounds.extend(position))
      });
    },
    computed: {
//      ...mapGetters([
//          'getOpenedWindow'
//                 ])
    },
    methods: {

    },
  };
</script>


<style lang="scss" scoped>
  @import "../assets/sass/main";

  .google-map {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: gray;
  }
</style>
