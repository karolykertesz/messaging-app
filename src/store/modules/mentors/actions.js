export default {
  addMentor(context, payload) {
    const mentorData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      areas: payload.areas,
      hourlyRate: payload.rate,
    };
    context.commit('addMentor', mentorData);
  },
};
