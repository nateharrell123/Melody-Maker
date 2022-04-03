<template>
  <div id="app">
    <Title />
    <MelodyCard />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import MelodyCard from "@/components/MelodyCard.vue";

export default {
  name: "App",
  components: {
    Title,
    MelodyCard,
  },
};
</script>

<style>
body {
  background-color: #32363b !important;
}
</style>
