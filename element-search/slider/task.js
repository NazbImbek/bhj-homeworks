const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');

let slideCount = 0;

function active () {
    slides[slideCount].classList.add('slider__item_active');
}

function disactive () {
    slides[slideCount].classList.remove('slider__item_active');
}

prev.onclick = function() {
    disactive ();
    slideCount--;
    if (slideCount < 0) {
      slideCount = slides.length - 1;
    }
    active ();
}

next.onclick = function() {
    disactive ();
    slideCount++;
    if (slideCount > slides.length -1) {
      slideCount = 0;
    }
    active ();
}
