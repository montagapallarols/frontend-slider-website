const intro = document.getElementById("intro")
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContainer = document.querySelector(".slider-container");
const content = document.querySelector(".content")
const slides = Array.from(content.children)

setTimeout(function showIntro() {
    intro.style.display = "none";
    arrowLeft.style.display = "none";
    sliderContainer.style.display = "block";
    slides[9].style.display = "none";
}, 1000); 

const slider = document.querySelector(".slider");
const image = document.querySelector(".slide");
// Amount to move for each slide
const slideDistances = [800, 1330, 2190, 3070, 3900, 4750, 5990, 5990, 6900]
let currentSlide = 0


const nav = document.querySelector(".nav")
const navs = Array.from(nav.children)

function moveRight() {
    if (currentSlide === 8) {
        arrowRight.style.display = "none"
        slides[9].style.display = "block"
    }
    arrowLeft.style.display = "block";
    slides[currentSlide].classList.add("fade-out-text")
    image.style.transform = `translateX(-${slideDistances[currentSlide]}px)`
    slides[currentSlide].classList.remove("current")
    slides[currentSlide + 1].classList.add("current")
    navs[currentSlide].classList.remove("current-page")
    navs[currentSlide + 1].classList.add("current-page")
}

function moveLeft() {
    slides[9].style.display = "none"
    if (currentSlide === 1) {
        image.style.transform = "translateX(0px)"
        slides[currentSlide].classList.remove("initial")
        arrowLeft.style.display = "none"
    }
    if (currentSlide === 9) {
        arrowRight.style.display = "block"
    }
    image.style.transform = `translateX(-${slideDistances[currentSlide -2]}px)`
    slides[currentSlide].classList.remove("current")
    slides[currentSlide -1].classList.add("current")
    navs[currentSlide].classList.remove("current-page")
    navs[currentSlide -1].classList.add("current-page")
}


arrowRight.addEventListener("click", () => {
    moveRight()
    currentSlide++
})


arrowLeft.addEventListener("click", () => {
    moveLeft()
    currentSlide--
})





