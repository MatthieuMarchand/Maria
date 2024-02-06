<template>
  <p class="dialogue">
    {{ currentDialogue }}
    <button @click="nextDialogue" id="button-next" class="button-link">
      <span>Suivant</span>
    </button>
  </p>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps(['dialogues']);
const count = ref(0);
const currentDialogue = ref(props.dialogues[count.value]);

function nextDialogue() {
  if (count.value < props.dialogues.length - 1) {
    count.value++;
  } else {
    console.log("Plus de dialogue");
  }
}

watch(count, () => {
  currentDialogue.value = props.dialogues[count.value];
});

onMounted(() => {
  currentDialogue.value = props.dialogues[count.value];
});
</script>

<style lang="scss">
@import '../assets/scss/settings';

.dialogue {
  position: relative;
  width: calc(100% - 4rem);
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  box-sizing: border-box;
  background: $yellow-text;
  color: $black-background;
  border-radius: 1rem;
  #button-next.button-link {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(calc(100% + .25rem));
    width: auto;
  }
}
</style>