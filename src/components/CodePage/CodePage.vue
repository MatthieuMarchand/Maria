<template>
    <main id="main_CodePage">
        <div class="container">
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aspernatur blanditiis distinctio inventore ipsam necessitatibus nisi
                possimus quae voluptates.
            </p>
            <img src="/images/museum-maps/map-step-1.webp" alt="plan du musée pour aller au prochain tableau" />

            <div id="inputContainer">
                <label for="code-picture">Entrer le code :</label>
                <input name="code-picture" placeholder="Exemple : &nbsp; A1E2T" />
                <button class="button-primary">Valider</button>
            </div>

            <button class="button-link">
                <span>Je n'ai pas trouvé le code.</span>
            </button>
        </div>
    </main>
</template>

<script setup></script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_CodePage {
    background-image: url('/images/backgrounds/mobile/neutral-bg-lights.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    overflow: auto;
    padding: 0 2rem;

    .container {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
        height: 100%;
        max-width: 25rem;
        padding: 2rem 0;
        width: 100%;

        .text {
            max-width: 90%;
        }

        img {
            border-radius: 1rem;
            height: auto;
            object-fit: contain;
            width: 100%;
        }
    }

    .button-link {
        margin: 2rem auto auto;
        width: 100%;

        span {
            font-weight: lighter;
            font-size: 14px;
        }
    }
}

#main_CodePage .container #inputContainer {
    align-items: baseline;
    display: flex;
    flex-direction: column;
    position: relative;

    label {
        margin-bottom: 1rem;
        @include fraunces();
        font-size: 18px;
    }

    input {
        width: 100%;
        margin-bottom: 1rem;
        padding: 1rem;
        border: unset;
        color: $black-background;
        background-color: white;
        border-radius: 0.5rem;
        box-sizing: border-box;
        text-transform: uppercase;

        &::placeholder {
            text-transform: none;
            color: $placeholder-color;
        }
    }
}
</style>
