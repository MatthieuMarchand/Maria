<template>
    <main id="main_HomePage">
        <img src="/images/tree-with-door.svg" alt="">
        <div>
            <button class="play">
                <span>lancer le jeu</span>
            </button>
            <button>
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
    animation: HomePage_opacity 1s ease-out 1.5s forwards;
    img {
        position: absolute;
        width: 100%;
        top: 0;
    }
    div {
        position: absolute;
        bottom: calc((100vh - 460px) / 2);
        transform: translate(0, 50%);
        display: flex;
        flex-direction: column;
        width: 100%;
        button span {
            border-bottom: .5px solid;
        }
        button.play {
            margin-bottom: 1rem;
            span {
                @include fraunces(24, 600);
            }
        }
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

</style>