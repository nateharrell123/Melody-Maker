<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select">
<div class="form-group" :class="{ 'form-group--error': $v.fieldA.$error }">
    <label class="form__label">Field A</label>
    <input class="form__input" v-model.trim="$v.fieldA.$model"/>
  </div>
  <div class="error" v-if="!$v.fieldA.required">Field A is required.</div>
          </div>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "MelodyCard",
  data() {
    return {
      fieldA: '',
      fieldB: ''
    }
  },
  validations: {
    fieldA: {
      required,
      minLength: minLength(3)
    },
  }
};
</script>

<style scoped>
.container {
  padding-top: 50px;
  transition: opacity 1s;
}
.key-select{
    padding-top:20px;
    padding-left:5px;
}
.card {
  background: #222222;
  height: 500px;
  width: 1200px;
  margin: auto;
}
.melody-form {
  padding-left: 25px;
}
.key-text{
  height:45px;
  font-family: "Montserrat";
  width:155px;
}

#showMe {
  animation: cssAnimation 0s 2s forwards;
  opacity: 0;
}

#fade-card {
  animation: 3s ease 0s normal forwards 1 fadein;
}
.key-title {
  color: white;
  font-family: "Montserrat";
  font-weight: 350;
  font-size: 45px;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>