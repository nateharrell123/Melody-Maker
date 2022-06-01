<template>
  <div>
    <b-row>
      <b-col cols="12">
      <!-- <div class="title-outer">
    <HowItWorksTitle />
        <div class="submit-feedback">
        <button @click="toSubmitFeedback" class="how-it-works">
          Submit Feedback:
        </button>
        </div>
      </div> -->
          <div class="title">
      <span id="title-text" @click="toHome">melodies.to </span>
    <div class="right"> 
    <button @click="toSubmitFeedback" class="how-it-works">
      Submit Feedback:
    </button>
    </div>
    </div>

      </b-col>
        <!-- <b-col cols="6" class="col-fix"> -->
        <!-- </b-col> -->
      <b-col cols="6">
      </b-col>
    </b-row>
      <b-row>
        <b-col cols="1" />
        <b-col cols="10">
          <b-card class="content-card">
            <h1 class="content-card-text-title">
              How it works:
            </h1>
            <hr class="line" />
            <p class="card-title">
              <span class="accent-color-pink">Melodies</span>.<span class="accent-color-orange">to</span> assigns your melody to one of three "writers/composers" :
              <!-- <br/>
              The writers create your MIDI file using the <a href="https://github.com/melanchall/drywetmidi">"DryWetMIDI"</a> library. -->
            </p>
            <hr class="line" />
            <ul>
              <li class="content-card-text-header"> <span class="writer2-text"> Steve </span>
                (ง^ᗜ^)ง
              </li>
            <ul class="content-card-text">
              <span class="accent-color-pink">Steve</span> listens to a 
              <span class="accent-color-red"> LOT </span>
              of arcade video game music.
              Here are some things he enjoys about the genre:
              <ul>
                <li> <span class="accent-color-pink"> Fast paced, high energy melodies </span> </li>
                <li> <span class="accent-color-pink"> Arpeggio-like structure </span> </li>
                <li> <span class="accent-color-pink"> Repetitive patterns </span> </li>

              </ul>
              He builds his melodies using <span class="accent-color-blue">eighth note rhythms</span>, either by 
              randomly pulling from his collection of melodies:
              <body class="code-snippet">
              <code class="prettyprint"> 
                <code>
            <span class="accent-color-blue">int[] </span> phrase1 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 1, 0, 1, 2 };</span> <span class="accent-color-green">// 2, 1, 2, 3 </span>
            <br/>
            <span class="accent-color-green">// ...</span>
            <br/>
                </code>
                <span class="accent-color-pink">pattern</span>.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[phrase1[i]],</span> <span class="accent-color-blue">MusicalTimeSpan</span>.Eighth<span class="accent-color-grey">);</span> 
              </code>
              </body>
              or by randomly placing
              <span class="accent-color-pink"> chord tones </span>
              throughout the melody:
              <br />
              <body class="code-snippet">
              <code class="prettyprint">
               <span class="accent-color-blue">int[]</span> chordTones = <span class="accent-color-blue">new int[4]</span>  <span class="accent-color-grey">{ 0, 2, 4, 7 };</span> <span class="accent-color-green"> // 1, 3, 5, 8</span> <br/>
                pattern.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[chordTones[StaticRandom.Instance.Next(0, 4)]], </span><span class="accent-color-blue">MusicalTimeSpan</span>.Eighth<span class="accent-color-grey">);</span>
              </code>
              </body>
              <span class="accent-color-pink">Steve</span> will produce a <span class="accent-color-pink">"high energy, arpeggio-like"</span> melody, with <span class="accent-color-pink">conjunct phrases</span> being sprinkled in.
            </ul>
            <hr class="line" />
              <li class="content-card-text-header"> <span class="writer1-text">Raphael </span>
                ( ͡° ͜ʖ ͡°)
              </li>
              <ul class="content-card-text">
                <span class="accent-color-blue">Raphael</span>
                listens to a lot of pop music. He understands the use of <span class="accent-color-pink"> motifs </span> 
                and how they can make a melody <span class="accent-color-pink"> catchy</span>.
                He places them wherever the start of a phrase is:
                <body class="code-snippet">
                  <code>
                if <span class="accent-color-grey">(melodyLength % 1 == 0) </span>
                <br/>
                <span class="accent-color-grey">{ </span>
                  <br/>
                  <span style="padding-right:40px;"/>  pattern.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[motif1[i]], length: <span class="accent-color-blue">MusicalTimeSpan</span>.<span class="accent-color-pink">Quarter</span>);</span>
                  <br/>
                <span class="accent-color-grey">}</span>
                  </code>
                </body>
                As for what goes between the phrases, similar to <span class="accent-color-pink">Steve</span>, Raphael has his own arsenal of <span class="accent-color-pink"> conjunct phrases</span>:
            <body class="code-snippet">
              <code>
                <span class="accent-color-blue">int[] </span> phrase1 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 2, 7, 7, 2 };</span>
                <br/>
                <span class="accent-color-blue">int[] </span> phrase2 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 0, 7, 5, 4 };</span>
                <br/>
                <span class="accent-color-blue">int[] </span> phrase3 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 7, 6, 6, 7 };</span>
                <br/>
                <span class="accent-color-blue">int[] </span> phrase4 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 2, 1, 2, 4 };</span>
                <br/>
                <span class="accent-color-green">// ...</span>
              </code>
              </body>
              <!-- He constructs his melodies with either <span class="accent-color-blue"> quarter </span> or <span class="accent-color-blue"> eighth </span> notes. -->
              <span class="accent-color-blue"> Raphael </span>
              will deliver you a <span class="accent-color-blue"> simple, yet catchy </span> melody.
              </ul>
            <hr class="line" />

              <li class="content-card-text-header"> <span class="writer3-text">Jerry </span>
                (¬‿¬)
              </li>
              <ul class="content-card-text">
                <span class="accent-color-orange"> Jerry </span> 
                is a bit more virtuosic compared to <span class="accent-color-pink">Steve</span> & <span class="accent-color-blue">Raphael</span>. Rather than <span class="accent-color-pink">follow repetitive patterns</span>
                or use <span class="accent-color-blue">motifs</span>, <span class="accent-color-orange">Jerry will dictate some of his notes based on what has been placed before: </span>
                <body class="code-snippet">
                  <code>
                    if <span class="accent-color-grey">(noteCounter == 0)</span>
                    <br/>
                    <span class="accent-color-grey">{</span>
                      <br/>
                        <span style="padding-right:35px;"/> pattern.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[phrase1[i]], </span><span class="accent-color-blue">MusicalTimeSpan</span><span class="accent-color-grey">.</span><span class="accent-color-grey"><span class="accent-color-pink">Quarter</span>.</span><span class="accent-color-orange">Dotted</span><span class="accent-color-grey">(<span class="accent-color-green">1</span>));</span>
                      <br/>
                      <span class="accent-color-grey">
                        <span style="padding-right:35px;"/> melodyLength += .375;
                      <br/>
                        <span style="padding-right:35px;"/> noteCounter++;
                    <br/>
                    }
                    <br/>
                    <span class="accent-color-green"> // ... </span>
                    </span>
                  </code>
                </body>
                <span class="accent-color-orange">Jerry</span> will deliver you a more 
                <span class="accent-color-orange">virtuosic</span> melody.
                <br/>
              The writers create your MIDI file using the     
              <button @click="toDryWetMIDI" class="how-it-works">
              <span class="accent-color-pink">DryWetMIDI</span>
              </button> 
                library.
                <br/>
                MIDI Files are played on the web using the <button @click="toMIDIPlayer" class="how-it-works">
                  <span class="accent-color-pink"> HTML MIDI Player </span> </button> library.
              </ul>
            </ul>
          </b-card>
          <FeedbackForm />
      <Footer />
          <b-row>
            <b-col cols="3"/>
          <b-col cols="6">

          </b-col>
          <b-col cols="3"/>
          </b-row>
        </b-col>
        <b-col cols="1">
        </b-col>
      </b-row>
  </div>
</template>

<script>
//import HowItWorksTitle from "../components/HowItWorksTitle.vue"
import FeedbackForm from "../components/FeedbackForm.vue"
import Footer from "../components/Footer.vue"
export default{
  name: "About",
  components: {
    //HowItWorksTitle,
    FeedbackForm,
    Footer
  },
  data(){
    return{
    }
  },
  methods: {
    toSubmitFeedback(){
      document.getElementById("feedback").scrollIntoView();
    },
    toHome(){
      this.$router.push("/")
    },
    toDryWetMIDI(){
      window.open("https://github.com/melanchall/drywetmidi")
    },
    toMIDIPlayer(){
      window.open("https://github.com/cifkao/html-midi-player")
    }
  }
}
</script>
<style scoped>
.socials{
  /* margin:auto; */
}
.right{
  float:right;
  padding-right:15px;
}
.title{
  margin-top: 30px;
  font-weight: 550;
  font-family: "Montserrat";
  letter-spacing:5px;
  font-size: 75px;
  text-transform: lowercase;
}
#title-text{
  background-image: linear-gradient(45deg, #eb1e82, #f88d30);
  cursor:pointer;

  padding-left:55px;
  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
#title-text:hover{
  background-image: linear-gradient(45deg, #d9428b, #ffb574);
}
.title-outer{
  display:inline-block;
}
#enter-key-color{
  background-color:transparent;
  color:#9AAAAA;
}
.col-fix{
  margin:auto;
  text-align: right;
}
.center-col{
  margin:auto;
}
.submit-feedback{
  font-size:32px;
  letter-spacing: 2px;
  color: #9AAAAA;
  padding-right:35px;
}
.how-it-works{
  font-size: 32px;
  padding-bottom:30px;
  color: #9AAAAA;
  background:none;
  outline:none;
  border:none;
}
@media only screen and (max-width:1024px)
{
  .title{
    font-size:55px !important;
    text-align: center !important;
    padding: 0px !important;
  }
  .how-it-works {
    font-size:35px !important;
    text-align: center !important;
    padding: 0px !important;
  }
  .right{
    font-size:35px !important;
    text-align: center !important;
    padding: 0px !important;
    float:none;
    padding-bottom:50px !important;
  }
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
.how-it-works:hover{
  color:#9DDDDD;
}
.content-card{
  background: #32363b;
  margin: auto;
  box-shadow: 0 0 30px 5px #111;
}
.card-title{
  font-family: "Montserrat";
  font-size:36px;
  color: #9AAAAA;
  text-align:center;
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
  font-weight: 380 !important;
  color: #9AAAAA;
}
.content-card-text-header{
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
.accent-color-orange{
    color: #f88d30;
}
.accent-color-grey{
    color: #9AAAAA;
}
.accent-color-green{
  color:rgb(25, 180, 25);
}
.code-snippet{
  margin-right:30%;
  font-size:24px;
}
</style>