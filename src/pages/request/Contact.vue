<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email"></label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea name="" id="message" rows="3" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formValid">Please correct the input data</p>
    <div class="actions">
      <base-button> Send Message </base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formValid = true;
      if (this.email === '' || !this.email.includes('@')) {
        this.formValid = false;
        return;
      }
      if (this.formValid) {
        this.$store.dispatch('request/addContact', {
          email: this.email,
          message: this.message,
          mentorId: this.$route.params.id,
        });
      }
      this.$router.replace('/mentors');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
