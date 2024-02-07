<template>
    <main id="main_LoadingPage">
        <h1>maria</h1>
    </main>
</template>

<script setup></script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_LoadingPage {
    overflow: hidden;
    z-index: 1;
    position: fixed;
    background-image: url('/images/backgrounds/crystal-ball-on.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    animation: LoadingPage_opacity 0.45s ease-out 2.15s forwards;

    h1 {
        position: relative;
        @include fraunces(48, 700);
    }
}

#main_LoadingPage h1::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 62%;
    transform: scaleX(0);
    transform-origin: center left;
    border-bottom: 3px solid $yellow-text;
    animation: LoadingPage_H1After_line 0.8s ease-in-out 0.5s forwards;
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
        transform: scaleX(0);
    }
    100% {
        transform: scaleX(1);
    }
}
</style>
