export default {
  addContact(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      mentorId: payload.mentorId,
      userEmail: payload.email,
      userMessage: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};
