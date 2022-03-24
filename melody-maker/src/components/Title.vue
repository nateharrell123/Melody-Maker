<template>
<header>
    <div class="title">
        <span id="text">Let's get started.</span>
    </div>
</header>
</template>

<script>
export default {
    name: "Title",
}
</script>

<style scoped>
.title{
  margin-top:30px;
  font-weight:550;
  font-family: 'Montserrat';
  text-align: center;
  font-size:75px;
  text-transform: uppercase;
  transition: transform 1s;
}
#text{
  background-image: linear-gradient(45deg, #EB1E82, #F88D30);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent; 
}
@keyframes slideInTop {
    0% {
        transform: translateY(700%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

header{
    animation: 1s ease-out 0s 1 slideInTop;
}

</style>