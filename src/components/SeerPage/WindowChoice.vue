<template>
    <main id="main_WindowChoice">
        <p v-if="useStore().cardSelected">{{ useStore().cardSelected.text }}</p>
        <div class="choice-container">
            <button class="button-link play-card" @click="useStore().nextPage(null, useStore().dataOfScreen.cards[0].nextScreen)">
                <span>Jouer la carte</span>
            </button>
            <button @click="disabledMe" class="button-link cancel">
                <span>Annuler</span>
            </button>
        </div>
    </main>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from "@/assets/js/store.js";

const props = defineProps(['disabledWindowChoice', 'removeActiveCardClasses'])

const disabledMe = () => {
    props.disabledWindowChoice()
    props.removeActiveCardClasses()
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';
#main_WindowChoice {
    align-items: center;
    background: rgba($black-background, 0.9);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: none; // flex quand il est actif
    flex-direction: column;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    p {
        margin: 65svh 3rem 3rem;
        max-width: 30rem;
    }

    .choice-container {
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 0;
    }

    .play-card {
        margin-bottom: 1.5rem;

        span {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    .cancel {
        margin-bottom: 2rem;
    }
}
</style>
