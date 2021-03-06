$('.single-slide').slick({
    slidesToScroll: 3,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    responsive:[
        {
            breakpoint: 1080,
            settings: {
                adaptiveHeight: true,
                slidesToScroll: 3,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                adaptiveHeight: true,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 425,
            settings: {
                adaptiveHeight: true,
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});

var navs = document.querySelectorAll(".item__text");
    for (var nav of navs) {
        nav.addEventListener('click', function () {
            navs.forEach(i => i.classList.remove('active'));
            this.classList.toggle('active');
        })
    }

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