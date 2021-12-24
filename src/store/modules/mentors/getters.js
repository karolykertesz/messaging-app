export default {
  mentors(state) {
    return state.mentors;
  },
  hasMentor(state) {
    return state.mentors && state.mentors.length > 0;
  },
};
