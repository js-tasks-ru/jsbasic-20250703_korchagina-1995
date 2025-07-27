function initCarousel() {
  const sliderInner = document.querySelector('.carousel__inner');
  const slides = document.querySelectorAll('.carousel__slide');
  const prev = document.querySelector('.carousel__arrow_left');
  const next = document.querySelector('.carousel__arrow_right');

  const slideWidth = slides[0].offsetWidth; 
  let slideIndex = 1;
  let offset = 0;

  function updateCarousel() {
    sliderInner.style.transform = `translateX(-${offset}px)`;
    prev.style.display = slideIndex === 1 ? 'none' : 'flex';
    next.style.display = slideIndex === slides.length ? 'none' : 'flex';
  }

  updateCarousel();

  next.addEventListener('click', () => {
    if (slideIndex < slides.length) {
      offset += slideWidth;
      slideIndex++;
      updateCarousel();
    }
  });

  prev.addEventListener('click', () => {
    if (slideIndex > 1) {
      offset -= slideWidth;
      slideIndex--;
      updateCarousel();
    }
  });
}
