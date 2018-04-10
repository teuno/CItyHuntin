<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script>
  export default {
    name: 'google-map',
    props: ['name'],
    data: function () {
      return {
        mapName: this.name + "-map",
        PointsOfInterest: [{
          name: "point 1",
          description: "description 1",
          date_build: "",
          image_url: "",
          latitude: 51.501527,
          longitude: -0.1921837
        }, {
          name: "point 2",
          description: "description 2",
          date_build: "",
          image_url: "",
          latitude: 51.505874,
          longitude: -0.1838486
        }, {
          name: "point 3",
          description: "description 3",
          date_build: "",
          image_url: "",
          latitude: 51.4998973,
          longitude: -0.202432
        }],
        map: null,
        bounds: null,
        markers: []
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

        const popupWindow = `<div>The name is  ${PoI.name}<br> the description is ${PoI.description}</div>`

        const infowindow = new google.maps.InfoWindow({
          content: popupWindow
        });

        const marker = new google.maps.Marker({
          position,
          map: this.map,
          title: PoI.name
        });

        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });

        this.markers.push(marker);
        this.map.fitBounds(this.bounds.extend(position))
      });
    }
  };
</script>


<style lang="scss" scoped>
  .google-map {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    background: gray;
  }
</style>
