<template>
    <div class="dialogue">
        <p v-html="currentDialogue"></p>

        <button @click="nextDialogue" id="button-next" class="button-link">
            <span>Suivant</span>
        </button>
    </div>
</template>

<script setup>
import { ref, defineProps, watch, onMounted } from 'vue'
import { useStore } from '@/assets/js/store.js'
import { pages } from '@/assets/js/config.js'

const props = defineProps(['dialogues', 'nextScreen'])
const count = ref(0)
let onSeerPageBase = false
let currentDialogue = ref('Error 404 :(')

let cards = null
let buttonNext = null

function nextDialogue() {
    if (count.value < props.dialogues.length - 1) {
        count.value++
    } else {
        // buttonNext.style.display = "none"
        useStore().updatePage(pages.CODE_PAGE, useStore().dataOfScreen.nextScreen)
    }
}

onMounted(() => {
    cards = document.getElementById('cards')
    buttonNext = document.getElementById('button-next')

    if (useStore().dataOfScreen.type === 'SeerPageBase') {
        onSeerPageBase = true
        currentDialogue.value = props.dialogues[count.value].text
    } else {
        onSeerPageBase = false
        currentDialogue.value = props.dialogues[count.value]
    }

    if (onSeerPageBase) {
        cards.style.display = 'none'
    } else {
        cards.style.display = 'flex'
        cards.classList.add('cards-active')
    }
})

watch(count, () => {
    if (onSeerPageBase) {
        currentDialogue.value = props.dialogues[count.value].text
        if (props.dialogues[count.value].with_cards) {
            cards.style.display = 'flex'
            cards.classList.add('cards-active')
        }
    } else {
        currentDialogue.value = props.dialogues[count.value]
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
