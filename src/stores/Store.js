import Vue from 'vue'
import Vuex from 'vuex'

import RoutesStore from './RoutesStore'
import TreasureHuntsStore from './TreasureHuntsStore'


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    routes: RoutesStore,
    treasurehunts: TreasureHuntsStore,
  }
});



export default store;
