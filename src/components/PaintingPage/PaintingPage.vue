<template>
    <main id="main_PaintingPage">

        <div class="image-container">
            <img :src="'/images/pictures/pictures' + useStore().dataOfScreen.img" alt="Les deux fillettes" />
        </div>

        <div class="dialog">

          <p>{{ useStore().dataOfScreen.story }}</p>

          <button @click="useStore().nextPage()" class="button-next">
            <span>{{ useStore().dataOfScreen.label }}</span>
          </button>

        </div>

    </main>
</template>

<script setup>
import { useStore } from "@/assets/js/store.js";
import { defineProps } from 'vue'

const props = defineProps(['trame'])
console.log(props.trame)

function changePage(nextPage) {
  useStore().updateCurrentPage(nextPage)
}
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_PaintingPage {
    box-sizing: border-box;
    max-height: 100vh;
    overflow: hidden;
    padding-bottom: 5rem;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: unset;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5rem;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .image-container {
        position: relative;

        &::after {
            content: '';
            height: 100%;
            width: 100%;
            display: block;
            position: absolute;
            top: 4rem;
            background: linear-gradient(
                180deg,
                rgba(42, 42, 42, 0) 0%,
                rgba(42, 42, 42, 0) 54.5%,
                #2a2a2a 76%,
                #2a2a2a 85.5%,
                rgba(42, 42, 42, 0.68) 90.5%,
                rgba(42, 42, 42, 0.52) 93%,
                rgba(42, 42, 42, 0) 100%
            );
            z-index: 10;
        }
    }

    img {
        z-index: 0;
        position: relative;
        width: 100%;
        height: 27rem;
        object-fit: cover;
    }
    .dialog {
        overflow: auto;
        margin: -2rem 1rem 1rem;
        max-height: 10rem;
        padding: 4rem 1rem 0;
        display: grid;
        grid-template-columns: 1fr;
    }

    .button-next{
      cursor: pointer;
      margin: 2rem auto;
      padding: 1rem 2rem 1rem 2rem;
      background-color: $yellow-text;
      border-radius: 5px;

      span{
        color: $black-background;
      }
    }
}
</style>
