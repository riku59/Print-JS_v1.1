const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
let slide = 0;
const img = document.querySelector(".banner-img");
const texte = document.querySelector("#banner p");
console.log(slides);
console.log(img);
console.log(texte);
/*étape 2 Ajouter des Event listeners au click */
console.log(slides[slide].image);
arrowLeft.addEventListener("click", () => {
  console.log("clickG");
  /* étape4 , changer les slide */

  slide--;
  if (slide < 0) {
    slide = 4;
    slide--;
  }
  img.src = `./assets/images/slideshow/${slides[slide].image}`;
  texte.innerHTML = slides[slide].tagLine;
  changeDot();
  console.log(slide);
});
arrowRight.addEventListener("click", () => {
  console.log("clickD");
  /* étape 4 , changer les slides */
  slide++;
  if (slide > 3) {
    slide++;
    slide = 0;
  }
  // change le chemin de l'image et du texte au clic en se référent a l'index "slide"
  img.src = `./assets/images/slideshow/${slides[slide].image}`;
  texte.innerHTML = slides[slide].tagLine;
  changeDot();
  console.log(slide);
});

/* étape 3 , ajout des bullet points */

const dotsContainer = document.querySelector(".dots");
/* pour les 4 slides, tu me fait : */
slides.forEach((slide, index) => {
  /*création d'une div*/
  const dot = document.createElement("div");
  /* créer un nouveau noeud dans dotsContainer*/
  dotsContainer.appendChild(dot);
  /* ajoute la classe .dot) */
  dot.classList.add("dot");
});

/* séléctionne les 4 dot, et les mets dans une liste */
const bullet = document.querySelectorAll(".dot");

// étape 4
/* création de la fonction pour le changement de dot séléectionné. la fonction est appelé a chaque clique */
const changeDot = () => {
  bullet.forEach((bullet, index) => {
    /*Chaque point sera renomer bullet avec un index pour les diférencier*/
    /* bascule le point avec la classe dot_selected si son index = au numéro du slide*/
    bullet.classList.toggle("dot_selected", index === slide);
  });
};
changeDot(); /*appelle de la fonction pour que le 1er dot soit affiché */
console.log(bullet);

setInterval(() => {
  slide++;
  if (slide > 3) {
    slide++;
    slide = 0;
  }
  img.src = `./assets/images/slideshow/${slides[slide].image}`;
  texte.innerHTML = slides[slide].tagLine;
  changeDot();
}, 5000);
