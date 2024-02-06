<template>
  <HomePage/>
  <CodePage/>
  <PaintingPage/>
  <SeerPage/>
</template>

<script setup>
  import HomePage from '@/components/HomePage/Homepage.vue';
  import CodePage from "@/components/CodePage/CodePage.vue";
  import PaintingPage from "@/components/PaintingPage/PaintingPage.vue";
  import SeerPage from "@/components/SeerPage/SeerPage.vue";
</script>

<style lang="scss">
@import './assets/scss/settings.scss';
</style>