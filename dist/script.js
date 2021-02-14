"use strict";
var intro = document.getElementById("intro");
var monk = document.querySelector(".monk");
var monkText = document.querySelector(".intro-text-1");
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var sliderContainer = document.querySelector(".slider-container");
var content = document.querySelector(".content");
var slides = Array.from(content.children);
setTimeout(function showIntro() {
    intro.style.display = "none";
    arrowLeft.style.display = "none";
    sliderContainer.style.display = "block";
    slides[9].style.display = "none";
}, 3000);
var slider = document.querySelector(".slider");
var image = document.querySelector(".slide");
// Amount to move slides in px
var slideDistances = [0, 800, 1330, 2190, 3070, 3900, 4750, 5990, 5990, 6900];
var slideIndicator = 0;
var nav = document.querySelector(".nav");
var navs = Array.from(nav.children);
var navText = document.querySelector(".nav-text");
var navStep = document.getElementById("nav-step");
function moveSlides(currentSlide, targetSlide) {
    // Change step number on footer dynamically
    var navNum = navs[targetSlide].innerHTML;
    navStep.innerHTML = navNum;
    navText.classList.add("show");
    slides[9].style.display = "none";
    arrowLeft.style.display = "block";
    arrowRight.style.display = "block";
    if (targetSlide === 0) {
        arrowLeft.style.display = "none";
        navText.classList.remove("show");
    }
    if (targetSlide === 9) {
        arrowRight.style.display = "none";
        slides[9].style.display = "block";
        navText.classList.remove("show");
    }
    slides[currentSlide].classList.add("fade-out-text");
    image.style.transform = "translateX(-" + slideDistances[targetSlide] + "px)";
    slides[currentSlide].classList.remove("current");
    slides[targetSlide].classList.add("current");
    navs[currentSlide].classList.remove("current-page");
    navs[targetSlide].classList.add("current-page");
}
arrowRight.addEventListener("click", function () {
    var current = slideIndicator;
    var next = slideIndicator + 1;
    moveSlides(current, next);
    slideIndicator++;
});
arrowLeft.addEventListener("click", function () {
    var current = slideIndicator;
    var prev = slideIndicator - 1;
    moveSlides(current, prev);
    slideIndicator--;
});
nav.addEventListener("click", function (e) {
    var currentNav = navs[slideIndicator];
    var target = e.target;
    // Only target span
    var targetNav = target.closest("span");
    if (!targetNav)
        return;
    currentNav.classList.remove("current-page");
    targetNav.classList.add("current-page");
    // Update current slide number to nav that's been clicked on
    slideIndicator = navs.indexOf(targetNav);
    var currentNavIndex = navs.indexOf(currentNav);
    var targetNavIndex = navs.indexOf(targetNav);
    moveSlides(currentNavIndex, targetNavIndex);
});
