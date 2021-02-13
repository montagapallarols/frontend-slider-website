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
// Amount to move slides
const slideDistances = [0, 800, 1330, 2190, 3070, 3900, 4750, 5990, 5990, 6900]
let slideIndicator = 0

const nav = document.querySelector(".nav")
const navs = Array.from(nav.children)
const navText = document.querySelector(".nav-text")
const navStep = document.getElementById("nav-step")


function moveSlides(currentSlide, targetSlide) {
    const navNum = navs[targetSlide].innerHTML
    navStep.innerHTML = navNum
   
    navText.classList.add("show")
    slides[9].style.display = "none"
    arrowLeft.style.display = "block"
    arrowRight.style.display = "block"
    if (targetSlide === 0) {
        arrowLeft.style.display = "none"
        navText.classList.remove("show")
    }
    if (targetSlide === 9) {
        arrowRight.style.display = "none"
        slides[9].style.display = "block"
        navText.classList.remove("show")
    }
    slides[currentSlide].classList.add("fade-out-text")
    image.style.transform = `translateX(-${slideDistances[targetSlide]}px)`
    slides[currentSlide].classList.remove("current")
    slides[targetSlide].classList.add("current")

    navs[currentSlide].classList.remove("current-page")
    navs[targetSlide].classList.add("current-page")
}

arrowRight.addEventListener("click", () => {
    const current = slideIndicator
    const next = slideIndicator + 1
    moveSlides(current, next)
    slideIndicator++
})

arrowLeft.addEventListener("click", () => {
    const current = slideIndicator
    const prev = slideIndicator - 1
    moveSlides(current, prev)
    slideIndicator--
})

nav.addEventListener("click", (e) => {
    const currentNav = navs[slideIndicator]
    // Only target span
    const targetNav = e.target.closest("span")
    if (!targetNav) return

    currentNav.classList.remove("current-page")
    targetNav.classList.add("current-page")
    // Update current slide number to nav that's been clicked on
    slideIndicator = navs.indexOf(targetNav)
    
    const currentNavIndex = navs.indexOf(currentNav)
    const targetNavIndex = navs.indexOf(targetNav)

    moveSlides(currentNavIndex, targetNavIndex)
})





