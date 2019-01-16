$(function() {

    $('.language-select').click(function(){
        $(this).toggleClass('open');
    })
    $('.language-select li').click(function(){
        $('.language-select li').removeClass('active');
        $(this).toggleClass('active');
    })

    var date = new Date();
    var time = date.getHours();

    if (time < 9 || time > 18 ){
        $('.call-me i').addClass('offline');
        $('.call-me .tel').addClass('hide');
        $('.call-me .mail').addClass('show');
    } else{
        $('.call-me .tel').removeClass('hide');
        $('.call-me .mail').removeClass('show');
    }

    $('.basket').on('click', function(){
        $('.window').toggleClass('active');
    })

    $('.carusel-1').owlCarousel({
        items: 1,
        loop: true,
        margin: 60,
        nav: true
    })

    $(window).resize(function() {
        if($(window).width() <= 1024) {
            $('.section-1 .advantages .item').css('width', '80%');
            $('.advantages').owlCarousel({
                items: 3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2000,
                responsive:{
                    320:{
                        items: 1
                    },
                    768:{
                        items: 2
                    },
                    1024:{
                        items: 3
                    },
                }
            })
        }
    });

    $(".category .items").on("click", ".item:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest(".section-3")
          .find(".tab-content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });

      $('.carusel-2').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: true,
        responsive:{
            320:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            },
            1366:{
                items: 5
            }
        }
    })
    $('.carusel-3').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive:{
            320:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            },
            1366:{
                items: 5
            }
        }
    })
    $('.carusel-4').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: true,
        responsive:{
            320:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            },
            1366:{
                items: 5
            }
        }
    })
    $('.carusel-5').owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: true,
        responsive:{
            320:{
                items: 1
            },
            600:{
                items: 2
            },
            768:{
                items: 3
            },
            1024:{
                items: 4
            },
            1366:{
                items: 5
            }
        }
    })
});