document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".sliade img");
  const slideCount = slides.length;

  function sliderCourt() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].style.display = "block";
  }

  setInterval(sliderCourt, 2000);
});
