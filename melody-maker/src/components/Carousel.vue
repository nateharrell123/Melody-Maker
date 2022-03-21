<template>
<header>
  <div class="container" id="element">
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
    transition: opacity 1s;
}
.card{
    background:#222222;
    height:500px;
    width:1200px;
    margin:auto;
}

#showMe {
  animation: cssAnimation 0s 2s forwards;
  opacity: 0; 
}

#element{
    -webkit-animation: 3s ease 0s normal forwards 1 fadein;
    animation: 3s ease 0s normal forwards 1 fadein;
}

@keyframes fadein{
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
}

@keyframes fadein{
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
}

</style>