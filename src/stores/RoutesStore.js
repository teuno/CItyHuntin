import data from '../assets/json/routes/routesdata'
import religious_buildings from '../assets/json/routes/religious_buildingsdata'
import influencial_people from '../assets/json/routes/influencial_peopledata'
import hidden_zwolle from '../assets/json/routes/hidden_zwolledata'
import pubcrawl from '../assets/json/routes/pubcrawldata'
import more_then_the_center from '../assets/json/routes/more_then_the_centerdata'
import lots_of_culture from '../assets/json/routes/lots_of_culturedata'
import campus from '../assets/json/routes/campus_route'


const routesMap = {
  '../assets/json/routes/religious_buildingsdata': religious_buildings,
  '../assets/json/routes/influencial_peopledata': influencial_people,
  '../assets/json/routes/hidden_zwolledata': hidden_zwolle,
  '../assets/json/routes/pubcrawldata': pubcrawl,
  '../assets/json/routes/more_then_the_centerdata': more_then_the_center,
  '../assets/json/routes/lots_of_culturedata': lots_of_culture,
  '../assets/json/routes/campus_routedata': campus
};

const RoutesStore = {
  state: {
    routesSummary: data,
    selectedRoute: {},
    selectedRouteData: [],
    selectedPoI: {},
    selectedRouteIndex: 0,
  },
  mutations: {
    selectRoute(state, index) {
      state.selectedRouteIndex = index;
      state.selectedRoute = state.routesSummary[index];
    },
    pickRoute(state){
        state.selectedRouteData = routesMap[state.selectedRoute.jsonfile];
        state.selectedRouteData.map(x => {
          x.visited = false;
          return x;
        });
    },
    visitPoIRoute(state, index){
      state.selectedRouteData[index].visited = true;
    },
    selectPoIRoute(state, index){
      state.selectedPoI = state.selectedRouteData[index];
    }
  },
  actions: {},
  getters: {}
};

export default RoutesStore;
