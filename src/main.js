import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from '@/pages/MainMenu'
import NormalRoute from '@/pages/NormalRoute'
import TreasureHunt from '@/pages/TreasureHunt'
import Achievements from '@/pages/Achievements'
import Settings from '@/pages/Settings'
import SummaryOfRoute from '@/pages/SummaryOfRoute'
import MoreRouteInfo from '@/pages/MoreRouteInfo'


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
