<template>
    <main id="main_HomePage">
        <img src="/images/tree-with-door.svg" alt="Arbre avec une porte à l'intérieur">
        <div>
            <button class="button-link play">
                <span>lancer le jeu</span>
            </button>
            <button class="button-link">
                <span>crédits</span>
            </button>
        </div>
    </main>
</template>

<script setup>
</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

#main_HomePage {
    opacity: 0;
    animation: HomePage_opacity 1.6s ease-out 2.6s forwards;
    img {
        position: absolute;
        width: 100%;
        top: 0;
        scale: 1.02;
        transform: translateY(3%);
        animation: img-floating 1.6s ease-in-out infinite alternate;
    }
    div {
        position: absolute;
        bottom: calc((100svh - 100vw * 1.375) / 2 * 1.1);
        transform: translate(0, 50%);
        display: flex;
        flex-direction: column;
        width: 100%;
        button.play {
            margin-bottom: 1rem;
            span {
                @include fraunces(24, 600);
            }
        }
    }
}

@media (min-width: $max-width-desktop) {
    #main_HomePage div {
        bottom: calc((100svh - $max-width-desktop * 1.375) / 2 * 1.1);
    }
}

@keyframes HomePage_opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes img-floating {
    0% {
        transform: translateY(3%);
    }
    100% {
        transform: translateY(6%);
    }
}

</style>