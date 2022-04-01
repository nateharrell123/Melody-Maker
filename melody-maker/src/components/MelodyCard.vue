<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select">
            <b-row>
            <div class="form-group" id="key-inner-fields" :class="{ 'form-group--error': $v.key.$error }">
                <b-col cols="3"> 
                  <b-form-input class="form__input" size="md" id="key-input-text" maxlength="2" placeholder="Enter a key (C, D#, Eb, etc.)" v-model="key"/>
                </b-col>
                <div style="padding-right:45px"/>
                <b-col cols="3">
                <b-form-select id="key-modes-select" v-model="keyModeSelected" :options="keyModes">
                  <template #first>
                    <b-form-select-option id="key-modes-select" :value="null" disabled>Maj / Min</b-form-select-option>
                  </template>
                </b-form-select>
                </b-col>
                <b-col cols="3"/>
                <b-col cols="3">
                  NICE WORK
                </b-col>
            </div>
            <div class="error" id="error-message" v-if="!$v.key.startCharValidation">Key must begin with a letter <span class="accent-color">(A-G). </span></div>
            <div class="error" id="error-message" v-if="!$v.key.endCharValidation">Key must end with 
              <span class="accent-color">'#' (sharp) </span>
               or 
                <span class="accent-color"> 'b' (flat).</span> 
            </div>
            </b-row>
            <div v-if="startCharValidation && endCharValidation"> <button @click="me"> Hey </button></div>
          </div>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required, helpers } from 'vuelidate/lib/validators'
import { mapGetters, mapMutations } from 'vuex'

const startCharValidation =
    helpers.withParams(
      { type: 'exampleOne' },
      (key) => {
        if (!key.charAt(0).match(/^[a-gA-G]+$/)) { 
          return false;
        }
        else
        { 
           return true;
        }
      }
     )
const endCharValidation = (key) => {
  if (key.length > 1){
    if (key.endsWith("#") || key.endsWith("b")) {
      return true;
    }
    else {
      return false;
    }
  }
  else 
  {
    return true;
  }
}
export default {
  name: "MelodyCard",
  data() {
    return {
      key: "",
      flag: false,
      val3: "",
      keyModeSelected: null,
      keyModes: [
          { value: 'Major', text: 'Maj' },
          { value: 'Minor', text: 'Min' },
      ]
    }
  },
  methods: {
    ...mapMutations(["setFormValidationSectionOne"]),
    me(){
      console.log(this.val3)
    }
  },
  computed: {
    ...mapGetters(["getFormValidationSectionOne"]),
  },
  validations: {
      key: {
        required,
        startCharValidation,
        // startCharValidation: (value) => {
        //   if (!value.charAt(0).match(/^[a-gA-G]+$/)) { 
        //   return false;
        //   }
        //   else
        //   { 
        //   return true;
        //   }
        // },
        endCharValidation
      },
    }
};
</script>

<style scoped>
#key-modes-select{
    font-family: "Montserrat";
    min-height:40px;
}
.container { /* for animation */
  padding-top: 50px;
  transition: opacity 1s;
}
#key-inner-fields{
  display:flex;
}
#select-columns{

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
/* 
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
} */
</style>