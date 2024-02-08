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

const props = defineProps(['dialogues'])
const count = ref(0)
const currentDialogue = ref(props.dialogues[count.value])

function nextDialogue() {
    if (count.value < props.dialogues.length - 1) {
        count.value++
    } else {
        console.log('Plus de dialogue')
    }
}

onMounted(() => {
    setTimeout(() => {
        currentDialogue.value = props.dialogues[count.value].text
    }, 500)
})

watch(count, () => {
    currentDialogue.value = props.dialogues[count.value].text
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
    max-width: 25rem;
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
