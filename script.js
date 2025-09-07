const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  const width = images[0].clientWidth;
  carouselInner.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);