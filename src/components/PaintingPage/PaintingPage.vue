<template>
    <main id="main_PaintingPage">
        <div class="painting-page-container">
            <div class="image-container">
                <img :src="'/images/pictures' + useStore().dataOfScreen.img" alt="Les deux fillettes" />
            </div>

            <div class="story">
                <p v-html="useStore().dataOfScreen.story"></p>

                <button @click="useStore().nextPage()" class="button-next">
                    <span v-html="useStore().dataOfScreen.label"></span>
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useStore } from '@/assets/js/store.js'
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_PaintingPage {
    background-image: url('/images/backgrounds/mobile/neutral-bg.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    height: auto;
    min-height: 100svh;
    overflow: hidden;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: unset;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .painting-page-container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        max-width: 30rem;
        margin: auto;
    }

    .image-container {
        position: relative;
        height: fit-content;
    }

    img {
        z-index: 0;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        mask-image: linear-gradient(0deg, rgba(23, 22, 23, 0) 10%, rgba(23, 22, 23, 1) 20%, rgba(23, 21, 23, 1) 98%, rgba(20, 19, 20, 1) 100%);
    }

    .story {
        overflow: auto;
        margin: 1rem;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr;

        p {
            margin-bottom: 1rem;
        }

        i {
            font-style: italic;
        }
    }

    .button-next {
        cursor: pointer;
        margin: 2rem auto;
        padding: 1rem 2rem 1rem 2rem;
        background-color: $yellow-text;
        border-radius: 5px;

        span {
            color: $black-background;
        }
    }
}
</style>
