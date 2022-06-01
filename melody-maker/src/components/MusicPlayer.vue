<template>
    <div>
        <span class="deliver-message"> 
            <span class="blue"> {{getAssignedWriter}} </span>
             delivered you: 
            </span>
        <b-row>
            <b-col cols="3">
                <midi-player
                id="media-player"
                class="music-player"
                :src="setMelody"
                visualizer="#myVisualizer">
                </midi-player>
            </b-col>
        <!-- <div class="inner-div">
 -->
            <b-col style="padding-top:10px; padding-left:50px;" cols="3">
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
        </b-row>
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
            instrumentOptions: ["Synth", "Piano", "Guitar"],
            instrumentSelected: null,
            soundFonts: []
        }
    },
    mounted(){
        this.soundFonts.push("https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus")
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
                console.log("value changed", newVal)
                if (newVal === "Guitar") {
                    inst.forEach(element => {
                        element.program = 1;
                    });
                    console.log(inst)
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