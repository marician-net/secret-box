import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: localStorage.getItem("dark_mode") || 0,
  },
  mutations: {
    darkModeToggle(state,data) {
      if(data){
        state.darkMode = data
      }else{
        (state.darkMode == 1) ? state.darkMode = 0 : state.darkMode = 1
      }
      localStorage.setItem("dark_mode", state.darkMode);
    },
  },
  actions: {},
  modules: {},
});
