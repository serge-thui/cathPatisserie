/* js du carousel */
const slider = document.querySelector('.items');
const slides = slider.querySelectorAll('.item');
const nbSlide = slides.length;

const button = document.querySelectorAll(".button");
console.log(slides);

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}



const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(nbSlide-1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current -1 ;
    next = current +1 ;

    

    for (let i=0; i < nbSlide; i++){
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}