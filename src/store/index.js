import id from '@/modules/id';
import loading from '@/modules/loading';
import theme from '@/modules/settings';
import tasks from '@/modules/tasks';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    id,
    tasks,
    loading,
    theme,
  },
});

export default store;
