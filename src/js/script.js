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

//Jquery
$().ready(function() {
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
//закриття модального вікна
$('#modal-close1').on('click', function() {
  $('#sale1, .overflow').fadeOut('slow');
  $('.navbar').fadeIn('slow');
  });
  $('#modal-close2').on('click', function() {
    $('#sale2, .overflow').fadeOut('slow');
    $('.navbar').fadeIn('slow');
    });
    $('#modal-close3').on('click', function() {
      $('#sale3, .overflow').fadeOut('slow');
      $('.navbar').fadeIn('slow');
      });
      $('#modal-close4').on('click', function() {
        $('#sale4, .overflow').fadeOut('slow');
        $('.navbar').fadeIn('slow');
        });
        $('#modal-close5').on('click', function() {
          $('#sale5, .overflow').fadeOut('slow');
          $('.navbar').fadeIn('slow');
          });
// відкриття модального вікна при натисканні кнопки придбати Коуч сесія
$('#item-card1').on('click', function() {
      //$('#sale1 .modal-sale__descr').text($('.item-card__title').eq(i).text());
      $('.overflow, #sale1').fadeIn('slow');
      $('.navbar').fadeOut('slow');
    });
   

  // відкриття модального вікна при натисканні кнопки придбати Розпаковка бажань
$('#item-card2').on('click', function() {
     // $('#sale2 .modal-sale__descr').text($('.item-card__title').eq(i).text());
      $('.overflow, #sale2').fadeIn('slow');
      $('.navbar').fadeOut('slow');
    });

// відкриття модального вікна при натисканні кнопки придбати Дрім вей
$('#item-card3').on('click', function() {
     // $('#sale3 .modal-sale__descr').text($('.item-card__title').eq(i).text());
      $('.overflow, #sale3').fadeIn('slow');
      $('.navbar').fadeOut('slow');
    });

  // відкриття модального вікна при натисканні кнопки придбати Ресурсний щоденник
$('#item-card4').on('click', function() {
     // $('#sale4 .modal-sale__descr').text($('.item-card__title').eq(i).text());
      $('.overflow, #sale4').fadeIn('slow');
      $('.navbar').fadeOut('slow');
    });
  
   // відкриття модального вікна при натисканні кнопки придбати Ретрит
$('#item-card5').on('click', function() {
     // $('#sale5 .modal-sale__descr').text($('.item-card__title').eq(i).text());
      $('.overflow, #sale5').fadeIn('slow');
      $('.navbar').fadeOut('slow');
    });

//закриття вікна консультація
$('.modal-consult__close, .modal-sale__close').on('click', function() {
    $('.overflow, #consultation, #sale1').fadeOut('slow');
    $('.navbar').fadeIn('slow');
    });
$('modal-confirm__close').on('click', function() {
    $('.overflow, #consultation, #sale, #confirm').fadeOut('slow');
    $('.navbar').fadeIn('slow');
});

 
//маска номеру телефона
$("input[name=phone]").mask("+38(999) 999-99-99");
});
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, напишіть cюди повідомлення",
                          agree : "Будь ласка, підтвердіть свою згоду",
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
                    $('.overflow, #answer').fadeIn('slow');
                    $('#sendletter').trigger('reset');
                });
               
                return false;
        });
});

// Модальне вікно консультація
    // $('#consultsend').validate({
    //           rules: {
    //             name: {
    //               required: true
    //             },
    //             comment: {
    //               required: true
    //             },
    //             phone: {
    //                 required: true
    //             }
    //         },
    //         messages: {
    //                       name: "Будь ласка, введіть своє ім'я",
    //                       comment: "Будь ласка, напишіть cюди повідомлення",
    //                       phone: "Будь ласка, введіть свій номер"
    //                     }
    // });
    // $('#consultsend').submit(function(e) {
    //             e.preventDefault();
    //             if (!$(this).valid()) {
    //                 return;
    //             }
    //             $.ajax({
    //                 type: "POST",
    //                 url: "/mailer/smart.php",
    //                 data: $(this).serialize()
    //             }).done(function(){
    //                 $(this).find("input").val("");
    //                 $('.overflow, #answer').fadeIn();
    //                 $('#consultation').fadeOut('');
    //                 $('#consultsend').trigger('reset');
    //             });
               
    //             return false;
    //     });


// форма для оплати #confirm Коуч сесія


    $('#modal-sale1').validate({
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, вкажіть зручну дату проведення",
                          phone: "Будь ласка, введіть свій номер"
                        }
    });
    $('#modal-sale1').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart1.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #confirm1').fadeIn();
                    $('#sale1, #confirm2, #confirm3, #confirm4, #confirm5').fadeOut('slow');
                    $('#modal-sale1').trigger('reset');
                });
               
                return false;
});


// форма для оплати #confirm Розпаковка бажань


    $('#modal-sale2').validate({
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, вкажіть зручну дату проведення",
                          phone: "Будь ласка, введіть свій номер"
                        }
    });
    $('#modal-sale2').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart2.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #confirm2').fadeIn();
                    $('#sale2, #confirm1, #confirm3, #confirm4, #confirm5').fadeOut('slow');
                    $('#modal-sale2').trigger('reset');
                });
               
                return false;
});

// форма для оплати #confirm Дрім вей

    $('#modal-sale3').validate({
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, вкажіть зручну дату проведення",
                          phone: "Будь ласка, введіть свій номер"
                        }
    });
    $('#modal-sale3').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart3.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #confirm3').fadeIn();
                    $('#sale3, #confirm1, #confirm2, #confirm4, #confirm5').fadeOut('slow');
                    $('#modal-sale3').trigger('reset');
                });
               
                return false;
});

// форма для оплати #confirm Ресурсний щоденник

    $('#modal-sale4').validate({
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, заповніть це поле",
                          phone: "Будь ласка, введіть свій номер"
                        }
    });
    $('#modal-sale4').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart4.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #confirm4').fadeIn();
                    $('#sale4, #confirm1, #confirm2, #confirm3, #confirm5').fadeOut('slow');
                    $('#modal-sale3').trigger('reset');
                });
               
                return false;
});

// форма для оплати #confirm Ретрит

    $('#modal-sale5').validate({
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
                          name: "Будь ласка, введіть своє ім'я",
                          comment: "Будь ласка, заповніть це поле",
                          phone: "Будь ласка, введіть свій номер"
                        }
    });
    $('#modal-sale5').submit(function(e) {
                e.preventDefault();
                if (!$(this).valid()) {
                    return;
                }
                $.ajax({
                    type: "POST",
                    url: "/mailer/smart5.php",
                    data: $(this).serialize()
                }).done(function(){
                    $(this).find("input").val("");
                    $('.overflow, #confirm5').fadeIn();
                    $('#sale5, #confirm1, #confirm2, #confirm3, #confirm4').fadeOut('slow');
                    $('#modal-sale3').trigger('reset');
                });
               
                return false;
});

  
  

