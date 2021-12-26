<template>
  <section>
    <mentor-filter @change-filter="updateFilters"></mentor-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/signup" v-if="!isValidMentor"
          >Register</base-button
        >
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
import MentorFilter from '../../pages/mentors/MentorFilter.vue';
export default {
  components: {
    MentorItem,
    MentorFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isValidMentor() {
      return this.$store.getters['mentors/isMentor'];
    },
    isMentor() {
      return this.$store.getters['mentors/hasMentor'];
    },
    filteredMentors() {
      const mentors = this.$store.getters['mentors/mentors'];
      console.log(mentors);
      return mentors.filter((mentor) => {
        if (this.activeFilters.frontend && mentor.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && mentor.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && mentor.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    updateFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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
