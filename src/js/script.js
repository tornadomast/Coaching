"use strict";

$(document).ready(function(){
    $('.promo__carousel').slick({
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