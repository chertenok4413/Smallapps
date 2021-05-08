$('.single-slide').slick({
    slidesToScroll: 3,
    dots: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
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