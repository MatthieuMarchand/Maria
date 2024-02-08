<template>
    <main id="main_PaintingPage">
        <div class="painting-page-container">
            <div class="image-container">
                <img src="/images/pictures/picture-1/painting1-flower.png" alt="Les deux fillettes" />
            </div>
            <div class="story">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque
                    magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                    minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate
                    voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea
                    hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas
                    voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores
                    doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae
                    voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda
                    dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut
                    velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet
                    assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis
                    sit, ut velit vitae voluptas voluptate voluptatibus.
                </p>

                <button @click="changePage(pages.SEER_PAGE)" class="button-next">
                    <span>Passer au choix</span>
                </button>
            </div>
        </div>
    </main>
</template>

<script setup>
import { pages } from '@/assets/js/config.js'
import { useStore } from '@/assets/js/store.js'
function changePage(nextPage) {
    useStore().updateCurrentPage(nextPage)
}
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
        height: 100svh;
    }

    .image-container {
        position: relative;
        height: fit-content;

        &::after {
            background: linear-gradient(180deg, rgba(23, 22, 23, 0) 0%, rgba(23, 21, 23, 0) 54.5%, #151415 77.5%, #121112 90%, rgba(20, 19, 20, 0) 100%);
            content: '';
            height: 100%;
            width: 100%;
            display: block;
            position: absolute;
            top: 4rem;
            z-index: 10;
        }
    }

    img {
        z-index: 0;
        position: relative;
        width: 100%;
        height: 27rem;
        object-fit: cover;
    }

    .story {
        overflow: auto;
        margin: 2rem 1rem;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr;
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
