// =========================
//       SCRIPT.JS
// =========================

// efeito aparecendo suave ao rolar a página

const elementos = document.querySelectorAll(
  ".texto, .imagem-lateral, .flip-card, .caixa-reflexao"
);

function aparecerNaTela() {

  const alturaTela = window.innerHeight;

  elementos.forEach((elemento) => {

    const distanciaTopo = elemento.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela - 100) {

      elemento.classList.add("mostrar");

    }

  });

}

window.addEventListener("scroll", aparecerNaTela);

aparecerNaTela();


// efeito leve no menu quando desce a página

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.background = "#f5f2ebee";
    header.style.backdropFilter = "blur(6px)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

  } else {

    header.style.background = "#f5f2eb";
    header.style.boxShadow = "none";

  }

});