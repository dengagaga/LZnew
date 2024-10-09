const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
        nextEl: ".swiper-but-next",
        prevEl: ".swiper-but-prev",
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
        }
    }
  });