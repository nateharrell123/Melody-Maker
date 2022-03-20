<template>
<header>
    <div class="title">
        Let's get started.
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
  color: white;
  font-family: 'Montserrat';
  text-align: center;
  font-size:75px;
  text-transform: uppercase;

  transition: transform 1s;
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