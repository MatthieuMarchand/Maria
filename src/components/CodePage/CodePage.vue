<template>
  <main id="main_CodePage">

    <Dialogue class="component-dialogue" :dialogues="dialogues"/>

    <img src="/images/museum-maps/map-step-1.webp" alt="plan du musée pour aller au prochain tableau">

    <div id="inputContainer">
      <label for="code-picture">Entrer le code</label>
      <input name="code-picture" placeholder="Exemple : &nbsp; A1E2T">
      <button class="validate-code">Valider</button>
    </div>

    <button class="button-link">
      <span>Vous n'avez pas trouvé le code ?</span>
    </button>

  </main>

</template>

<script setup>

  import Dialogue from "@/components/Dialogue.vue";

  const dialogues = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aliquam ea eius enim excepturi hic in iusto laborum modi natus nemo odit provident sed sequi sint ullam voluptatem. Harum, velit?",
    "Aliquam, asperiores autem consequatur deleniti dolore ducimus harum incidunt itaque iusto nostrum nulla, officiis quam qui reiciendis reprehenderit unde velit veritatis vero voluptatibus voluptatum? Culpa illum minima numquam quo temporibus!",
    "Accusamus amet atque blanditiis cumque doloremque eius eveniet illum laborum maiores molestiae officiis, suscipit velit voluptate! Commodi ea earum et ipsam minima numquam pariatur quae quam quo quod? Accusantium, debitis.",
  ];
</script>

<style lang="scss">
@import '../../assets/scss/settings';

#main_CodePage{
  display: flex;
  flex-direction: column;
  justify-content: center;

  .component-dialogue {
    margin-bottom: 4rem;
  }

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

#main_CodePage #inputContainer{
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