
  const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  breakpoints: {
    // when window width is >= 660px
    660: {
      slidesPerView: 2,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


  const voiceSwiper = new Swiper('.voice-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,
  spaceBetween: 8,
  breakpoints: {
    // when window width is >= 660px
    760: {
      slidesPerView: 2,
    },
    1210: {
      slidesPerView: 3,
    },
  },
  
  // If we need pagination
  pagination: {
    el: '.voice-swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.voice-swiper-button-next',
    prevEl: '.voice-swiper-button-prev',
  },

});



