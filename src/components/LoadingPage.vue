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
    z-index: 1;
    position: absolute;
    background: $black-background;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    animation: LoadingPage_opacity .4s ease-out 1.1s forwards;
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
        animation: LoadingPage_footer_translate .8s ease-out;
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
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    border-bottom: 1px solid $yellow-text;
    animation: LoadingPage_H1After_line .8s ease-out .4s;
}

@keyframes LoadingPage_opacity {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes LoadingPage_H1After_line {
    0% {
        transform: scaleX(0);
        transform-origin: left;
    }
    49.99% {
        transform: scaleX(1);
        transform-origin: left;
    }
    50% {
        transform: scaleX(1);
        transform-origin: right;
    }
    100% {
        transform: scaleX(0);
        transform-origin: right;
    }
}
// @keyframes LoadingPage_H1After_line {
//     from {
//         transform: scaleX(0);
//     }
//     to {
//         transform: scaleX(1);
//     }
// }

@keyframes LoadingPage_footer_translate {
    from {
        opacity: 0;
        transform: translate(0, 80%);
    }
    to {
        opacity: 1;
        transform: translate(0);
    }
}

</style>