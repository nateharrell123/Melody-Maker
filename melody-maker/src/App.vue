<template>
  <div id="app">
    <router-view name="title"></router-view>

    <router-view></router-view> 
  </div>
</template>

<script>
// import Title from "@/components/Title.vue";
// import MelodyCard from "@/components/MelodyCard.vue";

export default {
  name: "App",
  components: {
    // Title,
    // MelodyCard,
  },
};
</script>

<style>
body {
  background-color: #222222 !important;
  /* background-color:white; */
}
</style>
