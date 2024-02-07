<template>
  <main id="main_WindowChoice">

    <p>La rose incarne la vie et le renouveau, offrant espoir et vitalité même dans les moments les plus sombres.</p>

    <button class="button-link play-card">
      <span>Jouer la carte</span>
    </button>

    <button @click="disabledMe" class="button-link cancel">
      <span>Annuler</span>
    </button>

  </main>
</template>

<script setup>
import { defineProps } from 'vue';
const { disabledWindowChoice, removeActiveCardClasses } = defineProps(['disabledWindowChoice', 'removeActiveCardClasses']);
const disabledMe = () => {
  disabledWindowChoice();
  removeActiveCardClasses();
};
</script>

<style lang="scss">
@import '../../assets/scss/settings';
#main_WindowChoice {
  z-index: 2;
  position: relative;
  width: 100%;
  display: none; // flex quand il est actif
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: rgba($black-background, .9);

  p {
    margin: 0 3rem 6rem 3rem;
  }
  .play-card {
    margin-bottom: 1.5rem;

    span{
      @include fraunces();
      font-size: 20px;
      font-weight: 700;

    }
  }
  .cancel {
    margin-bottom: 2rem;
  }
}
</style>