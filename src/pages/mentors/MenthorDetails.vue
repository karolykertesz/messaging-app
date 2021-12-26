<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Intrested? Send me a Message,Now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in selectedArea"
        :key="area"
        :type="area"
        :title="area"
      >
        <p>{{ description }}</p>
      </base-badge>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    fullName() {
      return this.selectedMentor.firstName + ' ' + this.selectedMentor.lastName;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
    selectedArea() {
      return this.selectedMentor.areas;
    },
    rate() {
      return this.selectedMentor.hourlyRate;
    },
    description() {
      return this.selectedMentor.description;
    },
  },
  data() {
    return {
      selectedMentor: null,
    };
  },
  created() {
    this.selectedMentor = this.$store.getters['mentors/mentors'].find(
      (mentor) => mentor.id === this.id
    );
  },
};
</script>
