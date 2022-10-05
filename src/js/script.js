"use sctrict";
const hamburger = document.querySelector('.navbar__hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
menu.addEventListener('click', () => {
    menu.classList.remove('active')
});

$(document).ready(function(){
    $('.slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        speed: 700,
        fade: true,
        arrows: false,
        adaptiveHeight: true,
        cssEase: 'linear'
      });
  });