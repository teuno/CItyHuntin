import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCordova from 'vue-cordova'

// Regular Webpack:
import * as VueGoogleMaps from 'vue2-google-maps'
import {routes }from './routes'
import PageTitle from './components/PageTitle.vue'
Vue.component('page-title', PageTitle);

import RouteMarkerPopup from './components/RouteMarkerPopup.vue'
Vue.component('RouteMarkerPopup', RouteMarkerPopup);


Vue.use(VueRouter);
Vue.use(VueCordova);


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCVuGnZGu5iugYyK9QPFYoHG8Na_scWD7A',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
});


const router = new VueRouter({
  // mode: 'history', this doesnt work on android so now we have ugly urls
  base: __dirname,
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
    `
}).$mount('#app');
