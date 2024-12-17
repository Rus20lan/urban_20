export default {
  namespaced: true,
  state: () => ({
    tasks: [],
  }),
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
    },
    editTask(state, upObj) {
      state.tasks[upObj.index] = upObj.updateTask;
    },
  },
  getters: {
    getTaskById: (state) => (idTask) => {
      return state.tasks.find((task) => task.idTask === idTask);
    },
  },
  actions: {
    actionAddTask({ commit, dispatch }, task) {
      dispatch('loading/setTrueLoading', null, { root: true });
      setTimeout(() => {
        commit('addTask', task);
        const promise = dispatch('loading/setFalseLoading', null, {
          root: true,
        });
        promise.then(() => {
          alert('The task has been successfully saved');
        });
      }, 3000);
    },
  },
};
