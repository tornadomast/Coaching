"use sctrict";
const hamburger = document.querySelector('.navbar__hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});


$(document).ready(function(){
    $('.slider__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        speed: 300,
        fade: true,
        arrows: false,
        adaptiveHeight: true,
        cssEase: 'linear'
      });
  });