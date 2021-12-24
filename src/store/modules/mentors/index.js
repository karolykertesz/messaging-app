import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import mentors from '../../../data/mentors';
export default {
  namespaced: true,
  state() {
    return {
      mentors: mentors,
    };
  },
  mutations,
  actions,
  getters,
};
