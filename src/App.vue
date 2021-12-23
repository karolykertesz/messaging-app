<template>
  <the-header></the-header>
  <router-view></router-view>
</template>
<script>
import TheHeader from './components/basecomponents/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgba(204, 204, 204, 0.105);
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>
