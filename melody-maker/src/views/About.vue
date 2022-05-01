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
            <p class="card-title">
              <span class="accent-color-pink">Melodies</span>.<span class="accent-color-orange">io</span> assigns your melody to one of three "writers/composers".
              <br/>
              The writers create your MIDI file using the <a href="https://github.com/melanchall/drywetmidi">"DryWetMIDI"</a> library.
            </p>
            <ul>
              <li class="content-card-text"> <span class="writer2-text"> Steve </span>
                (ง^ᗜ^)ง
              </li>
            <ul class="content-card-text">
              <span class="accent-color-pink">Steve</span> plays a 
              <span class="accent-color-red"> LOT </span>
              of arcade video games. He enjoys the <span class="accent-color-pink"> fast paced, high energy </span>
              stuff.
              He favors eighth note rhythms, either pulling from a set collection:
              <br />
              <body class="code-snippet">
              <code class="prettyprint"> 
                <span class="accent-color-pink">* pattern</span>.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[phrase1[i]],</span> <span class="accent-color-blue">MusicalTimeSpan</span>.Eighth<span class="accent-color-grey">);</span> 
              </code>
              </body>
              or by strategically placing
              <span class="accent-color-pink"> chord tones </span>
              throughout the melody:
              <br />
              <body class="code-snippet">
              <code class="prettyprint">
               * <span class="accent-color-blue">int[]</span> chordTones = <span class="accent-color-blue">new int[4]</span>  <span class="accent-color-grey">{ 0, 2, 4, 7 };</span> <span class="accent-color-green"> // 1, 3, 5, 8</span> <br/>
                * pattern.<span class="accent-color-orange">Note</span><span class="accent-color-grey">(key[chordTones[StaticRandom.Instance.Next(0, 4)]], </span><span class="accent-color-blue">MusicalTimeSpan</span>.Eighth);
              </code>
              </body>
              Steve will produce a <span class="accent-color-pink">"high energy, arpeggio-like"</span> melody, with <span class="accent-color-pink">conjunct phrases</span> being sprinkled in:
              <body class="code-snippet">
                <code>
            <span class="accent-color-blue">int[] </span> phrase1 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 1, 0, 1, 2 };</span>
            <br/>
            <span class="accent-color-blue">int[] </span> phrase2 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 5, 4, 3, 4 };</span>
            <br/>
            <span class="accent-color-blue">int[] </span> phrase3 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 5, 6, 5, 4 };</span>
            <br/>
            <span class="accent-color-blue">int[] </span> phrase4 = <span class="accent-color-blue">new int[4]</span> <span class="accent-color-grey">{ 2, 1, 2, 4 };</span>
            <br/>
            <span class="accent-color-green">// ...</span>
                </code>
              </body>
            </ul>
            <hr class="line" />
              <li class="content-card-text"> <span class="writer1-text">Raphael </span>
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
                As for what goes between the phrases, similar to Steve, Raphael has his own arsenal of <span class="accent-color-pink"> conjunct phrases</span>:
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
                He constructs his melodies with either <span class="accent-color-blue"> quarter </span> or <span class="accent-color-blue"> eighth </span> notes.
              </ul>
              <li class="content-card-text"> <span class="writer3-text">Jerry </span>
                (¬‿¬)
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