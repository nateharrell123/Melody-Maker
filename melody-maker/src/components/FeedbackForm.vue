<template>
  <b-col cols="5" class="center-col">
    <div style="padding-top: 40px" />
    <div class="submit-feedback" id="feedback">
      Submit feedback:
      <b-form-input id="enter-feedback" placeholder="Name (optional):">
      </b-form-input>
      <div style="padding-bottom: 20px" />
      <b-form-textarea
        v-model="feedback"
        class="feedback-form"
        id="enter-feedback"
        placeholder="Enter your feedback: (200 max)"
      >
      </b-form-textarea>
      <div style="padding-top:15px;" />
    <b-button class="button" @click="submitFeedback">Submit Feedback</b-button>
    </div>
  </b-col>
</template>

<script>

export default {
    name: "FeedbackForm",
    data(){
        return{
            feedback: ""
        }
    },
    methods: {
        submitFeedback(){
            console.log(this.feedback)
        }
    }
};
</script>

<style scoped>
#enter-feedback{
  background-color:transparent;
  color:#9AAAAA;
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