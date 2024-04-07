const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 10000); // Start the slideshow with a 10-second interval
  }

function changeSlide(newSlide) {
    slides[currentSlide].classList.remove('active');
    slides[newSlide].classList.add('active');
    currentSlide = newSlide;
  
    // Update the active state of the dots
    dots.forEach((dot, index) => {
      if (index === newSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    let newSlide = currentSlide + 1;
    if (newSlide >= slides.length) {
      newSlide = 0;
    }
    changeSlide(newSlide);
  
    // Reset the interval
    clearInterval(slideInterval);
    startSlideShow();
  }

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    changeSlide(index);
  });
});

document.querySelector('.slider-container').addEventListener('click', nextSlide);

// Start the slideshow initially
startSlideShow();
