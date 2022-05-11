<template>
  <div>
    <img alt="Vue logo" src="\quizsf.png" />
    <h2 style="color: white">Bem vindo ao Quiz Show do Milhão !</h2>
    <div style="text-align:center;">
      <button class="btn btn-primary" id="btnInit" type="submit">
        INICIAR JOGO
      </button>
    </div>
  </div>
</template>

<script src='./homePage.js'></script>

<style scoped>
img {
  margin-left: 39.5%;
  width: 20%;
  height: 30%;
  position: relative;
  top: 10%;
}
h2 {
  font-size: 24px;
  text-align: center;
  position: relative;
  top: 15%;
}
.btn-primary {
  background-color: rgb(241, 241, 18) !important;
  color: #000 !important;
  margin-top: 10%;
}

.btn-primary:hover {
  background-color: rgb(255, 238, 0) !important;
  color: rgb(29, 26, 26) !important;
}

#btnInit{
    width: 33%;
}

</style>