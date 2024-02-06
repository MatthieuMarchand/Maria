<template>
  <main id="main_Codepage">
    <div class="dialogue">
      <div class="dialogue-bubble">
        <p class="dialogue-text">La voyante vous demande de trouver le tableau Paysages avec figures ou Les deux fillettes</p>
      </div>
    </div>

    <div id="map">
      <img src="/images/MapStep1.webp" alt="plan du musée pour aller au prochain tableau">
    </div>

    <div id="codeContainer">
      <p class="enter-code">Entrer le code</p>
      <input class="input-code" placeholder="AE8XD">
    <button class="button validate">
      Valider
    </button>
    </div>
    <button class="button-link no-code">
      <span>Vous n'avez pas trouvé le code ?</span>
    </button>

  </main>

</template>

<script setup>

</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

#main_Codepage{
  position: relative;

  .dialogue {
    padding-top: 3.5rem;

    .dialogue-bubble{
      margin: 0 2rem 2rem 2rem;
      background-color: $yellow-text;
      border-radius: 1rem;
      position: relative;

      .dialogue-text{
        padding: 1rem;
        @include fraunces();
        color: $black-background;
        font-size: 14px;
      }
    }
  }

  #map {
    margin: 0 2rem 2rem 2rem;

    img{
      width: 100%;
    }
  }

  #codeContainer{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    padding-left: 2rem;
    padding-right: 2rem;

    .enter-code {
      margin-bottom: 0.5rem;
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
      border-radius: 5px;
      box-sizing: border-box;

      &::placeholder {
        color: $placeholder-color;
        font-size: 16px;
      }
    }

    .validate {
      position: absolute;
      bottom: -3rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem 2rem 1rem 2rem;
      border-radius: 5px;

      color: $black-background;
      background-color: $yellow-text;
    }
  }

    .no-code {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
      width: 100%;
    }

}
</style>