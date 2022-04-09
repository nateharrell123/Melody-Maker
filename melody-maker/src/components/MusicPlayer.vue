<template>
    <div>
        <midi-player
        src="https://magenta.github.io/magenta-js/music/demos/melody.mid"
        sound-font visualizer="#myVisualizer">
        </midi-player>

        <midi-visualizer type="piano-roll" id="myVisualizer">
        </midi-visualizer>

    </div>
</template>

<script>
import 'html-midi-player'
export default {
    name: "MusicPlayer"
}
</script>

<style scoped>

</style>