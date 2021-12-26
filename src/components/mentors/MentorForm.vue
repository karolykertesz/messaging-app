<template>
  <form @submit.prevent="formSubmit">
    <div class="form-control">
      <label for="firstName">
        <input type="text" id="firstName" v-model.trim="firstName" />
      </label>
    </div>
    <div class="form-control">
      <label for="lastName">
        <input type="text" id="lastName" v-model.trim="lastName" />
      </label>
    </div>
    <div class="form-control">
      <label for="description">
        <textarea
          id="description"
          rows="15"
          v-model.trim="description"
        ></textarea>
      </label>
    </div>
    <div class="form-control">
      <label for="rate">Your Rate </label>
      <input type="number" id="rate" v-model.number="rate" />
    </div>
    <div class="form-control">
      <h3>Areas to be checked</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input type="checkbox" id="beckend" value="beckend" v-model="areas" />
        <label for="beckend">BeckEnd development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career</label>
      </div>
    </div>
    <base-button> Register </base-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    formSubmit() {
      const DTO = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(DTO);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}
input,
textarea::placeholder {
  background-color: rgba(83, 235, 78, 0.023);
}
input:focus,
textarea:focus {
  background-color: fff;
  outline: none;
  border-color: rgba(83, 235, 78, 0.68);
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: rgba(83, 235, 78, 0.68) solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
