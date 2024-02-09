<template>
    <main id="main_SeerPage">
        <Dialogue/>
        <Cards/>
    </main>
</template>

<script setup>
import Cards from '@/components/SeerPage/Cards.vue'
import Dialogue from '@/components/SeerPage/Dialogue.vue'
import {useStore} from "@/assets/js/store.js";

console.log(useStore().dataOfScreen)
console.log(useStore().dataOfScreen.cards)
console.log(useStore().dataOfScreen.type)
console.log(useStore().page)
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_SeerPage {
    background-image: url('/images/backgrounds/mobile/seer-mouth-open.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    perspective: 4rem;
    padding: 0 2rem;

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
