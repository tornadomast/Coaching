"use sctrict";
const hamburger = document.querySelector('.navbar__hamburger'),
        menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

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

   //закриття модалього вікна
$('.modal__close').on('click', function() {
    $('.overflow, #answer').fadeOut('slow');
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
      $('.slideshow').slick({
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:[
            {
                breakpoint: 770,
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
  
  //Validation form
$().ready(function() {
    $('#sendletter').validate({
              rules: {
                name: {
                  required: true
                },
                comment: {
                  required: true
                },
                email: {
                    required: true,
                    email: true
                },
                agree: {
                    required: true,
                    aria: false
                }
            },
            messages: {
                          name: "Будь ласка введіть своє ім'я",
                          comment: "Напишіть cюди щось..",
                          agree : "будь ласка підтвердіть свою згоду",
                          email: {
                          required: "Нам потрібна ваша пошта, щоб зв'язатись з вами",
                          email: "Введіть правильну поштову адресу"
                          }
                        }
    });
    $('#sendletter').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #answer').fadeIn();
                    $('#sendletter').trigger('reset');
                });
               
                return false;
        });
});
  
  

