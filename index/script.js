
/*https://github.com/Arj15/Suvidha-Foundation.git
https://github.com/ArjB15/SuvidhaFoundation.git
*/

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

//SLIDER
document.addEventListener('DOMContentLoaded', function () {
  const prevBtns = document.querySelectorAll('.prev');
  const nextBtns = document.querySelectorAll('.next');
  const carouselContainers = document.querySelectorAll('.carousel-container');

  carouselContainers.forEach((container, index) => {
    let scrollPosition = 0;

    nextBtns[index].addEventListener('click', function () {
      const carouselSlider = container.querySelector(`.slider`);
      const slideWidth = carouselSlider.querySelector('.slide').offsetWidth;
      const maxScroll = (carouselSlider.querySelectorAll('.slide').length - 3) * slideWidth;

      scrollPosition += slideWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
      }

      carouselSlider.style.transform = `translateX(-${scrollPosition}px)`;
    });

    prevBtns[index].addEventListener('click', function () {
      const carouselSlider = container.querySelector(`.slider`);
      const slideWidth = carouselSlider.querySelector('.slide').offsetWidth;

      scrollPosition -= slideWidth;
      if (scrollPosition < 0) {
        scrollPosition = 0;
      }

      carouselSlider.style.transform = `translateX(-${scrollPosition}px)`;
    });
  });
});