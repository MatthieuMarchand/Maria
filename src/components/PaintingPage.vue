<template>
    <main id="main_PaintingPage">
        <div class="image-container">
            <img src="/images/painting1.webp" alt="Les deux fillettes" />
        </div>
        <p class="image-dialog">
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
    </main>
</template>

<script setup></script>

<style lang="scss">
#main_PaintingPage {
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
        position: relative;
        z-index: 20;
        width: 100%;
        height: auto;
        z-index: 0;
    }

    .image-dialog {
        position: relative;
        overflow: auto;
        margin: -2rem 1rem 1rem;
        max-height: 10rem;
        padding: 5rem 2rem 0;
        z-index: 5;
    }
}
</style>
