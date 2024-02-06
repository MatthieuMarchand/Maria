<template>
<main id="main_PaintingPage">
  <div class="image-container">
    <img src="/images/painting1.webp" alt="Les deux fillettes">
  </div>
    <p class="image-dialog">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
    </p>
</main>
</template>

<script setup>

</script>

<style lang="scss">
  #main_PaintingPage{
    box-sizing: border-box;
    max-height: 100vh;
    overflow: hidden;
    padding-bottom: 5rem;

    .image-container {
      position: relative;

      &::after {
        content: '';
        height: 100%;
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        mask-image: linear-gradient(180deg, rgba(45, 45, 45, 0) 0%, rgba(45, 45, 45, .5) 50%, rgba(45, 45, 45, 1) 100%);
        z-index: 10;
      }
    }

      img {
        position: relative;
        z-index: 20;
        width: 100%;
        height: auto;
        z-index: 0;
      }

      .image-dialog{
        position: relative;
        margin: 2rem;
        overflow: auto;
        max-height: 10rem;
        z-index: 5;
      }
  }
</style>