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
              <li class="content-card-text"> <span class="writer2-text"> Steve </span>
                (ง^ᗜ^)ง
              </li>
            <ul class="content-card-text">
              <!-- <span class="accent-color-pink">Steve</span> plays a 
              <span class="accent-color-red"> LOT </span>
              of arcade video games. He enjoys the <span class="accent-color-pink"> fast paced, high energy </span>
              stuff.
              He favors eighth note rhythms: <br/>
              <code> pattern.Note(key[phrase1[i]], MusicalTimeSpan.Eighth); </code>
              <br />
              and revolving around <span class="accent-color-pink"> chord tones: </span>
              <br />
              <code> int[] chordTones = new int[4] { 0, 2, 4, 7 }; </code>
              <br />
              <code>
                pattern.Note(key[chordTones[StaticRandom.Instance.Next(0, 4)]], MusicalTimeSpan.Eighth);
              </code> -->
              <pre class="prettyprint">class Voila {
<span class="accent-color-blue">public: </span>
  // Voila
  static const string VOILA = "Voila";

  // will not interfere with embedded <a href="#voila2">tags</a>.
}</pre>

            </ul>
            <hr class="line" />
              <li class="content-card-text"> <span class="writer3-text">Jerry </span>
                (¬‿¬)
              </li>
              <li class="content-card-text"> <span class="writer1-text">Raphael </span>
                ( ͡° ͜ʖ ͡°)
              </li>

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
  color: #1AAAAA;
  text-align: center;
}
.content-card-text{
  font-family: "Montserrat";
  font-size:28px;
  color: #9AAAAA;
}
.writer1-text{
  color: #1aaaaa;
  font-size:38px;
}
.writer2-text{
  color: #eb1e82;
  font-size:38px;
}
.writer3-text{
  color: #f88d30;
  font-size:38px;
}
.line{
  border-top: 5px solid;
  color: #9AAAAA;
}
.accent-color-red{
  color:red;
}
.accent-color-blue{
    color: #1AAAAA;
}
.accent-color-pink{
    color: #eb1e82;

}
</style>