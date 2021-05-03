const sliderItem = document.getElementsByClassName("slider__item");
const prevArrow = document.querySelector(".slider__arrow_prev");
const nextArrow = document.querySelector(".slider__arrow_next");
const slides = Array.from(sliderItem);

function addActive(number) {
    sliderItem[number].classList.add("slider__item_active");
}

function removeActive(number) {
    sliderItem[number].classList.remove("slider__item_active");
}

nextArrow.onclick = function() {
    const index = slides.findIndex(elem => elem.classList.contains("slider__item_active"));
    removeActive(index);
    if (index < slides.length - 1) {
        addActive(index + 1); 
    } else {
        addActive(0);
    }
}

prevArrow.onclick = function() {
    const index = slides.findIndex(elem => elem.classList.contains("slider__item_active"));
    removeActive(index);
    if (index > 0) {
        addActive(index - 1);
    } else {
        addActive(slides.length - 1);
    }
}