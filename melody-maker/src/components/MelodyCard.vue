<template>
  <header>
    <div class="container" id="fade-card">
      <b-card class="card">
        <div class="melody-form">
          <span class="key-title">What key are we in?</span>
          <div class="key-select">
            <b-row>
              <div
                class="form-group"
                id="key-inner-fields"
                :class="{ 'form-group--error': $v.key.$error || $v.keyModeSelected.$error || $v.measures.$error || $v.chordProgressionSelection.$error }"
              >
                <b-col cols="3">
                  <b-form-input
                    class="form__input"
                    size="md"
                    id="key-input-text"
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
                  <div class="success-text">Key Selected: <span class="success-text-display">{{key.toUpperCase()}} {{keyModeSelected}} </span></div>
                </b-col>
              </div>
            </b-row>
            <!-- section two -->
            <b-row style="melody-form"
              v-if="$v.keyModeSelected.required && 
              $v.key.endCharValidation && 
              $v.key.startCharValidation"
            >
           <span class="key-title">How many measures?</span>
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
                <div style="padding-right: 45px" />

                </b-col>

                <b-col cols="3" />
                <b-col cols="3" />

                <b-col cols="3" class="check-image" v-if="$v.measures.required" style="padding-right:10px">
                  <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
                  href="https://commons.wikimedia.org/wiki/File:Eo_circle_green_checkmark.svg">
                  <img width="55" alt="Eo circle green checkmark" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">
                  </a>
                  <div class="success-text">Measures: <span class="success-text-display">{{measures}}</span></div>
                </b-col>
            </b-row>
            <!-- section three -->
            <!-- <b-row style="melody-form"
              v-if="$v.measures.required"
            >
           <span class="key-title">Should the melody follow a chord progression?</span>
            <div id="key-inner-fields">

            <b-col cols="3">
                  <b-form-select
                    class="form__input"
                    id="key-modes-select"
                    v-model="chordProgressionSelection"
                    :options="chordProgressionOptions"
                  >
                    <template #first>
                      <b-form-select-option
                        id="key-modes-select"
                        :value="null"
                        disabled
                        >Please select an option:</b-form-select-option
                      >
                    </template>
                  </b-form-select>

              <div
                v-if="!$v.chordProgressionSelection.required"
                class="error"
                id="error-message"
              >
                Please select an
                <span class="accent-color"> option. </span>
              </div>
                <div style="padding-right: 45px" />

                </b-col>
                  <b-form-select style="height:30px"
                  v-if="chordProgressionSelection !== 'No'"
                    class="form__input"
                    id="key-modes-select"
                    v-model="chordProgressionSelection"
                    :options="chordProgressionOptions"
                  >
                    <template #first>
                      <b-form-select-option
                        id="key-modes-select"
                        :value="null"
                        disabled
                        >Please select an option:</b-form-select-option
                      >
                    </template>
                  </b-form-select>
                <b-col cols="3" />
                <b-col cols="3" v-if="chordProgressionSelection !== 'Yes'" />

                <b-col cols="3" class="check-image" v-if="$v.chordProgressionSelection.required">
                  <a title="Emoji One, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" 
                  href="https://commons.wikimedia.org/wiki/File:Eo_circle_green_checkmark.svg">
                  <img width="55" alt="Eo circle green checkmark" 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/512px-Eo_circle_green_checkmark.svg.png">
                  </a>
                  <div class="success-text">Chord Progression: <span class="success-text-display">{{measures}}</span></div>
                </b-col>
              </div>
            </b-row> -->
            <div class="melody-create"
              v-if="$v.keyModeSelected.required && 
              $v.key.endCharValidation && 
              $v.key.startCharValidation && $v.measures.required"
            >
              <b-button v-if="!creatingMelody" v-b-modal.modal-1>Create Melody</b-button>

              <b-modal @ok="createMelody" id="modal-1" title="Create your melody">
                <p class="my-4" id="melody-create-text">Create a melody in the key of <span class="accent-color">{{key.toUpperCase()}} {{keyModeSelected}} </span>lasting <span class="accent-color">{{measures}} </span> measures? </p>
              </b-modal>
            </div>
            </div>
            <div v-if="creatingMelody" style="padding-top:30px">
              <span id="melody-create-text" style="padding-right:25px">Creating melody...</span>
              <b-spinner></b-spinner>
            </div>
            <button @click="done">Last thing for tonight </button>
        </div>
      </b-card>
    </div>
  </header>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { bus } from "../main";
import { mapGetters, mapMutations } from "vuex";

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
      keyModes: [
        { value: "Major", text: "Maj" },
        { value: "Minor", text: "Min" },
      ],
      measuresOptions: [1, 2, 4, 8],
      chordProgressionOptions: ["Yes", "No"],
      chordProgressions: []
    };
  },
  methods: {
    ...mapMutations(["setFormValidationSectionOne"]),
    createMelody(){
      this.creatingMelody = true
      console.log('axios post here')
    },
    done(){
      this.creatingMelody = false
    }
  },
  created() {
    bus.$on("StartCharIsValid", (data) => {
      this.startCharValid = data
    });

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
    }
  },
};
</script>

<style scoped>
#key-modes-select {
  font-family: "Montserrat";
  min-height: 40px;
}
.melody-create{
  font-family: "Montserrat";
}
#melody-create-text{
  font-family: "Montserrat";
  font-size:18px;
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
}
.accent-color {
  color: #eb1e82;
}
.key-select {
  padding-top: 20px;
  padding-left: 5px;
}
.card {
  /* background: #222222; */
  background: white;
  min-height: 600px;
  margin: auto;
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
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
