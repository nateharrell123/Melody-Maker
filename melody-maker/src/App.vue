<template>
  <div id="app">
    <router-view name="title"></router-view>

    <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #222222 !important;
}
</style>
