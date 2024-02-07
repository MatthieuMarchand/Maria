<template>
    <div>
        <HomePage v-if="currentPage === pages.HOME_PAGE" @update-page="newPage => updatePage(newPage)" />

        <div>
            <HomePage v-if="currentPage === pages.HOME_PAGE" />

            <CodePage v-else-if="currentPage === pages.CODE_PAGE" />

            <PaintingPage v-else-if="currentPage === pages.PAINTING_PAGE" />

            <SeerPage v-else-if="currentPage === pages.SEER_PAGE" />

            <CreditsPage v-else-if="currentPage === pages.CREDITS_PAGE" />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/assets/js/store.js'
import { pages } from '/src/assets/js/Enums.js'

import HomePage from '@/components/HomePage/Homepage.vue'
import CodePage from '@/components/CodePage/CodePage.vue'
import PaintingPage from '@/components/PaintingPage/PaintingPage.vue'
import SeerPage from '@/components/SeerPage/SeerPage.vue'
import CreditsPage from '@/components/Credits/CreditsPage.vue'

const currentPage = computed(() => useStore().page)
</script>
