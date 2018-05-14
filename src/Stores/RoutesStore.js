import data from '../assets/json/routesData'
import religious_buildings from '../assets/json/religious_buildingsdata'
import influencial_people from '../assets/json/influencial_peopledata'


const routesMap = {
  '../assets/json/religious_buildingsdata': religious_buildings,
  '../assets/json/influencial_peopledata': influencial_people,
}

const RoutesStore = {
  state: {
    routesSummary: data,
    selectedRoute: {},
    selectedRouteData: [],
  },
  mutations: {
    selectRoute(state, index) {
      state.selectedRoute = state.routesSummary[index];
      state.selectedRouteData = routesMap[state.routesSummary[index].jsonfile];
    }
  },
  actions: {},
  getters: {}
}

export default RoutesStore;
