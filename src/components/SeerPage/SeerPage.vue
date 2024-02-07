<template>
    <main id="main_SeerPage">
        <Dialogue :v-if="dialoguesLoaded" :dialogues="dialogues" />
        <img id="seer" src="/images/seer.svg" alt="La voyante" />

        <div id="table"></div>

        <Cards />
    </main>
</template>

<script setup>
import Cards from '@/components/SeerPage/Cards.vue'
import Dialogue from '@/components/SeerPage/Dialogue.vue'
import { fetchData } from '@/assets/js/config.js'
import { ref } from 'vue'

let dialogues = []
let dialoguesLoaded = ref(false)

const getDialogues = async () => {
    await fetchData()
        .then(data => {
            data.screens[0].dialogs.forEach(dialog => {
                dialogues.push(dialog)
            })
        })
        .then(() => {
            dialoguesLoaded = ref(true)
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error)
            dialogues = ['Erreur 404 :(']
        })
}
getDialogues()
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_SeerPage {
    background-image: url('/images/backgrounds/seer-mouth-open.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    perspective: 4rem;

    #table {
        position: absolute;
        bottom: 0;
        background: #dc5959;
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
