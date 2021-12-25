<template>
  <section>Filter</section>
  <section>
    <base-card>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/signup">Register</router-link>
      </div>
      <ul v-if="isMentor">
        <li v-for="mentor in filteredMentors" :key="mentor.id">
          <mentor-item
            :rate="mentor.hourlyRate"
            :areas="mentor.areas"
            :first-name="mentor.firstName"
            :last-name="mentor.lastName"
            :id="mentor.id"
          ></mentor-item>
        </li>
      </ul>
      <h3 v-else>No Mentor is there</h3>
    </base-card>
  </section>
</template>

<script>
import MentorItem from '../../components/mentors/MentorItem.vue';
export default {
  components: {
    MentorItem,
  },
  computed: {
    isMentor() {
      return this.$store.getters['mentors/hasMentor'];
    },
    filteredMentors() {
      return this.$store.getters['mentors/mentors'];
    },
  },
};
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
