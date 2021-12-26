<template>
  <form @submit.prevent="formSubmit">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName"> First Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.val"
        @blur="clearInput('firstName')"
      />
      <p v-if="!firstName.isValid">First name can't be Empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName"> last Name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearInput('lastName')"
      />
      <p v-if="!lastName.isValid">Last name can't be Empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description"> Description </label>
      <textarea
        id="description"
        rows="15"
        v-model.trim="description.val"
        @blur="clearInput('description')"
      />
      <p v-if="!description.isValid">Description can't be Empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Your Rate </label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearInput('rate')"
      />
      <p v-if="!rate.isValid">Not a valid rate format</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas to be checked</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearInput('areas')"
        />
        <label for="frontend">Frontend development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearInput('areas')"
        />
        <label for="backend">BeckEnd development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearInput('areas')"
        />
        <label for="career">Career</label>
      </div>
      <p v-if="!areas.isValid">At least one area needs to be selected</p>
    </div>
    <p v-if="!formValid">Please fix the Errors!</p>
    <base-button> Register </base-button>
  </form>
</template>
<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formValid: true,
    };
  },
  methods: {
    clearInput(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.formValid = false;
      }
    },
    formSubmit() {
      this.validateForm();
      if (!this.formValid) {
        return;
      }
      const DTO = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', DTO);
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
