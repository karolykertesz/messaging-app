<template>
  <section>
    <base-card>
      <h2>Register</h2>
      <mentor-form @save-data="addData"> </mentor-form>
    </base-card>
  </section>
</template>

<script>
import MentorForm from '../../components/mentors/MentorForm.vue';
export default {
  methods: {
    addData(data) {
      this.$store.dispatch('mentors/addMentor', data);
      this.$router.replace('/mentors');
      // this.$router.push('/mentors');
    },
  },
  components: {
    MentorForm,
  },
};
</script>
