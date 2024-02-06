<template>
  <div ref="cardsContainer" id="cards" class="active-card-chalice">
    <img v-for="card in cards" :key="card.id" :id="card.id" :src="card.src" :alt="card.alt" class="card" @click="handleCardClick(card)">
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cardsContainer = ref(null);

const cards = [
  { id: 'card-rose', src: '/images/cards/card-rose.svg', alt: 'Carte de tarot avec le signe d\'une rose' },
  { id: 'card-chalice', src: '/images/cards/card-rose.svg', alt: 'Carte de tarot avec le signe d\'un calice' },
  { id: 'card-sword', src: '/images/cards/card-rose.svg', alt: 'Carte de tarot avec le signe d\'une épée' }
];

const handleCardClick = (card) => {
  removeClasses(cardsContainer.value);
  cardsContainer.value.classList.add("active-" + card.id);
};

function removeClasses(element) {
  const elementClasses = element.classList;
  while (elementClasses.length > 0) {
    elementClasses.remove(elementClasses.item(0));
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';
%active-card-left {
  transform: rotateZ(-10deg) translate(.2rem, 1rem);
}
%active-card {
  z-index: 3;
  position: absolute;
  bottom: 0;
  width: 10rem;
  transform: translateY(calc(-100svh + -1.5rem + 100% + 1.5rem)); // modifier le dernier nombre pour rajouter de la margin-top
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
  }

  #card-rose {
    transform: rotateZ(-20deg) translate(.8rem, 1rem);
    animation: card_rose 1s ease-in-out;
  }
  #card-chalice {
    z-index: 1;
  }
  #card-sword {
    z-index: 1;
    transform: rotateZ(20deg) translate(-.8rem, 1rem);
    animation: card_sword 1s ease-in-out;
  }

  //#card-rose:hover {
  //  transform: rotateZ(-20deg) translate(.8rem, -.5rem);
  //}
  //#card-chalice:hover {
  //  transform: translateY(-1.5rem);
  //}
  //#card-sword:hover {
  //  transform: rotateZ(20deg) translate(-.8rem, -.5rem);
  //}
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
    transform: rotateZ(-20deg) translate(.8rem, 1rem);
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
    transform: rotateZ(20deg) translate(-.8rem, 1rem);
  }
}
</style>
