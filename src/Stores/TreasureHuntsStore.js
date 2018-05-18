import data from '../assets/json/hunts/treasurehuntsdata'
import treasure_hunt1 from '../assets/json/hunts/treasurehunt_1_data'
import treasure_hunt2 from '../assets/json/hunts/treasurehunt_2_data'
import treasure_hunt3 from '../assets/json/hunts/treasurehunt_3_data'


const routesMap = {
  '../assets/json/hunts/treasurehunt_1_data': treasure_hunt1,
  '../assets/json/hunts/treasurehunt_2_data': treasure_hunt2,
  '../assets/json/hunts/treasurehunt_3_data': treasure_hunt3,
}

const TreasureHuntsStore = {
  state: {
    huntsSummary: data,
    selectedHunt: {},
    selectedHuntData: [],
    selectedPoI: {},
    selectedHuntIndex: 0,
  },
  mutations: {
    selectHunt(state, index) {
      state.selectedHuntIndex = index;
      state.selectedHunt = state.huntsSummary[index];
    },
    pickHunt(state) {
      state.selectedHuntData = routesMap[state.selectedHunt.jsonfile];
      state.selectedHuntData.map(x => {
        x.visited = false;
        return x;
      });
    },
    visitPoIHunt(state, index) {
      state.selectedHuntData[index].visited = true;
    },
    selectPoIHunt(state, index) {
      state.selectedPoI = state.selectedHuntData[index];
    }
  },
  actions: {},
  getters: {}
}

export default TreasureHuntsStore;
