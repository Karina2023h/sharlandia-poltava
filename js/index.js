document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".sliade img");
  const slideCount = slides.length;

  function sliderCourt() {
    slides[currentSlide].style.display = "none"; // Приховуємо поточний слайд
    currentSlide = (currentSlide + 1) % slideCount; // Переходимо до наступного слайда
    slides[currentSlide].style.display = "block"; // Відображаємо новий слайд
  }

  // Автоматичне переключення слайдів кожні 3 секунди
  setInterval(sliderCourt, 3000);
});
