<template>
    <div class="title">
      <span @click="toHome()" id="title-text">melodies.to </span>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HowItWorksTitle",
  data(){
    return{
      hide: false
    }
  },
  methods: {
    ...mapMutations(["setCreatedMelody"]),
    toHome(){
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
.title{
  margin-top: 30px;
  font-weight: 550;
  font-family: "Montserrat";
  letter-spacing:5px;
  font-size: 75px;
  text-transform: lowercase;
}
@media only screen and (max-width:1000px)
{
  .title {
    font-size:55px;
  }
}
#title-text{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#title-text:hover{
  background-image: linear-gradient(45deg, #d9428b, #ffb574);
}
</style>
