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

document.getElementById("btn_clear").onclick = function(e) {
    document.getElementById("text_btn").value = "";
};

var buttons = document.querySelectorAll(".heading__one");

	for (var button of buttons) {
	   button.addEventListener('click', function () {
	     buttons.forEach(i => i.classList.remove('active__one'));
	   
	     this.classList.toggle('active__one');
	   });
	};