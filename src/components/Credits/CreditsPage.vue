<template>
  <main id="main_CreditsPage">
    <button class="back-icon" onclick=""><img src="/images/icons/chevron-left.svg" alt="back icon"></button>
    <div class="container">

      <div class="credits-container">
        <p class="credits">
          Crédits
        </p>

        <div class="names">
          <span class="name">
            ALEXANDRU Coralie
          </span>
          <span class="name">
            LEFORESTIER Loïc
          </span>
          <span class="name">
            MARCHAND Matthieu
          </span>
          <span class="name">
            MENSAH Hugo
          </span>
          <span class="name">
            REBEYROL Tristan
          </span>
          <span class="name">
            TRAN QUANG Thai-Son
          </span>
        </div>
      </div>
    <div class="logo">
      <span>Une production par</span>
      <img src="/images/logos/mmi-bordeaux-logo.svg" alt="Logo MMI IUT Bordeaux Montaigne">
    </div>
    </div>

  </main>
</template>

<script setup>

</script>

<style lang="scss">
  @import '../../assets/scss/settings';


  #main_CreditsPage {
    background-color: $black-background;


    .back-icon{
      position: absolute;
      z-index: 15;
      top: 2.75rem;
      left: 1rem;
      width: 44px;
      height: 44px;
    }

    .background{
      position: relative;
      width: 100%;
    }
    .container {
      align-items: center;
      background-image: url('/images/pictures/background/background.webp');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      height: 100svh;
      gap: 5rem;
      padding: 2rem 0;
      position: relative;
      box-sizing: border-box;
      z-index: 10;

      .credits-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;



        .credits {
          @include fraunces();
          font-size: 16px;
          text-align: center;
          padding-top: 1.5rem;
          text-decoration-line: underline;
        }

        .names {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: fit-content;
        }
      }

      .logo {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 200px;
          height: auto;
          margin-top: .2rem;
        }
      }
    }
  }

</style>