<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select">
            <div class="form-group" :class="{ 'form-group--error': $v.key.$error }">
                <b-form-input class="form__input" id="key-text" maxlength="2" placeholder="C, D#, Eb, etc." v-model.trim="$v.key.$model"/>
            </div>
            <div class="error" v-if="!$v.key.required">Must have a key (C, D#, Eb, etc.)</div>
            <div class="error" v-if="!$v.key.keyValidate">{{ keyErrorMsg }}</div>
          </div>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: "MelodyCard",
  data() {
    return {
      key: "",
      keyErrorMsg: ""
    }
  },
  methods: {
    keyValidate(key){

      if (key === undefined){
        console.log("key is undefined")
      }
      
      if (key.length > 1){
        if (!key.endsWith("#") || !key.endsWith("b")) {
          return false;
        }
      }
      else if (!key.charAt(0).match(/^[a-hA-H]+$/)){ // has to start with an alphabet character in the musical keys
        this.keyErrorMsg = "Key must start start with a letter (A-G)"
        return false;
      }
      else {
        //console.log("criteria met")
        return true;
      }
    }
  },
  validations() {
    return {
      key: {
        required,
        keyValidate : this.keyValidate(this.key),
      },
    }
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