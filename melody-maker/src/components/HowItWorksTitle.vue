<template>
    <div class="title">
      <button @click="toHome()" id="title-text">melodies.to </button>
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
  font-family: "Montserrat";
  font-size: 75px;
  color:white;
}
#title-text{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  border:none;
  font-weight:700;
  background-size: 100%;
  letter-spacing: 5px;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#title-text:hover{
  background-image: linear-gradient(45deg, #d9428b, #ffb574);
}
</style>
