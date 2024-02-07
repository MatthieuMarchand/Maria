<template>
  <main id="main_CodePage">

    <div class="container">
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aspernatur blanditiis distinctio inventore ipsam necessitatibus nisi possimus quae voluptates.</p>
      <img src="/images/museum-maps/map-step-1.webp" alt="plan du musée pour aller au prochain tableau">

      <div id="inputContainer">
        <label for="code-picture">Entrer le code :</label>
        <input name="code-picture" placeholder="Exemple : &nbsp; A1E2T">
        <button class="validate-code">Valider</button>
      </div>
    </div>

    <button class="button-link">
      <span>Je n'ai pas trouvé le code.</span>
    </button>

  </main>

</template>

<script setup>
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_CodePage {
  display: flex;
  justify-content: center;

  .container {
    max-width:30rem;
    background-image: url('/images/pictures/background/backgroundMap.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .text{
      margin: 2rem 2rem 2rem 2rem;
      width: 70%;
    }

    img{ // MAP
      margin: 0 2rem 5rem 2rem;
      width: calc(100% - 4rem);
      border-radius: 1rem;
    }
  }

  .button-link {
    position: absolute;
    bottom: 1rem;
    margin: auto auto;
    width: 100%;

    span{
      font-weight: lighter;
      font-size: 14px;
    }
  }
}

#main_CodePage .container #inputContainer{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 2rem;
  padding-right: 2rem;

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
    border-radius: .5rem;
    box-sizing: border-box;
    text-transform: uppercase;
    &::placeholder {
      text-transform: none;
      color: $placeholder-color;
    }
  }

  .validate-code {
    margin: auto auto;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: .5rem;
    color: $black-background;
    background-color: $yellow-text;
  }
}

</style>