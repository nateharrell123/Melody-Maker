<template>
    <!-- src="https://magenta.github.io/magenta-js/music/demos/melody.mid" -->
    <div>
        <span class="deliver-message"> 
            <span class="blue"> {{Writer}} </span>
             delivered you: 
            </span>
        <midi-player
        id="media-player"
        class="music-player"
        :src="setMelody"
        sound-font visualizer="#myVisualizer">
        </midi-player>
        <a id="downloadFile" download="new-test.mid" :href="setMelody">Download file </a>
        <!-- <button @click="setLink"> Testing </button> -->
    </div>
</template>

<script>
import 'html-midi-player'
import { mapGetters } from "vuex";

export default {
    name: "MusicPlayer",
    props: {
        Writer: String
    },
    computed: {
        ...mapGetters(["getAssignmentResponse"]),
        setMelody(){
            var str = this.getAssignmentResponse;
            const linkSource = `data:application/midi;base64,${str}`;
            return linkSource
        }
    },
    methods: {
        setLink(){
            const downloadFile = document.getElementById('downloadFile');
            const mediaPlayer = document.getElementById('media-player');

            var str = this.getAssignmentResponse;
            const linkSource = `data:application/midi;base64,${str}`;

            downloadFile.href = linkSource;
            mediaPlayer.src = linkSource;
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