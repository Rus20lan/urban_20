export default {
  namespaced: true,
  state: () => ({
    id: 1,
  }),
  mutations: {
    increment(state) {
      state.id++;
    },
  },
};
