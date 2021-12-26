import { createStore } from 'vuex';
import mentorsModule from './modules/mentors/index.js';
import requestModule from './modules/request/index.js';
const store = createStore({
  modules: {
    mentors: mentorsModule,
    request: requestModule,
  },
  state() {
    return {
      useId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.useId;
    },
  },
});

export default store;
