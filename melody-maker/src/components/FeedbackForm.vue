<template>
  <b-col cols="5" class="center-col">
    <div style="padding-top: 40px" />
    <div class="form-group" :class="{ 'form-group--error': $v.criticismFormInput.$error}">
        <div class="submit-feedback" id="feedback">
        Submit feedback:
        <b-form-input id="enter-feedback" placeholder="Name (optional):"
        v-model="feedback.name"
        v-if="!feedbackSubmitted"
            maxlength="20">
        </b-form-input>
        <div style="padding-bottom: 20px" />
        <b-form-textarea
        v-if="!feedbackSubmitted"
            v-model="criticismFormInput"
            class="feedback-form"
            id="enter-feedback"
            placeholder="Enter your feedback: (200 max)"
        >
        </b-form-textarea>
        <div v-else class="feedback-submitted-message">
            Feedback submitted, thank you!
        </div>
        <div class="error" 
        id="error-message"
        v-if="!$v.criticismFormInput.required">
        Field can't be empty.
        </div>
        <div style="padding-top:15px;" />
        <b-button 
        v-if="$v.criticismFormInput.required && !feedbackSubmitted"
        class="button" @click="submitFeedbac">Submit Feedback</b-button>
        </div>
    </div>
    <div style="padding-bottom:100px;" />
  </b-col>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions, mapMutations } from "vuex";

export default {
    name: "FeedbackForm",
    data(){
        return{
            feedback: {name: "", criticism: ""},
            criticismFormInput: "",
            feedbackSubmitted: false
        }
    },
    methods: {
        ...mapMutations(["setFeedback"]),
        ...mapActions(["submitFeedback"]),
        submitFeedbac(){
            this.feedback.criticism = this.criticismFormInput; // for vuelidate bug
            this.setFeedback(this.feedback)
            this.submitFeedback()
            this.feedbackSubmitted = true;
        }
    },
    validations: {
        criticismFormInput: {
            required
        }
    }
};
</script>

<style scoped>
#enter-feedback{
  background-color:transparent;
  color:#9AAAAA;
}
.feedback-submitted-message{
    text-align: center;
    font-size:18px;
    color: #9AAAAA;
    letter-spacing: 0;
}
#error-message{
    text-align: left;
    font-size:18px;
    color: #f88d30;
    letter-spacing: 0;
}
.button{
    float:left;
}
.submit-feedback{
  font-size:32px;
  letter-spacing: 2px;
  color: #9AAAAA;
  text-align: center;
}
</style>