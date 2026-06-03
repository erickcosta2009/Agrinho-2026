const elementos = document.querySelectorAll(
  ".texto, .imagem-lateral, .flip-card, .caixa-reflexao"
);

function aparecerNaTela() {

  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {

    const distancia = elemento.getBoundingClientRect().top;

    if (distancia < alturaTela - 100) {
      elemento.classList.add("mostrar");
    }

  });

}

window.addEventListener("scroll", aparecerNaTela);

aparecerNaTela();


// HEADER

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.background = "#f5f2ebee";
  } else {
    header.style.background = "#f5f2eb";
  }

});


// MENU ACESSIBILIDADE

const botaoAcesso = document.getElementById("acessibilidade-btn");

const menuAcesso = document.getElementById("menu-acessibilidade");

botaoAcesso.addEventListener("click", () => {

  if (menuAcesso.style.display === "flex") {
    menuAcesso.style.display = "none";
  } else {
    menuAcesso.style.display = "flex";
  }

});


// FONTE

let tamanhoFonte = 100;

function aumentarFonte() {

  tamanhoFonte += 10;

  document.body.style.fontSize = tamanhoFonte + "%";

}

function diminuirFonte() {

  tamanhoFonte -= 10;

  document.body.style.fontSize = tamanhoFonte + "%";

}


// CONTRASTE

function alternarContraste() {

  document.body.classList.toggle("contraste");

}


// LEITOR

let leituraAtiva = false;

function ativarLeitura() {

  leituraAtiva = !leituraAtiva;

  if (leituraAtiva) {

    alert("Passe o mouse sobre os textos.");

  } else {

    speechSynthesis.cancel();

  }

}

document.addEventListener("mouseover", (evento) => {

  if (!leituraAtiva) return;

  const texto = evento.target.innerText;

  if (texto && texto.length < 300) {

    speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);

  }

});
