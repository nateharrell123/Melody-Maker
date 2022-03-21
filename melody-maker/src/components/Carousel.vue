<template>
<header>
  <div class="container" id="showMe">
      <b-card class="card">
          <b-select class="">
              <option value="1"> asdfasdf</option>
              <option value="1"> 1 </option>
              <option value="1"> 1 </option>
              <option value="1"> 1 </option>

          </b-select>
      </b-card>
  </div>
</header>
</template>

<script>
export default {

};
</script>

<style scoped>
.container{
    padding-top:50px;

}
.card{
    background:#222222;
    height:500px;
    width:1200px;
    margin:auto;
}

#showMe {
  animation: cssAnimation 0s 1.3s forwards;
  opacity: 0; 
}

@keyframes cssAnimation {
  to   { opacity: 1; }
}
</style>