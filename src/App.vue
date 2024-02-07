<template>

<!--  <div v-if="currentPage === HOME_PAGE">-->
<!--    <HomePage-->
<!--      @update-page="newPage => updatePage(newPage)"-->
<!--    />-->
<!--  </div>-->
<!--  <div v-else-if="currentPage === CODE_PAGE">-->
<!--    <CodePage/>-->
<!--  </div>-->
<!--  <div v-else-if="currentPage === PAINTING_PAGE">-->
<!--    <PaintingPage/>-->
<!--  </div>-->
<!--  <div v-else-if="currentPage === SEER_PAGE">-->
<!--    <SeerPage/>-->
<!--  </div>-->

<!--  <div>-->
<!--    <HomePage-->
<!--        v-if="currentPage === HOME_PAGE"-->
<!--        @update-page="newPage => updatePage(newPage)"-->
<!--    />-->

<!--    <CodePage-->
<!--        v-else-if="currentPage === CODE_PAGE"-->
<!--    />-->

<!--    <PaintingPage-->
<!--    v-else-if="currentPage === PAINTING_PAGE"-->
<!--    />-->

<!--    <SeerPage-->
<!--    v-else-if="currentPage === SEER_PAGE"-->
<!--    />-->
<!--    <CreditsPage-->
<!--        v-else-if="currentPage === CREDITS_PAGE"-->
<!--    />-->
<!--  </div>-->
  <CreditsPage/>

</template>

<script setup>
  import HomePage from '@/components/HomePage/Homepage.vue';
  import CodePage from "@/components/CodePage/CodePage.vue";
  import PaintingPage from "@/components/PaintingPage/PaintingPage.vue";
  import SeerPage from "@/components/SeerPage/SeerPage.vue";
  import CreditsPage from "@/components/Credits/CreditsPage.vue";

  import { ref } from 'vue';

  const HOME_PAGE = "HomePage";
  const CODE_PAGE = "CodePage";
  const PAINTING_PAGE = "PaintingPage";
  const SEER_PAGE = "SeerPage";
  const CREDITS_PAGE = "CreditsPage";


  let currentPage = ref(HOME_PAGE);

  const updatePage = (newPage) => {
    currentPage.value = newPage;
  }
</script>

<style lang="scss">
@import './assets/scss/settings.scss';
</style>