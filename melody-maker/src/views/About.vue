<template>
  <div class="title">
    <HowItWorksTitle
    style="padding-bottom:30px;" />
      <b-row>
        <b-col cols="1" />
        <b-col cols="10">
          <b-card class="content-card">
            <h1 class="content-card-text-title">
              How it works:
            </h1>
            <hr class="line" />
            <p class="content-card-text">
              Melodies.io assigns your melody to three "writers/composers":
            </p>
            <ul>
              <li class="content-card-text"> List 1 </li>
            </ul>
          </b-card>
        </b-col>
        <b-col cols="1">
        </b-col>
      </b-row>
  </div>

</template>

<script>
import HowItWorksTitle from "../components/HowItWorksTitle.vue"
export default{
  name: "About",
  components: {
    HowItWorksTitle
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.content-card{
  background: #32363b;
  margin: auto;
  box-shadow: 0 0 30px 5px #111;
}
.content-card-text-title{
  font-family: "Montserrat";
  font-size:50px;
  color: #9AAAAA;
  text-align: center;
}
.content-card-text{
  font-family: "Montserrat";
  font-size:22px;
  color: #9AAAAA;
}
.line{
  border-top: 3px solid white;
  margin-left: 10%;
  margin-right:10%;
}
</style>