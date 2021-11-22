$(document).ready(function(){
	$('.service-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:5000,
        responsive:[
			{
				breakpoint: 1230,
				settings: {
					slidesToShow:3,
		            dots:false,
                    arrows:true,
				},
				breakpoint: 600,
				settings: {
					slidesToShow:1,
		            dots:true,
                    arrows:false,
				}
			}
		]
	});
});