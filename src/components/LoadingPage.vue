<template>
    <main id="main_LoadingPage">
        <h1>maria</h1>
        <footer>
            <p>une production par</p>
            <img src="/images/logos/mmi-bordeaux-logo.svg" alt="Logo du BUT MMI Bordeaux">
        </footer>
    </main>
</template>

<script setup>
</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

#main_LoadingPage {
    overflow: hidden;
    z-index: 1;
    position: fixed;
    background: $black-background;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    animation: LoadingPage_opacity .45s ease-out 2.15s forwards;
    h1 {
        position: relative;
        @include fraunces(48, 700);
    }
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        transform: translate(0, 100%);
        animation: LoadingPage_footer_translate 1s ease-in-out .4s forwards;
        p {
            margin-bottom: .5rem;
        }
        img {
            margin-bottom: 1rem;
        }
    }
}

#main_LoadingPage h1::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 110%;
    height: 62%;
    transform: scaleX(0) translate(-50%);
    transform-origin: -50%;
    border-bottom: 3px solid $yellow-text;
    animation: LoadingPage_H1After_line .8s ease-in-out 1.4s forwards;
}

@keyframes LoadingPage_opacity {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        display: none;
    }
}

@keyframes LoadingPage_H1After_line {
    0% {
        transform: scaleX(0) translate(-50%);
    }
    100% {
        transform: scaleX(1) translate(-50%);
    }
}
// @keyframes LoadingPage_H1After_line {
//     0% {
//         transform: scaleX(0) translate(-50%);
//         transform-origin: -50%;
//     }
//     45% {
//         transform: scaleX(1) translate(-50%);
//         transform-origin: -50%;
//     }
//     55% {
//         transform: scaleX(1) translate(-50%);
//         transform-origin: 100%;
//     }
//     100% {
//         transform: scaleX(0) translate(-50%);
//         transform-origin: 100%;
//     }
// }

@keyframes LoadingPage_footer_translate {
    from {
        transform: translate(0, 100%);
    }
    20% {
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translate(0);
    }
}

</style>