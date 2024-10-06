const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
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
  });