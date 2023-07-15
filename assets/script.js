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
	},

]

let dots = document.querySelectorAll(".dot");
const dotsParents = document.querySelector(".dots");
const imagecontainer = document.querySelector(".image_container");

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
let count = 0;

leftArrow.addEventListener('click', function() {
  count--;
  count === -1 ? count = slides.length - 1 : count;
  handleChange(count);
});

rightArrow.addEventListener('click', function() {
  count++;
  count === slides.length ? count = 0 : count;
  handleChange(count);
});

function handleChange(count) {
  imagecontainer.innerHTML = `<img src='./assets/images/slideshow/${slides[count].image}'class="banner-img"/><p>${slides[count].tagLine}</p>
  </div>`;

  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  dots[count].classList.add("dot_selected");
}

function createDots (){
	dotsParents.innerHTML=""
	slides.forEach((slides)=>{
		const dot = document.createElement("div")
		dot.classList = "dot"
		dotsParents.appendChild(dot)
	})
	dots = document.querySelectorAll(".dot");
	dots[0].classList.add("dot_selected")
}
createDots()






 

