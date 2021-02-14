const intro = document.getElementById("intro") as HTMLDivElement;
const monk = document.querySelector(".monk") as HTMLImageElement;
const monkText = document.querySelector(
  ".intro-text-1"
) as HTMLParagraphElement;
const arrowLeft = document.getElementById("arrow-left") as HTMLDivElement;
const arrowRight = document.getElementById("arrow-right") as HTMLDivElement;
const sliderContainer = document.querySelector(
  ".slider-container"
) as HTMLDivElement;
const content = document.querySelector(".content") as HTMLDivElement;
const slides = Array.from(content.children) as Array<HTMLElement>;

setTimeout(function showIntro() {
  intro.style.display = "none";
  arrowLeft.style.display = "none";
  sliderContainer.style.display = "block";
  slides[9].style.display = "none";
}, 3000);

const slider = document.querySelector(".slider") as HTMLDivElement;
const image = document.querySelector(".slide") as HTMLImageElement;
// Amount to move slides in px
const slideDistances = [0, 800, 1330, 2190, 3070, 3900, 4750, 5990, 5990, 6900];
let slideIndicator = 0;

const nav = document.querySelector(".nav") as HTMLDivElement;
const navs = Array.from(nav.children) as Array<HTMLSpanElement>;
const navText = document.querySelector(".nav-text") as HTMLDivElement;
const navStep = document.getElementById("nav-step") as HTMLSpanElement;

function moveSlides(currentSlide: number, targetSlide: number) {
  const navNum = navs[targetSlide].innerHTML;
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
  image.style.transform = `translateX(-${slideDistances[targetSlide]}px)`;
  slides[currentSlide].classList.remove("current");
  slides[targetSlide].classList.add("current");

  navs[currentSlide].classList.remove("current-page");
  navs[targetSlide].classList.add("current-page");
}

arrowRight.addEventListener("click", () => {
  const current = slideIndicator;
  const next = slideIndicator + 1;
  moveSlides(current, next);
  slideIndicator++;
});

arrowLeft.addEventListener("click", () => {
  const current = slideIndicator;
  const prev = slideIndicator - 1;
  moveSlides(current, prev);
  slideIndicator--;
});

nav.addEventListener("click", (e: Event) => {
  const currentNav = navs[slideIndicator];
  const target = e.target as HTMLDivElement;
  // Only target span
  const targetNav = target.closest("span");
  if (!targetNav) return;

  currentNav.classList.remove("current-page");
  targetNav.classList.add("current-page");
  // Update current slide number to nav that's been clicked on
  slideIndicator = navs.indexOf(targetNav);

  const currentNavIndex = navs.indexOf(currentNav);
  const targetNavIndex = navs.indexOf(targetNav);

  moveSlides(currentNavIndex, targetNavIndex);
});
