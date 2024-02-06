<template>
  <main id="main_CodePage">

    <div class="dialogue">
      <div class="dialogue-bubble">
        <p class="dialogue-text">La voyante vous demande de trouver le tableau Paysages avec figures ou Les deux fillettes</p>
      </div>
    </div>

    <img src="/images/museum-maps/mapStep1.webp" alt="plan du musée pour aller au prochain tableau">

    <div id="codeContainer">
      <label for="code">Entrer le code</label>
      <input name="code" class="input-code" placeholder="Exemple : &nbsp; A1E2T">
      <button class="validate-code">Valider</button>
    </div>

    <button class="button-link">
      <span>Vous n'avez pas trouvé le code ?</span>
    </button>

  </main>

</template>

<script setup>

</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_CodePage{
  display: flex;
  flex-direction: column;
  justify-content: center;

  img{ // MAP
    margin: 0 2rem 2rem 2rem;
    width: calc(100% - 4rem);
    border-radius: 1rem;
  }

  .button-link {
    position: absolute;
    bottom: 1rem;
    margin: auto auto;
    width: 100%;
  }
}

#main_CodePage .dialogue {

  .dialogue-bubble{
    position: relative;
    margin: 0 2rem 2rem 2rem;
    background-color: $yellow-text;
    border-radius: 1rem;

    .dialogue-text{
      padding: 1rem;
      @include fraunces($size: 14, $color: $black-background);
    }

    .button-bubble{
      position: absolute;
      right: 0;
      bottom: -1rem;
      align-items: end;
      @include fraunces($size: 24, $color: $black-background);
      background-color: $yellow-text;
      border-radius: 0 0 1rem 1rem;
    }
  }
}

#main_CodePage #codeContainer{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-left: 2rem;
  padding-right: 2rem;

  label {
    margin-bottom: 0.25rem;
    @include fraunces();
    font-size: 18px;
  }

  .input-code {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border: unset;
    color: $black-background;
    background-color: white;
    border-radius: .5rem;
    box-sizing: border-box;
    &::placeholder {
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