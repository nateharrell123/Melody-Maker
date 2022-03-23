<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select" style="width: 295px;">
            <div class="form-group" :class="{ 'form-group--error': $v.key.$error }">
                <b-form-input class="form__input" id="key-text" maxlength="2" placeholder="Enter a key (C, D#, Eb, etc.)" v-model.trim="$v.key.$model"/>
            </div>
            <div class="error" v-if="!$v.key.startCharValidation">Key must begin with a letter (A-G).</div>
            <div class="error" v-if="!$v.key.endCharValidation">Key doesn't end with # or b.</div>
          </div>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

const startCharValidation = (key) => {
  if (key.indexOf(' ') >= 0) {
    return true;
  }
  else if (!key.charAt(0).match(/^[a-gA-G]+$/)) { 
    console.log("key does not start with a letter or is past G")
    return false;
  }
  else return true;
}

const endCharValidation = (key) => {
  if (key.length > 1){
    if (key.endsWith("#") || key.endsWith("b")) {
      console.log(key, "Key ends with # or b")
      return true;
    }
    else {
      return false;
    }
  }
  else return true;
}

export default {
  name: "MelodyCard",
  data() {
    return {
      key: "",
    }
  },
  methods: {
  },
  validations: {
      key: {
        required,
        startCharValidation,
        endCharValidation
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
  /* background: #222222; */
  background:white;
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
  width:155px !important;
}

#fade-card {
  animation: 3s ease 0s normal forwards 1 fadein;
}
.key-title {
  /* color: white; */
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