<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select" style="width: 375px;">
            <div class="form-group" :class="{ 'form-group--error': $v.key.$error }">
                <b-form-input class="form__input" id="key-input-text" maxlength="2" placeholder="Enter a key (C, D#, Eb, etc.)" v-model.trim="$v.key.$model"/>
            </div>
            <div class="error" id="error-message" v-if="!$v.key.startCharValidation">Key must begin with a letter <span class="accent-color">(A-G). </span></div>
            <div class="error" id="error-message" v-if="!$v.key.endCharValidation">Key must end with 
              <span class="accent-color">'#' (sharp) </span>
               or 
                <span class="accent-color"> 'b' (flat).</span> 
            </div>
          </div>
          <button @click="me"> click </button>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

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
    me(){
      // console.log(this.$store.state.formValidation.sectionOne)
      console.log(this.getFormValidationSectionOne)
    }
  },
  computed: {
    ...mapGetters(["getFormValidationSectionOne"]),
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
.container { /* for animation */
  padding-top: 50px;
  transition: opacity 1s;
}
#error-message{
  color:#F88D30;
  font-family: "Montserrat";
  font-size:18px;
}
.accent-color{
    color:#EB1E82;
}
.key-select{
    padding-top:20px;
    padding-left:5px;
}
.card {
  /* background: #222222; */
  background:white;
  min-height:600px;
  margin: auto;
}
.melody-form {
  padding-left: 25px;
}
.key-input-text{
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