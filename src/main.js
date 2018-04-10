import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '@/pages/MainMenu'
import NormalRoute from '@/pages/normalroute/NormalRoute'
import MoreRouteInfo from '@/pages/normalroute/MoreRouteInfo'
import SummaryOfRoute from '@/pages/normalroute/SummaryOfRoute'
import NormalRouteMap from '@/pages/normalroute/NormalRouteMap'
import TreasureHunt from '@/pages/treasurehunt/TreasureHunt'
import MoreTreasureHuntInfo from '@/pages/treasurehunt/MoreTreasureHuntInfo'
import Achievements from '@/pages/Achievements'
import Settings from '@/pages/Settings'


// require('./assets/sass/main.scss');

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    redirect: {
      name: "main"
    }
  },
  {name: 'main', path: '/', component: MainMenu},
  {name: 'treasurehunt', path:'/treasurehunt', component: TreasureHunt},
  {name: 'normalroute', path:'/normalroute', component: NormalRoute},
  {name: 'achievements', path:'/achievements', component: Achievements},
  {name: 'settings', path:'/settings', component: Settings},
  { name: 'summaryofroute', path: '/summaryofroute', component: SummaryOfRoute },
  { name: 'morerouteinfo', path: '/morerouteinfo', component: MoreRouteInfo },
  { name: 'moretreasurehuntinfo', path: '/moretreasurehuntinfo', component: MoreTreasureHuntInfo },
  { name: 'normalroutemap', path: '/normalroutemap', component: NormalRouteMap },

];

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
