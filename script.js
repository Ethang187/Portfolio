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
