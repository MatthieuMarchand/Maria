<template>
    <div class="dialogue">
        <p v-html="currentDialogue"></p>

        <button @click="nextDialogue" id="button-next" class="button-link">
            <span>Suivant</span>
        </button>
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useStore } from '@/assets/js/store.js'
import { pages } from '@/assets/js/config.js'

const count = ref(0)

let currentDialogue = ref('Error 404 :(')
let cards = null
let buttonNext = null
let dialogs = useStore().dataOfScreen.dialogs

function nextDialogue() {
    if (count.value < dialogs.length - 1) {
        count.value++
    } else {
        if (useStore().dataOfScreen.nextScreen) {
            useStore().nextPage(pages.CODE_PAGE, useStore().dataOfScreen.nextScreen)
        } else {
            buttonNext.style.display = "none"
        }
    }
}

onMounted(() => {
    cards = document.getElementById('cards')
    buttonNext = document.getElementById('button-next')

    currentDialogue.value = dialogs[count.value].text

    if (dialogs[count.value].with_cards) {
        cards.style.display = 'flex'
        cards.classList.add('cards-active')
    } else {
        cards.style.display = 'none'
    }

    if (!useStore().dataOfScreen.nextScreen && count.value <= dialogs.length) {
        buttonNext.style.display = "none"
    }
})

watch(count, () => {
    currentDialogue.value = dialogs[count.value].text

    if (dialogs[count.value].with_cards) {
        cards.style.display = 'flex'
        cards.classList.add('cards-active')
    } else {
        cards.style.display = 'none'
    }
})
</script>

<style lang="scss">
@import '../../assets/scss/settings';

.dialogue {
    background: $yellow-text;
    border-radius: 1rem;
    box-sizing: border-box;
    margin: 3rem auto;
    padding: 1rem;
    position: relative;
    max-width: 30rem;
    width: 100%;

    p,
    p * {
        color: $black-background;
    }

    #button-next.button-link {
        bottom: 0;
        position: absolute;
        right: 0;
        transform: translateY(calc(100% + 0.25rem));
        width: auto;
    }
}
</style>
