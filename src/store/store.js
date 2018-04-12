export const store = {
  state:{
    openedWindow: undefined
  },
  getters: {
    getOpenedWindow: state => state.openedWindow,
    // getOpenedWindow: ()=> {
    //   return this.state.openedWindow;
    // }
  },
  mutations:{
    setOpenedWindow(state, window) {
      // window is the payload passed in.
      state.openedWindow = window;
    }
    // setOpenedWindow: (openWindow)=>{
    //   this.state.openedWindow = openWindow;
    // }
  }
};
