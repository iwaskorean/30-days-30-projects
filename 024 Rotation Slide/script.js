const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

slider.addEventListener('animationstart', () => {
  setInterval(changeSlide, 2000);
});

let activeIndex = 0;

function changeSlide() {
  slides[activeIndex].classList.remove('visible');

  activeIndex++;

  if (activeIndex >= slides.length) {
    activeIndex = 0;
  }

  slides[activeIndex].classList.add('visible');
}
