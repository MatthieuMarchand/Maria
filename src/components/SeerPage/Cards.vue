<template>
    <div ref="cardsContainer" id="cards">
        <img class="card" v-for="card in displayedCards()" @click="handleCardClick(card)" :key="card.id" :id="card.id" :src="card.src" :alt="card.alt" />
    </div>

    <WindowChoice :disabled-window-choice="disabledWindowChoice" :remove-active-card-classes="removeActiveCardClasses" ref="windowChoiceRef" />
</template>

<script setup>
import { ref } from 'vue'
import { cards } from '@/assets/js/config.js'
import WindowChoice from '@/components/SeerPage/WindowChoice.vue'
import { useStore } from '@/assets/js/store.js'

const windowChoiceRef = ref(null)
const cardsContainer = ref(null)

const displayedCards = () => {
    const screenCardsData = useStore().dataOfScreen
    if (!screenCardsData || !screenCardsData.cards) {
        return []
    }

    const screenCardsIds = screenCardsData.cards.map(card => card.id)
    return cards ? cards.filter(card => screenCardsIds.includes(card.id)) : []
}

function removeActiveCardClasses() {
    const cardsContainerClasses = cardsContainer.value.classList
    while (cardsContainerClasses.length > 0) {
        cardsContainerClasses.remove(cardsContainerClasses.item(0))
    }
}

const handleCardClick = card => {
    const cards = document.querySelectorAll('.card')
    if (useStore().cardClickable) {
        cards.forEach(card => {
            card.style.cursor = 'pointer'
        })

        useStore().setCardSelected(card)
        removeActiveCardClasses()

        cardsContainer.value.classList.add('active-' + card.id)
        windowChoiceRef.value.$el.style.display = 'flex'
    } else {
        cards.forEach(card => {
            card.style.cursor = 'default'
        })
    }
}

const disabledWindowChoice = () => {
    windowChoiceRef.value.$el.style.display = 'none'
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';

%active-card-left {
    transform: rotateZ(-10deg) translate(1rem, 0.8rem);
}

%active-card-right {
    transform: rotateZ(10deg) translate(-1rem, 0.8rem);
}

#cards .card:first-of-type {
    transform: rotateZ(-10deg) translate(1rem, 0.8rem);
    z-index: 0;
}

#cards .card:last-of-type {
    transform: rotateZ(10deg) translate(-1rem, 0.8rem);
    z-index: 1;
}

%active-card {
    z-index: 3;
    position: absolute;
    height: 50svh;
    width: auto;
    transform: translateY(-80svh);
}

#cards {
    bottom: -3.5rem;
    display: flex;
    height: 10rem;
    justify-content: center;
    left: 0;
    position: absolute;
    width: 100%;

    .card {
        transition-duration: 0.4s;
        cursor: pointer;
        width: auto;
        height: 10rem;
    }

    #card-chalice {
        z-index: 1;
    }
}

#cards.cards-active {
    animation: cards_start 0.8s ease-in-out forwards;
    #card-rose {
        animation: card_rose 1s ease-in-out;
    }
    #card-sword {
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
}

@keyframes card_sword {
    0% {
        transform: rotateZ(0) translate(-80%);
    }
    60% {
        transform: rotateZ(0) translate(-80%);
    }
}
</style>
