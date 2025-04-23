(function ($) {

  "use strict";


  var initSearch = function () {
    $(".user-items .search-item").click(function () {
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function () {
      $(".search-box").toggleClass('active');
    });

  };


  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  var initSlider = function () {

    var review_swiper = new Swiper(".review-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });


    var swiper_carousel = new Swiper(".swiper-carousel", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    var review_swiper2 = new Swiper(".review-swiper2", {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });

    var swiper_carousel2 = new Swiper(".swiper-carousel2", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
    

    var swiper_slideshow = new Swiper(".swiper-slideshow", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      loop: true,
      navigation: {
        nextEl: '.swiper-slideshow .swiper-right',
        prevEl: '.swiper-slideshow .swiper-left',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  };

  // document ready
  $(document).ready(function () {
    initSearch();
    initSlider();
    initChocolat();

  }); // document ready

})(jQuery);