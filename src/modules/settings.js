export default {
  namespaced: true,
  state: () => ({
    theme: true,
  }),
  mutations: {
    toggleTheme(state) {
      // state.theme = !state.theme;
      if (state.theme) {
        state.theme = false;
      } else {
        state.theme = true;
      }
    },
  },
};
