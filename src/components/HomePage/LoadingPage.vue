<template>
    <main id="main_LoadingPage">
        <h1>maria</h1>
    </main>
</template>

<script setup></script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_LoadingPage {
    align-items: center;
    animation: LoadingPage_opacity 0.4s ease-out 1.5s forwards;
    background-image: url('/images/backgrounds/mobile/crystal-ball-on.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    opacity: 1;
    overflow: hidden;
    position: fixed;
    top: 0;

    h1 {
        position: relative;
        @include fraunces(48, 700);
    }
}

#main_LoadingPage h1::after {
    animation: LoadingPage_H1After_line 1.6s ease-out 0.2s forwards;
    border-bottom: 3px solid $yellow-text;
    content: '';
    display: block;
    height: 62%;
    left: 0;
    position: absolute;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: center left;
    width: 100%;
}

@keyframes LoadingPage_opacity {
    from {
        opacity: 1;
    }
    to {
        display: none;
        opacity: 0;
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
