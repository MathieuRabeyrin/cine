<template>
  <header>
    <h2>Ciné+</h2>
  </header>
  <main class="active">
    <video src="../assets/video3.mp4" loop autoplay muted></video>
    <div class="overlay">
      <h1>Films, séries TV et bien plus en illimité.</h1>
      <router-link to="/registration">Cliquez ici pour commencer</router-link>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style scoped>
  header {
    position: absolute;
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  h2 {
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }

  main {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
  }

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .overlay {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    margin: 0;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  a {
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color: #fff;
    padding: 1.5rem;
    margin-top: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    letter-spacing: .2rem;
    border-radius: 3rem;
    box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
  }

  a:hover {
    cursor: pointer;
  }

  h1 {
    font-size: 5rem;
    color: #FFFFFF;
    text-shadow: 3px 5px 2px #474747;
    text-align: center;
  }

  .toggle {
    background: url("../assets/menu.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px;
    position: relative;
    z-index: 2;
    width: 6rem;
    height: 6rem;
  }
</style>
