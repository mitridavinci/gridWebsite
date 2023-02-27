// Slider portfolio

const sliderPortfolio = document.querySelector('.slider-portefolio');
const srcEnCoursSlider = document.querySelector('.img-visible-slider');
const allPicsPortfolio = Array.from(document.querySelectorAll('.grid-item img'));

const reset = allPicsPortfolio.length - 1;

//Array .from permet de cree une chaine de caactere a travers tous ce que on peut itéré

const rightPortfolio = document.querySelector('.btn-right');
const leftPortfolio = document.querySelector('.btn-left');

const fermerSlide = document.querySelector('.btn-fermer-slider');

let photoEnCours;
let indexEnCours;

allPicsPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
        sliderPortfolio.style.display = "block";
        srcEnCoursSlider.src = e.target.src;
        photoEnCours = e.target;
        indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    })
})

rightPortfolio.addEventListener('click', () => {

    if (indexEnCours === reset) {
        indexEnCours = 0;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours + 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

leftPortfolio.addEventListener('click', () => { 
    if (indexEnCours === 0) {
        indexEnCours = reset;
        srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
        photoEnCours = allPicsPortfolio[indexEnCours];
        console.log(indexEnCours);
        return;
    }
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src;
    photoEnCours = allPicsPortfolio[indexEnCours - 1];
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
})

fermerSlide.addEventListener('click', () => { 
    sliderPortfolio.style.display = "none";
})

