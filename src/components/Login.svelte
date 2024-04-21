<script>
  import { CTBLLogo, UMakBackground, UMakLogo } from "../assets/images";
</script>

<div class="__tblutils-main">
  <div class="__tblutils-background">
    <div class="umak-background-overlay"></div>
    <img class="umak-background" src={UMakBackground} alt="" />
  </div>

  <main>
    <section class="__tblutils-login-card">
      <div>
        <div class="__tblutils-logos-text">
          <div class="__tblutils-grouped-logos">
            <img class="__tblutils-logo" src={UMakLogo} alt="" />
            <img class="__tblutils-logo" src={CTBLLogo} alt="" />
          </div>
          <div class="__tblutils-institutional-text">
            <span class="title">university of makati</span>
            <span class="subtitle">center for technology based learning</span>
          </div>
        </div>

        <div class="__tblutils-title">
          <div class="__tblutils-main-text">
            <span class="top-text">Welcome,</span>
            <span class="bottom-text">Herons!</span>
          </div>

          <span class="subtitle"
            >Log-in to the University of Makati - Technology Based Learning Hub</span
          >
        </div>

        <span class="__tblutils-card-footer"
          >Go back to <a href="https://umak.edu.ph">UMak.edu.ph</a></span
        >
      </div>
      <div>Login Things</div>
    </section>
  </main>
</div>

<style lang="scss">
  .__tblutils-main {
    z-index: 20;
    position: absolute;
    width: 100%;
    height: 100%;

    & .__tblutils-grouped-logos {
      display: flex;
      flex-direction: row;

      & > .__tblutils-logo {
        aspect-ratio: square;
        width: 60px;
      }
    }

    & .__tblutils-logos-text {
      display: flex;
      flex-direction: row;

      & > div > .__tblutils-grouped-logos,
      .__tblutils-institutional-text {
        padding: 0 20px;
      }
    }

    & .__tblutils-institutional-text {
      font-family: "Marcellus";
      display: flex;
      flex-direction: column;

      justify-content: center;

      & > .title {
        font-size: large;
        text-transform: uppercase;
      }

      & > .subtitle {
        font-size: small;
        text-transform: capitalize;
      }
    }

    & > main {
      position: relative;
      z-index: 50;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      & > .__tblutils-login-card {
        aspect-ratio: 16/9;
        height: 90%;
        z-index: 15;

        display: flex;
        flex-direction: row;

        & > div:first-child {
          flex: 1;
          padding: 20px 40px;

        background-color: white;
          border-radius: 20px 0 0 20px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;

          & > .__tblutils-card-footer {
            font-family: "Metropolis";
          }

          & > .__tblutils-title {
            & > .__tblutils-main-text {
              line-height: 60px;
              & > .top-text {
                font-weight: 800;
                font-family: "Metropolis";
                text-transform: capitalize;
                font-size: 4em;
              }
              & > .bottom-text {
                font-weight: 800;
                font-family: "Metropolis";
                text-transform: capitalize;
                font-size: 5.5em;
                color: rgba(17, 28, 78, 1);
              }
            }

            & > .subtitle {
              font-family: "Metropolis";
              font-weight: 700;
              font-size: 1.3em;
            }
          }
        }
        & > div:last-child {
          flex: 1.4;
          background: linear-gradient(270deg, #111c4e 0%, #000931 100%);
          border-radius: 0 20px 20px 0;
        }
      }
    }

    & > .__tblutils-background {
      position: absolute;
      width: 100%;
      height: 100%;

      & > .umak-background {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
      }

      & > .umak-background-overlay {
        position: absolute;
        width: 100%;
        height: 100%;

        z-index: 10;

        background-color: rgba(17, 28, 78, 0.7);
      }
    }
  }
</style>
