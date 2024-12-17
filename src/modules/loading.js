export default {
  namespaced: true,
  state: () => ({
    loading: false,
  }),
  mutations: {
    trueLoading(state) {
      state.loading = true;
    },
    falseLoading(state) {
      state.loading = false;
    },
  },
  actions: {
    setTrueLoading({ commit, state }) {
      commit('trueLoading');
      console.log(state.loading);
    },
    setFalseLoading({ commit, state }) {
      commit('falseLoading');
      console.log(state.loading);
    },
    simulatedLoading({ commit }) {
      commit('trueLoading');
      setTimeout(() => {
        commit('falseLoading');
      }, 1000);
    },
  },
};
