<template>
    <div>
        <span class="deliver-message"> 
            <span class="blue"> {{getAssignedWriter}} </span>
             delivered you: 
            </span>
            <div>
        <b-row>
            <b-col cols="3">
                <midi-player
                id="media-player"
                class="music-player"
                :src="setMelody"
                sound-font="https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"
                visualizer="#myVisualizer">
                </midi-player>
            </b-col>
        <!-- <div class="inner-div">
 -->
 <div class="hotfix">
     <div class="hotfix-2" style="padding-left:50px;"/>
            <b-col style="padding-top:10px;" cols="3">
                <b-form-select
                class="form__input"
                id="key-modes-select"
                v-model="instrumentSelected"

                :options="instrumentOptions"
                >
                <template #first>
                    <b-form-select-option
                    id="key-modes-select"
                    :value="null"
                    disabled
                    >Choose an instrument:</b-form-select-option
                    >
                </template>
                </b-form-select>
            </b-col>
 </div>
        </b-row>
        </div>
        <!-- </div> -->
        <a id="downloadFile" download="melodies.io.mid" :href="setMelody">Download file </a>
    </div>
</template>

<script>
import 'html-midi-player'
import { mapGetters } from "vuex";

export default {
    name: "MusicPlayer",
    data(){
        return {
            instrumentOptions: ["Dist. Guitar", "Piano", 
            "Ac. Guitar", "Harpsichord", "Orchestra Hit",
            "Synth", "Strings", "Trumpet", "Sax"
            , "Flute"],
            instrumentSelected: null,
        }
    },
    props: {
        Writer: String,
    },
    computed: {
        ...mapGetters(["getAssignmentResponse" ,"getAssignedWriter"]),
        setMelody(){
            var str = this.getAssignmentResponse;
            const linkSource = `data:application/midi;base64,${str}`;
            return linkSource
        },
    },
    watch: {
        instrumentSelected: {
            handler(newVal) {
                var inst = document.getElementById("media-player").noteSequence.notes;
                if (newVal === "Orchestra Hit") {
                    inst.forEach(element => {
                        element.program = 55;
                    });
                }
                if (newVal === "Trumpet") {
                    inst.forEach(element => {
                        element.program = 56;
                    });
                }
                if (newVal === "Piano") {
                    inst.forEach(element => {
                        element.program = 0;
                    });
                }
                if (newVal === "Dist. Guitar") {
                    inst.forEach(element => {
                        element.program = 30;
                    });
                }
                if (newVal === "Ac. Guitar") {
                    inst.forEach(element => {
                        element.program = 25;
                    });
                }
                if (newVal === "Harpsichord") {
                    inst.forEach(element => {
                        element.program = 6;
                    });
                }
                if (newVal === "Synth") {
                    inst.forEach(element => {
                        element.program = 81;
                    });
                }
                if (newVal === "Strings") {
                    inst.forEach(element => {
                        element.program = 61;
                    });
                }
                if (newVal === "Sax") {
                    inst.forEach(element => {
                        element.program = 65;
                    });
                }
                if (newVal === "Flute") {
                    inst.forEach(element => {
                        element.program = 75;
                    });
                }
            }
        }
    }
}
</script>

<style scoped>
.deliver-message{
    padding-left:5px;
    font-size:20px;
    font-weight: bold;
    letter-spacing: .5px;
  color:#9AAAAA;
}
.hotfix{
    display:contents;
}
@media only screen and (max-width:1024px) {
    .hotfix{
        display:block;
        float:left;
    }
}

.inner-div{
    display:inline-block;
}
#key-modes-select {
  font-family: "Montserrat";
  background-color: transparent;
  color: #9AAAAA;
  min-height: 40px;
}
.music-player{
    display:flex;
}
.blue{
    color: #1AAAAA;
    padding-right:5px; /* Space?? */
}
#downloadFile{
    display:flex;
}
</style>