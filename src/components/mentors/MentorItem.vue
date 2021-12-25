<template>
  <li>
    <h3>
      {{ fullName }}
    </h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }} </span>
    </div>
    <div class="actions">
      <router-link :to="contactLick">Contact</router-link>
      <router-link :to="detailLink">View details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    areas: {
      type: Array,
    },
    rate: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    contactLick() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    detailLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid rgba(83, 235, 78, 0.68);
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
