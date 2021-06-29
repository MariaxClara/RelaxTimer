const container = document.querySelector(".container");
const text = document.querySelector("#text");
const tempoTot = 7500;
const tempoRespirar = (tempoTot / 5) * 2;
const tempoSegurar = tempoTot / 5;

animacaoRespirar();

function animacaoRespirar() {
  text.innerHTML = "Inspire!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Segure";

    setTimeout(() => {
      text.innerText = "Expire...";
      container.className = "container shrink";
    }, tempoSegurar);
  }, tempoRespirar);
}

setInterval(animacaoRespirar, tempoTot);
