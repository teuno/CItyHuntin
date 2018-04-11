const NormalMapStore = {
  state:{
    openedWindow: ''
  },
  getters: {
    getOpenedWindow: ()=> {
      return this.state.openedWindow;
    }
  },
  mutations:{
    setOpenedWindow: (openWindow)=>{
      this.state.openedWindow = openWindow;
    }
  }
};
//if needed check for local storage.
export default NormalMapStore;
