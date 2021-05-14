import { createStore } from "vuex";

export default createStore({
  state: {
    darkMode: localStorage.getItem("dark_mode") || null,
  },
  mutations: {
    darkModeToggle(state) {
      state.darkMode = !state.darkMode;
      localStorage.setItem("dark_mode", state.darkMode);
    },
  },
  actions: {},
  modules: {},
});
