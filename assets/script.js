const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/* Récupération des espaces des slides */
const imageSlides = document.querySelector(".banner-img");
const textSlides = document.querySelector("#banner p");

/* Mise à 0 du conteur des slides (objet dans le tableau Slides) */
let indexSlides = 0;

/* Fonction de changement de slides et de bullet point */
function changeBanner(indexSlides) {
	imageSlides.src="assets/images/slideshow/" + slides[indexSlides].image;
	textSlides.innerHTML = slides[indexSlides].tagLine;

	const dots = document.querySelectorAll(".dot");
	dots.forEach(dot => {
		dot.classList.remove("dot_selected")
	})
	dots[indexSlides].classList.add("dot_selected")
}

/* Ecoute de chaque flèche */
let arrowLeft = document.querySelector(".arrow_left") ;
	arrowLeft.addEventListener("click" , function() {
		console.log("Vous avez clicker sur la flèche gauche");
		indexSlides-- ;
		if(indexSlides < 0) {
			indexSlides = slides.length - 1;
		}
		changeBanner(indexSlides);
	} )

let arrowRight = document.querySelector(".arrow_right") ;
	arrowRight.addEventListener("click" , function() {
		console.log("Vous avez clicker sur la flèche droite");
		indexSlides++ ;
		if(indexSlides >= slides.length) {
			indexSlides = 0;
		}
		changeBanner(indexSlides);
		} )

/* Faire apparaître le nombre de bullet point dans le fichier*/
let sectionBulletPoint = document.querySelector(".dots") ;
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div") ;
	dot.classList.add("dot") ;
	sectionBulletPoint.appendChild(dot) ;
}

/* Changer la slide au click sur un bullet point */
let bulletPoint = document.querySelectorAll(".dot");
bulletPoint.forEach((dot , index) => {
	dot.addEventListener("click" , function() {
		console.log("vous avez appuyer sur un bullet Point");
		indexSlides = index ;
		changeBanner(indexSlides);
	})
})


/* Mettre le premier bullet Point avec la class de sélection */
let firstDot = document.querySelectorAll(".dot")[0];
firstDot.classList.add("dot_selected");