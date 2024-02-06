<template>
  <main id="main_Codepage">
    <div class="dialogue">
      <div class="dialogue-bubble">
        <p class="dialogue-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate debitis facilis mollitia necessitatibus nostrum placeat provident ullam, vel veritatis. Alias animi, culpa distinctio eius eligendi fuga iusto nemo quos?</p>
        <button class="button-bubble">Suivant</button>
      </div>
    </div>

    <div id="map">
      <img src="" alt="plan du musée pour aller au prochain tableau">
    </div>

    <div id="codeContainer">
      <p class="enter-code">Entrer le code</p>
      <p class="code">CODE</p>
      <button class="button-link validate">
        Valider
      </button>
    </div>
    <button class="button-link no-code">Pas de code.</button>

  </main>

</template>

<script setup>

</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

#main_Codepage{
  background-color: lightslategray;
  position: relative;
  .dialogue {
    padding: 3.5rem 1rem 0 1rem;
    margin-bottom: 2.25rem;

    .dialogue-bubble{
      background-color: $yellow-text;
      border-radius: 1rem;
      position: relative;

      .dialogue-text{
        padding: 1rem;
        @include fraunces();
        color: $black-background
      }

      .button-bubble{
        position: absolute;
        right: 0;
        bottom: -1rem;
        align-items: end;

        @include fraunces(24, 400, $black-background);
        background-color: $yellow-text;
        border-radius: 0 0 1rem 1rem;

      }
    }
  }

  #map {
    background-color: #2D2D2D;
    margin: 0 1rem 1rem 1rem;
    height: 400px;
    image{

    }

  }

  #codeContainer{
    display: flex;
    flex-direction: column;
    align-items: center;

    .enter-code {
      margin-bottom: 2rem;
    }

    .code {
      color: $black-background;
      padding: 0.5rem;
      padding-right: 8rem;
      background-color: $yellow-text;
      margin-bottom: 1rem;
    }

    .validate {
      color: $black-background;
      padding: 0.5rem;
      background-color: $yellow-text;
    }

  }

    .no-code {
      text-decoration: underline;
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
    }

}
</style>