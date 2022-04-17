<template>
    <div>
        <span class="deliver-message"> 
            <span class="blue"> {{Writer}} </span>
             delivered you: 
            </span>
        <midi-player
        class="music-player"
        src="https://magenta.github.io/magenta-js/music/demos/melody.mid"
        sound-font visualizer="#myVisualizer">
        </midi-player>
        <a @click="setLink" id="downloadFile" download="new-test.mid" href="#">Download file </a>
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
    },
    methods: {
        setLink(){
            console.log("clicked")
            const downloadFile = document.getElementById('downloadFile');
            var str = this.getAssignmentResponse;
            const linkSource = `data:application/midi;base64,${str}`;
            downloadFile.href = linkSource;
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