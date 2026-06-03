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


// QUIZ

const caixaPerguntas = document.querySelector(".caixaPerguntas");
const caixaAlternativas = document.querySelector(".caixaAlternativas");
const caixaResultado = document.querySelector(".caixaResultado");
const textoResultado = document.querySelector(".textoResultado");

const perguntas = [

  {
    enunciado: "Você costuma economizar água em casa?",
    alternativas: [
      {
        texto: "Sim",
        afirmacao: "Você contribui para a preservação dos recursos naturais."
      },
      {
        texto: "Não",
        afirmacao: "Você pode adotar hábitos mais sustentáveis."
      }
    ]
  },

  {
    enunciado: "Você separa materiais recicláveis?",
    alternativas: [
      {
        texto: "Sim",
        afirmacao: "Você ajuda a reduzir impactos ambientais."
      },
      {
        texto: "Não",
        afirmacao: "A reciclagem é importante para o meio ambiente."
      }
    ]
  },

  {
    enunciado: "Você acredita que campo e cidade dependem um do outro?",
    alternativas: [
      {
        texto: "Sim",
        afirmacao: "Você entende a importância da relação entre campo e cidade."
      },
      {
        texto: "Não",
        afirmacao: "Vale refletir mais sobre essa conexão."
      }
    ]
  }

];

let perguntaAtual = 0;
let resultadoFinal = "";

function mostrarPergunta() {

  if (!caixaPerguntas) return;

  if (perguntaAtual >= perguntas.length) {

    caixaPerguntas.innerHTML = "<h3>Resultado Final</h3>";

    caixaAlternativas.innerHTML = "";

    textoResultado.textContent = resultadoFinal;

    caixaResultado.style.display = "block";

    return;

  }

  const pergunta = perguntas[perguntaAtual];

  caixaPerguntas.innerHTML = `<h3>${pergunta.enunciado}</h3>`;

  caixaAlternativas.innerHTML = "";

  pergunta.alternativas.forEach((alternativa) => {

    const botao = document.createElement("button");

    botao.textContent = alternativa.texto;

    botao.addEventListener("click", () => {

      resultadoFinal += alternativa.afirmacao + " ";

      perguntaAtual++;

      mostrarPergunta();

    });

    caixaAlternativas.appendChild(botao);

  });

}

mostrarPergunta();