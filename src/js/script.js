"use sctrict";
const hamburger = document.querySelector('.navbar__hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// const detalBtn = document.querySelector('.card__detals'),
//     info = document.querySelector('.box-info__content'),
//     box = document.querySelector('.box-info__list'),
//     come = document.querySelector('.box-info__back');

// detalBtn.addEventListener('click', () => {
//     info.classList.add('active');
//     box.classList.add('active');
// });
// come.addEventListener('click', () => {
//     info.classList.remove('active');
//     box.classList.remove('active');
// });


// $('.card__detals').each(function(i) {
//     $(this).on('click', function(e) {
//         e.preventDefault();
//         $('.box-info__content').eq(i).toggleClass('box-info__content_active');
//         $('.box-info__list').eq(i).toggleClass('active');
//     });
// });
// $('.box-info__back').each(function(i) {
//     $(this).on('click', function(e) {
//         e.preventDefault();
//         $('.box-info__content').eq(i).removeClass('box-info__content_active');
//         $('.box-info__list').eq(i).removeClass('active');
//     });
// });

$('.item-card__detal').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.item-card').eq(i).toggleClass('item-card_active');
            $('.item-info').eq(i).toggleClass('active');
        });
    });
$('.item-info__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.item-card').eq(i).removeClass('item-card_active');
            $('.item-info').eq(i).removeClass('active');
        });
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
        fade: false,
        arrows: false,
        cssEase: 'linear'
      });
  });
  $(document).ready(function(){
  $('.slideshow').slick({
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow:2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow:1
            }
        }
    ]
  });
});