// Dados dos slides: imagem e texto descritivo (o <p> vem logo após o <img>)
const dadosSlides = [
  {
    src: "../img/img-nago.jpg",
    texto:
      "Nagô — A partir de R$ 45,00. Tranças tradicionais, práticas e cheias de significado cultural.",
  },
  {
    src: "../img/img-box.jpg",
    texto:
      "Box Braids — A partir de R$ 220,00. Clássicas, versáteis e ideais para quem busca durabilidade.",
  },
  {
    src: "../img/img-lock.jpg",
    texto:
      "Locks — A partir de R$ 300,00. Leves, modernas e confortáveis desde a raiz.",
  },
  {
    src: "../img/img-gypsy.jpg",
    texto:
      "Gypsy Braids — A partir de R$ 250,00. Movimento, charme e sofisticação em cada fio.",
  },
];

const containerSlides = document.querySelector(".slides");
containerSlides.innerHTML = dadosSlides
  .map(
    (item, i) => `
    <div class="slide ${i === 0 ? "ativo" : ""}">
        <img src="${item.src}" alt="imagem-${i + 1}">
        <p>${item.texto}</p>
    </div>
`,
  )
  .join("");

let slides = document.querySelectorAll(".slide");
let indice = 0;

function mostrarIndice(novoIndice) {
  slides[indice].classList.remove("ativo");
  indice = (novoIndice + slides.length) % slides.length;
  slides[indice].classList.add("ativo");
}

document
  .querySelector(".next")
  .addEventListener("click", () => mostrarIndice(indice + 1));
document
  .querySelector(".prev")
  .addEventListener("click", () => mostrarIndice(indice - 1));

// Reprodução automática (pausa ao passar o mouse)
let reproducaoAutomatica = setInterval(() => mostrarIndice(indice + 1), 5000);
containerSlides.addEventListener("mouseenter", () =>
  clearInterval(reproducaoAutomatica),
);
containerSlides.addEventListener(
  "mouseleave",
  () =>
    (reproducaoAutomatica = setInterval(() => mostrarIndice(indice + 1), 5000)),
);
