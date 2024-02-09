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

const count = ref(0)

let currentDialogue = ref('Error 404 :(')
let cardsContainer = null
let buttonNext = null
let dialogs = useStore().dataOfScreen.dialogs

function nextDialogue() {
    if (count.value < dialogs.length - 1) {
        count.value++
    } else {
        if (useStore().dataOfScreen.nextScreen) {
            useStore().nextPage()
        } else {
            buttonNext.style.display = "none"
        }
    }
}

const cardsStatus = () => {
  if (dialogs[count.value].with_cards) {
    cardsContainer.style.display = 'flex'
    cardsContainer.classList.add('cards-active')
  } else {
    cardsContainer.style.display = 'none'
  }

  if (dialogs[count.value].not_clickable) {
    useStore().setCardClickable(false)
  } else {
    useStore().setCardClickable(true)
  }
}

onMounted(() => {
    cardsContainer = document.getElementById('cards')
    buttonNext = document.getElementById('button-next')

    currentDialogue.value = dialogs[count.value].text

    cardsStatus()

    if (!useStore().dataOfScreen.nextScreen && count.value <= dialogs.length) {
        buttonNext.style.display = "none"
    }
})

watch(count, () => {
    currentDialogue.value = dialogs[count.value].text
    cardsStatus()
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
