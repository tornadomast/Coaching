"use sctrict";
//гамбургер

const hamburger = document.querySelector('.navbar__hamburger'),
        menu = document.querySelector('.menu'),
        button1 = document.getElementById('1'),
        button2 = document.getElementById('2'),
        button3 = document.getElementById('3'),
        button4 = document.getElementById('4');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
button1.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});
button2.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});
button3.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});
button4.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
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

//закриття модалього вікна "дякую"
$('.modal__close').on('click', function() {
    $('.overflow, #answer').fadeOut('slow');
    });

//відкриття вікна консультація
$('.about-item__button').on('click', function() {
    $('.overflow, #consultation').fadeIn('slow');
    $('.navbar').fadeOut('slow');
    });

//закриття вікна консультація
$('.modal-consult__close').on('click', function() {
    $('.overflow, #consultation').fadeOut('slow');
    $('.navbar').fadeIn('slow');
    });

//маска номеру телефона
$("input[name=phone]").mask("+38(999) 999-99-99");

//слайдер
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
      $('.certificates__carousel').slick({
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
                          comment: "Напишіть cюди повідомлення",
                          agree : "Будь ласка підтвердіть свою згоду",
                          email: {
                          required: "Мені потрібна ваша пошта, щоб зв'язатись з вами",
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

$().ready(function() {
    $('#consultsend').validate({
              rules: {
                name: {
                  required: true
                },
                comment: {
                  required: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
                          name: "Будь ласка введіть своє ім'я",
                          comment: "Напишіть cюди повідомлення",
                          phone: "Будь ласка введіть свій номер"
                        }
    });
    $('#consultsend').submit(function(e) {
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
                    $('#consultation').fadeOut('slow');
                    $('#consultsend').trigger('reset');
                });
               
                return false;
        });
});


  
  

