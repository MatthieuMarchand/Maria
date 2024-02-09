<template>
    <main id="main_CodePage">
        <div class="container">
            <p class="text">Maria te demande de trouver le tableau {{ useStore().dataOfScreen.text }}</p>

            <img :src="'/images/pictures' + useStore().dataOfScreen.img" alt="plan du musée pour aller au prochain tableau" />

            <div id="inputContainer">
                <label for="code-picture">Entrer le code :</label>
                <input ref="inputCode" name="code-picture" placeholder="Exemple : &nbsp; 1423" />
                <button @click="validateCode()" class="button-primary">Valider</button>
            </div>
        </div>

        <button @click="useStore().nextPage()" class="button-link">
            <span>Je n'ai pas trouvé le code.</span>
        </button>
    </main>
</template>

<script setup>
import { useStore } from '@/assets/js/store.js'
import { ref } from 'vue'

const inputCode = ref(null)

const validateCode = () => {
    if (useStore().dataOfScreen.code === inputCode.value.value) {
        useStore().nextPage()
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_CodePage {
    background-image: url('/images/backgrounds/mobile/neutral-bg-lights.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    overflow: auto;
    padding: 0 2rem;

    .text {
        i {
            font-style: italic;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: fit-content;
        max-width: 30rem;
        margin: 0 auto;
        padding: 2rem 0;
        width: 100%;

        .text {
            max-width: 90%;
        }

        img {
            border-radius: 1rem;
            height: auto;
            object-fit: contain;
            width: 100%;
        }
    }

    .button-link {
        margin: auto;
        width: 100%;

        span {
            font-weight: lighter;
            font-size: 14px;
        }
    }
}

#main_CodePage .container #inputContainer {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    position: relative;

    label {
        margin-bottom: 1rem;
        @include fraunces();
        font-size: 18px;
    }

    input {
        background-color: white;
        border: unset;
        border-radius: 0.5rem;
        box-sizing: border-box;
        color: $black-background;
        margin-bottom: 1rem;
        padding: 1rem;
        text-transform: uppercase;
        width: 100%;

        &::placeholder {
            text-transform: none;
            color: $placeholder-color;
        }
    }
}
</style>
