<template>
    <LoadingPage />
    <main id="main_HomePage">
        <div class="homepage-tree-container">
            <img src="/images/tree.svg" alt="Arbre avec une porte à l'intérieur" />
        </div>
        <div>
            <button @click="updateCurrentPage(pages.SEER_PAGE)" class="button-link play">
                <span>Ouvrir la porte</span>
            </button>
            <button @click="updateCurrentPage(pages.CREDITS_PAGE)" class="button-link">
                <span>crédits</span>
            </button>
        </div>
    </main>
</template>

<script setup>
import { pages } from '/src/assets/js/config.js'
import LoadingPage from '@/components/HomePage/LoadingPage.vue'
import { useStore } from '/src/assets/js/store.js'

const store = useStore()

const updateCurrentPage = newPage => {
    store.updateCurrentPage(newPage)
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_HomePage {
    animation: HomePage_opacity 1.6s ease-out 1.8s forwards;
    background-image: url('/images/backgrounds/mobile/neutral-bg.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;

    .homepage-tree-container {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        position: relative;
        top: 1rem;
        width: 100%;

        img {
            animation: img-floating 1.6s ease-in-out infinite alternate;
            max-width: 400px;
            width: 100%;
        }
    }

    div {
        bottom: 3rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        height: fit-content;
        position: absolute;
        width: 100%;

        button.play {
            span {
                @include fraunces(24, 600);
                text-transform: lowercase;
            }
        }
    }
}

@keyframes HomePage_opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes img-floating {
    0% {
        transform: translateY(3%);
    }
    100% {
        transform: translateY(6%);
    }
}
</style>
