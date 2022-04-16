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
        <a id="downloadFile" download="new-test.mid" href="#">Download file </a>

        <button @click="test"> Click me! </button>
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
        test(){
            const downloadFile = document.getElementById('downloadFile');

            var str = JSON.stringify(this.getAssignmentResponse)
            var bytes = new TextEncoder().encode(str)
            var assignmentBlob = new Blob([bytes], {
                type: "application/json;charset=utf-8"
            });
            
            var assignmentObjectURL = URL.createObjectURL(assignmentBlob);

            downloadFile.href = assignmentObjectURL;
            console.log(`url is ${assignmentObjectURL}`)
            console.log(`href is ${downloadFile.href}`)

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