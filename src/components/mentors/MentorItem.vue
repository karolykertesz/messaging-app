<template>
  <li>
    <h3>
      {{ fullName }}
    </h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">{{ area }} </span>
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
      type: String,
      required: true,
    },
  },
};
</script>
