document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.giraffe');

  const checkVisibility = (image) => {
    const imageTop = image.getBoundingClientRect().top;
    const isVisible = imageTop < window.innerHeight;

    if (isVisible) {
      image.classList.add('visible');
    }
  };

  window.addEventListener('scroll', () => {
    images.forEach(checkVisibility);
  });
});




//slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}


//scroll to projects section
document.querySelector('a[href^="#"]').addEventListener('click', function (e) {
    e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
  behavior: 'smooth'
  });
});