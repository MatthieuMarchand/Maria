<template>
  <main id="main_Codepage">
    <div class="dialogue">
      <div class="dialogue-bubble">
<<<<<<< HEAD
        <p class="dialogue-text">La voyante vous demande de trouver le tableau Paysages avec figures ou Les deux fillettes</p>
=======
        <p class="dialogue-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cupiditate debitis facilis mollitia necessitatibus nostrum placeat provident ullam, vel veritatis. Alias animi, culpa distinctio eius eligendi fuga iusto nemo quos?</p>
        <button class="button-bubble">Suivant</button>
>>>>>>> 19913fb (Adding code pag and dialogue bubble)
      </div>
    </div>

    <div id="map">
<<<<<<< HEAD
      <img src="/images/MapStep1.webp" alt="plan du musée pour aller au prochain tableau">
=======
      <img src="" alt="plan du musée pour aller au prochain tableau">
>>>>>>> 19913fb (Adding code pag and dialogue bubble)
    </div>

    <div id="codeContainer">
      <p class="enter-code">Entrer le code</p>
<<<<<<< HEAD
      <input class="input-code" placeholder="AE8XD">
    <button class="button validate">
      Valider
    </button>
    </div>
    <button class="button-link no-code">
      <span>Vous n'avez pas trouvé le code ?</span>
    </button>
=======
      <p class="code">CODE</p>
      <button class="button-link validate">
        Valider
      </button>
    </div>
    <button class="button-link no-code">Pas de code.</button>
>>>>>>> 19913fb (Adding code pag and dialogue bubble)

  </main>

</template>

<script setup>

</script>

<style lang="scss">
@import '../assets/scss/settings.scss';

#main_Codepage{
<<<<<<< HEAD
  position: relative;

  .dialogue {
    padding-top: 3.5rem;

    .dialogue-bubble{
      margin: 0 2rem 2rem 2rem;
=======
  background-color: lightslategray;
  position: relative;
  .dialogue {
    padding: 3.5rem 1rem 0 1rem;
    margin-bottom: 2.25rem;

    .dialogue-bubble{
>>>>>>> 19913fb (Adding code pag and dialogue bubble)
      background-color: $yellow-text;
      border-radius: 1rem;
      position: relative;

      .dialogue-text{
        padding: 1rem;
        @include fraunces();
<<<<<<< HEAD
        color: $black-background;
        font-size: 14px;
=======
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

>>>>>>> 19913fb (Adding code pag and dialogue bubble)
      }
    }
  }

  #map {
<<<<<<< HEAD
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
=======
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
>>>>>>> 19913fb (Adding code pag and dialogue bubble)
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
<<<<<<< HEAD
      font-size: 12px;
      width: 100%;
=======
>>>>>>> 19913fb (Adding code pag and dialogue bubble)
    }

}
</style>