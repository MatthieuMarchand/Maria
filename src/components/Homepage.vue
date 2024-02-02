<template>
    <main>
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

main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        @include fraunces(48, 700);
    }
}

footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        margin-bottom: .5rem;
    }
    img {
        margin-bottom: 1rem;
    }
}

</style>