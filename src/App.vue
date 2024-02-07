<template>
    <div>
        <HomePage v-if="currentPage === pages.HOME_PAGE" @update-page="newPage => updatePage(newPage)" />

<<<<<<< HEAD
        <CodePage v-else-if="currentPage === pages.CODE_PAGE" />
=======
  <div>
    <HomePage
        v-if="currentPage === pages.HOME_PAGE"
        @change-page="newPage => changePage(newPage)"
    />
>>>>>>> 6fd41aa (fix)

        <PaintingPage v-else-if="currentPage === pages.PAINTING_PAGE" />

        <SeerPage v-else-if="currentPage === pages.SEER_PAGE" />
        <CreditsPage v-else-if="currentPage === CREDITS_PAGE" />
    </div>
</template>

<script setup>
import { pages } from '/src/assets/js/Enums.js'
import HomePage from '@/components/HomePage/Homepage.vue'
import CodePage from '@/components/CodePage/CodePage.vue'
import PaintingPage from '@/components/PaintingPage/PaintingPage.vue'
import SeerPage from '@/components/SeerPage/SeerPage.vue'
import CreditsPage from '@/components/Credits/CreditsPage.vue'

import { ref } from 'vue'

let currentPage = ref(pages.HOME_PAGE)

const changePage = newPage => {
    currentPage.value = newPage
}
</script>

<style lang="scss">
@import './assets/scss/settings.scss';
</style>
