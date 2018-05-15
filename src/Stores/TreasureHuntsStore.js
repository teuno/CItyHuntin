import data from '../assets/json/treasurehuntsdata'
import religious_buildings from '../assets/json/religious_buildingsdata'
import influencial_people from '../assets/json/influencial_peopledata'


const routesMap = {
  '../assets/json/religious_buildingsdata': religious_buildings,
  '../assets/json/influencial_peopledata': influencial_people,
}

const TreasureHuntsStore = {
  state: {
    huntsSummary: data,
    selectedHunt: {},
    selectedHuntData: [],
  },
  mutations: {
    selectHunt(state, index) {
      state.selectedHunt = state.huntsSummary[index];
    },
    pickHunt(state){
      state.selectedHuntData = routesMap[state.selectedHunt.jsonfile];
    }
  },
  actions: {},
  getters: {}
}

export default TreasureHuntsStore;
