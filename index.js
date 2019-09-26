$('.responsive').slick({
  appendArrows: $('.controls-arrows'),
  arrows: true,
  appendDots: $('.controls-dots'),
  dots: true,
  infinite: false,
  speed: 300,
  rows: 2,
  slidesPerRow: 3,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesPerRow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        rows: 1,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
});