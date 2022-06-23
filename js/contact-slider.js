let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");


let slides = [slide1, slide2, slide3, slide4];

let currentSlideIndex = 0;

function showCurrentSlide() {
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    let loopSlide = slides[i];
    if (i !=currentSlideIndex) {
      loopSlide.style.display = "none";
    } else {
      loopSlide.style.display = "inline-block";
    }
  }
}

showCurrentSlide();

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
