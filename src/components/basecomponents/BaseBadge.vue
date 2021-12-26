<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: rgba(83, 235, 78, 0.68);
  color: white;
}
.backend {
  background-color: rgba(5, 40, 4, 0.68);
  color: white;
}

.career {
  background-color: #869b88;
  color: white;
}
</style>
