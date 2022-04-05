<template>
  <header>
    <div class="title" id="fade-out" v-if="!hide"> 
      <span id="text">Let's get started.</span>
    </div>
    <div class="title-2" id="fade-in">
      <span id="text-2">Melodies.io </span>
    <!-- <div class="how-it-works">
      how it works:
    </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Title",
  data(){
    return{
      hide: false
    }
  },
  mounted(){
    this.activate()
  },
  methods: {
    activate(){
      setTimeout(() => this.hide = true, 2030)
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 30px;
  font-weight: 550;
  font-family: "Montserrat";
  text-align: center;
  font-size: 75px;
  text-transform: uppercase;
  transition: transform 1s;
}
.how-it-works{
  float:right;
  padding-right:30px;
}
@media only screen and (max-width:600px)
{
  .title-2 {
    font-size:55px !important;
    text-align: center !important;
    padding: 0px !important;
  }
}
.title-2{
  margin-top: 30px;
  font-weight: 550;
  font-family: "Montserrat";
  text-align:left;
  font-size: 75px;
  padding-left:55px;
  transition: transform 1s;
  color:white;
}
#text {
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#text-2{
    background-image: linear-gradient(45deg, #eb1e82, #f88d30);

  background-size: 100%;
  letter-spacing: 5px;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
@keyframes slideInTop {
  0% {
    transform: translateY(700%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  66% {
    opacity: 1;
  }
  100% {
    display:none;
    opacity: 0;
  }
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
#fade-out{
    animation: 3s ease 0s normal forwards 1 fadeout;
}
#fade-in{
    animation: 3s ease 0s normal forwards 1 fadein;
}

header {
  animation: 1s ease-out 0s 1 slideInTop;

}
</style>
