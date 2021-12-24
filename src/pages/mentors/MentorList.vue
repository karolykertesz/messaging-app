<template>
  <section>Filter</section>
  <section>
    <div class="control">
      <button>Refresh</button>
      <router-link to="/signup">Register</router-link>
    </div>
    <ul v-if="isMentor">
      <li v-for="mentor in filteredMentors" :key="mentor.id">
        <mentor-item
          :rate="mentor.hourlyRate"
          :areas="mentor.areas"
        ></mentor-item>
      </li>
    </ul>
    <h3 v-else>No Mentor is there</h3>
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
