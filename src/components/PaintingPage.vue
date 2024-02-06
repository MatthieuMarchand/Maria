<template>
    <main id="main_PaintingPage">

        <div class="image-container">
            <img src="/images/pictures/painting1-deux-petites-filles/painting1-flower.png" alt="Les deux fillettes" />
        </div>

        <div class="dialog">

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo
            perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum
            optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis
            sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet
            assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit
            vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda
            dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas
            voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea
            hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque magnam nemo perferendis sit, ut velit vitae voluptas voluptate
            voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem minus nostrum optio! Ad amet assumenda dolores doloribus ea hic itaque
            magnam nemo perferendis sit, ut velit vitae voluptas voluptate voluptatibus.
          </p>

          <button class="button-next">
            <span>Passer au choix</span>
          </button>

        </div>

    </main>
</template>

<script setup>
</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

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
