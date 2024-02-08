<template>
    <main id="main_EndingPage">
        <div class="ending-page-container">
            <h2>Vous êtes <span>la main divine</span></h2>
            <p>
                Grâce à vos choix vous avez réussi à sauver Maria et l’avez même bénie : un enfant est né, symbolisant l’acceptation divine. Vous êtes libre de
                rentrer chez vous.
            </p>
            <button @click="updateCurrentPage(pages.HOME_PAGE)" class="button-primary">Retourner dans le passé</button>
        </div>
    </main>
</template>

<script setup>
import { pages } from '@/assets/js/config.js'
import { useStore } from '@/assets/js/store.js'

const store = useStore()

const updateCurrentPage = newPage => {
    store.updateCurrentPage(newPage)
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_EndingPage {
    background-image: url('/images/backgrounds/mobile/crystal-ball-off.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    overflow: auto;
    padding: 0 2rem;

    .ending-page-container {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 30rem;
        margin: auto;
        width: 100%;

        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 1rem;

            span {
                font-size: 1.5rem;
                font-style: italic;
            }
        }

        p {
            font-size: 1rem;
            line-height: normal;
        }

        .button-primary {
            margin-top: 4rem;
        }
    }
}
</style>
