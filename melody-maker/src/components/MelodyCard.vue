<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title accent-color">What key are we in?</span>
          <div class="key-select">
            <b-row>
              <div
                class="form-group"
                id="key-inner-fields"
                :class="{ 'form-group--error': $v.key.$error || $v.keyModeSelected.$error || $v.measures.$error || $v.chordProgressionSelection.$error
                || $v.bpm.$error }"
              >
                <b-col cols="3">
                  <b-form-input
                    class="form__input"
                    size="md"
                    id="enter-key-color"
                    maxlength="2"
                    placeholder="Enter a key (C, D#, Eb, etc.)"
                    v-model="key"
                  />
              <div
                v-if="!$v.key.startCharValidation"
                class="error"
                id="error-message"
              >
                Key must begin with a letter
                <span class="accent-color">(A-G). </span>
              </div>
              <div
                class="error"
                id="error-message"
                v-if="!$v.key.endCharValidation"
              >
                Key must end with
                <span class="accent-color">'#' (sharp) </span>
                or
                <span class="accent-color"> 'b' (flat).</span>
              </div>
                </b-col>
                <div style="padding-right: 45px" />
                <b-col cols="3">
                  <b-form-select
                    class="form__input"
                    id="key-modes-select"
                    v-model="keyModeSelected"
                    :options="keyModes"
                  >
                    <template #first>
                      <b-form-select-option
                        id="key-modes-select"
                        :value="null"
                        disabled
                        >Maj / Min</b-form-select-option
                      >
                    </template>
                  </b-form-select>
              <div 
                class="error"
                id="error-message"
                v-if="!$v.keyModeSelected.required"
              >
              Key Mode
                <span class="accent-color">is required.</span>
              </div>

                </b-col>
                <b-col cols="3" />
                <b-col cols="3" class="check-image" v-if="$v.keyModeSelected.required && $v.key.endCharValidation && $v.key.startCharValidation">
                  <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
                  href="https://commons.wikimedia.org/wiki/File:Eo_circle_green_checkmark.svg">
                  <img width="55" alt="Eo circle green checkmark" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">
                  </a>
                  <div class="success-text">Key Selected: <span class="success-text-display">{{key}} {{keyModeSelected}} </span></div>
                </b-col>
                
              </div>
            </b-row>
            <!-- section two -->
            <b-row style="melody-form"
              v-if="$v.keyModeSelected.required && 
              $v.key.endCharValidation && 
              $v.key.startCharValidation"
            >
           <span class="key-title accent-color">How many measures/what BPM?</span>
            <b-col cols="3">
                  <b-form-select
                    class="form__input"
                    style="width:50px"
                    id="key-modes-select"
                    v-model="measures"
                    :options="measuresOptions"
                  >
                    <template #first>
                      <b-form-select-option
                        id="key-modes-select"
                        :value="null"
                        disabled
                        >0</b-form-select-option
                      >
                    </template>
                  </b-form-select>
              <div
                v-if="!$v.measures.required"
                class="error"
                id="error-message"
              >
                Measures
                <span class="accent-color"> are required. </span>
              </div>

                </b-col>
                <b-col cols="3" style="padding-left:50px">
                  <b-form-input
                  style="width:100px"
                    class="form__input"
                    size="md"
                    id="enter-key-color"
                    maxlength="3"
                    placeholder="BPM:"
                    v-model="bpm"

                  />
              <div
                v-if="!$v.bpm.required"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> is required. </span>
              </div>
              <div
                v-if="!$v.bpm.numeric"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> must be numeric. </span>
              </div>
              <div
                v-if="!$v.bpm.maxValue"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> can't be more than 220. </span>
              </div>
              <div
                v-if="!$v.bpm.minValue"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> can't be less than 40.</span>
              </div>
                </b-col>

                <b-col cols="3" />

                <b-col cols="3" class="check-image" v-if="$v.measures.required && $v.bpm.required 
                && $v.bpm.numeric && $v.bpm.maxValue && $v.bpm.minValue
                " style="padding-right:10px">
                  <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
                  href="https://commons.wikimedia.org/wiki/File:Eo_circle_green_checkmark.svg">
                  <img width="55" alt="Eo circle green checkmark" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">
                  </a>
                  <div class="success-text">Measures: <span class="success-text-display">{{measures}}</span></div>
                  <div class="success-text">BPM: <span class="success-text-display">{{bpm}}</span></div>

                </b-col>
            </b-row>

            <b-row style="melody-form"
              v-if="$v.keyModeSelected.required && 
              $v.key.endCharValidation && 
              $v.key.startCharValidation
              && $v.measures.required && $v.bpm.required 
                && $v.bpm.numeric && $v.bpm.maxValue && $v.bpm.minValue
              "
            >
            <!-- who's making it -->
           <span class="key-title accent-color">Who's writing it?</span>
            <b-col cols="3">
                  <b-form-select
                    class="form__input"
                    style="width:250px"
                    id="key-modes-select"
                    v-model="writers"
                    :options="writerOptions"
                  >
                    <template #first>
                      <b-form-select-option
                        id="key-modes-select"
                        :value="null"
                        disabled
                        >Choose your writer</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                  <button @click="toHowItWorks" class="how-it-works"> <i>what do you mean who!? </i> </button>
              <div
                v-if="!$v.measures.required"
                class="error"
                id="error-message"
              >
                Measures
                <span class="accent-color"> are required. </span>
              </div>

                </b-col>
                <b-col cols="3" style="padding-left:50px">

              <div
                v-if="!$v.bpm.required"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> is required. </span>
              </div>
              <div
                v-if="!$v.bpm.numeric"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> must be numeric. </span>
              </div>
              <div
                v-if="!$v.bpm.maxValue"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> can't be more than 220. </span>
              </div>
              <div
                v-if="!$v.bpm.minValue"
                class="error"
                id="error-message"
              >
                BPM
                <span class="accent-color"> can't be less than 40.</span>
              </div>
                </b-col>

                <b-col cols="3" />

                <b-col cols="3" class="check-image" v-if="$v.measures.required && $v.bpm.required 
                && $v.bpm.numeric && $v.bpm.maxValue && $v.bpm.minValue && $v.writers.required
                " style="padding-right:10px">
                  <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
                  href="https://commons.wikimedia.org/wiki/File:Eo_circle_green_checkmark.svg">
                  <img width="55" alt="Eo circle green checkmark" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">
                  </a>
                  <div class="success-text">Assigned to: <span class="success-text-display">{{writers}}</span></div>
                </b-col>
            </b-row>
            <div class="melody-create"
              v-if="$v.keyModeSelected.required && 
              $v.key.endCharValidation && $v.bpm.required && $v.bpm.numeric 
              && $v.bpm.maxValue && $v.bpm.minValue && $v.writers.required &&
              $v.key.startCharValidation && $v.measures.required"
            >
              <b-button v-if="!getCreatingMelody" v-b-modal.modal-1>Create Melody</b-button>

              <b-modal @ok="createMelod" id="modal-1" title="Create your melody">
                <p class="my-4" id="melody-create-text">Have <span class="accent-color"> {{writers}} </span> create a melody in the key of <span class="accent-color">{{key.toUpperCase()}} {{keyModeSelected}}
                   </span>lasting <span class="accent-color">{{measures}} </span> measures at <span class="accent-color"> {{bpm}} </span> BPM? 
                </p>
              </b-modal>
            </div>
            </div>
            <div v-if="getCreatingMelody" id="melody-create-text" style="padding-top:30px padding-right:25px">
                Creating melody...
              <b-spinner class="spinner-color"></b-spinner>
            <div>
            </div>
            </div>
            <div v-else-if="getCreatedMelody">
              <MusicPlayer 
              :Writer="writers"
              class="top"/> 
            </div>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required, numeric, maxValue, minValue } from "vuelidate/lib/validators";
// import axios from "axios"
import { bus } from "../main";
import { mapGetters, mapActions, mapMutations } from "vuex";
import MusicPlayer from "./MusicPlayer.vue"

const startCharValidation = (key) => {
  if (!key.charAt(0).match(/^[a-gA-G]+$/)) {
    bus.$emit("StartCharIsValid", false);
    return false;
  } else {
    bus.$emit("StartCharIsValid", true);
    return true;
  }
};

const endCharValidation = (key) => {
  if (key.length > 1) {
    if (key.endsWith("#") || key.endsWith("b")) {
      return true;
    } else {
      bus.$emit("StartCharIsValid", false);
      return false;
    }
  } else {
    return true;
  }
};
export default {
  name: "MelodyCard",
  data() {
    return {
      key: "",
      flag: false,
      val3: "",
      startCharIsValid: false,
      keyModeSelectedIsValid: false,
      keyModeSelected: null,
      measures: null,
      chordProgressionSelection: null,
      chordProgression: null,
      creatingMelody: false,
      melodyCreated: false,
      bpm: null,
      writers: null,
      keyModes: [
        { value: "Major", text: "Maj" },
        { value: "Minor", text: "Min" },
      ],
      measuresOptions: [1, 2, 4, 8, 16],
      writerOptions: ["Steve", "Raphael", "Jerry"],
      chordProgressionOptions: ["Yes", "No"],
      chordProgressions: []
    };
  },
  components:{
    MusicPlayer
  },
  methods: {
    ...mapActions(["createMelody"]),
    ...mapMutations(["setAssignment"]),
    createMelod(){
      
      var assignment = {
        key: this.key,
        keyMode: this.keyModeSelected,
        measures: this.measures,
        bpm: this.bpm,
        writer: this.writers,
      }

      assignment.bpm = Number(assignment.bpm)
      assignment.key.toUpperCase()

      this.setAssignment(assignment)
      this.createMelody()
    },
    done(){
      this.creatingMelody = !this.creatingMelody
    },
    toHowItWorks(){
      this.$router.push("/About")
    }
  },
  created() {
    bus.$on("StartCharIsValid", (data) => {
      this.startCharValid = data
    });

  },
  computed: {
    ...mapGetters(["getCreatingMelody", "getCreatedMelody"]),
  },
  validations: {
    key: {
      required,
      startCharValidation,
      endCharValidation,
    },
    keyModeSelected: {
      required
    },
    measures: {
      required
    },
    chordProgressionSelection: {
      required
    },
    bpm: {
      required,
      numeric,
      maxValue: maxValue(220),
      minValue: minValue(30)
    },
    writers: {
      required
    }
  },
};
</script>

<style scoped>
.top{
  padding-top:15px;
}
@media only screen and (max-width:1000px) {
  .hotfix{
    
  }
}
.how-it-works{
  color: #9AAAAA;
  background:none;
  outline:none;
  border:none;
  white-space:pre;
}
.spinner-color{
  color:#1AAAAA;
}
.how-it-works:hover{
  color:#9DDDDD;
}
.how-it-works::after{
  content:'';
  height:2px;
  width:0%;
  background-color: #1AAAAA;
  display:block;
  transition: .2s ease-in-out;
}
.how-it-works:hover::after{
  content:'';
  height:2px;
  width:100%;
  background-color: #1AAAAA;
  display:block;
}
#key-modes-select {
  font-family: "Montserrat";
  background-color: transparent;
  color: #9AAAAA;
  min-height: 40px;
}
.orange{
  color:#f88d30;
}
#enter-key-color{
  background-color:transparent;
  color:#9AAAAA;
}
.melody-create{
  font-family: "Montserrat";
}
#melody-create-text{
  font-family: "Montserrat";
  font-size:18px;
  color: #9AAAAA;

}
.success-text{
  font-family: "Montserrat";
  overflow-wrap:normal;
  color: #eb1e82;
}
.success-text-display{
  color:#45a04a
}
.check-image{
  text-align:right;
  padding-right:45px;
}
.container {
  /* for animation */
  padding-top: 50px;
  transition: opacity 1s;
}
#key-inner-fields {
  display: flex;
}
#select-columns {
}
#error-message {
  color: #f88d30;
  font-family: "Montserrat";
  font-size: 18px;
  overflow-wrap: normal;
}
.accent-color {
  color: #eb1e82;
  /* color: #f88d30; */
}
.key-select {
  padding-top: 20px;
  padding-left: 5px;
}
.card {
  background: #32363b;
  min-height: 700px;
  margin: auto;
  box-shadow: 0 0 30px 14px #111;
}
.melody-form {
  padding-left: 25px;
}
.key-input-text {
  height: 45px;
  font-family: "Montserrat";
  width: 155px !important;
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
  33% {
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
