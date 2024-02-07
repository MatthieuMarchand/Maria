<template>
  <div ref="cardsContainer" id="cards">
    <img v-for="card in cards" @click="handleCardClick(card)" :key="card.id" :id="card.id" :src="card.src" :alt="card.alt" class="card">
  </div>

  <WindowChoice
      :disabled-window-choice="disabledWindowChoice"
      :remove-active-card-classes="removeActiveCardClasses"
      ref="windowChoiceRef"
  />

</template>

<script setup>
import { ref } from 'vue';
import { cards } from '/src/assets/js/config.js';
import WindowChoice from "@/components/SeerPage/WindowChoice.vue";

const windowChoiceRef = ref(null);
const cardsContainer = ref(null);

function removeActiveCardClasses() {
  const cardsContainerClasses = cardsContainer.value.classList;
  while (cardsContainerClasses.length > 0) {
    cardsContainerClasses.remove(cardsContainerClasses.item(0));
  }
}

const handleCardClick = (card) => {
  removeActiveCardClasses();
  cardsContainer.value.classList.add("active-" + card.id);
  windowChoiceRef.value.$el.style.display = 'flex';
};

const disabledWindowChoice = () => {
  windowChoiceRef.value.$el.style.display = 'none';
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';
@mixin transform-card-rose {
  transform: rotateZ(-15deg) translate(2rem, 1rem);
}
@mixin transform-card-sword {
  transform: rotateZ(15deg) translate(-2rem, 1rem);
}
%active-card-left {
  transform: rotateZ(-10deg) translate(.2rem, 1rem);
}
%active-card {
  z-index: 3;
  position: absolute;
  bottom: 0;
  width: 50%;
  transform: translateY(calc(-100svh + -1.5rem + 100% + 1.5rem)); // modifier le dernier nombre pour rajouter de la margin-top
  max-width: 240px;
}
%active-card-right {
  transform: rotateZ(10deg) translate(-.2rem, 1rem);
}

#cards {
  position: absolute;
  bottom: -1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: cards_start .8s ease-in-out;
  .card {
    transition-duration: .4s;
    cursor: pointer;
    width: 86px;
  }

  #card-rose {
    @include transform-card-rose;
    animation: card_rose 1s ease-in-out;
  }
  #card-chalice {
    z-index: 1;
  }
  #card-sword {
    z-index: 1;
    @include transform-card-sword;
    animation: card_sword 1s ease-in-out;
  }
}

#cards.active-card-rose {
  #card-chalice {
    @extend %active-card-left;
  }
  #card-rose {
    @extend %active-card;
  }
  #card-sword {
    @extend %active-card-right;
  }
}
#cards.active-card-chalice {
  #card-rose {
    @extend %active-card-left;
  }
  #card-chalice {
    @extend %active-card;
  }
  #card-sword {
    @extend %active-card-right;
  }
}
#cards.active-card-sword {
  #card-rose {
    @extend %active-card-left;
  }
  #card-sword {
    @extend %active-card;
  }
  #card-chalice {
    @extend %active-card-right;
  }
}

// ------ keyframes ------
@keyframes cards_start {
  from {
    transform: translateY(80%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes card_rose {
  0% {
    transform: rotateZ(0) translate(80%);
  }
  60% {
    transform: rotateZ(0) translate(80%);
  }
  100% {
    @include transform-card-rose;
  }
}
@keyframes card_sword {
  0% {
    transform: rotateZ(0) translate(-80%);
  }
  60% {
    transform: rotateZ(0) translate(-80%);
  }
  100% {
    @include transform-card-sword;
  }
}
</style>
