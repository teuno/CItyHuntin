import data from '../assets/json/hunts/treasurehuntsdata'
import treasure_hunt1 from '../assets/json/hunts/treasurehunt_1_data'



const routesMap = {
  '../assets/json/hunts/treasurehunt_1_data': treasure_hunt1,
}

const TreasureHuntsStore = {
  state: {
    huntsSummary: data,
    selectedHunt: {},
    selectedHuntData: [],
    selectedPoI: {},
  },
  mutations: {
    selectHunt(state, index) {
      state.selectedHunt = state.huntsSummary[index];
    },
    pickHunt(state){
      state.selectedHuntData = routesMap[state.selectedHunt.jsonfile];
      state.selectedHuntData.map(x => {
        x.visited = false;
        return x;
      });
    },
    visitPoIHunt(state, index){
      state.selectedHuntData[index].visited = true;
    },
    selectPoIHunt(state, index){
      state.selectedPoI = state.selectedHuntData[index];
    }
  },
  actions: {},
  getters: {}
}

export default TreasureHuntsStore;
