const intro = document.getElementById("intro")
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContainer = document.querySelector(".slider-container");

setTimeout(function showIntro(){
    intro.style.display = "none";
    arrowLeft.style.display = "none";
    sliderContainer.style.display = "block";
}, 1000); 

const slider = document.querySelector(".slider");
const image = document.querySelector(".slide");
const imageWidth = image.width
// Image width 12226

// Amount to move for each slide
const slideDistances = [800, 1330, 2190, 3070, 3900, 4750, 6000, 6000, 6900]
let currentSlide = 0

const page0 = document.querySelector(".content-slide0")
const page1 = document.querySelector(".content-slide1")
const page2 = document.querySelector(".content-slide2")
const page3 = document.querySelector(".content-slide3")
const page4 = document.querySelector(".content-slide4")
const page5 = document.querySelector(".content-slide5")
const page6 = document.querySelector(".content-slide6")
const page7 = document.querySelector(".content-slide7")
const page8 = document.querySelector(".content-slide8")
const page9 = document.querySelector(".content-slide9")

const nav = document.querySelector(".nav")
const navs = Array.from(nav.children)

function moveRight() {
    page0.classList.add("fade-out-text")
    if (currentSlide === 0) {
        image.style.transform = `translateX(-${slideDistances[0]}px)`
        page0.classList.remove("current")
        page1.classList.add("current")
        navs[0].classList.remove("current-page")
        navs[1].classList.add("current-page")
    }
    if (currentSlide === 1) {
        image.style.transform = `translateX(-${slideDistances[1]}px)`
        page1.classList.remove("current")
        page2.classList.add("current")
        navs[1].classList.remove("current-page")
        navs[2].classList.add("current-page")
    }
    if (currentSlide === 2) {
        image.style.transform = `translateX(-${slideDistances[2]}px)`
        page2.classList.remove("current")
        page3.classList.add("current")
        navs[2].classList.remove("current-page")
        navs[3].classList.add("current-page")
    }
    if (currentSlide === 3) {
        image.style.transform = `translateX(-${slideDistances[3]}px)`
        page3.classList.remove("current")
        page4.classList.add("current")
        navs[3].classList.remove("current-page")
        navs[4].classList.add("current-page")
    }
    if (currentSlide === 4) {
        image.style.transform = `translateX(-${slideDistances[4]}px)`
        page4.classList.remove("current")
        page5.classList.add("current")
        navs[4].classList.remove("current-page")
        navs[5].classList.add("current-page")
    }
    if (currentSlide === 5) {
        image.style.transform = `translateX(-${slideDistances[5]}px)`
        page5.classList.remove("current")
        page6.classList.add("current")
        navs[5].classList.remove("current-page")
        navs[6].classList.add("current-page")
    }
    if (currentSlide === 6) {
        image.style.transform = `translateX(-${slideDistances[6]}px)`
        page6.classList.remove("current")
        page7.classList.add("current")
        navs[6].classList.remove("current-page")
        navs[7].classList.add("current-page")
    }
    if (currentSlide === 7) {
        image.style.transform = `translateX(-${slideDistances[7]}px)`
        page7.classList.remove("current")
        page8.classList.add("current")
        navs[7].classList.remove("current-page")
        navs[8].classList.add("current-page")
    }
    if (currentSlide === 8) {
        image.style.transform = `translateX(-${slideDistances[8]}px)`
        page8.classList.remove("current")
        page9.classList.add("current")
        arrowRight.style.display = "none"
        navs[8].classList.remove("current-page")
        navs[9].classList.add("current-page")
    }
}

function moveLeft() {
    if (currentSlide === 1) {
        image.style.transform = `translateX(${0}px)`
        page1.classList.remove("current")
        page0.classList.add("current")
        arrowLeft.style.display = "none"
        navs[1].classList.remove("current-page")
        navs[0].classList.add("current-page")
    }
    if (currentSlide === 2) {
        image.style.transform = `translateX(-${slideDistances[0]}px)`
        page2.classList.remove("current")
        page1.classList.add("current")
        navs[2].classList.remove("current-page")
        navs[1].classList.add("current-page")
    }
    if (currentSlide === 3) {
        image.style.transform = `translateX(${slide4}px)`
    }
    if (currentSlide === 4) {
        image.style.transform = `translateX(${slide5}px)`
    }
    if (currentSlide === 5) {
        image.style.transform = `translateX(${slide6}px)`
    }
    if (currentSlide === 6) {
        image.style.transform = `translateX(${slide7}px)`
    }
    if (currentSlide === 7) {
        image.style.transform = `translateX(${slide8}px)`
    }
    if (currentSlide === 8) {
        image.style.transform = `translateX(${slide9}px)`
    }
}


arrowRight.addEventListener("click", () => {
    moveRight()
    arrowLeft.style.display = "block";
    currentSlide++
    console.log(currentSlide)
})


arrowLeft.addEventListener("click", () => {
    moveLeft()
    currentSlide--
    console.log(currentSlide)
})





