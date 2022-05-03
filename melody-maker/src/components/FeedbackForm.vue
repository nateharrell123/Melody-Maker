<template>
  <b-col cols="5" class="center-col">
    <div style="padding-top: 40px" />
    <div class="form-group" :class="{ 'form-group--error': $v.feedback.$error}">
        <div class="submit-feedback" id="feedback">
        Submit feedback:
        <b-form-input id="enter-feedback" placeholder="Name (optional):"
        v-if="!feedbackSubmitted"
            maxlength="20">
        </b-form-input>
        <div style="padding-bottom: 20px" />
        <b-form-textarea
        v-if="!feedbackSubmitted"
            v-model="feedback"
            class="feedback-form"
            id="enter-feedback"
            placeholder="Enter your feedback: (200 max)"
        >
        </b-form-textarea>
        <div v-else>
            Feedback submitted, thank you!
        </div>
        <div class="error" 
        id="error-message"
        v-if="!$v.feedback.required">
        Field can't be empty.
        </div>
        <div style="padding-top:15px;" />
        <b-button 
        v-if="$v.feedback.required"
        class="button" @click="submitFeedback">Submit Feedback</b-button>
        </div>

    </div>
  </b-col>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
    name: "FeedbackForm",
    data(){
        return{
            feedback: "",
            feedbackSubmitted: false
        }
    },
    methods: {
        submitFeedback(){
            console.log(this.feedback)
            this.feedbackSubmitted = true;
        }
    },
    validations: {
        feedback: {
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