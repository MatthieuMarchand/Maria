<template>
  <main id="main_SeerPage">

    <img id="seer" src="/images/seer.svg" alt="La voyante">

    <div id="table"></div>

    <Cards/>

    <WindowChoice/>

  </main>
</template>

<script setup>
  import Cards from './Cards.vue';
  import WindowChoice from './WindowChoice.vue';
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_SeerPage {
  perspective: 4rem;

  #table {
    position: absolute;
    bottom: 0;
    background: #DC5959;
    width: 100%;
    height: 4rem;
    transform: rotateX(80deg);
    scale: 1.1;
  }

  #seer {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
  }

}

</style>