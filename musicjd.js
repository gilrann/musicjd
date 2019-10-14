$('.history__slides').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: false,
 asNavFor: '.history__nav'
});

$('.history__nav').slick({
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.history__slides',
 centerMode: true,
 infinite: true,
 focusOnSelect: true,
 responsive: [
	    {
	      breakpoint: 1440,
	      settings: {
	        slidesToShow: 3,
          centerMode: true,
          infinite: false
	                 }
	    },

	    {
	      breakpoint: 990,
	      settings: {
	        slidesToShow: 1,
          centerMode: true,
          infinite: false
	                 }
	    }

    ]

});
